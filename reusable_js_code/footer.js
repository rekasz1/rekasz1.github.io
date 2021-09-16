export function createFooter() {
    let footer = document.createElement('footer')
    footer.style.height = "100px";
    footer.setAttribute('id', 'footer-content');


    let gitHubLink = document.createElement('a');
    gitHubLink.innerText = "GitHub"
    gitHubLink.href = "https://github.com/rekasz1";
    gitHubLink.setAttribute('target', '_blank');
    gitHubLink.setAttribute('id', 'github');


    let linkedinLink = document.createElement('a');
    linkedinLink.innerText = "LinkedIn"
    linkedinLink.href = "https://www.linkedin.com/in/vass-reka/";
    linkedinLink.setAttribute('target', '_blank')
    linkedinLink.setAttribute('id', 'linkedin');

    let container = document.getElementsByTagName("div")[0];
    container.appendChild(footer);

    let footerContainer = document.getElementById("footer-content");
    footerContainer.appendChild(gitHubLink);
    footerContainer.appendChild(linkedinLink);
}
