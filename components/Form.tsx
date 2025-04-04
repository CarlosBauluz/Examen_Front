import { FunctionalComponent } from "preact/src/index.d.ts";

const Form: FunctionalComponent = () => { 
  return (
    <form method="GET" action="/" class="formulario">
      <input placeholder="telefono" name="telefono" type="text" required></input>
      <button type="submit">Buscar</button>
    </form>
  )
}

export default Form