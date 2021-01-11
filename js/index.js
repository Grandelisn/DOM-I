const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const navTest = document.querySelector('nav');

let newNav = document.createElement('a');
newNav.textContent = 'New Content';
newNav.href = '#';
newNav.style.color = 'green';
let newNav2 = document.createElement('a');
newNav2.textContent = 'Lookie here';
newNav2.href = '#';
newNav2.style.color = 'green';
const nav = document.querySelectorAll('nav a');
const navKey = Object.values(siteContent)[0];
const navVal = Object.keys(navKey);
for(let i = 0; i < navVal.length-1; i++){
  nav[i].innerHTML = siteContent['nav'][navVal[i]];
  nav[i].style.color = 'green';
}
navTest.appendChild(newNav);
navTest.prepend(newNav2);
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let ctaBut = document.querySelector('.cta-text button');
ctaBut.innerText = siteContent['cta']['button'];
let ctaTxt = document.querySelector('.cta-text h1');
ctaTxt.innerText = siteContent['cta']['h1'];
let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);
let mainImg = document.getElementById('middle-img');
mainImg.setAttribute('src', siteContent['main-content']['middle-img-src']);
const mainCtnt = document.querySelectorAll('.text-content h4');
const mainTxt = document.querySelectorAll('.text-content p');
const mainKey = Object.values(siteContent)[2];
const mainVal = Object.keys(mainKey);

mainCtnt[0].innerHTML = siteContent['main-content']['features-h4'];
mainTxt[0].innerHTML = siteContent['main-content']['features-content'];
mainCtnt[1].innerHTML = siteContent['main-content']['about-h4'];
mainTxt[1].innerHTML = siteContent['main-content']['about-content'];
mainCtnt[2].innerHTML = siteContent['main-content']['services-h4'];
mainTxt[2].innerHTML = siteContent['main-content']['services-content'];
mainCtnt[3].innerHTML = siteContent['main-content']['product-h4'];
mainTxt[3].innerHTML = siteContent['main-content']['product-content'];
mainCtnt[4].innerHTML = siteContent['main-content']['vision-h4'];
mainTxt[4].innerHTML = siteContent['main-content']['vision-content'];
const contact = document.querySelector('.contact h4');
contact.innerText = siteContent['contact']['contact-h4'];
let contTxt = document.querySelectorAll('.contact p');
const cont = Object.values(siteContent)[0];
contTxt[0].innerHTML = siteContent['contact']['address'];
contTxt[1].innerHTML = siteContent['contact']['phone'];
contTxt[2].innerHTML = siteContent['contact']['email'];
let footerTxt = document.querySelector('footer p');
footerTxt.innerHTML = siteContent['footer']['copyright'];

