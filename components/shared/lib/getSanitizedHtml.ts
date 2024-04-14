import DOMPurify from "isomorphic-dompurify";

export const getSanitizedHtml = (html: string) => {
    DOMPurify.addHook("uponSanitizeElement", (node, data) => {
        if (data.tagName === "script") {
          node.replaceWith(node.outerHTML);
        }
      });
      const sanitizedHTML = DOMPurify.sanitize(html);
      return sanitizedHTML;
}