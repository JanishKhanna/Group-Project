const para = document.querySelector('.news1-info');
const text = para.textContent;

shave('.news1-info', 70);


const dots = document.querySelector('.js-shave-char')

dots.addEventListener('click', function(){
    para.textContent = text;
  });

