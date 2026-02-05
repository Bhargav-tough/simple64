import React from "react";
import Car3 from "./Car3";

function App() {
    // Page-level styling
    const styles = {
        appContainer: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            minHeight: "100vh",
            background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
            padding: "40px",
        },
        heading: {
            textAlign: "center",
            width: "100%",
            fontSize: "2rem",
            color: "#0d47a1",
            marginBottom: "20px",
        },
    };

    return (
        <>
            {/* App Component */}
            <div style={styles.appContainer}>
                <h1 style={styles.heading}>🚗 Car Showcase App</h1>

                {/* Car3 Components */}
                <Car3
                    color="Red"
                    example=" Sports Edition"
                    brand="Ferrari"
                    price="2,50,00,000"
                    fuelType="Petrol"
                />

                <Car3
                    color="Blue"
                    example=" Family Car"
                    brand="Toyota Innova"
                    price="22,00,000"
                    fuelType="Diesel"
                />

                <Car3
                    color="Black"
                    example=" Luxury Model"
                    brand="BMW X7"
                    price="1,30,00,000"
                    fuelType="Hybrid"
                />
            </div>
        </>
    );
}

export default App;
