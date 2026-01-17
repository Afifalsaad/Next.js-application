import LoginForm from "@/components/LoginForm/LoginForm";
import React, { Suspense } from "react";

const Login = () => {
  return (
    <div className="bg-primary min-h-screen text-neutral-content">
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            Loading...
          </div>
        }>
        <LoginForm />
      </Suspense>
    </div>
  );
};

export default Login;
