/* =========================================================
   scholarships.js — scholarship records + card render (scholarships.html only)
   ========================================================= */
(function () {
  var SCHOLARSHIPS = [
    {
      id: "schol-secondary",
      cover: "cov-1",
      coverImage:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
      n: "01",
      title: "Secondary School Bursary",
      tag: "JSS1 – SS3",
      bullets: [
        "200+ students supported to date",
        "Priority to indigent students of Ukwa East / Ukwa West",
        "Most recent round: 200 students, alongside the June 2024 constituency office commissioning at Obehie",
      ],
      photos: [
        {
          url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
          caption: "Bursary award ceremony, Obehie",
        },
        {
          url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
          caption: "Beneficiaries with award letters",
        },
        {
          url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
          caption: "Group photo with scholars",
        },
      ],
      writeup: [
        "The Foundation's longest-running programme covers tuition and related costs for indigent secondary school students across Ukwa East and Ukwa West, from JSS1 through to SS3.",
        "Public reporting places the total number of secondary beneficiaries at over 200 since the scheme began in 2010, with a further round of 200 bursaries awarded in June 2024 to coincide with the commissioning of Rep. Nkwonta's constituency office in Obehie.",
      ],
      sources: [
        {
          label: "National Ambassador News — Foundation profile (2022)",
          url: "https://nationalambassadorngr.com/chief-chris-nkwontas-profile-agenda-unveiled/",
        },
        {
          label:
            "National Ambassador News — Bursary award & office commissioning (2024)",
          url: "https://nationalambassadorngr.com/tag/hon-chris-nkwonta/",
        },
      ],
    },
    {
      id: "schol-undergrad",
      cover: "cov-2",
      coverImage:
        "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=1200&q=80",
      n: "02",
      title: "Undergraduate Scholarship",
      tag: "Nigerian Universities",
      bullets: [
        "100+ students supported to date",
        "For undergraduates from Ukwa East / Ukwa West",
        "Earlier records cite a cohort of 25 tertiary beneficiaries across both LGAs",
      ],
      photos: [
        {
          url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80",
          caption: "Scholars on campus",
        },
        {
          url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80",
          caption: "Award / certificate presentation",
        },
        {
          url: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=1200&q=80",
          caption: "Group photo of beneficiaries",
        },
      ],
      writeup: [
        "This tier supports students from Ukwa East and Ukwa West who are enrolled in universities and other tertiary institutions within Nigeria.",
        "A 2022 campaign profile documents an early cohort of 25 beneficiaries trained across both local government areas; later profiles put the cumulative total at over 100 undergraduates supported since the scheme's launch.",
      ],
      sources: [
        {
          label: "National Ambassador News — Foundation profile (2022)",
          url: "https://nationalambassadorngr.com/chief-chris-nkwontas-profile-agenda-unveiled/",
        },
        {
          label: "Campaign Council profile — Ukwa Federal Constituency (2022)",
          url: "https://nationalambassador.com.ng/chris-nkwonta-campaign-council-unveils-ukwa-fed-constituency-pdp-candidates-profile/",
        },
      ],
    },
    {
      id: "schol-overseas",
      cover: "cov-3",
      coverImage:
        "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=1200&q=80",
      n: "03",
      title: "Overseas Study Sponsorship",
      tag: "Undergraduate & Postgraduate",
      bullets: [
        "5+ students sponsored abroad to date",
        "For exceptional, high-need candidates",
        "An early record cites 2 beneficiaries sponsored to the United Kingdom for postgraduate study",
      ],
      photos: [
        {
          url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
          caption: "Sponsored scholar send-off",
        },
        {
          url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
          caption: "Graduation abroad",
        },
        {
          url: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=1200&q=80",
          caption: "Travel / visa documentation",
        },
      ],
      writeup: [
        "The Foundation's most selective tier funds a small number of exceptional students to pursue undergraduate or postgraduate study outside Nigeria.",
        "A 2022 campaign profile records two beneficiaries sponsored to the United Kingdom for postgraduate studies; later foundation profiles put the cumulative figure at more than five students sponsored abroad since 2010.",
      ],
      sources: [
        {
          label: "National Ambassador News — Foundation profile (2022)",
          url: "https://nationalambassadorngr.com/chief-chris-nkwontas-profile-agenda-unveiled/",
        },
        {
          label: "Campaign Council profile — Ukwa Federal Constituency (2022)",
          url: "https://nationalambassador.com.ng/chris-nkwonta-campaign-council-unveils-ukwa-fed-constituency-pdp-candidates-profile/",
        },
      ],
    },
  ];

  window.SiteDetails = window.SiteDetails || {};
  SCHOLARSHIPS.forEach(function (s) {
    window.SiteDetails[s.id] = {
      tag: s.tag,
      title: s.title,
      photos: s.photos,
      writeup: s.writeup,
      sources: s.sources,
    };
  });

  // Combined entry: the three tiers share the same gallery and are close
  // enough in nature that one modal covering all of them (rather than
  // three separate "View Details" popups repeating similar images) reads
  // better on the page. Writeups are concatenated with a bold tier label
  // ahead of each tier's first paragraph; sources are merged and deduped
  // by URL since several tiers cite the same articles.
  var combinedPhotos = [];
  var combinedWriteup = [];
  var combinedSources = [];
  var seenSourceUrls = {};
  SCHOLARSHIPS.forEach(function (s) {
    combinedPhotos = combinedPhotos.concat(s.photos);
    s.writeup.forEach(function (p, i) {
      combinedWriteup.push(
        i === 0 ? "<strong>" + s.title + ".</strong> " + p : p,
      );
    });
    s.sources.forEach(function (src) {
      if (!seenSourceUrls[src.url]) {
        seenSourceUrls[src.url] = true;
        combinedSources.push(src);
      }
    });
  });
  window.SiteDetails["scholarships-all"] = {
    tag: "Three Tiers of Support",
    title: "Scholarship Programmes",
    photos: combinedPhotos,
    writeup: combinedWriteup,
    sources: combinedSources,
  };

  var grid = document.getElementById("scholGrid");
  if (grid) {
    var shown = combinedPhotos.slice(0, 5);
    var extra = combinedPhotos.length - shown.length;
    var thumbsHTML = shown
      .map(function (p, idx) {
        var url = (p && p.url) || "";
        var isLast = idx === shown.length - 1 && extra > 0;
        var cls = "schol-thumb" + (isLast ? " schol-thumb--more" : "");
        var moreAttr = isLast ? ' data-more="+' + extra + '"' : "";
        return (
          '<div class="' +
          cls +
          '" style="background-image:url(' +
          url +
          ')"' +
          moreAttr +
          "></div>"
        );
      })
      .join("");

    var tiersHTML = SCHOLARSHIPS.map(function (s) {
      return (
        '<div class="schol-tier">' +
        '<div class="schol-tier-head">' +
        '<span class="n">' +
        s.n +
        "</span>" +
        "<div>" +
        '<span class="eyebrow">' +
        s.tag +
        "</span>" +
        "<h4>" +
        s.title +
        "</h4>" +
        "</div>" +
        "</div>" +
        "<ul>" +
        s.bullets
          .map(function (b) {
            return "<li>" + b + "</li>";
          })
          .join("") +
        "</ul>" +
        "</div>"
      );
    }).join("");

    var el = document.createElement("div");
    el.className = "schol-card glass";
    el.setAttribute("data-reveal", "");
    el.innerHTML =
      '<div class="schol-info">' +
      '<span class="eyebrow">Invest in Potential</span>' +
      "<h3>Three Tiers of Educational Support</h3>" +
      '<div class="schol-tiers">' +
      tiersHTML +
      "</div>" +
      '<button class="btn-view" data-detail="scholarships-all">View Details</button>' +
      "</div>" +
      '<div class="schol-preview" data-detail="scholarships-all">' +
      thumbsHTML +
      "</div>";
    grid.appendChild(el);

    if ("IntersectionObserver" in window) {
      var obs = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 },
      );
      grid.querySelectorAll("[data-reveal]").forEach(function (el) {
        obs.observe(el);
      });
    } else {
      grid.querySelectorAll("[data-reveal]").forEach(function (el) {
        el.classList.add("in");
      });
    }
  }
})();
