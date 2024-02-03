export type user = {
    "name":string,
    "email" : string,
    "image":string,
    "classes": Class[],
    "unavailableTimes":string[]
}
interface Class {
    className : string,
    classID : string,
    professorName:string,
    roomNumber: string
    startTime : Time,
    endTime: Time,
    professor: string,

}
interface Time{
    hour:number
    minute:number
}
