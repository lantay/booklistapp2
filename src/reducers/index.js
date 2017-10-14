import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'

const rootReducer = combineReducers({
  // state: (state = {}) => state
  books: booksReducer
});

export default rootReducer;

        //???????????Stuff don't know //???????????
        //-where else is that state state state line written
        //and what does it do?
