import { sum } from './index'


describe("TEsting number functions", () => {
  test("igual" ,() => {
    const result = sum(1,2)
    expect(result).toBe(3)
  })

  test("mayor" ,() => {
    const result = sum(4,4)
    expect(result).toBeGreaterThan(7)
  })

  test("mayor o igual" ,() => {
    const result = sum(4,4)
    expect(result).toBeGreaterThanOrEqual(8)
  })

  test("Menor que" ,() => {
    const result = sum(1,2)
    expect(result).toBeLessThan(10)
  })

  test("Menor que o igual" ,() => {
    const result = sum(1,2)
    expect(result).toBeLessThanOrEqual(3)
  })

  test("Flotantes" ,() => {
    const result = sum(0.2,0.2)
    expect(result).toBeCloseTo(0.4)
  })
})