import Availability from "@/components/Availability";
import { getServerSession } from "next-auth";
import authOptions from "../api/auth/[...nextauth]/options";

async function schedule() {
    const session = await getServerSession(authOptions);
    const userData: {
        name?: string | null;
        email?: string | null;
        image?: string | null;
    } = session?.user || { name: null, email: null, image: null };

    return (
        <div>
            <Availability userData={userData} />
        </div>
    );
}

export default schedule;
