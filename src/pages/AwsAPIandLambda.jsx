import React, { useContext } from "react";
import DataContext from "../contexts/DataContext";

let a = "hello";

function AwsAPIandLambda() {
  const { imageURL, setImageURL, searchImage } = useContext(DataContext);
  return (
    <div className="awsAPIandLambda">
      <button className="getnewId" onClick={searchImage}>
        close
      </button>
      {/* <img src={imageURL} /> */}
    </div>
  );
}
export default AwsAPIandLambda;
