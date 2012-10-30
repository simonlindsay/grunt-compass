exports.init = function( grunt ) {
    'use strict';

    var exports = {};
    var path    = require( 'path' );
    var _       = grunt.utils._;

    // Build CSS with compass compile
    exports.optsToArgs = function( opts, done ) {

        var args = [];

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
                val.forEach(function( subval ) {
                    args.push( '--' + el, subval );
                });
            }
        });

        return args;

        /* var src, dest, specify, matchedFiles;
        var command        = "compass compile";
        var config         = data.config;
        var images         = data.images;
        var fonts          = data.fonts;
        var outputstyle    = data.outputstyle;
        var linecomments   = data.linecomments;
        var forcecompile   = data.forcecompile;
        var debugsass      = data.debugsass;
        var relativeassets = data.relativeassets;
        var libRequire     = data.require;
        var bundleExec     = data.bundleExec;
        var environment    = data.environment;
        var importPath     = data.importPath;

        if ( data.src !== undefined ) {
            src = grunt.template.process( data.src );
        }

        if ( data.dest !== undefined ) {
            dest = grunt.template.process( data.dest );
        }

        if ( data.specify !== undefined ) {
            specify = grunt.template.process( data.specify );
        }

        if ( bundleExec ) {
            command = 'bundle exec ' + command;
        }

        if ( src !== undefined && dest !== undefined ) {
            command += ' --sass-dir="' + src + '" --css-dir="' + dest + '"';

            // Specify sass files to be compiled in directory `src`.
            if ( specify !== undefined ) {

                matchedFiles = grunt.file.expandFiles( specify );

                if ( matchedFiles.length > 0 ) {
                    // Add all files execept those which begin with an underscore to the `compile` command.
                    matchedFiles.forEach( function( file ) {
                        if ( path.basename( file ).charAt( 0 ) !== '_' ) {
                            command += ' ' + file;
                        }
                    });
                }
                else {
                    grunt.log.error( 'No file matched with: ' + specify );
                    done( false );
                }
            }
        }

        if ( config !== undefined ) {
            command += ' --config="' + config + '"';
        }

        if ( images !== undefined ) {
            command += ' --images-dir="' + images + '"';
        }

        if ( fonts !== undefined ) {
            command += ' --fonts-dir="' + fonts + '"';
        }

        if ( debugsass !== undefined ) {
            if ( debugsass === true ) {
                command += ' --debug-info';
            }
        }

        if ( relativeassets !== undefined ) {
            if ( relativeassets === true ) {
                command += ' --relative-assets';
            }
        }

        if ( outputstyle !== undefined ) {
            command += ' --output-style ' + outputstyle;
        }

        if ( linecomments === false ) {
            command += ' --no-line-comments';
        }

        if ( libRequire !== undefined ) {
            command += ' --require '+ libRequire;
        }

        if ( forcecompile === true ) {
            command += ' --force';
        }

        if ( environment !== undefined ) {
            command += ' -e ' + environment;
        }

        if ( importPath !== undefined ) {
            command += ' -I ' + importPath;
        }

        return command; */
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

