import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  Grid, 
  Typography, 
  Box, 
  Theme, 
  ThemeProvider, 
  createTheme, 
  CssBaseline,
  IconButton,
  Fab
} from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import { Helmet } from "react-helmet";
import { Footer, GlobalSearch, Link, NavBar, usePermissions } from "ui";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faChevronDown,
  faDownload,
  faLaptopCode,
  faQuestionCircle,
  faFileAlt,
  faCommentDots,
  faSquare,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { getConfig } from "@ot/config";
import {
  appTitle,
  appDescription,
  appCanonicalUrl,
  externalLinks,
  mainMenuItems,
} from "@ot/constants";
import HomeBox from "./HomeBox";
import Splash from "./Splash";
import Version from "./Version";
import HomePageSuggestions from "./HomePageSuggestions";
import SearchSuggestionsLegend from './SearchSuggestionsLegend';
const config = getConfig();

// Theme Context
interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
});

export const useThemeMode = () => useContext(ThemeContext);

// Custom theme creation
const createCustomTheme = (isDarkMode: boolean) => {
  const baseTheme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: isDarkMode ? '#4f46e5' : '#3f51b5', // Indigo theme
        dark: isDarkMode ? '#3730a3' : '#303f9f',
        light: isDarkMode ? '#6366f1' : '#7986cb',
      },
      secondary: {
        main: isDarkMode ? '#ec4899' : '#f50057', // Pink accent
        dark: isDarkMode ? '#be185d' : '#c51162',
        light: isDarkMode ? '#f472b6' : '#ff5983',
      },
      background: {
        default: isDarkMode ? '#0f172a' : '#f8fafc', // Slate backgrounds
        paper: isDarkMode ? '#1e293b' : '#ffffff',
      },
      text: {
        primary: isDarkMode ? '#f1f5f9' : '#1e293b',
        secondary: isDarkMode ? '#94a3b8' : '#64748b',
      },
      divider: isDarkMode ? '#334155' : '#e2e8f0',
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h4: {
        fontWeight: 600,
        letterSpacing: '-0.025em',
      },
      subtitle1: {
        fontWeight: 500,
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 500,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
    },
  });

  return baseTheme;
};

const useStyles = makeStyles<Theme>((theme) => ({
  links: {
    marginTop: "12px",
  },
  api: {
    marginTop: "38px",
  },
  dataPolicy: {
    padding: "16px",
    marginTop: "30px",
    border: "2px solid",
    borderColor: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.mode === 'dark' 
      ? 'rgba(79, 70, 229, 0.1)' 
      : 'rgba(63, 81, 181, 0.05)',
  },
  helpBoxPanel: {
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    padding: '16px',
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: theme.palette.mode === 'dark'
        ? '0 10px 25px rgba(0, 0, 0, 0.3)'
        : '0 10px 25px rgba(0, 0, 0, 0.1)',
    },
  },
  scrollButton: {
    height: "0px",
    marginTop: "-1em",
    filter: "drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.3))",
    cursor: "pointer",
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  themeToggle: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: 1000,
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));

// Theme Provider Component
function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('trialpredict-theme');
    return saved ? JSON.parse(saved) : false;
  });

  const toggleTheme = () => {
    setIsDarkMode((prev: boolean) => {
      const newMode = !prev;
      localStorage.setItem('trialpredict-theme', JSON.stringify(newMode));
      return newMode;
    });
  };

  const theme = createCustomTheme(isDarkMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

// Theme Toggle Button Component
function ThemeToggleButton(): JSX.Element {
  const { isDarkMode, toggleTheme } = useThemeMode();
  const classes = useStyles();

  return (
    <IconButton
      onClick={toggleTheme}
      className={classes.themeToggle}
      aria-label="Toggle theme"
      size="small"
    >
      <FontAwesomeIcon 
        icon={isDarkMode ? faSun : faMoon} 
        size="sm"
      />
    </IconButton>
  );
}

function AboutPPP(): JSX.Element {
  return (
    <>
      <Typography paragraph>
        The TrialPredict Partner Preview Platform is an extension of the TrialPredict Platform, a
        comprehensive tool that supports systematic identification and prioritisation of potential
        therapeutic drug targets.
      </Typography>

      <Typography paragraph>
        Combining publicly available datasets with pre-publication data generated by the consortium,
        the Partner Preview Platform builds and scores target-disease associations to assist in drug
        target identification and prioritisation. It also integrates relevant annotation information
        about targets, diseases, phenotypes, and drugs, as well as their most relevant
        relationships.
      </Typography>

      <Typography paragraph>
        The Partner Preview version of the TrialPredict Platform is only available to members of the
        TrialPredict consortium. It is actively maintained with regular data updates. Data is
        available through an intuitive user interface, and a partner-specific API which includes the
        pre-publication data. The public data is available through data downloads, while
        pre-publication data can be requested through the intranet (home.opentargets.org). The
        pipeline and infrastructure codebases are open-source and the licence allows the creation of
        self-hosted private instances of the Platform with custom data.
      </Typography>
    </>
  );
}

function AboutPublic(): JSX.Element {
  return (
    <>
      <Typography paragraph>
        The TrialPredict Platform is a comprehensive tool that supports systematic identification
        and prioritisation of potential therapeutic drug targets.
      </Typography>

      <Typography paragraph>
        By integrating publicly available datasets including data generated by the TrialPredict
        consortium, the Platform builds and scores target-disease associations to assist in drug
        target identification and prioritisation. It also integrates relevant annotation information
        about targets, diseases or phenotypes, variants, GWAS studies and drugs, as well as their
        most relevant relationships.
      </Typography>

      <Typography paragraph>
        The Platform is a freely available resource that is actively maintained with quarterly data
        updates. Data is available through an intuitive user interface, an API, and data downloads.
        The pipeline and infrastructure codebases are open-source and the licence allows the
        creation of self-hosted private instances of the Platform with custom data.
      </Typography>
    </>
  );
}

interface HelpBoxPanelProps {
  fai: IconDefinition;
  url: string;
  label: string;
  external?: boolean;
}

function HelpBoxPanel({ fai, url, label, external = false }: HelpBoxPanelProps): JSX.Element {
  const theme: Theme = useTheme();
  const classes = useStyles();

  return (
    <Box
      className={classes.helpBoxPanel}
      sx={{
        maxWidth: { md: "150px", xs: "200px" },
      }}
    >
      <Link to={url} external={external}>
        <Box sx={{ gap: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div className="fa-layers fa-fw fa-6x">
            <FontAwesomeIcon 
              icon={faSquare} 
              color={theme.palette.primary.main}
            />
            <FontAwesomeIcon 
              icon={fai} 
              transform="shrink-8" 
              color={theme.palette.primary.contrastText}
            />
          </div>
          <Typography 
            align="center" 
            variant="subtitle1" 
            component="div"
            sx={{ 
              color: theme.palette.text.primary,
              fontWeight: 500 
            }}
          >
            {label}
          </Typography>
        </Box>
      </Link>
    </Box>
  );
}

function HomePageContent(): JSX.Element {
  const { isPartnerPreview } = usePermissions();
  const releaseNotesURL = isPartnerPreview
    ? "http://home.opentargets.org/ppp-release-notes"
    : "https://platform-docs.opentargets.org/release-notes";
  const classes = useStyles();
  const theme = useTheme();

  const handleScrollDown = (): void => {
    window.scrollTo({ top: window.innerHeight, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <Helmet title={appTitle}>
        <meta name="description" content={appDescription} />
        <link rel="canonical" href={appCanonicalUrl} />
      </Helmet>
      
      <ThemeToggleButton />
      
      <Grid container justifyContent="center" alignItems="center" className={classes.hpSection}>
        <Splash />
        <NavBar name="platform" homepage items={mainMenuItems} placement="bottom-end" />
        <HomeBox>
          <GlobalSearch isHomePage />
          {/* Search examples */}
          <HomePageSuggestions />
          <SearchSuggestionsLegend />
          <Version releaseNotesURL={releaseNotesURL} />
        </HomeBox>

        {/* scroll down button */}
        <Grid container justifyContent="center">
          <div
            className={`fa-layers fa-fw fa-3x ${classes.scrollButton}`}
            onClick={handleScrollDown}
          >
            <FontAwesomeIcon 
              icon={faCircle} 
              color={theme.palette.background.paper}
            />
            <FontAwesomeIcon 
              icon={faChevronDown} 
              transform="shrink-4" 
              color={theme.palette.text.primary}
            />
          </div>
        </Grid>
      </Grid>

      {/* About */}
      <Grid container justifyContent="center" sx={{ my: 10 }}>
        <Grid item xs={10} md={8} sx={{ my: 2 }}>
          <Typography 
            variant="h4" 
            component="h1" 
            align="center" 
            paragraph 
            mb={5}
            sx={{ 
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 600,
            }}
          >
            About the TrialPredict Platform
          </Typography>
          {isPartnerPreview ? <AboutPPP /> : <AboutPublic />}
        </Grid>
      </Grid>

      {/* Get started */}
      <Grid 
        container 
        justifyContent="center" 
        sx={{ 
          mb: 18,
          background: theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(236, 72, 153, 0.1))'
            : 'linear-gradient(135deg, rgba(63, 81, 181, 0.05), rgba(245, 0, 87, 0.05))',
          py: 8,
          borderRadius: '24px',
          mx: 2,
        }}
      >
        <Grid item xs={10} md={8}>
          <Typography 
            variant="h4" 
            component="h1" 
            align="center" 
            paragraph 
            mb={5}
            sx={{ 
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 600,
            }}
          >
            Get started with the Platform
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: { xs: 5, md: 1 },
              alignItems: { xs: "center", md: "flex-start" },
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
          >
            <HelpBoxPanel
              fai={faDownload}
              url="/downloads"
              label="Download all of our open datasets"
            />

            <HelpBoxPanel
              fai={faLaptopCode}
              url="/api"
              label="Access data with our GraphQL API"
              external
            />

            <HelpBoxPanel
              fai={faQuestionCircle}
              url="https://platform-docs.opentargets.org/"
              label="Check out our Platform documentation"
              external
            />

            <HelpBoxPanel
              fai={faFileAlt}
              url="https://platform-docs.opentargets.org/citation"
              label="Read our latest Platform publications"
              external
            />

            <HelpBoxPanel
              fai={faCommentDots}
              url="https://community.opentargets.org/"
              label="Join the TrialPredict Community"
              external
            />
          </Box>
        </Grid>
      </Grid>

      <Footer externalLinks={externalLinks} />
    </>
  );
}

function HomePage(): JSX.Element {
  return (
    <ThemeProviderWrapper>
      <HomePageContent />
    </ThemeProviderWrapper>
  );
}

export default HomePage;