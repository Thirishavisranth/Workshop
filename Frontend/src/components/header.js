import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function Header() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Black Ops One", "cursive"].join(","),
    },
  });
  return (
    <Box
      sx={{
        width: `100%`,
        backgroundColor: "primary.dark",
        alignItems: "center",
      }}
    >
      <ThemeProvider theme={theme}>
        <Typography sx={{ fontSize: 70 }}>Event Manager</Typography>
      </ThemeProvider>
    </Box>
  );
}
