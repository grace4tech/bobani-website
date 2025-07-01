
  window.onload = function(){
const moreImages = [
  '../more_images/graduation1.png',
  '../more_images/graduation2.png',
  '../more_images/graduation3.png',
  '../more_images/graduation4.png',
  '../more_images/graduation5.png',
  '../more_images/graduation6.png',
  '../more_images/graduation7.png',
  '../more_images/graduation8.png',
  '../more_images/graduation9.png',
  '../more_images/graduation10.png',
  '../more_images/more1.png',
  '../more_images/more2.png',
  '../more_images/more3.png',
  '../more_images/more4.png',
  '../more_images/more5.png',
  '../more_images/more6.png',
  '../more_images/more7.png',
  '../more_images/more8.png',
  '../more_images/more9.png',
  '../more_images/more10.png',
  '../more_images/more11.png',
  '../more_images/more12.png',
  '../more_images/more13.png',
  '../more_images/more14.png',
  '../more_images/more15.png',
  '../more_images/prof.png',
];

const birthdayImages = [
  '../birthdays_images/birthday1.png',
  '../birthdays_images/birthday2.png',
  '../birthdays_images/birthday3.png',
  '../birthdays_images/birthday4.png',
  '../birthdays_images/birthday5.png',
  '../birthdays_images/birthday6.png',
  '../birthdays_images/birthday7.png',
  '../birthdays_images/birthday8.png',
  '../birthdays_images/birthday9.png',
  '../birthdays_images/birthday10.png',
  '../birthdays_images/birthday11.png',
  '../birthdays_images/birthday12.png',
  '../birthdays_images/birthday13.png',
  '../birthdays_images/birthday14.png',
  '../birthdays_images/birthday15.png',
  '../birthdays_images/birthday16.png',
  '../birthdays_images/birthday18.png',
  '../birthdays_images/birthday19.png',
  '../birthdays_images/birthday20.png',
  '../birthdays_images/birthday22.png',
  '../birthdays_images/birthdY21.png',
  '../birthdays_images/birthdy17.png'
];

const allImages = [...moreImages, ...birthdayImages];
const bigPic = document.querySelector('.big-pic');
let index = 0;

function changeBackground() {
  if (!bigPic) return;
  bigPic.style.backgroundImage = `url('${allImages[index]}')`;
  index = (index + 1) % allImages.length;
  setTimeout(changeBackground, 4000); // 4 seconds
}

changeBackground();


//BOTTOM PART IMAGES SHOWING
const sections = {
  wedding: document.getElementById('wedding_engagement-Pictures'),
  maternity: document.getElementById('maternity-Pictures'),
  birthdays: document.getElementById('birthdays-Pictures'),
  more: document.getElementById('more-Pictures')
};

const navLinks = {
  wedding: document.querySelector('.nav-link1'),
  maternity: document.querySelector('.nav-link2'),
  birthdays: document.querySelector('.nav-link3'),
  more: document.querySelector('.nav-link4')
};

function showSection(active) {
  // Loop through all sections
  for (let key in sections) {
    // Show only the active section
    sections[key].style.display = key === active ? (key === 'wedding' ? 'block' : 'grid') : 'none';

    // Style nav links
    navLinks[key].style.textDecoration = key === active ? 'underline' : 'none';
    navLinks[key].style.fontWeight = key === active ? '900' : '400';
  }
}

// Show wedding by default on page load
showSection('wedding');

// Add click listeners to nav links
navLinks.wedding.addEventListener('click', () => showSection('wedding'));
navLinks.maternity.addEventListener('click', () => showSection('maternity'));
navLinks.birthdays.addEventListener('click', () => showSection('birthdays'));
navLinks.more.addEventListener('click', () => showSection('more'));
  }

  //TYPING
  const textElement = document.getElementById("text");
const cursor = document.querySelector(".cursor");

const phrases = [
  "I make dream pictures come true",
  "Capturing timeless memories",
  "Your love story, perfectly framed",
  "Moments turned into magic",
  "Where beauty meets the lens",
  "Every shot tells your story"
];

let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  const currentText = currentPhrase.substring(0, letterIndex);
  textElement.textContent = currentText;

  if (!isDeleting && letterIndex < currentPhrase.length) {
    letterIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && letterIndex > 0) {
    letterIndex--;
    setTimeout(typeEffect, 50);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(typeEffect, 5000); // wait before deleting
    } else {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typeEffect, 500);
    }
  }
}

typeEffect();
