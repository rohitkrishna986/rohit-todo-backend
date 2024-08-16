import Task from "../models/TaskModel.js";

export const createTask = async (req, res, next) => {
  try {
    const { taskName } = req.body;

    if (!taskName) {
      return res.status(400).send("Please provide task name.");
    }

    const tasks = await Task.create({ taskName });

    return res.status(200).json({ tasks });
  } catch (error) {
    console.log(error);
  }
};

export const getAllTask = async (req, res, next) => {
  try {
    const tasks = await Task.find({});

    return res.status(200).json({ tasks });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send("ID not found");
    }

    const tasks = await Task.findByIdAndDelete(id);
    return res.status(200).json({ tasks });
  } catch (error) {
    console.log(error);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name || !id) {
      return res.status(400).send("ID and Name are required.");
    }

    const payload = {
      ...(name && { taskName: name }),
    };

    const updatedTask = await Task.findByIdAndUpdate(id, payload, {
      new: true,
    });

    if (!updatedTask) {
      return res.status(404).send("Task not found.");
    }

    return res.status(200).json(updatedTask);
  } catch (error) {
    console.log(error);
  }
};
