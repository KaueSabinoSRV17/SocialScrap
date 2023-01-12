import { User } from "../user/user";
import { WebComponent } from "../web/webComponent";

export  abstract class Scrapper {

    constructor(private link: string){}

    abstract execute(): Promise<User> 

}