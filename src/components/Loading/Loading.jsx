import Spinner from "react-bootstrap/Spinner";
export const Loading = () => {
  return (
    <div style={{ position: "relative" }}>
      <Spinner
        animation="border"
        role="status"
        variant="danger"
        style={{
          position: "absolute",
          inset: "350px",
          margin: "auto",
        }}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};
