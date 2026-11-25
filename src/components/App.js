import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import MarkdownEditor from "./MarkdownEditor";
import "../styles/App.css";

function App() {
  const [markdown, setMarkdown] = useState("# Hello world");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    setPreview(markdown);
  }, [markdown]);

  return (
    <div className="app">
      <MarkdownEditor
        markdown={markdown}
        setMarkdown={setMarkdown}
        preview={preview}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
