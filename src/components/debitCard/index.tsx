import ProgressBar from "react-bootstrap/ProgressBar";
import Switch from "@mui/material/Switch";

const App: React.FC = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <>
      <main
        style={{
          padding: "20px",
          border: "1px solid #f4f4f4",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "space-between",
          boxShadow:
            "0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <section style={{ width: "60%" }}>
          <div>
            <section
              style={{
                background: "#1f80c2",
                height: "260px",
                color: "white",
                padding: "12px",
                borderRadius: "30px",
              }}
            >
              <div
                style={{ position: "relative", left: "20px", bottom: "12px" }}
              >
                <p style={{ fontSize: "32px", color: "#e8eaed" }}>cloudcash</p>
                <p
                  style={{
                    fontSize: "8px",
                    color: "#e8eaed",
                    position: "relative",
                    bottom: "24px",
                  }}
                >
                  PREMIUM ACCOUNT
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "60%",
                  marginLeft: "20px",
                }}
              >
                <div>5789</div>
                <div>****</div>

                <div>****</div>

                <div>2847</div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "60%",
                  marginLeft: "20px",
                  marginTop: "20px",
                }}
              >
                <div>
                  <p>card holder</p>
                  <p>Mike Smith</p>
                </div>
                <div>
                  <p>Expire date</p>
                  <p>06/21</p>
                </div>
              </div>
            </section>
          </div>
          <div className="mt-4">
            <ProgressBar now={60} style={{ color: "red" }} />

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
              className="mt-4"
            >
              <h3 style={{ color: "#aeaeae" }}>Weekly payment limit</h3>

              <p style={{ position: "relative", top: "6px" }}>$350.60/$4000</p>
            </div>
          </div>
        </section>
        <div className="vl"></div>
        <section>
          <div>
            <h1 style={{ color: "#19b7dd" }}>$2850.75</h1>
            <p style={{ color: "#aeaeae" }}>Current balance</p>
          </div>
          <div>
            <h1 style={{ color: "#439a86" }}>$1850.75</h1>
            <p style={{ color: "#aeaeae" }}>Income</p>
          </div>
          <div>
            <h1 style={{ color: "#bb4330" }}>$850.75</h1>
            <p style={{ color: "#aeaeae" }}>Outcome</p>
          </div>
          <div>
            <div>
              {" "}
              <Switch {...label} disabled />
            </div>
            <div style={{ color: "#aeaeae" }}>Deacivate card</div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
