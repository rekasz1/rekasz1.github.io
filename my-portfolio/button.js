function createButton(label) {

    var button = document.createElement("button");
    button.innerHTML = label;

    button.style.width = "150px";
    button.style.height = "40px";

    let container = document.getElementsByTagName("header")[0];
    container.appendChild(button);
}

export default createButton

