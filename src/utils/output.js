const emptyLine = {
  type: `space`,
  content: `
`,
};

export const initialOutput = [
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
  {
    type: `ascii`,
    content: `*************************************************************************************`,
  },
  emptyLine,
  {
    type: `message`,
    content: `DUYNGUYEN.CA INTERACTIVE PORTFOLIO TERMINAL
`,
  },
  emptyLine,
  {
    type: `message`,
    content: `Local Time: ${new Date()}
Browser: ${navigator.appName}
Engine: ${navigator.product}
User Agent: ${navigator.userAgent}
Online: ${navigator.onLine}`,
  },
  emptyLine,
  {
    type: `message`,
    content: `Type 'help' for a list of all available commands.`,
  },
  emptyLine,
  {
    type: `message`,
    content: `My name is Duy Nguyen and I am a Full Stack Developer. Welcome to my terminal-themed interactive portfolio.`,
  },
  emptyLine,
];
