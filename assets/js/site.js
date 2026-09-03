/* AFKOR - ortak header/footer enjeksiyonu + aktif menu + mobil menu */
(function () {
  async function inject(id, url) {
    var el = document.getElementById(id);
    if (!el) return;
    try {
      var res = await fetch(url);
      el.outerHTML = await res.text();
    } catch (e) {
      console.error("Partial yuklenemedi:", url, e);
    }
  }

  function enhance() {
    var active = document.body.getAttribute("data-active");
    if (active) {
      var li = document.querySelector('[data-nav="' + active + '"] > a.js-top');
      if (li) {
        li.classList.add("text-secondary-container", "font-bold");
        li.classList.remove("text-on-primary", "font-medium");
      }
    }
    var gfilters = document.querySelectorAll(".gallery-filter");
    if (gfilters.length) {
      var gitems = document.querySelectorAll(".masonry-item");
      var gempty = document.querySelector(".gallery-empty");
      var onCls = ["bg-secondary-container", "text-on-primary", "border-secondary-container"];
      var offCls = ["border-outline", "text-on-surface-variant"];
      gfilters.forEach(function (btn) {
        btn.addEventListener("click", function () {
          gfilters.forEach(function (b) { b.classList.remove.apply(b.classList, onCls); b.classList.add.apply(b.classList, offCls); });
          btn.classList.add.apply(btn.classList, onCls);
          btn.classList.remove.apply(btn.classList, offCls);
          var f = btn.getAttribute("data-filter");
          var shown = 0;
          gitems.forEach(function (it) {
            var ok = f === "all" || it.getAttribute("data-cat") === f;
            it.hidden = !ok;
            if (ok) shown++;
          });
          if (gempty) gempty.hidden = shown !== 0;
        });
      });
    }

    var t = document.getElementById("mobile-toggle");
    var m = document.getElementById("mobile-menu");
    if (t && m) {
      t.addEventListener("click", function () {
        var open = m.classList.toggle("is-open");
        t.setAttribute("aria-expanded", open ? "true" : "false");
      });
      m.addEventListener("click", function (e) {
        var tog = e.target.closest(".mm-toggle");
        if (tog) {
          var g = tog.parentElement;
          var wasOpen = g.classList.contains("open");
          m.querySelectorAll(".mm-group.open").forEach(function (x) { x.classList.remove("open"); });
          if (!wasOpen) g.classList.add("open");
          return;
        }
        if (e.target.closest("a")) m.classList.remove("is-open");
      });
    }
  }

  document.addEventListener("DOMContentLoaded", async function () {
    await inject("site-header", "/partials/header.html");
    await inject("site-footer", "/partials/footer.html");
    enhance();
  });
})();
