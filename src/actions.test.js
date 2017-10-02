import {createTodo} from './actions'
import {CREATE_TODO} from './actions'
import {toggleTodo} from './actions'
import {TOGGLE_TODO} from './actions'
import {filterTodos} from './actions'
import {FILTER_TODOS} from './actions';


describe("Test for action types", function() {
  test('Returns action with my todo', function() {
    expect(createTodo('Test')).toEqual({type:CREATE_TODO, payload: 'Test'})
  })
  test('Returns correct ID', function() {
  expect(toggleTodo(1)).toEqual({type:TOGGLE_TODO, payload: 1});
})
})
