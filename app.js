// let inputs = document.getElementById('input')
// let button = document.getElementById('btn')
// let message = document.getElementById('msg')
// button.addEventListener("click", () => {
//     let valeur = inputs.value;
//     message.innerHTML = valeur

//     setTimeout(() => { inputs.innerText = "" }, 3000)


// })
let body = document.getElementsByClassName('body')
let row = document.getElementById('data')
fetch("https://randomuser.me/api/?results=10").then(function(response) {

        return response.json()

    })
    .then((data) => {



        for (let i = 0; i < data.results.length; i++) {



            let col = document.createElement('div')
            col.classList.add('col-md-3', 'my-3', 'text-center')
            let clas = document.createElement('div')
            clas.classList.add('card', 'shadow', 'rounded', 'bg-light')
            let hello = document.createElement('div')
            hello.classList.add('card-body')
            let para = document.createElement('p')
            para.innerText = data.results[i].name.first + " " + data.results[i].name.last
            let img = document.createElement('img')
            img.src = data.results[i].picture.medium

            row.appendChild(col)
            col.appendChild(clas)
            clas.appendChild(hello)
            hello.appendChild(img)
            hello.appendChild(para)

        }
    })