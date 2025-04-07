// config file for authentication
import NextAuth from 'next-auth';

export const {handlers, signIn, signOut, auth} = NextAuth({
    providers: []
});