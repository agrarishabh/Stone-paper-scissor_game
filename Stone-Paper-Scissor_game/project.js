let stone = document.querySelector("#stone");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let you = document.querySelector("#you");
let comp = document.querySelector("#comp");
let pick = document.querySelector("#pick");
let a = 0;
let b = 0;
 const computer = ()=>{
    const choice = ["stone","paper","scissor"]
    const randomidx = Math.floor(Math.random()*3);
    return choice[randomidx];
}
stone.onmouseover=()=>{
    const compchoice = computer();
    if(compchoice=="stone"){
        pick.innerText = "DRAW";
        pick.style.backgroundColor = "white";

    }
    if(compchoice=="scissor"){
        pick.innerText = "YOU WIN BECAUSE STONE BEAT SCISSOR";
        you.innerText = ++b;
        pick.style.backgroundColor = "green";
    }
    if(compchoice=="paper"){
        pick.innerText = "YOU LOOSE BECAUSE PAPER BEAT STONE";
        comp.innerText = ++a;
        pick.style.backgroundColor = "red";

    }
}
paper.onmouseover=()=>{
    const compchoice = computer();
    if(compchoice=="paper"){
        pick.innerText = "DRAW";
        pick.style.backgroundColor = "white";

    }
    if(compchoice=="stone"){
        pick.innerText = "YOU WIN BECAUSE PAPER BEAT STONE";
        you.innerText = ++b;
        pick.style.backgroundColor = "green";
    }
    if(compchoice=="scissor"){
        pick.innerText = "YOU LOOSE BECAUSE SCISSOR BEAT PAPER";
        comp.innerText = ++a;
        pick.style.backgroundColor = "red";

    }
}
scissor.onmouseover=()=>{
    const compchoice = computer();
    if(compchoice=="scissor"){
        pick.innerText = "DRAW";
        pick.style.backgroundColor = "white";

    }
    if(compchoice=="paper"){
        pick.innerText = "YOU WIN BECAUSE SCISSOR BEAT PAPER";
        you.innerText = ++b;
        pick.style.backgroundColor = "green";
    }
    if(compchoice=="stone"){
        pick.innerText = "YOU LOOSE BECAUSE STONE BEAT SCISSOR";
        comp.innerText = ++a;
        pick.style.backgroundColor = "red";

    }
}

