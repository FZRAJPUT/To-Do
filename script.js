const input = document.querySelector("#task");
const taskbtn = document.querySelector("#addtask");
const taskno = document.querySelector("#taskno");
const alltask = document.querySelector("#alltask");
// const  = document.querySelector("#");

var totaltask = 0;
var id1 = 0;
taskbtn.addEventListener("click", () => {
    var task = input.value;
    // console.log(task);
    if (input.value.length <= 0) {
        alert("Enter Something");
    }
    else {
        totaltask += 1;
        id1 += 1;
        taskno.innerHTML = totaltask;
        // alltask.append(task);
        var main = document.createElement("div");
        main.classList.add("maindiv");
        main.id = id1;
        // var radio = document.createElement("input");
        // radio.type = "radio";
        // radio.classList.add("radiobtn");
        var head = document.createElement("h5");
        head.innerHTML = input.value;
        input.value = "";
        var button = document.createElement("button");
        button.classList.add("deletebtn");
        button.innerHTML = `<i class="ri-delete-bin-line"></i>`
        // console.log()
        // main.appendChild(radio);
        main.appendChild(head);
        main.appendChild(button);
        alltask.appendChild(main)
        deletetask();
        // completetask();
        // var radio = document.querySelectorAll(".radiobtn");
        // radio.forEach(element => {
        //     element.addEventListener("click", () => {
        //         var parentDiv = element.parentElement;
        //         var h5 = parentDiv.querySelector("h5");
        //         completetask(h5);
        //     })
        // })
        // console.log(main);
        // console.log(radio,main);
    }
})

// taskno.innerHTML = totaltask;





function deletetask() {
    var deletebtn1 = document.querySelectorAll(".deletebtn");
    console.log(deletebtn1);
    deletebtn1.forEach(element => {
        element.addEventListener("click", () => {
            var parentDiv = element.parentElement;
            alltask.removeChild(parentDiv);
            totaltask -= 1;
            taskno.innerHTML = totaltask;
        })
    });
}


// function completetask(h5) {
//     // console.log(h5)
//     h5.style.textDecoration = "line-through";
//     h5.style.color = "rgb(227, 221, 221)";
//     if (totaltask >= 0) {
//         totaltask -= 1;
//         taskno.innerHTML = totaltask;
//     }
//     // console.log(parentDiv);
// }