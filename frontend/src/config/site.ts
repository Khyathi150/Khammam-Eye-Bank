// Central configuration for the Khammam Eye Bank website.
// Update environment-driven values in .env (see .env.example).

export const siteConfig = {
  orgName: 'The Khammam Eye Bank',
  tagline: 'Give the Gift of Sight – Let Your Eyes Live On',
  yearEstablished: 2001,
  email: 'thekhammameyebank@gmail.com',
  phones: {
    emergency: ['9397191919', '9133701919']
  },
  address: {
    line1: 'H.No. 9-7-78, Kaman Bazar, Khammam, Telangana, India',
    line2: 'GGH, Khammam'
  },
  mapCoordinates: {
    lat: Number(import.meta.env.VITE_GOOGLE_MAPS_LAT ?? 17.24172),
    lng: Number(import.meta.env.VITE_GOOGLE_MAPS_LNG ?? 80.116357)
  },
  officeHours: '24×7 eye donation emergency response availability',
  registrationFormUrl:
    import.meta.env.VITE_EYE_DONATION_FORM_URL ?? 'https://forms.gle/REPLACE_WITH_GOOGLE_FORM_ID',
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8000/api',
  social: {
    facebook: '#',
    instagram: '#',
    youtube: '#'
  }
} as const;

// Feature flags controlling hidden/unfinished pages.
// Flip to true once verified content is available.
export const featureFlags = {
  showResearch: false,
  showCareers: false,
  showGallery: false
} as const;

export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export const primaryNav: NavItem[] = [
  { label: 'nav.home', path: '/' },
  { label: 'nav.about', path: '/about' },
  {
    label: 'nav.services',
    path: '/services',
    children: [
      { label: 'nav.servicesAll', path: '/services' },
      { label: 'nav.resources', path: '/resources' }
    ]
  },
  { label: 'nav.publicHealth', path: '/public-health' },
  { label: 'nav.education', path: '/education' },
  { label: 'nav.partners', path: '/partners' },
  { label: 'nav.contact', path: '/contact' }
];

export const footerLinks = {
  quickLinks: primaryNav,
  policies: [
    { label: 'footer.privacyPolicy', path: '/contact' },
    { label: 'footer.termsOfUse', path: '/contact' }
  ]
};
