import React, { useEffect, useRef } from "react";
import { Box, Typography, Grid, Link as MuiLink } from "@mui/material";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";


const projects = [
  {
    image: "portfolio1.jpeg",
    title: "Smart Agency Website",
    subtitle: "Marketing Portfolio",
    link: "https://google.com",
  },
  {
    image: "portfolio2.jpeg",
    title: "E-Commerce Platform",
    subtitle: "Fullstack Com merce",
    link: "https://google.com",
  },
  {
    image: "portfolio3.jpeg",
    title: "Portfolio Redesign",
    subtitle: "Personal Showcase",
    link: "https://google.com",
  },
  {
    image: "/portfolio4.jpeg",
    title: "Portfolio Redesign",
    subtitle: "Personal Showcase",
    link: "https://google.com",
  },
];

const Portfolio = () => {
  const portfolioRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      portfolioRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <Box
    id="portfolio"  
      ref={portfolioRef}
      sx={{
        py: 8,
        px: 3,
        backgroundColor: "#121212",
        color: "#ffffff",
        "@media (min-width: 1024px)": {
          paddingLeft: "300px",
        },
      }}
    >
      {/* Heading + Description */}
      <Box
        sx={{
          maxWidth: "800px",
          mx: "auto",
          textAlign: "center",
          mb: 6,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Rajdhani, sans-serif",
            fontWeight: 700,
            color: "#ffffff",
            mb: 1,
          }}
        >
          My Portfolio
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
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Rajdhani, sans-serif",
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          I help brands grow online by creating websites that are fast, clean,
          and meaningful. From strategy to design, I focus on what truly works
          for your goals.
        </Typography>
      </Box>

      {/* Projects Grid */}
      <Grid
        container
        spacing={6}
        sx={{
          justifyContent: { xs: "flex-start", lg: "center" },
        }}
      >
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Box
              sx={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
                maxWidth: "500px",
                margin: "0 auto",
                border: "2px solid transparent",
                transition: "border 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  cursor: "pointer",
                  boxShadow: "0 0 12px #E55451",
                  ".project-title": {
                    textDecoration: "underline",
                  },
                },
              }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Box
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{
                    width: "500px",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "16px 16px 0 0",
                    display: "block",
                  }}
                />
              </motion.div>

              {/* Title */}
              <Box mt={2} display="flex" alignItems="center" px={2}>
                <MuiLink
                  href={project.link}
                  target="_blank"
                  underline="none"
                  className="project-title"
                  sx={{
                    fontFamily: "Rajdhani, sans-serif",
                    fontWeight: 600,
                    fontSize: "1.2rem",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#E55451",
                    },
                  }}
                >
                  {project.title}
                  <OpenInNewIcon
                    fontSize="small"
                    sx={{ ml: 0.5, transition: "color 0.3s ease" }}
                  />
                </MuiLink>
              </Box>

              {/* Subtitle */}
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Rajdhani, sans-serif",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "0.95rem",
                  mt: 0.5,
                  px: 2,
                  pb: 2,
                }}
              >
                {project.subtitle}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
