import { usePage } from "../PageContext";
import { Introduction } from "./lessons/Introduction";

const Instructions = () => {
  const { page } = usePage();
  const LessonsMap: Record<number, JSX.Element> = {
    0: <Introduction />,
  };

  return <div style={{
    width: "90%",
  }}>{LessonsMap[page]}</div>;
};

export { Instructions };
