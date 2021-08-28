import { createButton } from './button.js'

export function createHeader() {
    let header = document.createElement('header')

    header.style.height = "100px";

    var body = document.getElementsByTagName("div")[0];
    body.appendChild(header);


    createButton('Home', 'index.html', 'button', 'button-home')
    createButton('About Me', 'aboutme.html', 'button', 'button-aboutme')
    createButton('Projects', 'aboutme.html', 'button', 'button-project')
    // createButton("Projects")

}

