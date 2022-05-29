/*typing*/

var typed = new Typed(".typing", {
    strings: ["", "Software Engineer", "Web Designer", "Web Developer", "Graphic Designer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});

/*Aside*/

const nav = document.querySelector(".nav"),
    navList = nav.querySelector("li"),
    totalNavList = navList.length,
    allSection = document.querySelector(".section"),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");

    a.addEventListener("click",function (){

        for (let j = 0; j < totalNavList; j++) {

           navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
    })
}
function showSection(element){

    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}

const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");

window.onload = ()=>{
   filterItem.onclick = (selectedItem)=>{
       if (selectedItem.target.classList.contains("item")){
           filterItem.querySelector(".active").classList.remove("active");
           let filterName = selectedItem.target.getAttribute("data-name");
           filterImg.forEach((image)=>{
               let filerImages = image.getAttribute("data-name");

               if (filerImages == filterName || filterName == "all"){
                   image.classList.remove("hide");
                   image.classList.add("show");
               }else {
                   image.classList.add("hide");
                   image.classList.remove("show");
               }

           })
       }
   }
}