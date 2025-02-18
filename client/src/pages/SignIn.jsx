import { useNavigate } from "react-router-dom";
import AuthButton from "../components/AuthButton";
import AuthCard from "../components/AuthCard";
import AuthField from "../components/AuthField";
import { useState } from "react";

function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateToSignUp = () => {
    navigate("signup");
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <AuthCard title={"Sign In"}>
        <AuthField
          type={"text"}
          placeholder={"Email"}
          value={email}
          onChange={(e) => setEmail(e.value)}
        />

        <AuthField
          type={"password"}
          placeholder={"Password"}
          value={password}
          onChange={(e) => setPassword(e.value)}
        />

        <AuthButton title={"Sign In"} onClick={""} />
        <div className="flex justify-between text-gray-600 pl-1 pr-1">
          <button onClick={navigateToSignUp}>Sign Up</button>
          <button>Forget Password</button>
        </div>
      </AuthCard>
    </div>
  );
}

export default SignIn;
