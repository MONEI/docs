/* dynamic-copyright-year: Update copyright year dynamically on client-side */
module.exports = function (context, options) {
  return {
    name: 'dynamic-copyright-year',
    injectHtmlTags() {
      return {
        postBodyTags: [
          {
            tagName: 'script',
            innerHTML: `
              (function() {
                function updateCopyrightYear() {
                  const footer = document.querySelector('.footer__copyright');
                  if (footer) {
                    const currentYear = new Date().getFullYear();
                    const yearRegex = /Copyright © \\d{4}/;
                    footer.innerHTML = footer.innerHTML.replace(yearRegex, 'Copyright © ' + currentYear);
                  }
                }
                
                // Run immediately
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', updateCopyrightYear);
                } else {
                  updateCopyrightYear();
                }
                
                // Also run after React hydration
                setTimeout(updateCopyrightYear, 1000);
              })();
            `
          }
        ]
      };
    }
  };
};
