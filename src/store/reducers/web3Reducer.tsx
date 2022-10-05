/* eslint-disable @typescript-eslint/no-explicit-any */
import { getType } from 'typesafe-actions';

import * as actions from '../actions';
import {
  entityLoadingFailed,
  entityLoadingStarted,
  entityLoadingSucceeded,
  initEntityState
} from '../utils';

export interface IWeb3State {
  web3: any;
  nftContract: any;
  nftMarketContract: any;
  escrowContract: any;
  networkId: null | number;
  accounts: string[];
  balance: null | number;
  mockERC20Contract: any;
  nft721Contract: any;
  nft1155Contract: any;
  nftMarketSimpleContract: any;
  nftMarketAuctionContract: any;
  nftMarketOffersContract: any;
}

const initialValue: IWeb3State = {
  web3: null,
  nftContract: null,
  nftMarketContract: null,
  escrowContract: null,
  accounts: [],
  networkId: null,
  balance: null,
  mockERC20Contract: null,
  nft721Contract: null,
  nft1155Contract: null,
  nftMarketSimpleContract: null,
  nftMarketAuctionContract: null,
  nftMarketOffersContract: null
};

export const defaultState = {
  web3: initEntityState(initialValue)
};

const states = (state = defaultState, action: any) => {
  switch (action.type) {
    case getType(actions.setupWeb3.request):
      return {
        ...state,
        web3: entityLoadingStarted(state.web3, action.payload)
      };
    case getType(actions.setupWeb3.success):
      return {
        ...state,
        web3: entityLoadingSucceeded(state.web3, action.payload.data)
      };
    case getType(actions.setupWeb3.failure):
      return { ...state, web3: entityLoadingFailed(state.web3) };

    default:
      return state;
  }
};

export default states;
