import CredentialsProvider from "next-auth/providers/credentials";

const demoUser = {
  email: "demouser@gmail.com",
  password: "12345678",
};

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials;

        const isEmailMatched = demoUser.email == email;
        if (!isEmailMatched) return null;

        const isPasswordOk = demoUser.password == password;

        if (isPasswordOk) {
          return {
            email: demoUser.email,
          };
        }
        return null;
      },
    }),
  ],
};
