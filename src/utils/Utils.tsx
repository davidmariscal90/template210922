import React from 'react';
import { SearchBar } from 'react-native-screens';

import HeaderTitle from "../components/HeaderTitle"
import COLORS from "../styles/theme"

export const headerStyles: any = (title: string) => {
    {
        return {
            headerStyle: {
                backgroundColor: COLORS.PRIMARY,
            },
            headerTintColor: COLORS.WHITE,
            headerTitleStyle: {
                color: COLORS.WHITE,
            },
            headerTitle: () => (<HeaderTitle title={title} />),
        }
    }
}

export const headerSearchStyles: any = () => {
    {
        return {
            headerStyle: {
                backgroundColor: COLORS.PRIMARY,
            },
            headerTintColor: COLORS.WHITE,
            headerTitleStyle: {
                color: COLORS.WHITE,
            },
            headerTitle: () => <SearchBar
                placeholder="Type Here..."
                onChangeText={() => { }}
            />,
        }
    }
}
