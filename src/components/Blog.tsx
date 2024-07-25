import React from "react";
import aws_bedrock from "../assets/images/aws_bedrock.jpg";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";
import "../assets/styles/Project.scss";

function Blog() {
  return (
    <div className="projects-container" id="blog">
      <h1>Blog Posts</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://revapps.io/blog/aws_bedrock"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://revapps.io/blog/aws_bedrock"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Implementing ML-Driven Analyses with AWS Bedrock</h2>
          </a>
          <p>
            Add Generative AI to your application with the help of AWS CDK and
            AWS SDK - Halia Haynes
          </p>
        </div>
        <div className="project">
          <a
            href="https://revapps.io/blog/aws_ses"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock02} className="zoom" alt="thumbnail" width="100%" />
          </a>{" "}
          <a
            href="https://revapps.io/blog/aws_ses"
            target="_blank"
            rel="noreferrer"
          >
            <h2>
              Setting up AWS SES for an Auto Emailing Service: A Decoupled
              Event-Driven Approach
            </h2>
          </a>
          <p>
            Let's streamline email automation with a scalable TypeScript
            solution with AWS EventBridge - Halia Haynes
          </p>
        </div>
        <div className="project">
          <a
            href="https://revapps.io/blog/waf_free"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock03} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://revapps.io/blog/waf_free"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Using AWS WAF with Free AWS Managed Rule Groups</h2>
          </a>
          <p>
            Having a Web Access Firewall is critical for public facing APIs, and
            AWS offers managed rule groups at no extra cost. - Halia Haynes
          </p>
        </div>
        <div className="project">
          <a
            href="https://medium.com/@lash211/kubernetes-monitoring-with-anago-bdf6cd3b4c61"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock04} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://medium.com/@lash211/kubernetes-monitoring-with-anago-bdf6cd3b4c61"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Better Kubernetes Monitoring with Anago</h2>
          </a>
          <p>
            Learn about a richly featured, open-source tool designed to simplify
            and streamline the management of your DevOps team’s Kubernetes
            clusters
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
