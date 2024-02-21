

const panel = document.querySelector("#panel");
const botones = document.querySelectorAll("button")

botones.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.id === "=") {
      panel.value = eval(panel.value);
    } else if (btn.id === "C") {
      panel.value = "";
    } else if(btn.id == "DE"){
      panel.value = panel.value.slice(0, -1);
    } else {
      panel.value += btn.id;
    }
  })
})