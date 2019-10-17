import { ToTest } from "./to_test";


describe('toTest', () =>{

    it('shold return hello from hello', () => {
        
        expect(new ToTest().returnHello()).toBe('hello');


    });


});