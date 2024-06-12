// components/VismeForm.js
import React from 'react';

const VismeForm = () => {
  const vismeEmbedCode = `
 <div class="visme_d" data-title="Untitled Project" data-url="01e90e0r-untitled-project?fullPage=true" data-domain="forms" data-full-page="false" data-min-height="50vh" data-form-id="75072"></div><script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script>
  `;

  return (
    <div
      dangerouslySetInnerHTML={{ __html: vismeEmbedCode }}
    />
  );
};

export default VismeForm;
