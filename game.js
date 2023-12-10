const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const stitch = [
    'stitch01',
    'stitch02',
    'stitch03',
    'stitch04',
    'stitch05',
    'stitch06',
    'stitch08',
    'stitch09',
    'stitch10',
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {

const disabledCards = document.querySelectorAll('.disabled-card');

  if (disabledCards.length === 18) {

    clearInterval(this.loop);
   
  alert(`Congrats ${spanPlayer.innerHTML}! Your time was ${timer.innerHTML} secs!!`);
  }
}


      const checkCards = () => {
        const firstStitch = firstCard.getAttribute('data-stitch');
        const secondStitch = secondCard.getAttribute('data-stitch');

    if (firstStitch === secondStitch) {

      firstCard.firstChild.classList.add('disabled-card');
      secondCard.firstChild.classList.add('disabled-card');
  
      firstCard = '';
      secondCard = '';
  
      checkEndGame();

    } else {

        setTimeout(() =>{

        firstCard.classList.remove('reveal-card');
        secondCard.classList.remove('reveal-card');

        firstCard = '';
        secondCard = '';
        
        }, 500);
    }

}

const revealCard = ({ target }) => {

    if (target.parentNode.className.includes('reveal-card')) 
    {
      return;
    }
  
    if (firstCard === '') 
    {
      target.parentNode.classList.add('reveal-card');
      firstCard = target.parentNode;
  
    } else if (secondCard === '') 
    {
      target.parentNode.classList.add('reveal-card');
      secondCard = target.parentNode;
    
      checkCards();}

}

const creatCard = (stitch) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('./images/${stitch}.png')`;

    card.appendChild(front);
    card.appendChild(back);
    card.addEventListener('click', revealCard)

    card.setAttribute('data-stitch', stitch)

   return card;
}

const loadGame = () => {

    const duplicateStitch = [ ...stitch, ...stitch ];

    const shuffledStitch = duplicateStitch.sort(() => Math.random() - 0.5 );

    

    shuffledStitch.forEach((stitch) => {

        const card = creatCard(stitch);
        grid.appendChild(card);
    });
}

const startTimer = () => {

  this.loop = setInterval(() => {

    const currentTime = +timer.innerHTML;
    timer.innerHTML = currentTime + 1;

  }, 1000);

}

window.onload = () => {

  spanPlayer.innerHTML = localStorage.getItem('player');

  startTimer ();

loadGame();  

}

