const _element = new WeakMap();

class getPageElement{
    constructor(element){
        _element.set(this, element);
    }

    get element(){
        return _element.get(this);
    }

    selectElement(){
        return document.querySelector(_element.get(this))
    }
}

const greetingMsg = new getPageElement('#greeting-msg');
const loadingBar = new getPageElement('.loading-bar');
const selfIntroduction = new getPageElement('.self-introduction');
const abilitiesSection = new getPageElement('#abilities');
const codeSectionTitle = new getPageElement('h3:nth-of-type(1)');
const designSectionTitle = new getPageElement('h3:nth-of-type(2)');
const mySkillsTitle = new getPageElement('#abilities h2');



// const selectElements = {
//     greetingMsg : document.querySelector('#greeting-msg'),
//     loadingBar: document.querySelector('.loading-bar'),
//     selfIntroduction : document.querySelector('.self-introduction'),
//     abilitiesSection : document.querySelector('#abilities'),
//     codeSectionTitle : document.querySelector('h3:nth-of-type(1)'),
//     designSectionTitle : document.querySelector('h3:nth-of-type(2)'),
//     mySkillsTitle : document.querySelector('#abilities h2')
// }

// const selectCodeLogos = {
//     htmlIcon : document.querySelector('#code .my-skill-card:nth-of-type(1)'), 
//     cssIcon : document.querySelector('#code .my-skill-card:nth-of-type(2)'), 
//     javascriptIcon : document.querySelector('#code .my-skill-card:nth-of-type(3)'), 
//     bootstrapIcon : document.querySelector('#code .my-skill-card:nth-of-type(4)'), 
//     gitIcon : document.querySelector('#code .my-skill-card:nth-of-type(5)'), 
//     gitHubIcon : document.querySelector('#code .my-skill-card:nth-of-type(6)') 
// }

class CodeLogo extends getPageElement {
    constructor(element) {
        super(element);
    }

    selectElement() {
        return super.selectElement();
    }
}

const htmlIcon = new CodeLogo('#code .my-skill-card:nth-of-type(1)');
const cssIcon = new CodeLogo('#code .my-skill-card:nth-of-type(2)');
const javascriptIcon = new CodeLogo('#code .my-skill-card:nth-of-type(3)');
const bootstrapIcon = new CodeLogo('#code .my-skill-card:nth-of-type(4)');
const gitIcon = new CodeLogo('#code .my-skill-card:nth-of-type(5)');
const gitHubIcon = new CodeLogo('#code .my-skill-card:nth-of-type(6)');

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
    await contentTransition(greetingMsg.selectElement(),'show-page-content', 1000);
    await contentTransition(loadingBar.selectElement(),'loading-bar-fill', 200);
    await contentTransition(greetingMsg.selectElement(),'show-page-content', 3000);
    await contentTransition(selfIntroduction.selectElement(),'show-page-content', 1000);
    await contentTransition(abilitiesSection.selectElement(), 'show-page-content', 1000);
    await contentTransition(mySkillsTitle.selectElement(), 'show-page-content', 500);
    await contentTransition(codeSectionTitle.selectElement(),'show-page-content', 1000);
    await contentTransition(htmlIcon.selectElement(),'show-page-content', 300);
    await contentTransition(cssIcon.selectElement(), 'show-page-content', 300);
    await contentTransition(javascriptIcon.selectElement(), 'show-page-content', 300);
    await contentTransition(bootstrapIcon.selectElement(), 'show-page-content', 300);
    await contentTransition(gitIcon.selectElement(), 'show-page-content', 300);
    await contentTransition(gitHubIcon.selectElement(), 'show-page-content', 300);
    await contentTransition(selectElements.designSectionTitle, 'show-page-content', 500);
    await contentTransition(selectDesignLogos.photoshopIcon, 'show-page-content', 300);
    await contentTransition(selectDesignLogos.figmaIcon, 'show-page-content', 300);
    contentTransition(selectDesignLogos.premiereIcon, 'show-page-content', 300);
}

transition();


