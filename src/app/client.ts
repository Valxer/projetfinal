import { Commande } from "./commande";

export class Client {
    id:string;
    password:string;
    nom:string;
    prenom:string;
    adresse:string;
    commandes: Array<Commande>;

}
