export const COIN = 'ETH';
export const COMISSION_PERCENTAGE = 1;

export enum MARKET_TYPE {
  SIMPLE = 'SIMPLE',
  AUCTION = 'AUCTION',
  MORE = 'MORE'
}

export enum ROYALTIES_TYPE {
  PERCENT5 = 'PERCENT5',
  PERCENT10 = 'PERCENT10',
  PERCENT15 = 'PERCENT15',
  PERCENT20 = 'PERCENT20',
  PERCENT25 = 'PERCENT25',
  CUSTOM = 'CUSTOM'
}

export enum COLLECTION_TYPE {
  NULL = 'NULL',
  Art = 'Art',
  Collectibles = 'Collectibles',
  DomainNames = 'Domain Names',
  Music = 'Music',
  Photography = 'Photography',
  Sports = 'Sports',
  TradingCards = 'Trading Cards',
  Utility = 'Utility',
  VirtualWorlds = 'Virtual Worlds',
  Gaming = 'Gaming',
  Other = 'Other'
}

export enum ITEM_TYPE {
  single_items = 'single_items',
  bundles = 'bundles'
}

export enum STATUS {
  ON_SELL = 'ON_SELL', //TODO: CHANGE TO ===>> ON_SALE
  NOT_LISTED = 'NOT_LISTED'
}

export enum PROCESS_TRAKING_ACTION {
  CREATE_SINGLE = 'CREATE_SINGLE',
  CREATE_MULTIPLE = 'CREATE_MULTIPLE',
  LIST_SIMPLE_SINGLE = 'LIST_SIMPLE_SINGLE',
  LIST_SIMPLE_MULTIPLE = 'LIST_SIMPLE_MULTIPLE',
  LIST_AUCTION = 'LIST_AUCTION',
  CANCEL_SIMPLE_SINGLE = 'CANCEL_SIMPLE_SINGLE',
  CANCEL_SIMPLE_MULTIPLE = 'CANCEL_SIMPLE_MULTIPLE',
  CANCEL_AUCTION = 'CANCEL_AUCTION',
  BUY_SIMPLE_SINGLE = 'BUY_SIMPLE_SINGLE',
  BUY_SIMPLE_MULTIPLE = 'BUY_SIMPLE_MULTIPLE',
  BID = 'BID',
  OFFER = 'OFFER',
  ACCEPT_OFFER = 'ACCEPT_OFFER',
  CANCEL_OFFER = 'CANCEL_OFFER',
  TERMINATE_AUCTION_NOT_SOLD = 'TERMINATE_AUCTION_NOT_SOLD',
  TERMINATE_AUCTION_SOLD = 'TERMINATE_AUCTION_SOLD'
}
export enum PROCESS_TRAKING_STATUS {
  BEFORE = 'BEFORE',
  AFTER = 'AFTER'
}

export enum ALERT_TYPE {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
  INFO = 'info',
  LIGHT = 'light',
  DARK = 'dark'
}

export enum IMAGES_NAMES {
  PROFILE_IMAGE = 'PROFILE_IMAGE'
}

export enum NETWORKS {
  ETH_MAIN_NET = 1,
  RINKEBY = 4,
  GOERLI = 5,
  PULSE_CHAIN = 941
}

// export const SELECTED_NETWORK = NETWORKS.RINKEBY;
export const SELECTED_NETWORK = NETWORKS.GOERLI;

export enum ERRORS {
  NOT_CONNECTED_TO_WALLET = 'You are not connected',
  // WRONG_NETWORK = 'You are not on the right network. Please switch to Rinkeby.',
  WRONG_NETWORK = 'You are not on the right network. Please switch to Goerli.',
  MISSING_IMAGE = 'Please upload an image.',
  NOT_ENOUGH_BALANCE = 'Oups. Seems like your balance is too low.',
  SET_QUANTITY = 'Please set a quantity.',
  NOT_THE_RIGHT_PRICE = 'Make sure to select the right price.',
  SET_PRICE = 'Please set a price.',
  NOT_ABOVE_MINIMUM_PRICE = 'The price has to be higher than the last and the minimum price.',
  AUCTION_IS_CLOSED = 'This auction is closed!',
  AUCTION_IS_FINISHED = "This auction is finished. It's too late to place bids.",
  ONLY_OWNER_CAN_CANCEL = 'Only the owner of the NFT can cancel.',
  THERE_ARE_BIDS = 'An auction cannot be cancelled if there are bids.',
  NOTHING_TO_CANCEL = 'There are no NFTs to be cancel.',
  AUCTION_HASNT_ENDED = 'The auction has not ended!',
  NO_NFTS_TO_BUY = 'There are no NFTs on sale.',
  ALREADY_LISTED = 'You already listed this NFT. Cancel it or wait for users to buy it.',
  CANT_LIST_NFT_YOU_DONT_HAVE = "You can't list Nft you don't have.",
  CANT_BUY_FROM_YOURSELF = "You can't buy Nft from yourself."
}

export enum INPUT_ERROS {
  tooShort = 'The input is too short.',
  higherThanZero = 'The number should be higher than zero.',
  tooLong = 'The input is too long.',
  requiredField = 'Required Field',
  numberIsHigher = 'The number is higher than it should be.',
  numberIsLower = 'The number is lower than it should be.',
  oneHourMinimun = 'The expiration date should be higher than one hour from now.',
  notValidUrl = 'Please Input Valid Url',
  notDecimal = 'The input cannot be decimal.'
}

export enum API_ERRORS {
  TOKEN_EXPIRED = 'Token is expired.',
  TOKEN_INVALID = 'Token is invalid.'
}

export enum LOCAL_STORAGE {
  USER_ADDRESS = '@USER_ADDRESS'
}

export enum USER_TYPE {
  BUYER = 'BUYER',
  SELLER = 'SELLER'
}

export enum SELL_DAYS {
  ONE = '1',
  SEVEN = '7',
  THIRTY = '30'
}

export enum NftStatus {
  ON_SELL = 'ON_SELL', //TODO: CHANGE TO ===>> ON_SALE
  NOT_LISTED = 'NOT_LISTED'
}

export enum NftType {
  ON_AUCTION = 'AUCTION',
  BUY_NOW = 'SIMPLE'
}

export enum FilterOperator {
  Equals = 'eq',
  GreaterThanEqual = 'gte',
  Contains = 'contains',
  LessThanEqual = 'lte',
  InArray = 'in'
}

export enum SortOrder {
  RECENTLY_ADDED = 'recently added',
  PRICE_LOW_TO_HIGH = 'price low to high',
  PRICE_HIGH_TO_LOW = 'price high to low',
  AUCTION_ENDING_SOON = 'auction ending soon'
}

export enum MARKET_CONTRACT_EVENTS {
  Mint = 'Mint',
  SimpleItemCreated = 'SimpleItemCreated',
  AuctionMarketItemCreated = 'AuctionMarketItemCreated',
  SimpleItemSoldEvent = 'SimpleItemSold',
  AuctionBidCreated = 'AuctionBidCreated',
  SimpleItemCancelled = 'SimpleItemCancelled',
  AuctionCancelled = 'AuctionCancelled',
  AuctionTerminated = 'AuctionTerminated',
  OfferCreated = 'OfferCreated',
  OfferAccepted = 'OfferAccepted',
  OfferCancelled = 'OfferCancelled'
}

export enum ATTRIBUTE_TYPE {
  STRING = 'string',
  RANKING = 'ranking',
  DATE = 'date',
  NUMBER = 'number',
  BOOST_NUMBER = 'boost_number',
  BOOST_PERCENTAGE = 'boost_percentage'
}

export enum TOP_SELLERS_BUYERS {
  SELLERS = 'SELLERS',
  BUYERS = 'BUYERS'
}
export enum ITEM_CREATE_STATUS {
  IPFS_FILE = 0,
  IPFS_METADATA = 1,
  CREATE_NFT = 2,
  LAZY_MINT_NFT = 3,
  LIST_ITEM = 4,
  FINISHED = 5
}

export enum ITEM_CREATE_STATUS_LABEL {
  IPFS_FILE = 'Upload image file to ipfs',
  IPFS_METADATA = 'Upload metadata to ipfs',
  CREATE_NFT = 'Mint NFT',
  LIST_ITEM = 'List item on the market',
  LAZY_MINT_NFT = 'Lazy mint NFT'
}
