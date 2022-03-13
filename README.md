# remix-auth-untappd

Use Untappd as an OAuth2 identity provider in Remix

## Supported runtimes

| Runtime    | Has Support |
| ---------- | ----------- |
| Node.js    | ✅          |
| Cloudflare | Not tested  |


## How to use

1. Get an Untappd API key: https://untappd.com/api/register?register=new
2. Put secrets in your `.env` file
3. Use the UntappedStrategy in your code: 
   ```typescript
   import { UntappdStrategy } from "remix-auth-untappd";

   const untappdStrategy = new UntappdStrategy {
      clientID: process.env.OAUTH2_UNTAPPD_ID!,
      clientSecret: process.env.OAUTH2_UNTAPPD_SECRET!,
      callbackURL: process.env.OAUTH2_UNTAPPD_CALLBACK_URL!,
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
