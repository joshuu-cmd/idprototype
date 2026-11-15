type RegisterProps = {
  onLogin: () => void;
};

function Register({ onLogin }: RegisterProps) {
  return (
    <div id="Register" className="auth-page">
      <form
        className="auth-form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <h2>Register</h2>
        <label id="username">Username:</label>
        <input required type="text" />
        <label id="email">Email:</label>
        <input required type="email" />
        <label>Password</label>
        <input required type="password" />
        <label>Confirm Password</label>
        <input required type="password" />
        <button type="submit">Register</button>
        <p>
          Already have an account?{" "}
          <a
            href="/login"
            onClick={(event) => {
              event.preventDefault();
              onLogin();
            }}
          >
            Login
          </a>
        </p>
      </form>
    </div>
  );
}

export default Register;
