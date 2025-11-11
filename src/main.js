// Import Bootstrap và SCSS của bạn
import "bootstrap";
import "./styles/main.scss";

document.querySelector("#app").innerHTML = `
  <div class="container text-center">
    <h1 class="display-4 text-primary">Hello, Bootstrap + Vite!</h1>
    <p class="lead">Trang này đang chạy với Vite</p>
    <button class="btn btn-success mt-3" id="clickMe">Click me</button>
  </div>
`;

document.querySelector("#clickMe").addEventListener("click", () => {
  alert("It works!");
});
