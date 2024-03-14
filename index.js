//
//https://youtu.be/FB6IAhYdTjA?list=PL3Qv7aeTNq0eFnNhR8AXg4Klu-2dajB4i&t=2429.
//https://youtu.be/FB6IAhYdTjA?list=PL3Qv7aeTNq0eFnNhR8AXg4Klu-2dajB4i&t=3770


const projectesContainer =document.getElementById("targetesContainer");
const aside = document.getElementsByTagName("aside")[0];

const getTecnologies=(tecnologies) => {
    let res ="";
    tecnologies.forEach(tecnologia =>{
        res +=`<span class="tecnologia">${tecnologia}</span> `
    })
    return res;
}
///Creació de projectes
projectes.forEach(projecte =>{
    const nouProjecte = document.createElement("div");
    nouProjecte.classList = "targeta projecte";
    projectesContainer.appendChild(nouProjecte);
    nouProjecte.innerHTML = `
    <img src="img/projectes/${projecte.img}">
    <div>
        <h3>${projecte.titl}</h3>
        <p>${projecte.description}</p>
        <p>Targetes: ${getTecnologies(projecte.targets)}</p>
    </div>
    <a href="${projecte.link}" target="_blank">Anar al projecte</a>
    `
})

//Creació de informació personal
const novaPresentacio = document.createElement("div");
novaPresentacio.classList = "presentacio";
novaPresentacio.innerHTML =  `
<img src="${personalInformation.image}">
`;
personalInformation.others.forEach( data =>{
    novaPresentacio.innerHTML +=  `
    <div>
        <span>${data[0]}:</span>
        <span>${data[1]}</span>
    </div>
    `;
})
aside.appendChild(novaPresentacio);


//Creació de Idiomes
const newIdiom = document.createElement("div");
newIdiom.classList = "idiom";
personalInformation.idioms.forEach( data =>{
    newIdiom.innerHTML +=  `
    <div>
        <span>${data[0]}:</span>
        <span>${data[1]}</span>
    </div>
    `;
})
aside.appendChild(newIdiom);
//Tecnologies
const newTechnology = document.createElement("div");
newTechnology.classList = "technology";
personalInformation.technologies.forEach( data =>{
    newTechnology.innerHTML +=  `
    <div>
        <span>${data[0]}</span>
        <span>${data[1]}</span>
    </div>
    <progress max="10" value=${data[1]}>
    `;
})
aside.appendChild(newTechnology);

//Links
const getIconsSN = (SN)=>{
    const urlBase = "img/icons/";
    switch(SN){
        case "instagram":
            return urlBase+"instagram.svg";
        case "linkedin":
            return urlBase+"linkedin.svg";
        case "facebook":
            return urlBase+"square-facebook.svg";
        case "twitter":
            return urlBase+"twitter.svg";
        case "youtube":
            return urlBase+"youtube.svg";
        case "github":
            return urlBase+"github.svg";
        default:
            return urlBase+"globe-solid.svg";
    }
}
const newSocialNetwork = document.createElement("div");
newSocialNetwork.classList = "socialnetwork";
personalInformation.socialNetworks.forEach( data =>{
    if(data[1]!==""){
        newSocialNetwork.innerHTML +=  `
        <a href="${data[1]}" target="_blank">
        <img src=${getIconsSN(data[0])}>
        </a>
        `
    }

})

aside.appendChild(newSocialNetwork);


//https://youtu.be/FB6IAhYdTjA?list=PL3Qv7aeTNq0eFnNhR8AXg4Klu-2dajB4i&t=3770
