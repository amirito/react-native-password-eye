import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    fullWidth: {
        width: width
    },
    fullHeight: {
        height: height
    },
    fullScreen: {
        width: width,
        height: height
    },
    flex1: {
        flex: 1,
    },
    textCenter: {
        textAlign: "center"
    },
    textRight: {
        textAlign: "right"
    },
    textLeft: {
        textAlign: "left"
    },
    itemCenter: {
        alignItems: "center"
    },
    itemEnd: {
        alignItems: "flex-end"
    },
    itemStart: {
        alignItems: "flex-start"
    },
    textLink: {
        color: "#07A",
    },
    textLinkRight: {
        color: "#07A",
        textAlign: 'right',
    },
    fontSmall: {
        fontSize: 12,
    },
    textWhite: {
        color: 'white'
    },
    textGray: {
        color: '#818181'
    },
    textLightGray: {
        color: '#BCBCBC'
    },
    textDarkGray: {
        color: '#6D6D6D'
    },
    justifyInRow: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    justifyInRowSpace: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    justifyRightInRow: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
    justifyLeftInRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    justifyCenterInRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    justifyInColumn: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%'
    },
    marginH5: {
        marginHorizontal: 5,
    },
    marginH10: {
        marginHorizontal: 10,
    },
    marginH15: {
        marginHorizontal: 15,
    },
    marginV5: {
        marginVertical: 5,
    },
    marginV10: {
        marginVertical: 10,
    },
    marginV15: {
        marginVertical: 15,
    },
    paddingH5: {
        paddingHorizontal: 5,
    },
    paddingH10: {
        paddingHorizontal: 10,
    },
    paddingH15: {
        paddingHorizontal: 15,
    },
    paddingH20: {
        paddingHorizontal: 20,
    },
    paddingH30: {
        paddingHorizontal: 30,
    },
    paddingV5: {
        paddingVertical: 5,
    },
    paddingV10: {
        paddingVertical: 10,
    },
    paddingV15: {
        paddingVertical: 15,
    },
    paddingV20: {
        paddingVertical: 20,
    },
    container: {
        flex: 1,
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    backGroundGray: {
        backgroundColor: "#F3F3F3"
    },
    font30: {
        fontSize: 30,
    },
    font28: {
        fontSize: 28,
    },
    font25: {
        fontSize: 25,
    },
    font22: {
        fontSize: 22,
    },
    font20: {
        fontSize: 20,
    },
    font18: {
        fontSize: 18,
    },
    font17: {
        fontSize: 17,
    },
    font16: {
        fontSize: 16,
    },
    font14: {
        fontSize: 14,
    },
    font12: {
        fontSize: 12,
    },
    font10: {
        fontSize: 10,
    },


});


export default styles;