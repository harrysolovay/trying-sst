import { SSTConfig } from "sst"
import { Api, StaticSite } from "sst/constructs"

export default ((): SSTConfig => ({
  config: () => ({
    name: "capi-multisig",
    region: "us-east-1",
    stage: "dev",
  }),
  stacks(app) {
    app.stack(({ stack }) => {
      const api = new Api(stack, "api", {
        routes: {
          "GET /something": "server/something.handler",
        },
      })
      new StaticSite(stack, "site", {
        vite: { types: "env.d.ts" },
        path: "target/www",
        indexPage: "index.html",
        environment: { API_URL: api.url },
      })
      stack.addOutputs({ ApiUrl: api.url })
    })
  },
}))()
