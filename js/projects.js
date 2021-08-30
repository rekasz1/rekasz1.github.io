import { createHeader } from './header.js'

import { createFooter } from './footer.js'

function createProjectsTitle() {
    let projectTitleDiv = document.createElement('div')
    projectTitleDiv.setAttribute('id', 'title-container')

    let projectTitle = document.createElement('h1');
    // projectTitle.style.color = "rgb(252, 252, 255)";
    projectTitle.setAttribute('id', 'project-title')
    projectTitle.innerHTML = 'Here I present my main creations made during the course that I’m proud of';

    let mainDiv = document.getElementsByTagName('div')[0];
    mainDiv.appendChild(projectTitleDiv);

    let projectTitileContainer = document.getElementById('title-container');
    projectTitileContainer.appendChild(projectTitle)
}



// function createPostOfProject {

// }




createHeader()
createProjectsTitle()
createFooter()