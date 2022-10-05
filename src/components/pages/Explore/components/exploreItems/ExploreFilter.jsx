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

const ExploreFilter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectors.nftFilter);
  const sortOrder = useSelector(selectors.nftSorter);
  const collectionList = useSelector(selectors.collectionsState).collections
    .data;
  const nftCount = useSelector(selectors.nftCount);

  const handleCategory = useCallback(
    (event) => {
      const { value } = event;
      dispatch(filterCategories({ value: value, singleSelect: false }));
    },
    [dispatch]
  );

  // const handleCategory = useCallback(
  //   (event) => {
  //     if (event.length == 0) {
  //       dispatch(filterCategories({ singleSelect: false }));
  //     } else {
  //       dispatch(
  //         filterCategories({ value: event[0]['value'], singleSelect: false })
  //       );
  //     }
  //   },
  //   [dispatch]
  // );

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

  const defaultValue = {
    value: null,
    label: 'Select Filter'
  };

  const customStyles = {
    option: (base, state) => ({
      ...base,
      background: '#000',
      color: '#fff',
      borderRadius: state.isFocused ? '0' : 0,
      '&:hover': {
        background: '#000'
      }
    }),
    menu: (base) => ({
      ...base,
      borderRadius: 5,
      marginTop: 0,
      border: 0,
      background:
        'linear-gradient(90deg, rgba(244, 5, 201, 0.2) -1.88%, rgba(57, 147, 255, 0.2) 129.09%)'
    }),
    menuList: (base) => ({
      ...base,
      padding: 0,
      border: 0,
      background:
        'linear-gradient(90deg, rgba(244, 5, 201, 0.2) -1.88%, rgba(57, 147, 255, 0.2) 129.09%)'
    }),
    control: (base, state) => ({
      ...base,
      padding: 2,
      border: 0,
      background:
        'linear-gradient(90deg, rgba(244, 5, 201, 0.2) -1.88%, rgba(57, 147, 255, 0.2) 129.09%)'
    })
  };

  return (
    <>
      <div
        className={`general-custom-filters items_filter explore_items_filer`}
      >
        <div className="row mr-2 ml-0">
          <div className="col-md-10">
            <h4 className="text-left mb-4">Filter By</h4>
            <div className=" dropdownSelect one">
              <div className={`de_form price_filer_holder`}>
                <CategoryPopover
                  collectionList={categories}
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

            {/* <div className="dropdownSelect two">
              <Select
                isMulti
                styles={customStyles}
                options={[defaultValue, ...status]}
                onChange={handleStatus}
              />
            </div> */}
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

          <div className="col-md-2  ">
            <h4 className="text-left">Sort By</h4>
            <div className="dropdownSelect mt-3 two">
              <div className={`de_form price_filer_holder`}>
                <SortPopover
                  currentOrder={sortOrder}
                  onUpdate={(value) => dispatch(setSortOrder(value))}
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
