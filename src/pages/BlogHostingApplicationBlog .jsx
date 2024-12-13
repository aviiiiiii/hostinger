
function BlogHostingApplicationBlog() {
    return (
        <div>
            <div class="BlogHostingAppcontainer">
                <header class="main-header">
                    <h1>Scalable Blog Hosting Platform</h1>
                    <p>An AWS-Powered Architecture for Scalable Blog Management</p>
                </header>
                <main>
                    <section>
                        <h2>Frontend</h2>
                        <p>The platform's frontend is built with <strong>ReactJS</strong> and offers a dynamic user experience. The React files are stored in an <strong>Amazon S3 bucket</strong>, and the application is hosted using <strong>AWS Amplify</strong>, ensuring efficient CI/CD deployment and scalability.</p>
                    </section>

                    <section>
                        <h2>Backend</h2>

                        <div class="subsection">
                            <h3>User Authentication</h3>
                            <p><strong>Amazon Cognito</strong> manages secure user authentication with email and password functionality, ensuring that only authorized users can access the platform.</p>
                        </div>

                        <div class="subsection">
                            <h3>ExpressJS Backend on EC2 Instances</h3>
                            <p>The backend is written in <strong>ExpressJS</strong>, deployed on <strong>EC2 instances</strong>, and optimized for high availability using an <strong>Application Load Balancer</strong> and <strong>Auto Scaling Groups</strong>. This setup ensures traffic is distributed across two availability zones for maximum fault tolerance and scalability.</p>
                        </div>

                        <div class="subsection">
                            <h3>Amazon DynamoDB</h3>
                            <p>Blog data is stored in a <strong>NoSQL DynamoDB table</strong> called <strong>BlogsTable</strong>. The table securely stores post details and ensures that users can only delete posts they created.</p>
                        </div>

                        <div class="subsection">
                            <h3>Blog Management Features</h3>
                            <ul>
                                <li>View all posts from other users.</li>
                                <li>Create and publish new posts.</li>
                                <li>View and manage personal posts.</li>
                                <li>Delete only your own posts.</li>
                            </ul>
                        </div>

                        <div class="subsection">
                            <h3>Access Management</h3>
                            <p>Using <strong>EC2 Instance Profiles</strong>, backend services securely interact with DynamoDB. This ensures that only the required actions can be performed, maintaining data security and integrity.</p>
                        </div>
                    </section>

                    <section>
                        <h2>Conclusion</h2>
                        <p>By combining <strong>ReactJS</strong>, <strong>AWS Amplify</strong>, <strong>Cognito</strong>, <strong>DynamoDB</strong>, and scalable <strong>EC2 instances</strong>, this platform offers a secure, robust, and scalable solution for hosting blogs. AWS’s seamless integration ensures high availability and a smooth user experience for both bloggers and administrators.</p>
                    </section>
                </main>
                <div className="TeamTaskManagementBlogContent">
                    <img src={require("../images/AWS Flow Diagram/Blog_FlowDiagram.png")} alt="flowDiagram"/>
                    <br /><br />
                    <a href="https://blog.dq4of6kvcasos.amplifyapp.com/">Blog Hosting Application</a>
                </div>
            </div>

        </div>
    );
}
export default BlogHostingApplicationBlog;
