import { useEffect, useState } from "react";
import axios from "axios";

// const API_BASE_URL = "https://innam.rf.gd/api/services/";
const API_BASE_URL = "http://localhost:5000/api/services/";


function ServiceList() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get(API_BASE_URL)
      .then((res) => setServices(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mx-auto">
      <div className="max-w-[500px] border p-5">
        <h1 className="text-3xl font-bold text-center">All Services</h1>
        <ul className="list-decimal text-lg p-5">
          {services.map((s) => (
            <li key={s.id}>
              <h2>{s.title}</h2>
              <p>{s.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ServiceList;
