import { connect } from 'react-redux';
import { compose } from 'redux';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogs-reducer';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    messageChange: (text) => {
      dispatch(updateMessageActionCreator(text));
    },
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
