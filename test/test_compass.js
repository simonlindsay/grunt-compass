var grunt   = require( 'grunt' );
var compass = require( '../tasks/lib/compass' ).init( grunt );

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.compass = {
    setUp: function( done ) {
        'use strict';

        // setup here
        done();
    },
    dirs: function( test ) {
        'use strict';

        var dataSet;

        test.expect( 1 );

        // Options object
        dataSet = {
            src: 'sass',
            dest: 'css'
        };

        test.strictEqual( compass.optsToArgs( dataSet ), ['--sass-dir="sass"', '--css-dir="css"'], 'Should return the right arguments for the cli.' );

        test.done();
    }
    /*specify: function( test ) {
        'use strict';

        var dataSet1, dataSet2;

        // Expect two tests to be run
        test.expect( 2 );

        // Test minimatch option
        dataSet1 = {*/
            //specify: 'test/sass/**/*.scss',
            /* src: 'sass',
            dest: 'css'
        };

        test.equal( compass.optsToArgs( dataSet1 ),
            'compass compile --sass-dir="sass" --css-dir="css" test/sass/other.scss test/sass/test.scss',
            'should return the correct command.' );

        // Test specific file
        dataSet2 = {
            specify: 'test/sass/other.scss',
            src: 'sass',
            dest: 'css'
        };

        test.equal( compass.optsToArgs( dataSet2 ),
            'compass compile --sass-dir="sass" --css-dir="css" test/sass/other.scss',
            'should return the correct command.' );

        test.done();
    },
    outputstyle: function( test ) {
        'use strict';

        var dataSet;

        test.expect( 1 );

        // Options object
        dataSet = {
            src: 'sass',
            dest: 'css',
            outputstyle: 'compressed'
        };

        test.equal( compass.optsToArgs( dataSet ),
            'compass compile --sass-dir="sass" --css-dir="css" --output-style compressed',
            'should return the correct command.' );

        test.done();
    },
    linecomments: function( test ) {
        'use strict';

        var dataSet;

        test.expect( 1 );

        // Options object
        dataSet = {
            src: 'sass',
            dest: 'css',
            linecomments: false
        };

        test.equal( compass.optsToArgs( dataSet ),
            'compass compile --sass-dir="sass" --css-dir="css" --no-line-comments',
            'should return the correct command.' );

        test.done();
    },
    debugsass: function( test ) {
        'use strict';

        var dataSet;

        test.expect( 1 );

        // Options object
        dataSet = {
            src: 'sass',
            dest: 'css',
            debugsass: true
        };

        test.equal( compass.optsToArgs( dataSet ),
            'compass compile --sass-dir="sass" --css-dir="css" --debug-info',
            'should return the correct command.' );

        test.done();
    }*/
};
