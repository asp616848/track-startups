import React from "react";
import { client } from "@/sanity/lib/client";
import { AUTHOR_BY_ID_QUERY, STARTUPS_BY_AUTHOR_QUERY } from '@/lib/queries';
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
const UserStartups = async ({ id }: { id: string }) => {
    const startups = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id });

    return (
        <>
        {startups.length > 0 ? (
            startups.map((startup: StartupTypeCard) => (
            <StartupCard key={startup._id} post={startup} />
            ))
        ) : (
            <p className="no-result">No posts yet</p>
        )}
        </>
    );
    };
export default UserStartups;