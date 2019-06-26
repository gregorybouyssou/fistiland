function Select(mavar){
    return document.querySelector(mavar)
}

let pourcentage = Select(".load span")
let skillbar = Select(".skill")
let bouton = Select(".monbouton")
let fisti = Select(".fisti")

let countFisti = 130

fisti.style.right = "-" + countFisti + "%"

let count = 5

let p = setInterval(function(){
    let e = Math.round(Math.random() * 1.2)
    count += e
    countFisti -= e
    if(count >= 100){
        count = 100
        clearInterval(p)
        bouton.style.display = "block"
    }
    console.log(countFisti)
    pourcentage.innerHTML = count + '%'
    skillbar.style.width = count + '%'
    fisti.style.right = "-" + countFisti + "%"
},1000/16)



