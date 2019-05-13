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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Nav bar
let nav = document.querySelectorAll('a')
console.log(nav);
for (let i =0; i < nav.length; i++) {
  nav[i].textContent = siteContent["nav"][`nav-item-${i+1}`];
  nav[i].style.color = 'green';
}

let navBar = document.querySelector('nav')

let firstItem = document.createElement('a');
firstItem.textContent = 'Home';
navBar.prepend(firstItem);
firstItem.style.color = 'green';

let lastItem = navBar.appendChild(document.createElement('a'));
lastItem.textContent = 'Catalog';
lastItem.style.color = 'green';

/**
 * cta content area
 */
let ctaText = document.querySelector('h1');
console.log(ctaText);
// ctaText.textContent = siteContent.cta.h1;
ctaContent = siteContent.cta.h1
console.log(ctaContent.split(' '))
let words= ctaContent.split(' ');
ctaText.appendChild(document.createTextNode(words[0]));
ctaText.appendChild(document.createElement('br'));
ctaText.appendChild(document.createTextNode(words[1]));
ctaText.appendChild(document.createElement('br'));
ctaText.appendChild(document.createTextNode(words[2]));

let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent.cta.button;

let ctaImage = document.querySelector('#cta-img');
console.log(ctaImage);
ctaImage.setAttribute('src', siteContent.cta["img-src"]);

// Main content
let mainHeader = document.querySelectorAll('h4');
let mainText = document.querySelectorAll('.text-content > p');
console.log(mainHeader);
  mainHeader[0].textContent = siteContent["main-content"]["features-h4"];
  mainText[0].textContent = siteContent["main-content"]["features-content"];
  mainHeader[1].textContent = siteContent["main-content"]["about-h4"];
  mainText[1].textContent = siteContent["main-content"]["about-content"];
  mainHeader[2].textContent = siteContent["main-content"]["services-h4"];
  mainText[2].textContent = siteContent["main-content"]["services-content"];
  mainHeader[3].textContent = siteContent["main-content"]["product-h4"];
  mainText[3].textContent = siteContent["main-content"]["product-content"];
  mainHeader[4].textContent = siteContent["main-content"]["vision-h4"];
  mainText[4].textContent = siteContent["main-content"]["vision-content"];

  /**
   * Main content image
   */
  let mainImage = document.querySelector('#middle-img');
  console.log(mainImage);
  mainImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

  let contact = document.querySelectorAll('.contact > h4');
  let contactText = document.querySelectorAll('.contact > p');
  console.log(contact);
  contact[0].textContent = siteContent["contact"]["contact-h4"];
  contactText[0].textContent = siteContent["contact"]["address"];
  contactText[1].textContent = siteContent["contact"]["phone"];
  contactText[2].textContent = siteContent["contact"]["email"];
  

  /**
   * Footer style
   */

   let footerSection = document.querySelector('footer > p');
   footerSection.textContent = siteContent.footer.copyright;