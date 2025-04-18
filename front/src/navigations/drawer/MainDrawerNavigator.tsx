import {createDrawerNavigator} from '@react-navigation/drawer';

import MapHomeScreen from '../../screens/map/MapHomeScreen';
import FeedHomeScreen from '../../screens/feed/FeedHomeScreen';
import CalendarHomeScreen from '../../screens/calender/CalendarHomeScreen';
const Drawer = createDrawerNavigator();

export default function MainDrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MapHome" component={MapHomeScreen} />
      <Drawer.Screen name="FeedHome" component={FeedHomeScreen} />
      <Drawer.Screen name="CalendarHome" component={CalendarHomeScreen} />
    </Drawer.Navigator>
  );
}
