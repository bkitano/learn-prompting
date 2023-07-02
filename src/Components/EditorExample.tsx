import { Editor } from "./Editor";

const EditorExample = ({ children }: { children: string }) => {
  return (
    <Editor
      {...{
        initialValue: children.trim(),
        exampleView: true,
      }}
    />
  );
};

export { EditorExample };
