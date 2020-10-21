import { Pipe, PipeTransform } from '@angular/core'
import { JobStatus } from '../models/JobStatus'

@Pipe({
    name: 'statusColor'
})
export class StatusColorPipe implements PipeTransform {

    transform(status: string): string {
        let color: string
        switch (status) {
            case JobStatus.PENDING:
                color = ''
                break
            case JobStatus.RUNNING:
                color = 'blue'
                break
            case JobStatus.SUCCESS:
                color = 'green'
                break
            case JobStatus.FAILED:
                color = 'red'
                break
            default:
        }
        return color
    }
}
