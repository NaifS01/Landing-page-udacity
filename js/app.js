document.addEventListener("DOMContentLoaded", LoadinLi, false);
document.addEventListener("DOMContentLoaded", ActiveSection, false);

function isActive(element) {
    return element.classList.contains("activeSection");
}

function LoadinLi() {
    const sections = document.querySelectorAll("section");


    for (let i = 0; i < sections.length; i++) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        let sectionName = sections[i].getAttribute("data-section");
        a.innerText = sectionName;
        a.setAttribute("href", "#" + sectionName);
        a.setAttribute("id", "List_" + sectionName);
        li.appendChild(a);
        document.getElementById("nav_list").appendChild(li)
        a.addEventListener("click", function () {
            scrolling(i + 1);
        }, false)
    }
}
function scrolling(SectionClicked) {
    const sections = document.querySelectorAll("section");
    sections.forEach((element) => {
        element.classList.remove("activeSection")

    })
    let ClickedSection = document.getElementById("section_" + SectionClicked);
    ClickedSection.classList.add("activeSection");

    const list = document.getElementById("nav_list").querySelectorAll("li")

    list.forEach((item) => {
        item.classList.remove("active");

    })
    list[SectionClicked - 1].classList.add("active");

}
function ActiveSection() {

    window.addEventListener("scroll", function () {
        const sections = document.querySelectorAll("section");
        for (let i = 0; i < sections.length; i++) {
            const postion = sections[i].getBoundingClientRect();
            const po = postion.top
            if (po <= window.innerHeight / 2) {
                let getActiveSection = document.getElementsByClassName("activeSection");
                getActiveSection[0].classList.remove("activeSection");
                sections[i].classList.add("activeSection");

                let activeNav = document.getElementsByClassName("active");
                if (activeNav.length > 0) {
                    activeNav[0].classList.remove("active");
                }
                navActiveIt = document.getElementById("nav_list").querySelectorAll("li")
                navActiveIt[i].classList.add("active");
            }

        }

    })



}



window.onscroll = function () {
    myScrollerStickker();
}
let nav = document.getElementById("nav")
let navPos = nav.offsetTop;
function myScrollerStickker() {

    if (window.pageXOffset >= navPos) {
        nav.classList.add("sticky");
    } else {
        nav.classList.add("sticky");
    }
}
