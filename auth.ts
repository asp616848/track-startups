import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import { AUTHOR_BY_ID_QUERY } from './lib/queries';
import { client } from './sanity/lib/client';
import { writeClient } from './sanity/lib/write-client';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      const { name, email, image } = user;
      const { id, login, bio } = profile ?? {};

      const sanityId = `author.${id}`;
      const existingUser = await client.fetch(AUTHOR_BY_ID_QUERY, { id: sanityId });

      if (!existingUser) {
        await writeClient.create({
          _id: sanityId,
          _type: 'author',
          name,
          username: login,
          email,
          image,
          bio: bio || '',
        });
      }

      return true;
    },

    async jwt({ token, account, profile }) {
      if (account && profile) {
        const sanityId = `author.${profile.id}`;
        const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id: sanityId });
        token.id = user?._id;
      }
      return token;
    },

    async session({ session, token }) {
      session.id = token.id;
      return session;
    },
  },
});
