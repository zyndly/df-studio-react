import React from 'react';

function AuthForms({ handleLogin, handleRegister }) {
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    handleRegister();
  };

  return (
    <div className="auth-forms" id="auth-forms">
      <h2>Log In</h2>
      <form id="login-form" onSubmit={handleLoginSubmit}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Log In</button>
      </form>
      <hr />
      <h2>Register</h2>
      <form id="register-form" onSubmit={handleRegisterSubmit}>
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Name" required />
        <input type="password" placeholder="Password" required />
        <label htmlFor="gender">Gender:</label>
        <div className="gender-selection">
          <input type="radio" id="male" name="gender" value="male" required />
          <label htmlFor="male">Male</label>
          <input type="radio" id="female" name="gender" value="female" required />
          <label htmlFor="female">Female</label>
          <input type="radio" id="pnf" name="gender" value="pnf" required />
          <label htmlFor="pnf">Prefer not to say</label>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default AuthForms;