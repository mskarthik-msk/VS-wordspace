const txt1 = document.querySelector("#txt1");
const add = document.querySelector("#added");
const dlt = document.querySelector(".dlt")
const order = document.querySelector("#order");

add.addEventListener("click", function () {
  const text = txt1.value.trim();
  if (text === "") return;

  const listed = document.createElement("li");
  const dlte = document.createElement("button");

  listed.textContent = text;
  dlte.textContent = "Delete";

  dlte.addEventListener("click", function dltdoo(){
     listed.remove();
  });

    listed.appendChild(dlte);
    order.appendChild(listed);

  txt1.value = "";
  txt1.focus()
});

function dltdoo(e) {
      e.target.parentElement.remove();
   }