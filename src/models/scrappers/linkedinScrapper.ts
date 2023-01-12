import { User } from "../user/user";
import { Scrapper } from "./scrapper";

export class LinkedinScrapper implements Scrapper {

    constructor(public link: string) {}

    execute(): Promise<User> {
        throw new Error('Not implemented yet')
    }

}