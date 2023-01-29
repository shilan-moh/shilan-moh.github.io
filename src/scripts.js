function toggleTheme() {
  if (theme === "light") {
    theme = "dark";
    document.querySelector("body").classList.add("dark");
    document.querySelector("nav").classList.add("navbar-dark");
    document.querySelector("nav").classList.remove("navbar-light");
    document.getElementById("change-theme-button").innerHTML = "Light Mode";
  } else {
    theme = "light";
    document.querySelector("body").classList.remove("dark");
    document.querySelector("nav").classList.remove("navbar-dark");
    document.querySelector("nav").classList.add("navbar-light");
    document.getElementById("change-theme-button").innerHTML = "Dark Mode";
  }
}
function alertuser() {
  alert(
    `👋 It's my pleasure 😀 to share the result link with you via  "Result here" link. 
    There is also a link to my GitHub profile👩🏻‍💻. `
  );
}

let theme = "light";
let themeButton = document.querySelector("#change-theme-button");
themeButton.addEventListener("click", toggleTheme);

let projectImg = document.querySelector(".project-img");
projectImg.addEventListener("click", alertuser);
