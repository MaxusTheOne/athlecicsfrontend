import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteResult,
  getResultById,
  updateResult,
} from "../../../services/apiFacade";
import { Result } from "../../../types";

export default function ResultsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [result, setResult] = useState<Result>({
    id: 0,
    discipline: "",
    participant: "",
    result: "",
  });

  useEffect(() => {
    const fetchResult = async () => {
      const res = await getResultById(Number(id));
      setResult({ ...res });
      setFormState({
        ...res,
      });
      console.log(res);
    };
    fetchResult();
  }, [id]);

  const [formState, setFormState] = useState<Result>({
    ...result,  
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (!result) {
      return;
    }
    setFormState((prevState) => {
      const defaultState = prevState || {
        ...result,
      };
      return {
        ...defaultState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!result) {
      return;
    }
    try {
      await updateResult({ ...formState });
      navigate("/results");
    } catch {
      console.error("Error updating result");
      navigate("/results");
    }
  };

  const handleDelete = async () => {
    if (!result) {
      return;
    }
    try {
      await deleteResult(result.id);
      navigate("/results");
    } catch {
      console.error("Error deleting result");
      navigate("/results");
    }
  };
  return (
    <div className="result-detail-page">
      {/* Form for a Result with input */}
      <form
        id="result-form-container"
        className="form-container"
        onSubmit={handleSubmit}
      >
        <h1>Result Detail Page</h1>
        <label className="form-label">ID: {result?.id}</label>

        <label className="form-label">Discipline:</label>
        <input
          className="form-input"
          type="text"
          name="discipline"
          value={formState?.discipline}
          onChange={handleChange}
          required
        />

        <label className="form-label">Participant:</label>
        <input
          className="form-input"
          type="text"
          name="participant"
          value={formState?.participant}
          onChange={handleChange}
          required
        />

        <label className="form-label">Result:</label>
        <input
          className="form-input"
          type="text"
          name="result"
          value={formState?.result}
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
