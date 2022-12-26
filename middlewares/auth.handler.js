const boom = require('@hapi/boom');
const { config } = require('./../config/config');

function checkApiKey(req, res, next) {
  const apiKey = req.headers['api'];
  if (apiKey === config.apiKey) {
    next();
  } else {
    next(boom.unauthorized());
  }
}

// function checkAdminRole(req, res, next) {
//   const { user } = req;
//   console.log({ user });
//   if (user.role === 'admin') {
//     next();
//   } else {
//     next(boom.forbidden('Se requieren permisos de administrador'));
//   }
// }

function checkRoles(...roles) {
  return (req, res, next) => {
    const { user } = req;
    if (roles.includes(user.role)) {
      next();
    } else {
      next(
        boom.forbidden(`El rol ${user.role} no tiene acceso a este recurso`)
      );
    }
  };
}

module.exports = { checkApiKey, checkRoles };
