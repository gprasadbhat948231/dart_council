import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import PricingCard from "../UI_Library/PricingCard";

const plans = [
  {
    name: "Prep Lite",
    price: "$17.99/month",
    features: [
      "Basic access to resources",
      "Limited problem sets",
      "Community support",
    ],
  },
  {
    name: "Prep Explorer",
    price: "$24/month",
    features: [
      "Everything in Lite",
      "Expanded problem sets",
      "Exclusive webinars",
    ],
  },
  {
    name: "DART Pro",
    price: "$38.99/month",
    features: ["Everything in Explorer", "1-on-1 mentoring", "Premium support"],
  },
];

const PricingPage = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 5,
        minHeight: { xs: "auto", sm: "auto", md: "auto", lg: "auto" },
        textAlign: "center",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" fontWeight={600} color="primary" gutterBottom>
        Choose Your Plan
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" mb={4}>
        Get the plan of your choice
      </Typography>

      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        {plans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PricingCard detail={plan} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PricingPage;
