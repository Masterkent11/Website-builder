export interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode | "" | null;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  label?: string | undefined;
  "data-testid": "";
}
