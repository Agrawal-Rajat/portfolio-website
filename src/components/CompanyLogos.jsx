import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import googleLogo from "../assets/google.png";
import microsoftLogo from "../assets/microsoft.png";
import amazonLogo from "../assets/amazon.png";
import facebookLogo from "../assets/facebook.png";
import netflixLogo from "../assets/netflix.png";
import wallmartLogo from "../assets/walmart.png";

const companyLogos = [
  { name: "Google", logo: googleLogo },
  { name: "Microsoft", logo: microsoftLogo },
  { name: "Amazon", logo: amazonLogo },
  { name: "Facebook", logo: facebookLogo },
  { name: "Netflix", logo: netflixLogo },
  { name: "Walmart", logo: wallmartLogo },
];

const CompanyLogos = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const logosRef = useRef([]);
  const containerRef = useRef(null);  // New container ref
  const [loadedImages, setLoadedImages] = useState(0);

  const handleImageLoad = () => {
    setLoadedImages((count) => count + 1);
  };

  useEffect(() => {
    if (loadedImages === companyLogos.length) {
      gsap.fromTo(
        logosRef.current,
        { opacity: 0, y: 20, position: "relative" },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current, // Use container ref here
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
      ScrollTrigger.refresh();
    }
  }, [loadedImages]);

  // Refresh ScrollTrigger on screen size change (optional but recommended)
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [isSmallScreen]);

  return (
    <Box
    id="company"  
      sx={{
        backgroundColor: "#121212",
        color: "#fff",
        py: 8,
        px: {
          xs: 2,
          sm: 10,
          md: 2,
        },
        pl: {
          md: "300px",
        },
      }}
      ref={containerRef} // Assign container ref here
    >
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
        Companies I have worked in
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

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: 4,
        }}
      >
        {companyLogos.map((company, index) => (
          <Box
            key={index}
            ref={(el) => (logosRef.current[index] = el)}
            sx={{
              backgroundColor: "#1e1e1e",
              p: 3,
              cursor: "pointer",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.3s, box-shadow 0.3s",
              boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 6px 20px #b04340",
              },
            }}
          >
            <img
              src={company.logo}
              alt={company.name}
              onLoad={handleImageLoad}
              style={{
                maxWidth: "100%",
                maxHeight: "60px",
                objectFit: "contain",
                filter: "brightness(0.9)",
                display: "block",
                margin: "0 auto",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CompanyLogos;
