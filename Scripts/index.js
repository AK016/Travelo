function startInterval() {
    var count = 1;
    var interval = setInterval(function () {
        document.getElementById("div" + count).style.display = "flex";
        count++;
        if (count > 3) {
            clearInterval(interval);
            setTimeout(startInterval, 1000);
        }
    }, 1000);
}
function startInterval2() {
    var count = 1;
    var interval = setInterval(function () {
        document.getElementById("img" + count).style.display = "block";
        count++;
        if (count > 4) {
            clearInterval(interval);
            setTimeout(startInterval, 1000);
        }
    }, 1000);
}

// anchor event to auto-scroll through various sections 
let aboutus = document.querySelector("#aboutus")
let features = document.querySelector("#features")
let featureSection = document.querySelector(".part3")
let aboutusSection = document.querySelector(".part7")

function scrollToSection(section) {
    section.scrollIntoView({ behavior: "smooth" });
}
// Attach event listeners to the buttons
aboutus.addEventListener('click', function () {
    console.log("clicked biatch")
    scrollToSection(aboutusSection);
});
features.addEventListener('click', function () {
    console.log("clicked biatch")
    scrollToSection(featureSection);
});



// scroll up button 
document.addEventListener("DOMContentLoaded", function () {
    let btn = document.querySelector("#scrollupbtn");
    window.onscroll = function () { scrollfun(); };
    function scrollfun(e) {
        if (document.body.scrollTop > window.innerHeight * 3 || document.documentElement.scrollTop > window.innerHeight * 3) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    }
    btn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


// for logo on load and add CSS part as well
const travelo = document.getElementById("travelo");
const text = travelo.textContent;
const letters = text.split("");
const html = letters.map((letter) => `<span>${letter}</span>`).join("");
travelo.innerHTML = html;


// contact us on email 
const emailLink = document.getElementById('email-link');
emailLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'mailto:akshaykadam9010@gmail.com';
});




// user name appearing 
let signInElement = document.querySelector("#SignInUsername");

let LSSignIn = JSON.parse(localStorage.getItem("SignInUsername")) || [];
if (LSSignIn.length !== 0) {
    signInElement.innerText = `Hi, ${LSSignIn} | Sign Out`;
    signInElement.href = "#";
    signInElement.addEventListener("click", (e) => {
        e.preventDefault();
        // Clear the stored username from local storage
        localStorage.removeItem("SignInUsername");
    
        // Navigate to the login page
        window.location.href = "/HTML/SignupLogin.html";
    });
}
else {
    signInElement.addEventListener("click", (e) => {
        e.preventDefault();
        // Navigate to the login page
        window.location.href = "/HTML/SignupLogin.html";
    });
}


// joinwithus 
let joinwithus=document.querySelector("#joinwithus")
joinwithus.addEventListener("click",function(){
    location.href="/HTML/SignupLogin.html"
})


window.onload = function () {
    startInterval();
    startInterval2();
    // logo();
}
