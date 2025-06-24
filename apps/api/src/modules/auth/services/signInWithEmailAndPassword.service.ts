import { Injectable } from "@nestjs/common";
import { IAuthRepository } from "../repositories/auth.repository.interace";

@Injectable()

export class SignInWithEmailAndPassword {
    constructor(private authRepository: IAuthRepository){}
    async execute(email: string, password: string){
        return await this.authRepository.signInWithEmailAndPassword(email, password);
    }
}
