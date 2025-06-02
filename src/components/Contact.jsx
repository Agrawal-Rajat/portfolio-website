import React, { useEffect, useRef } from "react";
import { Box, Typography, TextField, Button, useTheme, useMediaQuery } from "@mui/material";
import { gsap } from "gsap";

const Contact = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([leftRef.current, rightRef.current], { opacity: 0, y: 40 });

      gsap.to(leftRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.to(rightRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Box
    id="contact"  
      sx={{
        backgroundColor: "#121212",
        color: "#fff",
        // minHeight: "100vh",
        py: 8,
        px: { xs: 2, sm: 4, md: 2 },
        pl: { md: "300px" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "flex-start",
        justifyContent: "center",
        gap: { xs: 4, md: 10 },
      }}
    >
      {/* Left side text */}
      <Box
        ref={leftRef}
        sx={{
          maxWidth: 500,
          flex: 1,
          mb: { xs: 2, md: 0 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Rajdhani, sans-serif",
            fontWeight: 800,
            color: "#e55451",
            mb: 1,
            textTransform: "uppercase",
            fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.75rem" },
          }}
        >
          Get in Touch
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontFamily: "Rajdhani, sans-serif",
            fontWeight: 900,
            mb: 3,
            fontSize: { xs: "2rem", sm: "2.75rem", md: "3rem" },
          }}
        >
          We'd love to hear from you
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#bbb",
            lineHeight: 1.6,
            fontSize: { xs: "0.9rem", sm: "1rem" },
          }}
        >
          Whether you have questions, feedback, or want to collaborate, fill out the form and we'll get back to you shortly.
        </Typography>
      </Box>

      {/* Right side form */}
      <Box
        ref={rightRef}
        component="form"
        sx={{
          flex: 1,
          maxWidth: 500,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          width: "100%",
          mx: { xs: "auto", md: 0 },
        }}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form submitted!");
        }}
      >
        <TextField
          label="Name"
          variant="filled"
          fullWidth
          InputProps={{ sx: { backgroundColor: "#1e1e1e", color: "#fff" } }}
          InputLabelProps={{ sx: { color: "#bbb" } }}
          required
        />
        <TextField
          label="Email"
          variant="filled"
          fullWidth
          type="email"
          InputProps={{ sx: { backgroundColor: "#1e1e1e", color: "#fff" } }}
          InputLabelProps={{ sx: { color: "#bbb" } }}
          required
        />
        <TextField
          label="Message"
          variant="filled"
          fullWidth
          multiline
          rows={4}
          InputProps={{ sx: { backgroundColor: "#1e1e1e", color: "#fff" } }}
          InputLabelProps={{ sx: { color: "#bbb" } }}
          required
        />

        <Button
          type="submit"
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
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
