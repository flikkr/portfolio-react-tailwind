import { Fab } from "@material-ui/core";
import { NavigateNext, NavigateBefore } from "@material-ui/icons";

function MapNavigator(props) {
  const fabStyle = {
    width: "130px",
  };

  return (
    <div>
      <div className='m-3 flex justify-between'>
        <Fab color='primary' onClick={props.onBackPress}>
          <NavigateBefore />
        </Fab>
        <div className='flex-1'></div>
        <Fab color='primary' onClick={props.onForwardPress}>
          <NavigateNext />
        </Fab>
      </div>
    </div>
  );
}

export default MapNavigator;