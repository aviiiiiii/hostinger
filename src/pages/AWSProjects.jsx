import 'bootstrap/dist/css/bootstrap.min.css';

function AWSProjects() {

  return (
    <div className="Homepage">
      <p className="Homepage-title">AWS Projects</p>
          <ul className="Homepage-items">
            <li>
              {" "}
              <a href="/teamTaskManagementBlog">Team Task Management</a>
            </li>
            <li>
              {" "}
              <a href="/eventsManagementBlog">Events Management</a>
            </li>
            <li>
              {" "}
              <a href="/blogHostingAppBlog">Blog Hosting Application</a>
            </li>
          </ul>
      </div>
  );
}

export default AWSProjects;
