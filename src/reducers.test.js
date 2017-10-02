import reducer from "./reducer";
import { toggleTodo} from "./actions";
import { filterTodos } from "./actions";
import { createTodo } from "./actions";

describe("CREATE_TODO", function () {
    test("creates a new todo", function () {
        const initialState = {nextId:1,todos:[],filter:'all'}
        const state = reducer(initialState, createTodo("Test"));
        expect(state.todos).toHaveLength(1);
        expect(state.todos[0]).toEqual({done:false,id: 1,text:'Test'});
    })
    test("TOGGLE_TODO", function() {
     const initialState = {todos: [], nextId: 1, filter: 'all'};
     let state = reducer(initialState, createTodo("Test"));
     state = reducer(state, toggleTodo(1));
     expect(state.todos[0].done).toEqual(true)
   })
   test("FILTER_TODOS", function() {
      const initialState = {todos: [], nextId: 1, filter: 'all'};
      let state = reducer(initialState, createTodo("Test"));
      state = reducer(state, toggleTodo(1));
      state = reducer(state, filterTodos('completed'));
      expect(state.todos).toHaveLength(1);
    })
})
