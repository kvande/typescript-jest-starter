import { ToTest } from "./toTest";

describe('toTest', () => {

    it('shold return hello from hello', () => {
        
        expect(new ToTest().returnHello()).toBe('hello');
    });

});