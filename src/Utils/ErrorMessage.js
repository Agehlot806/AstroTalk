import Snackbar from 'react-native-snackbar';
import { COLOR, FONT } from '../Providerscreen/Globles';

const ErrorMessage = ({
    msg = '',
    backgroundColor = COLOR.BLACK,
    actionTxt = "",
    actionColor = "",
    onPressAction = () => { }
}) => Snackbar.show({
    text: msg,
    duration: Snackbar.LENGTH_LONG,
    backgroundColor: backgroundColor,
    fontFamily: FONT.SEMI_BOLD,
    textColor: COLOR.WHITE,
    action: {
        text: actionTxt,
        textColor: actionColor,
        onPress: onPressAction,
    },
});

export default ErrorMessage;