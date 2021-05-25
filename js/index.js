let b;
let computerHtml = parseInt(document.getElementById("computer").innerHTML);
let meHtml = parseInt(document.getElementById("me").innerHTML);
let tieno = parseInt(document.getElementById("tieno").innerHTML);
function choice() {
  let a = Math.floor(Math.random() * 3);
  // console.log(a)

  if (a === 0) {
    b = "rock";
    // console.log(b)
  } else if (a === 1) {
    b = "paper";
    // console.log(b)
  } else {
    b = "scissor";
    // console.log(b)
  }
}

function paperChoice() {
  choice();
  if (b === "paper") {
    alert("Its a draw");
    document.getElementById('heading3').innerHTML = `The Computer chose ${b} and you chose paper`
    document.getElementById('heading4').innerHTML = "Its a draw"
    tieno = tieno +1;
    let tienoint= String(tieno)
    document.getElementById('tieno').innerHTML = tienoint
  } else if (b === "scissor") {
    alert("You Lost");
    computerHtml = computerHtml + 1;
    let omputerHtml = String(computerHtml);
    document.getElementById("computer").innerHTML = omputerHtml;
    document.getElementById('heading3').innerHTML = `The Computer chose ${b} and you chose paper`
    document.getElementById('heading4').innerHTML = "You Lost"
  } else if (b === "rock") {
    alert("You Won");
    meHtml = meHtml + 1;
    let omputerHtml = String(meHtml);
    document.getElementById("me").innerHTML = omputerHtml;
    document.getElementById('heading3').innerHTML = `The Computer chose ${b} and you chose paper`
    document.getElementById('heading4').innerHTML = "You Won"
  }
}

function scissorChoice() {
  choice();
  if (b === "scissor") {
    alert("Its a draw");
    document.getElementById('heading3').innerHTML = `The Computer chose ${b} and you chose scissor`
    document.getElementById('heading4').innerHTML = "Its a draw"
    tieno = tieno +1;
    let tienoint= String(tieno)
    document.getElementById('tieno').innerHTML = tienoint
  } else if (b === "rock") {
    alert("You Lost");
    computerHtml = computerHtml + 1;
    let omputerHtml = String(computerHtml);
    document.getElementById("computer").innerHTML = omputerHtml;
    document.getElementById('heading3').innerHTML = `The Computer chose ${b} and you chose scissor`
    document.getElementById('heading4').innerHTML = "You Lost"
  } else if (b === "paper") {
    alert("You Won");
    meHtml = meHtml + 1;
    let omputerHtml = String(meHtml);
    document.getElementById("me").innerHTML = omputerHtml;
    document.getElementById('heading3').innerHTML = `The Computer chose ${b} and you chose scissor`
    document.getElementById('heading4').innerHTML = "You Won"
  }
}

function rockChoice() {
  choice();
  if (b === "rock") {
    alert("Its a draw");
    document.getElementById('heading3').innerHTML = `The Computer chose ${b} and you chose rock`
    document.getElementById('heading4').innerHTML = "Its a draw"
    tieno = tieno +1;
    let tienoint= String(tieno)
    document.getElementById('tieno').innerHTML = tienoint
  } else if (b === "paper") {
    alert("You Lost");
    computerHtml = computerHtml + 1;
    let omputerHtml = String(computerHtml);
    document.getElementById("computer").innerHTML = omputerHtml;
    document.getElementById('heading3').innerHTML = `The Computer chose ${b} and you chose rock`
    document.getElementById('heading4').innerHTML = "You Lost"
  } else if (b === "scissor") {
    alert("You Won");
    meHtml = meHtml + 1;
    let omputerHtml = String(meHtml);
    document.getElementById("me").innerHTML = omputerHtml;
    document.getElementById('heading3').innerHTML = `The Computer chose ${b} and you chose rock`
    document.getElementById('heading4').innerHTML = "You Won"
  }
}
