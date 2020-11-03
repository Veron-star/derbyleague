const ROLES = {
    Admin: 'ROLE_ADMIN',
    Manager: 'ROLE_MANAGER',
    Member: 'ROLE_MEMBER'
  };
  
  const checkRole = (...roles) => (req, res, next) => {
    if (!req.user) {
      return res.status(401).send('Unauthorized');
    }
  
    const hasRole = roles.find(role => req.user.role === role);
    if (!hasRole) {
      return res.status(403).send('You are not allowed to make this request.');
    }
  
    return next();
  };
  
  const role = { ROLES, checkRole };
  
  module.exports = role;