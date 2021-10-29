import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
  	check_register: [],
    auth_check: {},
    employees: [],
    detail_employe:{},
    teams: [],
    detail_projects: []
  },
  getters: {
    getAuthCheck: state => {
      return state.auth_check
    },
  	getCheckRegister: state => {
  		return state.check_register
  	},
    getEmployee: state => {
      return state.employees
    },
    getDetailEmployee: state => {
      return state.detail_employe
    },
    getTeam: state => {
      return state.teams
    },
    getDetailProject: state => {
      return state.detail_projects
    }
  },
  mutations: {
  	CheckRegister(state, data){
  		state.check_register = localStorage.getItem(data) ? JSON.parse(localStorage.getItem(data)) : ''
  	},

    CheckAuth(state, data){
      state.auth_check = localStorage.getItem(data) ? JSON.parse(localStorage.getItem(data)) : ''
    },

    async EmployeeLists(state){
      await axios.get('https://arca-international-backend.herokuapp.com/api/employee')
      .then(res => {
        state.employees = res.data.data
      })
      .catch(err => {
        console.log(err.response)
      })
    },

    async DetailEmployee(state, id){
      await axios.get(`https://arca-international-backend.herokuapp.com/api/employee/${id}`)
      .then(res => {
        state.detail_employe = res.data.data
      })
      .catch(err => console.log(err.response))
    },

    async GetTeamProject(state){
      await axios.get('https://arca-international-backend.herokuapp.com/api/add/team')
      .then(res => {
        state.teams = res.data.data
      })
      .catch(err => {
        console.log(err.response)
      })
    },

    async DetailProject(state, name){
      await axios.get(`https://arca-international-backend.herokuapp.com/api/detail/projects/${name}`)
      .then(res => {
        state.detail_projects = res.data.data
      })
      .catch(err => {
        console.log(err.response)
      })
    }

  },
  actions: {
  },
  modules: {
  }
})
