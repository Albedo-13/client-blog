export type Category = {
  id: number;
  label: string;
  icon: string;
  description: string;
};

export type Categories = { [key: string]: Category };
