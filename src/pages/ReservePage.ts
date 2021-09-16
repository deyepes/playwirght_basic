import { Page } from "@playwright/test";

export class ReservePage{
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }
    
    async flight(flight){
        await this.page.click('text=Choose This Flight '+flight+' >> input[type="submit"]');
    }
}