var express = require('express');
var router = express.Router();
var { body, validationResult } = require('express-validator');

let users = { items: [] };

dataValidation = [
  body('name').notEmpty().withMessage('O nome é obrigatório'),
  body('email').isEmail().withMessage('O email deve ser válido'),
  body('address').notEmpty().withMessage('O endereço é obrigatório')
]

checkRules = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }
  next();
};

router.post('/', dataValidation, checkRules, function(req, res, next) {
  console.log(JSON.stringify(req.body))
  users.items.push(req.body);
  res.render('register_success');
  }
);

module.exports = router;
