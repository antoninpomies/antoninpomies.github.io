document.addEventListener("DOMContentLoaded", () => {
    const commands = [
      "curl github.com/antoninpomies",
      "mkdir /home/antoninpomies",
      "net localgroup Administrators Antonin /add"
    ];
    const typedCommand = document.getElementById("typed-command");
    const cursor = document.querySelector(".cursor");
    let currentCommand = 0;
    let index = 0;
  
    function type() {
      if (index < commands[currentCommand].length) {
        typedCommand.textContent += commands[currentCommand][index];
        index++;
        setTimeout(type, 100); // Adjust typing speed here
      } else {
        setTimeout(erase, 1000); // Wait before erasing
      }
    }
  
    function erase() {
      if (index > 0) {
        typedCommand.textContent = typedCommand.textContent.slice(0, -1);
        index--;
        setTimeout(erase, 50); // Adjust erasing speed here
      } else {
        currentCommand = (currentCommand + 1) % commands.length;
        setTimeout(type, 500); // Wait before typing next command
      }
    }
  
    type();
  });