import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "./styles/main.css"

import { initBookCards } from "./components/BookCard.js"
import { renderBookCategory } from "./components/BookList.js"
import { getBooksByGrade, mockBooks } from "./utils/mockData.js"

const gradeTabs = document.querySelectorAll(".grade-tab")
const filterCheckboxes = document.querySelectorAll(".filter-items input[type='checkbox']")

function renderAllBooks(books = mockBooks) {
    document.getElementById("textbooks-grid").innerHTML = renderBookCategory(books.textbooks)
    document.getElementById("workbooks-grid").innerHTML = renderBookCategory(books.workbooks)
    document.getElementById("teacher-grid").innerHTML = renderBookCategory(books.teacherBooks)
    document.getElementById("illustration-grid").innerHTML = renderBookCategory(books.illustrations)

    const powerpointGrid = document.getElementById("powerpoint-grid")
    powerpointGrid.innerHTML = books.powerpoints
        .map(
            (pp) => `
    <div class="col-sm-6 col-lg-4">
      <div class="powerpoint-card">
        <div class="pp-image">
          <img src="${pp.image}" alt="${pp.title}">
        </div>
        <h6 class="pp-title">${pp.title}</h6>
        <p class="pp-subtitle">${pp.subtitle}</p>
        <p class="pp-info">${pp.info}</p>
      </div>
    </div>
  `,
        )
        .join("")

    initBookCards()
}

gradeTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
        gradeTabs.forEach((t) => t.classList.remove("active"))
        this.classList.add("active")

        const grade = this.dataset.grade
        const booksByGrade = getBooksByGrade(grade)
        renderAllBooks(booksByGrade)
    })
})

filterCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
        const selectedFilters = Array.from(filterCheckboxes)
            .filter((cb) => cb.checked)
            .map((cb) => cb.nextElementSibling.textContent)
    })
})

renderAllBooks()
