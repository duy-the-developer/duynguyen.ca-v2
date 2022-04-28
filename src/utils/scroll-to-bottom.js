export const scrollToBottom = () => {
    const terminalElem = document.getElementsByClassName("App")[0];
    terminalElem.scrollTop = terminalElem.scrollHeight;
  };