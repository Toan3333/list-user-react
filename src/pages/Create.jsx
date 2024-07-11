import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/users", values);
      console.log("User created:", response.data);
      navigate("/");
      // Đã thêm một dòng console.log() để hiển thị dữ liệu người dùng đã được tạo trong console.
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="flex justify-center min-h-[100vh] items-center">
      <div className="container">
        <div className="max-w-[500px] mx-auto w-full bg-white shadow rounded p-8">
          <h1 className="text-2xl mb-5">Add a User</h1>
          <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="w-full mt-2 p-2 rounded border border-gray-500"
                name="name"
                placeholder="Enter Name"
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
            </div>
            <div className="">
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                className="w-full mt-2 p-2 rounded border border-gray-500"
                name="phone"
                placeholder="Enter Phone"
                onChange={(e) => setValues({ ...values, phone: e.target.value })}
              />
            </div>
            <div className="">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="w-full mt-2 p-2 rounded border border-gray-500"
                name="email"
                placeholder="Enter Email"
                onChange={(e) => setValues({ ...values, email: e.target.value })}
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
              Add User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
