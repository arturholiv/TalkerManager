const { readFile } = require('fs/promises')

module.exports = async (req, res, next) => {
  try {
    const { q  = '' } = req.query;

    const talkers = await readFile('./talker.json', 'utf-8');
    const parsedTalkers = JSON.parse(talkers)

    if (!q || q === '') {
      return res.status(200).json(parsedTalkers);
    };
    
    const filteredTalkers = parsedTalkers.filter((t) => {
      // const lowerCasedQuery = 
      const lowerCasedName = t.name.toLowerCase();
      return lowerCasedName.includes(q.toLowerCase()); 
    });
     return res.status(200).json(filteredTalkers);
  } catch (error) {
    return next(error);
  }
};