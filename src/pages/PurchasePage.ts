import { Page } from "@playwright/test";

export class PurchasePage{
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async withFirstLast(name){
        await this.page.click('[placeholder="First Last"]');
        await this.page.fill('[placeholder="First Last"]', name);
    }

    async withAddress(address){
        await this.page.click('[placeholder="123 Main St."]');
        await this.page.fill('[placeholder="123 Main St."]', address);
    }

    async withTown(town){
        await this.page.click('[placeholder="Anytown"]');
        await this.page.fill('[placeholder="Anytown"]', town);
    }

    async withCardType(cardType){
        await this.page.selectOption('select[name="cardType"]', cardType);
    }

    async withCardNumber(cardNumber){
        await this.page.click('[placeholder="Credit Card Number"]');
        await this.page.fill('[placeholder="Credit Card Number"]', cardNumber);
    }

    async withMonth(month){
        await this.page.click('[placeholder="Month"]');
        await this.page.fill('[placeholder="Month"]', month);
    }

    async withYear(year){
        await this.page.click('[placeholder="Year"]');
        await this.page.fill('[placeholder="Year"]', year);
    }

    async withnameInCreditCard(name){
        await this.page.click('[placeholder="John Smith"]');
        await this.page.fill('[placeholder="John Smith"]', name);
    }
    
    async purchaseFlights(){
        await this.page.click('text=Purchase Flight');
}
}