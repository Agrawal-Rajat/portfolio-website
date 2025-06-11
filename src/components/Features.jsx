import React, { useEffect } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@fontsource/rajdhani";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { title: "Business Strategy", description: "Strategies to grow profitably and stay ahead of competition." },
  { title: "Startup Guidance", description: "From ideation to scaling, tailored help for early-stage growth." },
  { title: "Smart Solutions", description: "Build and automate systems that boost efficiency." },
  { title: "UI/UX Design", description: "User-focused design for modern, clean digital experiences." },
  { title: "Branding Help", description: "Craft brand stories that people remember." },
  { title: "Creative Design", description: "Turn imagination into visually compelling outcomes." },
];

const Features = () => {
  useEffect(() => {
  ScrollTrigger.batch(".feature-card", {
    onEnter: (batch) => {
      gsap.fromTo(
        batch,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
        }
      );
    },
    start: "top 90%",
    once: true,
  });
}, []);

  return (
    <Box
      id="features"
      sx={{
        backgroundColor: "#0f0f0f",
        px: { xs: 3, md: 6 },
        py: 10,
        pl: { md: "300px !important" },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "Rajdhani, sans-serif",
          color: "#fff",
          fontWeight: "bold",
          textAlign : "center",
          fontWeight : "700",
          mb: 2,
        }}
      >
        Features
      </Typography>
      <Box
        component="hr"
        sx={{
          border: "2px solid #e55451",
          width: "70px",
          mb: 6,
          opacity: 0.6,
        }}
      />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "repeat(3, 1fr)",
          },
          gap: 4,
        }}
      >
        {features.map((feature, index) => (
          <Card
            key={index}
            className="feature-card"
            sx={{
              background: "linear-gradient(145deg, #1c1c1c, #2b2b2b)",
              color: "#fff",
              borderRadius: "24px",
              transition: "all 0.4s ease",
              height: "100%",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 12px 32px rgba(229, 84, 81, 0.3)",
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Rajdhani, sans-serif",
                  fontWeight: 600,
                  color: "#e55451",
                  mb: 1,
                }}
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Rajdhani, sans-serif",
                  color: "#ccc",
                  lineHeight: 1.6,
                }}
              >
                {feature.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Features;
