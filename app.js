const pageContent = document.querySelector('.page-content');
const greetingMsg = document.querySelector('#greeting');


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
    contentTransition(greetingMsg,'hide-greeting', 6000);
}

transition();
