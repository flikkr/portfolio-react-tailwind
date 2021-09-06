import { Fab } from "@material-ui/core";
import { NavigateNext, NavigateBefore } from "@material-ui/icons";

function MapNavigator(props) {
  return (
    <div>
      <div className='m-3 flex justify-between'>
        {!props.isBackHidden && (
          <Fab color='primary' onClick={props.onBackPress}>
            <NavigateBefore />
          </Fab>
        )}
        <div className='flex-1'></div>
        {!props.isNextHidden && (
          <Fab color='primary' onClick={props.onForwardPress}>
            <NavigateNext />
          </Fab>
        )}
      </div>
    </div>
  );
}

export default MapNavigator;
