define(["underscore"],function (require,exports,module){
    var table_list_temp = require('text!template/table_list.template.xml');    
    $(function(){
        $.get('./data/tables',function(data){
            var el=$('#table-list');
            var tpl = _.template(table_list_temp);
            el.html(tpl({table:data.result}));
        });
    });
});