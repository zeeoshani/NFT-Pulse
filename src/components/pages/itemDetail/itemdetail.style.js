import styled from 'styled-components';

const ItemDetailWrapper = styled.div`
  .nft-detail-page {
    section.nft-detail-section {
      position: relative;
      padding: 0;
      margin: 0;
      background-color: ${({ theme }) => theme.colors.bodybg};
      background-image: url(${({ theme }) => theme.colors.bannerImage});
      background-repeat: no-repeat;
    }
    /* nft detail page */
    .image_position {
      position: absolute;
      top: 0;
      left: 0;
    }
    .nft-detail {
      padding-top: 180px;
      .item_info {
        padding-left: 60px;
        .item_detail_head {
          h2 {
            font-size: 40px;
            line-height: 48px;
          }
          p {
            font-size: 16px;
            color: ${({ theme }) => theme.colors['text-light']};
            font-weight: 500;
            margin-bottom: 0;
            strong {
              font-weight: 700;
              color: ${({ theme }) => theme.colors['text-light']};
            }
          }
          margin-bottom: 25px;
        }
        .item_detail_content {
          p {
            font-size: 16px;
            color: ${({ theme }) => theme.colors['text-light']};
            font-weight: 500;
            margin-bottom: 5px;
            strong {
              font-weight: 700;
              color: ${({ theme }) => theme.colors['text-light']};
            }
            &.item_detail_price {
              color: #00b2fe;
              font-size: 18px;
              margin-top: 20px;
              display: flex;
              i {
                background: linear-gradient(
                  211.71deg,
                  #00eaff 13.69%,
                  #0080ff 32.04%,
                  #8000ff 49.84%,
                  #e619e6 68.2%,
                  #ff0000 86.31%
                );
                padding: 7px;
                border-radius: 55%;
                font-size: 0;
                margin-right: 5px;
                // display: inline-block;
                img {
                  max-width: 17px;
                }
              }
              strong {
                color: #00b2fe;
              }
            }
          }
          .author-details {
            margin-top: 30px;
          }
          .item_author {
            .author_list_pp {
              margin-left: 0;
            }
            .author_list_info {
              padding-top: 3px;
              padding-left: 60px;
              h6 {
                margin-bottom: 5px;
                color: ${({ theme }) => theme.colors['text-light']};
                font-size: 14px;
              }
              span {
                color: ${({ theme }) => theme.colors['text-light']};
              }
            }
          }
          .detail_properties {
            // margin-top: 30px;
            // margin-bottom: 30px;
            h6 {
              font-size: 16px;
              color: ${({ theme }) => theme.colors['text-light']};
            }
          }
          .de_tab {
            background: #0e193b;
            /* @include theme('themeLight', background, $white); */
            backdrop-filter: blur(50px);
            /* Note: backdrop-filter has minimal browser support */
            .de_tab_content {
              padding: 30px 20px;
            }
            border-radius: 0px 0px 5px 5px;
            .p_list {
              display: flex;
              align-items: center;
              .author_list_pp {
                position: relative;
                margin-left: 0;
                margin-top: 0;
              }
              .p_list_info {
                padding-left: 15px;
                b {
                  color: ${({ theme }) => theme.colors['text-light']};
                }
              }
            }
            .de_nav {
              margin-bottom: 0;
              background: linear-gradient(
                90deg,
                rgba(244, 5, 201, 0.07) -1.88%,
                rgba(57, 147, 255, 0.07) 129.09%
              );
              border: 1px solid #282a53;
              border-top-left-radius: 8px;
              border-top-right-radius: 8px;
              /* @include theme('themeLight', border, 0px); */
              li {
                padding: 2px;
                span {
                  margin-right: 0;
                  font-size: 16px;
                  font-weight: 700;
                  padding: 15px 40px;
                  color: ${({ theme }) => theme.colors['text-light']};
                }
                &.active {
                  background: rgb(254, 0, 199);
                  background: linear-gradient(
                    90deg,
                    rgba(254, 0, 199, 1) 0%,
                    rgba(9, 9, 121, 1) 100%,
                    rgba(0, 132, 254, 1) 100%
                  );
                  border-top-left-radius: 8px;
                  border-top-right-radius: 8px;
                  span {
                    // background: linear-gradient(
                    //     90deg,
                    //     rgba(244, 5, 201, 0.07) -1.88%,
                    //     rgba(57, 147, 255, 0.07) 129.09%
                    // );
                    border-top-left-radius: 8px;
                    border-top-right-radius: 8px;
                    background: #192754;
                    color: ${({ theme }) => theme.colors['text-light']};
                    /* @include theme('themeLight', background, $white); */
                    opacity: 0.9;
                    /* @include theme('themeLight', opacity, 1); */
                    /* @include theme(
                      'themeLight',
                      box-shadow,
                      0px 0px 20px 5px #cacaca inset
                    ); */
                  }
                }
              }
            }
          }
          .auction_endsin {
            // background: linear-gradient(90deg, rgba(244, 5, 201, 0.2) -1.88%, rgba(57, 147, 255, 0.2) 129.09%);
            background: #111f48;
            border-radius: 5px;
            max-width: 220px;
            margin: 0 auto;
            margin-right: 0;
            margin-top: 20px;
            margin-bottom: -25px;
            .de_countdown {
              background: none;
              font-size: 20px;
              text-align: center;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              padding: 10px;
              // padding: 17px 30px;
              margin-left: 0;
              margin-bottom: 0;
              div {
                color: ${({ theme }) => theme.colors['text-light']}!important;
                background: none !important;
                padding-top: 5px;
                -webkit-text-fill-color: ${({ theme }) =>
                  theme.colors['text-light']};
              }
              p {
                font-size: 13px;
                margin-bottom: 0;
                line-height: 2.5em;
              }
            }
          }
        }
      }
    }
    .nft-detail-image {
      text-align: left;
    }
    .nft-bottom-detail {
      .nft-detail-description {
        margin-bottom: 29px;
        h3 {
          margin-top: 30px;
          font-weight: 700;
          font-size: 18px;
          line-height: 23px;
          letter-spacing: -0.02em;
          color: ${({ theme }) => theme.colors['text-light']};
          margin-bottom: 8px;
          text-align: left;
          opacity: 1;
        }
        p {
          font-weight: 400;
          font-size: 16px;
          line-height: 28px;
          color: ${({ theme }) => theme.colors['text-light']};
          text-align: left;
          margin-bottom: 0;
        }
      }
      .nft-detail-properties {
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 8.2928px;
        padding: 20px 25px;
        h3 {
          font-weight: 700;
          font-size: 24px;
          line-height: 31px;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin: 0;
          opacity: 1;
          margin-bottom: 26px;
        }
        .attribute-fields-property {
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 38px;
          .attribute-field-property {
            min-width: 129px;
          }
          .nft-attr-normal {
            background: linear-gradient(
              90deg,
              rgba(254, 0, 199, 0.3) 0%,
              rgba(0, 132, 254, 0.3) 100%
            );
            padding: 15px 20px 8px;
            min-width: 75px;
            width: 100%;
            .nft-attr-name {
              font-size: 13px;
              line-height: 17px;
              text-transform: uppercase;
              margin-bottom: 11px;
              font-weight: 500;
            }
            .nft-attr-value {
              font-size: 22px;
              line-height: 29px;
              font-weight: 500;
            }
          }
          margin-bottom: 40px;
        }
        .attribute-field-stat {
          margin-bottom: 27px;
          background: linear-gradient(
            90deg,
            rgba(254, 0, 199, 0.3) 0%,
            rgba(0, 132, 254, 0.3) 100%
          );
          border-width: 2px;
          border-style: solid;
          border-color: rgb(26, 150, 248);
          border-image: initial;
          border-radius: 10px;
          padding: 7px 10px 10px;

        }
      }

      ul {
        display: flex;
        padding: 0;
        list-style: none;
        li {
          font-size: 16px;
          margin-right: 25px;
          a {
            color: ${({ theme }) => theme.colors['text-light']};
            text-decoration: none;
            display: flex;
            i {
              margin-right: 8px;
              margin-top: -2px;
              img {
                width: 20px;
              }
            }
            span {
              border-bottom: 1px solid
                ${({ theme }) => theme.colors['text-light']};
            }
          }
        }
      }
    }
  }
`;
export default ItemDetailWrapper;
