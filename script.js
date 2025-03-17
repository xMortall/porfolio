function changePage(pageId) {
    const currentPage = document.querySelector(".page.active");
    const newPage = document.getElementById(pageId);

    if (currentPage !== newPage) {
        // Remove a página atual com animação
        currentPage.style.transform = "translate(-50%, -60%)";
        currentPage.style.opacity = "0";
        
        setTimeout(() => {
            currentPage.classList.remove("active");

            // Ativa a nova página com animação
            newPage.classList.add("active");
            newPage.style.transform = "translate(-50%, -40%)";
            newPage.style.opacity = "1";
        }, 500); // Tempo da animação
    }
}
