(function(){
  var btn = document.querySelector('.nav-toggle');
  var nav = document.querySelector('nav[aria-label="Primary"]');
  if (!btn || !nav) return;

  function setOpen(open){
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-is-open', open);
  }

  btn.addEventListener('click', function(e){
    e.stopPropagation();
    setOpen(btn.getAttribute('aria-expanded') !== 'true');
  });

  nav.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){ setOpen(false); });
  });

  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      setOpen(false);
      btn.focus();
    }
  });

  document.addEventListener('click', function(e){
    if (!nav.classList.contains('is-open')) return;
    if (nav.contains(e.target) || btn.contains(e.target)) return;
    setOpen(false);
  });

  // If the viewport grows past mobile while open, close cleanly
  var mq = window.matchMedia('(min-width: 721px)');
  function handleMq(){ if (mq.matches) setOpen(false); }
  if (mq.addEventListener) mq.addEventListener('change', handleMq);
  else if (mq.addListener) mq.addListener(handleMq);
})();
