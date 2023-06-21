import IDrink from "../../foods/drink/interfaces/IDrink";
import IFood from "../../foods/food/interfaces/IFood";

export default interface IDeliveryFactory{
    createDeliveryDrink(): IDrink;
    createDeliveryFood(): IFood;
}