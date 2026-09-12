const pages = document.querySelectorAll(".page");

let currentPage = 0;

function showPage(pageNumber) {
    if (pageNumber < 0) {
        pageNumber = 0;
    }

    if (pageNumber >= pages.length) {
        pageNumber = pages.length - 1;
    }

    pages.forEach(function(page) {
        page.classList.remove("active");

        // reset page yang tidak aktif
        page.style.opacity = "0";
        page.style.transform =
            "translateX(80px) rotate(2deg) scale(.96)";
        page.style.pointerEvents = "none";
    });

    const activePage = pages[pageNumber];

    activePage.classList.add("active");

    // paksa page aktif terlihat
    activePage.style.opacity = "1";
    activePage.style.transform =
        "translateX(0) rotate(0) scale(1)";
    activePage.style.pointerEvents = "auto";

    currentPage = pageNumber;

    if (pageNumber === 2) {
        document.querySelectorAll(".love-note").forEach(function(note, index) {
            note.style.animationDelay = (index * 0.08) + "s";
        });
    }

    updatePageNumber();
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        showPage(currentPage + 1);
    }
}

function prevPage() {
    if (currentPage > 0) {
        showPage(currentPage - 1);
    }
}

function updatePageNumber() {
    const pageNumber = document.getElementById("pageNumber");

    const current = String(currentPage + 1).padStart(2, "0");
    const total = String(pages.length).padStart(2, "0");

    pageNumber.textContent = current + " / " + total;
}

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        nextPage();
    }

    if (event.key === "ArrowLeft") {
        prevPage();
    }
});

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", function(event) {
    touchStartX = event.changedTouches[0].screenX;
});

document.addEventListener("touchend", function(event) {
    touchEndX = event.changedTouches[0].screenX;

    const swipeDistance = touchEndX - touchStartX;

    if (swipeDistance < -50) {
        nextPage();
    }

    if (swipeDistance > 50) {
        prevPage();
    }
});

showPage(0);

// ===============================
// MAKE A WISH
// ===============================

function makeWish() {

    const flames = document.querySelectorAll(".flame");
    const message = document.getElementById("cakeMessage");
    const button = document.querySelector(".wish-button");

    flames.forEach(function(flame) {
        flame.style.animation = "none";
        flame.style.opacity = "0";
        flame.style.transform =
            "translateX(-50%) scale(0)";
    });

    message.textContent =
        "wish made. now let's make it happen. ♡";

    button.textContent =
        "wish granted ✦";

    button.disabled = true;

}
