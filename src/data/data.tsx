import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Alex Mitev Resume',
  description: "This is the resume of Alex Mitev",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Alex Mitev.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a  <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Takin Solutiions </strong> helping build a modern,semantic data platform and
         database software for ontology. I have been developing the platform, both at the backend with the data base, and in the fronted building website, and website features.

      </p>
    
    </>
  ),
  actions: [
    {
      href: '/Alex-Mitev.pdf',  // Updated path
      download: 'Alex-Mitev-Resume.pdf',
      text: 'Resume',
      primary: false,
    },

    {
      href: '/Alex-Reference Letter.pdf',
      download: 'Alex-Reference Letter.pdf',
      text: 'Cover Letter',
      primary: false, 
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm Alex, a dedicated Full Stack Developer passionate about crafting innovative web solutions. Proficient in React, Node.js, and Python, I excel in creating seamless user interfaces and designing robust backend systems. My problem-solving mindset, continuous learning attitude, and collaborative spirit make me a valuable asset in dynamic environments. Let's connect and explore how my skills can contribute to your team's success!`,
  aboutItems: [
    {label: 'Location', text: 'Sofia, Bulgaria', Icon: MapIcon},
    {label: 'Age', text: '22', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Bulgarian', Icon: FlagIcon},
    {label: 'Interests', text: 'Software, Technology, Inovations', Icon: SparklesIcon},
    {label: 'Study', text: 'New Bulgarian University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Takin Solutions, Corp', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Romanian',
        level: 8,
      },
      {
        name: 'Russian',
        level: 5,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Javascript',
        level: 8,
      },
      {
        name: 'HTML',
        level: 8,
      },
      {
        name: 'CSS',
        level: 8,
      },
      {
        name: 'React.js',
        level: 7,
      }
    ],
  },
  
  { 
    name: 'System Administrator',
    skills: [
      {
        name: 'Windows Administration',
        level: 8,
      },

      {
        name: 'Linux Administration',
        level: 8,
      
      },

      {
        name: 'MacOS', 
        level: 8,
      },
    ]

  },

  {
    name: 'Backend development',
    skills: [
      {
        name: 'Database Development',
        level: 8,
      },
      {
        name: 'MySql,',
        level: 8,
      },
      {
        name: 'PostgreSQL',
        level: 7,
      },
    ],
  },
  {
    name: 'Python',
    skills: [
      {
        name: 'Web Development',
        level: 9,
      },
      {
        name: 'Flask',
        level: 8,
      },
      {
        name: 'Jinja2',
        level: 7,
      },
    ],
  },

  {
    name: 'Cloud Infrastructure',
    skills: [
      {
        name: 'Microsoft Azure',
        level: 8,
      },

      {
        name: 'AWS',
        level: 7,
      },

      {
        name: 'Citrix',
        level: 7,
      },
      
    ]
  }
];

/**
 * Portfolio section
 
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Zellij',
    description: '"Zellij is a cutting-edge Semantic Data platform designed to empower organizations with advanced 
    capabilities in data management and ontology. As a sophisticated platform, Zellij facilitates the seamless organization, integration, and analysis of complex datasets, 
    allowing for a deeper understanding and extraction of valuable insights. By leveraging semantic technologies, Zellij enables users to model and represent data in a meaningful and context-rich manner, fostering enhanced collaboration, knowledge discovery, and decision-making within the organization. Its robust features and intuitive interface make Zellij 
    an invaluable tool for harnessing the full potential of semantic data in diverse applications across industries.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];
*/
/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2019-2023',
    location: 'New Bulgarian University',
    title: 'Bachelor Degree - National and Coorporate Security',
    content: <p>During my academic journey I have acuqired a solid foundation in the filed of Cybersecurity and Corporate Security at New Bulgarian University. 
      This program not only provided a comprehensive understanding of cybersecurity principles but also equipped me 
      with practical skills crucial for the industry. Throughout my studies, I delved into areas such as
       information security, gaining expertise to tackle diverse security challenges. 
       This educational experience 
      has prepared me to navigate the evolving field of cybersecurity with a solid foundation and a practical skill set.</p>,
  },
  {
    date: '2021-2023',
    location: 'New Bulgarian University',
    title: 'Bachelor Degree - Digital Humanities, Artigicial Intelegence',
    content: <p>My academic pursuit centered around Digital Humanities with a major focus on Artificial Intelligence at New Bulgarian University. 
      This dynamic program not only provided me with a deep understanding of Digital Humanities but also allowed me to specialize in cutting-edge AI technologies. 
      Throughout my studies, I engaged with Machine Learing, Data Mining, AI in Healthcare and AI in Business. Furthremore I have gained valuable insights and hands-on experience in leveraging AI for various applications. 
      This educational journey has equipped me to blend the realms of humanities and technology, fostering a unique skill set for innovative problem-solving and interdisciplinary collaboration.</p>,
  },
  {

  date: '2014-2019',
  location: 'PGIIRE “Mihai Eminescu”',
  title: 'High shcool Diploma -Extensive Learing of the Romanian language and culture',
  content: <p>This high school experience has not only equipped me with a solid academic foundation but has also instilled values of teamwork, leadership, and community involvement, for example:
<br></br>
<br></br>* Diverse Curriculum: Engaging in a comprehensive curriculum covering subjects such as mathematics, literature, science, and languages.
<br></br>* Extracurricular Involvement: Actively participating in extracurricular activities, clubs, and events to broaden my horizons and develop interpersonal skills.
<br></br>* Leadership Opportunities: Taking on leadership roles in school projects or clubs, honing leadership qualities and collaborative abilities.
<br></br>* Community Engagement: Contributing to community service projects, fostering a sense of social responsibility and empathy.
<br></br>* Language Proficiency: Gaining proficiency in English, Romanian and Russian, enhancing communication skills and cultural understanding.
</p>,
},

];

export const experience: TimelineItem[] = [
  {
    date: 'September 2023 - November 2023',
    location: 'Takin Solutions',
    title: ' PROJECTS I HAVE WORKED ON:',
    content: (
      <p>
        PROJECTS I HAVE WORKED ON:
        <br></br>
        <a href='https://zellij.pythonanywhere.com/' style={{ textDecoration: 'underline', color: 'blue' }}>Zellij</a> - I have been constantly implementing new feautures for the platform and delivering new website look, for the future frontend desing.
        Managing databases, creating backups for the website and upgrading the infrastructure.
        <br></br>
        <a href='https://github.com/takinsolutions' style={{ textDecoration: 'underline', color: 'blue' }}>Takin Solutions Github</a> - Having the role of a Technical Writer I have been documenting every single, article or repository in Github.Before actually pushing that document in Production environment, the document is being double check multiple times for authenticity.
      </p>
    ),
  },
  {
    date: 'September 2023 - November 2023',
    location: 'Takin Solutions',
    title: 'Full-stack Developer/Software Developer',
    content: (
      <>
        <p>
          As a Full Stack Developer, I excel in crafting robust and scalable solutions across the entire technology stack. Proficient in languages such as JavaScript, HTML, CSS, React.js, Typescript, and Python, I bring a wealth of expertise in database management, leveraging technologies like PostgreSQL, MySQL, and ensuring seamless integration with AWS infrastructure. My proficiency extends to Linux environments, and my commitment to collaborative development is evident through my active engagement on GitHub. Additionally, I play a pivotal role in technical writing within the company, ensuring clear communication and documentation of complex technical concepts.
          <br></br>
          <br></br>
          *Web Design and UI/UX: Proficient in creating visually appealing and user-friendly interfaces, ensuring a positive and intuitive user experience.
          <br></br>
          *Programming Languages: Mastery of JavaScript, HTML, CSS, and Python for versatile and dynamic web application development.
          <br></br>
          *Database Management: Extensive experience in database design and management, utilizing PostgreSQL and MySQL to ensure optimal data organization and retrieval.
          <br></br>
          *Cloud Infrastructure: Adept at leveraging AWS services for scalable and efficient cloud-based solutions, contributing to seamless deployment and maintenance.
          <br></br>
          *Linux Environments: Proficient in working with Linux systems, ensuring smooth application deployment and effective system administration.
          <br></br>
          *Version Control: Active collaboration on GitHub, showcasing a commitment to best practices in version control and collaborative development workflows.
          <br></br>
          *Technical Writing: Key contributor to technical documentation within the company, ensuring clear and comprehensive communication of complex technical concepts for various stakeholders.
          <br></br>
        </p>
      </>
    ),
  },

  {
    date: 'November 2022 - September 2023',
    location: 'Accenture', 
    title: 'Application Engineer/Application Cloud Support Analyst', 
    content: (
      <p>
        As a Application Cloud Support Analyst my main responsibilities revolve around developing and implementing the user-facing components of a website or application. Furthermore, I have been performing testing and debugging, conducting thorough testing of the front-end code to identify and fix bugs, inconsistencies, or usability issues. This includes using debugging tools and writing unit tests to ensure code quality.
<br></br>
<br></br>*Strong experience with this frameworks: React.js,Javascript, Jinja2, Flask ,
<br></br>*Proficient in Python-Data Manipulation and Analysis
<br></br>*Web Development Frameworks, Scripting and Automation
<br></br>*Understanding of component-based architecture and reusable UI elements
<br></br>*Experience with UI component libraries like Material-UI, Bootstrap, CSS
<br></br>*Knowledge of CSS media queries and layout techniques
<br></br>*Experience with CSS frameworks like Bootstrap or Foundation
<br></br>*Citrix Management, Citrix Configuration, and Cluster Management
      </p>
    )
  },
  
  
  
  {
    date: 'September 2022 - November 2022',
    location: 'HCL Technology',
    title: 'Senior Software Technician',
    content: (
      <p>
        As a Senior Software Technician, I have bene working on the tickets routed by L1 support. monitoring ticket flow, working with database, providing additional support to the colleagues, and being responsible for escalating more advanced technical problems.
<br></br>
<br></br>*Strong knowledge of cross-browser compatibility issues and solutions
<br></br>*Working experience with AWS and other Public Cloud Platform
<br></br>*Monitoring workflow
<br></br>*Quality Assurance
<br></br>*Basic Scripting with BASH, Perl
<br></br>*Quality Assurance
<br></br>*Basic Scripting with BASH, Perl
<br></br>*Logging parsing and analysis
<br></br>*Web services – Advanced
<br></br>*Network protocols – Intermediate
      </p>
    ),
  },
  {
    date: 'March 2021 - September 2022',
    location: 'HCL Technology',
    title: 'Software Technician',
    content: (
      <p>
       As a As a Software Technician I was providing effective technical assistance for clients/employees and back up and support to the IT managers. My main responsibilities were installing, upgrading, and troubleshooting hardware and software systems. Address user tickets regarding hardware, software, and networking:
<br></br>
<br></br>*Database administration, MySql, Postgres setup
<br></br>*Creating users, security groups, computer accounts, and GPO policies in AD • Creating users, security groups in Azure AD • Creating email accounts in O365 • Troubleshoot O365 related issues.
<br></br>*Resolve technical problems with Local Area Networks (LAN), Wide Area Networks (WAN), and other systems.
<br></br>*Manage file servers and printer servers
<br></br>*Manage hardware and software assets
<br></br>*Handling Outlook and Mailbox related issues
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'George Bruseker',
      text: "I had the pleasure of working with Alex Mitev during his two-month tenure at Takin.solutions. Hired as a developer, Alex showcased proficiency in dev-ops, technical writing, and code development. His autonomous investigation and successful implementation of deployment instructions for Arches and Zellij in AWS Linux and PythonAnywhere environments demonstrated his ability to learn quickly. Alex's dedication extended to creating comprehensive documentation and establishing a solid development workflow on GitHub for our in-house software, Zellij. His conscientious and motivated approach, coupled with eagerness to learn, makes Alex an asset to any team. I believe he will thrive in a collaborative environment with fellow developers to further build on his knowledge and skills."
    },
    
    
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch with me, Alex Mitev !',
  description: 'You can reach out to me directly on my emial or you can give me a call. You can find the contact information below:',
  items: [
  
    {
      type: ContactType.Email,
      text: 'mitevalex21@gmail.com',
      href: 'mailto:mitevalex21@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Sofia, Bulgaria',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Github,
      text: 'Alex',
      href: 'https://github.com/AlexMitev01',
    },
    {
      type: ContactType.Github,
      text: 'TakinSolutions',
      href: 'https://github.com/takinsolutions',
      
    },
    {
      type: ContactType.Phone,
      text:'+359 8937 28205',
      href:'+359 8937 28205',
    }
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/takinsolutions'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/AlexMitev01'},

];
