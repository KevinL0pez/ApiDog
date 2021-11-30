const API_URL = 'https://dog.ceo/api/breeds/image/random'

const xhr = new XMLHttpRequest()
const HTMLResponse = document.querySelector("#cards")
const tpl =document.createDocumentFragment()

fetch(`${API_URL}`)
    .then(response => response.json())
    .then((dogs) => {
        const tpl = dogs.map(dogs = `<li>${dogs.message} ${dogs.status}</li>`)
        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`
    })

/**
 * 
 function onRequestHandler() {
    if (this.readyState == 4 & this.status == 200) {
        
        const data = JSON.parse(this.response)
        

        const tpl = data.map((dog) => ``)
        HTMLResponse.innerHTML = ``
    }
}

xhr.addEventListener("load", onRequestHandler)
xhr.open('GET', )
xhr.send()
 * 
 */
