import React, { useContext } from "react";
import DataContext from "../contexts/DataContext";

function AwsS3TextFile() {
  const { countries, getTextFile, addCountry, deleteCountry } =
    useContext(DataContext);
  return (
    <div className="awsS3Container">
      <div className="getTextFile awsS3Child">
        <button onClick={getTextFile}>Get Text File from S3</button>
        <span> Updation will take few minutes to reflect</span>
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
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter the country name"
          id="countryInputDelete"
          required="required"
        />
        <br />
        <br />
        <button onClick={deleteCountry}>deleteCountry</button>
      </div>
    </div>
  );
}
export default AwsS3TextFile;
