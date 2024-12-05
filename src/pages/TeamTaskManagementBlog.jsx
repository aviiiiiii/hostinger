import React, { useContext } from "react";
import DataContext from "../contexts/DataContext";

function TeamTaskManagementBlog() {
  const {} = useContext(DataContext);
  return (
    <div>
        <div className="TeamTaskManagementBlogContent">
        <h1>Building a Task Management App Using AWS Services</h1>
        
        <p><strong>TeamTaskManagement</strong> is a web application for task management. The app combines a ReactJS frontend with a serverless backend powered by AWS. Here’s how it came together:</p>
        
        <h2>Frontend: ReactJS on Netlify</h2>
        <p>The frontend was built using <strong>ReactJS</strong>, a popular library for creating dynamic web applications. I chose <strong>Netlify</strong> to host the app due to its simplicity and powerful features, such as continuous deployment. The web app serves as the interface where users can manage their tasks seamlessly.</p>
        
        <h2>Backend: AWS-Powered Serverless Architecture</h2>
        <p>To handle the backend operations, I leveraged several AWS services. Here’s a breakdown:</p>
        
        <h3>1. API Gateway</h3>
        <ul>
            <li>API Gateway acts as the bridge between the frontend and backend.</li>
            <li>It efficiently routes user requests to the appropriate backend Lambda functions.</li>
        </ul>
        
        <h3>2. AWS Lambda Functions</h3>
        <ul>
            <li>I implemented three serverless Lambda functions for handling specific tasks:</li>
            <ul>
                <li><strong>Get Task</strong>: Fetches tasks from DynamoDB.</li>
                <li><strong>Update Task</strong>: Updates task details.</li>
                <li><strong>Delete Task</strong>: Deletes tasks from the database.</li>
            </ul>
            <li>These functions are event-driven, ensuring they run only when needed, which saves costs.</li>
        </ul>
        
        <h3>3. Amazon DynamoDB</h3>
        <ul>
            <li>For task storage, I used DynamoDB, a fully managed NoSQL database.</li>
            <li>It’s fast, reliable, and scales automatically to handle increasing data loads.</li>
        </ul>
        
        <h3>4. IAM Role</h3>
        <ul>
            <li>To ensure secure communication, Lambda functions were assigned an IAM Role with permissions to access DynamoDB.</li>
        </ul>
        
        <h2>Wrapping it Up</h2>
        <p>By combining ReactJS with AWS services like API Gateway, Lambda, and DynamoDB, I created a task management app that’s both scalable and easy to maintain. If you’re looking to build something similar, AWS’s serverless services are a game changer!</p>
        <img src={require("../images/AWS Flow Diagram/TaskManagement_flowDiagram.png")} />
        <br /><br />
        <a href="teamTaskManagement">Team Task Management Web Application</a>
    </div>
  </div>
  );
}
export default TeamTaskManagementBlog;
