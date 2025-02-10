import { Router } from "express";
import { signIn, signOut, signUp } from "../controllers/auth.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const authRouter = Router();

authRouter.route("/signup").post(signUp);
authRouter.route("/signin").post(signIn);
authRouter.route("/signout").post(verifyJWT, signOut);

export { authRouter };
