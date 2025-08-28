import {marked} from 'marked';
import hljs from 'highlight.js/lib/core';
import php from 'highlight.js/lib/languages/php';
import elixir from 'highlight.js/lib/languages/elixir';
import typescript from 'highlight.js/lib/languages/typescript';
import json from 'highlight.js/lib/languages/json';
import xml from 'highlight.js/lib/languages/xml';
import javascript from 'highlight.js/lib/languages/javascript';

// Highlight.js by default includes all languages which
// makes the bundle way too large

interface ILanguage {
  lang: string;
  aliases: Array<string>;
};

const supportedLanguages: Array<ILanguage> = [
  {lang: 'php', aliases: ['php']},
  {lang: 'typescript', aliases: ['typescript', 'ts']},
  {lang: 'javascript', aliases: ['javascript', 'js']},
  {lang: 'json', aliases: ['json']},
  {lang: 'xml', aliases: ['xml']},
  {lang: 'elixir', aliases: ['elixir']},
];

hljs.registerLanguage('php', php);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('elixir', elixir);

// Configure marked.js v16 with custom renderer
marked.use({
  renderer: {
    link({href, title, text}) {
      // Security check for malicious links
      if (href) {
        let prot = '';
        try {
          prot = decodeURIComponent(unescape(href))
            .replace(/[^\w:]/g, '')
            .toString()
            .toLowerCase();
        } catch (_e) {
          return text;
        }

        if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
          return text;
        }
      }

      return `<a href="${href || ''}" target="_blank" rel="noopener noreferrer" title="${title || ''}">${text}</a>`;
    },

    image({href, title, text}) {
      return `<img style="max-width: 100%" src="${href}" alt="${text || ''}" title="${title || ''}" />`;
    },

    code({text, lang}) {
      // Check whether the given language is valid for highlight.js.
      const validLang = supportedLanguages
        .find(({aliases}) => aliases.indexOf(lang || '') !== -1);

      // Highlight only if the language is valid.
      const out = validLang ?
        hljs.highlight(text, {language: validLang.lang}).value : text;

      return `<pre><code style="overflow: auto; display: block; background-color: rgba(0,0,0,.05); padding: .3rem .5rem; border-radius: 3px">${out}</code></pre>`;
    }
  }
});
