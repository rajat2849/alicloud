import { connect } from 'react-redux';
import PaketHemat from '../components/PaketHemat';
import {addToCart} from '../../../store/newcart';
import { getProductDetailPromotions, getProductDetailValueDeals, getProductDetailPizza, setSectionDetail, setColapsestate, setQuantity, resetPizzaContainer, getProductDetailSides, getProductDetailBeverage, resetImageContainer, resetProductDetailProps, fetchAllTopings, resetProps, fetchTopingList, setProductParentSku, resetAlertBox, setUpdatedToppings, setUpdatedPrice, setProductId, resetPropsOnAddToCart } from '../modules/paketHemat';
import { setDefaultCart, saveCart, updateDefaultSessionCart, resetCartAlertBox, applyVoucherCode, getCouponProductDetail } from '../../../store/cart';
import { getPromotionList, getValueDealsList, getPizzaList, getSidesDessertsList, getBeverageList } from '../../../store/productDetail';
import { loadingImage } from '../../../store/app';

const mapStateToProps = (state) => {
  return({
    processing: state.cart.processing,
    isShakeCartIcon: state.cart.isShakeCartIcon,
    addCartDetail: state.cart.addCartDetail,
    lang: state.i18nState.lang,
    toppingTitle: state.PaketHemat.toppingTitle,
    topFetching: state.PaketHemat.topFetching,
    topError: state.PaketHemat.topError,
    allToppings: state.PaketHemat.allToppings,
    defaultToppings: state.PaketHemat.defaultToppings,
    defaultPersonalToppings: state.PaketHemat.defaultPersonalToppings,
    app: state.app.app,
    loader: state.app.loader,
    productPromotionDetail: state.PaketHemat.promotionDetail,
    sortedPromotionDetail: state.PaketHemat.sortedPromotionDetail,
    productValueDetail: state.PaketHemat.valueDetail,
    productPizzaDetail: state.PaketHemat.pizzaDetail,
    promotionProductList: state.PaketHemat.promotionProductList,
    sortedPromotionArray: state.PaketHemat.sortedPromotionArray,
    size: state.PaketHemat.size,
    crust: state.PaketHemat.crust,
    sectionBasedCrustArray: state.PaketHemat.sectionBasedCrustArray,
    sectionBasedProductArray: state.PaketHemat.sectionBasedProductArray,
    thumbnail: state.PaketHemat.thumbnail,
    description: state.PaketHemat.description,
    crust_image: state.PaketHemat.crust_image,
    defaultCrust: state.PaketHemat.defaultCrust,
    defaultSize: state.PaketHemat.defaultSize,
    sku: state.PaketHemat.sku,
    price: state.PaketHemat.price,
    colapseClassName: state.PaketHemat.colapseClassName,
    default_topping: state.PaketHemat.default_topping,
    isToppingSet: state.PaketHemat.isToppingSet,
    quantity: state.PaketHemat.quantity,
    valueDealsProductList: state.PaketHemat.valueDealsProductList,
    sortedValueDealsArray: state.PaketHemat.sortedValueDealsArray,
    productDetailArray: state.PaketHemat.productDetailArray,
    productSidesDetail: state.PaketHemat.productSidesDetail,
    productBeverageDetail: state.PaketHemat.productBeverageDetail,
    pizzaProductList: state.PaketHemat.pizzaProductList,
    sortedPizzaArray: state.PaketHemat.sortedPizzaArray,
    cartProduct: state.PaketHemat.cartProduct,
    selectedProductSize: state.PaketHemat.selectedProductSize,
    fetching: state.PaketHemat.fetching,
    selectedProductCrust: state.PaketHemat.selectedProductCrust,
    showAlert: state.PaketHemat.showAlert,
    alertMessage: state.PaketHemat.alertMessage,
    parentSku: state.PaketHemat.parentSku,
    showCartAlert: state.cart.showAlert,
    alertCartMessage: state.cart.alertMessage,
    updatedPrice: state.PaketHemat.updatedPrice,
    pixelViewContentValue: state.PaketHemat.pixelViewContentValue,
    productId: state.PaketHemat.productId,
    fetchingPrice: state.PaketHemat.fetchingPrice,
    childProductCategory: state.PaketHemat.childProductCategory,
    chicken: state.PaketHemat.chicken,
    sauce: state.PaketHemat.sauce,
    defaultSideProduct: state.PaketHemat.defaultSideProduct,
    sidesDetail: state.PaketHemat.sidesDetail,
    selectedChicken: state.PaketHemat.selectedChicken,
    selectedSauce: state.PaketHemat.selectedSauce,
    selectedSize: state.PaketHemat.selectedSize,
    voucherCodeDetail: state.cart.voucherCodeDetail,
    couponProduct: state.cart.couponProduct,
    applying: state.cart.applying,
  });
};
const mapDispatchToProps = (dispatch) => {
  return({
    fetchAllTopings: (defaultToppings, title, status) => dispatch(fetchAllTopings(defaultToppings, title, status)),
    resetProps: () => dispatch(resetProps()),
    loadingImage: (status) => dispatch(loadingImage(status)),
    getProductDetailPromotions: (sku) => dispatch(getProductDetailPromotions(sku)),
    getProductDetailValueDeals: (sku) => dispatch(getProductDetailValueDeals(sku)),
    getProductDetailPizza: (sku) => dispatch(getProductDetailPizza(sku)),
    setProductParentSku: (sku) => dispatch(setProductParentSku(sku)),
    setSectionDetail: (list, name, section, container, selectedValue, selectedType) => dispatch(setSectionDetail(list, name, section, container, selectedValue, selectedType)),
    setColapsestate: (name) => dispatch(setColapsestate(name)),
    setQuantity: (name, quantity) => dispatch(setQuantity(name, quantity)),
    resetPizzaContainer: () => dispatch(resetPizzaContainer()),
    resetImageContainer: () => dispatch(resetImageContainer()),
    getProductDetailSides: (sidesDessert, category, sku) => dispatch(getProductDetailSides(sidesDessert, category, sku)),
    getProductDetailBeverage: (beverages) => dispatch(getProductDetailBeverage(beverages)),
    setDefaultCart: (productIndex, product) => dispatch(setDefaultCart(productIndex, product)),
    saveCart: (container, productId, productSku) => dispatch(saveCart(container, productId, productSku)),
    updateDefaultSessionCart: (updatedToppings) => dispatch(updateDefaultSessionCart(updatedToppings)),
    resetProductDetailProps: () => dispatch(resetProductDetailProps()),
    fetchTopingList: () => dispatch(fetchTopingList()),
    resetAlertBox: (showAlert, message) => dispatch(resetAlertBox(showAlert, message)),
    resetCartAlertBox: (showAlert, message) => dispatch(resetCartAlertBox(showAlert, message)),
    setUpdatedToppings: (toppings, size) => dispatch(setUpdatedToppings(toppings, size)),
    setUpdatedPrice: (updatedPrice) => dispatch(setUpdatedPrice(updatedPrice)),
    setProductId: (productId) => dispatch(setProductId(productId)),
    resetPropsOnAddToCart: () => dispatch(resetPropsOnAddToCart()),
    getPromotionList: () => dispatch(getPromotionList()),
    getValueDealsList: () => dispatch(getValueDealsList()),
    getPizzaList: () => dispatch(getPizzaList()),
    getSidesDessertsList: () => dispatch(getSidesDessertsList()),
    getBeverageList: () => dispatch(getBeverageList()),
    applyVoucherCode: (couponCode) => dispatch(applyVoucherCode(couponCode)),
    getCouponProductDetail: (sku) => dispatch(getCouponProductDetail(sku)),
    addToCart : (category,item,selectedProducts,product,edit,toppings,index) => dispatch(addToCart(category,item,selectedProducts,product,edit,toppings,index)),
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(PaketHemat);