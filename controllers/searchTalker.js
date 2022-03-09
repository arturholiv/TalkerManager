const { readFile } = require('fs/promises')

module.exports = async (req, res, next) => {
  try {
    const { name = '' } = req.query;

    const talkers = await readFile('./talker.json', 'utf-8');
    const parsedTalkers = JSON.parse(talkers)
    
    const filteredTalkers = parsedTalkers.filter((t) => {
      const lowerCasedQuery = name.lowerCase()
      const lowerCasedName = t.name.lowerCase();
      return lowerCasedName.icludes(lowerCasedQuery); 
    });
     return res.status(200).json(filteredTalkers);
  } catch (error) {
    return next(error);
  }
};