import {
    faChartBar,
    faDna,
    faMapPin,
    faPrescriptionBottleMedical,
    faStethoscope,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { Box, Typography } from "@mui/material";
  import { styled } from "@mui/styles";
  
  const LegendContainer = styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    marginTop: '16px',
    justifyContent: 'center',
  });
  
  const LegendChip = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: theme.palette.grey[200],
    borderRadius: '20px',
    padding: '8px 16px',
    fontSize: '12px',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
  }));
  
  const IconContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '16px',
    height: '16px',
  });
  
  function SearchSuggestionsLegend() {
    return (
      <Box>
        <Typography variant="h6" sx={{ textAlign: 'center', mt: 2, fontWeight: 'bold' }}>
          Search Suggestions
        </Typography>
        <LegendContainer>
        <LegendChip>
          <IconContainer>
            <FontAwesomeIcon icon={faDna} />
          </IconContainer>
          <Typography variant="body2" sx={{ fontSize: '12px', fontWeight: 'bold' }}>
            Target
          </Typography>
        </LegendChip>
        
        <LegendChip>
          <IconContainer>
            <FontAwesomeIcon icon={faStethoscope} />
          </IconContainer>
          <Typography variant="body2" sx={{ fontSize: '12px', fontWeight: 'bold' }}>
            Disease
          </Typography>
        </LegendChip>
        
        <LegendChip>
          <IconContainer>
            <FontAwesomeIcon icon={faPrescriptionBottleMedical} />
          </IconContainer>
          <Typography variant="body2" sx={{ fontSize: '12px', fontWeight: 'bold' }}>
            Drug
          </Typography>
        </LegendChip>
        
        <LegendChip>
          <IconContainer>
            <FontAwesomeIcon icon={faMapPin} />
          </IconContainer>
          <Typography variant="body2" sx={{ fontSize: '12px', fontWeight: 'bold' }}>
            Variant
          </Typography>
        </LegendChip>
        
        <LegendChip>
          <IconContainer>
            <FontAwesomeIcon icon={faChartBar} />
          </IconContainer>
          <Typography variant="body2" sx={{ fontSize: '12px', fontWeight: 'bold' }}>
            Study
          </Typography>
        </LegendChip>
      </LegendContainer>
      </Box>
    );
  }
  
  export default SearchSuggestionsLegend;