 const icon = document.getElementById("icon")
 const para = document.getElementById("para")
 const end1 = document.getElementById("demo")
 const para2 = document.getElementById("para2")
 
 
 
 
 icon.addEventListener("click",function(){
   icon.innerHTML= "am doing best"
   end1.textContent= "thank u"
})
 
let person = {
    name:"icon",
    age:  21,
    model: "v31504"
}
let person1 = person

para.addEventListener("click",function(){
   for(let obj in person1){
    para2.innerHTML +=`<li>${person[obj]}</li>`
   }  
 })
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
