/* =========================================================
   main.js — shared behavior loaded on every page
   ========================================================= */
(function(){
  // Footer year
  document.querySelectorAll('.js-year').forEach(function(el){
    el.textContent = new Date().getFullYear();
  });

  // Hamburger toggle
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('navLinks');
  if(hamburger && navLinks){
    hamburger.addEventListener('click', function(){
      var open = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.classList.toggle('no-scroll', open);
    });
    navLinks.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('no-scroll');
      });
    });
  }

  // Header gets a "scrolled" state for a slightly denser glass look
  var header = document.querySelector('header');
  if(header){
    var onScroll = function(){
      header.classList.toggle('scrolled', window.scrollY > 24);
    };
    window.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
  }

  // Adaptive navbar color: the navbar has no background of its own, so its
  // logo badge and text swap between dark (over light sections) and cream
  // (over dark sections like the maroon blocks, home hero, and footer) as
  // whichever section sits behind the fixed nav changes while scrolling.
  if(header && 'IntersectionObserver' in window){
    var darkBgEls = Array.prototype.slice.call(
      document.querySelectorAll('.home-hero, section.on-maroon, footer')
    );
    // On index.html the sticky hero stays "stuck" (and geometrically
    // intersecting) even after the light stack-section has visually
    // scrolled over it, so that overlay is tracked separately to correct
    // for it.
    var lightOverlayEl = document.querySelector('.stack-section');

    if(darkBgEls.length){
      // Best-guess default before the observer's first callback fires,
      // so the homepage (which opens on a dark hero) doesn't flash.
      if(document.body.classList.contains('home-page')){
        header.classList.add('on-dark');
      }

      var activeDark = new Set();
      var overlayCovering = false;
      var navColorObserver = null;

      function refreshNavColor(){
        header.classList.toggle('on-dark', activeDark.size > 0 && !overlayCovering);
      }

      function startNavColorObserver(){
        if(navColorObserver) navColorObserver.disconnect();
        activeDark.clear();
        overlayCovering = false;
        var navH = header.offsetHeight || 80;
        var lineY = Math.max(1, Math.round(navH / 2));
        var vh = window.innerHeight || document.documentElement.clientHeight;
        var bottomMargin = Math.min(0, -(vh - lineY - 4));
        navColorObserver = new IntersectionObserver(function(entries){
          entries.forEach(function(entry){
            if(entry.target === lightOverlayEl){
              overlayCovering = entry.isIntersecting;
            } else if(entry.isIntersecting){
              activeDark.add(entry.target);
            } else {
              activeDark.delete(entry.target);
            }
          });
          refreshNavColor();
        }, { rootMargin: (-lineY) + 'px 0px ' + bottomMargin + 'px 0px', threshold: 0 });
        darkBgEls.forEach(function(el){ navColorObserver.observe(el); });
        if(lightOverlayEl) navColorObserver.observe(lightOverlayEl);
      }

      startNavColorObserver();
      var navResizeTimer;
      window.addEventListener('resize', function(){
        clearTimeout(navResizeTimer);
        navResizeTimer = setTimeout(startNavColorObserver, 200);
      }, {passive:true});
    }
  }

  // Generic reveal-on-scroll for any [data-reveal] element
  var revealEls = document.querySelectorAll('[data-reveal]');
  if(revealEls.length && 'IntersectionObserver' in window){
    var revealObs = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('in');
          revealObs.unobserve(entry.target);
        }
      });
    }, {threshold:0.12});
    revealEls.forEach(function(el){ revealObs.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('in'); });
  }
})();
