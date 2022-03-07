import { sum, mul, sub, div,notify} from '../components/math';
import { add_items, remove_items, update_quantity } from "../components/shopping_cart";

jest.spyOn(window,'alert').mockImplementation(()=>{});

describe("Maths",()=>{
  test('Adding 1 + 1 equals 2', () => {
    expect(sum(1, 1)).toBe(2)
  })

  test('Adding 1 + 1 equals 2', () => {
    expect(sum(1, 1)).toBe(3)
  })


  test('Multiplying 1 * 1 equals 1', () => {
    expect(mul(1, 1)).toBe(1)
  })

  test('Multiplying 1 * 1 equals 1', () => {
    expect(mul(1, 1)).toBe(2)
  })

  test('Subtracting 1 - 1 equals 0', () => {
    expect(sub(1, 1)).toBe(0)
  })

  test('Subtracting 1 - 1 equals 0', () => {
    expect(sub(1, 1)).toBe(1)
  })


  test('Dividing 1 / 1 equals 1', () => {
    expect(div(1, 1)).toBe(1)
  })

  test('Dividing 1 / 1 equals 1', () => {
    expect(div(1, 1)).toBe(0)
  })
})

describe("Shopping Cart",()=>{
  test('Add a new Item with barcode 1001 to cart',()=>{
    var shopping_items=add_items(1001);
    expect(shopping_items).toEqual(expect.arrayContaining([
      expect.objectContaining({barcode: 1001})
    ]))
  })
  
  test('Add an Item with barcode 1001 to cart again',()=>{
    add_items(1001);
    expect(window.alert).toBeCalledWith("This Item")
  })
  
  test('Add a new Item with barcode 2002 to cart',()=>{
    const shopping_items=add_items(2002);
    expect(shopping_items).toEqual(expect.arrayContaining([
      expect.objectContaining({barcode: 2002})
    ]))
  })

  test('Increment quantity for Item with barcode 2002',()=>{
    const shopping_items=update_quantity(2002,"increment");
    expect(shopping_items).toEqual(expect.arrayContaining([
      expect.objectContaining({barcode: 2002,quantity:2})
    ]))
  })

  test('Decrement the quantity for Item with barcode 2002',()=>{
    const shopping_items=update_quantity(2002,"decrement");
    expect(shopping_items).toEqual(expect.arrayContaining([
      expect.objectContaining({barcode: 2002,quantity:1})
    ]))
  })

  test('Decrement the quantity for Item with barcode 2002',()=>{
    const shopping_items=update_quantity(2002,"decrement");
    expect(shopping_items).toEqual(expect.arrayContaining([
      expect.objectContaining({barcode: 2002,quantity:1})
    ]))
  })

  test('Remove Item with barcode 2002 from the cart',()=>{
    const shopping_items=remove_items(2002);
    expect(shopping_items).toEqual(expect.arrayContaining([
      expect.objectContaining({barcode: 2002})
    ]))
  })

  test('Remove item with bar code 1001',()=>{
    const shopping_items=remove_items(1001);
    expect(shopping_items).toEqual(undefined);
  })
})

