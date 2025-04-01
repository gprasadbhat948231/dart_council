import { Button } from "@mui/material";

const CustomButton = ({ text, icon = null, onClick, customCss }) => {
  const buttonStyle = {
    background:
      "linear-gradient(90deg,rgba(50, 107, 161, 0.65),rgba(255, 193, 35, 0.63))",
    padding: "5px 20px 5px 20px",
    color: "Black",
    textTransform: "none",
    ...customCss,
  };
  return (
    <Button sx={buttonStyle} onClick={onClick}>
      {text}
      {icon && icon}
    </Button>
  );
};

export default CustomButton;
