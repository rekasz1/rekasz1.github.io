import { createHeader } from '../reusable_js_code/header.js'

import { createFooter } from '../reusable_js_code/footer.js'

var projectId = 0

var projectsList = [
    {
        id: projectId++,
        title: "Rock Paper Scissors Game",
        source: 'https://github.com/rekasz1/Rock_Paper_Scissors',
        img: "../assets/Rock-paper-scissors.PNG"
    },
    {
        id: projectId++,
        title: "Player and Monster Game",
        source: 'https://github.com/rekasz1/Player_And_Monsters',
        img: "../assets/player-monster.PNG"
    },
    {
        id: projectId++,
        title: "Guess my Number Game",
        source: 'https://github.com/rekasz1/Guess_My_Number',
        img: "../assets/Guess-my-number.PNG"
    },

    {
        id: projectId++,
        title: "Digital Timer",
        source: 'https://github.com/rekasz1/Digital_Timer',
        img: "../assets/Timer.PNG"
    },
    {
        id: projectId++,
        title: "Convert Kg To Pund",
        source: 'https://github.com/rekasz1/Converter_Kg_Pound',
        img: "../assets/Converter.PNG"
    },
    {
        id: projectId++,
        title: "To Do Lsit",
        source: 'https://github.com/rekasz1/To_Do_List',
        img: "../assets/Todo.PNG"
    },
    {
        id: projectId++,
        title: "Move The Spaceship Around",
        source: 'https://github.com/rekasz1/Spaceship',
        img: "../assets/spaceship.PNG"
    },

    {
        id: projectId++,
        title: "Fake React Shop",
        source: 'https://github.com/rekasz1/Fake_React_Shop',
        img: "../assets/react-shop.PNG"
    },
];





function createProjectItem(id, title, source, img) {
    let projectItemDiv = document.createElement('div');
    projectItemDiv.setAttribute('id', id);
    projectItemDiv.classList.add('project-items');


    let projectItemTitle = document.createElement('a');
    projectItemTitle.innerHTML = title;
    projectItemTitle.href = source;
    projectItemTitle.setAttribute('target', '_blank')


    let projectItemImg = document.createElement('img');
    projectItemImg.src = img;
    projectItemImg.style.width = '350px'
    projectItemImg.style.height = '230px'

    // let projectItemDivContainer = document.getElementsByClassName('project-items');
    projectItemDiv.append(projectItemImg);
    projectItemDiv.append(projectItemTitle);



    return projectItemDiv
}


function appendProjectElements() {

    let projectElementsDiv = document.createElement('div');
    projectElementsDiv.setAttribute('id', 'projects-container');


    for (let index = 0; index < projectsList.length; index++) {
        let projectItem = projectsList[index];

        let projectItemDiv1 = createProjectItem(projectItem.id, projectItem.title, projectItem.source, projectItem.img);

        projectElementsDiv.appendChild(projectItemDiv1);

    }

    return projectElementsDiv
}

function appendElements() {

    let toAppend = appendProjectElements();

    let projectitemContainer = document.getElementById("App");
    projectitemContainer.appendChild(toAppend);

}



function createProjectsTitle() {
    let projectTitleDiv = document.createElement('div')
    projectTitleDiv.setAttribute('id', 'title-container')

    let projectTitle = document.createElement('h1');
    // projectTitle.style.color = "rgb(252, 252, 255)";
    projectTitle.setAttribute('id', 'project-title')
    projectTitle.innerHTML = 'Here I present my main creations made during the course (and not only) that I’m proud of';

    let mainDiv = document.getElementsByTagName('div')[0];
    mainDiv.appendChild(projectTitleDiv);

    let projectTitileContainer = document.getElementById('title-container');
    projectTitileContainer.appendChild(projectTitle)
}



// function createPostOfProject {

// }


createHeader()
createProjectsTitle()
// createProjectItem()
// appendProjectElements()
appendElements()
createFooter()