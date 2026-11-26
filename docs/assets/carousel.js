
(function(){var s=document.querySelector('main > section');if(!s)return;
var slides=[].slice.call(s.children).filter(function(e){return e.tagName==='DIV'&&e.querySelector('img')});
var bar=s.querySelector('div.absolute.bottom-8');if(!bar||!slides.length)return;
var dots=[].slice.call(bar.children[0].children),btns=bar.children[1].children,i=0,t;
function show(k){i=(k+slides.length)%slides.length;slides.forEach(function(d,n){var on=n===i;
d.classList.toggle('opacity-100',on);d.classList.toggle('opacity-0',!on);d.classList.toggle('pointer-events-none',!on);
d.setAttribute('aria-hidden',String(!on));var im=d.querySelector('img');im.classList.toggle('scale-105',on);im.classList.toggle('scale-100',!on);});
dots.forEach(function(b,n){var on=n===i;b.classList.toggle('w-12',on);b.classList.toggle('bg-accent',on);b.classList.toggle('w-6',!on);b.classList.toggle('bg-ink-foreground/40',!on);});
clearInterval(t);t=setInterval(function(){show(i+1)},6000);}
dots.forEach(function(b,n){b.onclick=function(){show(n)}});btns[0].onclick=function(){show(i-1)};btns[1].onclick=function(){show(i+1)};show(0);})();
