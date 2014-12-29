
var dbschema = require('../modules/db');
var User = dbschema.User;

exports.index = function(req, res){
res.render('index', { title: 'Index' });
};

exports.login = function(req, res){
res.render('login', { title: '用户登陆'});
};

exports.doLogin = function(req, res){
	
	console.log("start login username:"+req.body.username+" password:"+req.body.password);
	
	User.find({username: req.body.username, password:req.body.password}, function(err,docs){
       console.log(docs);
  		if (docs.length==0 ){
  			console.log("verify failed!");
			res.redirect('/login');
  		}
  		else{
  			console.log("verify success!");  			
  			req.session.username=req.body.username;            
  			console.log(req.session.username);
            res.redirect('/home');
        }	        
  	 })	
	
};

exports.logout = function(req, res){
    console.log("user logout!");
	req.session.username=null;
	res.redirect('/')
};
exports.home = function(req, res){		
	res.render('home', { title: 'Home'});
};

exports.Register = function(req, res){		
	res.render('register', { title: 'Register',errormessage:''});
};

exports.doRegister = function(req, res){				
	console.log("start register username:"+req.body.username+" password:"+req.body.password+" repassword:"+req.body.repassword);
	
	if (req.body.password != req.body.repassword)
	{		
		res.render('register', { title: 'Register',errormessage:'两次输入的密码不一致!'});
		return ;
	}
	
	User.find({username: req.body.username}, function(err,docs){       
  		if (docs.length!=0 ){
  			res.render('register', { title: 'Register',errormessage:'用户名已经被占用'});
  			return ;	
  		}
  		var NewUser = {username:req.body.username, password:req.body.password};
		User.create(NewUser, function(error){
	    	if(error) {
	        	console.log(error);
	        	res.render('register', { title: 'Register',errormessage:'注册失败!'});
	    	} else {
	        	console.log('save ok');
				res.redirect('/login'); 	
	    	}
    	});  	
  	});	
  	
};