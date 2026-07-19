import { useParams } from "react-router-dom";
import trainers from "./TrainersMock";

function TrainerDetail() {
  const { id } = useParams();
  const trainer = trainers.find((item) => item.TrainerId === Number(id));

  if (!trainer) {
    return <h2>Trainer not found</h2>;
  }

  return (
    <div>
      <h2>{trainer.Name}</h2>
      <p>Trainer ID: {trainer.TrainerId}</p>
      <p>Email: {trainer.Email}</p>
      <p>Phone: {trainer.Phone}</p>
      <p>Technology: {trainer.Technology}</p>
      <p>Skills: {trainer.Skills.join(", ")}</p>
    </div>
  );
}

export default TrainerDetail;
