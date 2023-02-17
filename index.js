const aboutLink = document.querySelector('.about');
const expertiseLink = document.querySelector('.expertise');
const projectsLink = document.querySelector('.projects');
const secOne = document.querySelector('.sectionOne');

const sectionExpertise = document.querySelector('#expertise');

const nav = document.querySelector('#nav');

// handles the hover effects in NAV
const handleHover = function(e, opacity) {
    if(e.target.classList.contains('nav__link')) {
  
      const link = e.target;
      const siblings = link.closest('#nav').querySelectorAll('.nav__link');
      console.log(siblings);
  
      siblings.forEach(el => {
  
        if(el !== link) el.style.opacity = this;
  
      });
  
    };
  };
  
  // when hover over a link in NAV => every thing other than the link should be faded out / get a opacity 0.5
  nav.addEventListener('mouseover', handleHover.bind(0.4));
  
  // when mouse out => whole nav elements should be back to opacity 1
  nav.addEventListener('mouseout', handleHover.bind(1));
  
