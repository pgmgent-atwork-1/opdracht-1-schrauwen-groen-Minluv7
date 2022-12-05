(() => {
  const app = {
    initialize() {
      console.log("1. Application started!");
      this.cacheElements();
      this.buildUI();
    },
    buildUI() {
      console.log("3. Build the user interface!");
      if (this.$referances != null) {
        this.$referances.innerHTML = this.generateHTMLForReferences();
      }
      if (this.$referan != null) {
        this.$referan.innerHTML = this.generateHTMLForOurReferan();
      }
    },

    cacheElements() {
      console.log("2. Cache all exisiting DOM elements!");
      this.$referances = document.getElementById("referances");
      this.$referan = document.getElementById("referan");
    },
    generateHTMLForReferences() {
      const references = REFERENCES.slice(0, 6);
      return references
        .map((references) => {
          return `
          <div class="reference-first">
          <img src="${references.image}" alt=""/>
          <p>${references.description}</p>
        </div>
        `;
        })
        .join("");
    },
    getTitle(type) {
      switch (type) {
        case "b2b":
          return "Zakelijke omgeving";
        case "private":
          return "Privé omgeving";
        case "public":
          return "Openbaar domein";
        default:
          return "";
      }
    },
    generateHTMLForOurReferan() {
      const types = ["private", "b2b", "public"];
      return types
        .map((type) => {
          const references = REFERENCES.filter((ref) => ref.type === type);
          return `
          <div>
          <h2 id="${type}"> ${this.getTitle(type)}</h2>
          ${references
            .map((ref) => {
              return `
              <img src="${ref.image}"/>
              <p>${ref.description}</p>`;
            })
            .join("")}
          </div>
          `;
        })
        .join("");
    },
  };
  app.initialize();
})();
