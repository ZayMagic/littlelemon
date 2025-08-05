import React from 'react';

const Login = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Welcome Back</h2>
            <form style={styles.form}>
                <input
                    type="text"
                    placeholder="Username"
                    style={styles.input}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    style={styles.input}
                    required
                />
                <button type="submit" style={styles.button}>
                    Log In
                </button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '400px',
        margin: 'auto',
        marginTop: '5rem',
        padding: '2rem',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        borderRadius: '10px',
        backgroundColor: '#fff',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '1.5rem',
        fontSize: '1.8rem',
        color: '#333',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        padding: '0.75rem',
        marginBottom: '1rem',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '1rem',
    },
    button: {
        padding: '0.75rem',
        backgroundColor: '#495E57',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        fontSize: '1rem',
        cursor: 'pointer',
    },
};

export default Login;
