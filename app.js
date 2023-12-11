const greetingMsg = document.querySelector('#greeting-msg');
const selfIntroduction = document.querySelector('.self-introduction');
const codeSectionTitle = document.querySelector('h3:nth-of-type(1)');
const designSectionTitle = document.querySelector('h3:nth-of-type(2)');
const mySkillsTitle = document.querySelector('#abilities h2');


const contentTransition = function(el, classToggle, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            el.classList.toggle(classToggle)
            resolve();
        }, delay)
    })
}

const htmlIcon = document.querySelector('#code i:nth-of-type(1)'); 
const cssIcon = document.querySelector('#code i:nth-of-type(2)'); 
const javascriptIcon = document.querySelector('#code i:nth-of-type(3)'); 
const bootstrapIcon = document.querySelector('#code i:nth-of-type(4)'); 
const gitIcon = document.querySelector('#code i:nth-of-type(5)'); 
const gitHubIcon = document.querySelector('#code i:nth-of-type(6)'); 

const photoshopIcon = document.querySelector('#design i:nth-of-type(1)');
const figmaIcon = document.querySelector('#design i:nth-of-type(2)');
const premiereIcon = document.querySelector('#design i:nth-of-type(3)');


async function transition(){
    await contentTransition(greetingMsg,'show-page-content', 3000);
    await contentTransition(greetingMsg,'show-page-content', 3000);
    await contentTransition(selfIntroduction,'show-page-content', 1000);
    await contentTransition(mySkillsTitle, 'show-page-content', 1000);
    await contentTransition(codeSectionTitle,'show-page-content', 1000);
    await contentTransition(htmlIcon,'show-page-content', 500);
    await contentTransition(cssIcon, 'show-page-content', 500);
    await contentTransition(javascriptIcon, 'show-page-content', 500);
    await contentTransition(bootstrapIcon, 'show-page-content', 500);
    await contentTransition(gitIcon, 'show-page-content', 500);
    await contentTransition(gitHubIcon, 'show-page-content', 500);
    await contentTransition(designSectionTitle, 'show-page-content', 1000);
    await contentTransition(photoshopIcon, 'show-page-content', 500);
    await contentTransition(figmaIcon, 'show-page-content', 500);
    await contentTransition(premiereIcon, 'show-page-content', 500);

}

transition();


