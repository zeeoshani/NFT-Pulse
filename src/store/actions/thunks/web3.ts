/* eslint-disable @typescript-eslint/no-explicit-any */
import { Axios, Canceler } from '../../../core/axios';
import * as actions from '../../actions';

export const setupWeb3 =
  (data: {
    data: {
      web3: any;
      nftContract: any;
      nftMarketContract: any;
      accounts: any;
      networkId: any;
      balance: any;
      mockERC20Contract: any;
      nft721Contract: any;
      nft1155Contract: any;
      nftMarketSimpleContract: any;
      nftMarketAuctionContract: any;
      nftMarketOffersContract: any;
    };
  }) =>
  async (dispatch: any) => {
    dispatch(actions.setupWeb3.request(Canceler.cancel));
    try {
      dispatch(actions.setupWeb3.success(data));
    } catch (err) {
      console.log('🚀 ~ file: web3.ts ~ line 26 ~ setupWeb3 ~ err', err);
      dispatch(actions.setupWeb3.failure(err));
    }
  };

export const fetchAuthorRanking = () => async (dispatch) => {
  dispatch(actions.getAuthorRanking.request(Canceler.cancel));

  try {
    const { data } = await Axios.get('/mock_data/author_ranks.json', {
      cancelToken: Canceler.token,
      params: {}
    });

    dispatch(actions.getAuthorRanking.success(data));
  } catch (err) {
    dispatch(actions.getAuthorRanking.failure(err));
  }
};
