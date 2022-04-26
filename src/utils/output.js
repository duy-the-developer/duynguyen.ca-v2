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
  ["READ_ME.txt"]: {
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
        type: `message`,
        content: `Hello world! My name is Duy and I am a Full Stack Developer. Welcome to my interactive web portfolio terminal, built entirely from scratch using HTML, CSS, Javascript and React with minimal dependencies. The portfolio is heavily inspired by old school, late 80s, early 90s computer terminals with a Cyperpunk aesthetic. It mimics the basic functionality of a UNIX terminal, featuring common commands like 'list', 'cd', 'cat' and 'clear' to navigate the site.`,
      },
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
        content: `cat <file name>: open file - ex: 'cat welcome.txt'`,
      },
      emptyLine,
      {
        type: `heading`,
        content: `OTHERS`,
      },
      {
        type: `message`,
        content: `list: List all files and folders in the current directory
help: List all available commands
clear: Clear console messages`,
      },
      emptyLine,
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
        content: `Type 'help' for a list of all available commands. Type 'cat READ_ME.txt' if you are lost.`,
      },
      emptyLine,
    ],
  },
  ["contact.txt"]: {
    type: `file`,
    content: [
      {
        type: "ascii",
        content: ` ██████╗ ██████╗ ███╗   ██╗████████╗ █████╗  ██████╗████████╗`,
      },
      {
        type: "ascii",
        content: `██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔════╝╚══██╔══╝`,
      },
      {
        type: "ascii",
        content: `██║     ██║   ██║██╔██╗ ██║   ██║   ███████║██║        ██║`,
      },
      {
        type: "ascii",
        content: `██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██║██║        ██║`,
      },
      {
        type: "ascii",
        content: `╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╗   ██║`,
      },
      {
        type: "ascii",
        content: ` ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝   ╚═╝`,
      },
      lineBreak,
      emptyLine,
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
