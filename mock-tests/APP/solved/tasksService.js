const TASKS = require('./tasks');

const getTasks = () => {
    return new Promise((resolve, reject) => {
        if (TASKS) {
            resolve(TASKS);
        } else {
            reject({
                error: 'Error: Couldnt get tasks'
            });
        }
    });
};

const getTasksSync = () => {
    return TASKS;
};

const getTaskById = (id) => {
    return TASKS[0];
}

module.exports = {
    getTasks,
    getTasksSync,
    getTaskById,
};