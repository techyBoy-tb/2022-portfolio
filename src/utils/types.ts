export interface Todo {
  text: string;
  complete: boolean;
}

export interface Option {
  value: string;
  onClick: () => void;
  color?: string;
}
