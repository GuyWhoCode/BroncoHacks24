import Image from "next/image";
import ScheduleInput from "./components/schedule-input";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-center">Please input class schedule!</h1>
        <ScheduleInput />
      </div>
    </main>
  );
}
