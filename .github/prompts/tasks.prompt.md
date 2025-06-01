# Task management

- Browse and review the project and the user's goals to create a backlog of tasks. Be sure to understand the project context before creating tasks.
- Only create high value, high impact tasks that align with the user's goals and materially improve the project.
- Use the existing `.github/prompts/tasks/task-list.md` to track a list of tasks; adhere to the example structure in that file. Modify the file with new tasks and updates as needed.
- Do not create any individual task files until the user requests it.
- Create or update tasks in `.github/prompts/tasks/{task#.md}` as needed. Follow the template provided in `.github/prompts/tasks/task-example.md` and copy to new task files.
- Adhere to the comments history in each task file, reviewing Human feedback and AI updates.

## Commands

- 'make a backlog' - Create a backlogged list of tasks. Do not expand on any individual task details until user requests it.
- 'expand on tasks' - Expand on the tasks in the backlog, providing detailed descriptions, acceptance criteria, dependencies, and comments.
- 'expand on task {id}' - Expand on a specific task, providing detailed descriptions, acceptance criteria, dependencies, and comments.
- 'execute task {id}' - Execute a specific task, providing detailed descriptions, acceptance criteria, dependencies, and comments.
- 'update task {id}' - Update a specific task based on comments.
- 'delete task {id}' - Delete a specific task, removing it from the backlog and task list.
- 'list tasks' - List all tasks in the backlog, showing their IDs, titles, priorities, statuses, and assignees.
- 'show task {id}' - Show details of a specific task, including description, acceptance criteria, dependencies, and comments.
- 'build task {id}' - Build the specific, providing detailed descriptions, acceptance criteria, dependencies, and comments.
- 'execute next task' - Execute the next task in the backlog, providing detailed descriptions, acceptance criteria, dependencies, and comments.

# Task List

Apply the following template to `.github/prompts/tasks/task-list.md`:

```markdown
| ID   | Title                                   | Priority   | Status   | Assignee   |
| ---- | --------------------------------------- | ---------- | -------- | ---------- |
| {id} | [{task_title}](./tasks/task-example.md) | {priority} | {status} | {assignee} |
```

# Task Template

Use the following template for each task in `.github/prompts/tasks/task{#}.md`:

```markdown
# {task_title}

## Description

{A clear, concise explanation of the task's purpose and scope. Include any relevant notes or context only if it is critical to understanding the task.}

## Acceptance Criteria

- [ ] {Clearly defined outcome 1}
- [ ] {Clearly defined outcome 2}

## Dependencies

- Task #{id}: {Dependency task title}

## Comments / History

- {YYYY-MM-DD} - {[@AI / @Human]}: {Comment or update}
```
