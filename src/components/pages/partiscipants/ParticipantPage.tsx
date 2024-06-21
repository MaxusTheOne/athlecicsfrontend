import { useEffect, useState } from "react";
import FullTable from "../../Table/FullTable";
import "./ParticipantPage.css";
import { getParticipants } from "../../../services/apiFacade";
import { Participant } from "../../../types";

export default function ParticipantPage() {
  const [participants, setParticipants] = useState<Array<Participant>>([]);
  const [error, setError] = useState<string | null>(null);

  // Maps Participant object

  useEffect(() => {
    getParticipants()
      .then((data: Participant[]) => {
        setParticipants(data);
      })
      .catch((err) => setError(err.message));
  }, []);

  useEffect(() => {
  }, [participants]);

  return (
    <div id="users-page-container">
      <h1>Participants</h1>
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
            accessorKey: "name",
            type: "string",
            searchByValue: true,
          },
          {
            header: "Age",
            accessorKey: "age",
            type: "number",
            searchByValue: true,
          },
          {
            header: "Club",
            accessorKey: "club",
            type: "string",
            searchByValue: true,
          },
          
        ]}
        roleFilter={true}
        data={participants.map((item) => ({
          ...item,
          id: item.id,
        }))}
        createButton={true}
        clickableItems={true}
        error={error || ""}
      />
    </div>
  );
}
