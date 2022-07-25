import { IdCommandeArticle } from "./id-commande-article";

export class Article {
    ref: number;
    nom: string;
    description:string;
    prix:number;
    image:string;
    commandes: Array<IdCommandeArticle>;
}
