import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Country } from "../../utils/api.ts";
import { CountryAPI } from "../../utils/type.ts";

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext) => {
    const url = new URL(req.url);
    const { pais } = ctx.params
    const country = await Country(pais)
    
    
    return ctx.render(country);
  },
};

const Page = (props: PageProps<CountryAPI>) => { 
  const a = props.data
  return (
    <div>
      <p>{ a.name}</p>
      <a href={`/city/${a.capital}`}><p>{ a.capital}</p></a>
    </div>
  )

}

export default Page