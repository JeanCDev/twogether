import { UserAuthForm } from "@/components/AuthForm";

const LoginForm = () => {
  return (
    <div className="lg:p-8">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Login with Google
          </h1>
          <p className="text-sm text-muted-foreground">
            Click on the button bellow to login or create your account for free
          </p>
        </div>
        <UserAuthForm />
        {/* <p className="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <a
            href="/terms"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </a>
          .
        </p> */}
      </div>
    </div>
  );
}

export default LoginForm