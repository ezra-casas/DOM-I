const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

// Get Object values info:
const navInfo = Object.values(siteContent.nav)

const navLinks = getAllElement('nav a')

// Actual code:
  // Loop through navLinks:
for(let i = 0; i < navLinks.length; i++){
  navLinks[i].textContent = navInfo[i]
}


// functions for repeated lines:
function getElement(element){
  return document.querySelector(element)
}
function getAllElement(element){
  return document.querySelectorAll(element);
}

// Get document elements:
const getImage = document.getElementById('logo-img').src = "http://localhost:9000/img/logo.png";


  

// set values:
const setH1 = document.querySelector('h1').textContent = siteContent['cta']['h1'];
const setButton = document.querySelector('button').textContent = siteContent['cta']['button']; 
const setMainImg = document.querySelector('.cta img').src = "http://localhost:9000/img/cta.png";
const getTextContent = getAllElement('.top-content .text-content')
const setTopTopH4 = document.querySelector('.text-content:nth-child(1) h4').textContent = siteContent["main-content"]["features-h4"]
const setTopTopP = document.querySelector('.text-content:nth-child(1) p').textContent = siteContent["main-content"]["features-content"]
const setTopBottomH4 = document.querySelector('.text-content:nth-child(2) h4').textContent = siteContent["main-content"]["about-h4"]
const setTopBottomP = document.querySelector('.text-content:nth-child(2) p').textContent = siteContent["main-content"]["about-content"]

const setMiddleImg = document.querySelector('.main-content img').src = "http://localhost:9000/img/accent.png";

const setBottomContent = document.querySelector('.bottom-content')
const setBotTopH4 = setBottomContent.querySelector('.text-content:nth-child(1) h4').textContent = "Services";
const setBotTopP = setBottomContent.querySelector('.text-content:nth-child(1) p').textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
const setBotMidH4 = setBottomContent.querySelector('.text-content:nth-child(2) h4').textContent = "Product";
const setBotMidP = setBottomContent.querySelector('.text-content:nth-child(2) p').textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
const setBotBotTopH4 = setBottomContent.querySelector('.text-content:nth-child(3) h4').textContent = "Vision";
const setBotBotTopP = setBottomContent.querySelector('.text-content:nth-child(3) p').textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."


const setContact = document.querySelector('.contact')
const setContactH4 = setContact.querySelector('h4').textContent = siteContent['contact']['contact-h4'];
const setAddress = setContact.querySelector('p:nth-child(2)').textContent = siteContent['contact']['address'];
const setPhoneNumber = setContact.querySelector('p:nth-child(3)').textContent = siteContent['contact']['phone'];
const setEmail = setContact.querySelector('p:nth-child(4)').textContent = siteContent['contact']['email'];

const setFooter = document.querySelector('footer')
const setFooterAnchor = setFooter.querySelector('a').textContent = siteContent['footer']['copyright'];
setFooter.querySelector('a').classList.add('bold');


// Add class:
navLinks.forEach(element => element.classList.add('italic'));


  // cta:



console.log('project wired!')