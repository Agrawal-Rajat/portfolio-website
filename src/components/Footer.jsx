import React from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Link,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const quickLinks = ["Home", "About Us", "Services", "Pricing", "Contact"];

  return (
    <>
      <Box
        component="footer"
        sx={{
          backgroundColor: "#121212",
          color: "#fff",
          py: 6,
          px: 4,
          maxWidth: "100vw",
          overflowX: "hidden",
        }}
      >
        <Box
          sx={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: { xs: 8, md: 6 }, // Increased gaps here
            marginLeft: isMdUp ? "300px" : 0,
          }}
        >
          {/* Left Side */}
          <Box
            sx={{
              flex: 1,
              maxWidth: { xs: "100%", md: 500 },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Rajdhani, sans-serif",
                fontWeight: 900,
                mb: 3, // Increased margin bottom
                fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
                lineHeight: 1.2,
              }}
            >
              Get Ready
              <br />
              Start Your Journey with XYZ Today
            </Typography>

            <Box
              component="form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Subscribed with email!");
              }}
              sx={{ maxWidth: 400 }}
            >
              <TextField
                variant="filled"
                placeholder="Enter your email"
                fullWidth
                InputProps={{
                  sx: {
                    backgroundColor: "#1e1e1e",
                    color: "#fff",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    "& .MuiFilledInput-input": {
                      padding: "12.5px 14px",
                      lineHeight: 1,
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                    },
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        type="submit"
                        edge="end"
                        sx={{ color: "#e55451" }}
                        aria-label="subscribe"
                      >
                        <EmailIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                type="email"
                required
              />
            </Box>
          </Box>

          {/* Right Side */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-start",
              maxWidth: { xs: "100%", md: 600 },
              flexWrap: { xs: "wrap", md: "nowrap" },
              gap: 6, // Increased gap
            }}
          >
            {/* Quick Links */}
            <Box sx={{ minWidth: 150 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: "#e55451",
                  mb: 3,
                  fontFamily: "Rajdhani, sans-serif",
                }}
              >
                Quick Links
              </Typography>
              <List sx={{ p: 0, m: 0 }}>
                {quickLinks.map((link, idx) => (
                  <ListItem
                    key={idx}
                    sx={{
                      p: 0,
                      mb: 1.5, // increased spacing between links
                      cursor: "pointer",
                      "&:hover": { color: "#e55451" },
                    }}
                  >
                    <ListItemText
                      primary={link}
                      primaryTypographyProps={{ fontSize: "1rem" }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>

            {/* Contact Info */}
            <Box sx={{ minWidth: 200 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: "#e55451",
                  mb: 3,
                  fontFamily: "Rajdhani, sans-serif",
                }}
              >
                Contact Info
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                <PhoneIcon sx={{ mr: 1, color: "#e55451" }} />
                <Typography variant="body1">+1 (555) 123-4567</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <EmailIcon sx={{ mr: 1, color: "#e55451" }} />
                <Typography variant="body1">contact@xyz.com</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 3 }}>
                <IconButton
                  aria-label="Facebook"
                  href="#"
                  sx={{ color: "#e55451", "&:hover": { color: "#b04340" } }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  aria-label="Twitter"
                  href="#"
                  sx={{ color: "#e55451", "&:hover": { color: "#b04340" } }}
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton
                  aria-label="LinkedIn"
                  href="#"
                  sx={{ color: "#e55451", "&:hover": { color: "#b04340" } }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  aria-label="Instagram"
                  href="#"
                  sx={{ color: "#e55451", "&:hover": { color: "#b04340" } }}
                >
                  <InstagramIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Copyright & Policy line below the footer */}
      <Box
        sx={{
          backgroundColor: "#0d0d0d",
          color: "#aaa",
          py: 2,
          px: 4,
          textAlign: "center",
          fontSize: "0.9rem",
          display: "flex",
          justifyContent: "center",
          gap: 3,
          flexWrap: "wrap",
          paddingLeft: isMdUp ? "300px" : 0,  // <-- Here is the conditional padding
        }}
      >
        <Typography>&copy; {new Date().getFullYear()} XYZ. All rights reserved.</Typography>
      </Box>
    </>
  );
};

export default Footer;
