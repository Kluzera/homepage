{
  const welcome = () => {
    console.log("Cześć wszystkim!");
  };

  const toggleBackground = () => {
    const body = document.querySelector(".body");
    const themeName = document.querySelector(".js-themeName");
    
    body.classList.toggle("dark");
    themeName.innerText = body.classList.contains("dark") ? "białe" : "szare";
  };

  const init = () => {
    const button = document.querySelector(".aside__button");
    button.addEventListener("click", toggleBackground);

    welcome();
  };

  init();
}
