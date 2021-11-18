//global variables
const ul = document.getElementById('navbar__list');
const sections = document.getElementsByTagName('section');
//initalize fragment
const d = document.createDocumentFragment();

const topLink = document.querySelector('.top');
const topSec = document.getElementsByTagName('section')[0];

function createNav () {
  for (let section of Array.from(sections)) {
    let linkValue = section.getAttribute('data-nav');
    let sectionID = section.getAttribute('id');
    //create li
    let li = document.createElement('li');
    // create <a> tag
    let link = li.appendChild(document.createElement('a'));

    link.appendChild(document.createTextNode(linkValue));
    //make the kink refere to specific section
    link.setAttribute('href', '#'+ sectionID);
    //add class to links
    link.classList.add('menu__link')
    //use parent like fragment
    d.appendChild(li);

    link.addEventListener('click', (e) => {
      //prevent link to get directly to the section
      e.preventDefault();
      //let link move smooth
      section.scrollIntoView({behavior: "smooth"});

    })

  }
  ul.appendChild(d);
}

createNav();



// top link icon click event
topLink.addEventListener('click', (e) => {
  e.preventDefault();
  topSec.scrollIntoView({behavior: "smooth"});
})

//for each section active class
window.addEventListener('scroll', () => {
  for (let section of sections) {
    //get section position
    let clientRect = section.getBoundingClientRect().top;
    //console.log(clientRect);
    if(clientRect >= 0 && clientRect < 784) {

      for (let section of sections) {
        //remove active class from all sections
        section.classList.remove('your-active-class');
      }
      // add active class only to the section ypu scroll into
      section.classList.add('your-active-class');

    }
  }
  //make top link icon scroll to top
  let pageHeight = window.pageYOffset;
  //make the icon class appear at specific position
  if (pageHeight > 550) {
    //show the top arrow icon
    topLink.classList.add('showTopLink');
  }else {
    //hide the top arrow icon
    topLink.classList.remove('showTopLink');
  }
});
