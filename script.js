// Filtro del catálogo por categoría. No carga datos externos ni enlaces nuevos.
// Solo muestra u oculta tarjetas que ya están en la página.
document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".filter-btn");
  var cards = document.querySelectorAll(".card");
  var sections = document.querySelectorAll("[data-category-section]");

  function applyFilter(filter) {
    buttons.forEach(function (btn) {
      var isActive = btn.getAttribute("data-filter") === filter;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    cards.forEach(function (card) {
      var show = filter === "todos" || card.getAttribute("data-category") === filter;
      card.hidden = !show;
    });

    sections.forEach(function (section) {
      var key = section.getAttribute("data-category-section");
      var grid = document.querySelector('[data-category-grid="' + key + '"]');
      var visible = false;
      if (grid) {
        grid.querySelectorAll(".card").forEach(function (card) {
          if (!card.hidden) { visible = true; }
        });
      }
      section.hidden = !visible;
      if (grid) { grid.hidden = !visible; }
    });
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyFilter(btn.getAttribute("data-filter"));
    });
  });
});
