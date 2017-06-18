import fetch from '../ajaxconfig/config/fetch'

export const syncClass = classId => fetch('/api/courseList/'+ classId);