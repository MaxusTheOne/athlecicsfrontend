import { useState } from "react";
import "./ParticipantPageAdd.css";
import { useNavigate } from "react-router-dom";
import { Participant } from "../../../types";

export default function ParticipantPageAdd() {
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const [participant, setParticipant] = useState<Participant>({
    id: 0,
    name: "",
    age: 0,
    club: "",
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(participant);
  }

  return (
    <div id="participant-page-add-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <h1>Add a new participant to the system</h1>
        <label className="label" htmlFor="name">
          Name:
        </label>
        <input
          className="form-field"
          type="text"
          id="name"
          name="name"
          onChange={(e) =>
            setParticipant((prev) => ({ ...prev, name: e.target.value }))
          }
          required
        />
        <label className="label" htmlFor="age">
          Age:
        </label>
        <input
          className="form-field"
          type="number"
          id="age"
          name="age"
          onChange={(e) =>
            setParticipant((prev) => ({ ...prev, age: parseInt(e.target.value) }))
          }
          required
        />
        <label className="label" htmlFor="club">
          Club:
        </label>
        <input
          className="form-field"
          type="text"
          id="club"
          name="club"
          onChange={(e) =>
            setParticipant((prev) => ({ ...prev, club: e.target.value }))
          }
          required
        />

        <button className="form-button" type="submit">
          Add Participant
        </button>
        {err && <p className="form-error">{err}</p>}
      </form>
    </div>
  );
}
