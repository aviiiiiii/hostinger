import React, { useContext } from "react";
import DataContext from "../contexts/DataContext";

function AwsS3TextFile() {
  const { countries, getTextFile, addCountry } = useContext(DataContext);
  return (
    <div className="awsS3Container">
      <div className="getTextFile awsS3Child">
        <button onClick={getTextFile}>Get Text File from S3</button>
        <ul>
          {countries.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <div className="setTextFile awsS3Child">
        <input
          type="text"
          placeholder="Enter the country name"
          id="countryInput"
          required="required"
        />
        <br />
        <br />
        <button onClick={addCountry}>addCountry</button>
      </div>
    </div>
  );
}
export default AwsS3TextFile;
