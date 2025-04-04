import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Form from "../components/Form.tsx";
import { Phone } from "../utils/api.ts";
import { PhoneAPI } from "../utils/type.ts";

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext) => {
    const url = new URL(req.url);
    const telefono = url.searchParams.get("telefono");
    if (telefono) { 
      const telefon = await Phone(telefono)
      return ctx.render(telefon)
    }
    return ctx.render();
  },
};

export default  function Home(props: PageProps<PhoneAPI>) {
  const a = props.data
  return (
    <div>
      <Form />
      <>{a === undefined? <p>Numero incorrecto</p> : a=== null ? <p>Numero incorrecto</p>:<a href={`/country/${a.country}`}> {a.country}</a>}</>
    </div>
  );
}
