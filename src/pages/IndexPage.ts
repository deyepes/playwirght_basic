import { Page } from "@playwright/test";

export class IndexPage{
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async goToHome(){
        await this.page.goto("https://blazedemo.com/index.php")
    }

    async departureCity(city){
        await this.page.selectOption('select[name="fromPort"]', city);
    }

    async destinationCity(city){
        await this.page.selectOption('select[name="toPort"]', city);
    }
    async FindFlights(){
    await this.page.click('text=Find Flights');}
}