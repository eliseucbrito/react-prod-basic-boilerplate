import { createContext, useContext, useState, ReactNode, useMemo } from "react";

interface TemplateContextProps {
  value: number;
  handleSetValue: (num: number) => void;
}

const TemplateContext = createContext<TemplateContextProps | undefined>(
  undefined
);

interface TemplateProviderProps {
  children: ReactNode;
}

export function TemplateContextProvider({ children }: TemplateProviderProps) {
  const [value, setValue] = useState<number>(0);

  function handleSetValue(num: number) {
    setValue(num);
  }

  const contextValue = useMemo<TemplateContextProps>(
    () => ({
      value,
      handleSetValue,
    }),

    [value]
  );

  return (
    <TemplateContext.Provider value={contextValue}>
      {children}
    </TemplateContext.Provider>
  );
}

export const useTemplategesContext = (): TemplateContextProps => {
  const context = useContext(TemplateContext);
  if (!context) {
    throw new Error("useTemplate must be used within a TemplateProvider");
  }
  return context;
};
