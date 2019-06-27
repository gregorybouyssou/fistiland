function selectAll(element){
    return document.querySelectorAll(element)
}
 function select(element){
    return document.querySelector(element)
}

let link = selectAll(".navfooter li")
let infos = select("#infos")
let services = select("#services")
let about = select("#about")

let linkInfos = select(".infos")
let linkServices = select(".services")
let linkAbout = select(".about")

let clignote = select('.clignote h5')
console.log(clignote)

let i = setInterval(function(){
    clignote.classList.toggle('clignot')
}, 1000)

for(let i = 0; i < link.length; i++){
    link[i].style.cursor = "pointer"
    let p = link[i].addEventListener("click", function(e){
        if(e.explicitOriginalTarget.innerHTML === "Infos Légales"){
            linkInfos.classList.add("myactive")
            linkServices.classList.remove("myactive")
            linkAbout.classList.remove("myactive")
            infos.style.display = "block"
            services.style.display = "none"
            about.style.display = "none"
        }
        if(e.explicitOriginalTarget.innerHTML === "Services"){
            linkInfos.classList.remove("myactive")
            linkServices.classList.add("myactive")
            linkAbout.classList.remove("myactive")
            infos.style.display = "none"
            services.style.display = "block"
            about.style.display = "none"
        }
        if(e.explicitOriginalTarget.innerHTML === "A propos"){
            linkInfos.classList.remove("myactive")
            linkServices.classList.remove("myactive")
            linkAbout.classList.add("myactive")
            infos.style.display = "none"
            services.style.display = "none"
            about.style.display = "block"
        }
    })
}
