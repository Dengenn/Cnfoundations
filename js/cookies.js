/* =========================================================
   cookies.js — cookie consent banner + gated third-party embeds
   Loaded on every page (right after main.js).

   Only real cookies on this site are set by third-party embeds
   (currently: the Google Maps embed on contact.html). Nothing here
   is analytics or advertising -- there is none on this site. Consent
   is stored in localStorage, is never assumed from scrolling/inactivity,
   and no option is pre-selected, in line with the opt-in requirement
   under the NDPA General Application and Implementation Directive
   (GAID) 2025, Article 19.
   ========================================================= */
window.SCNFCookies = window.SCNFCookies || {};

(function () {
  var STORAGE_KEY = "scnf_cookie_consent";

  function getConsent() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function setConsent(status) {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ status: status, ts: Date.now() }),
      );
    } catch (e) {
      /* localStorage unavailable (private mode, etc.) -- the banner
         will simply be shown again next visit, which is the safe
         failure mode for an opt-in system. */
    }
  }

  function announce(status) {
    document.dispatchEvent(
      new CustomEvent("scnf-consent-change", { detail: { status: status } }),
    );
  }

  function buildBanner() {
    var banner = document.createElement("div");
    banner.className = "cookie-banner";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-live", "polite");
    banner.setAttribute("aria-label", "Cookie preferences");
    banner.innerHTML =
      '<div class="cookie-banner__body">' +
      "<p>We use a small number of cookies from embedded third-party " +
      "services, such as Google Maps, to power features on this site. " +
      "We don&rsquo;t run any analytics or advertising trackers of our " +
      'own. See our <a href="privacy.html">Privacy Policy</a> for ' +
      "details.</p>" +
      "</div>" +
      '<div class="cookie-banner__actions">' +
      '<button type="button" class="btn-view" id="cookieNecessary">Necessary Only</button>' +
      '<button type="button" class="btn btn-primary" id="cookieAcceptAll">Accept All</button>' +
      "</div>";
    return banner;
  }

  function hideBanner(banner) {
    banner.classList.remove("in");
    setTimeout(function () {
      if (banner.parentNode) banner.parentNode.removeChild(banner);
    }, 350);
  }

  function showBanner() {
    if (document.querySelector(".cookie-banner")) return;
    var banner = buildBanner();
    document.body.appendChild(banner);
    requestAnimationFrame(function () {
      banner.classList.add("in");
    });

    document
      .getElementById("cookieAcceptAll")
      .addEventListener("click", function () {
        setConsent("accepted");
        hideBanner(banner);
        announce("accepted");
      });
    document
      .getElementById("cookieNecessary")
      .addEventListener("click", function () {
        setConsent("necessary");
        hideBanner(banner);
        announce("necessary");
      });
  }

  // Public API: the Privacy Policy page's "Manage Cookie Preferences"
  // button reopens the banner via openPreferences(); contact.html's
  // map loader reads getConsent() / listens for scnf-consent-change.
  window.SCNFCookies.getConsent = getConsent;
  window.SCNFCookies.openPreferences = showBanner;

  document.addEventListener("DOMContentLoaded", function () {
    var existing = getConsent();
    if (!existing) {
      showBanner();
    } else {
      announce(existing.status);
    }
  });

  /* ---------------- Gated Google Maps embed (contact.html only) ----
     The element is absent on every other page, so this is a no-op
     everywhere else. The map loads automatically only once consent
     is "accepted"; otherwise it stays a click-to-load placeholder,
     and that click is itself specific, informed consent for just
     this one service. */
  function initMapEmbed() {
    var slot = document.getElementById("mapEmbed");
    if (!slot) return;

    var loaded = false;
    function loadMap() {
      if (loaded) return;
      loaded = true;
      var iframe = document.createElement("iframe");
      iframe.title = slot.getAttribute("data-map-title") || "Map";
      iframe.src = slot.getAttribute("data-map-src");
      iframe.width = "100%";
      iframe.height = "100%";
      iframe.style.border = "0";
      iframe.loading = "lazy";
      iframe.allowFullscreen = true;
      slot.innerHTML = "";
      slot.appendChild(iframe);
    }

    var loadBtn = document.getElementById("mapLoadBtn");
    if (loadBtn) loadBtn.addEventListener("click", loadMap);

    var existing = getConsent();
    if (existing && existing.status === "accepted") loadMap();

    document.addEventListener("scnf-consent-change", function (e) {
      if (e.detail && e.detail.status === "accepted") loadMap();
    });
  }

  document.addEventListener("DOMContentLoaded", initMapEmbed);
})();
