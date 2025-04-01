import { Box, Typography } from "@mui/material";
import { Link } from "react-router";
import CustomButton from "./Button";
import { LinkedIn } from "@mui/icons-material";

const FounderCard = ({ name, image, description, link }) => (
  <Box
    sx={{
      maxWidth: 360,
      textAlign: "center",
      p: 2,
      m: "auto",
    }}
  >
    <img
      src={image}
      alt={`Photo of ${name}`}
      style={{ width: "200px", height: "200px", borderRadius: "50%" }}
    />
    <Typography variant="h6" sx={{ fontWeight: 600, mt: 2 }}>
      {name}
    </Typography>
    <Typography variant="body2" sx={{ mt: 1, color: "gray" }}>
      {description}
    </Typography>
    <Link href={link} target="none">
      <CustomButton
        text={"Connect"}
        icon={
          <LinkedIn sx={{ color: "#0077B5", ml: 1, alignItems: "center" }} />
        }
        customCss={{ mt: 4, color: "White", fontWeight: 600 }}
      />
    </Link>
  </Box>
);

export default FounderCard;
