import { expect, test as base } from '@playwright/test';
import { ConfirmationPage } from '../src/pages/ConfirmationPage';
import { IndexPage} from '../src/pages/IndexPage';
import { PurchasePage } from '../src/pages/PurchasePage';
import { ReservePage } from '../src/pages/ReservePage';

const homeTest = base.extend<{ indexPage: IndexPage }>({
    indexPage: async ({ page }, use) => {
    const indexPage = new IndexPage(page);
    await indexPage.goToHome();
    await use(indexPage)
    }
  })
  
homeTest(`Dado que quiero viajar
        Cuando selecciono origen Philadelphia y destino New York
        Then me debería mostrar el mensaje`, async({page, indexPage}) => {

            const reservePage = new ReservePage(page);
            const purchasePage = new PurchasePage(page);
            const confirmationPage = new ConfirmationPage(page);

            await indexPage.departureCity('Philadelphia');
            await indexPage.destinationCity('New York');
            await indexPage.FindFlights();
            expect(page.url()).toBe('https://blazedemo.com/reserve.php');

            await reservePage.flight('234 United Airlines 7:43 AM 10:45 PM $432.98')
            expect(page.url()).toBe('https://blazedemo.com/purchase.php');

            await purchasePage.withFirstLast('Daniel');
            await purchasePage.withAddress('123 Main FL');
            await purchasePage.withTown('Anytown');
            await purchasePage.withCardType('amex');
            await purchasePage.withCardNumber('123412333765223');
            await purchasePage.withMonth('12');
            await purchasePage.withYear('2025');
            await purchasePage.withnameInCreditCard('Daniel');
            await purchasePage.purchaseFlights();
            expect(page.url()).toBe('https://blazedemo.com/confirmation.php');
            homeTest.expect(await confirmationPage.getTitle()).toContain("Thank you for your purchase today!")
})