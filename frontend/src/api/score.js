import { callAPI } from './base';

// Get user's accounts
export const getMyScore = (params = '') => callAPI(`/score/my/${params}`);

// Get single account
export const getSingleScore = id => callAPI(`/score/${id}`);
