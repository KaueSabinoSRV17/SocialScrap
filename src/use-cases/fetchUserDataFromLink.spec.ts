import { it, describe, expect } from "vitest";
import { LinkedinScrapper } from "../models/scrappers/linkedinScrapper";
import { User } from "../models/user/user";
import { FetchUserDataFromLink } from "./fetchUserDataFromLink";


describe('Fetch User Data From Link Use Case', () => {

    const scrapper = new LinkedinScrapper('https://www.linkedin.com/in/kaue-villaça-de-almeida/')
    

    it('should be sucessfull if the User links are not empty', async () => {

        const sut = new FetchUserDataFromLink(scrapper)

        const user = await sut.execute()

        expect(user).toBeInstanceOf(User)

    })

})