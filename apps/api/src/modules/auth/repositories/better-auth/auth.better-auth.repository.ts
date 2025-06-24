import { Injectable } from '@nestjs/common';
import { auth } from '@teno/better-auth/auth'
import { IAuthRepository } from '../auth.repository.interace'
import { signInDTO } from '@/modules/auth/dtos/signIn.dto'

@Injectable()
export class AuthBetterAuthRepository implements IAuthRepository {
    async signInWithEmailAndPassword(email: string, password: string): Promise<signInDTO> {
        return await auth.api.signInEmail({
            body: {
                email,
                password
            }
        })
    }
}