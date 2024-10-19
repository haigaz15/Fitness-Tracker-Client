import { useContext } from "react";
import { RootStore } from "../mobx/RootStore";
import { StoreContext } from "../context/mobxContext";

export const useStore = (): RootStore => useContext(StoreContext);
