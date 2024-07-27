import { FC } from "react";
import { Retreat } from "../types/Retreat";
import { useNavigate } from "react-router-dom";

interface Props {
  retreat: Retreat;
}

const RetreatCard: FC<Props> = ({ retreat }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/retreat/${retreat.id}`)}
      className="bg-custom_brown opacity-100 cursor-pointer m-4 p-4 rounded-lg shadow-lg flex flex-col border border-[#e5e7eb]"
    >
      <div className="mb-4">
        <img className="rounded-lg sm:h-40" src={retreat.image} alt="retreat" />
      </div>

      <div className="mb-2">
        <p className="text-xl font-semibold">{retreat.title}</p>
        <p className="text-[#374151] text-lg tracking-tight">
          {retreat.description}
        </p>
      </div>

      <div className="text-[#374151] text-lg tracking-tight">
        <p>Date: {retreat.date ? new Date(retreat.date).toDateString() : ""}</p>
        <p>Location: {retreat.location}</p>
      </div>
      <div>
        <p className="text-black font-semibold">Price: $ {retreat.price}</p>
      </div>
    </div>
  );
};

export default RetreatCard;
