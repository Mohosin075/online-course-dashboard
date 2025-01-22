import { ReactNode } from "react";

export type Children = {
  children: ReactNode;
};

export type ListItem = {
  Label: string;
  location: string;
  icon: ReactNode;
};
