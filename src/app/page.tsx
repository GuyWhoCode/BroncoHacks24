import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import Image from "next/image";
import { Session } from "next-auth";
import SocialMediaCard from "./match-results";
import ScheduleInput from "./components/schedule-input";

interface user {
    name: string;
    email: string;
    image: string;
}

export default async function Home() {
    const session = await getServerSession(authOptions);
    const { name = "", email = "", image = "" } = session?.user || {name: "", email: "", image: ""};

    const IMAGE_SIZE = 200;

    return (
        <main>
            {session && (
                <>
                    <p>
                        User logged in: {name} <br />
                        Email: {email}
                    </p>
                    <Image
                        src={image || ""}
                        width={IMAGE_SIZE}
                        height={IMAGE_SIZE}
                        alt={name || "User Image"}
                    />
                </>
            )}

            <h1>BroncoHacks</h1>
            <a href="/api/auth/signin">Login</a>
            <br />
            <a href="/api/auth/signout">Sign out</a>
            <br />
            <SocialMediaCard />
            <ScheduleInput />
        </main>
    );
}
