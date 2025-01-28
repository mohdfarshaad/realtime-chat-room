import { Router } from "express";

const authRouter = Router();

authRouter.route("/signup");
authRouter.route("/signin");
authRouter.route("/signout");

export { authRouter };
