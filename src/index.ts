import Client from "./clients/Client";
import AiqFomeDelivery from "./deliverys/AiqFomeDelivery";
import IFoodDelivery from "./deliverys/IFoodDelivery";
import Company from "./deliverys/consts/Company";
import IDeliveryFactory from "./deliverys/interfaces/IDeliveryFactory";

const currentCompany = Company.AIQFOME;
let delivery! : IDeliveryFactory;

switch(currentCompany){
    case Company.AIQFOME :
        delivery = new AiqFomeDelivery();
        break;
    case Company.IFOOD :
        delivery = new IFoodDelivery();
        break;
    default :
        console.log("Delivery não definido.");
        break;
}

const client = new Client(delivery);
client.startDelivery();