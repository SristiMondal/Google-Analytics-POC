import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="/" sx={{ textDecoration: "none" }}>
        {"demoApp "}
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          display: "flex",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            My sticky footer can be found here.
          </Typography>
          <Copyright />
        </Container>
        <Box>
          <Container
            maxWidth="sm"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography variant="body1" sx={{ width: "150px" }}>
              follow Us:
            </Typography>
            <Container sx={{ display: "flex", gap: 1 }}>
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ cursor: "pointer" }}
              />
              <FontAwesomeIcon icon={faGoogle} style={{ cursor: "pointer" }} />
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ cursor: "pointer" }}
              />
              <FontAwesomeIcon icon={faTwitter} style={{ cursor: "pointer" }} />
            </Container>
          </Container>
          <Container
            maxWidth="sm"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography variant="body1" sx={{ width: "115px" }}>
              contact Us:
            </Typography>
            <Typography>+333 3333 3333</Typography>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
