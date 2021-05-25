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


function dogKeys(object, filter){
    if(filter){
        for (const property in object) {
            console.log(property[0])
        if (filter === property[0]){
            dogList(property)
        }
        }
    console.log(filter)
    }else {
        for (const property in object) {
            dogList(property)     
    }
    }
}

dogBreeds(breedUrl, 'a')

function dogBreeds (dogUrl, filter) {
    return fetch (dogUrl)
    .then(function(response){
        return response.json ()
    })
    .then(function(dogData){
        dogKeys(dogData.message, filter)
    })
}

function dropSelector (){
    let dropDown = document.getElementById('breed-dropdown')
    document.addEventListener('change', function (e){
    let filter = e.target.value
    if (filter){
    let ul = document.getElementById('dog-breeds') 
        ul.innerHTML = ""
    }
    dogBreeds(breedUrl, filter)
    })
}

document.addEventListener("DOMContentLoaded", dropSelector)
