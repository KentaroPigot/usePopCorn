import { useEffect } from "react";

function useKey(key, action) {
  useEffect(() => {
    function callBack(e) {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    }

    document.addEventListener("keydown", callBack);

    return () => document.removeEventListener("keydown", callBack);
  }, [action, key]);
}

export default useKey;
