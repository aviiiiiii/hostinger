import { Navigate } from "react-router-dom";

function S3StaticWebpage() {
  return (
    // <Navigate to="http://sample-static-website-avi.s3-website.ap-south-1.amazonaws.com/" />
    <>
      <iframe
        src="http://sample-static-website-avi.s3-website.ap-south-1.amazonaws.com/"
        title="S3 static webpage"
      ></iframe>
    </>
  );
}

export default S3StaticWebpage;
