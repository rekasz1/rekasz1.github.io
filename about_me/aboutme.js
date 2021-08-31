import { createHeader } from '../reusable_js_code/header.js'
import { createFooter } from '../reusable_js_code/footer.js'

function createDivForContent() {

    let divForContent = document.createElement('div')
    divForContent.setAttribute('id', 'div-for-content')

    let bodyApp = document.getElementsByTagName("div")[0];
    bodyApp.appendChild(divForContent);
}

function createAboutMe() {
    let moreAboutMeDiv = document.createElement('div');
    moreAboutMeDiv.setAttribute('id', 'more-about-Me-div');

    let moreAboutMeTitle = document.createElement('h1');
    moreAboutMeTitle.innerText = 'More about Me';
    let moreAboutMeText = document.createElement('p');
    moreAboutMeText.innerText = 'I am an enthusiastic front-end developer (check my GitHub page, you will find a link in the footer), who believes that in the near future IT will be her career. I am looking for new challenges, stepping out of my comfort zone, and ways to widen my knowledge and skills. Good communication and problem solving skills are essential in my day-to-day work.'

    let mainDiv = document.getElementById('div-for-content');
    // let mainDiv = document.getElementsByTagName('div')[0];
    mainDiv.appendChild(moreAboutMeDiv)

    let aboutMeDiv = document.getElementById('more-about-Me-div')
    aboutMeDiv.appendChild(moreAboutMeTitle)
    aboutMeDiv.appendChild(moreAboutMeText)

}

function createEductaion() {
    let educationDiv = document.createElement('div');
    educationDiv.setAttribute('id', 'education-div');
    educationDiv.className = "title-text";


    let educationTitle = document.createElement('h2')
    educationTitle.innerText = 'Education';

    let programName = document.createElement('h4')
    programName.innerText = 'Front-end Web Development Course'

    let schoolName = document.createElement('p')
    schoolName.innerText = 'Scoala Infromala de IT'

    let date = document.createElement('p')
    date.innerText = '19/04/21 - 04/09/21'

    let skills = document.createElement('p')
    skills.innerHTML = 'HTML - CSS - JavaScript - React'

    let mainDiv = document.getElementById('div-for-content');
    mainDiv.appendChild(educationDiv)

    let educationContainer = document.getElementById('education-div')
    educationContainer.appendChild(educationTitle)
    educationContainer.appendChild(programName)
    educationContainer.appendChild(schoolName)
    educationContainer.appendChild(date)
    educationContainer.appendChild(skills)

}

function createLanguageknowledge() {
    let languageDiv = document.createElement('div');
    languageDiv.setAttribute('id', 'language-div');
    languageDiv.className = "title-text";

    let elementTitle = document.createElement('h2');
    elementTitle.innerText = 'Languages';

    let hungarian = document.createElement('p');
    hungarian.innerHTML = 'Hungarian - mother tongue';

    let english = document.createElement('p');
    english.innerHTML = 'English - fluent';

    let romanian = document.createElement('p');
    romanian.innerHTML = 'Romanian - fluent';

    let german = document.createElement('p');
    german.innerHTML = 'German - conversational';



    let languagesDiv = document.getElementById('div-for-content');
    languagesDiv.appendChild(languageDiv);

    let languagesContainer = document.getElementById('language-div')
    languagesContainer.appendChild(elementTitle)
    languagesContainer.appendChild(hungarian)
    languagesContainer.appendChild(english)
    languagesContainer.appendChild(romanian)
    languagesContainer.appendChild(german)
}

function createInterests() {
    let InterestsDiv = document.createElement('div');
    InterestsDiv.setAttribute('id', 'interests-div');
    InterestsDiv.className = "title-text";

    let interestsTitle = document.createElement('h2');
    interestsTitle.innerText = 'Interests';

    let biking = document.createElement('p');
    biking.innerHTML = 'Biking';

    let hiking = document.createElement('p');
    hiking.innerHTML = 'Hiking';

    let reading = document.createElement('p');
    reading.innerHTML = 'Reading';

    let movies = document.createElement('p');
    movies.innerHTML = 'Movies';

    let coding = document.createElement('p');
    coding.innerHTML = 'Coding';

    let mainDiv = document.getElementById('div-for-content');
    mainDiv.appendChild(InterestsDiv)



    let interestsContainer = document.getElementById('interests-div')
    interestsContainer.appendChild(interestsTitle);
    interestsContainer.appendChild(biking)
    interestsContainer.appendChild(hiking)
    interestsContainer.appendChild(reading)
    interestsContainer.appendChild(movies)
    interestsContainer.appendChild(coding)
}


createHeader()
createDivForContent()
createAboutMe()
createEductaion()
createLanguageknowledge()
createInterests()

// createsiteDescription()
createFooter()
