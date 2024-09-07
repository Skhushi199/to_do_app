// let todo = [];

// let request = prompt("enter your choice");

// while(true){
//     if(request == "quit"){
//         console.log("quiting the app");
//         break;
//     }

//     if(request == "list"){
//         console.log("_______________");
//         for(task of todo){
//             console.log(task);
//         }
//         console.log("_______________");
//     }
//     else if(request == "add"){
//         let item = prompt("enter the task");
//         todo.push(item);
//         console.log("task added");
//     }
//     // else if(request == "delete"){
//     //     let item = prompt("enter the task you want to delete ");
//     //     todo.delete(item);
//     //     console.log(`${item} is delted`);
//     // }
// }

let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");


btn.addEventListener("click", ()=>{
    console.log(inp.value);
    li = document.createElement("li");
    li.innerText = inp.value;
    ul.appendChild(li);

    let btndl = document.createElement("button");
    btndl.classList.add("delete");
    btndl.innerText = "delete";
    li.appendChild(btndl);
    inp.value = "";
});

ul.addEventListener("click", (event)=>{
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});