1. Application Structure
The application is divided into the following components:
•	AddTask
Allows the user to add a new task.
•	ListTask
Displays the list of all tasks and applies filtering (done / not done).
•	Task
Represents a single task and allows editing and status toggling.
________________________________________
2. Task Model
Each task is represented as an object with the following attributes:
•	id → unique identifier
•	description → task content
•	isDone → boolean value indicating task status
________________________________________
3. Redux State Management
Redux was used to manage the global state of the application.
•	The store holds the list of tasks.
•	Actions are dispatched to:
o	Add a task
o	Edit a task
o	Toggle task completion
•	A reducer handles state updates in an immutable way.
This approach ensures consistent state management across all components.
________________________________________
4. Application Features
Add a New Task
•	The user can enter a task description.
•	Clicking the add button dispatches an action to store the new task in Redux.
Filter Tasks (Done / Not Done)
•	The user can filter tasks based on their completion status.
•	The filter is applied in the ListTask component using Redux state.
Edit a Task
•	Each task can be edited.
•	Editing updates the task description in the global Redux state.
________________________________________
5. User Interaction Flow
1.	The user adds a task using the AddTask component.
2.	The task appears in the ListTask view.
3.	The user can:
o	Mark the task as done or not done
o	Edit the task description
o	Filter tasks by status
All changes are reflected immediately due to Redux state updates.
________________________________________
6. Final Verification
After implementation:
•	Tasks can be added successfully
•	Filtering works correctly
•	Editing tasks updates the state properly
•	Redux store accurately reflects the current application state
________________________________________
Conclusion
By using Redux, we successfully managed the global state of the ToDo Application. This approach improved state consistency, simplified data flow, and made the application easier to scale and maintain.
