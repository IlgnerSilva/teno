export type signInDTO = {
    redirect: boolean;
    token: string;
    url: string | undefined;
    user: {
        id: string;
        email: string;
        name: string;
        image: string | null | undefined;
        emailVerified: boolean;
        createdAt: Date;
        updatedAt: Date;
    };
}