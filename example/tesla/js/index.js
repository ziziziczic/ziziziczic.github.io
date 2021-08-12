const TIMESET = 3000;
const first = document.querySelector(".eventModel div:first-child");
const modal = document.querySelector(".modal_container");
const modalBtn = document.querySelector(".modal_container button");

function closeModal(){
    modal.classList.add("hide");
}

function showing(){
    let current = document.querySelector(".eventModel .on");
    let next = current.nextElementSibling;
    
    if(current){
        current.classList.remove("on");
        if(next){
            next.classList.add("on");
            current=next;
        }else{
            first.classList.add("on");
            current=first;
        }
    }else{
        first.classList.add("on");
    }
}

modalBtn.addEventListener("click",closeModal);
setInterval(showing,TIMESET);
