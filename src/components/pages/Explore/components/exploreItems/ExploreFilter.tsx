import { navigate, useLocation } from '@reach/router';
import React, { memo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  categories,
  status
} from 'src/components/components/constants/filters';
import CategoryPopover from 'src/components/components/Popovers/CategoryPopover';
import CollectionPopover from 'src/components/components/Popovers/CollectionPopover';
import PricePopover from 'src/components/components/Popovers/PricePopover';
import SortPopover from 'src/components/components/Popovers/SortPopover';
import StatusPopover from 'src/components/components/Popovers/StatusPopover';
import {
  filterCategories,
  filterCollections,
  filterPrice,
  filterStatus,
  setSortOrder
} from 'src/store/actions';
import { fetchCountForCategories } from 'src/store/actions/thunks';
import { getCollections } from 'src/store/actions/thunks/collections';
import * as selectors from 'src/store/selectors';

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const ExploreFilter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectors.nftFilter);
  const sortOrder = useSelector(selectors.nftSorter);
  const collectionList = useSelector(selectors.collectionsState).collections
    .data;
  const nftCount = useSelector(selectors.nftCount);

  const query = useQuery();
  const category = query.get('category');
  const sortby = query.get('sortby');

  useEffect(() => {
    if (category != null) {
      dispatch(filterCategories({ value: category, singleSelect: true }));
    }
    if (sortby != null) {
      dispatch(setSortOrder(sortby));
    }
  }, []);

  const handleCategory = useCallback(
    (event) => {
      const { value } = event;
      let path = '/explore?category=' + value;
      if (sortby != null) {
        path += '&sortby=' + sortby;
      }
      navigate(path);
      // dispatch(filterCategories({ value: value, singleSelect: false }));
    },
    [dispatch]
  );

  const handleSortby = (value) => {
    let path = '/explore?';
    if (category != null) {
      path += 'category=' + category + '&';
    }
    path += 'sortby=' + value;
    navigate(path);
  };

  const handleStatus = useCallback(
    (event) => {
      const { value } = event;
      dispatch(filterStatus({ value: value, singleSelect: false }));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(getCollections());
    dispatch(fetchCountForCategories());
  }, []);

  return (
    <>
      <div
        className={`general-custom-filters items_filter explore_items_filer`}
      >
        <div className="row mr-2 ml-0">
          <div className="col-md-10">
            <h4 className="text-left mb-4">Filter By</h4>
            <div className="explore-filtermain test">
              <div className=" dropdownSelect one">
                <div className={`de_form price_filer_holder`}>
                  <CategoryPopover
                    collectionList={categories}
                    nftCount={nftCount}
                    onUpdate={(value) => handleCategory({ value })}
                  />
                </div>
              </div>

              <div className=" dropdownSelect one">
                <div className={`de_form price_filer_holder`}>
                  <StatusPopover
                    collectionList={status}
                    onUpdate={(value) => handleStatus({ value })}
                  />
                </div>
              </div>

              <div className=" dropdownSelect one">
                <div className={`de_form price_filer_holder`}>
                  <PricePopover
                    data={filters?.price}
                    onUpdate={(v) => dispatch(filterPrice(v))}
                  />
                </div>
              </div>
              <div className=" dropdownSelect one">
                <div className={`de_form price_filer_holder`}>
                  <CollectionPopover
                    data={filters?.collections}
                    collectionList={collectionList}
                    onUpdate={(value) => dispatch(filterCollections({ value }))}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-2  ">
            <h4 className="text-left">Sort By</h4>
            <div className="dropdownSelect mt-3 two">
              <div className={`de_form price_filer_holder`}>
                <SortPopover
                  currentOrder={sortOrder}
                  onUpdate={(value) => handleSortby(value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ExploreFilter);
