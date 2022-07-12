import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box sx={{ mt: 5, mb: 3 }}>
      <Typography align="center">
        All Albion Online related materials are property of{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://albiononline.com/en/imprint"
        >
          Sandbox Interactive GmbH
        </a>
      </Typography>
    </Box>
  );
}
export default React.memo(Footer);