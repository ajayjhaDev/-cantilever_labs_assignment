import { FaMountain } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { MdCleaningServices } from "react-icons/md";

const App: React.FC = () => {
  return (
    <>
      <main className="row gy-2 ">
        <div
          style={{
            border: "1px solid #f7f3f2",
            padding: "20px",
            borderRadius: "35px",
            width: "220px",
            boxShadow:
              "0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <div>
            <h1 style={{ color: "#696969" }}>$550</h1>
            <p style={{ color: "#aeaeae" }}>12/20/20</p>
          </div>
          <div>
            <FaMountain color="#71a5e8" fontSize={40} />
            <h4 style={{ color: "#404040" }}>Holidays</h4>
          </div>
        </div>

        <div
          style={{
            border: "1px solid #f7f3f2",
            padding: "20px",
            borderRadius: "35px",
            width: "220px",
            marginLeft: "20px",
            boxShadow:
              "0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <div>
            <h1 style={{ color: "#696969" }}>$550</h1>
            <p style={{ color: "#aeaeae" }}>12/20/20</p>
          </div>
          <div>
            <MdCleaningServices color="#f78e3f" fontSize={40} />
            <h4 style={{ color: "#404040" }}>Renovations</h4>
          </div>
        </div>

        <div
          style={{
            border: "1px solid #f7f3f2",
            padding: "20px",
            borderRadius: "35px",
            width: "220px",
            boxShadow:
              "0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19)",
          }}
          className="ms-3"
        >
          <div>
            <h1 style={{ color: "#696969" }}>$550</h1>
            <p style={{ color: "#aeaeae" }}>12/20/20</p>
          </div>
          <div>
            <IoGameController color="#209D43" fontSize={40} />
            <h4 style={{ color: "#404040" }}>Xbox</h4>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
