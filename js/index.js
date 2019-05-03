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
let logo = document.querySelector("#logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//Nav Bar
let navLinks = ["Services", "Product", "Vision", "Features", "About", "Contact"];
let navBar = document.querySelector("nav");
console.log(navBar);

navLinks.forEach(link => {
  const listItem = document.createElement("li");
  listItem.textContent = link;
  navBar.append(listItem);
  }); 

// let linkStyle = document.querySelector("header.nav.a")
// linkStyle.forEach(function(currentValue) {
//     currentValue.style.textDecoration = "none";
//     currentValue.style.color = "#b0b0b0";
//   }); 
/* Figure out how to fix the styling to remove li bullets and
  fix color */

// Call To Action Section
const header = document.querySelector("h1");
header.innerText = siteContent.cta.h1;
console.log(header);

const btn = document.querySelector("button");
btn.innerText = siteContent.cta.button;
console.log(btn);

const ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent.cta["img-src"];
console.log(ctaImg);


// Main Content Section
let mainContentH4 = document.querySelectorAll('.main-content h4');
mainContentH4[0].innerText = siteContent["main-content"]["features-h4"];
mainContentH4[1].innerText = siteContent["main-content"]["about-h4"];
mainContentH4[2].innerText = siteContent["main-content"]["services-h4"];
mainContentH4[3].innerText = siteContent["main-content"]["product-h4"];
mainContentH4[4].innerText = siteContent["main-content"]["vision-h4"];
console.log(mainContentH4);
// Is there a better way to make this work, like a DRY method?

let mainContentP = document.querySelectorAll('.main-content p');
mainContentP[0].innerText = siteContent["main-content"]["features-content"];
mainContentP[1].innerText = siteContent["main-content"]["about-content"];
mainContentP[2].innerText = siteContent["main-content"]["services-content"];
mainContentP[3].innerText = siteContent["main-content"]["product-content"];
mainContentP[4].innerText = siteContent["main-content"]["vision-content"];
console.log(mainContentP);

const mainContentImg = document.querySelector("#middle-img");
mainContentImg.src = siteContent["main-content"]["middle-img-src"];
console.log(mainContentImg);

// Contact Info

const contactHeader = document.querySelector(".contact h4");
contactHeader.innerText = siteContent.contact["contact-h4"];
console.log(contactHeader);

const contactPara = document.querySelectorAll(".contact p");
contactPara[0].innerText = siteContent.contact["address"];
contactPara[1].innerText = siteContent.contact["phone"];
contactPara[2].innerText = siteContent.contact["email"];
console.log(contactPara);