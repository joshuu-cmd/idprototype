


function Register() {
    return (
        <div id="Register" className="auth-page">
            <form
            className="auth-form"
            onSubmit={(event) => {
                event.preventDefault;
            }}
            >
                <h2>Register</h2>
                <label id="username">Username:</label>
                <input required type="name"></input>
                <label id="email">Email:</label>
                <input required type="email"></input>
                <label>Password</label>
                <input required type="password"></input>
                <label>Confirm Password</label>
                <input required type="password"></input>
                <button type="submit">Register</button>
                <p>Already have an account? <a href="/login">Login</a></p>
            </form>
        </div>
    )
}
export default Register;