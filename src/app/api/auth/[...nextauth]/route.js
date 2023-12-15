'use client';
import NextAuth from 'next-auth'
import GoogleProviders from 'next-auth/providers'


console.log(process.env.GOOGLE_ID)
console.log(process.env.GOOGLE_CLIENT_SECRET)

const handler = (req, res) => NextAuth({
    providers: [
        GoogleProviders({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
        ],
        async sessions({sessions}){

        },
        async signIn ({profile}){

        }


})

export {handler as GET, handler as POST }