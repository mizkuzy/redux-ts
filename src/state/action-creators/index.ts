import { Dispatch} from 'redux'
import {ActionType} from '../action-types'
import axios from 'axios'
import {RepositoriesAction} from '../actions'

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<RepositoriesAction>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES
    })

    try {
      const {data} = await axios.get('http://registry.npmjs.org/-/v1/search',
        {
          params: {
            text: term
          }
        }
      )
      const names = data.objects.map((object: any) => object.package.name)

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names
      })
    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message
      })
    }
  }
}