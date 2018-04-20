export default (elem) => {
    elem.classList.add("show_notification");
    setTimeout(() => {
        elem.classList.remove("show_notification");
    }, 500)
}