const noButton = document.getElementById('no');
let clicked = false;

noButton.addEventListener('click', () => {
    alert("Try again :c");
    clicked = true;
});

noButton.addEventListener('mouseover', () => {
    if (clicked) {
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
        noButton.style.position = 'absolute';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    }
});