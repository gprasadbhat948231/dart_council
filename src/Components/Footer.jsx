import { Box, Typography, Link, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#3c4753",
        color: "white",
        py: 5.4,
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            borderBottom: "1px solid gray",
            pb: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <img
              src="../../src/assets/dart_logo.png"
              alt="DART Council Logo"
              className="company-logo"
              style={{ maxWidth: "50px", height: "auto" }}
            />
            <Typography variant="h6">
              <b>DART</b> Council
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 3 }}>
            <Link href="/pricing" color="inherit" underline="hover">
              About Us
            </Link>
            <Link href="/" color="inherit" underline="hover">
              Contact Us
            </Link>
            <Link
              href="https://www.dartcouncil.org/terms"
              color="inherit"
              underline="hover"
            >
              Terms
            </Link>
          </Box>
        </Box>

        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} DART Council. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
