import React from "react";

const Order = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Ready to Taste Something Amazing?</h2>
            <button style={styles.button}>Place Your Order</button>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '6rem',
        padding: '2rem',
    },
    heading: {
        fontSize: '2rem',
        marginBottom: '1.5rem',
        color: '#333',
    },
    button: {
        padding: '1rem 2rem',
        fontSize: '1.2rem',
        backgroundColor: '#f4ce14',
        color: '#000',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
    },
};

export default Order;
