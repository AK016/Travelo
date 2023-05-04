// for logo on load 
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




// anchor event to auto-scroll through various sections 
let aboutus = document.querySelector("#aboutus")
let aboutusSection = document.querySelector(".part7")

function scrollToSection(section) {
    section.scrollIntoView({ behavior: "smooth" });
}
// Attach event listeners to the buttons
aboutus.addEventListener('click', function () {
    console.log("clicked biatch")
    scrollToSection(aboutusSection);
});