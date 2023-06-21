import SoftDrink from "../foods/drink/SoftDrink";
import IDrink from "../foods/drink/interfaces/IDrink";
import HotDog from "../foods/food/Hotdog";
import IFood from "../foods/food/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class AiqFomeDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new SoftDrink();
    }
    createDeliveryFood(): IFood {
        return new HotDog();
    }
    
}