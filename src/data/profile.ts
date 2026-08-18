import profilePhoto from "@/assets/images/profile.png";

// Edit this file with your real details.
export const profile = {
  name: "Talha Ahmed",
  tagline: "Full-Stack Developer",
  status: {
    role: "Full-stack developer",
    dayJob: "Technical Associate @ Payback",
    location: "Lahore, Pakistan",
    learning: "Docker · Kubernetes · CI/CD",
    target: "Cloud Security / DevSecOps",
  },
  bioLead: [
    { text: "I'm a full-stack developer working at the intersection of " },
    { text: "web development", bold: true },
    { text: ", " },
    { text: "cloud infrastructure", bold: true },
    { text: ", and " },
    { text: "cybersecurity", bold: true },
    { text: "." },
  ],
  bioParagraphs: [
    "I build complete products, from backend logic to the interface, and I test and deploy them myself so I actually know they work once they're live.",
    "Outside of client work, I'm hands-on with Docker, Kubernetes, and CI/CD pipelines, working toward cloud security and DevSecOps.",
  ],
  interests: ["Full-Stack Development", "Cloud Infrastructure", "DevOps & CI/CD", "Cybersecurity"],
  statusLine: "Learning DevSecOps",
  // TODO: replace with your real email — shown in the footer as a mailto: link
  email: "talhxhmed10@gmail.com",
  // TODO: replace with your GitHub profile URL
  github: "https://github.com/talharajput302",
  // TODO: replace with your LinkedIn profile URL
  linkedin: "https://www.linkedin.com/in/talha-ahmed007",
  photo: profilePhoto as string | null,
};
