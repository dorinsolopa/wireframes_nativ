import React from "react";

function CleanHospital(props) {
  const { title, info } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{info}</p>
    </div>
  );
}
export default CleanHospital;
