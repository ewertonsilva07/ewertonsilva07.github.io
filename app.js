const pageContent = document.querySelector('.page-content');
const greetingMsg = document.querySelector('#greeting-msg');
const selfIntroduction = document.querySelector('.self-introduction');


const contentTransition = function(el, classToggle, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            el.classList.add(classToggle)
            resolve();
        }, delay)
    })
}

async function transition(){
    await contentTransition(pageContent,'show-page-content', 2000);
    await contentTransition(greetingMsg,'hide-greeting', 6000);
    contentTransition(selfIntroduction,'show-self-introduction', 1000)
}

transition();
