/* =========================================================
   modal.js — shared "View Details / View More" popup
   Populated by projects.js and scholarships.js via
   window.SiteDetails[id] = { tag, title, photos, writeup, sources }
   ========================================================= */
window.SiteDetails = window.SiteDetails || {};

(function () {
  var photoSlotSvg =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="12" cy="12" r="3.5"/><path d="M8 5l1.5-2h5L16 5"/></svg>';

  function photoSlotsHTML(photos) {
    return photos
      .map(function (photo) {
        var caption =
          typeof photo === "string"
            ? photo
            : photo && photo.caption
              ? photo.caption
              : "Image coming soon.";
        if (!photo || typeof photo === "string" || !photo.url) {
          return (
            '<div class="photo-card photo-card--placeholder">' +
            '<div class="photo-card__placeholder">' +
            photoSlotSvg +
            "<span>Photo needed</span>" +
            "</div>" +
            '<div class="photo-card__caption">' +
            caption +
            "</div>" +
            "</div>"
          );
        }
        return (
          '<div class="photo-card">' +
          '<div class="photo-card__image" style="background-image:url(' +
          photo.url +
          ');"></div>' +
          '<div class="photo-card__caption">' +
          caption +
          "</div>" +
          "</div>"
        );
      })
      .join("");
  }
  function sourcesHTML(sources) {
    return sources
      .map(function (s) {
        return (
          '<span>Source: <a href="' +
          s.url +
          '" target="_blank" rel="noopener">' +
          s.label +
          "</a></span>"
        );
      })
      .join("");
  }

  document.addEventListener("DOMContentLoaded", function () {
    var overlay = document.getElementById("modalOverlay");
    if (!overlay) return; // page has no modal (e.g. news, about)

    var modalTag = document.getElementById("modalTag");
    var modalTitle = document.getElementById("modalTitle");
    var modalGallery = document.getElementById("modalGallery");
    var modalWriteup = document.getElementById("modalWriteup");
    var modalSource = document.getElementById("modalSource");
    var modalClose = document.getElementById("modalClose");

    function openModal(id) {
      var d = window.SiteDetails[id];
      if (!d) return;
      modalTag.textContent = d.tag;
      modalTitle.textContent = d.title;
      modalGallery.innerHTML = photoSlotsHTML(d.photos);
      modalWriteup.innerHTML = d.writeup
        .map(function (p) {
          return "<p>" + p + "</p>";
        })
        .join("");
      modalSource.innerHTML = sourcesHTML(d.sources);
      overlay.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    function closeModal() {
      overlay.classList.remove("open");
      document.body.style.overflow = "";
    }

    document.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-detail]");
      if (btn) {
        openModal(btn.getAttribute("data-detail"));
      }
    });
    if (modalClose) modalClose.addEventListener("click", closeModal);
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeModal();
    });
  });
})();
