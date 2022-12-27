import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Skeleton,
  Box,
  IconButton,
  Button,
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import common from "./userConstant.json";

const UserListing = () => {
  return (
    <div>
      <Grid container sx={{ display: "flex", flexDirection: "column" }}>
        <Grid item xs={12}>
          <Button variant="contained">{`${common.ADD} new ${common.USER}`}</Button>
        </Grid>

        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              {/* {isLoading ? (
                <Box sx={{ width: "100%" }}>
                  {" "}
                  <Skeleton />
                  <Skeleton animation="wave" />
                  <Skeleton animation={false} />
                </Box>
              ) : ( */}
              <>
                <TableHead>
                  <TableRow>
                    <TableCell>User Id</TableCell>
                    <TableCell align="left">
                      {common.TABLE_COLUMN.NAME}
                    </TableCell>
                    <TableCell align="left">
                      {common.TABLE_COLUMN.EMAIL}
                    </TableCell>
                    <TableCell align="left">
                      {common.TABLE_COLUMN.LOCATION}
                    </TableCell>
                    <TableCell align="center">
                      {common.TABLE_COLUMN.ACTION}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* {data?.data?.data?.map((row: IRowData) => (
                    <TableRow
                      key={row.id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                      onClick={() => setRowData(row)}
                    >
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">{row.email}</TableCell>
                      <TableCell align="left">{row.location}</TableCell>
                      <TableCell align="center">
                        <IconButton aria-label="Delete">
                          <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="Edit">
                          <ModeEditOutlineOutlinedIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))} */}
                </TableBody>
              </>
              {/* )} */}
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserListing;
