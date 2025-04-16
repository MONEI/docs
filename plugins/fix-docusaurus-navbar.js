/* fix-docusaurus-navbar: Fix navbar dropdown active state highlighting 
    This is a workaround for the Docusaurus bug where dropdown base items don't support activeBasePath/activeBaseRegex
    See: https://github.com/facebook/docusaurus/issues/5954 */
module.exports = function (context, options) {
  return {
    name: 'fix-docusaurus-navbar',
    injectHtmlTags() {
      return {
        postBodyTags: [
          {
            tagName: 'script',
            innerHTML: `
              function handleNavbarDropdownActive() {
                const dropdowns = document.querySelectorAll('.dropdown__menu');
                
                dropdowns.forEach(dropdown => {
                  const hasActiveChild = dropdown.querySelector('.dropdown__link--active') !== null;
                  
                  const dropdownLink = dropdown.previousElementSibling;
                  
                  if (hasActiveChild && dropdownLink) {
                    dropdownLink.classList.add('navbar__link--active');
                  }
                  else {
                    dropdownLink.classList.remove('navbar__link--active');
                  }
                });
              }

              function init() {
                handleNavbarDropdownActive();

                const observer = new MutationObserver((mutations) => {
                  mutations.forEach((mutation) => {
                    if (mutation.type === 'childList') {
                      handleNavbarDropdownActive();
                    }
                  });
                });

                observer.observe(document.body, { childList: true, subtree: true });
              }

              document.addEventListener('DOMContentLoaded', init);
              window.addEventListener('load', init);
            `
          }
        ]
      };
    }
  };
};
