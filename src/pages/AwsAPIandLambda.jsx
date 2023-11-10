import React, { useContext } from "react";
import DataContext from "../contexts/DataContext";

function AwsAPIandLambda() {
  const { imageURL, setImageURL, searchImage } = useContext(DataContext);
  return (
    <div className="awsAPIandLambda">
      <button className="getnewId" onClick={searchImage}>
        Get the new image url from lambda
      </button>
      <br />
      <img src={imageURL} />
    </div>
  );
}
export default AwsAPIandLambda;
