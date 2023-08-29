import { useEffect } from 'react';
import { BackHandler, Alert } from 'react-native';

export function useCustomBackHandler(navigation, currentPage, allowCustomBack = true) {
    useEffect(() => {
        const handleBackPress = () => {
            if (allowCustomBack || currentPage === 'Home') {
                Alert.alert(
                    'Exit App',
                    'Are you sure you want to exit?',
                    [
                        {
                            text: 'No',
                            style: 'cancel'
                        },
                        {
                            text: 'Yes',
                            onPress: () => {
                                navigation.goBack();
                                return true;
                            }
                        }
                    ],
                    { cancelable: true }
                );
                return true;
            } else {
                // Allow default back behavior for other pages
                return true;
            }
        };

        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);

        return () => {
            backHandler.remove(false);
        };
    }, [navigation, currentPage, allowCustomBack]);
}
