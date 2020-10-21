import { Goal } from './Goal';

export interface Job {
    job_id: number
    goal: Goal[]
    status: string
    created_date: Date
    updated_date: Date
}