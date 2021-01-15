import {createSlice} from '@reduxjs/toolkit';

export const surveySlice = createSlice({
    name: "surveys",
    initialState: [],
    reducers: {
     createSurvey: (state, action)=>{
         //console.log('state',state);
         //console.log('action',action);
         const newSurveyId= state.length+1;
         state.push({question: [], surveyId: newSurveyId, isPublished: false});
         return state;
     }
    }
  });