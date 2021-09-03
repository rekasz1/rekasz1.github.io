export function createsiteDescription() {
    let contentContainer = document.createElement('div')
    contentContainer.setAttribute('id', 'content-container')

    let portrait = document.createElement('img')
    portrait.src = "../assets/cvphoto-cropped.png";
    portrait.setAttribute('id', 'portrait')

    let title = document.createElement('h1');
    title.style.color = "rgb(252, 252, 255)";
    title.innerText = '<Hi, I’m  Reka, Front-end Developer/>';
    title.setAttribute('id', 'glitch')



    let description = document.createElement('p');
    description.innerText = "You’ve found my personal corner of the internet - everything you want to know about me is here."
    description.style.color = "#fcfcff"


    let mainDiv = document.getElementsByTagName('div')[0];
    mainDiv.appendChild(contentContainer)

    contentContainer.appendChild(title);
    contentContainer.appendChild(description);
    contentContainer.appendChild(portrait);

}