export interface ButtonProps {
  handleClick: (e: React.SyntheticEvent) => void;
  style: { [key: string]: any };
  buttonTitle: string;
}
