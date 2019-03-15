import { createConnection } from "typeorm";
import * as connectionOpts from "../ormconfig";
import app from "./app";

// Process.env will always be comprised of strings, so we typecast the port to a number.
const PORT: number = Number(process.env.PORT) || 3000;

createConnection(connectionOpts)
  .then(async () =>
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    })
  )
  .catch(console.error);
