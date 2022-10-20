import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "1000px",
        display: "flex",
        justifyContent: "center",
        paddingTop: "20px",
      }}
    >
      <TailSpin height="100" width="100" color="grey" arialabel="loading" />
    </div>
  );
};

export default Loader;
