import { Introduction } from "./lessons/Introduction";

const Instructions = (props: { page: number }) => {
  const LessonsMap: Record<number, JSX.Element> = {
    0: <Introduction />,
  };

  return (
    <>
      <h1>Instructions</h1>
      <p>Page: {props.page}</p>
      {LessonsMap[props.page]}
    </>
  );
};

export { Instructions };
