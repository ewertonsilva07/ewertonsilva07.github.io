
const selectElements = {
    greetingMsg : document.querySelector('#greeting-msg'),
    loadingBar: document.querySelector('.loading-bar'),
    selfIntroduction : document.querySelector('.self-introduction'),
    abilitiesSection : document.querySelector('#abilities'),
    codeSectionTitle : document.querySelector('h3:nth-of-type(1)'),
    designSectionTitle : document.querySelector('h3:nth-of-type(2)'),
    mySkillsTitle : document.querySelector('#abilities h2')
}

const selectCodeLogos = {
    htmlIcon : document.querySelector('#code .my-skill-card:nth-of-type(1)'), 
    cssIcon : document.querySelector('#code .my-skill-card:nth-of-type(2)'), 
    javascriptIcon : document.querySelector('#code .my-skill-card:nth-of-type(3)'), 
    bootstrapIcon : document.querySelector('#code .my-skill-card:nth-of-type(4)'), 
    gitIcon : document.querySelector('#code .my-skill-card:nth-of-type(5)'), 
    gitHubIcon : document.querySelector('#code .my-skill-card:nth-of-type(6)') 
}

const selectDesignLogos = {
    photoshopIcon : document.querySelector('#design .my-skill-card:nth-of-type(1)'),
    figmaIcon : document.querySelector('#design .my-skill-card:nth-of-type(2)'),
    premiereIcon : document.querySelector('#design .my-skill-card:nth-of-type(3)')
}

const contentTransition = function(el, classToggle, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            el.classList.toggle(classToggle)
            resolve();
        }, delay)
    })
}


async function transition(){
    await contentTransition(selectElements.greetingMsg,'show-page-content', 1000);
    await contentTransition(selectElements.loadingBar,'loading-bar-fill', 200);
    await contentTransition(selectElements.greetingMsg,'show-page-content', 3000);
    await contentTransition(selectElements.selfIntroduction,'show-page-content', 1000);
    await contentTransition(selectElements.abilitiesSection, 'show-page-content', 1000);
    await contentTransition(selectElements.mySkillsTitle, 'show-page-content', 500);
    await contentTransition(selectElements.codeSectionTitle,'show-page-content', 1000);
    await contentTransition(selectCodeLogos.htmlIcon,'show-page-content', 300);
    await contentTransition(selectCodeLogos.cssIcon, 'show-page-content', 300);
    await contentTransition(selectCodeLogos.javascriptIcon, 'show-page-content', 300);
    await contentTransition(selectCodeLogos.bootstrapIcon, 'show-page-content', 300);
    await contentTransition(selectCodeLogos.gitIcon, 'show-page-content', 300);
    await contentTransition(selectCodeLogos.gitHubIcon, 'show-page-content', 300);
    await contentTransition(selectElements.designSectionTitle, 'show-page-content', 500);
    await contentTransition(selectDesignLogos.photoshopIcon, 'show-page-content', 300);
    await contentTransition(selectDesignLogos.figmaIcon, 'show-page-content', 300);
    contentTransition(selectDesignLogos.premiereIcon, 'show-page-content', 300);
}

transition();


