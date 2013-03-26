var assert = chai.assert;
var should = chai.should();

describe('Hello Greeter for myapp', function(){

    describe('test greet', function(){

        var greeter = new myapp.Greeter();
        it("should be return hello world",function(){
            console.log('hello');
            assert.equal("Hello World!", greeter.greet("World"));
        });
        });


    describe('test greet null', function(){
        var greeter = new myapp.Greeter();
        it("should not null",function(){
            console.log('not null');
            assert.isNotNull(greeter);
        });

    });
});
