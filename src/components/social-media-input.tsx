'use client'
import { user } from "@/database/schema";
import React, { useState } from 'react';
import { Box } from "@mui/material";

import { collection, addDoc, query, where, doc } from "firebase/firestore"
import { db } from "@/database/firebase";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { updateDoc } from "firebase/firestore";

const updateSocialMedia = async (instagram: string, discord: string, linkedin: string, phoneNumber: string) => {
    const session = await getServerSession(authOptions);
    const { name = "", email = "", image = "" } = session?.user || {name: "", email: "", image: ""};
    const userDB = collection(db,"user")
    
    try {
        const userEmail = query(userDB,where("email","==",email))

        if(!userEmail){
            const socialMediaRef = doc(userDB);

            await updateDoc(socialMediaRef, {
                "instagram": instagram || "",
                "discord": discord || "",
                "linkedin": linkedin || "",
                "phone": phoneNumber || "",
            });
        }
        else {
            console.log(userEmail)
        }
    } catch (error) {
        return false
    }
};

export default function SocialMediaInput() {
    const [instagram, setInstagram] = useState('');
    const [discord, setDiscord] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <Box
            sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
            }}
        >
            <input type="text" value={instagram} onChange={(e) => setInstagram(e.target.value)} placeholder="Instagram" />
            <input type="text" value={discord} onChange={(e) => setDiscord(e.target.value)} placeholder="Discord" />
            <input type="text" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} placeholder="LinkedIn" />
            <input
                type="number"
                value={phoneNumber}
                onChange={(e) => {
                    const inputPhoneNumber = (e.target.value.slice(0, 10));
                    setPhoneNumber(inputPhoneNumber);
                }}
                placeholder="Phone Number"
            />
            <button onClick={() => updateSocialMedia(instagram, discord, linkedin, phoneNumber)}>
                Save
            </button>
        </Box>
    );
}