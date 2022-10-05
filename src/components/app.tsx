import 'react-toastify/dist/ReactToastify.css';

import SEO from '@americanexpress/react-seo';
import NavigationIcon from '@mui/icons-material/Navigation';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { Location, Redirect, Router } from '@reach/router';
import React, { useEffect, useState } from 'react';
import { Button as ThemeButton } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { AppSeo } from 'src/config/seo';
import { MARKET_CONTRACT_EVENTS } from 'src/enums';
import {
  addAuctionMarketItemEvent,
  addBuySimpleEvent,
  addCancelAuctionEvent,
  addCancelSimpleEvent,
  addMintEvent,
  addOfferAcceptedEvent,
  addOfferCanceledEvent,
  addOfferCreatedEvent,
  addSimpleMarketItemEvent,
  addTerminateAuctionEvent
} from 'src/store/actions';
import { addBid } from 'src/store/actions/thunks/bids';
import * as selectors from 'src/store/selectors';
import GlobalStyle from 'src/styles/theme/global.styled';
import { ThemeProvider } from 'styled-components';

import Footer from '../components/components/footer';
import { dark, light } from '../styles/theme/themeVariables';
import HeaderNew from './menu/headerNew';
import ScrollToTopBtn from './menu/ScrollToTop';
import Author from './pages/Author';
import Collection from './pages/Collection';
// import CreateMultiple from './pages/CreateMultiple';
// import CreateOption from './pages/CreateOption/CreateOption';
// import CreateSingle from './pages/CreateSingle/CreateSingle';
import CreateItem from './pages/CreateItem/CreateItem';
import Explore from './pages/Explore/explore';
import ExploreNew from './pages/ExploreNew/explore';
import ExploreCollection from './pages/ExploreNew/exploreCollection';
import Home from './pages/Home/home';
import ItemDetailMultiple from './pages/ItemDetailMultiple';
import ItemDetailSingle from './pages/ItemDetailSingle';
import ItemDetailSingleNew from './pages/itemDetail/ItemDetailSingle';
import Listing from './pages/Listing';
import MyProfile from './pages/MyProfile';
import Profile from './pages/Profile/Profile';
import Search from './pages/SearchPage';

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location]);
  return children;
};

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <div id="routerhang">
        <div key={location.key}>
          <Router location={location}>{children}</Router>
        </div>
      </div>
    )}
  </Location>
);

const App = () => {
  const dispatch = useDispatch();
  const web3State = useSelector(selectors.web3State);
  if (localStorage.getItem('current-theme') === null) {
    localStorage.setItem('current-theme', JSON.stringify(dark));
  }

  const { data, loading } = web3State.web3;
  const { web3, accounts, balance } = data;
  const userAddress = accounts[0];
  useEffect(() => {
    if (!userAddress) return;
    const SERVER_URL = process.env.REACT_APP_BACKEND_API;
    const eventSource = new EventSource(`${SERVER_URL}/v1/events`);
    eventSource.onmessage = (e) => {
      if (e.data.includes('eventName')) {
        const res = JSON.parse(e.data);
        console.log(
          '🚀 ~ file: app.tsx ~ line 94 ~ useEffect ~ event occurred',
          res
        );

        switch (res.eventName) {
          case MARKET_CONTRACT_EVENTS.AuctionBidCreated:
            dispatch(addBid(res));
            break;
          case MARKET_CONTRACT_EVENTS.Mint:
            if (res.ownerAddress === userAddress) {
              console.log('this is the user who created the nft');
              dispatch(addMintEvent(res));
            } else {
              console.log('this is NOT the user who created the nft');
            }
            break;
          case MARKET_CONTRACT_EVENTS.SimpleItemCreated:
            // if (res.ownerAddress === userAddress) {
            // console.log('this is the user who listed the nft');
            dispatch(addSimpleMarketItemEvent(res));
            // } else {
            //   console.log('this is NOT the user who listed the nft');
            // }
            break;
          case MARKET_CONTRACT_EVENTS.AuctionMarketItemCreated:
            if (res.ownerAddress === userAddress) {
              console.log('this is the user who listed the nft');
              dispatch(addAuctionMarketItemEvent(res));
            } else {
              console.log('this is NOT the user who listed the nft');
            }
            break;
          case MARKET_CONTRACT_EVENTS.SimpleItemSoldEvent:
            if (res.ownerAddress === userAddress) {
              console.log('this is the user who listed the nft');
              dispatch(addBuySimpleEvent(res));
            } else {
              console.log('this is NOT the user who listed the nft');
            }
            break;
          case MARKET_CONTRACT_EVENTS.SimpleItemCancelled:
            // if (res.ownerAddress === userAddress) {
            // console.log('this is the user who listed the nft');
            dispatch(addCancelSimpleEvent(res));
            // } else {
            //   console.log('this is NOT the user who listed the nft');
            // }
            break;
          case MARKET_CONTRACT_EVENTS.AuctionCancelled:
            if (res.ownerAddress === userAddress) {
              console.log('this is the user who listed the nft');
              dispatch(addCancelAuctionEvent(res));
            } else {
              console.log('this is NOT the user who listed the nft');
            }
            break;
          case MARKET_CONTRACT_EVENTS.AuctionTerminated:
            // if (res.terminatorAddress === userAddress) {
            // console.log('this is the user who terminate the nft');
            dispatch(addTerminateAuctionEvent(res));
            // } else {
            //   console.log('this is NOT the user who terminate the nft');
            // }
            break;
          case MARKET_CONTRACT_EVENTS.OfferCreated:
            dispatch(addOfferCreatedEvent(res));
            break;
          case MARKET_CONTRACT_EVENTS.OfferAccepted:
            dispatch(addOfferAcceptedEvent(res));
            break;
          case MARKET_CONTRACT_EVENTS.OfferCancelled:
            dispatch(addOfferCanceledEvent(res));
            break;
          default:
            break;
        }
      }
    };
  }, [dispatch, userAddress]);

  const [selectedTheme, setSelectedTheme] = useState(dark);
  let themeValue = null;
  if (selectedTheme.name === 'dark') {
    themeValue = light;
  } else {
    themeValue = dark;
  }
  const HandleThemeChange = (theme) => {
    setSelectedTheme(theme);
    localStorage.setItem('current-theme', JSON.stringify(theme));
    themeValue = theme.name === dark ? light : dark;
  };
  // react hook to get the theme selected by the user that is saved in local storage
  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem('current-theme'));
    if (currentTheme) {
      setSelectedTheme(currentTheme);
    }
  }, []);
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyle />
      <div className="wraper">
        <SEO {...AppSeo} />
        <HeaderNew themeToggler={() => HandleThemeChange(themeValue)} />

        {/* <Box sx={{ '& > :not(style)': { m: 1 } }} className="fixed-bottom ">
          <Fab variant="extended">
            <NavigationIcon sx={{ mr: 1 }} />
            Dark
          </Fab>
        </Box> */}
        <PosedRouter>
          <ScrollTop path="/">
            <Home exact path="/">
              <Redirect to="/home" />
            </Home>
            {/* IN USE */}
            <Collection path="/collection/:collectionId" />
            <ItemDetailSingle path="/ItemDetail/:tokenId/:nftAddress" />
            <ItemDetailSingleNew path="/ItemDetailNew/:tokenId/:nftAddress" />
            <ItemDetailMultiple path="/ItemDetailMultiple/:tokenId/:nftAddress" />
            <Author path="/author/:publicAddress" />
            {/* <CreateOption path="/CreateOption" /> */}
            {/* <CreateSingle path="/createSingle" /> */}
            {/* <CreateMultiple path="/createMultiple" /> */}
            <CreateItem path="/createItem" />
            <Listing path="/listing/:tokenId/:nftAddress" />
            <Profile path="/profile" />
            <MyProfile path="/myProfile" />
            <Search path="/search/:query" />

            {/* NOT IN USE */}
            {/* <Home1 path="/home1" />
            <Home2 path="/home2" /> */}
            <Explore path="/explore" />
            <ExploreNew path="/exploreNew" />
            <ExploreCollection path="/exploreCollection" />
          </ScrollTop>
        </PosedRouter>
        <ScrollToTopBtn />
        <ToastContainer
          style={{ width: 600 }}
          position="top-center"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/*     <div>
          <ThemeButton
            onClick={() => HandleThemeChange(light)}
            className={`light ${selectedTheme === light ? 'active' : ''}`}
          >
            Light
          </ThemeButton>
          <ThemeButton
            onClick={() => HandleThemeChange(dark)}
            className={`dark ${selectedTheme === dark ? 'active' : ''}`}
          >
            Dark
          </ThemeButton>
        </div>*/}
        <Footer />
      </div>
    </ThemeProvider>
  );
};
export default App;
