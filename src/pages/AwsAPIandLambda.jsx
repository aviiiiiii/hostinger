import React, { useContext } from "react";
import DataContext from "../contexts/DataContext";

let a = "hello";

function AwsAPIandLambda() {
  const { imageURL, setImageURL, searchImage } = useContext(DataContext);
  return (
    <div className="awsAPIandLambda">
      <button className="getnewId" onClick={searchImage}>
        Get the new image url from lambda
      </button>
      <br />
      <img src={imageURL} />
      {/* <div>{imageURL}</div> */}
    </div>
  );
}
export default AwsAPIandLambda;
