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
  Pagination,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import common from "./userConstant.json";
import axios from "utils/AxiosInterceptor";
import { useQuery } from "react-query";
import { FC, useState } from "react";
import { IRowData } from "./interface.types";

const UserListing: FC = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [rowData, setRowData] = useState<IRowData>({});

  console.log("rowData =>", rowData);
  
  const fetchUsers = (pageNum: number) => {
    const url = pageNum
      ? `${common?.GET_USERS}?page=${pageNum}`
      : `${common?.GET_USERS}`;
    return axios.get(url);
  };

  const { isLoading, data } = useQuery(["Get-User", pageNumber], () =>
    fetchUsers(pageNumber)
  );

  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setPageNumber(page);
  };

  return (
    <div>
      <Grid container sx={{ display: "flex", flexDirection: "column" }}>
        <Grid item xs={12}>
          <Button variant="contained">{`${common.ADD} new ${common.USER}`}</Button>
        </Grid>

        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              {isLoading ? (
                <Box sx={{ width: "100%" }}>
                  {" "}
                  <Skeleton />
                  <Skeleton animation="wave" />
                  <Skeleton animation={false} />
                </Box>
              ) : (
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
                    {data?.data?.data?.map((row: any) => (
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
                    ))}
                  </TableBody>
                </>
              )}
            </Table>
          </TableContainer>
        </Grid>

        <Grid item xs={12}>
          <Pagination
            showFirstButton
            showLastButton
            count={data?.data?.total_pages}
            onChange={handlePaginationChange}
            variant="outlined"
            color="primary"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default UserListing;
