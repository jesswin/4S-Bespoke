import { color } from "@mui/system";

const Modal = (props) => {
  const showData = () => {
    let orders = [];
    for (let key in props.message) {
      orders.push(
        <p>
          {key}: {props.message[key]}
        </p>
      );
    }
    return orders;
  };

  return (
    <>
      <div
        style={{
          zIndex: 4,
          position: "fixed",
          height: "100vh",
          width: "100vw",
          top: 0,
          left: 0,
          bottom: 0,
          backgroundColor: "#13141bc2",
        }}
      ></div>
      <div
        style={{
          position: "fixed",
          zIndex: 5,
          top: "50%",
          right: "50%",
          height: "200px",
          width: "300px",
          transform: "translate(50%,-50%)",
          border: "1px solid",
          borderRadius: "20px",
          background: "white",
          textAlign: "left",
          overflow: "scroll",
          padding: "10px",
        }}
      >
        <p
          onClick={props.close}
          style={{ textAlign: "right", paddingRight: "5px", cursor: "pointer" }}
        >
          X
        </p>
        {showData()}
      </div>
    </>
  );
};

export default Modal;
