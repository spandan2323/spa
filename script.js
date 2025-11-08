// small scripts: mobile nav toggle + smooth scroll
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.querySelector('.nav-toggle');
  const navlinks = document.querySelector('.nav-links');
  toggle && toggle.addEventListener('click', ()=>{
    if(navlinks.style.display==='flex') navlinks.style.display='none';
    else navlinks.style.display='flex';
  });

  // smooth scroll for anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
});