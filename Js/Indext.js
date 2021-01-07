let nav = document.getElementById("van");
function scrolled() {
    let ejey = window.pageYOffset
    if (ejey > 770) {
        nav.classList.add("active0")
    }
    else {
        nav.classList.remove("active0")
    }

}
window.addEventListener("scroll", scrolled);
