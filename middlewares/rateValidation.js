module.exports = (req, res, next) => {
  try {
    const { talk } = req.body;
    const { rate } = talk;
    const validation = rate > 0 && rate <= 5;
     if (!validation) return res.status(400).json({ message:"O campo \"rate\" deve ser um inteiro de 1 à 5"});
     return next();  
  } catch (error) {
    return next(e);
  };
};