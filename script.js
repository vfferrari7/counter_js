const diminuirButton = document.getElementById('diminuirBtn');
const resetButton = document.getElementById('resetBtn');
const aumentarButton = document.getElementById('aumentarBtn');
const countLabel = document.getElementById('count_label');
let count = 0;

aumentarButton.onclick = function(){
    count++;
    countLabel.textContent = count;
}

diminuirButton.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetButton.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}