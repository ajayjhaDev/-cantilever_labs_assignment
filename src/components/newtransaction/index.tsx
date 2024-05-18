import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { IoIosAddCircle } from "react-icons/io";
import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

const App: React.FC = () => {
  return (
    <>
      <main className="d-flex">
        <div
          style={{
            width: "60%",
            border: "1px solid #f4f4f4",
            borderRadius: "20px",
            padding: "20px",
            boxShadow:
              "0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <div style={{ fontSize: "25px" }} className="mb-3">
            New transaction
          </div>
          <div>
            <Stack direction="row" spacing={2}>
              <div>
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/1.jpg"
                />
                <p>Ann</p>
              </div>

              <div>
                <Avatar
                  alt="Travis Howard"
                  src="https://mui.com/static/images/avatar/2.jpg"
                />
                John
              </div>

              <div>
                <Avatar
                  alt="Cindy Baker"
                  src="https://mui.com/static/images/avatar/3.jpg"
                />
                Mike
              </div>

              <div>
                <div style={{ position: "relative", left: "25px" }}>
                  <IoIosAddCircle fontSize={20} />
                </div>

                <div>Add New</div>
              </div>
            </Stack>
          </div>
          <div className="">
            <div>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Amount
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  label="Amount"
                />
              </FormControl>
            </div>
            <div>
              <button
                style={{
                  background: "#ffc145",
                  color: "black",
                  borderRadius: "20px",
                  border: "1px solid #ffc145",
                  padding: "15px",
                }}
                className="ms-2"
              >
                send the transfer
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "260px",
            width: "150px",
            background: "#e46149",
            borderRadius: "15px",
            color: "white",
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
            padding: "12px",
          }}
          className="ms-3"
        >
          <h3>Get greate loan!</h3>
        </div>
      </main>
    </>
  );
};

export default App;
