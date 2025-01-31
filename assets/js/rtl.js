const rtlSwitch = document.querySelector("#rtlmode");
const bodyDom1 = document.querySelector("body");
const htmlDom = document.querySelector("html");

rtlSwitch?.addEventListener("change", (e) => {
    const checkbox = e.target;
    if (checkbox.checked) {
        bodyDom1.classList.add("rtl");
        bodyDom1.setAttribute("dir", "rtl");
    }

    if (!checkbox.checked) {
        bodyDom1.classList.remove("rtl");
        bodyDom1.setAttribute("dir", "ltr");
    }
});
const darkSwitch = document.querySelector("#darkmode");
const bodyDom = document.querySelector("body");

darkSwitch?.addEventListener("change", (e) => {
    const checkbox = e.target;
    if (checkbox.checked) {
        bodyDom.classList.add("dark");
    }

    if (!checkbox.checked) {
        bodyDom.classList.remove("dark");
    }
});
