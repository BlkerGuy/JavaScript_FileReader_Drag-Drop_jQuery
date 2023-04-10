"use strict";


let fileInput = document.querySelector('input');
let image = document.querySelector('.image');

fileInput.addEventListener('change', (e)=>{


    console.log(e);

    let fileR = new FileReader();

    fileR.readAsDataURL(e.target.files[0]);

    fileR.addEventListener('load', ()=>{
        let img = document.createElement('img');
        img.src = fileR.result;
        image.append(img);
    })

})

image.addEventListener('click', (e)=>{
    console.log(e.target);
})


let li = document.querySelectorAll('li');
let ul = document.querySelectorAll('ul');

li.forEach(item => {
    item.addEventListener('dragstart', () => {
        item.classList.add('active');
    });

    item.addEventListener('dragend', () => {
        item.classList.remove('active');
    })
})

ul.forEach(item => {
    item.addEventListener('dragover', () => {
        let select = document.querySelector('.active');
        item.appendChild(select);
        setTimeout(()=>{
            let p = document.querySelector('#list p')
        p.style.display="none"; fileInput.remove();
        },1000)
    })
})