export type user = {
    "name": string,
    "email": string,
    "image": string,
    "classes"?: Class[],
    "unavailableTimes"?: string[],
    "instagram"?: string,
    "discord"?: string,
    "linkedin"?: string,
    "phone"?: string,
}

export interface Class {
    classID: string,
    professorName: string,
    roomNumber: string
    startTime: Time,
    endTime: Time,
    professor: string,
}

}
export interface Time {
    hour: number;
    minute: number;
}