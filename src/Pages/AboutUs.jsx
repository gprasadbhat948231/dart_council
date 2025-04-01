import { Box, Container, Link, Typography } from "@mui/material";
import CustomButton from "../UI_Library/Button";
import { LinkedIn } from "@mui/icons-material";
import FounderCard from "../UI_Library/FounderCard";

const founders = [
  {
    name: "Navdeep Rajotia",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQGHx9qpGOclDg/profile-displayphoto-shrink_400_400/B56ZQ150CyHIAg-/0/1736071136663?e=1749081600&v=beta&t=y7Y4Fd8-s9Ov_wzbvWvI_HguJApsU7XgiLPQjcbCNGM",
    description:
      "Navdeep, our esteemed Founder of DART, has over six years of experience in financial planning, business operations, and data analysis. He plays a key role in driving effective risk management strategies, contributing to business growth and innovation.",
    link: "https://www.linkedin.com/in/navdeep-rajotia/",
  },
  {
    name: "Avinash Rai",
    image:
      "https://media.licdn.com/dms/image/v2/C5603AQEJ-fKi32Drpg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1601143234645?e=1749081600&v=beta&t=d13KMCb1JTjnk5uhXNISg5I47vnvbbuUzRHK6qEKOl8",
    description:
      "Avinash, our esteemed Founder of DART, earned his degree in Electrical and Electronics Engineering from BITS Pilani. Currently a Member of Technical Staff at Salesforce, he brings expertise in Java, JavaScript, React, Spring Boot, and Microservices.",
    link: "https://www.linkedin.com/in/avinash-rai96/",
  },
];

const AboutUs = () => {
  return (
    <Box>
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
            "linear-gradient(90deg, rgb(50, 107, 161), rgb(255, 193, 35))",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: "32px", sm: "38px", md: "42px" },
            fontWeight: 900,
          }}
        >
          Empowering Future Leaders
        </Typography>
        <Typography
          sx={{
            mt: 2,
            px: { xs: 2, md: 4 },
            py: 2,
            borderRadius: 5,
            color: "gray",
            fontSize: { xs: "0.9rem", md: "1rem" },
            background: "white",
            maxWidth: "700px",
          }}
        >
          DART Council is your gateway to mastering unstructured problem solving
          and accelerating your professional growth through innovative tools and
          expert guidance.
        </Typography>
      </Container>

      <Box sx={{ textAlign: "center", py: 5 }}>
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "24px", sm: "28px", md: "30px" },
            fontWeight: 600,
            color: "#326ba1",
            mb: 3,
          }}
        >
          Our Co-Founders
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {founders.map((founder, index) => (
            <FounderCard
              key={index}
              {...founder}
              onClick={() => handleClick(founder.link)}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
