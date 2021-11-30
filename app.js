const API_URL = 'https://dog.ceo/api/breeds/image'

const xhr = new XMLHttpRequest()
const HTMLResponse = document.querySelector("#cards")
const tpl = document.createDocumentFragment('ul')

fetch(`${API_URL}/random`)
    .then(response => response.json())
    .then((random) => {
        random.forEach((dogs) => {
            let elem = document.createElement("li")
            elem.appendChild(
                document.createTextNode(`<li>${dogs.message} ${dogs.status}</li>`)
            )
            ul.appendChild(elem)
        });

        HTMLResponse.appendChild(ul)
    })
    
    /*const tpl = dogs.map(dogs = )
    HTMLResponse.innerHTML = `<ul>${tpl}</ul>`*/
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
