const selectLogos = {
    greetingMsg : document.querySelector('#greeting-msg'),
    selfIntroduction : document.querySelector('.self-introduction'),
    abilitiesSection : document.querySelector('#abilities'),
    codeSectionTitle : document.querySelector('h3:nth-of-type(1)'),
    designSectionTitle : document.querySelector('h3:nth-of-type(2)'),
    mySkillsTitle : document.querySelector('#abilities h2'),
    htmlIcon : document.querySelector('#code i:nth-of-type(1)'), 
    cssIcon : document.querySelector('#code i:nth-of-type(2)'), 
    javascriptIcon : document.querySelector('#code i:nth-of-type(3)'), 
    bootstrapIcon : document.querySelector('#code i:nth-of-type(4)'), 
    gitIcon : document.querySelector('#code i:nth-of-type(5)'), 
    gitHubIcon : document.querySelector('#code i:nth-of-type(6)'), 
    photoshopIcon : document.querySelector('#design i:nth-of-type(1)'),
    figmaIcon : document.querySelector('#design i:nth-of-type(2)'),
    premiereIcon : document.querySelector('#design i:nth-of-type(3)')
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
    await contentTransition(selectLogos.greetingMsg,'show-page-content', 1000);
    await contentTransition(selectLogos.greetingMsg,'show-page-content', 3000);
    await contentTransition(selectLogos.selfIntroduction,'show-page-content', 1000);
    await contentTransition(selectLogos.abilitiesSection, 'show-page-content', 1000);
    await contentTransition(selectLogos.mySkillsTitle, 'show-page-content', 500);
    await contentTransition(selectLogos.codeSectionTitle,'show-page-content', 1000);
    await contentTransition(selectLogos.htmlIcon,'show-page-content', 300);
    await contentTransition(selectLogos.cssIcon, 'show-page-content', 300);
    await contentTransition(selectLogos.javascriptIcon, 'show-page-content', 300);
    await contentTransition(selectLogos.bootstrapIcon, 'show-page-content', 300);
    await contentTransition(selectLogos.gitIcon, 'show-page-content', 300);
    await contentTransition(selectLogos.gitHubIcon, 'show-page-content', 300);
    await contentTransition(selectLogos.designSectionTitle, 'show-page-content', 500);
    await contentTransition(selectLogos.photoshopIcon, 'show-page-content', 300);
    await contentTransition(selectLogos.figmaIcon, 'show-page-content', 300);
    await contentTransition(selectLogos.premiereIcon, 'show-page-content', 300);
}

transition();


