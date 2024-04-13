import { useAuth } from "@/Contexts/Auth";

export const Login = () => {
  const {authenticate} = useAuth();

  return (
    <button onClick={authenticate}>Login pussies</button>
  );
}