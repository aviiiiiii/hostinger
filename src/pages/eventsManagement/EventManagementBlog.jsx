import React, { useContext } from "react";

function EventManagementBlog() {
    return (
        <div>
            <div className="TeamTaskManagementBlogContent">
                <h1>Event Management Web Application with AWS Backend</h1>
                <p>I implemented an event management web application, <strong>Events Management</strong>, with a ReactJS frontend and a robust AWS-powered backend.</p>

                <h2>Frontend:</h2>
                <p>The frontend was built using <strong>ReactJS</strong>, a popular library for creating dynamic web applications. I chose <strong>Netlify</strong> to host the app due to its simplicity and powerful features.</p>
                <p>It contains four pages:</p>
                <ul>
                    <li><strong>HomePage</strong>: Introductory page for the app.</li>
                    <li><strong>EventsPage</strong>: Displays events and enables user registration.</li>
                    <li><strong>FeedbackPage</strong>: Allows users to submit ratings and feedback for attended events.</li>
                    <li><strong>AdminPage</strong>: Restricted to admins for managing events, attendees, and feedback using secure login via Cognito.</li>
                </ul>

                <h2>Backend:</h2>
                <h4>1. Amazon API Gateway:</h4>
                <p>API Gateway acts as the bridge between the frontend and backend. It efficiently routes user requests to the appropriate backend Lambda functions.</p>

                <h4>2. AWS Lambda Functions:</h4>
                <p>Functions handle the following operations:</p>
                <ul>
                    <li>Create, fetch, and delete events.</li>
                    <li>Post and fetch feedback.</li>
                    <li>Register and fetch attendees.</li>
                </ul>
                <p>These functions are event-driven, ensuring they run only when needed, which saves costs.</p>

                <h4>3. Amazon DynamoDB:</h4>
                <p>DynamoDB is a fully managed NoSQL database that’s fast, reliable, and scales automatically to handle increasing data loads. It stores data in three tables:</p>
                <ul>
                    <li><strong>EventsTable</strong> for event details.</li>
                    <li><strong>AttendeesTable</strong> for registration data.</li>
                    <li><strong>FeedbackTable</strong> for storing user feedback.</li>
                </ul>

                <h4>4. AWS Cognito:</h4>
                <p>Cognito secures the admin login with email and password authentication. It also supports scalable user management for multiple admin accounts.</p>

                <h4>5. IAM Role:</h4>
                <p>Manages secure access for Lambda functions to interact with DynamoDB, ensuring that permissions are limited to necessary actions.</p>

                <h2>Wrapping it Up:</h2>
                <p>By combining a ReactJS frontend with AWS services like API Gateway, Lambda, DynamoDB, and Cognito, I created a serverless, scalable, and secure solution for managing events. AWS’s seamless integration makes it an excellent choice for building modern applications.</p>
                <img src={require("../../images/AWS Flow Diagram/EventManagement_FlowDiagram.png")} />
                <br /><br />
                <a href="eventsManagement">Event Management Web Application</a>
            </div>
        </div>
    );
}
export default EventManagementBlog;
