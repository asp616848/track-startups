// config file for authentication
import NextAuth from 'next-auth';
import GitHubProvider from "next-auth/providers/github";
import Github from "next-auth/providers/github";

export const {handlers, signIn, signOut, auth} = NextAuth({
    providers: [
        // GitHubProvider({  // this commented part is given in documentation but me following tutorial for now
        //     clientId: process.env.GITHUB_ID,
        //     clientSecret: process.env.GITHUB_SECRET
        // })
        Github
    ],
});