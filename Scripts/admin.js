let url = "https://644fd9a0ba9f39c6ab6e09a7.mockapi.io/travelplan"



let ad_form = document.getElementById("admin_form");
// ad_form.addEventListener("submit",add_new_data)
ad_form.addEventListener("submit",add_new_data)



function add_new_data(event){

    event.preventDefault();



    let location =  ad_form.location.value;
    let image =  ad_form.image.value;
    let plan = ad_form.plan.value;
    let country = ad_form.country.value;
    let price = ad_form.price.value;
    let description = ad_form.description.value;

     
       fetch(url,
        {
          method : "POST",
          headers : {'content-type':'application/json'},
          body : JSON.stringify(
           {
            "location" : location,
            "image" : image,
            "plan" : plan,
            "country" : country,
            "price" : Number(price),
            "description" : description
            
            }
            )
  })
        .then((res)=>{ return res.json()})
        .then((data)=>{
  
          console.log(data,"add")
      })
  
  }

//   {"location":"New Delhi","image":"https://img.theculturetrip.com/wp-content/uploads/2022/01/dar8f9-e1645841652265.jpg",
//   "plan":"3Days 2Nights",
//   "country":"India",
//   "price":15999,
//   "description":"New Delhi is best known as the location of India's national government. New Delhi has great historical significance as it was home to powerful people, such as the Pāṇḍavas and the Mughals. The city has many historical monuments and tourist attractions as well as lively marketplaces and great food, such as chaat.",
//   "id":"1"} -->