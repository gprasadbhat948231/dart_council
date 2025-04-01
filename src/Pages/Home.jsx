import { Box, Container, Typography } from "@mui/material";
import "./Home.css";
import { School, Group, Work } from "@mui/icons-material";
import FeatureCard from "../UI_Library/FeatureCard";

const HomePage = () => {
  let features = [
    {
      name: "Interactive Learning",
      description: "Master essential skills through our DART-X platform",
      icon: <School sx={{ color: "#326ba1" }} fontSize="large" />,
    },
    {
      name: "Expert Network",
      description: "Connect with industry professionals and mentors",
      icon: <Group sx={{ color: "#326ba1" }} fontSize="large" />,
    },
    {
      name: "Career Resources",
      description: "Access frameworks, case studies, and industry insights",
      icon: <Work sx={{ color: "#326ba1" }} fontSize="large" />,
    },
  ];

  return (
    <div className="home-page-container">
      <Container
        maxWidth={false}
        sx={{
          width: "100%",
          minHeight: "400px",
          height: { xs: "auto", md: "500px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: { xs: 2, sm: 4 },
          background:
            "linear-gradient(90deg,rgb(50, 107, 161),rgb(255, 193, 35))",
        }}
      >
        <Box style={{ color: "white", maxWidth: "900px" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: "5px", md: "10px" },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span>Learn.</span> <span>Connect.</span> <span>Grow.</span>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              pt: 1,
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            Your gateway to professional excellence
          </Typography>
          <Typography
            sx={{
              pt: 2,
              color: "#ffffffcf",
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
            noWrap={false}
          >
            DART Council is your gateway to mastering unstructured problem
            solving and accelerating your professional growth through innovative
            tools and expert guidance.
          </Typography>
        </Box>
      </Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "30px", md: "50px" },
          padding: { xs: "20px", sm: "40px", md: "50px" },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "24px", sm: "28px", md: "30px" },
            fontFamily: "none",
            fontWeight: 400,
            color: "#326ba1",
          }}
        >
          Why DART Council is the right choice?
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: { xs: "20px", sm: "25px", md: "30px" },
          }}
        >
          {features.map((feature) => (
            <FeatureCard details={feature} key={feature.name} />
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default HomePage;
