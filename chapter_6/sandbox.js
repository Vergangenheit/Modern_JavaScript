const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', e => {
    console.log('Oi, my content is copywright');
});

const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
    //console.log(e.offsetX);
    box.textContent = `X pos ${e.offsetX} - Y pos ${e.offsetY}`;
});

document.addEventListener('wheel', e => {
    console.log(e.pageX);
})

