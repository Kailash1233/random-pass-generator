import React, { useState } from "react";
import "./PasswordGenerator.css"; // Import the CSS file for styling

const generateRandomPassword = (length) => {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
};

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(0);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const handleGeneratePassword = () => {
    const newPassword = generateRandomPassword(passwordLength);
    setGeneratedPassword(newPassword);
  };

  return (
    <div className="app-container">
      <div className="password-generator-container">
        <h2>Random Password Generator</h2>
        <div>
          <label>Password Length:</label>
          <input
            type="number"
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
            min="6"
            max="30"
          />
        </div>
        <div>
          <button onClick={handleGeneratePassword}>Generate Password</button>
        </div>
        {generatedPassword && (
          <div>
            <h3>Generated Password:</h3>
            <p>{generatedPassword}</p>
          </div>
        )}
      </div>
      <div className="footer">
        <p>Designed by Sapient Codes</p>
      </div>
    </div>
  );
};

export default PasswordGenerator;
