import { Box, Typography } from "@mui/material";
import Heading from "@/components/Heading";
import Grid from "@mui/material/Unstable_Grid2";

export default function Requests() {
  return (
    <Box padding="2vh 1.25vw 2vh 1.25vw" height="90vh">
      <Heading title="Customer Research" subtitle="This is Data Colated" />
      <Grid container style={{ marginTop: "3vh" }} columnGap={0}>
        <Grid
          xs={4}
          style={{ height: "75vh", padding: "1vw", paddingLeft: "0" }}
        >
          <Box
            style={{
              backgroundColor: "#1F2A40",
              height: "100%",
              width: "100%",
            }}
          ></Box>
        </Grid>
        <Grid xs={8} style={{ height: "75vh" }}>
          <Grid container style={{ height: "50%" }}>
            <Grid
              style={{
                height: "100%",
                width: "50%",
                padding: "1vw",
              }}
            >
              <Box
                style={{
                  backgroundColor: "#1F2A40",
                  height: "100%",
                  width: "100%",
                }}
              >
                <img
                  src="../images/hibbc logo.png"
                  // src="public\images\soulestate-high-resolution-logo-white-on-transparent-background.png"
                  alt="profile"
                  height="80px"
                  width="80px"
                />
              </Box>
            </Grid>
            <Grid
              style={{
                height: "100%",
                width: "50%",
                padding: "1vw",
              }}
            >
              <Box
                style={{
                  backgroundColor: "#1F2A40",
                  height: "100%",
                  width: "100%",
                }}
              >
                <img
                  src="../images/dea logo.png"
                  // src="public\images\soulestate-high-resolution-logo-white-on-transparent-background.png"
                  alt="profile"
                  height="80px"
                  width="80px"
                />
              </Box>
            </Grid>
          </Grid>
          <Grid container style={{ height: "50%" }}>
            <Grid
              style={{
                height: "100%",
                width: "50%",
                padding: "1vw",
              }}
            >
              <Box
                style={{
                  backgroundColor: "#1F2A40",
                  height: "100%",
                  width: "100%",
                }}
              >
                <img
                  src="../images/hrsa hd logo.png"
                  // src="public\images\soulestate-high-resolution-logo-white-on-transparent-background.png"
                  alt="profile"
                  height="80px"
                  width="80px"
                />
              </Box>
            </Grid>
            <Grid
              style={{
                height: "100%",
                width: "50%",
                padding: "1vw",
              }}
            >
              <Box
                style={{
                  backgroundColor: "#1F2A40",
                  height: "100%",
                  width: "100%",
                }}
              >
                <img
                  src="../images/google logo.png"
                  // src="public\images\soulestate-high-resolution-logo-white-on-transparent-background.png"
                  alt="profile"
                  height="80px"
                  width="80px"
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
