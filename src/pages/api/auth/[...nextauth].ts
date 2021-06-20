import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
// import Adapters from 'next-auth/adapters';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

export default (request, response) => NextAuth(request, response, {
  providers: [
    Providers.Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT as unknown as number,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASS,
        }
      },
      from: process.env.EMAIL_FROM,
    })
  ],
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.AUTH_SECRET,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
})
