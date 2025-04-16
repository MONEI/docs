module.exports = function (context, options) {
  return {
    name: 'inject-scripts',
    injectHtmlTags() {
      return {
        postBodyTags: [
          {
            tagName: 'script',
            attributes: {
              charset: 'utf-8',
              src: 'https://www.paypal.com/sdk/js?client-id=AWwEBV9pk8T-aQzjX0MZQccNrO85mWDKEgMyfLaFyT-b8P-TLOdTcGBaR98ZYYxyUCQlFa-MaqX6v9kQ'
            }
          }
        ]
      };
    }
  };
};
