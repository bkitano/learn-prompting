import { useState, useEffect } from "react";

const useSessionStorage = (name: string) => {
  const [storedValue, setSessionValue] = useState<string | null>(null);

  useEffect(() => {
    setSessionValue(sessionStorage.getItem(name));
  }, []);

  const storeSessionValue = (value: string | null | undefined) => {
    if (value) {
      sessionStorage.setItem(name, value);
      setSessionValue(value);
    }
  };

  return { storedValue, storeSessionValue };
};

export default useSessionStorage;
