import { createHeader } from '../reusable_js_code/header.js'
import { createFooter } from '../reusable_js_code/footer.js'

function createDivForContent() {

    let education = createEductaion()
    let language = createLanguageknowledge()
    let interest = createInterests();


    let eduLanIntDiv = document.createElement('div');
    eduLanIntDiv.setAttribute('id', 'eduLanInt-content');
    eduLanIntDiv.appendChild(education);
    eduLanIntDiv.appendChild(language);
    eduLanIntDiv.appendChild(interest);


    let divForContent = document.createElement('div');
    divForContent.setAttribute('id', 'div-for-content');

    let aboutMe = createAboutMe();
    divForContent.appendChild(aboutMe)
    divForContent.appendChild(eduLanIntDiv)

    let bodyApp = document.getElementsByTagName('div')[0];
    bodyApp.appendChild(divForContent);
}

function createAboutMe() {
    let moreAboutMeDiv = document.createElement('div');
    moreAboutMeDiv.setAttribute('id', 'more-about-Me-div');

    let moreAboutMeTitle = document.createElement('h1');
    moreAboutMeTitle.innerText = 'More about Me';
    let moreAboutMeText = document.createElement('p');
    moreAboutMeText.innerText = 'I am an enthusiastic front-end developer (check my GitHub page, you will find a link in the footer), who believes that in the near future IT will be her career. I am looking for new challenges, stepping out of my comfort zone, and ways to widen my knowledge and skills. Good communication and problem solving skills are essential in my day-to-day work.'

    moreAboutMeDiv.appendChild(moreAboutMeTitle)
    moreAboutMeDiv.appendChild(moreAboutMeText)

    return moreAboutMeDiv

}

function createEductaion() {

    let educationDiv = document.createElement('div');
    educationDiv.setAttribute('id', 'education-div');
    educationDiv.className = "title-text";

    let educationTitle = document.createElement('h2')
    educationTitle.innerText = 'Education';

    let programName = document.createElement('h4')
    programName.innerText = 'Front-end Web \n Development Course';

    let schoolName = document.createElement('p')
    schoolName.innerText = 'Scoala Infromala de IT';

    let date = document.createElement('p')
    date.innerText = '19/04/21 - 04/09/21';

    let skills = document.createElement('p')
    skills.innerHTML = 'HTML - CSS - JavaScript - React';

    educationDiv.appendChild(educationTitle)
    educationDiv.appendChild(programName)
    educationDiv.appendChild(schoolName)
    educationDiv.appendChild(date)
    educationDiv.appendChild(skills)

    return educationDiv

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

    languageDiv.appendChild(elementTitle)
    languageDiv.appendChild(hungarian)
    languageDiv.appendChild(english)
    languageDiv.appendChild(romanian)
    languageDiv.appendChild(german)

    return languageDiv
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

    InterestsDiv.appendChild(interestsTitle);
    InterestsDiv.appendChild(biking)
    InterestsDiv.appendChild(hiking)
    InterestsDiv.appendChild(reading)
    InterestsDiv.appendChild(movies)
    InterestsDiv.appendChild(coding)

    return InterestsDiv
}


createHeader()
createDivForContent()
createFooter()
