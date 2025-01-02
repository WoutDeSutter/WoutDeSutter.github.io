function createPixel(){
    inside = document.querySelector('.js-inside');
    for(let i=0; i < 5; i++){
        var block = document.createElement('div');
        block.style.width = 5+i+'rem';
        block.style.height = 7-i+'rem';
        block.style.backgroundColor = 'red';
        block.style.gridArea = 'box';
        block.style.top = '50%';
        block.style.left = '50%';
        inside.appendChild(block);
    };
    // var pixel = document.createElement('div');
    // pixel.style.width = '10px';
    // pixel.style.height = '10px';
    // pixel.style.backgroundColor = 'red';
    // pixel.style.position = 'absolute';
    // pixel.style.top = '50%';
    // pixel.style.left = '50%';
    // document.body.appendChild(pixel);
    // console.log('Pixel created');
}

document.addEventListener('DOMContentLoaded', function() {
    createPixel();
    console.log('DOM loaded');
});