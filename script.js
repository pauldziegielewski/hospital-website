document.addEventListener("DOMContentLoaded", function () {
    const selectedOption = document.querySelector(".selected-option");
    const options = document.querySelector(".options");
  
    selectedOption.addEventListener("click", function () {
      options.style.display = options.style.display === "block" ? "none" : "block";
    });
  
    options.addEventListener("click", function (event) {
      const target = event.target.closest(".option");
      if (target) {
        const value = target.getAttribute("data-value");
        const language = target.querySelector(".language").textContent;
        const flagSrc = target.querySelector(".flag").src;
  
        selectedOption.innerHTML = `
          <img class="flag" src="${flagSrc}" alt="Flag">
          <span class="language">${language}</span>
          <i class="arrow down"></i>
        `;
  
        options.style.display = "none";
      }
    });
  
    document.addEventListener("click", function (event) {
      if (!event.target.closest(".language-dropdown")) {
        options.style.display = "none";
      }
    });
  });
  