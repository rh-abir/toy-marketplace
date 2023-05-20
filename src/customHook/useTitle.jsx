import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Toys-Houes | ${title}`;
  }, [title]);
};

export default useTitle;
