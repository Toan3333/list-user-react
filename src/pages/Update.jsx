import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Update = () => {
  const [data, setData] = useState({ name: "", email: "", phone: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getUserById = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/users/${id}`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    getUserById();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/users/${id}`, data);
      alert("User updated successfully");
      navigate("/");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  return (
    <div className="flex justify-center min-h-[100vh] items-center">
      <div className="container">
        <div className="max-w-[500px] mx-auto w-full bg-white shadow rounded p-8">
          <h1 className="text-2xl mb-5">Update User</h1>
          <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="w-full mt-2 p-2 rounded border border-gray-500"
                name="name"
                placeholder="Enter Name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>
            <div className="">
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                className="w-full mt-2 p-2 rounded border border-gray-500"
                name="phone"
                placeholder="Enter Phone"
                value={data.phone}
                onChange={(e) => setData({ ...data, phone: e.target.value })}
              />
            </div>
            <div className="">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="w-full mt-2 p-2 rounded border border-gray-500"
                name="email"
                placeholder="Enter Email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
              Update User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
