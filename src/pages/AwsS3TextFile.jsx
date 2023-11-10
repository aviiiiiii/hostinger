import React, { useContext } from "react";
import DataContext from "../contexts/DataContext";

function AwsS3TextFile() {
  const { countries, getTextFile, addCountry } = useContext(DataContext);
  return (
    <div>
      <div className="awsS3TextFile">
        <button className="getTextFile" onClick={getTextFile}>
          Get Text File from S3
        </button>
        <div>{countries}</div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter the country name"
          id="countryInput"
          required="required"
        />
        <button onClick={addCountry}>addCountry</button>
      </div>
    </div>
  );
}
export default AwsS3TextFile;
