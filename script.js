const box = document.getElementById("box");
const liste = document.getElementById("liste");

function done() {
    if (box.value === '' ) {
        alert("the box is empty");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = box.value;
        liste.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    box.value = "";
    saveData();
}

liste.addEventListener("click",function(e){
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
    false;
})

function saveData() {
    localStorage.setItem("data",liste.innerHTML);
}

function showtasck() {
    liste.innerHTML = localStorage.getItem("data");
}

showtasck();