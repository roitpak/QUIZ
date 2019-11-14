import { combineReducers } from "redux";
import MainReducer from "./MainReducer";
// import DashBoardReducer from './DashBoardReducer';
// import ChatReducer from './ChatReducer';
// import ChangePasswordReducer from './ChangePasswordReducer';
// import AttendanceReducer from './AttendanceReducer';
// import ExamMarksReducer from './ExamMarksReducer';

export default combineReducers({
  main: MainReducer
  // dash: DashBoardReducer,
  // chat: ChatReducer,
  // changePassword: ChangePasswordReducer,
  // attendence : AttendanceReducer,
  // examMarks : ExamMarksReducer,
});
