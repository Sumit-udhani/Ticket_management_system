import { TextField } from "@mui/material";
 export const InputField = ({
  label,
  name,
  onChange,
  type = "text",
  value,
  placeholder,
  required = false,
  fullwidth = false,
  ...rest
}) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      fullWidth={fullwidth}
      variant="outlined"
      {...rest}
    />
  );
};
