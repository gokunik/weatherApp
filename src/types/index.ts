export type EnteredData = {
  value: string;
  label: string;
  region: string;
  country: string;
};

export type OnSearchChange = (enteredData: EnteredData) => void;
