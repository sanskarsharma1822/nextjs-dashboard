"use client";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
export default function Heading({ title, subtitle }) {
  return (
    <Grid container>
      <Grid xs={6}>
        <Typography
          style={{ color: "white", fontSize: "40px", fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <Typography style={{ color: "#4cceac", fontSize: "24px" }}>
          {subtitle}
        </Typography>
      </Grid>
      <Grid xs={1} xsOffset={1} mdOffset="auto" textAlign="center">
        <AccountCircleIcon
          style={{
            height: "66.6px",
            width: "66.6px",
            color: "white",
            marginTop: "-0.5vh",
          }}
        />
        <Typography style={{ color: "#4cceac", fontSize: "18px" }}>
          User
        </Typography>
      </Grid>
    </Grid>
  );
}
