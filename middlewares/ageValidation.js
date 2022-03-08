module.exports = (req, res, next) => {
  try {
    const { age } = req.body;
     if (!age || age === '') return res.status(400).json({ message:"O campo \"age\" é obrigatório"});
     if (age < 18 ) return res.status(400).json({ message:"A pessoa palestrante deve ter mais de 18 anos"});
     return next();  
  } catch (error) {
    return next(e);
  }
};