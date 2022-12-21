// Fetching Categories for UI
async function fetchCategories() {
  const response = await fetch('https://api.chucknorris.io/jokes/categories');
  
  const data = await response.json();
  return data;
}

// Fetch single joke function
async function fetchJoke(currentCategory) {
  const response = await fetch(
      `https://api.chucknorris.io/jokes/random?category=${currentCategory}`
);

const data = await response.json();
return data.value;
}

let currentCategory = "dev"


//Load Jokes onLoad
window.onload = async function () {
   const bodyRadioWrapper = document.getElementById("body-radio-wrapper")
   
   data = await fetchCategories()
   
   
      const radio = document.createElement("input")
      radio.type = "radio"
      radio.name = "category"
      radio.value = category
      radio.id = category
      radio.addEventListener('click', () => {
         currentCategory = Event.target.id
      })
      
      categoryWrapper.appendchild(radio)
      
      const label = document.createElement("label")
      label.htmlFor = category
      label.innerHTML = category
      categoryWrapper.appendchild(label)
      
      bodyRadioWrapper.appendChild(categoryWrapper)
   })
};
 
// Fetch Jokes
const jokeButton = document.getElementById("joke-button")
jokeButton.addEventListener('click', async function (){
   const value = await fetchJoke(currentCateegory)
   const jokeText = document.getElementById("body-joke-area")
   jokeText.innerHTML = ""
   jokeText.innerHTML = value
})