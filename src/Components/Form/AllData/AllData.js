import Grid from "@mui/material/Grid";
import { useEffect, useRef, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, positions } from "@mui/system";
import TextField from "@mui/material/TextField";
import Modal from "../Modal/Modal";

const AllData = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showTable, setShowTable] = useState([]);
  const [filterTable, setFilteredTable] = useState([]);

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState({});

  let table = [];

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        let res = await fetch(
          "https://sbespoke-48c4a-default-rtdb.firebaseio.com/orders.json"
        );
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        let dataFromAPI = await res.json();
        setData(dataFromAPI);
        setIsLoading(false);
        simplifyData(dataFromAPI);
      } catch (err) {
        setIsLoading(false);
        alert(err.message);
      }
    }
    getData();
  }, []);

  const showModalData = (obj) => {
    setModalText(obj);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const onChangeHandler = (e) => {
    let filteredTable = [];
    setSearch(e.target.value);
    for (let [key, val] of Object.entries(data)) {
      let values = Object.values(val);
      if (
        values[0].custInfo.Name.toLowerCase().includes(
          e.target.value.toLowerCase()
        )
      ) {
        filteredTable.push(
          <div onClick={() => showModalData(values[0].prodInfo)}>
            <Box
              sx={{
                m: 2,
                p: 3,
                flexGrow: 1,
                border: "1px solid grey",
                cursor: "pointer",
              }}
            >
              <Grid container spacing={1}>
                <Grid key={1} item xs={3}>
                  {key}
                </Grid>
                <Grid
                  key={2}
                  item
                  xs={3}
                  sx={{
                    width: "200px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {values[0].custInfo.Name}
                </Grid>
                <Grid
                  key={3}
                  item
                  xs={3}
                  sx={{
                    width: "200px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {values[0].custInfo["E-mail"]}
                </Grid>
                <Grid
                  key={4}
                  item
                  xs={3}
                  sx={{
                    width: "200px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {values[0].custInfo.Address}
                </Grid>
              </Grid>
            </Box>
          </div>
        );
      }
    }
    console.log(filteredTable);
    setFilteredTable([...filteredTable]);
  };

  const simplifyData = (dataFromAPI) => {
    for (let [key, val] of Object.entries(dataFromAPI)) {
      let values = Object.values(val);

      table.push(
        <div onClick={() => showModalData(values[0].prodInfo)}>
          <Box
            sx={{
              m: 2,
              p: 3,
              flexGrow: 1,
              border: "1px solid grey",
              cursor: "pointer",
            }}
          >
            <Grid container spacing={1}>
              <Grid key={1} item xs={3}>
                {key}
              </Grid>
              <Grid
                key={2}
                item
                xs={3}
                sx={{
                  width: "200px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {values[0].custInfo.Name}
              </Grid>
              <Grid
                key={3}
                item
                xs={3}
                sx={{
                  width: "200px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {values[0].custInfo["E-mail"]}
              </Grid>
              <Grid
                key={4}
                item
                xs={3}
                sx={{
                  width: "200px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {values[0].custInfo.Address}
              </Grid>
            </Grid>
          </Box>
        </div>
      );
    }
    setShowTable([...table]);
  };

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <Grid container spacing={3}>
            <Grid item xs={2}>
              <TextField
                required
                id="outlined-basic"
                label="Search"
                variant="outlined"
                value={search}
                onChange={onChangeHandler}
              />
            </Grid>
          </Grid>
          <Box
            sx={{
              m: 2,
              flexGrow: 1,
            }}
          >
            <Grid container spacing={1}>
              <Grid key={1} item xs={3}>
                Order Number
              </Grid>
              <Grid key={2} item xs={3}>
                Name
              </Grid>
              <Grid key={3} item xs={3}>
                Email
              </Grid>
              <Grid key={4} item xs={3}>
                Address
              </Grid>
            </Grid>
          </Box>
          {data && filterTable.length > 0 && filterTable}
          {data && filterTable.length === 0 && showTable}
        </>
      )}
      {showModal && <Modal message={modalText} close={closeModal} />}
    </>
  );
};
export default AllData;
