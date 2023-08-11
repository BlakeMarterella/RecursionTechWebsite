export interface designPhase {
  id: number; // The current phase number (starts at 1)
  name: string;
  icon: string;
  description: string;
  key_features?: string[];
}

/**
 * Define the keyphases
 */
export const designPhases: designPhase[] = [
  {
    id: 1,
    name: "Blueprinting the Vision",
    icon: "https://firebasestorage.googleapis.com/v0/b/recursion-tech-llc-website.appspot.com/o/assets%2Fphase1_icon.png?alt=media&token=d307a37a-5836-42ef-b670-257e96ed7dcf",
    description:
      "This stage involves understanding the client's needs, conducting market research, researching and designing the project based on the client's specifications, and defining potential use cases.",
    key_features: [
      "Understand client's needs",
      "Market Research",
      "Research and Design",
      "Use Cases",
    ],
  },
  {
    id: 2,
    name: "Mapping the Journey",
    icon: "https://firebasestorage.googleapis.com/v0/b/recursion-tech-llc-website.appspot.com/o/assets%2Fphase2_icon.png?alt=media&token=63c6a125-f40c-4772-a993-c22dae9f3975",
    description:
      "This phase is all about designing the user experience, mapping out detailed features, setting up project management, and finalizing the Statement of Work.",
    key_features: [
      "User experience workflow",
      "Detailed feature mapping",
      "User stories and project management setup",
      "Statement of Work",
    ],
  },
  {
    id: 3,
    name: "Architecting the Solution",
    icon: "https://firebasestorage.googleapis.com/v0/b/recursion-tech-llc-website.appspot.com/o/assets%2Fphase3_icon.png?alt=media&token=053710cd-02aa-4515-840a-efce6df63e3d",
    description:
      "This stage includes building the technical roadmap, choosing the tech stack, designing the backend, setting up cloud architecture, detailing user stories, and templating documentation.",
    key_features: [
      "Technical Roadmap (up to 6 months out)",
      "Tech Stack",
      "Backend Design",
      "Cloud Architecture",
      "Detailed User Stories",
      "Template of documentation",
    ],
  },
  {
    id: 4,
    name: "Constructing the Infrastructure",
    icon: "https://firebasestorage.googleapis.com/v0/b/recursion-tech-llc-website.appspot.com/o/assets%2Fphase4_icon.png?alt=media&token=4b3bf333-d7b2-4433-b496-c38a4e3e87a4",
    description:
      "This phase involves creating the CI/CD pipeline, managing DevOps, configuring the cloud, creating the proof of concept, and implementing best practices.",
    key_features: [
      "CI/CD Pipeline",
      "DevOps",
      "Configure Cloud",
      "Proof of Concept",
      "Best Practices",
    ],
  },
  {
    id: 5,
    name: "Implementing the Vision",
    icon: "https://firebasestorage.googleapis.com/v0/b/recursion-tech-llc-website.appspot.com/o/assets%2Fphase5_icon.png?alt=media&token=3603e5b3-59e3-4edd-a7bd-33a0907c38e7",
    description:
      "This new stage is where the vision becomes reality. This might involve creating functional modules, connecting systems, and ensuring that the tech stack effectively supports the application or software.",
    key_features: [],
  },
  {
    id: 6,
    name: "Evolving and Optimizing",
    icon: "https://firebasestorage.googleapis.com/v0/b/recursion-tech-llc-website.appspot.com/o/assets%2Fphase6_icon.png?alt=media&token=0f12cddd-8e4a-46b8-b647-1cb099ff65a2",
    description:
      "The final stage involves iterative design, SEO optimization, user-driven features and updates, bug fixes, site upkeep, and brand recognition.",
    key_features: [
      "Iterative Design",
      "SEO",
      "User Driven features and updates",
      "Bug fixes",
      "Site Upkeep",
      "Branch Recognition",
    ],
  },
];
