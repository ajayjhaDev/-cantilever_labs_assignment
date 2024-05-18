import { useState } from "react";
import * as React from "react";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FiShoppingCart } from "react-icons/fi";
import { LuBus } from "react-icons/lu";
import { PiAirplaneTiltFill } from "react-icons/pi";

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const App: React.FC = () => {
  const [progress, setProgress] = useState(10);
  return (
    <>
      <main style={{ width: "90%" }}>
        <div>
          <div className="">
            <div>
              <FiShoppingCart color="#f8964c" fontSize={40} />
            </div>

            <div>
              <LinearProgressWithLabel value={60} color="info" />
            </div>
          </div>

          <p>Shopping</p>
        </div>

        <div>
          <PiAirplaneTiltFill color="#26a849" fontSize={40} />
          <LinearProgressWithLabel value={74} color="success" />
          <p>Travels</p>
        </div>
        <div>
          <LuBus color="#7066e8" fontSize={40} />
          <LinearProgressWithLabel value={21} color="primary" />
          <p>Electronics</p>
        </div>
      </main>
    </>
  );
};

export default App;
