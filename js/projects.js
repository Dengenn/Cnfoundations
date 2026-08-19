/* =========================================================
   projects.js — project records + bullet list render (projects.html only)
   ========================================================= */
(function () {
  var PROJECTS = [
    {
      id: "proj-01",
      title: "Overseas Study Sponsorship",
      tag: "Education",
      summary:
        "Sponsored more than five undergraduate and postgraduate students to study abroad.",
      photos: [
        {
          url: "assets/img/facebook/education-05.jpg",
          caption: "Overseas sponsorship beneficiary record",
        },
        {
          url: "assets/img/facebook/education-04.jpg",
          caption: "Postgraduate scholarship beneficiaries",
        },
        {
          url: "assets/img/facebook/education-01.jpg",
          caption: "Education intervention beneficiary record",
        },
        {
          url: "assets/img/facebook/education-02.jpg",
          caption: "Education support documentation",
        },
        {
          url: "assets/img/facebook/education-03.jpg",
          caption: "Sponsorship payment record",
        },
      ],
      writeup: [
        "The Foundation has sponsored more than five Ukwa indigenes for undergraduate and postgraduate study abroad since 2010, including at least two beneficiaries sent to the United Kingdom for postgraduate studies.",
      ],
      sources: [
        {
          label: "National Ambassador News (2022)",
          url: "https://nationalambassadorngr.com/chief-chris-nkwontas-profile-agenda-unveiled/",
        },
      ],
    },
    {
      id: "proj-02",
      title: "University Scholarships",
      tag: "Education",
      summary:
        "Granted scholarships to over 100 undergraduates from Ukwa East and Ukwa West in Nigerian universities.",
      photos: [
        {
          url: "assets/img/facebook/education-04.jpg",
          caption: "Tertiary scholarship beneficiaries",
        },
        {
          url: "assets/img/facebook/education-05.jpg",
          caption: "Scholarship and manpower development record",
        },
        {
          url: "assets/img/facebook/education-01.jpg",
          caption: "Education intervention beneficiary record",
        },
        {
          url: "assets/img/facebook/education-02.jpg",
          caption: "Undergraduate scholarship documentation",
        },
        {
          url: "assets/img/facebook/education-03.jpg",
          caption: "Scholarship payment record",
        },
      ],
      writeup: [
        "Over 100 undergraduates from Ukwa East and Ukwa West have received university scholarships through the Foundation, with an early documented cohort of 25 beneficiaries trained across both LGAs.",
      ],
      sources: [
        {
          label: "National Ambassador News (2022)",
          url: "https://nationalambassadorngr.com/chief-chris-nkwontas-profile-agenda-unveiled/",
        },
      ],
    },
    {
      id: "proj-03",
      title: "Secondary School Scholarships",
      tag: "Education",
      summary:
        "Granted scholarships to over 200 secondary school students, JSS1 through SS3.",
      photos: [
        {
          url: "assets/img/facebook/education-01.jpg",
          caption: "Secondary school bursary beneficiaries list",
        },
        {
          url: "assets/img/facebook/education-02.jpg",
          caption: "Secondary school bursary documentation",
        },
        {
          url: "assets/img/facebook/education-03.jpg",
          caption: "Bursary payment record",
        },
        {
          url: "assets/img/facebook/education-04.jpg",
          caption: "Scholarship beneficiary record",
        },
        {
          url: "assets/img/facebook/education-05.jpg",
          caption: "Education intervention summary",
        },
      ],
      writeup: [
        "Over 200 secondary school students from JSS1 to SS3 have received Foundation scholarships, with 200 more awarded in June 2024 alongside the commissioning of the Obehie constituency office.",
      ],
      sources: [
        {
          label: "National Ambassador News (2022 & 2024)",
          url: "https://nationalambassadorngr.com/tag/hon-chris-nkwonta/",
        },
      ],
    },
    {
      id: "proj-04",
      title: "Skills Acquisition Training",
      tag: "Empowerment",
      summary:
        "Trained and equipped over 70 Ukwa youths with vocational skills for self-reliance.",
      photos: [
        {
          url: "assets/img/facebook/agriculture-01.jpg",
          caption: "Young farmers training group",
        },
        {
          url: "assets/img/facebook/projects-05.jpg",
          caption: "Empowerment intervention collage",
        },
        {
          url: "assets/img/facebook/projects-01.jpg",
          caption: "Empowerment materials and equipment",
        },
        {
          url: "assets/img/facebook/posts/122177103500101895-01.jpg",
          caption: "Special empowerment tour programme",
        },
      ],
      writeup: [
        "Over 70 youths from Ukwa East and Ukwa West have been trained and equipped in various competitive vocational skills. One documented round of the scheme trained 48 beneficiaries across both LGAs.",
      ],
      sources: [
        {
          label: "National Ambassador News (2022)",
          url: "https://nationalambassadorngr.com/chief-chris-nkwontas-profile-agenda-unveiled/",
        },
        {
          label: "Campaign Council profile (2022)",
          url: "https://nationalambassador.com.ng/chris-nkwonta-campaign-council-unveils-ukwa-fed-constituency-pdp-candidates-profile/",
        },
      ],
    },
    {
      id: "proj-05",
      title: "Community Electrification",
      tag: "Infrastructure",
      summary:
        "Provided electric transformers to communities to restore and improve power supply.",
      photos: [
        {
          url: "assets/img/facebook/projects-01.jpg",
          caption: "Infrastructure and equipment intervention collage",
        },
        {
          url: "assets/img/facebook/projects-05.jpg",
          caption: "Community development intervention collage",
        },
        {
          url: "assets/img/facebook/projects-04.jpg",
          caption: "Infrastructure project intervention",
        },
        {
          url: "assets/img/facebook/projects-02.jpg",
          caption: "Constituency intervention documentation",
        },
      ],
      writeup: [
        "The Foundation has donated electric transformers to communities in Ukwa East and Ukwa West to restore or improve local power supply.",
      ],
      sources: [
        {
          label: "National Ambassador News (2022)",
          url: "https://nationalambassadorngr.com/chief-chris-nkwontas-profile-agenda-unveiled/",
        },
      ],
    },
    {
      id: "proj-06",
      title: "Inter-School Quiz Competition",
      tag: "Education",
      summary:
        "Sponsored academic quiz competitions among secondary school students.",
      photos: [
        {
          url: "assets/img/facebook/education-01.jpg",
          caption: "Education intervention beneficiaries",
        },
        {
          url: "assets/img/facebook/education-03.jpg",
          caption: "Education support record",
        },
        {
          url: "assets/img/facebook/education-04.jpg",
          caption: "Education beneficiary record",
        },
        {
          url: "assets/img/facebook/education-05.jpg",
          caption: "Education intervention summary",
        },
      ],
      writeup: [
        "The Foundation sponsors academic quiz competitions among secondary school students in the constituency, encouraging academic excellence.",
      ],
      sources: [
        {
          label: "National Ambassador News (2022)",
          url: "https://nationalambassadorngr.com/chief-chris-nkwontas-profile-agenda-unveiled/",
        },
      ],
    },
    {
      id: "proj-07",
      title: "Church & Community Development",
      tag: "Community",
      summary:
        "Provided financial support to churches and communities for local development projects.",
      photos: [
        {
          url: "assets/img/facebook/projects-02.jpg",
          caption: "Community project handover collage",
        },
        {
          url: "assets/img/facebook/projects-03.jpg",
          caption: "Community support and beneficiary collage",
        },
        {
          url: "assets/img/facebook/projects-04.jpg",
          caption: "Community infrastructure support",
        },
        {
          url: "assets/img/facebook/projects-05.jpg",
          caption: "Community development intervention collage",
        },
      ],
      writeup: [
        "Financial support has been extended to churches and communities across Ukwa land for various development purposes.",
      ],
      sources: [
        {
          label: "National Ambassador News (2022)",
          url: "https://nationalambassadorngr.com/chief-chris-nkwontas-profile-agenda-unveiled/",
        },
      ],
    },
    {
      id: "proj-08",
      title: "Dream Land Football Academy — Portugal Tour",
      tag: "Youth & Sports",
      summary:
        "In 2011, sponsored seven players and a management representative for an overseas training tour to Portugal.",
      photos: [
        {
          url: "assets/img/facebook/projects-05.jpg",
          caption: "Youth and community intervention collage",
        },
        {
          url: "assets/img/facebook/projects-01.jpg",
          caption: "Youth support intervention collage",
        },
        {
          url: "assets/img/facebook/projects-02.jpg",
          caption: "Youth and leadership support documentation",
        },
        {
          url: "assets/img/facebook/projects-03.jpg",
          caption: "Youth beneficiary support collage",
        },
      ],
      writeup: [
        "In 2011, the Foundation sponsored seven players plus a management representative of the Dream Land Football Academy for an overseas training programme in Portugal.",
      ],
      sources: [
        {
          label: "Campaign Council profile (2022)",
          url: "https://nationalambassador.com.ng/chris-nkwonta-campaign-council-unveils-ukwa-fed-constituency-pdp-candidates-profile/",
        },
      ],
    },
    {
      id: "proj-09",
      title: "Free Medical Treatment",
      tag: "Healthcare",
      summary:
        "Offered free medical treatment, both locally and abroad, to many families in need.",
      photos: [
        {
          url: "assets/img/facebook/projects-03.jpg",
          caption: "Beneficiary support collage",
        },
        {
          url: "assets/img/facebook/projects-05.jpg",
          caption: "Human development intervention collage",
        },
        {
          url: "assets/img/facebook/projects-02.jpg",
          caption: "Humanitarian support documentation",
        },
        {
          url: "assets/img/facebook/projects-04.jpg",
          caption: "Constituency support intervention",
        },
      ],
      writeup: [
        "Free local and overseas medical treatment has been arranged for numerous financially incapacitated families and individuals across Abia State.",
      ],
      sources: [
        {
          label: "National Ambassador News (2022)",
          url: "https://nationalambassadorngr.com/chief-chris-nkwontas-profile-agenda-unveiled/",
        },
        {
          label: "Campaign Council profile (2022)",
          url: "https://nationalambassador.com.ng/chris-nkwonta-campaign-council-unveils-ukwa-fed-constituency-pdp-candidates-profile/",
        },
      ],
    },
    {
      id: "proj-10",
      title: "Obehie–Azumini Road Rehabilitation",
      tag: "Infrastructure",
      summary: "Rehabilitated failed portions of the Obehie to Azumini road.",
      photos: [
        {
          url: "assets/img/facebook/road-01.jpg",
          caption: "Ohanso - Obunku - Obohia road rehabilitation",
        },
        {
          url: "assets/img/facebook/projects-04.jpg",
          caption: "Constituency infrastructure intervention",
        },
        {
          url: "assets/img/facebook/posts/122130088094101895-01.jpg",
          caption: "Owaza oil and gas skill acquisition centre appeal",
        },
      ],
      writeup: [
        "Failed sections of the Obehie–Azumini road were rehabilitated with Foundation funding, improving local access.",
      ],
      sources: [
        {
          label: "National Ambassador News (2022)",
          url: "https://nationalambassadorngr.com/chief-chris-nkwontas-profile-agenda-unveiled/",
        },
      ],
    },
    {
      id: "proj-11",
      title: "School Band Sets",
      tag: "Education",
      summary:
        "Donated complete band instrument sets to primary schools in Ukwa East and Ukwa West.",
      photos: [
        {
          url: "assets/img/facebook/projects-01.jpg",
          caption: "School equipment support collage",
        },
        {
          url: "assets/img/facebook/projects-02.jpg",
          caption: "Education and community support collage",
        },
        {
          url: "assets/img/facebook/projects-05.jpg",
          caption: "School and community support intervention",
        },
      ],
      writeup: [
        "Complete sets of band instruments were donated to primary schools across Ukwa East and Ukwa West to support music and extracurricular education.",
      ],
      sources: [
        {
          label: "National Ambassador News (2022)",
          url: "https://nationalambassadorngr.com/chief-chris-nkwontas-profile-agenda-unveiled/",
        },
      ],
    },
    {
      id: "proj-12",
      title: "Disability Support & Rehabilitation",
      tag: "Empowerment",
      summary:
        "Supported the rehabilitation of physically challenged persons across Ukwa land.",
      photos: [
        {
          url: "assets/img/facebook/projects-03.jpg",
          caption: "Beneficiary support collage",
        },
        {
          url: "assets/img/facebook/projects-05.jpg",
          caption: "Rehabilitation and empowerment intervention collage",
        },
        {
          url: "assets/img/facebook/projects-02.jpg",
          caption: "Beneficiary assistance documentation",
        },
        {
          url: "assets/img/facebook/projects-04.jpg",
          caption: "Support intervention record",
        },
      ],
      writeup: [
        "The Foundation has supported rehabilitation for physically challenged persons across Ukwa communities as part of its empowerment mandate.",
      ],
      sources: [
        {
          label: "National Ambassador News (2022)",
          url: "https://nationalambassadorngr.com/chief-chris-nkwontas-profile-agenda-unveiled/",
        },
      ],
    },
    {
      id: "proj-13",
      title: "Annual Food & Essential Items Distribution",
      tag: "Community",
      summary:
        "Yearly distribution of food and essential items to less-privileged persons and widows in Ukwa East.",
      photos: [
        {
          url: "assets/img/facebook/projects-03.jpg",
          caption: "Community beneficiary support collage",
        },
        {
          url: "assets/img/facebook/projects-05.jpg",
          caption: "Community outreach intervention collage",
        },
        {
          url: "assets/img/facebook/projects-01.jpg",
          caption: "Community empowerment materials",
        },
        {
          url: "assets/img/facebook/projects-02.jpg",
          caption: "Community development documentation",
        },
      ],
      writeup: [
        "The Foundation runs a yearly distribution of food and other essential items to less-privileged residents and widows in Ukwa East LGA.",
      ],
      sources: [
        {
          label: "Campaign Council profile (2022)",
          url: "https://nationalambassador.com.ng/chris-nkwonta-campaign-council-unveils-ukwa-fed-constituency-pdp-candidates-profile/",
        },
      ],
    },
    {
      id: "proj-14",
      title: "Abia-Wide Youth Empowerment Programme",
      tag: "Empowerment",
      summary:
        "Trained and granted start-up funds to selected youths across all 17 LGAs of Abia State.",
      photos: [
        {
          url: "assets/img/facebook/agriculture-01.jpg",
          caption: "Training beneficiaries",
        },
        {
          url: "assets/img/facebook/projects-01.jpg",
          caption: "Empowerment equipment support collage",
        },
        {
          url: "assets/img/facebook/projects-05.jpg",
          caption: "Empowerment intervention collage",
        },
        {
          url: "assets/img/facebook/posts/122177103500101895-01.jpg",
          caption: "Ukwa East and West empowerment tour programme",
        },
      ],
      writeup: [
        "Beyond Ukwa land, the Foundation's board has run youth empowerment programmes reaching selected youths across all seventeen local government areas of Abia State, providing vocational training and start-up grants on completion.",
      ],
      sources: [
        {
          label: "Campaign Council profile (2022)",
          url: "https://nationalambassador.com.ng/chris-nkwonta-campaign-council-unveils-ukwa-fed-constituency-pdp-candidates-profile/",
        },
      ],
    },
    {
      id: "proj-15",
      title: "Constituency Office & 2024 Bursary Award",
      tag: "2024",
      summary:
        "Commissioned a constituency office at Obehie, Ukwa West LGA, and awarded bursaries to 200 students.",
      photos: [
        {
          url: "assets/img/facebook/projects-04.jpg",
          caption: "Constituency office and project intervention",
        },
        {
          url: "assets/img/facebook/education-01.jpg",
          caption: "Bursary award beneficiaries list",
        },
        {
          url: "assets/img/facebook/education-02.jpg",
          caption: "Bursary beneficiary documentation",
        },
        {
          url: "assets/img/facebook/education-03.jpg",
          caption: "Bursary payment record",
        },
      ],
      writeup: [
        "In June 2024, Rep. Nkwonta commissioned his constituency office in Obehie, Ukwa West LGA, and marked the occasion by awarding bursaries to 200 students.",
      ],
      sources: [
        {
          label: "National Ambassador News (2024)",
          url: "https://nationalambassadorngr.com/tag/hon-chris-nkwonta/",
        },
      ],
    },
  ];

  window.SiteDetails = window.SiteDetails || {};
  PROJECTS.forEach(function (p) {
    window.SiteDetails[p.id] = {
      tag: p.tag,
      title: p.title,
      photos: p.photos,
      writeup: p.writeup,
      sources: p.sources,
    };
  });

  var list = document.getElementById("projList");
  if (list) {
    PROJECTS.forEach(function (p, i) {
      var el = document.createElement("div");
      el.className = "proj-row glass";
      el.setAttribute("data-reveal", "");
      el.innerHTML =
        '<span class="bullet"></span>' +
        "<div><h4>" +
        p.title +
        "</h4><p>" +
        p.summary +
        "</p></div>" +
        '<div class="tag">' +
        p.tag +
        "</div>" +
        '<button class="btn-view" data-detail="' +
        p.id +
        '">View More</button>';
      list.appendChild(el);
    });

    // Newly injected [data-reveal] rows need their own observer pass
    // (main.js already ran its query before these existed).
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
      list.querySelectorAll("[data-reveal]").forEach(function (el) {
        obs.observe(el);
      });
    } else {
      list.querySelectorAll("[data-reveal]").forEach(function (el) {
        el.classList.add("in");
      });
    }
  }
})();
