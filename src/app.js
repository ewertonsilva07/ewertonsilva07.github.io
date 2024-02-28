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


class Logo extends getPageElement {
    constructor(element) {
        super(element);
    }

    selectElement() {
        return super.selectElement();
    }
}

const htmlIcon = new Logo('#code .my-skill-card:nth-of-type(1)');
const cssIcon = new Logo('#code .my-skill-card:nth-of-type(2)');
const javascriptIcon = new Logo('#code .my-skill-card:nth-of-type(3)');
const bootstrapIcon = new Logo('#code .my-skill-card:nth-of-type(4)');
const gitIcon = new Logo('#code .my-skill-card:nth-of-type(5)');
const gitHubIcon = new Logo('#code .my-skill-card:nth-of-type(6)');
const photoshopIcon = new Logo('#design .my-skill-card:nth-of-type(1)');
const figmaIcon = new Logo('#design .my-skill-card:nth-of-type(2)');
const premiereIcon = new Logo('#design .my-skill-card:nth-of-type(3)');


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
    await contentTransition(designSectionTitle.selectElement(), 'show-page-content', 500);
    await contentTransition(photoshopIcon.selectElement(), 'show-page-content', 300);
    await contentTransition(figmaIcon.selectElement(), 'show-page-content', 300);
    contentTransition(premiereIcon.selectElement(), 'show-page-content', 300);
}

transition();


