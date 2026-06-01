/* 善果佛化禮儀．互動腳本 */
(function () {
  "use strict";

  // 行動選單開合
  window.toggleMenu = function () {
    var m = document.getElementById("mobileMenu");
    var b = document.getElementById("menuBtn");
    if (!m) return;
    m.classList.toggle("open");
    if (b) b.textContent = m.classList.contains("open") ? "✕" : "☰";
  };

  document.addEventListener("DOMContentLoaded", function () {
    // 導覽列捲動時加深玻璃感
    var header = document.getElementById("siteHeader");
    if (header) {
      var onScroll = function () {
        if (window.scrollY > 24) header.classList.add("scrolled");
        else header.classList.remove("scrolled");
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    // 捲動進場
    var reveals = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && reveals.length) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.14 });
      reveals.forEach(function (el) { io.observe(el); });
    } else {
      reveals.forEach(function (el) { el.classList.add("in"); });
    }

    // FAQ 手風琴：一次只開一個
    var faqGroups = {};
    document.querySelectorAll("details.qa").forEach(function (d) {
      var g = d.getAttribute("data-group") || "default";
      (faqGroups[g] = faqGroups[g] || []).push(d);
      d.addEventListener("toggle", function () {
        if (d.open) {
          faqGroups[g].forEach(function (o) { if (o !== d && o.open) o.open = false; });
        }
      });
    });

    // FAQ 分類切換（faq 頁）
    document.querySelectorAll("[data-faq-tab]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var cat = btn.getAttribute("data-faq-tab");
        document.querySelectorAll("[data-faq-tab]").forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        document.querySelectorAll("[data-faq-cat]").forEach(function (sec) {
          sec.style.display = (cat === "all" || sec.getAttribute("data-faq-cat") === cat) ? "" : "none";
        });
      });
    });

    // 報價試算機（pricing 頁）
    var calc = document.getElementById("calc");
    if (calc) {
      var planRadios = calc.querySelectorAll('input[name="plan"]');
      var feeChecks = calc.querySelectorAll('input[name="fee"]');
      var out = document.getElementById("calcTotal");
      var outA = document.getElementById("calcA");
      var outB = document.getElementById("calcB");
      var fmt = function (n) { return "NT$" + n.toLocaleString("zh-TW"); };
      var update = function () {
        var a = 0, b = 0;
        planRadios.forEach(function (r) { if (r.checked) a = parseInt(r.value, 10) || 0; });
        feeChecks.forEach(function (c) { if (c.checked) b += parseInt(c.value, 10) || 0; });
        if (outA) outA.textContent = fmt(a);
        if (outB) outB.textContent = fmt(b);
        if (out) out.textContent = fmt(a + b);
      };
      planRadios.forEach(function (r) { r.addEventListener("change", update); });
      feeChecks.forEach(function (c) { c.addEventListener("change", update); });
      update();
    }

    // 聯絡表單（前端示意）
    var form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var note = document.getElementById("formNote");
        if (note) { note.style.display = "block"; note.scrollIntoView({ behavior: "smooth", block: "center" }); }
        form.reset();
      });
    }

    // 西方三聖：點選佛像，願文從下方滑出
    document.querySelectorAll("[data-sage]").forEach(function (card) {
      card.addEventListener("click", function () {
        document.querySelectorAll("[data-sage].open").forEach(function (o) {
          if (o !== card) o.classList.remove("open");
        });
        card.classList.toggle("open");
      });
    });
  });
})();
