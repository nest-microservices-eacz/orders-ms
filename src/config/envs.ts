import 'dotenv/config';
import * as Joi from 'joi';

interface EnvVars {
  PORT: number;
  PRODUCTS_MICROSERVICE_HOST: string;
  PRODUCTS_MICROSERVICE_PORT: number;
  PGPORT: number;
  PGPASSWORD: string;
  PGUSER: string;
  PGDB: string;
  DATABASE_URL: string;
}

const envsSchema = Joi.object({
  PORT: Joi.number().required(),
  PRODUCTS_MICROSERVICE_HOST: Joi.string().required(),
  PRODUCTS_MICROSERVICE_PORT: Joi.number().required(),
  PGPORT: Joi.number().required(),
  PGPASSWORD: Joi.string().required(),
  PGUSER: Joi.string().required(),
  PGDB: Joi.string().required(),
  DATABASE_URL: Joi.string().required(),
}).unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  productsMicroserviceHost: envVars.PRODUCTS_MICROSERVICE_HOST,
  productsMicroservicePort: envVars.PRODUCTS_MICROSERVICE_PORT
};
