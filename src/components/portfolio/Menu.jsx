import Work1 from "../../assets/work-1.svg";
import Work2 from "../../assets/work-2.svg";
import Work3 from "../../assets/work-3.svg";
import Work4 from "../../assets/work-4.svg";
import Work5 from "../../assets/work-5.svg";
// import Work6 from "../../assets/work-6.svg";

const Menu = [
    {
      id: 1,
      image: Work1,
      title: "Threat Modeling",
      category: "Cyber-Security",
      description: (
        <div>
          <p>
          • Threat modeled a new web application using CIS, NIST, and MITRE frameworks to identify and mitigate potential security risks.
          </p>
          <ul>
            <li> • Verified vulnerabilities, collected, and security reports were written and distributed.</li>
            <li> • Conducted analysis using firewalls, operating systems, IDS/IPS, proxy servers, and breach indicators to create reports on evidence of network penetrations and data theft.</li>
            <li> • Developed and implemented security measures for HVT assets, which resulted in a 70% reduction in cyber attacks.</li>
          </ul>
        </div>
      ),
      link : null,
      stack : "CIS, NIST, and MITRE frameworks",
    },
    {
      id: 2,
      image: Work2,
      title: "Automobile Dealer Inventory",
      category: "Database",
      description: (
        <div>
          <p>
          • Developed an automobile dealer inventory and sales system with PostgreSQL, UML diagrams, and relation scheme diagrams. It boosted search efficiency by 25% and enhanced overall performance.
          </p>
          <ul>
            <li> • Implemented rigorous security protocols, including input validation and parameterized queries, to mitigate the risk of SQL injection attacks and ensure 90% reduction in security breaches.</li>
            <li> • Optimized a SQL database to reduce incorrect results by 80% and achieved a 95% success rate in delivering a highly accurate database deployment project.</li>
          </ul>
        </div>
      ),
      link : null,
      stack : "PostgreSQL and Python",
    },
    {
      id: 3,
      image: Work3,
      title: "StuXpert",
      category: "Web Development",
      description: (
        <div>
          <p>
          • Contributed to the design and development of a community-based discussion platform as a Full-Stack Web Application, collaborating effectively with a team of four.
          </p>
          <ul>
            <li> • Designed a user-friendly interface for the platform using Figma, ReactJS, DaisyUI, and TailwindCSS, enabling users to post, like, dislike, and comment on content.</li>
            <li> • Leveraged Google Cloud and Firebase’s Firestore Database to authenticate users and store user information for the backend.</li>
            <li> • Improved information retrieval from the database by over 50% by utilizing cloud services.</li>
          </ul>
        </div>
      ),
      link : "https://github.com/Deep392/BeachHacks-7",
      stack : "ReactJS, TailwindCSS, Firebase, Google Cloud, GitHub",
    },
    ,
    {
      id: 4,
      image: Work4,
      title: "Neuroutine",
      category: "Mobile Development",
      description: (
        <div>
          <p>
          • Collaborated with a team of four to build an Android app for a senior project.
          </p>
          <ul>
            <li> • Developed the app using Java, Android SDK, Android Studio, and XML design files.</li>
            <li> • Implemented key features including creating routines and tasks, managing checklists, and integrating a calendar to display events within the app.</li>
            <li> • Integrated a chatbot functionality to provide users with assistance and support for any app-related issues. Utilized Git and GitHub for version control and Firebase for analytics and crash reporting.</li>
          </ul>
        </div>
      ),
      link : null,
      stack : "Java, AndroidSDK, Firebase, Google Cloud, GitHub",
    },
    ,
    {
      id: 5,
      image: Work5,
      title: "Personal Portfolio",
      category: "Web Development",
      description: (
        <div>
          <p>
          • Designed and developed a personal portfolio website using ReactJS, CSS, and HTML.
          </p>
          <ul>
            <li> • Implemented captivating animations using libraries such as Framer to enhance user experience and engagement.</li>
            <li> • Showcased projects, skills, and achievements in an aesthetically pleasing and user-friendly manner to effectively highlight professional accomplishments.</li>
          </ul>
        </div>
      ),
      link : "https://github.com/Deep392/BeachHacks-7",
      stack : "ReactJS, HTML, CSS, Framer Motion, GitHub",
    },
    // ,
    // {
    //   id: 6,
    //   image: Work6,
    //   title: "Game Store App Concept",
    //   category: "Database",
    // },
  ];
  

export default Menu