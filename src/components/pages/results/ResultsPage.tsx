import { useEffect, useState } from "react";
import FullTable from "../../Table/FullTable";
import { getResults } from "../../../services/apiFacade";
import { Result } from "../../../types";

export default function ParticipantPage() {
  const [results, setResults] = useState<Array<Result>>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getResults()
      .then((data: Result[]) => {
        setResults(data);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div id="users-page-container">
      <h1>Results</h1>
      <FullTable
        schema={[
          {
            header: "ID",
            accessorKey: "id",
            type: "number",
            searchByValue: true,
          },
          {
            header: "Discipline",
            accessorKey: "discipline",
            type: "string",
            searchByValue: true,
          },
          {
            header: "Participant",
            accessorKey: "participant",
            type: "string",
            searchByValue: true,
          },
          {
            header: "Result",
            accessorKey: "result",
            type: "string",
            searchByValue: true,
          },
        ]}
        roleFilter={true}
        data={results}
        createButton={true}
        clickableItems={true}
        error={error || ""}
      />
    </div>
  );
}
