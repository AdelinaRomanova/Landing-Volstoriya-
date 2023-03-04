const carosel = document.querySelector(".list_program"),
arrowLeft = document.querySelector("#left");
arrowR = document.querySelector("#right");

let isDragStart = false, prevPageX, prevScrollLeft;

arrowLeft.addEventListener("click", () => {
    carosel.scrollLeft += -380;
})

arrowR.addEventListener("click", () => {
    if ( window.innerWidth > 1105) {
        carosel.scrollLeft += 345;
    }
    if ( window.innerWidth < 1105 && window.innerWidth > 890) {
        carosel.scrollLeft += 400;
    }
    if ( window.innerWidth < 890 && window.innerWidth > 715) {
        carosel.scrollLeft += 340;
    }
    if ( window.innerWidth < 715) {
        carosel.scrollLeft += 430;
    }
})

arrowLeft.addEventListener("click", () => {
    if ( window.innerWidth > 1105) {
        carosel.scrollLeft -= 345;
    }
    if ( window.innerWidth < 1105 && window.innerWidth > 890) {
        carosel.scrollLeft -= 400;
    }
    if ( window.innerWidth < 890 && window.innerWidth > 715) {
        carosel.scrollLeft -= 340;
    }
    if ( window.innerWidth < 715) {
        carosel.scrollLeft -= 430;
    }
})

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carosel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carosel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
}

carosel.addEventListener("mousedown", dragStart)
carosel.addEventListener("mousemove", dragging)
carosel.addEventListener("mouseup", dragStop)