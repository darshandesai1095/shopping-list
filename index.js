
const input = document.getElementById("input")
document.querySelector(".summary").innerHTML = `Total items: 0`

input.addEventListener("keypress", e => {
    if (e.key === "Enter") {
        e.preventDefault()

        if (!input.value) {
            alert("You must enter something!")
        } else {

            //create li element
            const li = document.createElement("LI")

            //create checkbox and add as child to li
            const checkbox = document.createElement("INPUT")
            checkbox.setAttribute("type", "checkbox")
            li.appendChild(checkbox)

            //create <p> and add as child to li
            const p = document.createElement("P")
            const pContent = document.createTextNode(input.value)
            p.appendChild(pContent)
            li.appendChild(p)
            
            //create span element + class + contents
            const span = document.createElement("SPAN")
            const spanContent = document.createTextNode("x")
            span.className = "remove-btn"
            span.appendChild(spanContent)
            li.appendChild(span)

            document.getElementById("todo-list").appendChild(li)

            // add eventlistner to x (delete) button
            removeBtnList = document.getElementsByClassName("remove-btn")
            lastRemoveBtn = removeBtnList[removeBtnList.length - 1]
            lastRemoveBtn.addEventListener("click", function(e) {
                e.preventDefault()
                this.parentElement.remove()  //update HTML
            })

            input.value = ""
        }       
    }

    document.body.querySelector(".summary").innerHTML = 
        `Total items: ${document.getElementsByClassName("remove-btn").length}`

});

//for loop to add event listener (toggle/check) to any list items
const ul = document.querySelector("#todo-list")
ul.addEventListener("click", function(event) {
    if (event.target.tagName === "INPUT") {
        event.target.nextElementSibling.classList.toggle("cross-out")
    }

    document.body.querySelector(".summary").innerHTML = 
        `Total items: ${document.getElementsByClassName("remove-btn").length}`
});