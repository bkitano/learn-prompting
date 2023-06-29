import { usePage } from "../PageContext";
import { Introduction } from "./lessons/Introduction";
import { ProblemDescription } from "./lessons/ProblemDescription";

const Instructions = () => {
  const { page } = usePage();
  const LessonsMap: Record<number, JSX.Element> = {
    0: <Introduction />,
    1: <ProblemDescription />,
  };

  return (
    <div
      style={{
        width: "90%",
      }}
    >
      {LessonsMap[page]}
    </div>
  );
};

export { Instructions };
