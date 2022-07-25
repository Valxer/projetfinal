import { Commande } from "./commande";

export class Client {
    id:string;
    password:string;
    nom:string;
    prenom:string;
    adresse:string;
    commandes: Array<Commande>;

    constructor(id:string, password:string){
        this.id=id;
        this.password=password;
    }
}
