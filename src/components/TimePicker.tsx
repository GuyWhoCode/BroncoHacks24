import { Box } from "@mui/material";
import {
    DateRange,
    LocalizationProvider,
    SingleInputTimeRangeField,
} from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

interface TimePickerProps {
    setTime: (newValue: DateRange<Dayjs>) => void;
}

export function TimePicker({ setTime }: TimePickerProps) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "& > :not(style)": { m: 1, width: "95%" },
                }}
            >
                <SingleInputTimeRangeField
                    label="Course Time"
                    defaultValue={[dayjs(null), dayjs(null)]}
                    onChange={(newValue) => setTime(newValue)}
                />
            </Box>
        </LocalizationProvider>
    );
}

export default TimePicker;
