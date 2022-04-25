export const emptyLine = {
  type: `space`,
  content: `
`,
};

export const home = {
  ["intro.txt"]: { type: `file`, content: [] },
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
  },
  ["contact.txt"]: [{ type: `file`, content: [] }],
  blog: { type: `folder` },
  work: {
    type: `folder`,
    tutor: { type: `folder` },
    projects: { type: `folder` },
  },
};
