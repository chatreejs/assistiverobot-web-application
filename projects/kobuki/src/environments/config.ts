import { environment } from "../../../../src/environments/environment";

export const config = {
  job: environment.baseUrl + '/api/v1/jobs?status=running&limit=1',
  goal: environment.baseUrl + '/api/v1/goals'
}
