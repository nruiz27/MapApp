import { Platform } from 'react-native';
import color from 'color';

export const Colors = {
    primaryColor: '#0E528C',
    primaryDarkColor: '#00518C',
    accentColor: '#D7982E',
    tabBarColor: '#FFF',
    rippleColor: '#F59F16',
    loadingIndicatorColor: '#0E528C',
    statusBarColor: () => {
        return color('#0E528C').darken(0.1).hex();
    },
    toolbarColor: Platform.select({
        ios: '#0E528C',
        android: '#0E528C',
    }),
    toolbarTextColor: Platform.select({
        ios: '#fff',
        android: '#fff',
    }),
    burgerMenuColor: Platform.select({
        ios: '#fff',
        android: '#fff',
    }),
    Button: {
        primaryColor: '#00518C',
        successColor: '#1BC5BD',
        infoColor: '#3699FF',
        warningColor: '#FFA800',
        errorColor: '#F64E60',
        defaultColor: '#E4E6EF',
    },
    Text: {
        primaryColor: '#273239',
        secondaryColor: 'rgb(118, 127, 134)',
        tertiaryColor: '#9babb6',
        successColor: '#1BC5BD',
        infoColor: '#3699FF',
        warningColor: '#FFA800',
        errorColor: '#F64E60',
        disabledColor: '#c7c7cd',
        placeholderColor: 'rgba(0, 0, 0, .36)',
    },
    Background: {
        successColor: '#caf7f5',
        infoColor: '#e1f0ff',
        warningColor: '#fff4de',
        errorColor: '#ffe2e5',
        windowColor: '#f8f9fb',
        sectionColor: '#FFF',
        componentLoadColor: '#e5e5e5',
        imageColor: '#d6d6d6',
        avatarColor: '#a6a6a6',
        inputColor: '#FFF',
        inputDisabledColor: '#ebebeb',
    },
};

export const Sizes = {
    toolbarIconSize: 30,
    Text: {
        textSize: 16,
        primaryTitleSize: 20,
        secondaryTitleSize: 18,
        loadingTitleSize: 18,
        inputTitleSize: 16,
        inputSize: 15,
        buttonSize: 16,
    },
    Icon: {
        defaultSize: 22,
        dataTableSize: 20,
    },
    Message: {
        titleSize: 18,
        descriptionSize: 16,
    },
};

export const GlobalStyles = {
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.Background.windowColor,
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    floatingEffect: Platform.select({
        ios: {
            shadowColor: 'rgba(0, 0, 0, .2)',
            shadowOffset: { height: 1, width: 1 },
            shadowOpacity: 0.7,
            shadowRadius: 0,
        },
        android: {
            elevation: 4,
        },
    }),
    cardFloatingEffect: Platform.select({
        ios: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
        },
        android: {
            elevation: 2,
        },
    }),
    buttonFloatingEffect: Platform.select({
        ios: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
        },
        android: {
            elevation: 2,
        },
    }),
    modalFloatingEffect: Platform.select({
        ios: {
            shadowColor: 'rgba(0, 0, 0, .2)',
            shadowOffset: { height: 1, width: 1 },
            shadowOpacity: 0.6,
            shadowRadius: 6,
        },
        android: {
            elevation: 4,
        },
    }),
};