import { Button } from "@mui/material";
 export const CustomButton = ({
  children,
  variant = "contained",
  color = "primary",
  onClick,
  type = "button",
  fullWidth = false,
  disabled = false,
  ...rest
}) => {
  return (
     <Button
      variant={variant}
      color={color}
      onClick={onClick}
      type={type}
      fullWidth={fullWidth}
      disabled={disabled}
      {...rest}
    >
      {children}
    </Button>
  )
};
