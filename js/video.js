/* Video erst nach Klick laden. Vorher geht keine Anfrage an YouTube.
   Ohne JavaScript bleibt der Knopf ein Link zu youtube.com. */
document.querySelectorAll("[data-video]").forEach(function (a) {
  a.addEventListener("click", function (e) {
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.button === 1) return;
    e.preventDefault();
    var f = document.createElement("iframe");
    f.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(a.dataset.video) +
      "?autoplay=1&rel=0&playsinline=1&cc_load_policy=0";
    f.title = a.dataset.titel;
    f.className = "video__rahmen";
    f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    f.allowFullscreen = true;
    f.referrerPolicy = "strict-origin-when-cross-origin";
    a.replaceWith(f);
    f.focus();
  });
});
