import { createBookCard } from "./BookCard.js"

export function renderBookCategory(books) {
    return books
        .map(
            (book) => `
      <div class="col-sm-6 col-lg-6">
        ${createBookCard(book)}
      </div>
    `,
        )
        .join("")
}

export function initBookList() {
    const viewMoreBtns = document.querySelectorAll(".btn-view-more")
    viewMoreBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault()
        })
    })
}
