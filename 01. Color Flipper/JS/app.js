const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function changeColor() {
    const RED = getRandomNumber();
    const GREEN = getRandomNumber();
    const BLUE = getRandomNumber();

    const newColor = `rgb(${RED}, ${GREEN}, ${BLUE})`;

    document.body.style.backgroundColor = newColor;
    color.textContent = newColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}
