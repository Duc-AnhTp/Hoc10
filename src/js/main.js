import "../styles/main.css"

// Sample data for books
const booksData = {
  textbooks: [
    {
      id: 1,
      title: "Tiếng Việt 1 - Tập 1",
      author: "Bộ Giáo Dục và Đào Tạo",
      description: "Sách giáo khoa tiếng Việt lớp 1 tập 1",
      icon: "📚",
    },
    {
      id: 2,
      title: "Tiếng Việt 1 - Tập 2",
      author: "Bộ Giáo Dục và Đào Tạo",
      description: "Sách giáo khoa tiếng Việt lớp 1 tập 2",
      icon: "📚",
    },
    {
      id: 3,
      title: "Tiếng Việt 1 - Bộ Cánh Diều",
      author: "Nhà Xuất Bản Đại Học Sư Phạm",
      description: "Sách giáo khoa tiếng Việt 1 bộ Cánh Diều",
      icon: "📚",
    },
  ],
  workbooks: [
    {
      id: 4,
      title: "Vở Bài Tập Tiếng Việt 1 - Tập 1",
      author: "Bộ Giáo Dục và Đào Tạo",
      description: "Vở bài tập tiếng Việt lớp 1 tập 1",
      icon: "📝",
    },
    {
      id: 5,
      title: "Vở Bài Tập Tiếng Việt 1 - Tập 2",
      author: "Bộ Giáo Dục và Đào Tạo",
      description: "Vở bài tập tiếng Việt lớp 1 tập 2",
      icon: "📝",
    },
    {
      id: 6,
      title: "Vở Bài Tập - Bộ Cánh Diều",
      author: "Nhà Xuất Bản Đại Học Sư Phạm",
      description: "Vở bài tập tiếng Việt 1 bộ Cánh Diều",
      icon: "📝",
    },
  ],
  teacherGuides: [
    {
      id: 7,
      title: "Sách Giáo Viên Tiếng Việt 1 - Tập 1",
      author: "Bộ Giáo Dục và Đào Tạo",
      description: "Hướng dẫn giảng dạy tiếng Việt lớp 1 tập 1",
      icon: "👨‍🏫",
    },
    {
      id: 8,
      title: "Sách Giáo Viên Tiếng Việt 1 - Tập 2",
      author: "Bộ Giáo Dục và Đào Tạo",
      description: "Hướng dẫn giảng dạy tiếng Việt lớp 1 tập 2",
      icon: "👨‍🏫",
    },
  ],
  powerpoint: [
    {
      id: 9,
      title: "Bài 1: Tiếng Việt Lớp 1",
      author: "Tài liệu dạy học",
      description: "Bài giảng PowerPoint bài 1",
      icon: "📊",
    },
    {
      id: 10,
      title: "Bài 2: Chữ Cái Tiếng Việt",
      author: "Tài liệu dạy học",
      description: "Bài giảng PowerPoint bài 2",
      icon: "📊",
    },
    {
      id: 11,
      title: "Bài 3: Đọc và Viết",
      author: "Tài liệu dạy học",
      description: "Bài giảng PowerPoint bài 3",
      icon: "📊",
    },
  ],
}

// Function to create book card HTML
function createBookCard(book) {
  return `
    <div class="col-md-6 col-lg-4">
      <div class="book-card">
        <div class="book-image">
          ${book.icon}
        </div>
        <div class="book-content">
          <h5 class="book-title">${book.title}</h5>
          <p class="book-author">
            <i class="bi bi-person"></i> ${book.author}
          </p>
          <p class="book-description">${book.description}</p>
          <div class="book-meta">
            <span class="book-meta-item">
              <i class="bi bi-file-earmark-pdf"></i> PDF
            </span>
            <button class="book-button">
              <i class="bi bi-download"></i> Tải
            </button>
          </div>
        </div>
      </div>
    </div>
  `
}

// Function to render books in a container
function renderBooks(containerId, books) {
  const container = document.getElementById(containerId)
  if (container) {
    container.innerHTML = books.map((book) => createBookCard(book)).join("")
  }
}

// Initialize content on page load
document.addEventListener("DOMContentLoaded", () => {
  renderBooks("textbooksContainer", booksData.textbooks)
  renderBooks("workbooksContainer", booksData.workbooks)
  renderBooks("teacherGuideContainer", booksData.teacherGuides)
  renderBooks("powerpointContainer", booksData.powerpoint)

  // Add filter functionality
  const subjectFilters = document.querySelectorAll(".subject-filter")
  const docTypeFilters = document.querySelectorAll(".doc-type-filter")

  subjectFilters.forEach((filter) => {
    filter.addEventListener("change", () => {})
  })

  docTypeFilters.forEach((filter) => {
    filter.addEventListener("change", () => {})
  })

  // Add button click handlers
  document.querySelectorAll(".book-button").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault()
      const cardTitle = btn.closest(".book-card").querySelector(".book-title").textContent
      alert(`Tải xuống: ${cardTitle}`)
    })
  })
})
