import { ReactNode } from "react";
import { Pokemon } from "../interfaces/api";

export type TemplateProps = {
  children?: ReactNode;
  onClear?: () => void;
  // onCompare?: () => void;
};
