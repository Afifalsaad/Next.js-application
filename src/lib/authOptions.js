import CredentialsProvider from "next-auth/providers/credentials";

const demoUser = {
  email: "demouser@gmail.com",
  password: 12345678,
};

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials;

        const user = demoUser.email == email;
        if (!user) return null;

        const isPasswordOk = demoUser.password == password;

        if (isPasswordOk) {
          console.log("from isPasswordOk", user);
          return user;
        }
        // console.log(credentials);
        return null;
      },
    }),
  ],
};
