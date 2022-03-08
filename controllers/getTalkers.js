const { readFile } = require('fs/promises')

module.exports = async (req, res, next) => {
  try {
    const talkers = await readFile('./talker.json', 'utf-8');

    return res.status(200).json(talkers);
  } catch (error) {
    return next(error);
  }
};