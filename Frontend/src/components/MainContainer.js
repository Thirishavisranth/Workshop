import React from "react";
import { Box } from "@mui/system";
import Tables from "./table";
import FormDialog from "./FormDialog";
export default function MainContainer() {
  return (
    <div>
      <Box
        sx={{
          marginTop: "5%",
          width: "80%",
          height: 600,
        }}
      >
        <FormDialog />
        <Tables />
      </Box>
    </div>
  );
}
