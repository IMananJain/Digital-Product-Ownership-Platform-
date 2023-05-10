import "./stylesheets/Editor.css";
import React from "react";
import EDITOR_JS_TOOLS from "@/app/config/editor";
import Undo from "editorjs-undo";
import DragDrop from "editorjs-drag-drop";
import { createReactEditorJS } from "react-editor-js";

const Editor = ({ data, editorCore }) => {
  const ReactEditorJS = createReactEditorJS();
  const handleInitialize = instance => {
    editorCore.current = instance;
  };
  const handleReady = () => {
    const editor = editorCore.current._editorJS;
    new Undo({ editor });
    new DragDrop(editor);
  };

  return (
    <ReactEditorJS
      onInitialize={handleInitialize}
      onReady={handleReady}
      defaultValue={data}
      tools={EDITOR_JS_TOOLS}
      placeholder="Let`s write an awesome story!"
    />
  );
};

export default Editor;
