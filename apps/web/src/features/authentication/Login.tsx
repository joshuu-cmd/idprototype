


type LoginProps = {
  onLogin: (name: string) => void;
  onRegister: () => void;
};

function Login({ onLogin, onRegister }: LoginProps) {
  return (
    <div id="Login" className="auth-page">
      <form
        className="auth-form"
        onSubmit={(event) => {
          event.preventDefault();
          const name = new FormData(event.currentTarget).get("username");
          if (typeof name !== "string" || !name.trim()) {
            alert("Please enter your name.");
            return;
          }
          onLogin(name.trim());
        }}
      >
        <h2>Log In</h2>
        <label>Username or email:</label>
        <input name="username" required />
        <label>Password:</label>
        <input required type="password" />
        <button type="submit">Log in</button>
        <a>Forgot password</a>
        <p>
          Don&apos;t have an account yet?{" "}
          <span onClick={onRegister}>
            Register.
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;