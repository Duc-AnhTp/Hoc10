export function createBookCard(book) {
    const badge = book.badge ? `<span class="book-badge badge-top">${book.badge}</span>` : ""
    const buttonClass = book.buttonType === "secondary" ? "btn-action btn-secondary" : "btn-action"

    return `
    <div class="book-card" data-book-id="${book.id}">
      <div class="book-image-wrapper">
        <img src="${book.image}" alt="${book.title}" class="book-image" loading="lazy">
        ${badge}
      </div>
      <div class="book-info">
        <h6 class="book-title">${book.title}</h6>
        ${book.actionButton ? `<button class="btn ${buttonClass}" data-action="${book.action || "view"}">${book.actionButton}</button>` : ""}
      </div>
    </div>
  `
}

export function initBookCards() {
    const bookCards = document.querySelectorAll(".book-card")

    bookCards.forEach((card) => {
        const actionBtn = card.querySelector(".btn-action")
        if (actionBtn) {
            actionBtn.addEventListener("click", (e) => {
                e.preventDefault()
                const bookTitle = card.querySelector(".book-title").textContent
                const action = actionBtn.dataset.action
            })
        }
    })
}
