describe( 'calculator', function () {
  //Numbers from 1-100, 5 round of test
  for ( var i = 0; i < 3; i++ ) {

    // Generate random numbers
    var
      number1 = Math.floor( ( Math.random() * 100 ) + 1 ),
      number2 = Math.floor( ( Math.random() * 100 ) + 1 );

    describe( 'Test #' + i,
      function () {
        it( 'should add ' + number1 + ' plus ' + number2 + ' and be equals to ' + ( number1 + number2 ), function () {
          expect( Calculator.add( number1, number2 ) ).toBe( number1 + number2 );
        } );

        it( 'should add ' + number1 + ' plus ' + number2 + ' and be equals to ' + ( number1 + number2 ), function () {
          expect( Calculator.add( [ number1, number2 ] ) ).toBe( number1 + number2 );
        } );

        it( 'should add ' + 'a' + ' plus ' + number2 + ' and be equals to ' + ( 'a' + number2 ), function () {
          expect( Calculator.add( 'a', number2 ) ).toBe( 'a' + number2 );
        } );

        it( 'should subtract ' + number1 + ' from ' + number2 + ' and be equals to ' + ( number1 - number2 ), function () {
          expect( Calculator.sub( number1, number2 ) ).toBe( number1 - number2 );
        } );

        it( 'should multiply ' + number1 + 'x' + number2 + ' and be equals to ' + ( number1 * number2 ), function () {
          expect( Calculator.mul( number1, number2 ) ).toBe( number1 * number2 );
        } );

        it( 'should divide ' + number1 + '/' + number2 + ' and be equals to ' + ( number2 && number1 / number2 ), function () {
          expect( Calculator.div( number1, number2 ) ).toBe( number2 && number1 / number2 );
        } );
      } );
  }

 
    } );
} );
