import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TrialList from '../components/TrialList'

const mapStateToProps = state => {
  return {
    trialList: state.trialList  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const TrialContainerList= connect(
  mapStateToProps,
  mapDispatchToProps
)(TrialList)

export default TrialContainerList 
