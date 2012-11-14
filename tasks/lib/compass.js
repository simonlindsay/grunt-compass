exports.init = function( grunt ) {
    'use strict';

    var exports = {};
    var path    = require( 'path' );
    var _       = grunt.utils._; // once grunt 0.4.0 is used it needs to be renamed to 'grunt.util._'

    // Build CSS with compass compile
    exports.optsToArgs = function( opts, done ) {

        var args = [];

        opts = this.cleanInput( opts );

        Object.keys( opts ).forEach( function( el ) {
            var val = opts[ el ];

            el = el.replace( /_/g, '-' );

            if ( val === true ) {
                args.push( '--' + el );
            }

            if ( _.isString( val ) ) {
                args.push( '--' + el, val );
            }

            if( _.isArray( val ) ) {
                val.forEach( function( subval ) {
                    args.push( '--' + el, subval );
                });
            }
        });

        return args;
    };

    exports.cleanInput = function( opts ) {
        // use _.map or es5 equivalent to go over the object
        // and combine and change ie. dir options to make them
        // command line ready.
        // this can be called in optsToargs, so the function can do it's thing
        var arrayOfTargetKeys = [ 'src', 'dest', 'dir' ];
        var obj = {};

        Object.keys( opts ).forEach( function( el ) {
            if ( el in opts ) {
                if ( el === 'src' ) {
                    obj[ 'sass-dir="' + opts[ el ] + '"' ] = true;
                }
                else if ( el === 'dest' ) {
                    obj[ 'css-dir="' + opts[ el ] + '"' ] = true;
                }
                delete opts[ el ];

            }
        });
        _.extend( opts, obj );

        return opts;
    };

    // Output to the console
    exports.consoleOutput = function( error, stdout, stderr, done ) {
        grunt.log.write( '\n\nCOMPASS output:\n' );
        grunt.log.write( stdout );

        // compass sends falsy error message to stderr... real sass/compass errors come in through the "error" variable.
        if ( error !== null ) {
            grunt.log.error( error );
            done( false );
        }
        else {
            done( true );
        }
    };

  return exports;
};

////
/*
module.exports = function( grunt ) {
  'use strict';

  var _ = grunt.util._;

  function optsToArgs( opts ) {
    var args = [];

    Object.keys( opts ).forEach(function( el ) {
      var val = opts[ el ];

      el = el.replace( /_/g, '-' );

      if ( val === true ) {
        args.push( '--' + el );
      }

      if ( _.isString( val ) ) {
        args.push( '--' + el, val );
      }

      if( _.isArray( val ) ) {
        val.forEach(function( subval ) {
          args.push( '--' + el, subval );
        });
      }
    });

    return args;
  }

  grunt.registerMultiTask( 'compass', 'Compass task', function() {
    var cb = this.async();
    var args = optsToArgs( this.options() );

    var compass = grunt.util.spawn({
      cmd: 'compass',
      args: ['compile'].concat( args )
    }, function( err, result, code ) {
      if ( /not found/.test( err ) ) {
        grunt.fail.fatal('You need to have Compass installed.');
      }
      // Since `compass compile` exits with 1 when it has nothing to compile,
      // we do a little workaround by checking stdout which is then empty
      // https://github.com/chriseppstein/compass/issues/993
      cb( code === 0 || !result.stdout );
    });

    compass.stdout.pipe( process.stdout );
    compass.stderr.pipe( process.stderr );
  });
};
*/

