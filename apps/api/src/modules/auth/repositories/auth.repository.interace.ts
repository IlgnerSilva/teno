import { signInDTO } from '../dtos/signIn.dto'

export abstract class IAuthRepository {
	abstract signInWithEmailAndPassword(email: string, password: string): Promise<signInDTO>;
}