import React from "react";
import { Remarkable } from "remarkable";

const md = new Remarkable();

function MarkdownEditor({ markdown, setMarkdown, preview }) {
  return (
    <div className="editor-container">
      <div className="editor-section">
        <h2>Markdown Editor</h2>

        <textarea
          className="textarea"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Write your Markdown here..."
        />
      </div>

      <div className="preview-section">
        <h2>Live Preview</h2>

        <div
          className="preview"
          dangerouslySetInnerHTML={{
            __html: md.render(preview),
          }}
        />
      </div>
    </div>
  );
}

export default MarkdownEditor;
