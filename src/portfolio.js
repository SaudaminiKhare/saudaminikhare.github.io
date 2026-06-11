/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Saudamini Khare",
  title: "Hi all, I'm Saudamini",
  subTitle: emoji(
    "A Generative AI Engineer 🚀 building LLM-powered applications with LangChain, LangGraph and AutoGen — document QA, code generation and multi-agent workflows, grounded in deep learning and production software in Python and C++."
  ),
  resumeLink: "", // Add a Google Drive / hosted PDF link here to show the download button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SaudaminiKhare",
  linkedin: "https://linkedin.com/in/saudamini-khare/",
  gmail: "skhare10@asu.edu",
  // Remove or leave blank any networks you don't use — they simply won't render.
  // gitlab: "",
  // facebook: "",
  // medium: "",
  // stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "GENERATIVE AI ENGINEER TURNING LARGE LANGUAGE MODELS INTO SYSTEMS PEOPLE CAN ACTUALLY USE",
  skills: [
    emoji(
      "⚡ Build LLM-powered applications — document Q&A, query routing and code generation — with LangChain, LangGraph and GPT-4"
    ),
    emoji(
      "⚡ Design multi-agent AutoGen systems with vector memory (ChromaDB, FAISS) for context-aware, long-term retrieval"
    ),
    emoji(
      "⚡ Develop deep learning and computer vision pipelines (CNNs, Swin Transformers, GANs) in PyTorch, TensorFlow and Keras"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "SQL / Databases",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Linux / Unix",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Arizona State University",
      logo: require("./assets/images/asuLogo.png"),
      subHeader: "Master of Science in Computer Software Engineering",
      duration: "Aug 2023 - Dec 2024",
      desc: "GPA: 3.25 / 4.0. Tempe, Arizona.",
      descBullets: [
        "Thesis: integrating deep learning architectures (Swin Transformers, custom CNNs, ensembles) for multiclass classification and localization of thoracic pathologies on the NIH Chest X-ray dataset."
      ]
    },
    {
      schoolName: "International Institute of Information Technology, Bangalore",
      logo: require("./assets/images/iiitbLogo.png"),
      subHeader:
        "Post Graduate Diploma in Artificial Intelligence and Machine Learning",
      duration: "Jun 2021",
      desc: "GPA: 2.93 / 4.0. Bangalore, India.",
      descBullets: []
    },
    {
      schoolName: "PES University",
      logo: require("./assets/images/pesLogo.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "Aug 2019",
      desc: "GPA: 7.69 / 10.0. Bangalore, India.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Generative AI / LLMs", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Deep Learning / ML",
      progressPercentage: "85%"
    },
    {
      Stack: "Software Engineering (Python / C++)",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Generative AI Engineer – Associate",
      company: "Cognizant",
      companylogo: require("./assets/images/cognizantLogo.png"),
      date: "Dec 2024 – Present",
      desc:
        "Build production LLM-powered applications spanning document QA, query routing and multi-agent software development workflows.",
      descBullets: [
        "Built a document Q&A system with LangChain, GPT-4 and FAISS that ingests PDF/DOCX, chunks and embeds content, and answers questions via OpenAI function calling.",
        "Developed a LangChain assistant that classifies queries into code-generation or general tasks and routes them through dynamic prompt templates.",
        "Designed a multi-agent AutoGen group chat covering requirements analysis, code generation, test generation and document Q&A, backed by ChromaDB vector memory for long-term continuity."
      ]
    },
    {
      role: "Software Engineer 2",
      company: "Philips India Ltd.",
      companylogo: require("./assets/images/philipsLogo.png"),
      date: "Jul 2019 – Aug 2022",
      desc:
        "Developed C++ tooling and machine learning pipelines for medical imaging stakeholders in Bangalore, India.",
      descBullets: [
        "Built a Pix2Pix GAN with imaging specialists to upscale low-dose X-rays to high-dose quality, cutting patient radiation exposure by 50%.",
        "Deployed a call-classification pipeline (word2vec + Linear SVC) that reduced manual triage from 3 weeks to 30 minutes and condensed 100+ issue categories to 15.",
        "Developed a C++ diagnostic tool to pinpoint corruption in the image pipeline, validated with the GTest framework.",
        "Prototyped UX and image-quality POCs, including resizable UI panels and 4K rendering at lower resolutions."
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "Philips India Ltd.",
      companylogo: require("./assets/images/philipsLogo.png"),
      date: "Jan 2019 – Jul 2019",
      desc:
        "Built a Python remote-connectivity package for X-ray machines, integrated with the service tool to cut machine access time by 50% and reduce on-site visits."
    },
    {
      role: "Data Science Intern",
      company: "IBM India Ltd.",
      companylogo: require("./assets/images/ibmLogo.png"),
      date: "Jun 2018 – Aug 2018",
      desc:
        "Surfaced the top 10 usability issues in SBI's YONO banking app by analyzing Play Store reviews with Watson Natural Language Understanding."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true once you add a GitHub token in .env (USE_GITHUB_DATA="true")
  display: false // Set true once GitHub data is enabled in .env
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle:
    "PROJECTS THAT BRIDGE GENERATIVE AI, DEEP LEARNING AND REAL-WORLD SYSTEMS",
  projects: [
    {
      image: require("./assets/images/thoracicProject.webp"),
      projectName: "Thoracic Pathology Classification & Localization",
      projectDesc:
        "A deep learning framework combining Swin Transformers, custom CNNs and ensemble methods to classify 15 thoracic diseases and localize abnormalities on the NIH Chest X-ray dataset (avg AUC 0.60). Master's thesis.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/SaudaminiKhare"
        }
      ]
    },
    {
      image: require("./assets/images/agentProject.webp"),
      projectName: "SDLC Multi-Agent Assistant",
      projectDesc:
        "An AutoGen group-chat system where specialized agents handle requirements, code, tests and document Q&A, with ChromaDB-backed persistent memory for context-aware retrieval.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/SaudaminiKhare"
        }
      ]
    },
    {
      image: require("./assets/images/ganProject.webp"),
      projectName: "Low-Dose X-ray Enhancement GAN",
      projectDesc:
        "A Pix2Pix GAN translating low-dosage X-rays into high-dosage quality, reducing repeat scans and lowering patient radiation exposure by 50%. Built at Philips.",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Publications 📄"),
  subtitle: "Peer-reviewed research contributions",

  achievementsCards: [
    {
      title:
        "Predicting Protein-Protein Interaction in Multi-layer Blood Cell PPI Networks",
      subtitle:
        "Springer — presented at the Advanced Informatics for Computing Research conference (Jun 2019).",
      image: require("./assets/images/springerLogo.png"),
      imageAlt: "Springer Logo",
      footerLink: [
        {
          name: "View DOI",
          url: "https://doi.org/10.1007/978-981-15-0111-1_22"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to conversations about generative AI, multi-agent systems and applied machine learning.",
  number: "",
  email_address: "skhare10@asu.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
