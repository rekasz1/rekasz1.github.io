export function createButton(text, href, className, id) {

    let button = document.createElement("a");
    button.innerHTML = text;
    button.href = href;
    button.className = className;
    button.id = id;

    return button

}
