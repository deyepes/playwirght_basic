import { Page } from "@playwright/test";

export class ConfirmationPage{
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }
    
    async getTitle(){
        return await this.page.innerText('h1');
    }
}