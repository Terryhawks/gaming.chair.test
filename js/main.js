var navbar = document.querySelector(".navbar");
//when scrolling higher than 20 vh, add sticky class to the tag with a class navbar//
window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

// Navbar Toggler
const navMenu = document.querySelector(".menu");
navTogle = document.querySelector(".menubtn");
if(navTogle) {
    navTogle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    })
}

// closing menu when navLink is clicked
const navLink = document.querySelectorAll(".nav-link");
function linkAction() {
	const navMenu = document.querySelector(".menu");
	navMenu.classList.remove("active")
}
navLink.forEach(n => n.addEventListener("click", linkAction))

// Product Color
var pic = document.querySelector("#main-shoe");
var black = document.querySelector(".black");
var assassin = document.querySelector(".assassin");
var ash = document.querySelector(".ash");
var classic = document.querySelector(".classic");
var royal = document.querySelector(".royal");
var stealth = document.querySelector(".stealth");
var config = document.querySelector(".configurate");
const colors = document.querySelectorAll(".color");

// Stores Product Info in Object
var info = [
    {
        src: "images/products/black.png"
    },
    {
        src: "images/products/assassins.png"
    },
    {
        src: "images/products/ash.png"
    },
    {
        src: "images/products/classic.png"
    },
    {
        src: "images/products/royal.png"
    },
    {
        src: "images/products/stealth.png"
    }
]

// Change Color
black.addEventListener("click", function() {
    pic.src = info[0].src;
})
assassin.addEventListener("click", function() {
    pic.src = info[1].src;
})
ash.addEventListener("click", function() {
    pic.src = info[2].src;
})
classic.addEventListener("click", function() {
    pic.src = info[3].src;
})
royal.addEventListener("click", function() {
    pic.src = info[4].src;
})
stealth.addEventListener("click", function() {
    pic.src = info[5].src;
})

// Active Color
function color() {
    colors.forEach(c => c.classList.remove("active"));
    this.classList.add("active");
}
colors.forEach(c => c.addEventListener("click", color))