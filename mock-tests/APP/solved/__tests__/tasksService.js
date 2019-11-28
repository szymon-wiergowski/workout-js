const TASKS = require('../tasks');
const MOCKED_TASKS = require('../mockedTasks');

const tasksService = require('../tasksService');
jest.mock('../tasksService');

test('should receive array of tasks', () => {
    return tasksService.getTasks().then(tasksFromService => {
        expect(tasksFromService).toEqual(MOCKED_TASKS);
    });
});

test('should receive array of tasks sync', () => {
    expect(tasksService.getTasksSync()).toEqual(MOCKED_TASKS);
});

test('should get task by id', () => {
    expect(tasksService.getTaskById(1)).toEqual(MOCKED_TASKS[0]);
    
  
});