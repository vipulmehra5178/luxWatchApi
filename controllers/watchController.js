import Watch from "../models/Watch.js";

// GET all watches
export const getWatches = async (req, res) => {
  try {
    const watches = await Watch.find().lean(); // lean() for faster response
    res.json(watches);
  } catch (err) {
    res.status(500).json({ error: "Error fetching watches" });
  }
};

// GET single watch
export const getWatchById = async (req, res) => {
  try {
    const watch = await Watch.findOne({ id: req.params.id }).lean();
    if (!watch) return res.status(404).json({ error: "Watch not found" });
    res.json(watch);
  } catch (err) {
    res.status(500).json({ error: "Error fetching watch" });
  }
};

// POST new watch (login required)
export const addWatch = async (req, res) => {
  try {
    const newWatch = new Watch(req.body);
    await newWatch.save();
    res.status(201).json(newWatch);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE watch
export const updateWatch = async (req, res) => {
  try {
    const updatedWatch = await Watch.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedWatch) return res.status(404).json({ error: "Watch not found" });
    res.json(updatedWatch);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE watch
export const deleteWatch = async (req, res) => {
  try {
    const deleted = await Watch.findOneAndDelete({ id: req.params.id });
    if (!deleted) return res.status(404).json({ error: "Watch not found" });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
