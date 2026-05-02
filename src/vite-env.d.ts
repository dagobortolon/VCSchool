/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APPS_SCRIPT_URL: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
