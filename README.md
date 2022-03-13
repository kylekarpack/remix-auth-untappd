# remix-auth-untappd

Use Untappd as an OAuth2 identity provider in Remix

## Supported runtimes

| Runtime    | Has Support |
| ---------- | ----------- |
| Node.js    | ✅          |
| Cloudflare | Not tested  |

## How to use

1. Install: `npm i remix-auth-untappd`
2. Get an Untappd API application: https://untappd.com/api/register?register=new
3. Put the secrets in your `.env` file
4. Use the UntappedStrategy in your code: 
   ```typescript
   import { UntappdStrategy } from "remix-auth-untappd";

   const untappdStrategy = new UntappdStrategy {
      clientID: process.env.UNTAPPD_ID!,
      clientSecret: process.env.UNTAPPD_SECRET!,
      callbackURL: "http://localhost:3000/auth/untappd", // Or whatever you're using
   }, ({ profile, accessToken }) => {
      // Do something with the profile and/or token
   });

   // Once you have an "authenticator" object:
   authenticator.use(untappdStrategy);
   ```

## Development

### Scripts

- `build`: Build the project for production using the TypeScript compiler (strips the types).
- `typecheck`: Check the project for type errors, this also happens in build but it's useful to do in development.
- `lint`: Runs ESLint againt the source codebase to ensure it pass the linting rules.
- `test`: Runs all the test using Jest.
