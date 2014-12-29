requirejs.config({
    baseUrl: '/javascripts',
    
    map:{
        '*':{
        },
    },
    
    paths: {
        app:'app',
        model:'model',
        view:'view',
        template:'../template',
        jquery: [
            'jquery-1.11.1.min'
        ],
        underscore: [
            'underscore-min'
        ],
        bootstrap:[
            'bootstrap'
        ]        
    },
    
    shim:{
        'underscore':   {exports: '_'},
        'bootstrap':    {deps:['jquery']}
    }
});
 