"use client";
import DayAvailability from "@/components/DayAvailability";
import { db } from "@/database/firebase";
import { DateRange } from "@mui/x-date-pickers-pro";
import { Dayjs } from "dayjs";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Availability({
    userData,
}: {
    userData: {
        name?: string | null;
        email?: string | null;
        image?: string | null;
    };
}) {
    const router = useRouter()
    const [availability, setAvailability] = useState({
        Monday: {
            timesAvailable: [],
        },
        Tuesday: {
            timesAvailable: [],
        },
        Wednesday: {
            timesAvailable: [],
        },
        Thursday: {
            timesAvailable: [],
        },
        Friday: {
            timesAvailable: [],
        },
        Saturday: {
            timesAvailable: [],
        },
        Sunday: {
            timesAvailable: [],
        },
    });

    const handleSubmit = async () => {
        const formattedAvailability: { [key: string]: string[] } = {}; // Change type annotation

        Object.keys(availability).forEach((day) => {
            const timesAvailable = availability[
                day as keyof typeof availability
            ].timesAvailable as DateRange<Dayjs>[]; // Add type annotation
            const formattedTimes = timesAvailable.map((time) => {
                return time
                    ? [time.map((t) => (t ? t.format("HH:mm") : ""))]
                    : []; // Wrap time array in an additional array
            });

            const newFormat = formattedTimes.map((time) => {
                return time.join("-"); // Add return statement to map callback
            });
            formattedAvailability[day] = newFormat; // Wrap formattedTimes in an array
        });

        await addDoc(collection(db, "availability"), {
            availability: formattedAvailability,
            user: userData,
        });
        alert("Availability submitted!");
        router.push("/");
    };

    return (
        <>
            {Object.keys(availability).map((day) => (
                <DayAvailability
                    key={day}
                    day={day}
                    setDayAvailability={(
                        timesAvailable: DateRange<Dayjs>[]
                    ): void => {
                        return setAvailability((prev) => ({
                            ...prev,
                            [day]: { timesAvailable },
                        }));
                    }}
                />
            ))}
            <button onClick={handleSubmit}>Submit</button>
        </>
    );
}

export default Availability;
