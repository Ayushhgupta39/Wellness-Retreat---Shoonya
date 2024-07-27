import { FC, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Retreat } from "../types/Retreat";

const API_URL = "https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats";

const RetreatPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [retreat, setRetreat] = useState<Retreat | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  console.log(retreat);

  useEffect(() => {
    const fetchRetreatDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}/${id}`);
        setRetreat(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching retreat details:", error);
        setLoading(false);
      }
    };

    fetchRetreatDetails();
  }, [id]);

  if (!retreat) {
    return <div>Loading...</div>;
  }

  if (loading) {
    return <p className="text-center my-10 min-h-[75vh]">Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="text-blue-500 hover:underline mb-4 block">
        &larr; Back to Home
      </Link>
      <div className="shadow-lg rounded-lg">
        <img
          src={retreat.image}
          alt="retreat_image"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{retreat.title}</h1>
          <p className="text-gray-600 mb-4">{retreat.description}</p>
          <div className="flex my-2">
            {retreat.tag.length > 0 &&
              retreat.tag.map((tag) => (
                <div className="mr-2 bg-green-300 p-1 px-2 rounded-full">
                  <p>{tag}</p>
                </div>
              ))}
          </div>
          <p className="text-lg mb-2">
            <strong>Date:</strong>{" "}
            {retreat.date ? new Date(retreat.date).toDateString() : ""}
          </p>
          <p className="text-lg mb-2">
            <strong>Duration: </strong> {retreat.duration} hours
          </p>
          <p className="text-lg mb-2">
            <strong>Location:</strong> {retreat.location}
          </p>
          <p className="text-lg mb-2">
            <strong>Condition:</strong> {retreat.condition}
          </p>
          <p className="text-lg mb-2">
            <strong>Type:</strong> {retreat.type}
          </p>
          <p className="text-2xl font-bold text-green-600">${retreat.price}</p>
        </div>
      </div>
    </div>
  );
};

export default RetreatPage;
