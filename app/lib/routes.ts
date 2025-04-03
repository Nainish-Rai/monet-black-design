/**
 * Application route definitions
 */

// Base routes
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  CASE_STUDIES: "/case-studies",
};

// Case study routes
export const CASE_STUDY_ROUTES = {
  // Traditional Case Studies
  STARBUCKS: "/case-studies/starbucks",
  ZOMATO: "/case-studies/zomato",
  SWIGGY: "/case-studies/swiggy",

  // Monet-specific Case Studies
  BANKING_LOYALTY: "/case-studies/banking-loyalty",
  CLOUD_SERVICE: "/case-studies/cloud-service",
  GROUP_LOYALTY: "/case-studies/group-loyalty",
  RETAIL_LOYALTY: "/case-studies/retail-loyalty",
};

// Get case study route by slug
export const getCaseStudyRoute = (slug: string): string => {
  return `${ROUTES.CASE_STUDIES}/${slug}`;
};

// Get all available case study slugs
export const getCaseStudySlugs = (): string[] => {
  return [
    "starbucks",
    "zomato",
    "swiggy",
    "banking-loyalty",
    "cloud-service",
    "group-loyalty",
    "retail-loyalty",
  ];
};

// Check if a slug is valid
export const isValidCaseStudySlug = (slug: string): boolean => {
  return getCaseStudySlugs().includes(slug);
};
