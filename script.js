let ul = document.querySelector("#myList");
let btn = document.querySelector("#addBtn");
btn.addEventListener("click", function () {
    let newLi = document.createElement("li");
    let count = ul.children.length + 1;
    newLi.textContent = "New Item " + count;
    if (count % 2 !== 0) {
        // Odd: bold + blue
        newLi.style.fontWeight = "bold";
        newLi.style.color = "blue";
    } else {
        newLi.style.fontStyle = "italic";
        newLi.style.color = "red";
    }
    ul.appendChild(newLi);
});
