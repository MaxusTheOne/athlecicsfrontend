import { useEffect, useState } from "react";
import FullTable from "../../Table/FullTable";
import { getDisciplines } from "../../../services/apiFacade";
import { Discipline } from "../../../types";

export default function DisciplinesPage() {
  const [disciplines, setDisciplines] = useState<Array<Discipline>>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getDisciplines()
      .then((data: Discipline[]) => {
        setDisciplines(data);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div id="disciplines-page-container">
      <h1>Disciplines</h1>
      <FullTable
        schema={[
          {
            header: "ID",
            accessorKey: "id",
            type: "number",
            searchByValue: true,
          },
          {
            header: "Name",
            accessorKey: "disciplineName",
            type: "string",
            searchByValue: true,
          },
          {
            header: "Type",
            accessorKey: "disciplineType",
            type: "string",
            searchByValue: true,
          }
        ]}
        roleFilter={true}
        data={disciplines}
        createButton={true}
        clickableItems={true}
        error={error || ""}
      />
    </div>
  );
}
