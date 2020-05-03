import { isNull, isTrue, isFalse, isUndefined } from './index'


describe("Testing true, false, null", () => {
  test("is Null", () => {
    expect(isNull()).toBeNull()
  })

  test("is true", () =>{
    expect(isTrue()).toBeTruthy()
  })

  test("is false", () =>{
    expect(isFalse()).toBeFalsy()
  })

  test("is undefined", () =>{
    expect(isUndefined()).toBeUndefined()
  })


  test("is not false", () =>{
    expect(isFalse()).not.toBeTruthy()
  })
})