import { connect } from 'react-redux'
import { cardRemove, cardPush } from '../actions'
import HouseList from '../components/HouseList'

const mapStateToProps = state => {
  return {
    houses: state.house
  }
}

const mapDispatchToProps = dispatch => {
  return {
    cardRemove: id => {
      dispatch(cardRemove(id))
    },
    cardPush: (index, house) => {
      dispatch(cardPush(index, house))
    }
  }
}

const HouseContainerList = connect(
  mapStateToProps,
  mapDispatchToProps
)(HouseList)

export default HouseContainerList
