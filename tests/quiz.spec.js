const { test, expect } = require('@playwright/test');

const questionsData = [
    {
        id: 1,
        question: "Mis on Eesti pealinn?",
        options: ["Tartu", "Tallinn", "Narva"],
        correct: "Tallinn"
    },
    {
        id:2,
        question: "test2?",
        options: ["test2", "test3", "test4"],
        correct: "test2"
    },
    {
        id: 3,
        question: "Mitu paikset on?",
        options: ["1", "2", "paris palju"],
        correct: "1"
    },
    {
        id: 4,
        question: "Mis on koige parem koht eestis?",
        options: ["Tartu", "Tallinn", "Tsoglo"],
        correct: "Tsoglo"
    },
    {
        id: 5,
        question: "Mitu tähte a on sõnas maasikas?",
        options: ["1", "2", "3","4","5"],
        correct: "3"
    },
    {
        id: 6,
        question: "Mida tähendab NAT?",
        options: ["Nice Attitude Today", "Network Aadress Translation", "Network Attrition Topology"],
        correct: "Network Aadress Translation"
    },
];

test.describe('viktoriin playwright test', () => {

    test('viktoriini täisvoog: alustamine, vastamine ja tulemus', async ({ page }) => {
        await page.goto('http://localhost:3000');
        await page.click('text=Alusta viktoriini');

        const question1Text = await page.locator('h1').innerText();
        const question1Data = questionsData.find(q => q.question === question1Text);
        const rightAnswer = question1Data.options.find(opt => opt == question1Data.correct);
        await page.click(`button:has-text("${rightAnswer}")`);
        await expect(page.locator('.score')).toContainText('Punktid: 1');
        const rightBtn = page.locator(`button:has-text("${rightAnswer}")`);
        await expect(rightBtn).toHaveCSS('background-color', 'rgb(77, 193, 77)');
        await page.click('text=Järgmine küsimus');

        const question2Text = await page.locator('h1').innerText();
        const question2Data = questionsData.find(q => q.question === question2Text);
        const wrongAnswer = question2Data.options.find(opt => opt !== question2Data.correct);
        await page.click(`button:has-text("${wrongAnswer}")`);
        await expect(page.locator('.score')).toContainText('Punktid: 1');
        const wrongBtn = page.locator(`button:has-text("${wrongAnswer}")`);
        await expect(wrongBtn).toHaveCSS('background-color', 'rgb(220, 25, 25)');

        for (let i = 0; i < questionsData.length-2; i++) {
            await page.click('text=Järgmine küsimus');
            const currentQText = await page.locator('h1').innerText();
            const currentQData = questionsData.find(q => q.question === currentQText);
            await page.click(`button:has-text("${currentQData.correct}")`);
        }
        await page.click('text=Järgmine küsimus');
        await expect(page.locator('h1')).toContainText('Tulemus: 5 / 6');
        await expect(page.locator('.row-wrong')).toHaveCount(1);
    });
});