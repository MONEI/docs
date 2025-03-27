/* docusaurus-plugin-openapi-docs: Fix rendering of auth details in endpoint pages. */
module.exports = function (context, options) {
  return {
    name: 'fix-auth-openapi',
    injectHtmlTags() {
      return {
        postBodyTags: [
          {
            tagName: 'script',
            innerHTML: `
                function unescapeAuthContent() {
                  const authDetailsSpans = document.querySelectorAll('.openapi-security__details pre span');
  
                  const unescapeHtml = (html) => {
                    const txt = document.createElement('textarea');
                    txt.innerHTML = html;
                    return txt.textContent;
                  };
  
                  authDetailsSpans.forEach(authDetailsSpan => {
                    const escapedContent = authDetailsSpan.innerHTML;
                    const unescapedContent = unescapeHtml(escapedContent);
  
                    const newContainer = document.createElement('div');
                    newContainer.innerHTML = unescapedContent;
  
                    authDetailsSpan.replaceWith(newContainer);
                  });
                }
  
                function init() {
                  unescapeAuthContent();
  
                  const observer = new MutationObserver((mutationsList) => {
                    for (const mutation of mutationsList) {
                      if (mutation.type === 'childList') {
                        unescapeAuthContent();
                      }
                    }
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
