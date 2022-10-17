export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            ADMIN_PASSWORD: string;
            ADMIN_EMAIL: string;
            ENV: "development" | "production" | "test";
        }
    }
}