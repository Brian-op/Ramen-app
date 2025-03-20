//Runs when page loads
document.addEventListener("DOMContentLoaded", function(){ 
    const ramens = [
    {  name: "gyukotsu ramen",restaurant: "Ichiran", title: "gyukotsu ramen",image: "ramen-pics/gyukotsu.jpg", rating: 6, comment: "Delicious!" },
    {  name: "kojiro ramen", restaurant: "Menya", title: "kojiro rame",image: "ramen-pics/kojiro.jpg", rating: 9, comment: "Very flavorful!" },
    {  name: "Miso Ramen", restaurant: "Tomodachi Haven", title: "Miso Ramen", image: "ramen-pics/Miso Ramen.jpeg", rating:7,  comment:"Mouth waterring"},
    {  name: "naruto Ramen", restaurant: "Kimono Kitchen", title: "naruto Ramen", image: "ramen-pics/naruto.jpg", rating:6,  comment:"Tentalizing"},
    {  name: "Tonkotsu Ramen", restaurant: "Fuji Flavors", title: "Tonkotsu Ramen", image: "ramen-pics/Tonkotsu ramen.jpeg", rating:8,  comment:"Rich in flavour"}
 
   ];
 

    let h1 = document.getElementById("h1");
    h1.innerText = "Ramen Menu";
    document.getElementById("ramenDetails");
    document.getElementById("details").innerText = "Ramen Details";
    document.getElementById("formHeader").innerText = "Insert New Ramen";
    document.getElementById("form");


   //we be getting the elements from the HTML and Edit them here
   //Now lets get them !! 
  const menu = document.getElementById("ramen-menu");
  const ramenName = document.getElementById("name");
  const restaurant = document.getElementById("restaurant");
  const ratingRamen = document.getElementById("rating");
  const commentsOnRamen= document.getElementById("comment");
   
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
       img.title = ramen.title
       img.style.height = '195px';
       img.style.margin = "1px"
       img.addEventListener("click",() =>{
         return showRamenInfo(ramen);
       });
     // append as img elements inside div..name>>>> ramen-detail
     menu.appendChild(img);
     
     });
 
     //we need to know what kind of ramen we are dealing with 
      //so lets Use a Function to Alow us to know,
     //Ramen details when Clicked
      function showRamenInfo(ramen){
    //Info we need is name, restaurant, rating and comment
      
      ramenName.innerText = ramen.name;
      restaurant.innerText = "Restaurant🍜: " + ramen.restaurant;
      ratingRamen.innerText = "Rating 💫: " + ramen.rating;    
      commentsOnRamen.innerText = "Comment 📒:" + ramen.comment;
      
    }
    
  }
     //we need to be able to include new twpes of ramen

     function addSubmitListener(){
      const form = document.getElementById("form");
      form.addEventListener("submit", (event)=>{
         event.preventDefault();
     //after the new ramen has been keyed in we need to obtain it
         const newRamen ={
      id: ramens.length + 1, //adds the new Ramen  by generating a new ID
     name:  document.getElementById("name").value,
     restaurant: document.getElementById("Hotel").value,
     image: document.getElementById("pic").value,
     rating: document.getElementById("rate").value,
     Comment: document.getElementById("comment").value,
    };
     //"value" is used to store user input into the ID name object

     //we need to add the new ramen
     ramens.push(newRamen);

     //update the menu with new ramen
     dispalyRamens(); 

     //now that a new ramen has been added and submitted we need to clear the form
      // to allow for new values to be entered
 form.reset();
  });
}
      main()
     //now we run the entire thing
      function main(){
      dispalyRamens();
      addSubmitListener();
}

}); 