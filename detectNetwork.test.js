/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 8, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
//   // A Mocha test is just a function!
//   // If the function throws an error when run, it fails.
//   // If it doesn't throw an error when run, it doesn't fail. 

//   // Once you've read and understood this section, please comment it out. 
//   // You will not be able to proceed with a failing test. 

//   it('Throws an error so it fails', function() {
//     throw new Error('Delete me!');
//   });

//   it('Doesn\'t throw an error, so it doesn\'t fail', function() {
//     // This test doesn't really test anything at all! It will pass no matter what.
//     var even = function(num){
//       return num/2 === 0;
//     }
//     return even(10) === true;
//   });

//   // In tests, we want to compare the expected behavior to the actual behavior.
//   // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num/2 === 0;
//     }

//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });

// })

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
      
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

});


describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if (!isTrue) {
      throw new Error('Test failed');
    }
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});


describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});


describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;

  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var should = chai.should();
  // Notice when should is assigned, unlike with assert and expect, the function is called.
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  });
});


describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  // Discover Card Rules: 
  // IIN Ranges: 6011, 622126-622925, 644-649, 65
  // Length(s): 16, 19
  var should = chai.should();

  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011123456789012').should.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011234567890123456').should.equal('Discover');
  });

  it('has a randomly chosen prefix of between 622126-622925 and a length of 16 or 19', function() {
    for(var i = 0; i < 3; i++){
      // Use 3 randomly generated test numbers within the accepted IIN range with which to test.
      var randPrefix = Math.floor(Math.random() * 800) + 622126;
      detectNetwork(randPrefix + '7890123456').should.equal('Discover');
      detectNetwork(randPrefix + '7890123456789').should.equal('Discover');
    }
  });

  it('has a randomly chosen prefix of between 644-649 and a length of 16 or 19', function() {
    for(var i = 0; i < 3; i++){
      // Use 3 randomly generated test numbers within the accepted IIN range with which to test.
      var randPrefix = Math.floor(Math.random() * 6) + 644;
      detectNetwork(randPrefix + '1234567890123').should.equal('Discover');
      detectNetwork(randPrefix + '1234567890123456').should.equal('Discover');
    }
  });

  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6511234567890123').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6511234567890123456').should.equal('Discover');
  });

});


describe('Maestro', function() {
  var should = chai.should();

  // Maestro Card Rules:
  // IIN ranges: 5018, 5020, 5038, 6304, 6761, 6763
  // Length(s): 12-19
  var iinChoices = [5018, 5020, 5038, 6304, 6761, 6763];
  while(iinChoices.length){
    for(var i = 0; i < 3; i++){
      var randLengthener = Math.floor(Math.random() * 100000000);
      it('has a randomly chosen prefix of between 56-69 and a randomly chosen length of between 12-19', function(){
        detectNetwork(iinChoices[0] + '1234567' + randLengthener).should.equal('Maestro');
      })
    }
    iinChoices.shift();
  }
});


describe('should support China UnionPay', function() {
  var should = chai.should();

  // China UnionPay Card Rules:
  // IIN ranges: 624-626, 6282-6288
  // Length(s): 16-19
  for(var i = 624; i <= 626; i++){
    var randLengthener = Math.floor(Math.random() * 10000);
    it('has a prefix of between 624 and 626 and a randomly chosen length of between 16-19', function(){
      detectNetwork(i + '012345678901' + randLengthener);
    });
  }

  for(i = 6282; i <= 6288; i++){
    var randLengthener = Math.floor(Math.random() * 10000);
    it('has a prefix of between 6282 and 6288 and a randomly chosen length of between 16-19', function(){
      detectNetwork(i + '01234567890' + randLengthener);
    });
  }
});


describe('should support Switch', function() {
  var should = chai.should();

  // Switch Card Rules Card Rules:
  // IIN ranges: 4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759
  // Length(s): 16, 18-19
  var iinChoices = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];
  while(iinChoices.length > 0){
    var currPrefix = '' + iinChoices[0];
    var lengths = [16, 18, 19];
    for(var i = 0; i < 3; i++){
      var selectedLengthTest = lengths[i];
      while(currPrefix.length < selectedLengthTest){
        currPrefix += '0';
      }

      it('has one of the iinChoices prefixes and a length of 16, 18, or 19', function(){
        detectNetwork(currPrefix).should.equal('Switch');
      });
    }
    iinChoices.shift();
  }
});
