// Configuration Object
var configProfile = {
  /* general items */

  documentationUrl: "",
  helpdeskEmail: '',
  communityUrl: '',
  communityTicketUrl:
    '',
  // config navbar main menu (hamburger)
  // mainMenuItems: [],
  // homepage logo subtitle (tagline)
  otLogoTagline: 'Beta',

  /* colors */

  // primaryColor: '#2f7bb5',
  primaryColor: '#88c9bf',   // soft green
  secondaryColor: '#a3c4f3',
  // custom colour scale: override value in constants.js
  colorRange: [
    '#e6f4f1', // very light mint
    '#cceae3', 
    '#b3dfd5',
    '#99d5c7',
    '#80cab9',
    '#a9d1e8', // soft transition to blue
    '#90bfe1',
    '#77adda',
    '#5e9bd3',
    '#4589cc'  // soft but deeper blue
  ],
  

  /* partner preview options */

  // main flag to toggle partner preview on/off
  isPartnerPreview: true,

  // Page specific sections:
  // hide[Page]SectionsIds: hide the specified sections (comma separated ids, no spaecs, e.g. 'bibliography,otProjects')
  // or leave as empty string to show all sections (all public sections, private sections depending on settings)
  //
  // partner[Page]SectionIds: specify the private widget on this page

  // disease page
  hideDiseaseSectionIds: [''],
  partnerDiseaseSectionIds: ['otProjects'],

  // target page
  hideTargetSectionIds: [''],
  partnerTargetSectionIds: [''],

  // drug page
  hideDrugSectionIds: [''],
  partnerDrugSectionIds: [''],

  // evidence page
  hideEvidenceSectionIds: [''],
  partnerEvidenceSectionIds: ['encore', 'ot_crispr', 'ot_crispr_validation'],

  // datatypes
  hideDataTypes: [''],
  partnerDataTypes: ['ot_partner', 'ot_validation_lab'],

  // for datasources we only set those that are private (partner)
  // partnerDataSources: list any private datasource (shown with lock in facets)
  partnerDataSources: ['encore', 'ot_crispr', 'ot_crispr_validation'],
};
