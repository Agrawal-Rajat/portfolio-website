import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";

const timelineData = [
  {
    year: "2023 - Present",
    title: "Software Engineer Intern",
    institution: "TechCorp Pvt. Ltd.",
    description: "Working on full-stack development with React and Node.js.",
  },
  {
    year: "2021 - 2025",
    title: "B.Tech in Computer Science",
    institution: "Medi-Caps University",
    description:
      "Pursuing Bachelor's degree with a focus on Data Structures and AI.",
  },
  {
    year: "2019 - 2021",
    title: "Higher Secondary Education",
    institution: "ABC Public School",
    description:
      "Studied PCM with Computer Science, secured 92% in CBSE Board Exams.",
  },
  {
    year: "2019 - 2021",
    title: "Higher Secondary Education",
    institution: "ABC Public School",
    description:
      "Studied PCM with Computer Science, secured 92% in CBSE Board Exams.",
  },
];

const EducationExperience = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
    id="resume"  
      sx={{
        pl: isLargeScreen ? "300px" : "16px",
        pr: 2,
        py: 8,
        backgroundColor: "#121212",
        color: "#fff",
        minHeight: "100vh",
      }}
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
              Education and Experience
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

      {isSmallScreen ? (
        // Mobile-friendly card layout
        <Box>
          {timelineData.map((item, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "#1e1e1e",
                borderLeft: "4px solid #E55451", // changed from #3498db to #E55451
                padding: 3,
                borderRadius: "16px",
                mb: 4,
                boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                transition: "transform 0.3s, border-color 0.3s",
                "&:hover": {
                  transform: "scale(1.03)",
                  borderLeftColor: "#b04340", // hover color
                },
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  fontFamily: "Rajdhani, sans-serif",
                  fontWeight: 600,
                  color: "#E55451", // changed from #3498db
                  mb: 1,
                }}
              >
                {item.year}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Rajdhani, sans-serif",
                  fontWeight: 700,
                  color: "#ffffff",
                  mb: 0.5,
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "Rajdhani, sans-serif",
                  color: "rgba(255,255,255,0.8)",
                  mb: 1,
                }}
              >
                {item.institution}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Rajdhani, sans-serif",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      ) : (
        // Timeline layout for larger screens
        <Timeline position="alternate">
          {timelineData.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{
                  color: "rgba(255,255,255,0.6)",
                  fontFamily: "Rajdhani, sans-serif",
                }}
              >
                {item.year}
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    backgroundColor: "#E55451", // main color for dot
                    border: "3px solid white",
                    transition: "background-color 0.3s",
                    "&:hover": {
                      backgroundColor: "#b04340", // hover color for dot
                    },
                  }}
                />
                {index < timelineData.length - 1 && (
                  <TimelineConnector sx={{ backgroundColor: "#E55451" }} />
                )}
              </TimelineSeparator>

              <TimelineContent sx={{ pb: 4 }}>
                <Box
                  sx={{
                    backgroundColor: "#1e1e1e",
                    borderLeft: "4px solid #E55451", // changed border color
                    padding: 3,
                    borderRadius: "16px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                    transition: "transform 0.3s, border-color 0.3s",
                    "&:hover": {
                      transform: "scale(1.03)",
                      borderLeftColor: "#b04340", // hover border color
                    },
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontFamily: "Rajdhani, sans-serif",
                      fontWeight: 600,
                      color: "#E55451", // changed from #3498db
                      mb: 1,
                      textAlign: "justify",
                    }}
                  >
                    {item.year}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Rajdhani, sans-serif",
                      fontWeight: 700,
                      color: "#ffffff",
                      mb: 0.5,
                      textAlign: "justify",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontFamily: "Rajdhani, sans-serif",
                      color: "rgba(255,255,255,0.8)",
                      mb: 1,
                      textAlign: "justify",
                    }}
                  >
                    {item.institution}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Rajdhani, sans-serif",
                      color: "rgba(255,255,255,0.6)",
                      textAlign: "justify",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      )}
    </Box>
  );
};

export default EducationExperience;
