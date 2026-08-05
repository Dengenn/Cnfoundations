/* =========================================================
   home.js — hero slider + overlapping page-stack (index.html only)
   ========================================================= */
(function () {
  /* ---------------- Hero media slider ----------------
     Each slide can be:
       { type:'image', src:'assets/img/hero-1.jpg', grad:'linear-gradient(...)', caption:'...' }
       { type:'video', src:'assets/video/hero-1.mp4', caption:'...' }
     Until real files are added, the gradient shows through as an elegant fallback —
     no broken-image icons. Just drop files into assets/img or assets/video and
     point the `src` at them; nothing else needs to change.
  --------------------------------------------------------- */
  var SLIDES = [
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1600&q=80",
      grad: "linear-gradient(135deg,#7A1B2B,#360C13)",
      caption: "Photo: scholarship award ceremony",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=1600&q=80",
      grad: "linear-gradient(135deg,#AE3E4E,#7A1B2B)",
      caption: "Photo: constituency office, Obehie",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
      grad: "linear-gradient(135deg,#C9A227,#7A1B2B)",
      caption: "Photo: community empowerment event",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?auto=format&fit=crop&w=1600&q=80",
      grad: "linear-gradient(135deg,#360C13,#AE3E4E)",
      caption: "Photo: skills training beneficiaries",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80",
      grad: "linear-gradient(135deg,#7A1B2B,#C9A227)",
      caption: "Photo: Ukwa community outreach",
    },
  ];

  var stage = document.getElementById("slideStage");
  var dotsWrap = document.getElementById("slideDots");
  if (stage) {
    var current = 0;
    var els = [];

    SLIDES.forEach(function (s, i) {
      var el = document.createElement("div");
      el.className = "slide" + (i === 0 ? " active" : "");
      el.style.setProperty("--slide-grad", s.grad);

      if (s.type === "video") {
        var video = document.createElement("video");
        video.src = s.src;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.preload = "none";
        var gradDiv = document.createElement("div");
        gradDiv.className = "grad";
        el.appendChild(gradDiv);
        el.appendChild(video);
        el._video = video;
      } else {
        el.style.backgroundImage = 'url("' + s.src + '")';
        el.style.backgroundRepeat = "no-repeat";
        el.style.backgroundPosition = "center";
        el.style.backgroundSize = "cover";
        var gradDiv2 = document.createElement("div");
        gradDiv2.className = "grad";
        el.appendChild(gradDiv2);
      }
      var tag = document.createElement("div");
      tag.className = "caption-tag";
      tag.textContent = s.caption;
      el.appendChild(tag);

      stage.appendChild(el);
      els.push(el);
    });

    var dots = [];
    if (dotsWrap) {
      SLIDES.forEach(function (_, i) {
        var b = document.createElement("button");
        if (i === 0) b.classList.add("active");
        b.setAttribute("aria-label", "Show slide " + (i + 1));
        b.addEventListener("click", function () {
          goTo(i);
          resetTimer();
        });
        dotsWrap.appendChild(b);
        dots.push(b);
      });
    }

    function goTo(i) {
      els[current].classList.remove("active");
      if (els[current]._video) els[current]._video.pause();
      if (dots[current]) dots[current].classList.remove("active");

      current = i;
      els[current].classList.add("active");
      if (els[current]._video) {
        var p = els[current]._video.play();
        if (p && p.catch) p.catch(function () {});
      }
      if (dots[current]) dots[current].classList.add("active");
    }

    var reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var timer;
    function resetTimer() {
      clearInterval(timer);
      if (reduceMotion) return;
      timer = setInterval(function () {
        goTo((current + 1) % SLIDES.length);
      }, 7000);
    }
    resetTimer();
  }

  /* ---------------- Overlapping page-stack reveal + controls ---------------- */
  var deck = document.getElementById("stackDeck");
  var stackCards = deck
    ? Array.prototype.slice.call(deck.querySelectorAll(".stack-card"))
    : [];
  var stackPrev = document.getElementById("stackPrev");
  var stackNext = document.getElementById("stackNext");
  var activeCard = 0;

  function getStackLayout() {
    var w = window.innerWidth || document.documentElement.clientWidth;
    if (w <= 520) return { x: 7, y: 6 };
    if (w <= 900) return { x: 18, y: 13 };
    return { x: 26, y: 16 };
  }

  function paintStack() {
    if (!stackCards.length) return;
    var layout = getStackLayout();
    var rotations = [-2, 2, -3, 3, -2, 2, -1];
    // Cap how many layers deep the fan-out offset keeps growing so the
    // deck reads as a compact, centered stack instead of trailing off
    // toward one edge once there are several cards behind the front one.
    var maxDepth = 3;
    stackCards.forEach(function (card, i) {
      var slot = (i - activeCard + stackCards.length) % stackCards.length;
      var depth = Math.min(slot, maxDepth);
      card.style.setProperty("--stack-x", layout.x * depth + "px");
      card.style.setProperty("--stack-y", layout.y * depth + "px");
      card.style.setProperty("--stack-r", rotations[depth] + "deg");
      card.style.setProperty("--stack-z", String(stackCards.length - slot));
      card.classList.toggle("is-front", slot === 0);
      card.setAttribute("tabindex", slot === 0 ? "0" : "-1");
      card.setAttribute("aria-hidden", slot === 0 ? "false" : "true");
    });
  }

  function moveStack(delta) {
    if (!stackCards.length) return;
    activeCard = (activeCard + delta + stackCards.length) % stackCards.length;
    paintStack();
  }

  paintStack();

  if (stackPrev)
    stackPrev.addEventListener("click", function () {
      moveStack(-1);
    });
  if (stackNext)
    stackNext.addEventListener("click", function () {
      moveStack(1);
    });
  window.addEventListener("resize", paintStack, { passive: true });

  if (deck && "IntersectionObserver" in window) {
    var obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            deck.classList.add("in");
            obs.unobserve(deck);
          }
        });
      },
      { threshold: 0.25 },
    );
    obs.observe(deck);
  } else if (deck) {
    deck.classList.add("in");
  }
})();
