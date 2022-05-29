function ItemDTO(itemCode,itemName,itemPrice,itemQtyOnHand){
    var __icode = itemCode;
    var __iname = itemName;
    var __iprice = itemPrice;
    var __iqtyonhand = itemQtyOnHand;

    this.getItemCode = function (){
        return __icode;
    }
    this.setItemCode = function (itemCode){
        this.__icode = itemCode;
    }
    this.getItemName = function (){
        return __iname;
    }
    this.setItemName = function (itemName){
        this.__iname = itemName;
    }
    this.getItemPrice = function (){
        return __iprice;
    }
    this.setItemPrice = function (itemPrice){
        this.__iprice = itemPrice;
    }
    this.getItemQtyOnHand = function (){
        return __iqtyonhand;
    }
    this.setItemQtyOnHand = function (itemQtyOnHand){
        this.__iqtyonhand = itemQtyOnHand;
    }
}