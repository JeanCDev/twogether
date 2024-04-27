import AppLogo from "./components/AppLogo"
import LoginForm from "./components/LoginForm"

export function Login() {
  return (
    <>
      <div className="container relative hidden h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <AppLogo />
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Take control of your family finances with TwoGether&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
        <LoginForm />
      </div>
    </>
  )
}
