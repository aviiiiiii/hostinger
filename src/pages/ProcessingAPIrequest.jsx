import React, { useContext } from "react";
import DataContext from "../contexts/DataContext";

function ProcessingAPIrequest() {
  const { processApiRequest, processApiResponse } = useContext(DataContext);
  return (
    <div className="processingingAPIrequest">
      <label htmlFor="processName">
        Name : <input type="text" id="processName" />
      </label>
      <br />
      <br />
      <label htmlFor="processId">
        Id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
        <input type="text" id="processId" />
      </label>
      <br />
      <br />
      <button onClick={processApiRequest}>Process</button>
      <p>{processApiResponse}</p>
    </div>
  );
}
export default ProcessingAPIrequest;
