"use client";

import React, { useState } from "react";

const PostRequestComponent = () => {
  // State for form input fields
  const [name, setName] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!name.trim()) {
      setResponseMessage("Name is required.");
      return;
    }

    const data = { username: name }; // Make sure you send 'username' instead of 'name'

    try {
      const response = await fetch("http://localhost:5000/api/add-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Sending the data as JSON
      });

      if (response.ok) {
        const result = await response.json();
        setResponseMessage(result.message); // Assuming the response contains a 'message' field
      } else {
        const errorDetails = await response.text();
        setResponseMessage(`Error: ${errorDetails}`);
      }
    } catch (error) {
      if (error instanceof Error) {
        setResponseMessage("Error: " + error.message);
      } else {
        setResponseMessage("Error: Something went wrong");
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="border p-2"
          />
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}{" "}
      {/* Display response message */}
    </div>
  );
};

export default PostRequestComponent;
