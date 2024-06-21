import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteDiscipline, getDisciplineById, updateDiscipline } from "../../../services/apiFacade";
import { Discipline } from "../../../types";

interface SimpleDiscipline {
  id: number;
  disciplineName: string;
  disciplineType: string;
  resultsId: string;
}

export default function DisciplinesDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [discipline, setDiscipline] = useState<SimpleDiscipline>({
    id: 0,
    disciplineName: "",
    disciplineType: "",
    resultsId: "",
  });

  useEffect(() => {
    const fetchDiscipline = async () => {
      const res = await getDisciplineById(Number(id));
      setDiscipline({ ...res, resultsId: res.resultsId.join(",")});
      setFormState({
        ...res, resultsId: res.resultsId.join(","),
      });
      console.log(res);
    };
    fetchDiscipline();
  }, [id]);

  const [formState, setFormState] = useState<SimpleDiscipline>({
    ...discipline,  
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (!discipline) {
      return;
    }
    setFormState((prevState) => {
      const defaultState = prevState || {
        ...discipline,
      };
      return {
        ...defaultState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!discipline) {
      return;
    }
    try {
      await updateDiscipline({ ...formState, resultsId: formState.resultsId.split(",").map(Number)});
      navigate("/disciplines");
    } catch {
      console.error("Error updating discipline");
      navigate("/disciplines");
    }
  };

  const handleDelete = async () => {
    if (!discipline) {
      return;
    }
    try {
      await deleteDiscipline(discipline.id);
      navigate("/disciplines");
    } catch {
      console.error("Error deleting discipline");
      navigate("/disciplines");
    }
  };
  return (
    <div className="discipline-detail-page">
      {/* Form for a Discipline with input */}
      <form
        id="discipline-form-container"
        className="form-container"
        onSubmit={handleSubmit}
      >
        <h1>Discipline Detail Page</h1>
        <label className="form-label">ID: {discipline?.id}</label>

        <label className="form-label">Discipline Name:</label>
        <input
          className="form-input"
          type="text"
          name="disciplineName"
          value={formState?.disciplineName}
          onChange={handleChange}
          required
        />

        <label className="form-label">Discipline Type:</label>
        <input
          className="form-input"
          type="text"
          name="disciplineType"
          value={formState?.disciplineType}
          onChange={handleChange}
          required
        />
        <label className="form-label">Results ID:</label>
        <input
          className="form-input"
          type="text"
          name="resultsId"
          value={formState?.resultsId}
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
