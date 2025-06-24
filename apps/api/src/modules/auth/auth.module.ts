import { Module } from "@nestjs/common";
import { SignInWithEmailAndPassword } from "./services/signInWithEmailAndPassword.service";
import { AuthController } from "./auth.controller";

@Module({

	controllers: [AuthController],
	providers: [
		SignInWithEmailAndPassword,
	],
})
export class AuthModule {}