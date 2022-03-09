const { readFile, writeFile } = require('fs/promises');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.body;

    const talkers = await readFile('./talker.json', 'utf-8');
    const parsedTalkers = JSON.parse(talkers);
    
    const newTalker = { name, age, talk };

    parsedTalkers.push(newTalker);

    const stringfiedTalkers = JSON.stringify(parsedTalkers, null, 2); // null, 2 identation for the json

    await writeFile('./talker.json', stringfiedTalkers);

    return res.status(201).json(newTalker);
  } catch (error) {
    return next(error);
  }
};