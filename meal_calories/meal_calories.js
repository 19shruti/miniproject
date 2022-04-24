const search=document.getElementById('search');
const submit=document.getElementById('submit');
const mealEl=document.getElementById('image');
const resultHeading=document.getElementsByClassName('result-heading');
const singleMeal=document.getElementById('single-meaL');
var imagesurl=document.getElementById('imm');

var imagess =" ";


function getdata(e)
{
// console.log(e);

fetch(
    `https://api.spoonacular.com/recipes/${e}/information?apiKey=234df877100a4ae0b183c067f0be6ecd&includeNutrition=false`
  )
    .then((response) => response.json())
    .then((data) => {
     imagesurl= imagess+=`<img src= ${data.image}>`;  
      mealEl.innerHTML=imagesurl;
   })
}



//search meal parameter . 
function searchMeal(e)
{
    e.preventDefault();  
    //to clear the search section 

   //get search meal
  // singleMeal.innerHTML="";
    console.log(search.value);

    const calories=search.value;
    if(calories)
    {
        fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=234df877100a4ae0b183c067f0be6ecd&timeFrame=day&targetCalories=${calories}`)
      .then((res)=>res.json())
      .then((data)=>data.meals.forEach((e)=>getdata(e.id)))   
    }
}
//EVENTLISTERNERS
//ADD EVENT LISTERNER FOR SUBMIT BUTTON
submit.addEventListener('submit',searchMeal);
