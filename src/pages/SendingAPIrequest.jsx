import React, { useContext } from "react";
import DataContext from "../contexts/DataContext";

function SendingAPIrequest() {
  const {
    sendApiRequest,
    apiSyncResponse,
    apiAsyncResponse,
    checkStatus,
    checkStatusResponse,
  } = useContext(DataContext);
  return (
    <div className="processingingAPIrequest">
      <p>Note : max no of characters is 10</p>
      <br />
      <input id="apiInputText" type="text"></input>
      <button onClick={sendApiRequest}>Send</button>
      <br />
      <p>Sync Response is : {apiSyncResponse}</p>
      {/* <p>Async Response is : {apiAsyncResponse}</p> */}
      <br />
      <input id="checkStatusInput" type="text"></input>
      <button onClick={checkStatus}>Check Status</button>
      <br />
      <p>Response is : {checkStatusResponse}</p>
    </div>
  );
}
export default SendingAPIrequest;
