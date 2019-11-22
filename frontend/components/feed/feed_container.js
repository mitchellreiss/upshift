import { connect } from 'react-redux';
import Feed from './feed'
import { fetchUserFeed } from '../../actions/user_actions';

const mSTP = (state) => ({
  workouts: Object.values(state.entities.workouts),
  routes: state.entities.routes,
  currentUser: state.entities.users[state.session.id],
  users: state.entities.users
})

const mDTP = (dispatch) => ({  
  fetchUserFeed: () => dispatch(fetchUserFeed())
})


export default connect(mSTP, mDTP)(Feed);