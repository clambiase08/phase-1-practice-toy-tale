let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

// Access the list of toys from an API (mocked using JSON Server) and render each of them in a "card" on the page
// Each card should have the following child elements:
// h2 tag with the toy's name
// img tag with the src of the toy's image attribute and the class name "toy-avatar"
// p tag with how many likes that toy has
// button tag with a class "like-btn" and an id attribute set to the toy's id number

// should look like:
/* <div class="card">
  <h2>Woody</h2>
  <img src="[toy_image_url]" class="toy-avatar" />
  <p>4 Likes</p>
  <button class="like-btn" id="[toy_id]">Like ❤️</button>
</div> */

// First I need to:
// [x] write a function that does a fetch request by taking in a url and returning a fetch
// [x] write a function that renders the toys on the page by creating html elements, assigning them values based on the server, and appending them to the DOM
// [x] passing that function into my fetch function call as a .then callback and iterates on each toy to render them to the DOM


const toyCollection = document.querySelector('#toy-collection')

function renderToys(toy) {
  const div = document.createElement('div')
  div.className = "card"
  const h2 = document.createElement('h2')
  const img = document.createElement('img')
  const p = document.createElement('p')
  const button = document.createElement('button')
  button.className = "like-btn"
  h2.textContent = toy.name
  img.src = toy.image
  img.className = "toy-avatar"
  p.textContent = `${toy.likes} Likes`
  button.id = toy.id
  button.textContent = "Like ❤️"
  
  toyCollection.appendChild(div)
  div.append(h2)
  div.append(image)
  div.append(p)
  div.append(button)
}


function getToys(url) {
  return fetch(url)
  .then(res => res.json())
}

getToys('http://localhost:3000/toys')
.then((toysArr) => {
  toysArr.forEach(renderToys)
})

//Hook up a form that enables users to add new toys. Create an event listener so that, when the form is submitted, the new toy is persisted to the database and a new card showing the toy is added to the DOM
//When a user submits the toy form, two things should happen:
//A POST request should be sent to http://localhost:3000/toys and the new toy added to Andy's Toy Collection.
//If the post is successful, the toy should be added to the DOM without reloading the page.

//Then I need to:
// [x] select the form from the DOM and the form input areas
// [] add an event listener to the *form* for the submit that posts the data to the server with the values of the toys name and url entered, plus a default of 0 likes and a like button
// [] chain a .then to the POST such that it passes in the renderToys callback function to render the new card to the DOM

const form = document.querySelector('#add-toy-form')
const formNameInput = document.getElementsByName('name')
const formImageInput = document.getElementsByName('image')