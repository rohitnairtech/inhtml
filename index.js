"use strict";
const { readFileSync } = require('fs');

module.exports = (filename, options = {}) => {
  const file = readFileSync(filename, 'utf-8').replace(/\s{2,}/g, ' ');

  const { escapeHtml = false, partials = {} } = options;

  const escape = (str) => str.replace(/[&<>'"`]/g, (char) => {
    const escapeMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '`': '&#96;'
    };
    return escapeMap[char] || char;
  });

  const renderPartials = (html) => {
    return html.replace(/#{>\s*(\w+)\s*}/g, (_, key) => {
      if (partials[key]) {
        return renderPartials(partials[key]);
      }
      return `#{>${key}}`;
    });
  };

  return {
    render: (data) => {
      let html = renderPartials(file);
      
      return html.replace(/#{(\w+)}/g, (_, key) => {
        const value = data[key];
        if (value === undefined) return `#{${key}}`;
        return escapeHtml ? escape(String(value)) : String(value);
      });
    },
  };
};
