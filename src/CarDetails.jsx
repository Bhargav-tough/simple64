import React from "react";

function CarDetails({ brand, price, fuelType }) {
    const styles = {
        box: {
            backgroundColor: "#e3f2fd",
            padding: "15px",
            borderRadius: "10px",
            marginTop: "15px",
            textAlign: "left",
            fontFamily: "Arial, sans-serif",
            lineHeight: "1.6",
            boxShadow: "inset 0 0 5px rgba(0,0,0,0.1)",
        },
        detail: {
            fontSize: "1rem",
            color: "#0d47a1",
        },
        label: {
            fontWeight: "bold",
            color: "#1a237e",
        },
    };

    return (
        <>
            {/* CarDetails Component */}
            <div style={styles.box}>
                <p style={styles.detail}>
                    <span style={styles.label}>Brand:</span> {brand}
                </p>
                <p style={styles.detail}>
                    <span style={styles.label}>Price:</span> ₹{price}
                </p>
                <p style={styles.detail}>
                    <span style={styles.label}>Fuel Type:</span> {fuelType}
                </p>
            </div>
        </>
    );
}

export default CarDetails;
