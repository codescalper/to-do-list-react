import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer
      className="App-footer"
      style={{
        background: "#000000",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        borderTop: "1px solid #ffffff",
        boxShadow: "0 -10px 20px 0 rgba(255, 255, 255, 0.1)"
      }}
    >
      <div
        className="footer-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "300px"
        }}
      >
        <a
          href="https://github.com/codescalper"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fab fa-github"
            style={{
              fontSize: "24px",
              color: "#ffffff",
              transition: "color 0.3s"
            }}
          ></i>
        </a>
        <a
          href="https://www.youtube.com/@mhtcetshalamayanksingh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fab fa-youtube"
            style={{
              fontSize: "24px",
              color: "#ffffff",
              transition: "color 0.3s"
            }}
          ></i>
        </a>
        <a
          href="https://www.linkedin.com/in/mayank-singh-613a41183/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fab fa-linkedin"
            style={{
              fontSize: "24px",
              color: "#ffffff",
              transition: "color 0.3s"
            }}
          ></i>
        </a>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          <i
            className="fas fa-globe"
            style={{
              fontSize: "24px",
              color: "#ffffff",
              transition: "color 0.3s"
            }}
          ></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
