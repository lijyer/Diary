//判断登录权限的
//如果你登录 req.cookies
//数据库匹配

module.exports = function (req, res, next) {
    // if (req.cookies.username && req.signedCookies.password) {
    //     //登录成功
    //     next();
    // } else {
    //     //没有登录成功
    //     res.redirect("/login");
    // }

    if(req.session.username&&req.session.password){
        next()
    }else{
        res.redirect('/login');
    }
    
}