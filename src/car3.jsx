import React from "react";
import CarDetails from "./CarDetails";
 // Import child component

function Car3(props) {
    const styles = {
        card: {
            backgroundColor: "#ffffff",
            width: "300px",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
            textAlign: "center",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
        },
        title: {
            color: "#1976d2",
            fontSize: "1.3rem",
            marginBottom: "15px",
            fontWeight: "600",
        },
        button: {
            backgroundColor: "#1976d2",
            color: "white",
            border: "none",
            padding: "10px 15px",
            borderRadius: "8px",
            margin: "5px",
            cursor: "pointer",
            fontWeight: "500",
            transition: "background-color 0.3s ease, transform 0.2s ease",
        },
        buttonHover: {
            backgroundColor: "#0d47a1",
            transform: "scale(1.05)",
        },
    };

    // Reusable button component with hover effect
    const StyledButton = ({ label }) => {
        const [hover, setHover] = React.useState(false);
        return (
            <button
                style={{
                    ...styles.button,
                    ...(hover ? styles.buttonHover : {}),
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {label}
            </button>
        );
    };

    return (
        <>
            {/* Car3 Component Card */}
            <div
                style={styles.card}
                onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                        "0 10px 25px rgba(0,0,0,0.2)")
                }
                onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow =
                        "0 6px 15px rgba(0,0,0,0.1)")
                }
            >
                <h2 style={styles.title}>
                    🚘 {props.brand} - {props.color} {props.example}
                </h2>

                {/* Buttons Section */}
                <StyledButton label="Submit" />
                <StyledButton label="Click" />
                <StyledButton label="Check" />

                {/* Child Component */}
                <CarDetails
                    brand={props.brand}
                    price={props.price}
                    fuelType={props.fuelType}
                />
            </div>
        </>
    );
}

export default Car3;
