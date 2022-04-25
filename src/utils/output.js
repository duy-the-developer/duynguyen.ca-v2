export const emptyLine = {
  type: `space`,
  content: `
`,
};

export const home = {
  files: {
    ["intro.txt"]: [],
    ["welcome.txt"]: [
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
        content: `DUYNGUYEN.CA INTERACTIVE PORTFOLIO TERMINAL`,
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
        type: `message`,
        content: `Type 'help' for a list of all available commands.`,
      },
      emptyLine,
    ],
    ["contact.txt"]: [],
  },
  folders: {
    blog: {},
    work: {},
  },
};
