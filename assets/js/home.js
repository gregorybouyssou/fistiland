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

for(let i = 0; i < link.length; i++){
    link[i].style.cursor = "pointer"
    let p = link[i].addEventListener("click", function(e){
        if(e.explicitOriginalTarget.innerHTML === "Infos Légales"){
            linkInfos.classList.add("active")
            linkServices.classList.remove("active")
            linkAbout.classList.remove("active")
            infos.style.display = "block"
            services.style.display = "none"
            about.style.display = "none"
        }
        if(e.explicitOriginalTarget.innerHTML === "Services"){
            linkInfos.classList.remove("active")
            linkServices.classList.add("active")
            linkAbout.classList.remove("active")
            infos.style.display = "none"
            services.style.display = "block"
            about.style.display = "none"
        }
        if(e.explicitOriginalTarget.innerHTML === "A propos"){
            linkInfos.classList.remove("active")
            linkServices.classList.remove("active")
            linkAbout.classList.add("active")
            infos.style.display = "none"
            services.style.display = "none"
            about.style.display = "block"
        }
    })
}
