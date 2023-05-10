import "./stylesheets/Editor.css";
import React, { useState } from "react";

import EditorJS from "@editorjs/editorjs";
import EDITOR_JS_TOOLS from "@/app/config/editor";
import Undo from 'editorjs-undo';

import Output from 'editorjs-react-renderer';
import { createReactEditorJS } from 'react-editor-js'
const ReactEditorJS = createReactEditorJS()
const Editor = props => {
  const [imageArray, setImageArray] = useState([]);
  const [data, setData] = useState(props.data);
//   const editor = new EditorJS({
//     holder: "editorjs",
//     tools: EDITOR_JS_TOOLS(),
//     data: data,
//     onReady: () => {
//       console.log("Editor.js is ready to work!");
//       const config = {
//         shortcuts: {
//           undo: 'CMD+X',
//           redo: 'CMD+ALT+C'
//         }
//       }
//       new Undo({ editor, config });
//     },
//     // onChange: (api, event) => {
//     //   console.log("Now I know that Editor's content changed!", event);
//     //   console.log(api)
//     // },
//     // autofocus: true,
//     placeholder: "Let`s write an awesome story!",
//     logLevel: "ERROR", //https://editorjs.io/configuration/
//     // inlineToolbar: ["link", "marker", "bold", "italic"]
//   });
  const handleSave = async () => {
    editor
      .save()
      .then(outputData => {
        console.log("Article data: ", outputData);
        setData(outputData);
      })
      .catch(error => {
        console.log("Saving failed: ", error);
      });
    /*
    const data = {
      description: JSON.stringify(savedData)
    };

    console.log(savedData)
    // Clear all the unused images from server
    await clearEditorLeftoverImages();
    */
  };
  // This method will get the current images that are used by editor js,
  // and images that stored in imageArray. It will compare and call server request to
  // remove unused imges
  const clearEditorLeftoverImages = async () => {
    // Get editorJs images
    const currentImages = [];
    document
      .querySelectorAll(".image-tool__image-picture")
      .forEach(x => currentImages.push(x.src.includes("/images/") && x.src));

    if (imageArray.length > currentImages.length) {
      // image deleted
      for (const img of imageArray) {
        if (!currentImages.includes(img)) {
          try {
            // delete image from backend
            await API.deleteImage({ imagePath: img });
            // remove from array
            const array = imageArray.filter(image => image !== img);
            setImageArray(array);
          } catch (err) {
            console.log(err.message);
          }
        }
      }
    }
  };
  return (
    <div>
      <div id="editorjs"/>
      <ReactEditorJS defaultValue={data} tools={EDITOR_JS_TOOLS()}/>
      <button onClick={handleSave}>Save</button>
      {data && <Output data={ data } />}
    </div>
  );
};

export default Editor;
