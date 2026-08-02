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
          url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
          caption: "Student departure / send-off",
        },
        {
          url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
          caption: "Certificate or graduation photo",
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
          url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
          caption: "Campus photo of scholars",
        },
        {
          url: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
          caption: "Scholarship award ceremony",
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
          url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
          caption: "Classroom / beneficiaries photo",
        },
        {
          url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
          caption: "Bursary cheque presentation",
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
          url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
          caption: "Vocational training session",
        },
        {
          url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
          caption: "Graduates with equipment/tools",
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
          url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
          caption: "Transformer installation site",
        },
        {
          url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
          caption: "Community power restoration",
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
          url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
          caption: "Quiz competition in progress",
        },
        {
          url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
          caption: "Winners with prizes",
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
          url: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=80",
          caption: "Community project handover",
        },
        {
          url: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
          caption: "Church/community facility",
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
          url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80",
          caption: "Team training session",
        },
        {
          url: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=1200&q=80",
          caption: "Squad departure photo",
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
          url: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
          caption: "Medical outreach / clinic",
        },
        {
          url: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1200&q=80",
          caption: "Patient support photo",
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
          url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
          caption: "Road before rehabilitation",
        },
        {
          url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
          caption: "Road after rehabilitation",
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
          url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
          caption: "School band performance",
        },
        {
          url: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1200&q=80",
          caption: "Instrument handover",
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
          url: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=1200&q=80",
          caption: "Support / rehabilitation session",
        },
        {
          url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
          caption: "Beneficiary photo",
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
          url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
          caption: "Distribution event",
        },
        {
          url: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1200&q=80",
          caption: "Beneficiaries with food items",
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
          url: "https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?auto=format&fit=crop&w=1200&q=80",
          caption: "Training session",
        },
        {
          url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
          caption: "Grant / equipment handover",
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
          url: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=1200&q=80",
          caption: "Office commissioning ceremony",
        },
        {
          url: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=1200&q=80",
          caption: "Bursary award event",
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
