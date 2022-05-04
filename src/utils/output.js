const ascii = (content) => {
  return { type: "ascii", content: content };
};

const message = (content) => {
  return { type: "message", content: content };
};

const head1 = (content) => {
  return { type: "head1", content: content };
};

const head2 = (content) => {
  return { type: "head2", content: content };
};

const url = (content) => {
  return { type: "url", content: content };
};

const mail = (content) => {
  return { type: "mail", content: content };
};

const warning = (content) => {
  return { type: "warning", content: content };
};

export const emptyLine = {
  type: `space`,
  content: `
`,
};

export const lineBreak = {
  type: `ascii`,
  content: `*************************************************************************************`,
};

export const siteMap = {
  ["README.txt"]: {
    type: `file`,
    content: [
      ascii(`██████╗ ███████╗ █████╗ ██████╗     ███╗   ███╗███████╗`),
      ascii(`██╔══██╗██╔════╝██╔══██╗██╔══██╗    ████╗ ████║██╔════╝`),
      ascii(`██████╔╝█████╗  ███████║██║  ██║    ██╔████╔██║█████╗`),
      ascii(`██╔══██╗██╔══╝  ██╔══██║██║  ██║    ██║╚██╔╝██║██╔══╝`),
      ascii(`██║  ██║███████╗██║  ██║██████╔╝    ██║ ╚═╝ ██║███████╗`),
      ascii(`╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═════╝     ╚═╝     ╚═╝╚══════╝`),
      lineBreak,
      emptyLine,
      head1(`COMMANDS`),
      head2(`LIST ALL FILES AND FOLDERS`),
      message(
        `list - Example: 'list' or 'ls' - This will list all files and folders in the current directory`
      ),
      head2(`CHANGE DIRECTORY`),
      message(`cd <directory path> - Example: 'cd work'`),
      head2(`MOVE UP ONE LEVEL`),
      message(
        `cd .. - Example: 'cd ..' - This will take you from duynguyen.ca/work -> duynguyen.ca`
      ),
      head2(`MOVE TO ROOT (HOME)`),
      message(
        `cd - Example: 'cd' - This will take you to duynguyen.ca no matter where you are on the site`
      ),
      emptyLine,
      head2(`OPEN FILES`),
      message(`open <file name> - Example: 'open welcome.txt'`),
      emptyLine,
      head2(`HELP`),
      message(`help - List all available commands`),
      head2(`CLEAR CONSOLE`),
      message(`clear - Clear all console messages`),
      emptyLine,
      head1(`DOCUMENTATION`),
      head2(`Github`),
      url(`https://github.com/duy-devsense/duynguyen.ca`),
      emptyLine,
      head1(`CONTACT`),
      head2(`Github`),
      url(`https://github.com/duy-devsense`),
      head2(`LinkedIn`),
      url(`https://www.linkedin.com/in/ngoc-duy-anh-nguyen/`),
      head2(`Email`),
      mail(`duy.nguyen@devsense.ca`),
      emptyLine,
      head1(`ABOUT DUYNGUYEN.CA`),
      message(
        `duynguyen.ca is an interactive web portfolio terminal, built entirely from scratch using HTML, CSS, Javascript and React with minimal dependencies. The portfolio is heavily inspired by old school, late 80s, early 90s computer terminals with a Cyperpunk aesthetic. It mimics the basic functionality of a UNIX terminal, featuring common commands like 'list', 'cd', 'open' and 'clear' to navigate the site.`
      ),
    ],
  },
  ["welcome.txt"]: {
    type: `file`,
    content: [
      ascii(
        `██████╗ ██╗   ██╗██╗   ██╗    ███╗   ██╗ ██████╗ ██╗   ██╗██╗   ██╗███████╗███╗   ██╗`
      ),
      ascii(
        `██╔══██╗██║   ██║╚██╗ ██╔╝    ████╗  ██║██╔════╝ ██║   ██║╚██╗ ██╔╝██╔════╝████╗  ██║`
      ),
      ascii(
        `██║  ██║██║   ██║ ╚████╔╝     ██╔██╗ ██║██║  ███╗██║   ██║ ╚████╔╝ █████╗  ██╔██╗ ██║`
      ),
      ascii(
        `██║  ██║██║   ██║  ╚██╔╝      ██║╚██╗██║██║   ██║██║   ██║  ╚██╔╝  ██╔══╝  ██║╚██╗██║`
      ),
      ascii(
        `██████╔╝╚██████╔╝   ██║       ██║ ╚████║╚██████╔╝╚██████╔╝   ██║   ███████╗██║ ╚████║`
      ),
      ascii(
        `╚═════╝  ╚═════╝    ╚═╝       ╚═╝  ╚═══╝ ╚═════╝  ╚═════╝    ╚═╝   ╚══════╝╚═╝  ╚═══╝`
      ),
      lineBreak,
      emptyLine,
      message(`DUYNGUYEN.CA INTERACTIVE PORTFOLIO TERMINAL V1.36`),
      emptyLine,
      message(`Local Time: ${new Date()}
Engine: ${navigator.product}
Browser: ${navigator.appName}`),
      message(`User Agent: ${navigator.userAgent}
Online: ${navigator.onLine}`),
      emptyLine,
      warning(
        `Type 'help' for a list of all available commands. Type 'open README.txt' if you are lost.`
      ),
    ],
  },
  ["about.txt"]: {
    type: `file`,
    content: [
      ascii(` █████╗ ██████╗  ██████╗ ██╗   ██╗████████╗`),
      ascii(`██╔══██╗██╔══██╗██╔═══██╗██║   ██║╚══██╔══╝`),
      ascii(`███████║██████╔╝██║   ██║██║   ██║   ██║   `),
      ascii(`██╔══██║██╔══██╗██║   ██║██║   ██║   ██║   `),
      ascii(`██║  ██║██████╔╝╚██████╔╝╚██████╔╝   ██║   `),
      ascii(`╚═╝  ╚═╝╚═════╝  ╚═════╝  ╚═════╝    ╚═╝   `),
      lineBreak,
      emptyLine,
      message(`Hello world! My name is Duy Nguyen, I am a Full Stack Developer from Montreal, Canada. I was an accountant in my previous life and had a career change after I obtained my Diploma in Web Development from Concordia University in November, 2021. 
        
      Since then, I've been working full time as a developer at Fulhaus Inc., as well as getting involved in other web development projects in both professional and personal settings. Within that time, I have studied my way around React, NodeJS, Express, MongoDB and directly worked in integration projects involving platforms like Quickbooks Online, Stripe, Salesforce, Airtable, to name a few.
      
      Outside of work, I enjoy teaching, tutoring other web development students. If I am not in front of my screen working, tutoring or gaming, you will most likely find me fighting for my life in the gym.
      
      It would be my pleasure to collaborate with you on your projects. Type 'cat contact.txt' in the terminal from the root directory (the current one if you are reading this) for a list of contact options.`),
    ],
  },
  ["contact.txt"]: {
    type: `file`,
    content: [
      ascii(` ██████╗ ██████╗ ███╗   ██╗████████╗ █████╗  ██████╗████████╗`),
      ascii(`██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔════╝╚══██╔══╝`),
      ascii(`██║     ██║   ██║██╔██╗ ██║   ██║   ███████║██║        ██║   `),
      ascii(`██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██║██║        ██║   `),
      ascii(`╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╗   ██║   `),
      ascii(` ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝   ╚═╝   `),
      lineBreak,
      emptyLine,
      head2(`Github`),
      url(`https://github.com/duy-devsense`),
      head2(`LinkedIn`),
      url(`https://www.linkedin.com/in/ngoc-duy-anh-nguyen/`),
      head2(`Email`),
      mail(`duy.nguyen@devsense.ca`),
    ],
  },
  blog: {
    type: `folder`,
    ["article1.txt"]: { type: "file", content: [] },
    ["article2.txt"]: { type: "file", content: [] },
  },
  work: {
    type: `folder`,
    tutor: {
      type: `folder`,
      ["reviews.txt"]: {
        type: `file`,
        content: [
          ascii(`██████╗ ███████╗██╗   ██╗██╗███████╗██╗    ██╗███████╗`),
          ascii(`██╔══██╗██╔════╝██║   ██║██║██╔════╝██║    ██║██╔════╝`),
          ascii(`██████╔╝█████╗  ██║   ██║██║█████╗  ██║ █╗ ██║███████╗`),
          ascii(`██╔══██╗██╔══╝  ╚██╗ ██╔╝██║██╔══╝  ██║███╗██║╚════██║`),
          ascii(`██║  ██║███████╗ ╚████╔╝ ██║███████╗╚███╔███╔╝███████║`),
          ascii(`╚═╝  ╚═╝╚══════╝  ╚═══╝  ╚═╝╚══════╝ ╚══╝╚══╝ ╚══════╝`),
          lineBreak,
          emptyLine,
          head1(`BRANDON R. - 2022.04.06`),
          head2(`Concordia Web Development Bootcamp, Cohort: cb-wd-14b`),
          message(`"Hey man just to let you know i managed to complete my javascript exercise tonight took me 4 hours for that section but i figured out everything and debugged everything im happy as hell. Thanks for all your help thus far."`)
        ],
      },
    },
    ["personal-projects"]: { type: `folder` },
  },
};
