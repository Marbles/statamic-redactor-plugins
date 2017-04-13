var elixir = require('laravel-elixir');

elixir(function(mix) {
    
    mix.scripts([
        'plugins/*.js',
        'custom.js'
    ], 'resources/assets/js/scripts.js');
});