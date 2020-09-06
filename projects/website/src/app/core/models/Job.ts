import { Goal } from './Goal';

export interface Job {
    job_id: number
    goal: Goal[]
    status: string
    create_date: Date
    update_date: Date
}