import React from 'react';
import { TabNavigator } from 'react-navigation';

import Home from '../src/js/container/Home';
import Build from '../src/js/container/Build';

export const Tabs = TabNavigator({
  Feed: {
    screen: Home,
  },
  Me: {
    screen: Build,
  },
});