// export function duble(n) {
//     return n * 2;
// }

export function createButton(text, href, className, id) {

    let button = document.createElement("a");
    button.innerHTML = text;
    button.href = href;
    button.className = className;
    button.id = id;


    // let container = document.getElementsByTagName("header")[0];
    // container.appendChild(button);
    return button

}
