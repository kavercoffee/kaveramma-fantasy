export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

// OAuth disabled - using custom authentication
export const getLoginUrl = () => {
  return "/login";
};

// Restricted states in India for fantasy cricket
export const RESTRICTED_STATES = [
  "Andhra Pradesh",
  "Assam",
  "Nagaland",
  "Odisha",
  "Sikkim",
  "Telangana",
];

// All Indian states for dropdown
export const INDIAN_STATES = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

// Company information
export const COMPANY_INFO = {
  name: "KAVERAMMA COFFEE CURING WORKS PRIVATE LIMITED",
  brandName: "Kaveramma Fantasy Cricket",
  tagline: "Fantasy Cricket for Everyone",
  domain: "kaverammafantasy.com",
  cin: "U10792KA2024PTC186508",
  pan: "AAKCK9076B",
  tan: "BLRK29132F",
  address: "C/O S K MOHAN, MEKOOR, SIDDAPURA, Pollibetta, Virajpet, Kodagu- 571215, Karnataka",
};

// Legal disclaimer
export const LEGAL_DISCLAIMER = 
  "Legal Disclaimer: This platform is NOT available in Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim. Only users 18 years and older are permitted. This is a skill-based, free-to-play platform with no real money involved."
