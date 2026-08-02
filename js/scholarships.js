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

  var grid = document.getElementById("scholGrid");
  if (grid) {
    SCHOLARSHIPS.forEach(function (s) {
      var coverStyle = s.coverImage
        ? ' style="background-image:url(' +
          s.coverImage +
          '); background-size:cover; background-position:center;"'
        : "";
      var el = document.createElement("div");
      el.className = "schol-card glass";
      el.setAttribute("data-reveal", "");
      el.innerHTML =
        '<div class="schol-cover ' +
        s.cover +
        '"' +
        coverStyle +
        '><div class="n">' +
        s.n +
        "</div><h3>" +
        s.title +
        "</h3></div>" +
        '<div class="schol-body">' +
        "<ul>" +
        s.bullets
          .map(function (b) {
            return "<li>" + b + "</li>";
          })
          .join("") +
        "</ul>" +
        '<button class="btn-view" data-detail="' +
        s.id +
        '">View Details</button>' +
        "</div>";
      grid.appendChild(el);
    });

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
