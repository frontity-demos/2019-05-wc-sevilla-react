const settings = {
  name: "wc-sevilla-2019",
  state: {
    frontity: {
      url: "https://test.frontity.io",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development"
    }
  },
  packages: [
    {
      name: "wc-sevilla-theme"
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://2019-developers.sevilla.wordcamp.org"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
