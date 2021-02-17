const vdbtn = document.querySelector('.vdbtn');
const videoContainer = document.querySelector('.video-container');
const close = document.querySelector('.close');

vdbtn.addEventListener('click',()=>{
    videoContainer.classList.add('show');
})

close.addEventListener('click',()=>{
    videoContainer.classList.remove('show');
})