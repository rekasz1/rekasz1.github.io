import createButton from "./button";

function createHeader() {
    let header = document.createElement('header')
    // header.style.height =
    header.style.height = "100px";

    // let headerContainer = document.getElementById("app");
    // app.appendChild(headerContainer);
    // let headerContainer = document.getElementsByTagName('body')[0];
    // headerContainer.appenChild(header)
    var body = document.getElementsByTagName("div")[0];
    body.appendChild(header);

    createButton("About Me")
    createButton("Projects")

    console.log(header)
}

export default createHeader