import { traerMensaje } from './index'


describe("Testeando callbacks", () => {
  //Para hacer saber a jest que se ha ejecutado todo el codigo usamos la funcion done
  test("callback", done => {
    function msj(string){
      expect(string).toBe("Hola amigos")
      done()
    }

    traerMensaje(msj)
  })
})