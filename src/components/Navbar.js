// Navbar.js - Navigation header component
export function createNavbar() {
    return `
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <strong>Hoc10.vn</strong> - Tủ Sách Điện Tử
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" href="#home">Trang chủ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#books">Tủ sách</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Liên hệ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link btn btn-primary text-white ms-2" href="#login">Đăng nhập</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `
}

// Navbar initialization
export function initNavbar() {
    const navbarContainer = document.getElementById("navbar-container")
    if (navbarContainer) {
        navbarContainer.innerHTML = createNavbar()
    }
}
