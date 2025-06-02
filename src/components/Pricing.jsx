import React from "react";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const plans = [
  {
    name: "Starter Plan",
    price: "$9.99/mo",
    description: "Ideal for individuals just getting started.",
    features: [
      "Basic analytics",
      "Email support",
      "10 projects",
      "Community access",
    ],
  },
  {
    name: "Premium Plan",
    price: "$59.99/mo",
    description: "For larger teams requiring full features.",
    features: [
      "All Pro features",
      "Dedicated support",
      "Custom integrations",
      "24/7 phone support",
      "Personalized onboarding",
    ],
  },
  {
    name: "Pro Plan",
    price: "$29.99/mo",
    description: "Perfect for professionals and small teams.",
    features: [
      "All Starter Features",
      "Unlimited projects",
      "Team collaboration",
      "Customizable reports",
    ],
  },
];

const Pricing = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
    id="pricing"  
      sx={{
        backgroundColor: "#121212",
        color: "#fff",
        py: 8,
        px: { xs: 2, sm: 10, md: 2 },
        pl: { md: "300px" },
        minHeight: "100vh",
      }}
    >
      {/* Title */}
      <Typography
        variant="h2"
        sx={{
          fontFamily: "Rajdhani, sans-serif",
          fontWeight: 700,
          color: "#ffffff",
          mb: 1,
          textAlign: "center",
        }}
      >
        Pricing
      </Typography>
      <Box
        component="hr"
        sx={{
          borderColor: "#e55451",
          borderWidth: "2px",
          width: "80px",
          mx: "auto",
          mb: 5,
          borderRadius: "2px",
          opacity: 0.5,
        }}
      />

      {/* Plans container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          gap: { xs: 6, md: 4 },
          maxWidth: "1200px",
          margin: "0 auto",
          alignItems: "flex-start",
        }}
      >
        {plans.map((plan, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "#1e1e1e",
              borderRadius: 3,
              px: { xs: 4, sm: 5 },
              py: { xs: 4, sm: 5 },
              width: { xs: "100%", sm: "80%", md: 320 },
              minHeight: 420,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
              transition: "transform 0.3s",
              transform: "scale(1)",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 12px 30px rgba(180, 67, 64, 0.6)", // hover shadow with b04340
              },
              // Vertical shift and taller card for middle plan only on md and up
              ...(index === 1 && {
                marginTop: { xs: 0, md: "40px" },
                minHeight: { xs: 420, md: 460 },
              }),
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, mb: 1, color: "#e55451" }}
            >
              {plan.name}
            </Typography>

            <Typography variant="h3" sx={{ fontWeight: 900, mb: 1 }}>
              {plan.price}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "#bbb",
                mb: 2,
                textAlign: "center",
              }}
            >
              {plan.description}
            </Typography>

            <Box
              component="hr"
              sx={{
                borderColor: "#e55451",
                borderWidth: "1px",
                width: "60px",
                mb: 3,
                borderRadius: "2px",
                opacity: 0.5,
              }}
            />

            <Box
              component="ul"
              sx={{
                listStyle: "none",
                p: 0,
                m: 0,
                mb: 4,
                width: "100%",
              }}
            >
              {plan.features.map((feature, i) => (
                <Box
                  component="li"
                  key={i}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 1.5,
                    color: "#ddd",
                  }}
                >
                  <CheckIcon
                    sx={{ color: "#e55451", mr: 1.5, fontSize: "20px" }}
                  />
                  <Typography variant="body1">{feature}</Typography>
                </Box>
              ))}
            </Box>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#e55451",
                color: "#121212",
                fontWeight: 700,
                px: 5,
                py: 1.5,
                borderRadius: 2,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#b04340",
                },
                width: "100%",
              }}
            >
              Get Started
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Pricing;
