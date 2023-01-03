import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button, CircularProgress, Container, Grid } from "@mui/material";
import useAuth from "../hook/useAuth";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import UpdateRent from "../UpdateRent/UpdateRent";
import { useHistory } from "react-router-dom";
function Row({ row, deletePost, setUpdated }) {
  const { name, url, price, location, _id, areas, description, payment } = row;
  const [open, setOpen] = React.useState(false);
  const reserve = "https://i.ibb.co/1zbBh1f/pngwing-com-1.png";
  const [openSnack, setOpenSnack] = React.useState(false);
  const [openM, setOpenM] = React.useState(false);
  const history = useHistory();
  const handleOpenM = () => setOpenM(true);
  const handleCloseM = () => setOpenM(false);
  const handleClick = () => {
    setOpenSnack(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };
  const handlePay = (id) => {
    history.push(`/dashboard/payment/${id}`);
  };
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ color: "gray" }} component="th" scope="row">
          <img
            width="100px"
            height='70px'
            src={url || reserve}
            alt="house picture"
          />
        </TableCell>
        <TableCell sx={{ color: "gray" }} component="th" scope="row">
          {name}
        </TableCell>
        <TableCell sx={{ color: "gray" }} align="right">
          {location}({areas})
        </TableCell>
        <TableCell sx={{ color: "gray" }} align="right">
          {description.slice(0, 50)}
        </TableCell>
        <TableCell sx={{ color: "gray" }} align="right">
          {price}/-
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          sx={{ backgroundColor: "#ebfcff" }}
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1, textAlign: "center" }}>
              <Grid container spacing={5}>
                <Grid item xs={4} md={4} sm={4}>
                  <Button
                    onClick={handleOpenM}
                    variant="contained"
                    color="success"
                  >
                    Update
                  </Button>
                  <UpdateRent
                    open={openM}
                    handleClose={handleCloseM}
                    id={_id}
                    setUpdated={setUpdated}
                  ></UpdateRent>
                </Grid>
                <Grid item xs={4} md={4} sm={4}>
                  <Button
                    onClick={() => {
                      deletePost(_id);
                      handleClick();
                    }}
                    variant="outlined"
                    color="error"
                  >
                    Delete
                  </Button>
                  <Snackbar
                    open={openSnack}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="Post Deleted"
                    action={action}
                  />
                </Grid>
                <Grid item xs={4} md={4} sm={4}>
                  {payment ? <Button
                    disabled={true}
                    variant="contained"
                  >
                    Paid
                  </Button> :
                    <Button
                      onClick={() => {
                        handlePay(_id);
                      }}
                      variant="contained"
                    >
                      Pay
                    </Button>
                  }
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const TableDashboard = () => {
  const { user, token } = useAuth();
  const [booking, setBooking] = React.useState([]);
  const [load, setLoad] = React.useState(true);
  const [updated, setUpdated] = React.useState(true);
  React.useEffect(() => {
    fetch(`https://we-hire-database.onrender.com/mypost?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBooking(data);
        setLoad(false);
      });
    console.log("Updated", updated);
  }, [updated]);
  const deletePost = (id) => {
    fetch(`https://we-hire-database.onrender.com/details/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          const remaining = booking.filter((service) => service._id !== id);
          setBooking(remaining);
        }, 2000);
      });
  };
  return (
    <div>
      <Container>
        <Typography
          variant="h4"
          className="shadow-lg bg-white py-2"
          sx={{ mb: 7, color: "#2b7377", fontWeight: "bold" }}
        >
          Your Posts
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell></TableCell>
                <TableCell>Post Name</TableCell>
                <TableCell align="right">Location</TableCell>
                <TableCell align="center">Details</TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {load ? (
                <CircularProgress className="mx-auto" />
              ) : booking[0] ? (
                booking.map((row) => (
                  <Row
                    key={row._id}
                    setUpdated={setUpdated}
                    deletePost={deletePost}
                    row={row}
                  />
                ))
              ) : (

                <Typography variant="h4" sx={{ textAlign: "right", color: 'gray', py: 2 }}>
                  No Post Yet
                </Typography>


              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default TableDashboard;
