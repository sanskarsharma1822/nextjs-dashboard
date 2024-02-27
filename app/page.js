"use client";
import { Box } from "@mui/material";
import { mockDataTeam } from "./mockData";
import { DataGrid } from "@mui/x-data-grid";
import { GridToolbar } from "@mui/x-data-grid";

import Heading from "@/components/Heading";

export default function Home() {
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
    },
  ];
  return (
    <Box padding="2vh 1.25vw 2vh 1.25vw" height="90vh">
      <Heading title="Dashboard" subtitle="Welcome to the Dashboard" />
      <Box m="40px 0 0 0" height="70vh" width="100%">
        <DataGrid
          // checkboxSelection
          rows={mockDataTeam}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
          sx={{
            "& .MuiDataGrid-virtualScroller::-webkit-scrollbar": {
              width: "0.4em",
            },
            "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track": {
              background: "#e0e0e0",
            },
            "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb": {
              backgroundColor: "#888",
            },
            "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb:hover": {
              background: "#555",
            },
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
              color: "white",
            },
            "& .name-column--cell": {
              color: "#94e2cd",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#3e4396",
              borderBottom: "none",
              fontSize: "18px",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: "#1F2A40",
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: "#3e4396",
            },
            "& .MuiButtonBase-root": {
              color: "white",
            },
          }}
        />
      </Box>
    </Box>
  );
}

// marginBottom: "-0.5vh",
{
  /* <Grid container>
        <Typography variant="h5" style={{ color: "#4cceac" }}>
          Welcome to Dashboard
        </Typography>
        <Typography style={{ color: "#4cceac", fontSize: "18px" }}>
          User
        </Typography>
      </Grid> */
}

{
  /* <Box m="40px 0 0 0" height="75vh">
        <DataGrid
          // checkboxSelection
          rows={mockDataTeam}
          columns={columns}
        />
      </Box> */
}
// </Box>
