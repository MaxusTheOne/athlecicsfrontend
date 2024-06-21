import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Discipline } from "../../../types";
import { createDiscipline } from "../../../services/apiFacade";

export default function DisciplinesPageAdd() {
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const [discipline, setDiscipline] = useState<Discipline>({
    id: 0,
    disciplineName: "",
    disciplineType: "",
    resultsId: [],
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(discipline);
    createDiscipline(discipline)

    
  }

  return (
    <div id="participant-page-add-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <h1>Add a new discipline to the system</h1>
        <label className="label" htmlFor="disciplineName">
          Discipline Name:
        </label>
        <input
          className="form-field"
          type="text"
          id="disciplineName"
          name="disciplineName"
          onChange={(e) =>
            setDiscipline((prev) => ({ ...prev, disciplineName: e.target.value }))
          }
          required
        />
        <label className="label" htmlFor="disciplineType">
          Discipline Type:
        </label>
        <input
          className="form-field"
          type="text"
          id="disciplineType"
          name="disciplineType"
          onChange={(e) =>
            setDiscipline((prev) => ({ ...prev, disciplineType: e.target.value }))
          }
          required
        />

        <button className="form-button" type="submit">
          Add Discipline
        </button>
        {err && <p className="form-error">{err}</p>}
      </form>
    </div>
  );
}
