let url = "https://644fd9a0ba9f39c6ab6e09a7.mockapi.io/travelplan"

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


let ad_form = document.getElementById("admin_form");
let update_form = document.getElementById("update_form");

let updateDiv = document.querySelector(".update");
let addDiv = document.querySelector(".add");
let addBtn = document.querySelector("#add");
let updateBtn = document.querySelector("#update");

addBtn.addEventListener("click", function () {
  console.log("clicked");
  updateDiv.style.opacity = "0";
  updateDiv.style.display = "none";
  addDiv.style.opacity = "0";
  addDiv.style.display = "block";
  setTimeout(function () {
    addDiv.style.opacity = "1";
  }, 50);
});

updateBtn.addEventListener("click", function () {
  console.log("clicked");
  addDiv.style.opacity = "0";
  addDiv.style.display = "none";
  updateDiv.style.opacity = "0";
  updateDiv.style.display = "block";
  setTimeout(function () {
    updateDiv.style.opacity = "1";
  }, 50);
});

// Add transition effect
addDiv.style.transition = "opacity 1s ease-in-out";
updateDiv.style.transition = "opacity 1s ease-in-out";




ad_form.addEventListener("submit", function (event) {
  // event.preventDefault();

  let location = document.querySelector("#locationA").value;
  let image = document.querySelector("#imageA").value;
  let plan = document.querySelector("#planA").value;
  let country = document.querySelector("#countryA").value;
  let price = document.querySelector("#PriceA").value;
  let description = document.querySelector("#descriptionA").value;


  fetch(url, {
    method: "POST",
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(
      {
        "location": location,
        "image": image,
        "plan": plan,
        "country": country,
        "price": Number(price),
        "description": description

      }
    )
  })
    .then((res) => { return res.json() })
    .then((data) => {
      console.log(data, "add")
      fetchData();
    })
});

update_form.addEventListener("submit", function (event) {
  // event.preventDefault();

  let id = document.querySelector("#idU").value;
  let location = document.querySelector("#locationU").value;
  let image = document.querySelector("#imageU").value;
  let plan = document.querySelector("#planU").value;
  let country = document.querySelector("#countryU").value;
  let price = document.querySelector("#PriceU").value;
  let description = document.querySelector("#descriptionU").value;

  fetch(`${url}/${id}`, {
    method: "PUT",
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      "location": location,
      "image": image,
      "plan": plan,
      "country": country,
      "price": price,
      "description": description
    })
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "update")
      alert("Updated Succesfully")
      fetchData();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});

const slideBtn = document.getElementById('slide-btn');
const slideDiv = document.getElementById('slide-div');
const closeBtn = document.getElementById('close-btn');
const leftDiv = document.getElementById('left-div');

slideBtn.addEventListener('click', () => {
  if (slideDiv.style.display === 'none') {
    slideDiv.style.display = 'block';
    slideBtn.style.display = 'none';
    setTimeout(() => {
      slideDiv.style.left = '0';
    }, 0);
  } else {
    slideDiv.style.left = '-60%';
    setTimeout(() => {
      slideDiv.style.display = 'none';
    }, 500);
  }
});

closeBtn.addEventListener('click', () => {
  slideDiv.style.left = '-60%';
  setTimeout(() => {
    slideDiv.style.display = 'none';
  }, 500);
  slideBtn.style.display = 'block';
});


let PaginationWrapper = document.querySelector(".pagination")
let mainbody = document.querySelector(".cardlist")
let currentPage = 1;
let rowsPerPage = 3;
let travelodata = [];

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



// search here 
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
  }
  else {
    let temp = travelodata.filter(function (el) {
      if (el.location.trim().toLowerCase().includes(searchValue) || el.country.trim().toLowerCase().includes(searchValue)) {
        return true;
      }
    });
    results.style.display = "block"
    let h1 = document.querySelector("#resH1");
    h1.innerText = `${temp.length} Destinations Found`
    // products.style.marginLeft="-400px"
    // products.style.width=""
    products.style.display = "flex"
    products.style.flexDirection = "column";
    if (temp.length == 0) {
      searchDiv.style.left = "0"
      
    }
    display(temp);
  }
})


// display dom 
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
    let del = document.createElement("button")
    del.classList.add("del")

    del.innerText = "Delete"
    del.addEventListener("click", function () {
      let delId = paginatedData[i].id
      fetch(`${url}/${delId}`, {
        method: "DELETE"
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          // location.reload();
          fetchData();
          display(data);
        })
        .catch(function (e) {
          console.log(e);
        })
    })

    //update and append here 
    loc.innerText = paginatedData[i].location
    plan.innerText = `Holiday Plan ${paginatedData[i].plan}Days-${paginatedData[i].plan - 1}Nights `
    country.innerText = paginatedData[i].country
    price.innerText = "₹" + paginatedData[i].price
    desc.innerText = paginatedData[i].description
    cardBody.append(loc, country, price, plan, desc, del);
    card.append(cardImg, cardBody)
    mainbody.append(card);
  }
  let totalPages = Math.ceil(data.length / rowsPerPage);
  PaginationWrapper.innerHTML = "";
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




window.addEventListener("load", function () {
  fetchData();

})













//   {"location":"New Delhi","image":"https://img.theculturetrip.com/wp-content/uploads/2022/01/dar8f9-e1645841652265.jpg",
//   "plan":"3Days 2Nights",
//   "country":"India",
//   "price":15999,
//   "description":"New Delhi is best known as the location of India's national government. New Delhi has great historical significance as it was home to powerful people, such as the Pāṇḍavas and the Mughals. The city has many historical monuments and tourist attractions as well as lively marketplaces and great food, such as chaat.",
//   "id":"1"} -->