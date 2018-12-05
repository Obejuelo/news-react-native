import { createAppContainer, createBottomTabNavigator} from 'react-navigation';

//Components
import Home from './home/Home';
import Category from './category/Category';
import Save from './save/Save';

const Routes = createBottomTabNavigator(
    {
        Home: {
            screen: Home
        },
        Category: {
            screen: Category
        },
        Save: {
            screen: Save
        }
    },
    {
        tabBarOptions: {
            activeTintColor: '#92DCE5',
            inactiveTintColor: 'gray',
          },
    }
);

export default createAppContainer(Routes);