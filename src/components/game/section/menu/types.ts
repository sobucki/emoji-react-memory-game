export type MenuProps = {
  isOpen: boolean;
  onSubmit: (values: FormType) => void;
};

export type FormType = {
  category: string;
  level: string;
};
