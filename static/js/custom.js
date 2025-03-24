function unescapeAuthContent() {
  const authDetailsSpans = document.querySelectorAll('.openapi-security__details pre span');
  console.log('Auth details spans found:', authDetailsSpans.length); // Debugging

  // Unescape HTML function
  const unescapeHtml = (html) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.textContent;
  };

  authDetailsSpans.forEach((authDetailsSpan) => {
    // Get and unescape the content
    const escapedContent = authDetailsSpan.innerHTML;
    const unescapedContent = unescapeHtml(escapedContent);

    // Create new container with proper HTML rendering
    const newContainer = document.createElement('div');
    newContainer.innerHTML = unescapedContent;

    // Replace the content
    authDetailsSpan.replaceWith(newContainer);
  });
}

// Run on page load and after navigation (for Docusaurus SPA)
function init() {
  unescapeAuthContent();

  // Set up MutationObserver to handle dynamic content
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        unescapeAuthContent();
      }
    }
  });

  // Observe the entire document for changes
  observer.observe(document.body, {childList: true, subtree: true});
}

document.addEventListener('DOMContentLoaded', init);
window.addEventListener('load', init);

console.log('Custom script loaded');
