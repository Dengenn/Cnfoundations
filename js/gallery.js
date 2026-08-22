/* =========================================================
   gallery.js — media gallery grid (gallery.html only)
   Bento-style grid with category filtering, a marquee filmstrip in
   the hero, a mouse-follow spotlight on tile hover, and a staggered
   scroll-reveal. Lightbox (zoom/pan/nav) is handled by js/modal.js,
   which this page also loads -- gallery.js only has to render tiles
   with the same [data-full-image] / [data-caption] contract that
   modal.js already knows how to open.
   ========================================================= */
(function () {
  var CATEGORY_LABELS = {
    projects: "Projects",
    scholarships: "Scholarships",
    events: "Events",
    infrastructure: "Infrastructure",
  };

  var GALLERY_ITEMS = [
    { url: "assets/img/facebook/posts/122216997410101895-01.jpg", caption: "Award ceremony gathering", category: "events" },
    { url: "assets/img/facebook/education-01.jpg", caption: "Secondary school bursary beneficiaries list", category: "scholarships" },
    { url: "assets/img/facebook/projects-01.jpg", caption: "Empowerment materials and equipment", category: "projects" },
    { url: "assets/img/facebook/posts/122093879390101895-01.jpg", caption: "Appreciation visit", category: "events" },
    { url: "assets/img/facebook/road-01.jpg", caption: "Ohanso \u2013 Obunku \u2013 Obohia road rehabilitation", category: "infrastructure" },
    { url: "assets/img/facebook/education-02.jpg", caption: "Undergraduate scholarship documentation", category: "scholarships" },
    { url: "assets/img/facebook/posts/122093312666101895-01.jpg", caption: "Public gathering", category: "events" },
    { url: "assets/img/facebook/projects-02.jpg", caption: "Community project handover collage", category: "projects" },
    { url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80", caption: "Bursary award ceremony, Obehie", category: "scholarships" },
    { url: "assets/img/facebook/posts/122180940326101895-01.jpg", caption: "Delegation meeting", category: "events" },
    { url: "assets/img/facebook/projects-04.jpg", caption: "Constituency office and project intervention", category: "infrastructure" },
    { url: "assets/img/facebook/education-03.jpg", caption: "Scholarship payment record", category: "scholarships" },
    { url: "assets/img/facebook/agriculture-01.jpg", caption: "Young farmers training group", category: "projects" },
    { url: "assets/img/facebook/posts/122177103500101895-01.jpg", caption: "Special empowerment tour programme", category: "events" },
    { url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80", caption: "Beneficiaries with award letters", category: "scholarships" },
    { url: "assets/img/facebook/projects-03.jpg", caption: "Beneficiary support collage", category: "projects" },
    { url: "assets/img/facebook/posts/122130088094101895-01.jpg", caption: "Owaza oil and gas skill acquisition centre appeal", category: "infrastructure" },
    { url: "assets/img/facebook/education-04.jpg", caption: "Tertiary scholarship beneficiaries", category: "scholarships" },
    { url: "assets/img/facebook/posts/122108081678101895-02.jpg", caption: "Constituency engagement", category: "events" },
    { url: "assets/img/facebook/projects-05.jpg", caption: "Community development intervention collage", category: "projects" },
    { url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80", caption: "Scholars on campus", category: "scholarships" },
    { url: "assets/img/facebook/posts/122187411494101895-01.jpg", caption: "Public engagement", category: "events" },
    { url: "assets/img/facebook/education-05.jpg", caption: "Overseas sponsorship beneficiary record", category: "scholarships" },
    { url: "assets/img/facebook/posts/122099902184101895-02.jpg", caption: "Community outreach", category: "events" },
  ];

  var reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Hero marquee filmstrip ---------------- */
  var marqueeTrack = document.getElementById("marqueeTrack");
  if (marqueeTrack) {
    var strip = GALLERY_ITEMS.slice(0, 10);
    var stripHTML = strip
      .map(function (item) {
        return (
          '<div class="gallery-marquee__item" style="background-image:url(\'' +
          item.url +
          "')\"></div>"
        );
      })
      .join("");
    // Doubled so the track can loop seamlessly at translateX(-50%).
    marqueeTrack.innerHTML = stripHTML + stripHTML;
  }

  /* ---------------- Grid render ---------------- */
  var grid = document.getElementById("galleryGrid");
  if (!grid) return;

  function sizeClass(i) {
    if (i % 7 === 0) return " gallery-tile--feature";
    if (i % 5 === 0) return " gallery-tile--tall";
    return "";
  }

  var tilesHTML = GALLERY_ITEMS.map(function (item, i) {
    var label = CATEGORY_LABELS[item.category] || item.category;
    return (
      '<figure class="gallery-tile' +
      sizeClass(i) +
      '" data-category="' +
      item.category +
      '" data-reveal-stagger>' +
      '<button type="button" class="gallery-tile__trigger" data-full-image="' +
      item.url +
      '" data-image-index="' +
      i +
      '" data-caption="' +
      item.caption.replace(/"/g, "&quot;") +
      '" aria-label="Open image: ' +
      item.caption.replace(/"/g, "&quot;") +
      '" style="background-image:url(\'' +
      item.url +
      "')\">" +
      '<span class="gallery-tile__glow" aria-hidden="true"></span>' +
      '<span class="gallery-tile__overlay" aria-hidden="true"></span>' +
      "</button>" +
      '<figcaption class="gallery-tile__meta">' +
      '<span class="gallery-tile__tag">' +
      label +
      "</span>" +
      '<span class="gallery-tile__caption">' +
      item.caption +
      "</span>" +
      "</figcaption>" +
      "</figure>"
    );
  }).join("");
  grid.innerHTML = tilesHTML;
  grid.setAttribute("data-gallery-scope", "");

  var tiles = Array.prototype.slice.call(
    grid.querySelectorAll(".gallery-tile"),
  );

  /* ---------------- Count + eyebrow ---------------- */
  var countEl = document.getElementById("galleryCount");
  function updateCount(filter) {
    if (!countEl) return;
    var n =
      filter === "all"
        ? GALLERY_ITEMS.length
        : GALLERY_ITEMS.filter(function (it) {
            return it.category === filter;
          }).length;
    var areaWord = filter === "all" ? "4 programme areas" : CATEGORY_LABELS[filter];
    countEl.textContent =
      n + (n === 1 ? " photograph" : " photographs") + " \u00b7 " + areaWord;
  }
  updateCount("all");

  /* ---------------- Staggered reveal on scroll ---------------- */
  if ("IntersectionObserver" in window) {
    var revealObs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry, batchIndex) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          var i = tiles.indexOf(el);
          var delay = reduceMotion ? 0 : (i % 12) * 45;
          el.style.transitionDelay = delay + "ms";
          el.classList.add("gallery-tile--visible");
          revealObs.unobserve(el);
        });
      },
      { threshold: 0.12 },
    );
    tiles.forEach(function (el) {
      revealObs.observe(el);
    });
  } else {
    tiles.forEach(function (el) {
      el.classList.add("gallery-tile--visible");
    });
  }

  /* ---------------- Spotlight hover (mouse-follow glow) ---------------- */
  if (!reduceMotion && window.matchMedia && window.matchMedia("(hover: hover)").matches) {
    var rafPending = false;
    var lastEvent = null;
    grid.addEventListener("pointermove", function (e) {
      lastEvent = e;
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(function () {
        rafPending = false;
        if (!lastEvent) return;
        var tile = lastEvent.target.closest(".gallery-tile");
        if (!tile) return;
        var rect = tile.getBoundingClientRect();
        var x = ((lastEvent.clientX - rect.left) / rect.width) * 100;
        var y = ((lastEvent.clientY - rect.top) / rect.height) * 100;
        tile.style.setProperty("--mx", x + "%");
        tile.style.setProperty("--my", y + "%");
      });
    });
  }

  /* ---------------- Filter pills ---------------- */
  var filterBar = document.getElementById("galleryFilters");
  var highlight = document.getElementById("filterHighlight");
  var pills = filterBar
    ? Array.prototype.slice.call(filterBar.querySelectorAll(".filter-pill"))
    : [];

  function moveHighlight(pill) {
    if (!highlight || !pill) return;
    highlight.style.width = pill.offsetWidth + "px";
    highlight.style.transform = "translateX(" + pill.offsetLeft + "px)";
  }

  function applyFilter(filter) {
    tiles.forEach(function (tile) {
      var match = filter === "all" || tile.getAttribute("data-category") === filter;
      if (match) {
        tile.hidden = false;
        // Next frame so the browser registers the un-hidden state
        // before the visible class kicks off the transition in.
        requestAnimationFrame(function () {
          tile.classList.remove("gallery-tile--hidden");
        });
      } else {
        tile.classList.add("gallery-tile--hidden");
        var onEnd = function (e) {
          if (e.propertyName !== "opacity") return;
          if (tile.classList.contains("gallery-tile--hidden")) tile.hidden = true;
          tile.removeEventListener("transitionend", onEnd);
        };
        if (reduceMotion) {
          tile.hidden = true;
        } else {
          tile.addEventListener("transitionend", onEnd);
        }
      }
    });
    updateCount(filter);
  }

  pills.forEach(function (pill) {
    pill.addEventListener("click", function () {
      pills.forEach(function (p) {
        p.classList.remove("active");
      });
      pill.classList.add("active");
      moveHighlight(pill);
      applyFilter(pill.getAttribute("data-filter"));
    });
  });

  var activePill = filterBar ? filterBar.querySelector(".filter-pill.active") : null;
  if (activePill) {
    // Position after layout has settled (fonts/webfont swap can shift widths).
    requestAnimationFrame(function () {
      moveHighlight(activePill);
    });
    window.addEventListener(
      "resize",
      function () {
        var current = filterBar.querySelector(".filter-pill.active");
        moveHighlight(current);
      },
      { passive: true },
    );
  }
})();
