import { createContext, useContext, useState } from "react";

const PageNumberContext = createContext(0);
const UpdatePageNumberContext = createContext((page: number) => {});

const usePage = () => {
  const page = useContext(PageNumberContext);
  const setPage = useContext(UpdatePageNumberContext);

  const pageForward = () => {
    setPage(Math.min(page + 1, 8));
  };

  const pageBackward = () => {
    setPage(Math.max(0, page - 1));
  };

  return { page, pageForward, pageBackward };
};

const PageProvider = ({ children }: { children: React.ReactNode }) => {
  const [page, setPage] = useState(0);
  return (
    <UpdatePageNumberContext.Provider value={setPage}>
      <PageNumberContext.Provider value={page}>
        {children}
      </PageNumberContext.Provider>
    </UpdatePageNumberContext.Provider>
  );
};

export { usePage, PageProvider };
