import { Body, Controller, Get, Post, Req, UsePipes } from "@nestjs/common";
import { SignInWithEmailAndPassword } from './services/signInWithEmailAndPassword.service'

@Controller("auth")
export class AuthController {
	constructor(private readonly signInWithEmailAndPassword: SignInWithEmailAndPassword) {}

	@Post("credentials")
	async create(@Body() data: { email: string; password: string }) {
		return await this.signInWithEmailAndPassword.execute(data.email, data.password)
	}
}