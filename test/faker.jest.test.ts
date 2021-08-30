import faker from "faker";

describe("faker tests", () => {
    jest.setTimeout(20000); //(has no effect)

    it("it can use faker", () => {
        //Results in error:
        /*
        Some long running code has been detected: one of your files is taking more than 5000ms to execute.
        Execution of the following files has started but has not finished:
            - test/faker.jest.test.ts
        Try commenting out the test or excluding the test file from the `tests` list in your wallaby config,
        and restarting wallaby to make sure that it is this test/file causing the issue and not something else.
        Pinging test runner sandbox...
        The sandbox is not responsive. Check for possibly recently introduced infinite loops.
        */

        let adjective = faker.commerce.productAdjective().toLowerCase();
        console.log(adjective);
    });
});