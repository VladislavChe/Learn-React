import { connect } from 'react-redux';
import { compose } from 'redux';
import { addMessageActionCreator } from '../../redux/dialogs-reducer';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (newMessage) => {
      dispatch(addMessageActionCreator(newMessage));
    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
