import { Navigate } from "react-router-dom";

function S3StaticWebpage() {
  return (
    <Navigate to="http://sample-static-website-avi.s3-website.ap-south-1.amazonaws.com/" />
  );
}

export default S3StaticWebpage;
