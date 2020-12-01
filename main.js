{
    'use strict';
  const menu = document.getElementById('open');
  const overlay = document.getElementById('overlay');
  const close = document.getElementById('close');
  menu.addEventListener('click',()=>{
      overlay.classList.add('show');
      overlay.classList.add('add');
      menu.classList.add('hide');


  });
 

  close.addEventListener('click',()=>{
        overlay.classList.remove('add');
        overlay.classList.remove('show');
        menu.classList.remove('hide');
      

  });
  const li = document.querySelectorAll('li')[0]
  li.addEventListener('click',()=>{
    overlay.classList.remove('add');
        overlay.classList.remove('show');
        menu.classList.remove('hide');
  });
  const li2 = document.querySelectorAll('li')[1]
  li2.addEventListener('click',()=>{
    overlay.classList.remove('add');
        overlay.classList.remove('show');
        menu.classList.remove('hide');
  });

  const li3 = document.querySelectorAll('li')[2]
  li3.addEventListener('click',()=>{
    overlay.classList.remove('add');
        overlay.classList.remove('show');
        menu.classList.remove('hide');
  });
  const submit = getElementById('contactform');
  const button = querySelector('button');
  button.addEventListener('click',()=>{
    

  })
  
}
