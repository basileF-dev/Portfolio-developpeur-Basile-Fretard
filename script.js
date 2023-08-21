//SCROLL

const navbar = document.querySelector('.navbar');
const techTags = document.querySelectorAll('.tech-logo-container');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.remove('hidden');
            entry.target.classList.add('show');

            techTags.forEach((el) => {
                if(entry.target.contains(el)) {
                    entry.target.addEventListener('transitionend', () => {
                        el.style.transitionDelay = '0s';
                    })
                }
            })

            observer.unobserve(entry.target)
        }
    })
}, {
    threshold: 1,
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 0)
})

//TEXT-TYPING

const textEl = document.getElementById('title');
const phrases = ["Hello, my name is Basile !", "I am a fullstack developer !", "Welcome to my portfolio !"];
let i = 0;
let j = 0;
let currentPhrase = [];

function typingLoop (){
    textEl.innerHTML = currentPhrase.join('');
    if(i < phrases.length){

        if(j < phrases[i].length + 1){
            currentPhrase.push(phrases[i][j])
            j++
        }
        if(j >= phrases[i].length + 1){
            if(i == phrases.length - 1){
                return
            }else {
                setTimeout(() => {
                    currentPhrase = [];
                    j = 0;
                    i++;
                    typingLoop()
                }, 800)
            }
        }else{
            setTimeout(typingLoop, 70)
        }
    }
};

setTimeout(typingLoop, 200)

//MODALE

import projects from './projects-data.js';

const modale = document.getElementById('modal');
const modalInner = document.querySelector('.modal-inner');
const cards = document.querySelectorAll('.project-card');

for(let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('click', () => {
        console.log(i)
        modale.showModal();

        const mainImgContainer = document.querySelector('.modal-main-img');
        const title = document.querySelector('.modal-title');
        const description = document.querySelector('.modal-desc');
        const tagsContainer = document.querySelector('.tags-container');
        const modalGallery = document.querySelector('.modal-gallery');

        modale.addEventListener('click', (e) => {
            if(!modalInner.contains(e.target)){
                mainImgContainer.innerHTML = ''; 
                tagsContainer.innerHTML = ''; 
                modalGallery.innerHTML = ''; 
                modale.close();
            }
        })

        const mainImg = document.createElement('img');
        mainImg.src = projects[i].mainImg;
        title.innerText = projects[i].title;
        description.innerText = projects[i].desc;
        for(let j = 0; j < projects[i].tech.length; j++){
            const techEl = document.createElement('div');
            techEl.innerText = projects[i].tech[j];
            techEl.classList.add('modal-tag')
            tagsContainer.appendChild(techEl);
        }

        mainImgContainer.appendChild(mainImg);

        for(let k = 0; k < projects[i].imgs.length; k++){
            const img = document.createElement('img');
            img.src = projects[i].imgs[k];
            modalGallery.appendChild(img)
        }
    })
}

//PRESS-PAPIER-MAIL

const copyButton = document.querySelector('.email-container');
const textToCopy = document.getElementById('email');

copyButton.addEventListener('click', () => {
    const range = document.createRange();
    range.selectNode(textToCopy);
    
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  
    document.execCommand('copy');
    selection.removeAllRanges();
  
    alert('Mon adresse email est copiée, envoyez moi un message et je vous répondrais aussi vite que possible !');
  });