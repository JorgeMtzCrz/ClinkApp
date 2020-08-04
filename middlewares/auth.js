exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) return res.redirect("/auth/perfil");
    next();
};

exports.isAdmin = (req, res, next) => {
    if (req.user.role === "admin") return next();
    return res.redirect('perfil');
};

exports.isAuth = (req, res, next) => {
    if (!req.isAuthenticated()) return res.redirect("/auth/login");
    next();
};

exports.checkLoggedUser = (req, res, next) => {
    req.user ? (req.app.locals.loggedUser = true) : (req.app.locals.loggedUser = false)
    next()
}