/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_DIR: string;
    readonly VITE_URL: string;
    readonly VITE_API: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
