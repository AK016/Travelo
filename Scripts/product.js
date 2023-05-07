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


// range slider 
var range = document.getElementById("myRange");
var rangeValue = document.getElementById("rangeValue");
rangeValue.innerHTML = range.value;
range.addEventListener("input", function () {
    var currentValue = parseInt(range.value);
    rangeValue.innerHTML = currentValue;
});

let PaginationWrapper = document.querySelector(".pagination")
let mainbody = document.querySelector(".cardlist")
let url = "https://644fd9a0ba9f39c6ab6e09a7.mockapi.io/travelplan"
let currentPage = 1;
let rowsPerPage=3;
function updatepagination(){
    if (window.matchMedia("(min-width: 1019px)").matches) {
        // For tablets and larger screens, show 4 per page
        rowsPerPage = 3;
    }
    else if(window.matchMedia("(min-width: 768px)").matches){
        rowsPerPage=4;
    }
    else if(window.matchMedia("(min-width: 320px)").matches){
        rowsPerPage=2
    }
    fetchData(currentPage)
}
let travelodata = [];

fetchData();
function fetchData(page = 1) {
    fetch(`${url}`)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            currentPage = page;
            travelodata = data;
            display(data);
        })
        .catch(function (e) {
            console.log(e);
        })
}


// filters here 

// 1. SORT 
let sortlowtohigh = document.querySelector("#lowtohigh")
sortlowtohigh.addEventListener("click", function () {
    console.log("clicked biatch")
    fetch(`${url}?sortBy=price&order=asc`)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data)
            display(data);
        })
        .catch(function (e) {
            console.log(e);
        })
})
let sorthightolow = document.querySelector("#hightolow")
sorthightolow.addEventListener("click", function () {
    console.log("clicked biatch")
    fetch(`${url}?sortBy=price&order=desc`)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data)
            display(data);
        })
        .catch(function (e) {
            console.log(e);
        })
})

// country filter 
let country = document.querySelector("#country")
let hr=document.querySelector("#hr");
country.addEventListener("input", function () {
    let searchValue = country.value.trim().toLowerCase();
    let results = document.querySelector(".results")
    if (searchValue == "") {
        display(travelodata);
        results.style.display = "none"
        hr.style.display="block"
    } else {
        let temp = travelodata.filter(function (el) {
            return el.country.trim().toLowerCase().includes(searchValue);
        });
        results.style.display = "block"
        let h1 = document.querySelector("#resH1");
        hr.style.display="none"
        h1.innerText = `${temp.length} Destinations Found`

        display(temp);
    }
})

// plan a holiday 
let check = document.querySelector("#check");
let cancel = document.querySelector("#cancel");
let results = document.querySelector(".results");
let h1 = document.querySelector("#resH1");

check.addEventListener("click", function () {
    let plan = document.querySelector("#myRange").value;
    if (plan == 1) {
        display(travelodata);
        results.style.display = "none";
    } else {
        let temp = travelodata.filter(function (el) {
            return el.plan <= +plan;
        });
        results.style.display = "block";
        h1.innerText = `${temp.length} Destinations Found`;
        display(temp);
        check.style.display = "none";
        cancel.style.display = "block";
    }
});

cancel.addEventListener("click", function () {
    document.querySelector("#myRange").value = 1;
    results.style.display = "none";
    h1.innerText = "";
    rangeValue.innerHTML = 1;
    display(travelodata);
    cancel.style.display = "none";
    check.style.display = "block";
});


let search = document.querySelector("#search")
let products = document.querySelector(".products")
let searchDiv = document.querySelector(".searcgtitle")
let resultdiv = document.querySelector(".results")
search.addEventListener("input", function () {
    let searchValue = search.value.trim().toLowerCase();
    let results = document.querySelector(".results")
    if (searchValue == "") {
        display(travelodata);
        results.style.display = "none"
        hr.style.display="none"
    } else {
        let temp = travelodata.filter(function (el) {
            return el.location.trim().toLowerCase().includes(searchValue);
        });
        results.style.display = "block"
        let h1 = document.querySelector("#resH1");
        h1.innerText = `${temp.length} Destinations Found`
        hr.style.display="none"
        display(temp);

    }
})



const paymentFormContainer = document.querySelector('.payment-form-container');
let main = document.querySelector("#main");

function display(data) {
    mainbody.innerHTML = "";
    let startIndex = (currentPage - 1) * rowsPerPage;
    let endIndex = startIndex + rowsPerPage;
    let paginatedData = data.slice(startIndex, endIndex);

    for (let i = 0; i < paginatedData.length; i++) {
        let card = document.createElement("div")
        card.classList.add("card");

        // card img div 
        let cardImg = document.createElement("div")
        cardImg.classList.add("cardImg")
        let img = document.createElement("img")
        img.src = paginatedData[i].image;
        img.alt = "Image Not Found";
        cardImg.append(img);

        // card body div 
        let cardBody = document.createElement("div")
        cardBody.classList.add("cardBody")
        let loc = document.createElement("h2")
        loc.classList.add("location")
        let plan = document.createElement("p")
        plan.classList.add("plan")
        let country = document.createElement("h1")
        country.classList.add("country")
        let price = document.createElement("p")
        price.classList.add("price")
        let desc = document.createElement("p")
        desc.classList.add("description")
        let book = document.createElement("button")
        book.classList.add("booknow")
        book.innerText = "Get Details"
        book.addEventListener('click', () => {
            paymentFormContainer.style.display = 'block';
            main.style.opacity = "10%"
        });


        //update and append here 
        loc.innerText = paginatedData[i].location
        plan.innerText = `Holiday Plan ${paginatedData[i].plan}Days-${paginatedData[i].plan - 1}Nights `
        country.innerText = paginatedData[i].country
        price.innerText = "₹" + paginatedData[i].price
        desc.innerText = paginatedData[i].description
        cardBody.append(loc, country, price, plan, desc, book);
        card.append(cardImg, cardBody)
        mainbody.append(card);
    }
    // updatepagination();
    let totalPages = Math.ceil(data.length / rowsPerPage);
    let pagination = document.querySelector(".pagination");
    pagination.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
        let link = document.createElement("a");
        link.href = "#";
        link.innerText = i;
        if (i === currentPage) {
            link.classList.add("active");
        }
        link.addEventListener("click", function (event) {
            event.preventDefault();
            fetchData(i);
        });
        PaginationWrapper.appendChild(link);
    }

}


// submit info to server 
const thankYouContainer = document.querySelector('.thank-you-container');
const closeButton = document.querySelectorAll('.close-button');

function showThankYouMessage() {
    thankYouContainer.style.display = 'block';
}

for (let i = 0; i < closeButton.length; i++) {
    closeButton[i].addEventListener('click', () => {
        thankYouContainer.style.display = 'none';
        paymentFormContainer.style.display = "none"
        main.style.opacity = "100%"
    });
}

const placeOrderButton = document.querySelector('#submitinfo');
placeOrderButton.addEventListener('click', (e) => {
    e.preventDefault();
    showThankYouMessage();
});











// slide button div 
const slideBtn = document.getElementById('slide-btn');
const slideDiv = document.getElementById('slide-div');
const closeBtn = document.getElementById('close-btn');
const leftDiv = document.getElementById("left-div")

slideBtn.addEventListener('click', () => {
    // leftDiv.style.marginLeft="0px"
    if (slideDiv.style.display === 'none') {
        slideDiv.style.display = 'block';
        products.style.marginLeft = "30%"

    } else {
        slideDiv.style.display = 'none';
        products.style.marginLeft = "0%"
    }
});

closeBtn.addEventListener('click', () => {
    slideDiv.style.right = '-200px';
    setTimeout(() => {
        slideDiv.style.display = 'none';
    }, 500);
    slideBtn.style.display = "block"
    products.style.marginLeft = "0%"
});



window.addEventListener("resize",function(){
    updatepagination();
})
updatepagination();