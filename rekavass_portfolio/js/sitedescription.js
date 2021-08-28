export function createsiteDescription() {
    let contentContainer = document.createElement('div')
    contentContainer.setAttribute('id', 'content-container')

    let portrait = document.createElement('img')
    portrait.src = "../assets/cvphoto-cropped.png";
    portrait.setAttribute('id', 'portrait')

    let title = document.createElement('h1');
    title.style.color = "rgb(106, 117, 126)";
    title.innerText = '<Hi, I’m  Reka, \n Front-end Developer/>';
    title.setAttribute('id', 'glitch')


    let description = document.createElement('p');
    description.innerText = "You’ve found my personal corner of the internet - everything you want to know about me is here."
    // description.style.fontSize = "30px"
    description.style.color = "#515E69"


    let mainDiv = document.getElementsByTagName('div')[0];
    mainDiv.appendChild(contentContainer)

    let contentDiv = document.getElementById('content-container');

    contentDiv.appendChild(portrait);
    contentDiv.appendChild(title);
    contentDiv.appendChild(description);


    //span for glitch effect
    // let firstSpan = document.createElement('span')
    // firstSpan.innerText = '<Hi, I’m  Reka,  Front-end Developer/>'
    // firstSpan.style.color = "#6a757e"

    // let secondSpan = document.createElement('span')
    // secondSpan.innerText = '<Hi, I’m  Reka,  Front-end Developer/>'
    // secondSpan.style.color = "#6a757e"
    // span.setAttribute('aria-hidden' "true")
    // span.ariaHidden = true;
    // console.log(span.ariaHidden)

    // let text = document.createElement('a')
    // text.innerText = '<Hi, I’m  Reka,  Front-end Developer/>';


    // let spanOfPElement = document.getElementById('glitch')
    //  spanOfPElement.appendChild(firstSpan)
    // spanOfPElement.appendChild(text)
    // // spanOfPElement.innerText = '<Hi, I’m  Reka, \n Front-end Developer/>';
    // spanOfPElement.appendChild(secondSpan)


}