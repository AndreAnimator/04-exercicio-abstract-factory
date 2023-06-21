import IDeliveryFactory from "../deliverys/interfaces/IDeliveryFactory";
import IDrink from "../foods/drink/interfaces/IDrink";
import IFood from "../foods/food/interfaces/IFood";

export default class Client{
    private drink: IDrink;
    private food: IFood;

    constructor(delivery: IDeliveryFactory){
        this.drink = delivery.createDeliveryDrink();
        this.food = delivery.createDeliveryFood();
    }

    startDelivery(): void{
        this.drink.startDelivery();
        this.food.startDelivery();
    }
}