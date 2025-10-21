export interface SocialLink {
  name: string;
  url: string;
  icon: string; // Icon name from react-icons
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "FaGithub",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourprofile",
    icon: "FaLinkedin",
  },
  {
    name: "Facebook",
    url: "https://facebook.com/yourprofile",
    icon: "FaFacebook",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourhandle",
    icon: "FaTwitter",
  },
];
