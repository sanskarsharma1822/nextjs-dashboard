import { Box } from "@mui/material";
import Heading from "@/components/Heading";
import Grid from "@mui/material/Unstable_Grid2";
export default function Requests() {
  return (
    <Box padding="2vh 1.25vw 2vh 1.25vw" height="90vh">
      <Heading title="Individual Customer" subtitle="This is data Colated" />
      <Grid container>
        <Grid xs={3} style={{ height: "75vh", backgroundColor: "red" }}>
          <Box></Box>
        </Grid>
        <Grid xs={9} style={{ height: "75vh" }}>
          <Grid container>
            <Grid
              style={{
                height: "37.5vh",
                backgroundColor: "yellow",
                width: "50%",
              }}
            ></Grid>
            <Grid
              xs={3}
              style={{
                height: "37.5vh",
                backgroundColor: "green",
                width: "50%",
              }}
            ></Grid>
          </Grid>
          <Grid container>
            <Grid
              style={{
                height: "37.5vh",
                backgroundColor: "blue",
                width: "50%",
              }}
            ></Grid>
            <Grid
              style={{
                height: "37.5vh",
                backgroundColor: "white",
                width: "50%",
              }}
            ></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
