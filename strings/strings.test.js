describe("Testeando strings", () => {
  const texto = "Hello world!"
  test("regex", () => {
    expect(texto).toMatch(/world\!$/i)
  })

  test("not regex", () => {
    expect(texto).not.toMatch(/mundo/)
  })

  test("length mayor de 10 caracteres", () => {
    expect(texto.length).toBeGreaterThan(10)
  })
})