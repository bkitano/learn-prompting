import { usePage } from "../PageContext";
import { Introduction } from "./lessons/Introduction";

const Instructions = () => {
  const { page } = usePage();
  const LessonsMap: Record<number, JSX.Element> = {
    0: <Introduction />,
  };

  return (
    <>
      <h1>Instructions</h1>
      <p>Page: {page + 1}</p>
      {LessonsMap[page]}
    </>
  );
};

export { Instructions };
