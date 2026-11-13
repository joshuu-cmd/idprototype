


type LoginProps ={
    onLogin: () => void;
}

function Login({ onLogin }: LoginProps){
    return (
        <div id="Login">
            <form
            onSubmit={(event) => {
                event.preventDefault();
                onLogin();
            }}
            >
                <h2>Log In</h2>
                <label id="username">Username or email:</label>
                <input required></input>
                <label>Password:</label>
                <input required type="password"></input>
                <button type="submit">Log in</button>
                <a>Forgot password</a>
                <p>Don't have an account yet? <span onClick={() => window.location.href = "/register"}>Register.</span></p>
            </form>
        </div>
    )
}
export default Login;