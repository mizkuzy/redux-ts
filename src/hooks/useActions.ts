import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as ac from '../state/action-creators'

export const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(ac, dispatch)
}