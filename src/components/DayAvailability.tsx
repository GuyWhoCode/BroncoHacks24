"use client";
import TimePicker from "@/components/TimePicker";
import { DateRange } from "@mui/x-date-pickers-pro";
import { Dayjs } from "dayjs";

interface DayAvailabilityProps {
    day: string;
    setDayAvailability: (timesAvailable: DateRange<Dayjs>[]) => void;
}

function DayAvailability({ day, setDayAvailability }: DayAvailabilityProps) {
    return (
        <div>
            <h3>{day}</h3>
            <TimePicker
                setTime={(newValue: DateRange<Dayjs>) =>
                    setDayAvailability([newValue])
                }
            />
        </div>
    );
}

export default DayAvailability;
