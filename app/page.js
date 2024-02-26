"use client";
import { Box, Typography } from "@mui/material";
import { mockDataTeam } from "./mockData";
import { DataGrid } from "@mui/x-data-grid";
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
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? "white"
                : access === "manager"
                ? "white"
                : "white"
            }
            borderRadius="4px"
          >
            <Typography color={"white"} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box padding="3.5vh 0 1vh 0.75vw" style={{ overflowX: "auto" }}>
      <Typography
        style={{ color: "white", fontSize: "40px", fontWeight: "bold" }}
      >
        Dashboard
      </Typography>
      <Typography variant="h5" style={{ color: "#4cceac" }}>
        Welcome to Dashboard
      </Typography>

      <Box m="40px 0 0 0" height="75vh">
        <DataGrid
          // checkboxSelection
          rows={mockDataTeam}
          columns={columns}
        />
      </Box>
    </Box>
  );
}
