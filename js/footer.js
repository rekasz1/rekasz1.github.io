export function createFooter() {
    let footer = document.createElement('footer')
    footer.style.height = "100px";
    footer.setAttribute('id', 'footer-content');


    let gitHubLink = document.createElement('a');
    gitHubLink.innerText = "GitHub"
    gitHubLink.href = "https://github.com/rekasz1";
    gitHubLink.setAttribute('target', '_blank');
    gitHubLink.setAttribute('id', 'github');
    // gitHubLink.style.fontSize = "1em"


    let linkedinLink = document.createElement('a');
    linkedinLink.innerText = "LinkedIn"
    linkedinLink.href = "https://www.linkedin.com/in/vass-reka/";
    linkedinLink.setAttribute('target', '_blank')
    linkedinLink.setAttribute('id', 'linkedin')


    // let imgtHtmlCssJs = document.createElement('img');
    // imgtHtmlCssJs.src = "../assets/html-css-javascript-logo.png";
    // imgtHtmlCssJs.style.width = '80px'

    // let imgReact = document.createElement('img');
    // imgReact.src = "../assets/react-logo.png";
    // imgReact.style.width = '30px'

    // let imgGithub = document.createElement('img');
    // imgGithub.src = "../assets/github-logo.png";
    // imgGithub.style.width = '50px'
    // imgGithub.setAttribute('id', 'github')

    // let imgLinkedIn = document.createElement('img');
    // imgLinkedIn.src = "../assets/linkedin-logo.png";
    // imgLinkedIn.style.width = '30px'
    // imgGithub.setAttribute('id', 'linkedin')

    let container = document.getElementsByTagName("div")[0];
    container.appendChild(footer);

    let footerContainer = document.getElementById("footer-content");
    footerContainer.appendChild(gitHubLink);
    footerContainer.appendChild(linkedinLink);
    // footerContainer.appendChild(imgGithub);
    // footerContainer.appendChild(imgLinkedIn);
}


// function createImg(src, width, id){

//     let imgOfFooter = document.createElement('img');

// }