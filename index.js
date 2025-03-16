
const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
 ];

 let h1 = document.getElementById("h1")
    h1.innerText = "Ramen Menu";

let h2 = document.getElementById("h2")
    h2.innerText = "Ramen Details"

let h2 = document.getElementById("formHeader")
    h2.innerText = "Insert New Ramen"

let form = document.getElementById("form")


//we be getting the elements from the HTML and Edit them here
//Now lets get them !! 
const Menu = document.getElementById("ramen-menu")

const ramen_name = document.getElementById("name")

const restaurant = document.getElementById("Hotel")

const rating_ramen = document.getElementById("rate")

const comments_on_ramen  = document.getElementById("Comment")

//.>>>>>>DONE


//now we need to add the images of the ramen dishes
//we shall use function

function dispalyRamens(){

    //const menu = document.getElementById('ramen-menu');
    Menu.innerHTML= "";


//lets use >>forEach
//load images of ramens using forEach
ramens.forEach(ramen =>{
    const img = document.createElement("img");
  //search meaning for createElement
    img.src = ramen.image;
    img.alt = ramen.name;
    img.style.width = '100px';
    img.style.margin = "7px"
    img.addEventListener("click",() =>showRamenInfo(ramen));
    // append as img elements inside div..name>>>> ramen-detail
     Menu.appendChild(img);

  });


  //we need to know what kind of ramen we dealing with 
  //so lets Use a Function to Alow us to know,
  //Ramen details when Clicked
function showRamenInfo(ramen){
//Info we need is name, restaurant, rating and comment
    ramen_name.innerText = ramen.name;
    restaurant.innerText = "Restaurant:" + restaurant;
    rating_ramen.innerText = "Rating:" + rating_ramen;    
    comments_on_ramen.innerText = "Comment" + comments_on_ramen;
}













 
  


  //Runs when page loads
  document.addEventListener("DOMContentLoaded", dispalyRamens); 

  
 }

//array for ramen
let Ramens = ["gyukotsu", "kojiro", "naruto", "nirvana", "shoyu"]



  


