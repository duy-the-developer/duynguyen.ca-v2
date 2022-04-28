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
      {
        type: `ascii`,
        content: `██████╗ ███████╗ █████╗ ██████╗     ███╗   ███╗███████╗`,
      },
      {
        type: `ascii`,
        content: `██╔══██╗██╔════╝██╔══██╗██╔══██╗    ████╗ ████║██╔════╝`,
      },
      {
        type: `ascii`,
        content: `██████╔╝█████╗  ███████║██║  ██║    ██╔████╔██║█████╗`,
      },
      {
        type: `ascii`,
        content: `██╔══██╗██╔══╝  ██╔══██║██║  ██║    ██║╚██╔╝██║██╔══╝`,
      },
      {
        type: `ascii`,
        content: `██║  ██║███████╗██║  ██║██████╔╝    ██║ ╚═╝ ██║███████╗`,
      },
      {
        type: `ascii`,
        content: `╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═════╝     ╚═╝     ╚═╝╚══════╝`,
      },
      lineBreak,
      emptyLine,

      {
        type: `heading`,
        content: `CHANGE DIRECTORY`,
      },
      {
        type: `message`,
        content: `cd <directory path> - Example: 'cd work'`,
      },
      {
        type: `heading`,
        content: `MOVE UP ONE LEVEL`,
      },
      {
        type: `message`,
        content: `cd .. - Example: 'cd ..' - This will take you from duynguyen.ca/work -> duynguyen.ca`,
      },
      {
        type: `heading`,
        content: `MOVE TO ROOT (HOME)`,
      },
      {
        type: `message`,
        content: `cd - Example: 'cd' - This will take you to duynguyen.ca no matter where you are on the site`,
      },
      emptyLine,
      {
        type: `heading`,
        content: `OPEN FILES`,
      },
      {
        type: `message`,
        content: `cat <file name> - Example: 'cat welcome.txt'`,
      },
      emptyLine,
      {
        type: `heading`,
        content: `OTHER COMMANDS`,
      },
      {
        type: `message`,
        content: `list: List all files and folders in the current directory
help: List all available commands
clear: Clear console messages`,
      },
      emptyLine,
      {
        type: `heading`,
        content: `ABOUT DUYNGUYEN.CA`,
      },
      {
        type: `message`,
        content: `duynguyen.ca is an interactive web portfolio terminal, built entirely from scratch using HTML, CSS, Javascript and React with minimal dependencies. The portfolio is heavily inspired by old school, late 80s, early 90s computer terminals with a Cyperpunk aesthetic. It mimics the basic functionality of a UNIX terminal, featuring common commands like 'list', 'cd', 'cat' and 'clear' to navigate the site.`,
      },
    ],
  },
  ["welcome.txt"]: {
    type: `file`,
    content: [
      {
        type: `ascii`,
        content: `██████╗ ██╗   ██╗██╗   ██╗    ███╗   ██╗ ██████╗ ██╗   ██╗██╗   ██╗███████╗███╗   ██╗`,
      },
      {
        type: `ascii`,
        content: `██╔══██╗██║   ██║╚██╗ ██╔╝    ████╗  ██║██╔════╝ ██║   ██║╚██╗ ██╔╝██╔════╝████╗  ██║`,
      },
      {
        type: `ascii`,
        content: `██║  ██║██║   ██║ ╚████╔╝     ██╔██╗ ██║██║  ███╗██║   ██║ ╚████╔╝ █████╗  ██╔██╗ ██║`,
      },
      {
        type: `ascii`,
        content: `██║  ██║██║   ██║  ╚██╔╝      ██║╚██╗██║██║   ██║██║   ██║  ╚██╔╝  ██╔══╝  ██║╚██╗██║`,
      },
      {
        type: `ascii`,
        content: `██████╔╝╚██████╔╝   ██║       ██║ ╚████║╚██████╔╝╚██████╔╝   ██║   ███████╗██║ ╚████║`,
      },
      {
        type: `ascii`,
        content: `╚═════╝  ╚═════╝    ╚═╝       ╚═╝  ╚═══╝ ╚═════╝  ╚═════╝    ╚═╝   ╚══════╝╚═╝  ╚═══╝`,
      },
      lineBreak,
      emptyLine,
      {
        type: `message`,
        content: `DUYNGUYEN.CA INTERACTIVE PORTFOLIO TERMINAL V1.14`,
      },
      emptyLine,
      {
        type: `message`,
        content: `Local Time: ${new Date()}
Engine: ${navigator.product}
Browser: ${navigator.appName}`,
      },
      {
        type: `message`,
        content: `User Agent: ${navigator.userAgent}
Online: ${navigator.onLine}`,
      },
      emptyLine,
      {
        type: `heading`,
        content: `Type 'help' for a list of all available commands. Type 'cat README.txt' if you are lost.`,
      },
    ],
  },
  ["about.txt"]: {
    type: `file`,
    content: [
      {
        type: "ascii",
        content: ` █████╗ ██████╗  ██████╗ ██╗   ██╗████████╗`,
      },
      {
        type: "ascii",
        content: `██╔══██╗██╔══██╗██╔═══██╗██║   ██║╚══██╔══╝`,
      },
      {
        type: "ascii",
        content: `███████║██████╔╝██║   ██║██║   ██║   ██║   `,
      },
      {
        type: "ascii",
        content: `██╔══██║██╔══██╗██║   ██║██║   ██║   ██║   `,
      },
      {
        type: "ascii",
        content: `██║  ██║██████╔╝╚██████╔╝╚██████╔╝   ██║   `,
      },
      {
        type: "ascii",
        content: `╚═╝  ╚═╝╚═════╝  ╚═════╝  ╚═════╝    ╚═╝   `,
      },
      lineBreak,
      emptyLine,
      {
        type: "message",
        content: `Hello world! My name is Duy Nguyen, I am a Full Stack Developer from Montreal, Canada. I was an accountant in my previous life and had a career change after I obtained my Diploma in Web Development from Concordia University in November, 2021. 
        
Since then, I've been working full time as a developer at Fulhaus Inc., as well as getting involved in other web development projects in both professional and personal settings. Within that time, I have studied my way around React, NodeJS, Express, MongoDB and directly worked in integration projects involving platforms like Quickbooks Online, Stripe, Salesforce, Airtable, to name a few.

Outside of work, I enjoy teaching, tutoring other web development students. If I am not in front of my screen working, tutoring or gaming, you will most likely find me fighting for my life in the gym.

It would be my pleasure to collaborate with you on your projects. Type 'cat contact.txt' in the terminal from the root directory (the current one if you are reading this) for a list of contact options.`,
      },
    ],
  },
  blog: {
    type: `folder`,
    ["article1.txt"]: { type: "file", content: [] },
    ["article2.txt"]: { type: "file", content: [] },
  },
  work: {
    type: `folder`,
    tutor: { type: `folder` },
    projects: { type: `folder` },
  },
};
