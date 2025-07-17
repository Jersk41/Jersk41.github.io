import { ReactNode } from "react";

export type IconType = {
  id: string;
  label: string;
  content: ReactNode;
}

export interface DesktopIconProps {
  label: string;
  onClick: () => void;
}

export interface WindowProps {
  title: string;
  content: ReactNode;
  onClose: () => void;
}

export interface ProjectsDataType {
  name: string,
  description: string,
  technologies: Array<string>,
  link: string
}
