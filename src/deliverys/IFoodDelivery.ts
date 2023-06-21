import Beer from "../foods/drink/Beer";
import IDrink from "../foods/drink/interfaces/IDrink";
import Hamburguer from "../foods/food/Hamburguer";
import IFood from "../foods/food/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class IFoodDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new Beer();
    }
    createDeliveryFood(): IFood {
        return new Hamburguer();
    }
    
}