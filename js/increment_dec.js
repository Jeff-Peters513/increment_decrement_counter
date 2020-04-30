let nBoxNbr = 0;

const increment = () => {
    nBoxNbr = nBoxNbr +1;
   document.getElementById("shwNbr").value = nBoxNbr;
}
const decrement = () => {
    nBoxNbr = nBoxNbr -1;
   document.getElementById("shwNbr").value = nBoxNbr;
}
const display= () => {
    document.getElementById("shwNbr").value = nBoxNbr;
}

const loaded = () => {
    display();
}

