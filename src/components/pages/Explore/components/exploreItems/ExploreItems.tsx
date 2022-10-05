import NftItems from '../../../../components/nftItems/nftItems.style';
import ExploreFilter from './ExploreFilter';
import ExploreItemRedux from './ExploreItemRedux';

const ExploreItems = () => {
  return (
    <>
      <section className="jumbotron breadcumb no-bg main-jumbo">
        <div className="mainbreadcumb">
          <div className="container container-nospace">
            <div className="row m-10-hor mb-5">
              <div className="col-12">
                <h1 className="text-center">Explore</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ExploreFilter />
              </div>
            </div>
            <NftItems>
              <div className="nft-general-style">
                <div className={`nft_items__holder`}>
                  <ExploreItemRedux />
                </div>
              </div>
            </NftItems>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExploreItems;
