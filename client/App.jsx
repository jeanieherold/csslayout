import React from 'react';
import { BrowserRouter as Router, Route, Switch as RouteSwitch } from 'react-router-dom';

import Home from './Home';
import Badge from './layouts/badge/Details';
import Breadcrumb from './layouts/breadcrumb/Details';
import ButtonWithIcon from './layouts/button-with-icon/Details';
import Card from './layouts/card/Details';
import Centering from './layouts/centering/Details';
import FeatureList from './layouts/feature-list/Details';
import FixedAtCorner from './layouts/fixed-at-corner/Details';
import HolyGrail from './layouts/holy-grail/Details';
import InputAddon from './layouts/input-add-on/Details';
import MediaObject from './layouts/media-object/Details';
import Menu from './layouts/menu/Details';
import Modal from './layouts/modal/Details';
import Notification from './layouts/notification/Details';
import Pagination from './layouts/pagination/Details';
import PreviousNextButtons from './layouts/previous-next-buttons/Details';
import PricingTable from './layouts/pricing-table/Details';
import ProgressBar from './layouts/progress-bar/Details';
import SameHeightColumns from './layouts/same-height-columns/Details';
import Separator from './layouts/separator/Details';
import Sidebar from './layouts/sidebar/Details';
import Slider from './layouts/slider/Details';
import SplitScreen from './layouts/split-screen/Details';
import StepperInput from './layouts/stepper-input/Details';
import StickyFooter from './layouts/sticky-footer/Details';
import StickyHeader from './layouts/sticky-header/Details';
import Switch from './layouts/switch/Details';
import Tab from './layouts/tab/Details';

const App = () => {
    return (
        <Router>
            <RouteSwitch>
                <Route exact={true} path='/'><Home /></Route>
                <Route exact={true} path='/badge'><Badge /></Route>
                <Route exact={true} path='/breadcrumb'><Breadcrumb /></Route>
                <Route exact={true} path='/button-with-icon'><ButtonWithIcon /></Route>
                <Route exact={true} path='/card'><Card /></Route>
                <Route exact={true} path='/centering'><Centering /></Route>
                <Route exact={true} path='/feature-list'><FeatureList /></Route>
                <Route exact={true} path='/fixed-at-corner'><FixedAtCorner /></Route>
                <Route exact={true} path='/holy-grail'><HolyGrail /></Route>
                <Route exact={true} path='/input-add-on'><InputAddon /></Route>
                <Route exact={true} path='/media-object'><MediaObject /></Route>
                <Route exact={true} path='/menu'><Menu /></Route>
                <Route exact={true} path='/modal'><Modal /></Route>
                <Route exact={true} path='/notification'><Notification /></Route>
                <Route exact={true} path='/pagination'><Pagination /></Route>
                <Route exact={true} path='/previous-next-buttons'><PreviousNextButtons /></Route>
                <Route exact={true} path='/pricing-table'><PricingTable /></Route>
                <Route exact={true} path='/progress-bar'><ProgressBar /></Route>
                <Route exact={true} path='/same-height-columns'><SameHeightColumns /></Route>
                <Route exact={true} path='/separator'><Separator /></Route>
                <Route exact={true} path='/sidebar'><Sidebar /></Route>
                <Route exact={true} path='/slider'><Slider /></Route>
                <Route exact={true} path='/split-screen'><SplitScreen /></Route>
                <Route exact={true} path='/stepper-input'><StepperInput /></Route>
                <Route exact={true} path='/sticky-footer'><StickyFooter /></Route>
                <Route exact={true} path='/sticky-header'><StickyHeader /></Route>
                <Route exact={true} path='/switch'><Switch /></Route>
                <Route exact={true} path='/tab'><Tab /></Route>
            </RouteSwitch>
        </Router>
    );
};

export default App;
