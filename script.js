function changePage(pageId) {
    const currentPage = document.querySelector(".page.active");
    const newPage = document.getElementById(pageId);

    if (currentPage === newPage) return;

    if (currentPage) {
        // Fade out atual
        currentPage.classList.remove("active");
    }

    // Aguardar fade-out antes do fade-in
    setTimeout(() => {
        newPage.classList.add("active");

        if (newPage.classList.contains("top-page")) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, 400); // tempo igual ou maior que o fade-out
}
