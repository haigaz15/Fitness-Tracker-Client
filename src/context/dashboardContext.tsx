import { createContext } from "react";

export const DashboardContext = createContext<Number | null>(null);

interface DashboardProvider {
  children: React.ReactNode;
  value: Number | null;
}
export const DashboardContextProvider: React.FC<DashboardProvider> = ({
  children,
  value,
}) => {
  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};
