"use client";
import React from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}
const Error: React.FC<ErrorProps> = ({ error, reset }) => {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
      <button onClick={reset}>Try Again</button>
    </div>
  );
};

export default Error;
