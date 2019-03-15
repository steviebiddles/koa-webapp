import { join } from "path";
import { ConnectionOptions } from "typeorm";
import { SnakeCaseNamingStrategy } from "./src/database/naming-strategy/SnakeCaseNamingStrategy";

const entityDir = join(__dirname, "./src/entity");
const migrationsDir = join(__dirname, "./src/migration");

const connectionOpts: ConnectionOptions = {
  cli: {
    migrationsDir
  },
  database: process.env.DB_NAME || "koa_webapp_dev",
  entities: [`${entityDir}/**/*.ts`],
  host: process.env.DB_HOST || "localhost",
  migrations: [`${migrationsDir}/**/*.ts`],
  migrationsTableName: "app_migrations",
  namingStrategy: new SnakeCaseNamingStrategy(),
  password: process.env.DB_PASSWORD || "password",
  port: Number(process.env.DB_PORT) || 3356,
  synchronize: process.env.NODE_ENV !== "production",
  type: "mysql",
  username: process.env.DB_USERNAME || "root"
};

export = connectionOpts;
