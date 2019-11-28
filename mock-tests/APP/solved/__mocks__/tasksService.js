const MOCKED_TASKS = require('../mockedTasks');

const getTasks = () => {
    return new Promise((resolve, reject) => {
        resolve(MOCKED_TASKS);
    });
};

const getTasksSync = () => {
    return MOCKED_TASKS;
};

const getTaskById = (id) => {
    return MOCKED_TASKS[0];
}

module.exports = { getTasks, getTasksSync, getTaskById };