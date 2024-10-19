import { createContext, FC, ReactElement, ReactNode } from "react";
import { RootStore, RootStoreModel } from "../mobx/RootStore";

export const StoreContext = createContext<RootStoreModel>({} as RootStoreModel);

export type StoreComponent = FC<{
  store: RootStore;
  children: ReactNode;
}>;

export const StoreProvider: StoreComponent = ({
  children,
  store,
}): ReactElement => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
