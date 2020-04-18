import { getAnimals } from './index'


describe("Testing arrays", () => {
  test("Animales trae un gato", () => {
    expect(getAnimals()).toContain("Cat")
  })

  test("Animales no trae un gato", () => {
    expect(getAnimals()).not.toContain("Wolf")
  })


  test("Comprobar el tamaño del arreglo", () => {
    expect(getAnimals()).toHaveLength(4)
  })
})