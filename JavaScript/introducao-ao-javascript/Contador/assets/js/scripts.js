var numero = document.getElementById('numero')
let count = 0;

function color(){
    if (count < 0) {
        numero.style.color = 'Red';
    } else {
        if (count == 0){
            numero.style.color = 'Black';
        } else {
            numero.style.color = 'Blue';
        }
    }
}
            
function somar(){
    count++;
    numero.innerHTML = count;
    color()
}

function subtrair(){
    count--;
    numero.innerHTML = count;
    color()
}