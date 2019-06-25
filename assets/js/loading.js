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
let MyRandom = Math.random() * 15
let p = setInterval(function(){
    MyRandom = Math.random() * 15
    console.log(MyRandom)
    count++
    countFisti--
    if(count === 100){
        clearInterval(p)
        bouton.style.display = "block"
    }
    pourcentage.innerHTML = count + '%'
    skillbar.style.width = count + '%'
    fisti.style.right = "-" + countFisti + "%"
},1000/MyRandom)



