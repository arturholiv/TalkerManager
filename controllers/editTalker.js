const { readFile, writeFile } = require('fs/promises');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const numId = +id;

    const { name, age, talk } = req.body;

    const talkers = await readFile('./talker.json', 'utf-8');
    const parsedTalkers = JSON.parse(talkers);
    
    const talkerIndex = parsedTalkers.findIndex((t) => t.id === id);

    const updatedTalker = { name, age, id: numId ,talk };

    parsedTalkers.splice(talkerIndex, 1, updatedTalker); 
    // parsedTalkers[talkerIndex] = updatedTalker; ^^^^ // these two do the same thing  

    const stringfiedTalkers = JSON.stringify(parsedTalkers, null, 2);

    await writeFile('./talker.json', stringfiedTalkers);

    return res.status(201).json(updatedTalker);
  } catch (error) {
    return next(error);
  }
};