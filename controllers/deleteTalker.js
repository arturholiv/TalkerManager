const { readFile, writeFile } = require('fs/promises');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const idNumb = Number(id);
    const talkers = await readFile('./talker.json', 'utf-8');
    const parsedTalkers = JSON.parse(talkers);
    const talkerIndex = parsedTalkers.findIndex((t) => t.id === idNumb);
    if (talkerIndex === -1) return res.status(404).json({ message: "talker not found" });
    const deletedTalker = parsedTalkers.splice(talkerIndex, 1,);

    const stringfiedTalkers = JSON.stringify(parsedTalkers, null, 2);

    await writeFile('./talker.json', stringfiedTalkers);

    return res.status(204).end();
  } catch (error) {
    return next(error);
  }
};