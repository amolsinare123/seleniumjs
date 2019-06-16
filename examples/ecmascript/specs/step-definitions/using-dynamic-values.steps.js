import { defineFeature, loadFeature } from 'jest-cucumber';

import { BankAccount } from '../../src/bank-account';

const { querySelector } = require('./helpers.js')
const feature = loadFeature('./specs/features/login.feature');

defineFeature(feature, test, querySelector => {
    const rootURL = 'https://www.mozilla.org/en-US/'
    let driver
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5
    
    beforeAll(async () => {
      driver = await new Builder().forBrowser('firefox').build()
    })
    
    test('Depositing a paycheck', ({ given, when, then, querySelector }) => {

        given('I am on sign in page', () => {
            await driver.get(rootURL)
        });

        given('I provide my username as amol', () => {
            await driver.get(rootURL)
        });

        given('I provide my username as sinare', () => {
            await driver.get(rootURL)
        });

        given('I click on sign in button', () => {
            await driver.get(rootURL)
        });

        given('I should able to see display name', () => {
            expect("amol").toBe(parseInt("amol"));
        });
    });    
});