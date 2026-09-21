var bg = document.querySelector(".navBG")
var box = document.querySelector(".navBox")

var in1 = document.getElementById("in1")
var in2 = document.getElementById("in2")
var disk = document.getElementById("disk")

var a = document.getElementById("btn")
a.addEventListener("click", function () {
    bg.style.display = "block"
    box.style.display = "block"
    in1.focus()
})

var cn = document.getElementById("can")
cn.addEventListener("click", function (event) {
    event.preventDefault();
    bg.style.display = "none"
    box.style.display = "none"
})

var ad = document.getElementById("add")
ad.addEventListener("click", function (event) {
    event.preventDefault();
    var contan = document.querySelector(".contain")
    var divi = document.createElement("div");
    divi.setAttribute("class", "sheet")
    divi.innerHTML = `<h2>${in1.value}</h2><h4>${in2.value}</h4><p>${disk.value}</p><button onclick='dltParent(event)'>Delete</button>`;

    console.log(divi)
    contan.append(divi);

    in1.value = ""
    in2.value = ""
    disk.value = ""

    bg.style.display = "none"
    box.style.display = "none"
})
function dltParent(event) {
    event.target.parentElement.remove()
}

const light = document.querySelector(".torchlight");
document.addEventListener("mousemove", (e) => {
    light.style.left = e.clientX + "px";
    light.style.top = e.clientY + "px";
});

// // document.addEventListener("mousemove", (e) => {
// //   document.body.style.setProperty("--x", e.clientX + "px");
// //   document.body.style.setProperty("--y", e.clientY + "px");
// // });


// const bg = document.querySelector(".navBG");
// const box = document.querySelector(".navBox");
// const in1 = document.getElementById("in1");
// const in2 = document.getElementById("in2");
// const disk = document.getElementById("disk");

// const openBtn = document.getElementById("btn");
// const cancelBtn = document.getElementById("can");
// const addBtn = document.getElementById("add");
// const container = document.querySelector(".contain");

// openBtn.addEventListener("click", function () {
//   bg.style.display = "block";
//   box.style.display = "block";
//   in1.focus();
// });

// cancelBtn.addEventListener("click", function (event) {
//   event.preventDefault();
//   bg.style.display = "none";
//   box.style.display = "none";
// });

// addBtn.addEventListener("click", function (event) {
//   event.preventDefault();

//   if (in1.value.trim() === "") {
//     in1.focus();
//     return;
//   }

//   const divi = document.createElement("div");
//   divi.className = "sheet";

//   divi.innerHTML = `
//     <h2>${in1.value}</h2>
//     <h4>${in2.value}</h4>
//     <p>${disk.value}</p>
//     <button class="delete-btn">Delete</button>
//   `;

//   divi.querySelector(".delete-btn").addEventListener("click", function () {
//     divi.remove();
//   });

//   container.appendChild(divi);

//   in1.value = "";
//   in2.value = "";
//   disk.value = "";

//   bg.style.display = "none";
//   box.style.display = "none";
// });

// const light = document.querySelector(".torchlight");

// document.addEventListener("mousemove", function (e) {
//   light.style.left = e.clientX + "px";
//   light.style.top = e.clientY + "px";
// });