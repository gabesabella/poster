# Simple Social Network

This is a simple social network application built using React, TypeScript, Next.js, PostgreSQL, and Railway. Users can login via their Google account using NextAuth, and make posts and comments on others' posts. Users can view their own posts by clicking on their profile image.

## Setup

To run this application locally, you will need to have the following installed:

- Node.js
- Yarn
- PostgreSQL
- Railway CLI
- Google OAuth client credentials

Once you have these installed, follow these steps to set up the application:

1. Clone the repository:

git clone https://github.com/your-username/your-repo-name.git

markdown
Copy code

2. Install dependencies:

cd your-repo-name
yarn

markdown
Copy code

3. Create a `.env.local` file in the root directory of the project and add the following environment variables:

DATABASE_URL=<your-postgres-database-url>
NEXTAUTH_URL=http://localhost:3000
GOOGLE_ID=<your-google-client-id>
GOOGLE_SECRET=<your-google-client-secret>

vbnet
Copy code

4. Run the migrations to set up the database:

railway run yarn migrate

markdown
Copy code

5. Start the development server:

yarn dev

markdown
Copy code

The application should now be running at [http://localhost:3000](http://localhost:3000).

## Built With

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Railway](https://railway.app/)
- [NextAuth](https://next-auth.js.org/)
- [Google OAuth](https://developers.google.com/identity/protocols/oauth2)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
