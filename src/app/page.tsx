import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Image from "next/image";

interface user {
    name: string;
    email: string;
    image: string;
}

export default async function Home() {
    const session = await getServerSession(authOptions);
    const { name, email, image }: user = session?.user ?? {
        name: "",
        email: "",
        image: "",
    };
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
                        src={image}
                        width={IMAGE_SIZE}
                        height={IMAGE_SIZE}
                        alt={name}
                    />
                </>
            )}

            <h1>BroncoHacks</h1>
            <a href="/api/auth/signin">Login</a>
            <br />
            <a href="/api/auth/signout">Sign out</a>
        </main>
    );
}
