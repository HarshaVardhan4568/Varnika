function Hero() {
    return (
      <div
        style={{
          backgroundColor: "#450719ff", // exact wine color
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "10px" }}>
          Elevate Your Style
        </h1>
  
        <p style={{ marginBottom: "20px" }}>
          Discover handcrafted elegance with Varnika
        </p>
  
        <button
          onClick={() => {
            document
              .getElementById("collection")
              .scrollIntoView({ behavior: "smooth" });
          }}
          style={{
            backgroundColor: "white",
            color: "#7B1E3A",
            padding: "12px 24px",
            borderRadius: "8px",
            fontWeight: "600",
            border: "none",
            cursor: "pointer",
          }}
        >
          Explore Collection
        </button>
      </div>
    );
  }
  
  export default Hero;