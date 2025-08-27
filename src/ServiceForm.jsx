import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// const API_BASE_URL = "https://innam.rf.gd/api/services/";
const API_BASE_URL = "http://localhost:5000/api/services/";


function ServiceForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return alert("All fields required");

    axios
      .post(API_BASE_URL, { title, description })
      .then(() => navigate("/services"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="w-full">
      <div className="max-w-[500px] border p-5 border-gray-300">
        <h1 className="text-3xl text-center font-semibold font-serif">Add Service</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-5">
          <input
            type="text"
            placeholder="Title"
            className="border border-gray-300 px-2 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            className="border border-gray-300 px-2 py-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-700 cursor-pointer px-3 py-2 text-white font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ServiceForm;
