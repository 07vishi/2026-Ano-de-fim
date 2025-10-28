import React from "react";
import ReactDOM from "react-dom/client";

// Inline CSS for everything
const styles = {
  body: {
    margin: 0,
    padding: 0,
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    fontFamily: "'Arial', sans-serif",
  },
  handText: {
    fontFamily: "'Pacifico', cursive",
    fontSize: "4rem",
    color: "white",
    textShadow: "2px 2px 10px rgba(0,0,0,0.2)",
    animation: "bounce 1.5s infinite alternate",
  },
  // Keyframes for bounce animation
  styleTag: `
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

    @keyframes bounce {
      from { transform: translateY(0); }
      to { transform: translateY(-20px); }
    }
  `,
};

function App() {
  return (
    <div style={styles.body}>
      {/* Inject keyframes and font */}
      <style>{styles.styleTag}</style>
      <h1 style={styles.handText}>Hello World</h1>
    </div>
  );
}

// Render to root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
