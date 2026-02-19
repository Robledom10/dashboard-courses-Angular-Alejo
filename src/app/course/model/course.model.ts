import { Level } from "../enum/levelCourse.enum";
import { Status } from "../enum/statusCourse";

export interface Course {
    id: number
    name: string,
    duration: number,
    level: Level,
    status: Status
}