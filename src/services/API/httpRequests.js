import axios from 'axios'
import config from './../../config'

const api_url = "https://mavka-api-5dvjwdatfq-ey.a.run.app"


export const getSubjectsList = async () => {
  const response = await axios.post('https://mavka-api-5dvjwdatfq-ey.a.run.app/subjects/get')

  return response.data
}

export const getTestList = async (subjectId) => {
  const response = await axios.post('https://mavka-api-5dvjwdatfq-ey.a.run.app/tests/get', {subject: subjectId})

  return response.data
}

export const getTopicList = async (subjectId) => {
  const response = await axios.post('https://mavka-api-5dvjwdatfq-ey.a.run.app/program/get', { subject: subjectId })

  return response.data
}

export const getQuestionsByTest = async (test_id) => {
  const response = await axios.post(`${api_url}/questions/get`, { 
    test: test_id, 
  })
  return response.data

  // return require('./getQuestionsByTest_sample.json');
}


export const getQuestionsByTopic = async (topic_id) => {
  const response = await axios.post(`${api_url}/questions/getRandom`, { 
    topic: topic_id, 
  })
  return response.data

}

export const getQuestionsBlitz = async (subject_id) => {
  const response = await axios.post(`${api_url}/questions/getRandom`, {
    subject: subject_id, 
  })
  return response.data

}

