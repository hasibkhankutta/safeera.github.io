const areas = ["Dhanmondi", "Bashundhara"];
const urls = {
  "Dhanmondi": "https://www.safeera.co/#earrings",
  "Bashundhara": "https://www.safeera.co/#necklaces"
};

const searchBar = document.querySelector(".search-bar input");
const suggestions = document.querySelector(".suggestions");

searchBar.addEventListener("input", function() {
  const query = searchBar.value.toLowerCase();

  if (query.length === 0) {
    suggestions.style.display = "none";
    return;
  }

  suggestions.innerHTML = "";

  const matches = areas.filter(function(area) {
    return area.toLowerCase().startsWith(query);
  });

  if (matches.length === 0) {
    suggestions.innerHTML = "<button onclick=\"location.href='https://www.safeera.co/'\">Get 2-3 days delivery</button>";
  } else {
    matches.forEach(function(match) {
      const link = document.createElement("a");
      link.textContent = match;
      link.setAttribute("href", urls[match]);
      suggestions.appendChild(link);
    });
  }

  suggestions.style.display = "flex";
});

document.addEventListener("click", function(event) {
  if (!event.target.closest(".search-bar")) {
    suggestions.style.display = "none";
  }
});
