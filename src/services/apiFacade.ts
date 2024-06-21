import { Result, Discipline, Participant } from "../types";
import { makeOptions, handleHttpErrors } from "./fetchUtils";

const API_URL = "http://localhost:8080";

async function getResults(): Promise<Result[]> {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const options = makeOptions("GET", null, headers, true);
  const resultResult = await fetch(API_URL + "/results", options).then(handleHttpErrors);
  console.log(resultResult);
  
  return resultResult;
}

async function getDisciplines(): Promise<Discipline[]> {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const options = makeOptions("GET", null, headers, true);
  return fetch(API_URL + "/disciplines", options).then(handleHttpErrors);
}

async function getParticipants(): Promise<Participant[]> {
  console.log("getParticipants");
  
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const options = makeOptions("GET", null, headers, true);
  return fetch(API_URL + "/participants", options).then(handleHttpErrors);
}

async function getParticipantById(id: number): Promise<Participant> {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const options = makeOptions("GET", null, headers, true);
  return fetch(API_URL + "/participants/" + id, options).then(handleHttpErrors);
}

async function createResult(result: Result): Promise<Result> {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const options = makeOptions("POST", result, headers, true);
  return fetch(API_URL + "/results", options).then(handleHttpErrors);
}

async function getResultById(id: number): Promise<Result> {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const options = makeOptions("GET", null, headers, true);
  return fetch(API_URL + "/results/" + id, options).then(handleHttpErrors);
}

async function createDiscipline(discipline: Discipline): Promise<Discipline> {
  
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const options = makeOptions("POST", discipline, headers, true);
  return fetch(API_URL + "/disciplines", options).then(handleHttpErrors);
}

async function createParticipant(participant: Participant): Promise<Participant> {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const options = makeOptions("POST", participant, headers, true);
  return fetch(API_URL + "/participants", options).then(handleHttpErrors);
}

async function updateResult(result: Result): Promise<Result> {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const options = makeOptions("PUT", result, headers, true);
  return fetch(API_URL + "/results/" + result.id, options).then(handleHttpErrors);
}

async function updateDiscipline(discipline: Discipline): Promise<Discipline> {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const options = makeOptions("PUT", discipline, headers, true);
  return fetch(API_URL + "/disciplines/" + discipline.id, options).then(handleHttpErrors);
}

async function updateParticipant(participant: Participant): Promise<Participant> {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const options = makeOptions("PUT", participant, headers, true);
  return fetch(API_URL + "/participants/" + participant.id, options).then(handleHttpErrors);
}

async function deleteResult(id: number): Promise<void> {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const options = makeOptions("DELETE", null, headers, true);
  return fetch(API_URL + "/results/" + id, options).then(handleHttpErrors);
}

async function deleteDiscipline(id: number): Promise<void> {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const options = makeOptions("DELETE", null, headers, true);
  return fetch(API_URL + "/disciplines/" + id, options).then(handleHttpErrors);
}

async function getDisciplineById(id: number): Promise<Discipline> {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const options = makeOptions("GET", null, headers, true);
  return fetch(API_URL + "/disciplines/" + id, options).then(handleHttpErrors);
}

async function deleteParticipant(id: number): Promise<void> {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const options = makeOptions("DELETE", null, headers, true);
  return fetch(API_URL + "/participants/" + id, options).then(handleHttpErrors);
}

export {
  getResults,
  getDisciplines,
  getParticipants,
  getParticipantById,
  createResult,
  getResultById,
  createDiscipline,
  createParticipant,
  updateResult,
  updateDiscipline,
  updateParticipant,
  deleteResult,
  deleteDiscipline,
  getDisciplineById,
  deleteParticipant,
};
