const HEX = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function changeColor() {
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
        hexColor += HEX[randomNumber()];
    }

    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});

function randomNumber() {
    return Math.floor(Math.random() * 16);
}
