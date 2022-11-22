let count = 1; 


function display(){
    let pokeContainer = document.getElementById('pokemon');
    pokeContainer.innerHTML = `<img class="pk" src="https://tinyurl.com/ironhack-pokemons/${count}.svg">`
    
}

let previous = document.getElementById('prev')
let next = document.getElementById('next')

previous.onclick = function(){
    if(count > 1){
        count -= 1
        display()
    }
}

next.onclick = function(){
    if(count < 650){
        count += 1
        display()
    }
}

