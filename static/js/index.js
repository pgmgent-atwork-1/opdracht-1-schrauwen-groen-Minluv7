(() => {
  const app = {
    initialize() {
      console.log("1. Application started!");
      this.cacheElements();
      this.buildUI();
      //  this.generateHTMLForAanleg();
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
      return services.map((service) => {
        return `
        <img scr="${service.image}" alt=""/>
        <h2>${service.title}</h2>
        <p>${service.description}</p>
        <a href="#">${service.url}Meer informatie</a>
        `;
      });
    },
    // generateHTMLForAanleg() {
    //   const filtered = services.filter((service) => {
    //    return service.type === service.type;
    //  });
    //  this.$services.innerHTML = this.generateHTMLForAanleg(filtered);
    // },
  };
  app.initialize();
})();
