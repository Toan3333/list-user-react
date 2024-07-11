import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3000/users");
      const data = response.data;
      setUsers(data);
      console.log(data);
    };
    getData();
  }, []);

  async function handleDelete(id) {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      location.reload();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="text-black p-10">
      <div className="container">
        <h1 className="text-center text-2xl font-medium">List of Users</h1>
        <div className="p-8 rounded bg-white border shadow mt-8">
          <div className="flex justify-end">
            <div className="mb-5 bg-blue-400 rounded p-4 text-white">
              <Link to="/create">Add+</Link>
            </div>
          </div>
          <table className="user-table w-full border-collapse border">
            <thead className="bg-green-300">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => (
                <tr className="p-3" key={item.id}>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{item.name}</td>
                  <td className="text-center">{item.email}</td>
                  <td className="text-center">{item.phone}</td>
                  <td className="text-center">
                    <div className="flex gap-2 items-center justify-center">
                      <Link
                        to={`/update/${item.id}`}
                        className="p-2 text-white rounded bg-blue-600">
                        Edit
                      </Link>
                      <button
                        onClick={(e) => handleDelete(item.id)}
                        className="p-2 text-white rounded bg-red-500">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
