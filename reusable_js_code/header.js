import { createButton } from './button.js'

export function createHeader() {
    let header = document.createElement('header')

    header.style.height = "100px";

    var headerContainer = document.getElementsByTagName("div")[0];
    headerContainer.appendChild(header);

    const homebutton = createButton('Home', '/index.html', 'button', 'button-home')
    const aboutMeButton = createButton('About Me', '../about_me/aboutme.html', 'button', 'button-aboutme')
    const projectButton = createButton('Projects', '../projects/projects.html', 'button', 'button-project')
    // createButton("Projects")

    let container = document.getElementsByTagName("header")[0];
    container.appendChild(homebutton);
    container.appendChild(aboutMeButton);
    container.appendChild(projectButton);

    // header.appendChild(homebutton)
    // return header

}

