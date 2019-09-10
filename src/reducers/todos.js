import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions/todos";

export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.todo]);
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id
          ? Object.assign({}, todo, { complete: !todo.complete })
          : todo
      );
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}
