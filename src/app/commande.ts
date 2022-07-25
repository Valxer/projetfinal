import { Client } from "./client";
import { IdCommandeArticle } from "./id-commande-article";

export class Commande {
    id:number;
    client: Client;
    date: Date;
    articles: Array<IdCommandeArticle>;
    total:number;
}
