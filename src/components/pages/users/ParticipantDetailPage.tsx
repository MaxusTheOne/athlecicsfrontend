import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteParticipant,
  getParticipantById,
  updateParticipant,
} from "../../../services/apiFacade";
import "./ParticipantDetailPage.css";

export interface Participant {
  id: number;
  name: string;
  age: number;
  club: string;
}

export default function ParticipantDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [participant, setParticipant] = useState<Participant>({
    id: 0,
    name: "",
    age: 0,
    club: "",
  });

  useEffect(() => {
    const fetchParticipant = async () => {
      const res = await getParticipantById(Number(id));
      setParticipant({ ...res });
      setFormState({
        ...res,
      });
      console.log(res);
    };
    fetchParticipant();
  }, [id]);

  const [formState, setFormState] = useState<Participant>({
    ...participant,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (!participant) {
      return;
    }
    setFormState((prevState) => {
      const defaultState = prevState || {
        ...participant,
      };
      return {
        ...defaultState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!participant) {
      return;
    }
    try {
      await updateParticipant({ ...formState });
      navigate("/participants");
    } catch {
      console.error("Error updating participant");
      navigate("/participants");
    }
  };

  const handleDelete = async () => {
    if (!participant) {
      return;
    }
    try {
      await deleteParticipant(participant.id);
      navigate("/participants");
    } catch {
      console.error("Error deleting participant");
      navigate("/participants");
    }
  };
  return (
    <div className="participant-detail-page">
      {/* Form for a Participant with input */}
      <form
        id="participant-form-container"
        className="form-container"
        onSubmit={handleSubmit}
      >
        <h1>Participant Detail Page</h1>
        <label className="form-label">ID: {participant?.id}</label>

        <label className="form-label">Name:</label>
        <input
          className="form-input"
          type="text"
          name="name"
          value={formState?.name}
          onChange={handleChange}
          required
        />

        <label className="form-label">Age:</label>
        <input
          className="form-input"
          type="number"
          name="age"
          value={formState?.age}
          onChange={handleChange}
          required
        />

        <label className="form-label">Club:</label>
        <input
          className="form-input"
          type="text"
          name="club"
          value={formState?.club}
          onChange={handleChange}
          required
        />

        <div className="choice-container">
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
          <button className="save-button">Save</button>
        </div>
      </form>
    </div>
  );
}
