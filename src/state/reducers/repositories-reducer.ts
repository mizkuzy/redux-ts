import {ActionType} from '../action-types'
import {RepositoriesAction} from '../actions'

interface RepositoriesState {
  data: string[],
  loading: boolean,
  error: string | null
}

const initialState = {
  data: [],
  loading: false,
  error: null
}
const repositoriesReducer = (state: RepositoriesState = initialState, action: RepositoriesAction): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return {loading: true, data: [], error: null}
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return {loading: false, data: action.payload, error: null}
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return {loading: false, data: [], error: action.payload}
    default:
      return state
  }
}
export default repositoriesReducer