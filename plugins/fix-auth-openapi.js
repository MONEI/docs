/* docusaurus-plugin-openapi-docs: Fix rendering of auth details in endpoint pages using markdown. */
module.exports = function (context, options) {
    return {
        name: 'fix-auth-openapi',
        injectHtmlTags() {
            return {
                postBodyTags: [
                    {
                        tagName: 'script',
                        attributes: {
                            src: 'https://cdn.jsdelivr.net/npm/marked/marked.min.js',
                            defer: true,
                        },
                    },
                    {
                        tagName: 'script',
                        innerHTML: `
                            function renderMarkdownInAuthDetails() {
                                const detailsSections = document.querySelectorAll('.openapi-security__details pre');

                                detailsSections.forEach((preElement) => {
                                    const descriptionSpans = preElement.querySelectorAll('span');

                                    descriptionSpans.forEach((descriptionDiv) => {
                                        if (descriptionDiv.innerHTML.includes('description:')) {
                                            const descriptionText = descriptionDiv.innerHTML.split('description:')[1].trim();

                                            const htmlContent = window.marked ? window.marked.parse(descriptionText) : descriptionText;

                                            const newContainer = document.createElement('div');
                                            newContainer.innerHTML = htmlContent;
                                            descriptionDiv.innerHTML = '<b>description:</b> ' + newContainer.innerHTML;
                                        }
                                    });
                                });
                            }

                            function initRender() {
                                if (window.marked) {
                                    renderMarkdownInAuthDetails();
                                } else {
                                    setTimeout(initRender, 100);
                                }

                                const observer = new MutationObserver((mutations) => {
                                    mutations.forEach((mutation) => {
                                        if (mutation.type === 'childList' && mutation.target.querySelector('.openapi-security__details')) {
                                            renderMarkdownInAuthDetails();
                                        }
                                    });
                                });

                                observer.observe(document.body, { childList: true, subtree: true });
                            }

                            window.addEventListener('load', initRender);
                            document.addEventListener('DOMContentLoaded', initRender);
                        `,
                    },
                ],
            };
        },
    };
};
