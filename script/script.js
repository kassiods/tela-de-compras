document.addEventListener("DOMContentLoaded", function() {
    const botoesAdicionar = document.querySelectorAll(".adicionar");
    const slidesContainer = document.querySelector(".slides");
    const slides = document.querySelectorAll(".slide");
    const indicadores = document.querySelectorAll(".indicator");
    const produtosContainer = document.querySelector(".produtos");
    const navLeft = document.querySelector(".nav-left");
    const navRight = document.querySelector(".nav-right");
    let currentSlide = 0;

    botoesAdicionar.forEach(botao => {
        botao.addEventListener("click", function() {
            const quantidadeSpan = this.nextElementSibling;
            let quantidadeAtual = parseInt(quantidadeSpan.textContent);
            quantidadeAtual += 1;
            quantidadeSpan.textContent = quantidadeAtual;
        });
    });

    function showSlide(index) {
        const offset = -index * 100;
        slidesContainer.style.transform = `translateX(${offset}%)`;
        indicadores.forEach((indicator, i) => {
            indicator.classList.remove("active");
            if (i === index) {
                indicator.classList.add("active");
            }
        });
    }

    function autoSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(autoSlide, 3000);

    function scrollTo(direction) {
        produtosContainer.scrollBy({
            left: direction * produtosContainer.clientWidth,
            behavior: "smooth"
        });
    }

    navLeft.addEventListener("click", () => {
        scrollTo(-1);
    });

    navRight.addEventListener("click", () => {
        scrollTo(1);
    });

    indicadores.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    showSlide(currentSlide);
});
