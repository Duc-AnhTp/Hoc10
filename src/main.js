import "bootstrap";
import "./styles/main.scss";

// Import các component
import { initButtons } from "./components/button/button.js";
import { closeModal, openModal } from "./components/modal/modal.js";
import { setupNavbar } from "./components/navbar/navbar.js";

setupNavbar();

document.getElementById("openBtn")?.addEventListener("click", () => openModal("myModal"));
document.getElementById("closeBtn")?.addEventListener("click", () => closeModal("myModal"));
initButtons();
