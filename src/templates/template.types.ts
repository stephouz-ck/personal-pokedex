import { ReactNode } from "react";

export type TemplateProps = {
  children?: ReactNode;
  onClear: () => void;
};

export type TopNavProps = {
  onClear: () => void;
};
