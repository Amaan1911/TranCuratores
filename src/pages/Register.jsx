import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  function submit(e) {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u) => u.email === email)) {
      setMsg("Email already registered");
      return;
    }
    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    login({ name, email });
    navigate("/");
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Register</h2>

        {msg && <p className="text-red-500 text-center mb-4 font-medium">{msg}</p>}

        <form onSubmit={submit} className="space-y-4">
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl font-medium hover:bg-blue-700 transition-all duration-200"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-4">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-blue-600 hover:underline font-medium"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
