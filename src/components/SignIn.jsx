

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './SignIn.scss';

const SignIn = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Username validation for signup
    if (isSignUp && !formData.username) {
      newErrors.username = 'Username is required';
    } else if (isSignUp && formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters long';
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    // Confirm password validation for signup
    if (isSignUp && !formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (isSignUp && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = async () => {
    console.log('=== SIGNUP PROCESS STARTED ===');
    
    // Get existing users
    const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    console.log('Current registered users:', existingUsers);
    
    // Check if user already exists
    const userExists = existingUsers.some(user => 
      user.email === formData.email || user.username === formData.username
    );
    
    if (userExists) {
      console.log('User already exists!');
      setErrors({ submit: 'User with this email or username already exists' });
      return false;
    }
    
    // Create new user
    const newUser = {
      id: Date.now(), // Simple ID generation
      username: formData.username,
      email: formData.email,
      password: formData.password,
      createdAt: new Date().toISOString()
    };
    
    // Add to registered users
    existingUsers.push(newUser);
    localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));
    
    console.log('New user created:', newUser);
    console.log('Updated users list:', existingUsers);
    
    alert('🎉 Account created successfully! You can now sign in.');
    
    // Switch to sign-in mode
    setIsSignUp(false);
    setFormData({
      username: '',
      email: formData.email, // Keep email for convenience
      password: '',
      confirmPassword: ''
    });
    
    return true;
  };

  const handleSignIn = async () => {
    console.log('=== SIGNIN PROCESS STARTED ===');
    
    // Get existing users
    const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    console.log('Looking for user in:', existingUsers);
    console.log('Trying to match:', { email: formData.email, password: formData.password });
    
    // Check if there are any registered users
    if (existingUsers.length === 0) {
      console.log('❌ No users found in database');
      setErrors({ submit: 'No registered users found. Please sign up first.' });
      return false;
    }
    
    // Find matching user
    const matchingUser = existingUsers.find(user => {
      const emailMatch = user.email === formData.email;
      const passwordMatch = user.password === formData.password;
      console.log(`Checking user ${user.email}: email=${emailMatch}, password=${passwordMatch}`);
      return emailMatch && passwordMatch;
    });
    
    if (!matchingUser) {
      console.log('❌ No matching user found');
      setErrors({ submit: 'Invalid email or password. Please check your credentials.' });
      return false;
    }
    
    console.log('✅ User authenticated successfully:', matchingUser.username);
    
    // Store current user session
    localStorage.setItem('currentUser', JSON.stringify({
      username: matchingUser.username,
      email: matchingUser.email,
      loginTime: new Date().toISOString()
    }));
    
    alert(`🎉 Welcome back, ${matchingUser.username}!`);
    navigate('/dashboard');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted, mode:', isSignUp ? 'SIGNUP' : 'SIGNIN');
    
    // Clear previous errors
    setErrors({});
    
    // Validate form
    if (!validateForm()) {
      console.log('Form validation failed');
      return;
    }

    setIsLoading(true);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    let success = false;
    
    if (isSignUp) {
      success = await handleSignUp();
    } else {
      success = await handleSignIn();
    }
    
    setIsLoading(false);
    console.log('Process completed, success:', success);
  };

  const toggleMode = () => {
    console.log('Switching mode from', isSignUp ? 'SIGNUP' : 'SIGNIN', 'to', !isSignUp ? 'SIGNUP' : 'SIGNIN');
    setIsSignUp(!isSignUp);
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    setErrors({});
  };

  return (
    <div className="signin-container">
      <div className="signin-wrapper">
        <div className="signin-header">
          <button className="back-btn" onClick={() => navigate('/')}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Home
          </button>
          <div className="logo">
            <h2>CarRental</h2>
          </div>
        </div>

        <div className="signin-form-container">
          <div className="signin-form-wrapper">
            <div className="form-header">
              <h1>{isSignUp ? 'Create Account' : 'Welcome Back'}</h1>
              <p>{isSignUp ? 'Sign up for a new account' : 'Sign in to your account to continue'}</p>
            </div>

            <form className="signin-form" onSubmit={handleSubmit}>
              {/* Username field - only show during signup */}
              {isSignUp && (
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Choose a username"
                    className={errors.username ? 'error' : ''}
                  />
                  {errors.username && <span className="error-message">{errors.username}</span>}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder={isSignUp ? "Create a password" : "Enter your password"}
                  className={errors.password ? 'error' : ''}
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>

              {/* Confirm password field - only show during signup */}
              {isSignUp && (
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    className={errors.confirmPassword ? 'error' : ''}
                  />
                  {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                </div>
              )}

              {/* Form options - only show during sign in */}
              {!isSignUp && (
                <div className="form-options">
                  <label className="checkbox-container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Remember me
                  </label>
                  <a href="#" className="forgot-password">Forgot password?</a>
                </div>
              )}

              {errors.submit && (
                <div className="error-message submit-error">{errors.submit}</div>
              )}

              <button type="submit" className="signin-btn" disabled={isLoading}>
                {isLoading 
                  ? (isSignUp ? 'Creating Account...' : 'Signing in...') 
                  : (isSignUp ? 'Create Account' : 'Sign In')
                }
              </button>
            </form>

            <div className="signin-footer">
              <p>
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button onClick={toggleMode} className="link-btn">
                  {isSignUp ? 'Sign in here' : 'Sign up here'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;