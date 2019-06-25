function Select(mavar){
    return document.querySelector(mavar)
}


let pourcentage = Select(".load span")
let skillbar = Select(".skill")
let bouton = Select(".monbouton")

let count = 5
let p = setInterval(function(){
    count++
    if(count === 100){
        clearInterval(p)
        bouton.style.display = "block"
    }
    pourcentage.innerHTML = count + '%'
    skillbar.style.width = count + '%'
    console.log(count)
},1000/12)



console.log(bouton)