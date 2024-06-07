import { Module, Global } from '@nestjs/common';
import { Model } from 'objection';
import Knex from 'knex'; 
import { KNEX_CONNECTION } from 'src/constants/constants';
const knexConfig = require('../../knexfile');
 

const knex = Knex(knexConfig.development);

@Global()
@Module({
  providers: [
    {
      provide: KNEX_CONNECTION,
      useValue: knex,
    },
  ],
  exports: [KNEX_CONNECTION],
})
export class DatabaseModule {
  constructor() {
    Model.knex(knex);
  }
}
