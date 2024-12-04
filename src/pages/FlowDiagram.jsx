import React, { useContext } from "react";
import DataContext from "../contexts/DataContext";

function FlowDiagram() {
  const {} = useContext(DataContext);
  return (
    <div>
        <img src={require("../images/AWS Flow Diagram/TaskManagement_flowDiagram.png")} />
    </div>
  );
}
export default FlowDiagram;
