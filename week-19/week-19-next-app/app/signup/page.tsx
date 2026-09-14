"use client";

import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="border-p2">
          <input
            type="text"
            placeholder="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <button
            onClick={() => {
              axios.post("http://localhost:3000/api/v1/signup", {
                username,
                password,
              });
            }}
          >
            Sign-up
          </button>
        </div>
      </div>
    </>
  );
}
