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
})

describe("FILTER_TODOS", function () {
    test("filters todos", function () {
        const initialState = {nextId:1,todos:[],filter:'all'}
        const state = reducer(initialState, filterTodos("Test"));
        expect(state.todos).toHaveLength([]);
        expect(state.todos[[]]).toEqual({filter: {
            $set: action.payload
        }});
    })
})
