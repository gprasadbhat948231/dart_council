import { Box, Card, CardContent, Typography } from "@mui/material";
import CustomButton from "./Button";

const PricingCard = ({ detail }) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        width: 250,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        textAlign: "center",
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" fontWeight={600} color="primary">
          {detail.name}
        </Typography>
        <Typography variant="h6" fontWeight={500} color="secondary" mt={1}>
          {detail.price}
        </Typography>
        <Box sx={{ mt: 2, textAlign: "left" }}>
          {detail?.features?.map((feature, idx) => (
            <Typography key={idx} variant="body2" color="textSecondary">
              - {feature}
            </Typography>
          ))}
        </Box>
      </CardContent>
      <CustomButton
        text="Subscribe"
        customCss={{ mt: 2, mb: 2, background: "#1356c8", color: "white" }}
      />
    </Card>
  );
};

export default PricingCard;
