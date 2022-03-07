const {test_data}=require("../test_data");

const shopping_items=[];

export const add_items=(barcode)=>{
  const shopping_item = test_data.find((item)=>item.barcode === barcode);
  const isItemAvailable = shopping_items.length && shopping_items.find((shoppingItem) => shoppingItem.barcode === barcode);
  if (shopping_item && !isItemAvailable) {
    shopping_items.push({...shopping_item,quantity:1,totalPrice:shopping_item.price*1});
    return shopping_items;
  } else if(isItemAvailable){
     window.alert("This Item Already Exist in Cart !!");
  }
}

export const update_quantity=(barcode,updateAction)=>{
  return shopping_items.length && shopping_items.map((item)=>{
    if(item.barcode === barcode){
      updateAction === "increment" && (item.quantity++);
      updateAction === "decrement" && (item.quantity--);
      item.totalPrice=item.price*item.quantity;
    }
    return item;
  })
}

export const remove_items=(barcode)=>{
  const remove_index = test_data.findIndex((item)=>item.barcode === barcode);
  if (remove_index) {
    shopping_items.splice(remove_index,1);
    return shopping_items;
  }
}

