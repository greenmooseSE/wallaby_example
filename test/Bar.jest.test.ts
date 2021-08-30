
describe("Bar jest tests", () => {
    async function sleep(ms: number): Promise<void> {
        await _sleep(ms);
    }

    function _sleep(ms: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    it("can run a test", () => {
        console.log('Foo');
    });

    it("can display perf for awaited method", async () => {
        await sleep(100); /*?.*/
        console.log('foo'); /*?.*/
    });
});