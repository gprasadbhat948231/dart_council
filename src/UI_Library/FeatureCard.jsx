import { Card, CardContent, Typography } from "@mui/material";

const FeatureCard = ({ details }) => {
  return (
    <div>
      <Card sx={{ width: 330, height: 250, padding: "10px 10px 20px 10px" }}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {details.icon}
          <Typography variant="h5" color="#326ba1" component="div">
            {details.name}
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              color: "#0009",
              mb: 1.5,
              fontFamily:"sans-serif"
            }}
          >
            {details.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeatureCard;
