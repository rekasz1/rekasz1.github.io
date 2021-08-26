import createButton from "./button";

function createHeader() {
    let header = document.createElement('header')

    header.style.height = "100px";

    var body = document.getElementsByTagName("div")[0];
    body.appendChild(header);

    createButton("About Me")
    createButton("Projects")

}

export default createHeader