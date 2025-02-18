import { useNavigate } from "react-router-dom";
import AuthButton from "../components/AuthButton";
import AuthCard from "../components/AuthCard";
import AuthField from "../components/AuthField";
import { useState } from "react";

function SignUp() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateToSignIn = () => {
    navigate("/");
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <AuthCard title={"Sign Up"}>
        <AuthField
          type={"text"}
          placeholder={"Username"}
          value={username}
          onChange={(e) => setUsername(e.value)}
        />

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

        <AuthButton title={"Sign Up"} />

        <div className="flex justify-between text-gray-600 pl-1 pr-1">
          <button onClick={navigateToSignIn}>Sign In</button>
        </div>
      </AuthCard>
    </div>
  );
}

export default SignUp;
