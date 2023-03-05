import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import BalloonEditor from '@ckeditor/ckeditor5-build-balloon';

const EditorCK = ({ value, onChange }) => {
  return (
    <div className="EditorCK">
      <CKEditor
        editor={ClassicEditor}
        data={value}
        onReady={(editor) => {
          editor.editing.view.change((writer) => {
            console.log(writer);
            writer.setStyle(
              "min-height",
              "150px",
              editor.editing.view.document.getRoot()
            );
          });
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange(data);
        }}
        onBlur={(event, editor) => {}}
        onFocus={(event, editor) => {}}
      />
    </div>
  );
};

export default EditorCK;
