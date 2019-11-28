/* jshint esversion: 6 */

/*
	Create simple ManageTasks Application and TEST it out :)

	Model:
	Task : {
		id (number),
		title (string),
		status ("TODO", "IN_PROGRESS", "DONE"),
		assignee (string),
		createdDate (string in format "DD-MM-YYYY")
	}

	Create a simple application which manages tasks. This application should have:
	- function that returns all tasks with status passed by parameter
	- function that counts and returns all tasks with status passed by parameter
	- function that returns tasks which titles matches phrase passed by parameter - PROMISE

	** Additional
	- function that evaluates and returns the done takss status:
		- if done tasks success rate is between 100% - 70% function should return 'GOOD'
		- if done tasks success rate is between 40% - 69% function should return 'MEDIUM'
		- if done tasks success rate is between 0% - 39% function should return 'BAD'
	- function that returns books by passed author - PROMISE
	- function that returns all tasks from passed day - PROMISE

	Then create mocks for these functions above. Use 'mockImplementation', creating __mocks__ dist,
	'jest.fn().mockImplementation', 'spy'

*/