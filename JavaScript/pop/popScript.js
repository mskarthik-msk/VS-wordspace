var bg=document.querySelector(".navBG")
var box=document.querySelector(".navBox")

var in1=document.getElementById("in1")
var in2=document.getElementById("in2")
var disk=document.getElementById("disk")

var a=document.getElementById("btn")
a.addEventListener("click",function(){
    bg.style.display="block"
    box.style.display="block"
    in1.focus()
})

var cn=document.getElementById("can")
cn.addEventListener("click",function(event){
    event.preventDefault();
    bg.style.display="none"
    box.style.display="none"
})

var ad=document.getElementById("add")
ad.addEventListener("click",function(event){
    event.preventDefault();
    var contan=document.querySelector(".contain")
    var divi=document.createElement("div");
        divi.setAttribute("class","sheet")
        divi.innerHTML=`<h2>${in1.value}</h2><h4>${in2.value}</h4><p>${disk.value}</p><button onclick='dltParent(event)'>Delete</button>`;
        
        console.log(divi)
        contan.append(divi);
        
        in1.value=""
        in2.value=""
        disk.value=""

        bg.style.display="none"
        box.style.display="none"
    })
function dltParent(event){
        event.target.parentElement.remove()
    }

const light = document.querySelector(".torchlight");
document.addEventListener("mousemove", (e) => {
  light.style.left = e.clientX + "px";
  light.style.top = e.clientY + "px";
});

// document.addEventListener("mousemove", (e) => {
//   document.body.style.setProperty("--x", e.clientX + "px");
//   document.body.style.setProperty("--y", e.clientY + "px");
// });