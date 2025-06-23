import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@teno/drizzle";
import {
    twoFactor,
    username,
    anonymous,
    phoneNumber,
    magicLink,
    emailOTP,
    genericOAuth,
    oneTap,
    apiKey,
    admin,
    organization,
    bearer,
    multiSession,
    openAPI,
    jwt,
} from "better-auth/plugins";
import { betterAuth } from "better-auth";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
    }),
    appName: "better-auth",
    plugins: [
        jwt(),
        openAPI(),
        multiSession(),
        bearer(),
        organization(),
        admin(),
        apiKey(),
        oneTap(),
        genericOAuth({
            config: [],
        }),
        emailOTP({
            async sendVerificationOTP({ email, otp, type }, request) {
                // Send email with OTP
            },
        }),
        magicLink({
            sendMagicLink({ email, token, url }, request) {
                // Send email with magic link
            },
        }),
        phoneNumber(),
        anonymous(),
        username(),
        twoFactor(),
    ],
});
