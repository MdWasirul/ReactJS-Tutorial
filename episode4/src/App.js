import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";



// console.log(resObjLIst);
const resObj = {
  info: {
    id: "345121",
    name: "The Nawaabs Restaurant",
    cloudinaryImageId: "wqosucfihcmzg1dyqc2k",
    locality: "Gachibowli",
    areaName: "Gachibowli",
    costForTwo: "₹400 for two",
    cuisines: ["North Indian", "Chinese", "Biryani"],
    avgRating: 4.2,
    parentId: "211813",
    avgRatingString: "4.2",
    totalRatingsString: "31K+",
    sla: {
      deliveryTime: 28,
      lastMileTravel: 4.7,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "4.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-02-04 23:59:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹199",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "4.2",
        ratingCount: "11K+",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
};

const Footer = () => {};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

