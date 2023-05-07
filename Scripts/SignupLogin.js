//<------------------------------------------------------NAVBAR------------------------------------------------------->
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
//<-----------------------------------------------------xxxxxxxxxxxxx------------------------ ---------------------->

let signUp=document.getElementById("sign-up")
let signIn=document.getElementById("sign-in")
let submit=document.getElementById("submit")
let signInBtn=document.getElementById("sign-in-btn")
let adminBtn=document.getElementById("adminLogin")
let adminDiv=document.getElementById("admin")
let signInSubmit=document.getElementById("sign-in-submit")
let signUpBtn=document.getElementById("sign-up-btn")
let adminSubmit=document.getElementById("admin-submit")
let userLogin=document.getElementById("userLogin")

let signUpData=JSON.parse(localStorage.getItem("UserInfo"))||[]; 

//<---------------------------------------------------SIGN-IN------------------------------------------------------>

signInBtn.addEventListener("click",()=>{
  signUp.style.display="none"
  signIn.style.display="block"
})

signInSubmit.addEventListener("click",(e)=>{
  // e.preventDefault();
  let signInobj={
    email:document.getElementById("sign-in-email").value,
    password:document.getElementById("sign-in-password").value
  }

  let flag=false;
  signUpData.forEach((ele)=>{
    if(signInobj.email==ele.email && signInobj.password==ele.password){
      flag=true;
    }
   
  })

  if(flag){
    alert("sign in successful..!")
    location.href="#"
  }
  else{
    alert("Wrong Credentials")
  }
})

signUpBtn.addEventListener("click",()=>{
  signUp.style.display="block"
  signIn.style.display="none"
})
//<----------------------------------------------xxxxxxxxxxxxxxx---------------------------------------------------->

//<---------------------------------------------------SIGN-UP------------------------------------------------------>
submit.addEventListener("click",(e)=>{

  // e.preventDefault();
  
  let obj={
    firstName:document.getElementById("firstName").value,
    lastName:document.getElementById("lastName").value,
    email:document.getElementById("sign-up-email").value,
    password:document.getElementById("sign-up-password").value
  }

  let flag1=false;

  if(obj.firstName=="" || obj.lastName=="" || obj.email=="" || obj.password==""){
    alert("Input fields cannot be empty!!")
  }

  else
  {
    if(signUpData.length>0){

      signUpData.forEach((ele)=>{
       
          if(obj.email==ele.email){
               flag1=true;
          }

     })

    }
    
    if(flag1){
      alert("Email already exist please sign in")
    }
    else
    {
        signUpData.push(obj);
        localStorage.setItem("UserInfo",JSON.stringify(signUpData));
        alert("Sign up successful..!")
        
        signUp.style.display="none"
        signIn.style.display="block"
    }
}

})

adminBtn.addEventListener("click",()=>{
  signUp.style.display="none"
  adminDiv.style.display="block"
})
//<----------------------------------------------xxxxxxxxxxxxxxx---------------------------------------------------->

//<---------------------------------------------------ADMIN-LOGIN--------------------------------------------------->

let AdminCredentials={
  Id:"Travelo",
  password:"admin"

}
adminSubmit.addEventListener("click",(e)=>{
  // e.preventDefault();

  let adminobj={
    id:document.getElementById("id").value,
    pass:document.getElementById("adminpass").value
  }

  if(adminobj.id==AdminCredentials.Id && adminobj.pass==AdminCredentials.password){
     
    alert("Admin login successful..!")
    window.location.href="#"
  }
  else{

    alert("Unauthorised Person!! Cannot access the page")
  }


})

userLogin.addEventListener("click",()=>{
  signIn.style.display="block"
  adminDiv.style.display="none"
})

//<-----------------------------------------------xxxxxxxxxxxxxxxxx------------------------------------------------->

//<-------------------------------------------------------Slide-Show--------------------------------------------->//
//<-------------------------------------------------------Slide-Show--------------------------------------------->//

var timeOut = 0;
var slideIndex = 0;
var autoOn = true;

var dots = document.querySelectorAll('.dot');
var prevArrow = document.querySelector('.prev');
var showArrow = document.querySelector('.next');

autoSlides();

function autoSlides() {
    timeOut = timeOut - 20;
    if (autoOn == true && timeOut < 0) {
        showSlides();
    }
    setTimeout(autoSlides, 20);
}

function prevSlide() {

    timeOut = 5000;

    var slides = document.querySelectorAll(".slide");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex--;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    if (slideIndex == 0) {
        slideIndex = 3
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function showSlides() {

    timeOut = 4000;

    var slides = document.querySelectorAll(".slide");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

prevArrow.addEventListener('click', ()=> {
    prevSlide();
})

showArrow.addEventListener('click', ()=> {
    showSlides();
})
//<----------------------------------------------------xxxxxxxxxxxx----------------------------------------------->//

//<---------------------------------------------------ADMINPAGE-IMPLEMENTED-SUCCESSFULLY------------------------------------------->//

