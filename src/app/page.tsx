import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import Image from "next/image";
import { Session } from "next-auth";
import {collection,addDoc,query,where,doc} from "firebase/firestore"

import {db} from "@/app/database/firebase"
import {user,Class,Time} from "@/app/database/schema"
import { imageConfigDefault } from "next/dist/shared/lib/image-config";


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
        </main>
    );
}
