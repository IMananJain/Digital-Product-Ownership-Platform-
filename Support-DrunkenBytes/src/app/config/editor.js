import CheckList from "@editorjs/checklist";
import CodeTool from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import Embed from "@editorjs/embed";
import Image from "@editorjs/image";
import InlineCode from "@editorjs/inline-code";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import Warning from "@editorjs/warning";
import Table from "@editorjs/table";
import Marker from "@editorjs/marker";
import Underline from "@editorjs/underline";
import RawTool from "@editorjs/raw";
import baseURL from "@/app/constants/baseURL";

const EDITOR_JS_TOOLS = {
  underline: Underline,
  Marker: {
    class: Marker,
    shortcut: "CMD+SHIFT+M"
  },
  table: {
    class: Table,
    inlineToolbar: true,
    config: {
      rows: 2,
      cols: 3,
      withHeadings: true
    }
  },
  raw: {
    class: RawTool,
    config: {
      placeholder: "Enter raw HTML code"
    }
  },
  warning: {
    class: Warning,
    inlineToolbar: true,
    shortcut: "CMD+SHIFT+W",
    config: {
      titlePlaceholder: "Title",
      messagePlaceholder: "Message"
    }
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
    config: {
      placeholder: "Enter a paragraph"
    }
  },
  header: {
    class: Header,
    inlineToolbar: true,
    shortcut: "CMD+SHIFT+H",
    config: {
      placeholder: "Enter a header",
      levels: [1, 2, 3, 4, 5, 6],
      defaultLevel: 2
    }
  },
  checklist: {
    class: CheckList,
    inlineToolbar: true
  },
  codeBox: {
    class: CodeTool,
    config: {
      placeholder: "Enter your code here"
    }
  },
  delimiter: Delimiter,
  embed: {
    class: Embed,
    inlineToolbar: true,
    config: {
      services: {
        youtube: true,
        facebook: true,
        instagram: true,
        twitter: true,
        twitch: true,
        miro: true,
        vimeo: true,
        imgur: true,
        codepen: true,
        pinterest: true,
        coub: true,
        drunkenbytes: {
          regex: /https?:\/\/drunkenbytes.com\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,
          embedUrl:
            "https://drunkenbytes.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2",
          html:
            "<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",
          height: 300,
          width: 600,
          id: groups => groups.join("/embed/")
        }
      }
    }
  },
  
  image: {
    class: Image,
    config: {
      field: 'image',
      uploader: {
        async uploadByFile(file) {
          const formData = new FormData();
          formData.append("image", file);
          const result = await fetch(`${baseURL}/image/upload-image?&folder=resources`,
          {
            method:"POST",
            body: formData,
            headers:{
              // "Content-Type": 'multipart/form-data'
            },
            credentials: "include"
          })
          const resultData = await result.json();
          return {
            "success": 1,
            "file": {
              "url": `${baseURL}${resultData.data.url}`
            }
          }
        }
      }
    }
  },
  inlineCode: {
    class: InlineCode,
    shortcut: "CMD+SHIFT+M"
  },
  list: {
    class: List,
    inlineToolbar: true,
    config: {
      defaultStyle: "ordered"
    }
  },
  quote: {
    class: Quote,
    inlineToolbar: true,
    shortcut: "CMD+SHIFT+O",
    config: {
      quotePlaceholder: "Enter a quote",
      captionPlaceholder: "Quote's author"
    }
  }
};
export default EDITOR_JS_TOOLS;
