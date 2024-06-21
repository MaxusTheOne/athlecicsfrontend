import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Result } from "../../../types";

export default function ResultsPageAdd() {
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const [result, setResult] = useState<Result>({
    id: 0,
    discipline: "",
    participant: "",
    result: "",
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(result);
  }

  return (
    <div id="participant-page-add-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <h1>Add a new result to the system</h1>
        <label className="label" htmlFor="discipline">
          Discipline:
        </label>
        <input
          className="form-field"
          type="text"
          id="discipline"
          name="discipline"
          onChange={(e) =>
            setResult((prev) => ({ ...prev, discipline: e.target.value }))
          }
          required
        />
        <label className="label" htmlFor="participant">
          Participant:
        </label>
        <input
          className="form-field"
          type="text"
          id="participant"
          name="participant"
          onChange={(e) =>
            setResult((prev) => ({ ...prev, participant: e.target.value }))
          }
          required
        />
        <label className="label" htmlFor="result">
          Result:
        </label>
        <input
          className="form-field"
          type="text"
          id="result"
          name="result"
          onChange={(e) =>
            setResult((prev) => ({ ...prev, result: e.target.value }))
          }
          required
        />

        <button className="form-button" type="submit">
          Add Result
        </button>
        {err && <p className="form-error">{err}</p>}
      </form>
    </div>
  );
}
