// config file for authentication
import NextAuth from 'next-auth';
import GitHubProvider from "next-auth/providers/github";
import Github from "next-auth/providers/github";
import { AUTHOR_BY_ID_QUERY } from './lib/queries';
import { client } from './sanity/lib/client';
import { writeClient } from './sanity/lib/write-client';

export const {handlers, signIn, signOut, auth} = NextAuth({
    providers: [
        // GitHubProvider({  // this commented part is given in documentation but me following tutorial for now
        //     clientId: process.env.GITHUB_ID,
        //     clientSecret: process.env.GITHUB_SECRET
        // })
        Github
    ],
    callbacks:{
        async signIn({user:{name, email, image}, account, profile:{id, login, bio}}){
            const existingUser = await client.fetch(AUTHOR_BY_ID_QUERY, {id : id});
            if(!existingUser){
                await writeClient.create({
                    _type: 'author',
                    id: id,
                    name: name,
                    username: login,
                    email:  email,
                    image:  image,
                    bio: bio || "",
                });

            }
            return true;
        },
        async jwt({token, account, profile}){
            if(account && profile)
            {
                const user = await client.fetch(AUTHOR_BY_ID_QUERY, {id: profile?.id});

                token.id = user._id;
            }
            return token;
        }

        async session (session, token) {
            Object.assign(session, {id:token.id});
            return session;
        }
    }
});