/* =========================================================
   modal.js — shared "View Details / View More" popup + lightbox
   Populated by projects.js and scholarships.js via
   window.SiteDetails[id] = { tag, title, photos, writeup, sources }

   The full-image lightbox (zoom / pan / prev-next) below always
   initialises, on every page that loads this file. Only the
   detail-popup wiring (openModal/closeModal, the #modalOverlay
   card) is gated on that overlay actually existing on the page —
   projects.html and scholarships.html have it; gallery.html does
   not and simply uses the lightbox on its own [data-full-image]
   tiles instead.
   ========================================================= */
window.SiteDetails = window.SiteDetails || {};

(function () {
  var photoSlotSvg =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="12" cy="12" r="3.5"/><path d="M8 5l1.5-2h5L16 5"/></svg>';

  function escapeAttr(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function photoSlotsHTML(photos) {
    return photos
      .map(function (photo, index) {
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
          '<button type="button" class="photo-card__image" data-full-image="' +
          escapeAttr(photo.url) +
          '" data-image-index="' +
          index +
          '" data-caption="' +
          escapeAttr(caption) +
          '" aria-label="Open image: ' +
          escapeAttr(caption) +
          '" style="background-image:url(\'' +
          escapeAttr(photo.url) +
          "');\"></button>" +
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

  // Any container that groups a set of [data-full-image] triggers is a
  // "gallery scope" the lightbox pages through together -- the detail
  // modal's own photo grid, and the standalone gallery.html grid.
  var GALLERY_SCOPE_SELECTOR = ".modal-gallery, .gallery-grid";

  document.addEventListener("DOMContentLoaded", function () {
    var overlay = document.getElementById("modalOverlay");

    // These only exist on pages that ship the #modalOverlay markup
    // (projects.html, scholarships.html).
    var modalTag, modalTitle, modalGallery, modalWriteup, modalSource, modalClose;
    if (overlay) {
      modalTag = document.getElementById("modalTag");
      modalTitle = document.getElementById("modalTitle");
      modalGallery = document.getElementById("modalGallery");
      modalWriteup = document.getElementById("modalWriteup");
      modalSource = document.getElementById("modalSource");
      modalClose = document.getElementById("modalClose");
    }

    /* ---------------- Full-image lightbox (always available) ---------------- */
    var viewerScale = 1;
    var viewerImages = [];
    var viewerIndex = 0;
    var imageViewer = document.createElement("div");
    imageViewer.className = "image-viewer";
    imageViewer.innerHTML =
      '<div class="image-viewer__panel" role="dialog" aria-modal="true" aria-label="Full image view">' +
      '<button type="button" class="image-viewer__close" aria-label="Close full image">&times;</button>' +
      '<button type="button" class="image-viewer__nav image-viewer__nav--prev" data-viewer-nav="prev" aria-label="Previous image">&lsaquo;</button>' +
      '<button type="button" class="image-viewer__nav image-viewer__nav--next" data-viewer-nav="next" aria-label="Next image">&rsaquo;</button>' +
      '<div class="image-viewer__canvas"><img alt="" /></div>' +
      '<div class="image-viewer__bar">' +
      '<span class="image-viewer__caption"></span>' +
      '<div class="image-viewer__controls">' +
      '<button type="button" data-zoom="out" aria-label="Zoom out">-</button>' +
      '<button type="button" data-zoom="reset" aria-label="Reset zoom">100%</button>' +
      '<button type="button" data-zoom="in" aria-label="Zoom in">+</button>' +
      "</div>" +
      "</div>" +
      "</div>";
    document.body.appendChild(imageViewer);
    var viewerImg = imageViewer.querySelector("img");
    var viewerCaption = imageViewer.querySelector(".image-viewer__caption");

    function galleryImages(scopeEl) {
      var scope = scopeEl || document;
      return Array.prototype.slice
        .call(scope.querySelectorAll("[data-full-image]"))
        .map(function (el) {
          return {
            src: el.getAttribute("data-full-image"),
            caption: el.getAttribute("data-caption") || "",
          };
        });
    }

    function paintViewerZoom() {
      viewerImg.style.transform = "scale(" + viewerScale + ")";
    }

    function showViewerImage(index) {
      if (!viewerImages.length) return;
      viewerScale = 1;
      viewerIndex = (index + viewerImages.length) % viewerImages.length;
      var image = viewerImages[viewerIndex];
      viewerImg.src = image.src;
      viewerImg.alt = image.caption || "Full image view";
      viewerCaption.textContent = image.caption || "";
      paintViewerZoom();
    }

    function openImageViewer(scopeEl, index) {
      viewerImages = galleryImages(scopeEl);
      showViewerImage(index);
      imageViewer.classList.add("open");
    }

    function closeImageViewer() {
      imageViewer.classList.remove("open");
      viewerImg.removeAttribute("src");
    }

    imageViewer.addEventListener("click", function (e) {
      if (
        e.target === imageViewer ||
        e.target.closest(".image-viewer__close")
      ) {
        closeImageViewer();
        return;
      }
      var zoom = e.target.closest("[data-zoom]");
      if (!zoom) return;
      var action = zoom.getAttribute("data-zoom");
      if (action === "in") viewerScale = Math.min(4, viewerScale + 0.25);
      if (action === "out") viewerScale = Math.max(0.5, viewerScale - 0.25);
      if (action === "reset") viewerScale = 1;
      paintViewerZoom();
    });

    imageViewer.addEventListener("click", function (e) {
      var nav = e.target.closest("[data-viewer-nav]");
      if (!nav) return;
      var direction = nav.getAttribute("data-viewer-nav") === "next" ? 1 : -1;
      showViewerImage(viewerIndex + direction);
    });

    imageViewer
      .querySelector(".image-viewer__canvas")
      .addEventListener("wheel", function (e) {
        e.preventDefault();
        viewerScale = Math.max(
          0.5,
          Math.min(4, viewerScale + (e.deltaY < 0 ? 0.15 : -0.15)),
        );
        paintViewerZoom();
      });

    /* ---------------- Detail popup (projects.html / scholarships.html only) ---------------- */
    function openModal(id) {
      if (!overlay) return;
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
      if (!overlay) return;
      overlay.classList.remove("open");
      document.body.style.overflow = "";
    }

    document.addEventListener("click", function (e) {
      var fullImage = e.target.closest("[data-full-image]");
      if (fullImage) {
        var scope = fullImage.closest(GALLERY_SCOPE_SELECTOR) || document;
        openImageViewer(
          scope,
          Number(fullImage.getAttribute("data-image-index")) || 0,
        );
        return;
      }
      var btn = e.target.closest("[data-detail]");
      if (btn) {
        openModal(btn.getAttribute("data-detail"));
      }
    });
    if (modalClose) modalClose.addEventListener("click", closeModal);
    if (overlay) {
      overlay.addEventListener("click", function (e) {
        if (e.target === overlay) closeModal();
      });
    }
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && imageViewer.classList.contains("open")) {
        closeImageViewer();
        return;
      }
      if (
        imageViewer.classList.contains("open") &&
        (e.key === "ArrowLeft" || e.key === "ArrowRight")
      ) {
        showViewerImage(viewerIndex + (e.key === "ArrowRight" ? 1 : -1));
        return;
      }
      if (e.key === "Escape") closeModal();
    });
  });
})();
