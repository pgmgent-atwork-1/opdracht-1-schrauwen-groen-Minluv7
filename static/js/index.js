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
      this.$referances.innerHTML = this.generateHTMLForRegerences();
      //this.$privé.innerHTML = this.generateHTMLForOurRegerences();
    },

    cacheElements() {
      console.log("2. Cache all exisiting DOM elements!");
      this.$services = document.getElementById("services");
      this.$referances = document.querySelector(".referances");
      //this.$privé = document.getElementById("privé");
    },

    generateHTMLForService() {
      const type = this.$services.dataset.type;
      return services
        .filter((service) => service.type === type)
        .map((service) => {
          return `
        <img src="${service.image}" alt=""/>
        <h2>${service.title}</h2>
        <p>${service.description}</p>
        <div class="button-information">
        <a  href="#">${service.url}Meer informatie</a>
        </div>
        `;
        })
        .join("");
    },

    generateHTMLForRegerences() {
      const references = REFERENCES.slice(0, 6);
      return references
        .map((references) => {
          return `
        <img src="${references.image}" alt=""/>
        <p>${references.description}</p>
        `;
        })
        .join("");
    },
    /* generateHTMLForOurRegerences() {
      return REFERENCES.map((referances) => {
        return `
        <h1> Privé<h1>
        <img src="${referances.image}" alt=""/>
        <p>${referances.description}</p>
        </div>
        `;
      }).join("");
    },*/
  };
  app.initialize();
})();
