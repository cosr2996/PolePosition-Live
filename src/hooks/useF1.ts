import { useContext } from "react";
import { F1Context } from "../context/F1Context";

export const useF1 = () => {
  const ctx = useContext(F1Context);
  if (!ctx) throw new Error("useF1 debe usarse dentro de F1Provider");
  return ctx;
};