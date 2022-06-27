import { Pool } from 'pg';

const connectionString = 'postgres://ypiksysp:t78XbFAMepWzYv5acjc4xBlzZNTKt646@motty.db.elephantsql.com/ypiksysp';

const db = new Pool({ connectionString });

export default db;