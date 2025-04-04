import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Ciudad, Country, TempAPI } from "../../utils/api.ts";
import { CityAPI, CountryAPI, TODO, WeatherAPI } from "../../utils/type.ts";

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext) => {
    const url = new URL(req.url);
    const { ciudad } = ctx.params
    if (ciudad) { 
      const citys: CityAPI = await Ciudad(ciudad)
      const tempera: WeatherAPI = await TempAPI(citys.latitude, citys.longitude)
      const respuesta: TODO = {
        temp: tempera.temp,
        city: citys.name,
        country: citys.country
      }
      return ctx.render(respuesta);

    }

    return ctx.render();

    
  },
};

const Page = (props: PageProps<TODO>) => { 
  const a = props.data
  console.log(a.temp)
  return (
    <div>
      <p>{ a.city}</p>
      <a href={`/city/${a.country}`}><p>{a.country}</p></a>
      <p>{ a.temp}</p>
    </div>
  )

}
export default Page