import { FetchJobs, getJobId } from "../../Model/API";

export async function fetchJobs() {
  const { result, error } = await FetchJobs();
  return { result, error };
}

export async function getJobById(id) {
  const { result, error } = await getJobId(id);
  return { result, error };
}
