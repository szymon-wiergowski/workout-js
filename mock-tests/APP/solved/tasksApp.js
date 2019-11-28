const tasksService = require('./tasksService');

class Task {
    constructor() {}

    getBooksUI() {
        return tasksService.getTasks().then(tasks => {
            console.log('Tasks', tasks);
        });
    }
}

module.exports = Task;