/* =========================================================
   news.js — news records + "page turning" scroll reveal (news.html only)
   All items are paraphrased from public reporting; each links to its source.
   ========================================================= */
(function(){
  var NEWS = [
    {
      month:'MAY', day:'23', year:'2026',
      title:"Court Dismisses Suit Seeking Nkwonta's Removal",
      body:"A Federal High Court in Umuahia dismissed a case filed by the PDP that sought to have Rep. Nkwonta's seat declared vacant over his 2024 defection to the APC.",
      source:{label:'Daily Post Nigeria', url:'https://dailypost.ng/2026/05/23/court-dismisses-suit-seeking-abia-lawmakers-sack-from-national-assembly/'}
    },
    {
      month:'JUL', day:'—', year:'2026',
      title:"APC Leaders Reaffirm Nkwonta's 2027 Candidacy",
      body:"Party stakeholders in Ukwa West publicly rejected calls for his substitution, pointing to the outcome of the APC's May 16 primary election as valid and unchanged.",
      source:{label:'The Sun Nigeria', url:'https://thesun.ng/apc-leaders-affirm-nkwontas-candidacy-reject-substitution/'}
    },
    {
      month:'DEC', day:'29', year:'2024',
      title:'Empowerment Programme Draws Over 3,000 Defectors to the APC',
      body:"A large constituency empowerment event organised by Rep. Nkwonta in Akwete coincided with the defection of more than 3,000 members from other parties into the APC; Deputy Speaker Benjamin Kalu was conferred a chieftaincy title during the event.",
      source:{label:'Legit.ng', url:'https://www.legit.ng/politics/1633058-mass-defection-bolsters-apcs-strength-abia-state/'}
    },
    {
      month:'OCT', day:'02', year:'2024',
      title:'Defects From PDP to the APC',
      body:"Rep. Nkwonta's defection from the PDP to the APC was formally announced during a House plenary session. A procedural objection from the deputy minority leader was overruled by the Speaker, who cited an internal crisis within the PDP.",
      source:{label:'TheCable', url:'https://www.thecable.ng/just-in-chris-nkwonta-abia-rep-leaves-pdp-for-apc/'}
    },
    {
      month:'JUN', day:'—', year:'2024',
      title:'Commissions Constituency Office, Awards 200 Bursaries',
      body:"Rep. Nkwonta opened a constituency office in Obehie, Ukwa West LGA, marking the occasion with bursary awards to 200 students.",
      source:{label:'National Ambassador News', url:'https://nationalambassadorngr.com/tag/hon-chris-nkwonta/'}
    },
    {
      month:'JUN', day:'07', year:'2024',
      title:'Presents Petition Over Alleged Killing of Company Staff',
      body:"As Chairman of the House Committee on Climate Change, Rep. Nkwonta raised concerns over the alleged killing of a staff member of Inner Galaxy Company Ltd and presented a petition seeking redress.",
      source:{label:'National Ambassador News', url:'https://nationalambassadorngr.com/tag/hon-chris-nkwonta/'}
    },
    {
      month:'OCT', day:'01', year:'2023',
      title:'Independence Day Message: "Remain Positive, Optimistic"',
      body:"Marking Nigeria's 63rd independence anniversary, Rep. Nkwonta urged constituents to stay hopeful and resilient despite the country's economic and security challenges.",
      source:{label:'National Ambassador News', url:'https://nationalambassadorngr.com/nigeria-at-63-we-must-remain-positive-optimistic-rep-nkwonta/'}
    },
    {
      month:'SEP', day:'11', year:'2023',
      title:"Election Tribunal Upholds Nkwonta's Victory",
      body:"A tribunal affirmed the 2023 election wins of Rep. Nkwonta and fellow Abia lawmaker Onwusibe, dismissing challenges to the results.",
      source:{label:'Daily Post Nigeria', url:'https://dailypost.ng/2023/09/11/tribunals-uphold-nkwonta-onwusibes-elections-in-abia/'}
    },
    {
      month:'AUG', day:'26', year:'2023',
      title:'Felicitates PDP Chair Dr. Alwell Asiforo Okere at 59',
      body:"Rep. Nkwonta sent a birthday message to Rt. Hon. Dr. Alwell Asiforo Okere, then chairman of the PDP in Abia State.",
      source:{label:'National Ambassador News', url:'https://nationalambassadorngr.com/tag/hon-chris-nkwonta/'}
    },
    {
      month:'AUG', day:'08', year:'2023',
      title:'Meets Ukwa East Stakeholders on Electricity Restoration',
      body:"Rep. Nkwonta convened a meeting with stakeholders in Ukwa East LGA to address the restoration of local electricity supply.",
      source:{label:'National Ambassador News', url:'https://nationalambassadorngr.com/tag/hon-chris-nkwonta/'}
    },
    {
      month:'JUL', day:'17', year:'2023',
      title:"Urges President Tinubu to Release Nnamdi Kanu \"for Peace in the South East\"",
      body:"Rep. Nkwonta publicly called on President Bola Tinubu to release detained IPOB leader Nnamdi Kanu, framing the request as a step toward peace in the South East region.",
      source:{label:'The Guardian Nigeria', url:'https://guardian.ng/news/release-kanu-for-sake-of-peace-in-seast-abia-rep-urges-tinubu/'}
    }
  ];

  var list = document.getElementById('newsList');
  if(!list) return;

  NEWS.forEach(function(n){
    var el = document.createElement('article');
    el.className = 'news-card glass';
    el.innerHTML =
      '<div class="date">' + n.month + ' ' + n.day + '<b>' + n.year + '</b></div>' +
      '<div>' +
        '<h3>' + n.title + '</h3>' +
        '<p>' + n.body + '</p>' +
        '<a class="src" href="' + n.source.url + '" target="_blank" rel="noopener">Source: ' + n.source.label + '</a>' +
      '</div>';
    list.appendChild(el);
  });

  var cards = list.querySelectorAll('.news-card');
  if(window.innerWidth <= 600){
    cards.forEach(function(c){ c.classList.add('flip-in'); });
  } else if('IntersectionObserver' in window){
    var obs = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          var idx = Array.prototype.indexOf.call(cards, entry.target);
          entry.target._newsVisible = true;
          setTimeout(function(){
            if(entry.target._newsVisible) entry.target.classList.add('flip-in');
          }, (idx % 3) * 90);
        } else {
          entry.target._newsVisible = false;
          entry.target.classList.remove('flip-in');
        }
      });
    }, {threshold:0.16, rootMargin:'-8% 0px -8% 0px'});
    cards.forEach(function(c){ obs.observe(c); });
  } else {
    cards.forEach(function(c){ c.classList.add('flip-in'); });
  }
})();
