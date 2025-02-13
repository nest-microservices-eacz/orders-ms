import 'dotenv/config';
import * as Joi from 'joi';

interface EnvVars {
  PORT: number;
  PGPORT: number;
  PGPASSWORD: string;
  PGUSER: string;
  PGDB: string;
  DATABASE_URL: string;
  NATS_SERVERS: string[];
}

const envsSchema = Joi.object({
  PORT: Joi.number().required(),
  PGPORT: Joi.number().required(),
  PGPASSWORD: Joi.string().required(),
  PGUSER: Joi.string().required(),
  PGDB: Joi.string().required(),
  DATABASE_URL: Joi.string().required(),
  NATS_SERVERS: Joi.array().items(Joi.string()).required(),
}).unknown(true);

const { error, value } = envsSchema.validate({
  ...process.env,
  NATS_SERVERS: process.env.NATS_SERVERS?.split(','),
});

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  natsServers: envVars.NATS_SERVERS,
};
