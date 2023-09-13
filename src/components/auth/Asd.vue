<template>
    <div class="login-container">
      <div class="login-card">
        <h2>Login</h2>
        <form>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div> 
          <div class="form-group">
            <button type="submit">Login ></button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <style scoped>
    .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    }
  
  .login-card {
    border-radius: 5px;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
    padding: 20px;
    max-width: 400px;
    width: 100%;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type='email'],
  input[type='password'] {
    padding: 10px;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
    width: 100%;
  }
  
  button[type='submit'] {
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    width: 100%;
  }
  </style>
  