(() => {
  const app = {
    initialize() {
      console.log("1. Application started!");
      this.cacheElements();
      this.buildUI();
    },
    buildUI() {
      console.log("3. Build the user interface!");
      this.$services.innerHTML = this.generateHTMLForService();
    },

    cacheElements() {
      console.log("2. Cache all exisiting DOM elements!");
      this.$services = document.getElementById("services");
    },

    generateHTMLForService() {
      const type = this.$services.dataset.type;
      return services
        .filter((service) => service.type === type)
        .map((service) => {
          return `
          <ul class="services-block">
          <li>
          <img src="${service.image}" alt=""/>
          <h2>${service.title}</h2>
          <p>${service.description}</p>
          <div class="button-information">
          <a  href="#">${service.url}Meer informatie</a>
          </li>
          </ul>
          `;
        })
        .join("");
    },
  };
  app.initialize();
})();
