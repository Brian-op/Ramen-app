//Runs when page loads
document.addEventListener("DOMContentLoaded", function(){ 
    main()
const ramens = [
    {  name: "gyukotsu ramen", restaurant: "Ichiran", image: "Shoyu Ramen.jpg", rating: 6, comment: "Delicious!" },
    {  name: "kojiro ramen", restaurant: "Menya", image: "Miso Ramen.jpeg", rating: 9, comment: "Very flavorful!" },
    {  name: "Miso Ramen", restaurant: "Tomodachi Haven", image: "Miso Ramen.jpeg", rating:7,  comment:"mouth waterring"},
    {  name: "naruto Ramen", restaurant: "Kimono Kitchen", image: "naruto.jpg", rating:6,  comment:"mouth waterring"},
    {  name: "Tonkotsu Ramen", restaurant: "Fuji Flavors", image: "Tonkotsu ramen.jpeg", rating:8,  comment:"mouth waterring"}
 
 ];

 let h1 = document.getElementById("h1");
    h1.innerText = "Ramen Menu";

    (document.getElementById("h2")).innerText = "Ramen Details";

    (document.getElementById("h2")).innerText = "Insert New Ramen";

let form = document.getElementById("form");


//we be getting the elements from the HTML and Edit them here
//Now lets get them !! 
const menu = document.getElementById("ramen-menu");
const ramen_name = document.getElementById("name");
const restaurant = document.getElementById("Hotel");
const rating_ramen = document.getElementById("rate");
const comments_on_ramen  = document.getElementById("Comment");

//.>>>>>>DONE


//now we need to add the images of the ramen dishes
//we shall use function

function dispalyRamens(){
menu.innerHTML= "";

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
     menu.appendChild(img);
     console.log(`Image added: ${img.src}`);
     

  });
}


  //we need to know what kind of ramen we are dealing with 
  //so lets Use a Function to Alow us to know,
  //Ramen details when Clicked
function showRamenInfo(ramen){
//Info we need is name, restaurant, rating and comment
    ramen_name.innerText = ramen.name;
    restaurant.innerText = "Restaurant:" + ramen.restaurant;
    rating_ramen.innerText = "Rating:" + ramen.rating;    
    comments_on_ramen.innerText = "Comment" + ramen.Comment;
}


//we need to be able to include new twpes of ramen

function addSubmitListener(){
    const form = document.getElementById("form");
    form.addEventListener("submit", (event)=>{
        event.preventDefault();
    });
}
//after the new ramen has been keyed in we need to obtain it
const newRamen ={
     id: ramens.length + 1, //adds the new Ramen  by generating a ne ID
     name:  document.getElementById("name").value,
     restaurant: document.getElementById("Hotel").value,
     image: document.getElementById("pic").value,
     rating: document.getElementById("rate").value,
     Comment: document.getElementById("Comment").value,
  //"value" is used to store user input into the ID name object

};

//we need to add the new ramen
ramens.push(newRamen);

//update the menu with new ramen
dispalyRamens(); 

//now that a new ramen has been added and submitted we need to clear the form
// to allow for new values to be entered
form.reset();

//now we run the entire thing
function main(){
    dispalyRamens();
    addSubmitListener();
}

}); 






 
  




 



  


