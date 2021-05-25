console.log('%c HI', 'color: firebrick')


const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 


function fetchImage (imgUrl) {
    fetch (imgUrl)
    .then(function(response){
        return response.json ()
    })
    .then(function(data){
    data.message.forEach(renderImage)
    });
}

function renderImage (imgUrl) {
    let container = document.querySelector('#dog-image-container')
    let img = document.createElement("img")
    img.src = imgUrl
    container.appendChild(img)
}

function dogList(breed) {
    let ul = document.getElementById('dog-breeds')
    let li = document.createElement('li')
    li.textContent = breed;
    li.style.cursor = 'pointer'
    li.addEventListener('click', function() {
       
        li.style.color="blue"
        
    })
    ul.appendChild(li)
    
}

fetchImage(imgUrl)


function dogKeys(object){
    for (const property in object) {
       dogList(property)
      }
}

function dogBreeds (dogUrl) {
    fetch (dogUrl)
    .then(function(response){
        return response.json ()
    })
    .then(function(dogData){
        dogKeys(dogData.message)
    })
}

dogBreeds(breedUrl)
// After the first challenge is completed, add JavaScript that:

// on page load, fetches all the dog breeds using the url above ⬆️
// adds the breeds to the page in the <ul> provided in index.html