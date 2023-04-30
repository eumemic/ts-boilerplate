import dotenv from "dotenv";

dotenv.config();

interface Env {
  dummy: string;
}

let env: Env | undefined;

export function getEnv(): Env {
  if (env) return env;

  env = {
    dummy: required("DUMMY"),
  };

  return env;

  function required(key: string): string {
    const value = optional(key);
    if (value === undefined) throw Error(`${key} must be specified in .env!`);
    return value;
  }

  function optional(key: string): string | undefined {
    return process.env[key];
  }
}
