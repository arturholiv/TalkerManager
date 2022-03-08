const { readFile, writeFile } = require('fs/promises');
const { v4: uuid } = require('uuid');

module.exports = async (req, res, next) => {
  try {
    const { name, age, talk } = req.body;

    const talkers = await readFile('./talker.json', 'utf-8');
    const parsedTalkers = JSON.parse(talkers);
    
    const newTalker = { id: uuid(), name, age, talk };

    parsedTalkers.push(newTalker);

    const stringfiedTalkers = JSON.stringify(parsedTalkers);

    await writeFile('./talker.json', stringfiedTalkers);

    return res.status(201).json({newTalker});
  } catch (error) {
    return next(error);
  }
};