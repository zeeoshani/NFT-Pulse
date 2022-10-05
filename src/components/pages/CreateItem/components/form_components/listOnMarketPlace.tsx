import Tooltip from '@mui/material/Tooltip';
import { Switch } from 'formik-material-ui';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { BsInfo, BsInfoCircleFill } from 'react-icons/bs';
import InputField from 'src/components/components/Input/InputField';
import Loader from 'src/components/components/Loader';
import { ALERT_TYPE, COIN, MARKET_TYPE } from 'src/enums';

import { ReactComponent as IconInfo } from '../../../../../assets/images/icon/info.svg';
import ExpirationDate from './expirationDate';
import InputRadio from './InputRadio';
import NftType from './nftType';

interface IProps {
  price: number;
  minimumBid: number;
  marketType: MARKET_TYPE;
  submitCreateState: any;
  setPriceInput: (e: any) => void;
  setMinimumBidInput: (e: any) => void;
  onTab: (marketType: MARKET_TYPE) => void;
  setFieldValue: any;
  setExpirationDate: any;
  isSingle: boolean;
  dateRange: any;
  enableListing: boolean;
  setEnableListing: any;
}

function ListOnMarketPlace(props : IProps) {
  const {
    price,
    minimumBid,
    marketType,
    submitCreateState,
    setPriceInput,
    setMinimumBidInput,
    onTab,
    setFieldValue,
    setExpirationDate,
    isSingle,
    dateRange,
    enableListing,
    setEnableListing
  } = props;

  const switchEnableContent = (e: any) => {
    setFieldValue('enableListing', e.target.checked);
    setEnableListing(!enableListing);
  };

  const onChangePrice = (e: any) => {
    let newValue = e.target.value;
    newValue =
      Math.abs(Number(newValue)) >= 1.0e15
        ? (Math.abs(Number(newValue)) / 1.0e15).toFixed(2) + ' QT'
        : Math.abs(Number(newValue)) >= 1.0e12
        ? (Math.abs(Number(newValue)) / 1.0e12).toFixed(2) + ' T'
        : Math.abs(Number(newValue)) >= 1.0e9
        ? (Math.abs(Number(newValue)) / 1.0e9).toFixed(2) + ' B'
        : Math.abs(Number(newValue)) >= 1.0e6
        ? (Math.abs(Number(newValue)) / 1.0e6).toFixed(2) + ' M'
        : Math.abs(Number(newValue)) >= 1.0e3
        ? (Math.abs(Number(newValue)) / 1.0e3).toFixed(2) + ' K'
        : Math.abs(Number(newValue));
    setFieldValue('price', newValue);
    setPriceInput && setPriceInput(newValue);
  };

  const onChangeMinimumBid = (e: any) => {
    let newValue = e.target.value;
    newValue =
      Math.abs(Number(newValue)) >= 1.0e15
        ? (Math.abs(Number(newValue)) / 1.0e15).toFixed(2) + ' QT'
        : Math.abs(Number(newValue)) >= 1.0e12
        ? (Math.abs(Number(newValue)) / 1.0e12).toFixed(2) + ' T'
        : Math.abs(Number(newValue)) >= 1.0e9
        ? (Math.abs(Number(newValue)) / 1.0e9).toFixed(2) + ' B'
        : Math.abs(Number(newValue)) >= 1.0e6
        ? (Math.abs(Number(newValue)) / 1.0e6).toFixed(2) + ' M'
        : Math.abs(Number(newValue)) >= 1.0e3
        ? (Math.abs(Number(newValue)) / 1.0e3).toFixed(2) + ' K'
        : Math.abs(Number(newValue));
    setFieldValue('minimumBid', newValue);
    setMinimumBidInput && setMinimumBidInput(newValue);
  };

  return (
    <div className="marketplace-bottom-content ">
      <div className="content-heading justify-content-between align-items-center d-flex">
        <div>
          <h3>List on marketplace</h3>
          <p>Put your new NFT on NFTonPulse marketplace</p>
        </div>
        <div className="custom-switch">
          <InputRadio
            checked={enableListing}
            type="checkbox"
            name="enableListing"
            size="large"
            onChangeInputName={switchEnableContent}
            component={Switch}
          />
        </div>
      </div>
      <div
        className={
          !enableListing
            ? 'marketplace-content-disabled marketplace-content'
            : 'marketplace-content'
        }
      >
        <NftType isSingle={isSingle} marketType={marketType} onTab={onTab} />

        {marketType === MARKET_TYPE.SIMPLE && (
          <>
            <InputField
              value={price}
              type="number"
              required={true}
              label="Price"
              name="price"
              onChangeInputName={onChangePrice}
              id="item_price"
              className={`form-control input__holder__single`}
              placeholder={`Enter price for one item (${COIN})`}
              icon="PLS"
              moreInfo={[
                'Estimated Value ( ~$23,437) ',
                // eslint-disable-next-line react/jsx-key
                <Tooltip
                  title="Calculated using past 24 hour average price"
                  placement="right-start"
                >
                  <span>
                    <IconInfo className="cursor-pointer" />
                  </span>
                </Tooltip>
              ]}
              sublabel=""
              hidden={false}
              as=""
              openPopup={() => {}}
            />
          </>
        )}

        {marketType === MARKET_TYPE.AUCTION && (
          <InputField
            value={minimumBid}
            label="Minimum bid"
            sublabel="Bids below this amount bids won’t be allowed."
            type="number"
            required={true}
            onChangeInputName={onChangeMinimumBid}
            name="minimumBid"
            id="item_price_bid"
            icon="PLS"
            className={`form-control input__holder__single`}
            placeholder={'Enter minimum bid'}
            moreInfo=""
            as=""
            hidden={false}
            openPopup={() => {}}
          />
        )}

        <ExpirationDate
          setExpirationDate={setExpirationDate}
          dateRange={dateRange}
        />
        <hr />
      </div>
      {submitCreateState.loading ? (
        <Loader />
      ) : (
        <input
          type="submit"
          id="submit"
          className="btn-main btn-main-submit"
          value="Create Nft"
        />
      )}
      <div className="spacer-20"></div>
      {submitCreateState.error && (
        <Alert text={submitCreateState.error} type={ALERT_TYPE.DANGER} />
      )}
    </div>
  );
}

export default ListOnMarketPlace;
