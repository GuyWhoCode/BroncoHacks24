import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import Image from "next/image";
import {collection,addDoc,query,where} from "firebase/firestore"

import {db} from "@/database/firebase"
import {user} from "@/database/schema"

import SocialMediaCard from "@/components/match-results";
import ResponsiveAppBar from "@/components/navbar";
import ScheduleInput from "@/components/schedule-input";
import SocialMediaInput from "@/components/social-media-input";

export default async function Home() {
    const session = await getServerSession(authOptions);
    const { name = "", email = "", image = "" } = session?.user || {name: "", email: "", image: ""};
    const userDB = collection(db,"user")
    
    const userInfo:user = {
        "name":name||"",
        "email":email||"",
        "image":image || ""
    }
    
    try {
        const userEmail = query(userDB,where("email","==",email))
        
        if(!userEmail){
            // be extremely wary of this code, I don't know how userEmail, is null when
            // email doesnt exist but i will not worry abt this right now
            
            addDoc(userDB,userInfo)
        }
        else{
            console.log(userEmail)
            
        }
        
        
        
    } catch (error) {
        return false
    }
    const IMAGE_SIZE = 200;

    return (
        <><ResponsiveAppBar></ResponsiveAppBar><main>
            <h1>
                {session && (
                    <>
                        <p style={{ textAlign: "center" }}>
                            User logged in: {name} <br />
                        </p>
                    </>
                )}
            </h1>
            <SocialMediaCard />
            <ScheduleInput />
            <SocialMediaInput />
            <br />
            <a href="/schedule">Add New Schedule</a>
        </main></>
    );
}
