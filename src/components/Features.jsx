import React, { useEffect } from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@fontsource/rajdhani";

const features = [
  {
    title: "Business Strategy",
    description:
      "We help you refine your business vision and create strategies that deliver sustainable growth and profitability.",
  },
  {
    title: "Startup Guidance",
    description:
      "Our team offers hands-on guidance to startups, helping them overcome challenges and scale efficiently.",
  },
  {
    title: "Smart Solutions",
    description:
      "We provide innovative, smart solutions tailored to meet your business needs and maximize productivity.",
  },
  {
    title: "UI/UX Design",
    description:
      "Our design team creates intuitive, visually appealing UI/UX designs that elevate the user experience.",
  },
  {
    title: "Branding Help",
    description:
      "We assist in building strong brand identities that resonate with your audience and drive loyalty.",
  },
  {
    title: "Creative Design",
    description:
      "We bring your ideas to life through creative designs that tell your story and captivate your target market.",
  },
];
gsap.registerPlugin(ScrollTrigger);
const Features = () => {
  useEffect(() => {
    gsap.utils.toArray(".feature-item").forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%", // when the top of the item hits 80% of the viewport
            toggleActions: "play none none none",
          },
          delay: index * 0.1,
        }
      );
    });
  }, []);

  return (
    <Box
    id="features"  
      sx={{
        py: 8,
        px: 3,
        backgroundColor: "#121212",
        "@media (min-width: 1024px)": {
          paddingLeft: "300px",
        },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "Rajdhani, sans-serif",
          fontWeight: 700,
          color: "#ffffff",
          mb: 1, // smaller margin to bring hr closer
          textAlign: "center",
        }}
      >
        Features
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

      <Grid
        container
        spacing={4}
        sx={{
          "@media (min-width: 1024px)": {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "1.5rem",
          },
        }}
      >
        {features.map((feature, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            key={index}
            sx={{
              "@media (min-width: 1024px)": {
                width: "48%",
                transform: "scale(1)",
                transition: "transform 0.3s ease-out",
                boxSizing: "border-box",
              },
            }}
          >
            <Paper
              className="feature-item"
              elevation={3}
              sx={{
                cursor: "pointer",
                padding: "15px",
                borderRadius: {
                  xs: "16px", // smaller radius on mobile
                  md: "9999px", // big pill shape on desktop
                },
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease-out",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                position: "relative",
                zIndex: 1,
                maxWidth: "100%",
                height: "auto",
                minHeight: "150px",
                maxHeight: "180px",
                overflow: "hidden",
                backgroundImage: "linear-gradient(135deg, #1c1c1c, #3a3a3a)",
                backgroundColor: "#ffffff",
                color: "#ffffff",
                border: "2px solid transparent",
                "&:hover": {
                  boxShadow: "0 12px 30px rgba(255, 255, 255, 0.15)",
                  backgroundImage: "linear-gradient(135deg, #2f2f2f, #555555)",
                  borderColor: "#777777",
                },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Rajdhani, sans-serif",
                  fontWeight: 700,
                  mb: 1,
                  textAlign: "left",
                  color: "#E55451",
                }}
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Rajdhani, sans-serif",
                  fontSize: "1rem",
                  color: "rgba(255, 255, 255, 0.7)", // Slightly faded white for text
                }}
              >
                {feature.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
