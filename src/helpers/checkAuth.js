// create middleware to check if user is logged in

const checkAuth = (req, res, next) => {
  const userId = req.session?.userid;
  // console.log(req.session);
  if (!userId) {
    res.redirect('/auth');
    return;
  }

  next();
};

module.exports = checkAuth;
