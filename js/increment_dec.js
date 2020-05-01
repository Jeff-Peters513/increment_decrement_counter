let nBoxNbr = 0;

const increment = () => {
    nBoxNbr = nBoxNbr +1;
    document.getElementById("shwNbr").value = nBoxNbr;
}
const decrement = () => {
    nBoxNbr = nBoxNbr -1;
    document.getElementById("shwNbr").value = nBoxNbr;
}
// const advDisplay= (nBoxNbr) => {
//     if(nBoxNbr%2==0){
//         shwNbr.style.color="red";
//         document.getElementById("shwNbr").value = nBoxNbr;
//     }

    //if nbr is evenly divided by 2 display in red
    //you can use: inpt.style.color='red'; to set style
    // where 'inpt' is the name of your variable that you used to call document.getElementById
    //if nbr is evenly divided by 3 display in italic
    //style.fontStyle='italic' and 
    //if nbr is evenly divided by 7 display in bold
    //style.fontWeight='bold

   // document.getElementById("shwNbr").value = nBoxNbr;
//}

const display= () => {
    document.getElementById("shwNbr").value = nBoxNbr;
}

const loaded = () => {
    display();
    
}

