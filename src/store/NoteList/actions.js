export const TODO_DONE = 'TODO_DONE';
export const DELETE_TODO = 'DELETE_TODO'

export const deleteTodo = (note) => (
    {
        type: DELETE_TODO,
        note
    }
);

export const todoDone = (note) => (
    {
        type: TODO_DONE,
        note
    }
);