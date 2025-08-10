import Watch from "../models/Watch.js";

// Get all watches
export const getWatches = async (req, res) => {
  try {
    const watches = await Watch.find().lean(); // lean() for faster response
    res.json(watches);
  } catch (err) {
    res.status(500).json({ message: "Error fetching watches" });
  }
};

// Get single watch
export const getWatchById = async (req, res) => {
  try {
    const watch = await Watch.findOne({ id: req.params.id }).lean();
    if (!watch) return res.status(404).json({ message: "Watch not found" });
    res.json(watch);
  } catch (err) {
    res.status(500).json({ message: "Error fetching watch" });
  }
};

// Create watch (Auth protected)
export const createWatch = async (req, res) => {
  try {
    const newWatch = await Watch.create(req.body);
    res.status(201).json(newWatch);
  } catch (err) {
    res.status(500).json({ message: `Error adding watch: ${err.message}` });
  }
};

// Update watch
export const updateWatch = async (req, res) => {
  try {
    const updatedWatch = await Watch.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    ).lean();
    if (!updatedWatch) return res.status(404).json({ message: "Watch not found" });
    res.json(updatedWatch);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete watch
export const deleteWatch = async (req, res) => {
  try {
    const deletedWatch = await Watch.findOneAndDelete({ id: req.params.id }).lean();
    if (!deletedWatch) return res.status(404).json({ message: "Watch not found" });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
