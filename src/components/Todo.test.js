import React from 'react';
import renderer from 'react-test-renderer';
import Todo from "./Todo";

test('Todo renders correctly', () => {
    const tree = renderer.create(
      <input type="checkbox" checked={todo.done} onChange={event => handleToggle(todo.id)}/>
      <span className={todo.done ? "todo-done" : "todo-not-done"} onClick={event => handleToggle(todo.id)}>{todo.text}</span>
  </div>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
