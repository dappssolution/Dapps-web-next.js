const Work = require('../models/Work');

exports.getWorks = async (req, res) => {
  try {
    const works = await Work.find();
    res.json(works);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createWork = async (req, res) => {
  try {
    const { title, description, category, image, technologies, projectLink } = req.body;
    const work = new Work({ title, description, category, image, technologies, projectLink });
    await work.save();
    res.status(201).json(work);
  } catch (err) {
    res.status(400).json({ error: 'Invalid data' });
  }
};

exports.updateWork = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, category, image, technologies, projectLink } = req.body;
    const work = await Work.findByIdAndUpdate(
      id,
      { title, description, category, image, technologies, projectLink },
      { new: true }
    );
    if (!work) return res.status(404).json({ error: 'Work not found' });
    res.json(work);
  } catch (err) {
    res.status(400).json({ error: 'Invalid data' });
  }
};

exports.deleteWork = async (req, res) => {
  try {
    const { id } = req.params;
    const work = await Work.findByIdAndDelete(id);
    if (!work) return res.status(404).json({ error: 'Work not found' });
    res.json({ message: 'Work deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Invalid data' });
  }
};
