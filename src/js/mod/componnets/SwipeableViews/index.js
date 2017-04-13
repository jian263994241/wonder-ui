import SwipeableViews from 'react-swipeable-views'

import autoPlay from 'react-swipeable-views-utils/lib/autoPlay'
import virtualize from 'react-swipeable-views-utils/lib/virtualize'

import Pagination from './pagination/Pagination'

SwipeableViews.autoPlay = autoPlay;
SwipeableViews.virtualize = virtualize;
SwipeableViews.Pagination = Pagination;


export default SwipeableViews
