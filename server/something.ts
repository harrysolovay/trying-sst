import { ApiHandler } from "sst/node/api"
import { Time } from "./common/time.js"

export const handler = ApiHandler(async (_event) => {
  return { body: `Hello world. The time is ${Time.now()}` }
})
