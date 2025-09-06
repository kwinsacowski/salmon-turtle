// generate the array of users
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

import React from "react";

export default function UserCard({ user }) {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl p-4 flex items-center space-x-4">
      <img
        src={user.avatar}
        alt={`${user.name}'s avatar`}
        className="w-16 h-16 rounded-full border"
      />
      <div>
        <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
      </div>
    </div>
  );
}

 const loginBtn = document.getElementById("loginBtn");
    const message = document.getElementById("message");

    loginBtn.addEventListener("click", () => {
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if (username === "" || password === "") {
        message.textContent = "Please fill in both fields.";
        message.style.color = "red";
        return;
      }

      // Dummy check (replace with real backend validation)
      if (username === "user" && password === "1234") {
        message.textContent = "Login successful! 🎉";
        message.style.color = "green";
      } else {
        message.textContent = "Invalid username or password.";
        message.style.color = "red";
      }
    });00
