<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/common/taglib.jsp" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
</head>
<body>

<!-- PROGRESS BAR SECTION -->
<div id="hot-deal1" class="section">
    <!-- container -->
    <div class="container">
        <!-- row -->
        <div class="row">
            <div class="col-sm-7 col-md-4">
                <h3 class="text">Estimate cost (USD)?</h3>
            </div>
            <div class="col-sm-7 col-md-4">
                <!-- ----- -->
                <div id="slidecontainer">

                    <h1>Area :</h1>
                    <input type="range" min="0" max="100" value="0" class="slider-color" id="id1" step="3"></p>

                </div>

                <!-- -------- -->

            </div>
            <div class="col-sm-7 col-md-4">
                <h2><span>Area:</span> <span id="a" style="font-weight:bold;color:red">0</span><span> m2</span></h2>
                <h2><span>KwH:</span> <span id="k" style="font-weight:bold;color:red">0</span></h2>
                <h2><span id="f" style="font-weight:bold;color:red">0</span><span> $</span></h2>
            </div>
            <script>

                var slideCol = document.getElementById("id1");
                var a = document.getElementById("a");
                var k = document.getElementById("k");
                var y = document.getElementById("f");

                slideCol.oninput = function() {
                    var iarea = slideCol.value;
                    var iKwh = iarea*7;
                    var iMoney = iKwh*700;


                    a.innerHTML = iarea;
                    k.innerHTML = iKwh;
                    y.innerHTML = iMoney;
                }
            </script>
        </div>
        <!-- /row -->
    </div>
    <!-- /container -->
</div>
<!-- /PROCESS BAR SECTION -->

<!-- SECTION -->
<div class="section">
    <!-- container -->
    <div class="container">
        <!-- row -->
        <div class="row">
            <!-- shop -->
            <div class="col-md-6 col-xs-6">
                <div class="shop">
                    <div class="shop-img">
                        <img src="<c:url value="template/web/img/shop01.png"/>" alt="">
                    </div>
                    <div class="shop-body">
                        <h3>Family<br>Solar Power</h3>
                        <a href="<c:url value="danh-muc?sanpham=1"/> " class="cta-btn">Shop now <i class="fa fa-arrow-circle-right"></i></a>
                    </div>
                </div>
            </div>
            <!-- /shop -->

            <!-- shop -->
            <div class="col-md-6 col-xs-6">
                <div class="shop">
                    <div class="shop-img">
                        <img src="<c:url value="template/web/img/shop02.png"/>" alt="">
                    </div>
                    <div class="shop-body">
                        <h3>Solar<br>Electricity Business</h3>
                        <a href="<c:url value="danh-muc?sanpham=1"/>" class="cta-btn">Shop now <i class="fa fa-arrow-circle-right"></i></a>
                    </div>
                </div>
            </div>
            <!-- /shop -->
        </div>
        <!-- /row -->
    </div>
    <!-- /container -->
</div>
<!-- /SECTION -->

<!-- SECTION -->
<div class="section">
    <!-- container -->
    <div class="container">
        <!-- row -->
        <div class="row">

            <!-- section title -->
            <div class="col-md-12">
                <div class="section-title">
                    <h3 class="title">New Solar Pano</h3>
                </div>
            </div>
            <!-- /section title -->

            <!-- Products tab & slick -->
            <div class="col-md-12">
                <div class="row">
                    <div class="products-tabs">
                        <!-- tab -->
                        <div id="tab1" class="tab-pane active">
                            <div class="products-slick" data-nav="#slick-nav-1">
                                <!-- product -->
                                <div class="product">
                                    <div class="product-img">
                                        <img src="<c:url value="template/web/img/product01.png"/>" alt="">
                                        <div class="product-label">
                                            <span class="sale">-30%</span>
                                            <span class="new">NEW</span>
                                        </div>
                                    </div>
                                    <div class="product-body">
                                        <p class="product-category">SOTO</p>
                                        <h3 class="product-name"><a href="<c:url value="danh-muc?sanpham=1"/>">Sunteck 20W</a></h3>
                                        <h4 class="product-price">$100.00
                                            <del class="product-old-price">$400.00</del>
                                        </h4>
                                        <div class="product-rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                        <div class="product-btns">
                                            <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                                                    class="tooltipp">add to wishlist</span></button>
                                            <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                                                    class="tooltipp">add to compare</span></button>
                                            <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="add-to-cart">
                                        <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> add to cart
                                        </button>
                                    </div>
                                </div>
                                <!-- /product -->

                                <!-- product -->
                                <div class="product">
                                    <div class="product-img">
                                        <img src="<c:url value="template/web/img/product02.png"/>" alt="">
                                        <div class="product-label">
                                            <span class="new">NEW</span>
                                        </div>
                                    </div>
                                    <div class="product-body">
                                        <p class="product-category">MEGASUN</p>
                                        <h3 class="product-name"><a href="<c:url value="danh-muc?sanpham=1"/>">MEGASUN 30W</a></h3>
                                        <h4 class="product-price">$280.00
                                            <del class="product-old-price">$300.00</del>
                                        </h4>
                                        <div class="product-rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-o"></i>
                                        </div>
                                        <div class="product-btns">
                                            <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                                                    class="tooltipp">add to wishlist</span></button>
                                            <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                                                    class="tooltipp">add to compare</span></button>
                                            <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="add-to-cart">
                                        <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> add to cart
                                        </button>
                                    </div>
                                </div>
                                <!-- /product -->

                                <!-- product -->
                                <div class="product">
                                    <div class="product-img">
                                        <img src="<c:url value="template/web/img/product03.png"/>" alt="">
                                        <div class="product-label">
                                            <span class="sale">-30%</span>
                                        </div>
                                    </div>
                                    <div class="product-body">
                                        <p class="product-category">Năng Lượng Bền Vững</p>
                                        <h3 class="product-name"><a href="<c:url value="danh-muc?sanpham=1"/>">Năng Lượng Bền Vững Panel 35W</a></h3>
                                        <h4 class="product-price">$280.00
                                            <del class="product-old-price">$300.00</del>
                                        </h4>
                                        <div class="product-rating">
                                        </div>
                                        <div class="product-btns">
                                            <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                                                    class="tooltipp">add to wishlist</span></button>
                                            <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                                                    class="tooltipp">add to compare</span></button>
                                            <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="add-to-cart">
                                        <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> add to cart
                                        </button>
                                    </div>
                                </div>
                                <!-- /product -->

                                <!-- product -->
                                <div class="product">
                                    <div class="product-img">
                                        <img src="<c:url value="template/web/img/product04.png"/>" alt="">
                                    </div>
                                    <div class="product-body">
                                        <p class="product-category">VIMETCO</p>
                                        <h3 class="product-name"><a href="<c:url value="danh-muc?sanpham=1"/>">Panel VIMETCO</a></h3>
                                        <h4 class="product-price">$380.00
                                            <del class="product-old-price">$600.00</del>
                                        </h4>
                                        <div class="product-rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                        <div class="product-btns">
                                            <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                                                    class="tooltipp">add to wishlist</span></button>
                                            <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                                                    class="tooltipp">add to compare</span></button>
                                            <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="add-to-cart">
                                        <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> add to cart
                                        </button>
                                    </div>
                                </div>
                                <!-- /product -->

                                <!-- product -->
                                <div class="product">
                                    <div class="product-img">
                                        <img src="<c:url value="template/web/img/product05.png"/>" alt="">
                                    </div>
                                    <div class="product-body">
                                        <p class="product-category">SolarBK</p>
                                        <h3 class="product-name"><a href="<c:url value="danh-muc?sanpham=1"/>">SolarBK Panel 50W</a></h3>
                                        <h4 class="product-price">$980.00
                                            <del class="product-old-price">$990.00</del>
                                        </h4>
                                        <div class="product-rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                        <div class="product-btns">
                                            <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                                                    class="tooltipp">add to wishlist</span></button>
                                            <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                                                    class="tooltipp">add to compare</span></button>
                                            <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="add-to-cart">
                                        <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> add to cart
                                        </button>
                                    </div>
                                </div>
                                <!-- /product -->
                            </div>
                            <div id="slick-nav-1" class="products-slick-nav"></div>
                        </div>
                        <!-- /tab -->
                    </div>
                </div>
            </div>
            <!-- Products tab & slick -->
        </div>
        <!-- /row -->
    </div>
    <!-- /container -->
</div>
<!-- /SECTION -->

<!-- SECTION -->
<div class="section">
    <!-- container -->
    <div class="container">
        <!-- row -->
        <div class="row">

            <!-- section title -->
            <div class="col-md-12">
                <div class="section-title">
                    <h3 class="title">BEST SELLER</h3>
                </div>
            </div>
            <!-- /section title -->

            <!-- Products tab & slick -->
            <div class="col-md-12">
                <div class="row">
                    <div class="products-tabs">
                        <!-- tab -->
                        <div id="tab2" class="tab-pane fade in active">
                            <div class="products-slick" data-nav="#slick-nav-2">
                                <!-- product -->
                                <div class="product">
                                    <div class="product-img">
                                        <img src="<c:url value="template/web/img/product06.png"/>" alt="">
                                        <div class="product-label">
                                            <span class="sale">-30%</span>
                                            <span class="new">NEW</span>
                                        </div>
                                    </div>
                                    <div class="product-body">
                                        <p class="product-category">VIMETCO</p>
                                        <h3 class="product-name"><a href="<c:url value="danh-muc?sanpham=1"/>">VIMETCO 20W</a></h3>
                                        <h4 class="product-price">$980.00
                                            <del class="product-old-price">$990.00</del>
                                        </h4>
                                        <div class="product-rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                        <div class="product-btns">
                                            <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                                                    class="tooltipp">add to wishlist</span></button>
                                            <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                                                    class="tooltipp">add to compare</span></button>
                                            <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="add-to-cart">
                                        <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> add to cart
                                        </button>
                                    </div>
                                </div>
                                <!-- /product -->

                                <!-- product -->
                                <div class="product">
                                    <div class="product-img">
                                        <img src="<c:url value="template/web/img/product07.png"/>" alt="">
                                        <div class="product-label">
                                            <span class="new">NEW</span>
                                        </div>
                                    </div>
                                    <div class="product-body">
                                        <p class="product-category">SolarBK</p>
                                        <h3 class="product-name"><a href="<c:url value="danh-muc?sanpham=1"/>">SolarBK Panel</a></h3>
                                        <h4 class="product-price">$280.00
                                            <del class="product-old-price">$500.00</del>
                                        </h4>
                                        <div class="product-rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-o"></i>
                                        </div>
                                        <div class="product-btns">
                                            <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                                                    class="tooltipp">add to wishlist</span></button>
                                            <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                                                    class="tooltipp">add to compare</span></button>
                                            <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="add-to-cart">
                                        <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> add to cart
                                        </button>
                                    </div>
                                </div>
                                <!-- /product -->

                                <!-- product -->
                                <div class="product">
                                    <div class="product-img">
                                        <img src="<c:url value="template/web/img/product08.png"/>" alt="">
                                        <div class="product-label">
                                            <span class="sale">-30%</span>
                                        </div>
                                    </div>
                                    <div class="product-body">
                                        <p class="product-category">MEGASUN</p>
                                        <h3 class="product-name"><a href="<c:url value="danh-muc?sanpham=1"/>">Panel MEGASUN 70W</a></h3>
                                        <h4 class="product-price">$980.00
                                            <del class="product-old-price">$990.00</del>
                                        </h4>
                                        <div class="product-rating">
                                        </div>
                                        <div class="product-btns">
                                            <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                                                    class="tooltipp">add to wishlist</span></button>
                                            <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                                                    class="tooltipp">add to compare</span></button>
                                            <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="add-to-cart">
                                        <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> add to cart
                                        </button>
                                    </div>
                                </div>
                                <!-- /product -->

                                <!-- product -->
                                <div class="product">
                                    <div class="product-img">
                                        <img src="<c:url value="template/web/img/product09.png"/>" alt="">
                                    </div>
                                    <div class="product-body">
                                        <p class="product-category">MEGASUN</p>
                                        <h3 class="product-name"><a href="<c:url value="danh-muc?sanpham=1"/>">MEGASUN Panel 10W</a></h3>
                                        <h4 class="product-price">$80.00
                                            <del class="product-old-price">$100.00</del>
                                        </h4>
                                        <div class="product-rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                        <div class="product-btns">
                                            <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                                                    class="tooltipp">add to wishlist</span></button>
                                            <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                                                    class="tooltipp">add to compare</span></button>
                                            <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="add-to-cart">
                                        <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> add to cart
                                        </button>
                                    </div>
                                </div>
                                <!-- /product -->

                                <!-- product -->
                                <div class="product">
                                    <div class="product-img">
                                        <img src="<c:url value="template/web/img/product01.png"/>" alt="">
                                    </div>
                                    <div class="product-body">
                                        <p class="product-category">SolarBk</p>
                                        <h3 class="product-name"><a href="<c:url value="danh-muc?sanpham=1"/>">SolarBK 20W</a></h3>
                                        <h4 class="product-price">$300.00
                                            <del class="product-old-price">$590.00</del>
                                        </h4>
                                        <div class="product-rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                        <div class="product-btns">
                                            <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                                                    class="tooltipp">add to wishlist</span></button>
                                            <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                                                    class="tooltipp">add to compare</span></button>
                                            <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="add-to-cart">
                                        <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> add to cart
                                        </button>
                                    </div>
                                </div>
                                <!-- /product -->
                            </div>
                            <div id="slick-nav-2" class="products-slick-nav"></div>
                        </div>
                        <!-- /tab -->
                    </div>
                </div>
            </div>
            <!-- /Products tab & slick -->
        </div>
        <!-- /row -->
    </div>
    <!-- /container -->
</div>
<!-- /SECTION -->

<!-- SECTION -->
<div class="section">
    <!-- container -->
    <div class="container">
        <!-- row -->
        <div class="row">
            <div class="col-md-4 col-xs-6">
                <div class="section-title">
                    <h4 class="title">Best Seller</h4>
                    <div class="section-nav">
                        <div id="slick-nav-3" class="products-slick-nav"></div>
                    </div>
                </div>

                <div class="products-widget-slick" data-nav="#slick-nav-3">
                    <div>
                        <!-- product widget -->
                        <div class="product-widget">
                            <div class="product-img">
                                <img src="<c:url value="template/web/img/product07.png"/>" alt="">
                            </div>
                            <div class="product-body">
                                <p class="product-category">MEGASON</p>
                                <h3 class="product-name"><a href="<c:url value="danh-muc?sanpham=1"/>">MEGASON Panel 20W</a></h3>
                                <h4 class="product-price">$280.00
                                    <del class="product-old-price">$390.00</del>
                                </h4>
                            </div>
                        </div>
                        <!-- /product widget -->

                        <!-- product widget -->
                        <div class="product-widget">
                            <div class="product-img">
                                <img src="<c:url value="template/web/img/product08.png"/>" alt="">
                            </div>
                            <div class="product-body">
                                <p class="product-category">VIMETCO</p>
                                <h3 class="product-name"><a href="<c:url value="danh-muc?sanpham=1"/>">VIMETCO 20W</a></h3>
                                <h4 class="product-price">$180.00
                                    <del class="product-old-price">$490.00</del>
                                </h4>
                            </div>
                        </div>
                        <!-- /product widget -->

                        <!-- product widget -->
                        <div class="product-widget">
                            <div class="product-img">
                                <img src="<c:url value="template/web/img/product09.png"/>" alt="">
                            </div>
                            <div class="product-body">
                                <p class="product-category">SolarBK</p>
                                <h3 class="product-name"><a href="<c:url value="danh-muc?sanpham=1"/>">SolarBK 20W</a></h3>
                                <h4 class="product-price">$480.00
                                    <del class="product-old-price">$590.00</del>
                                </h4>
                            </div>
                        </div>
                        <!-- product widget -->
                    </div>

                    <div>
                        <!-- product widget -->
                        <div class="product-widget">
                            <div class="product-img">
                                <img src="<c:url value="template/web/img/product01.png"/>" alt="">
                            </div>
                            <div class="product-body">
                                <p class="product-category">SUNTECK</p>
                                <h3 class="product-name"><a href="<c:url value="danh-muc?sanpham=1"/>">SOTO Panel 10W</a></h3>
                                <h4 class="product-price">$80.00
                                    <del class="product-old-price">$190.00</del>
                                </h4>
                            </div>
                        </div>
                        <!-- /product widget -->

                        <!-- product widget -->
                        <div class="product-widget">
                            <div class="product-img">
                                <img src="<c:url value="template/web/img/product02.png"/>" alt="">
                            </div>
                            <div class="product-body">
                                <p class="product-category">SUNTECK</p>
                                <h3 class="product-name"><a href="<c:url value="danh-muc?sanpham=1"/>">SUNTEK 50W</a></h3>
                                <h4 class="product-price">$980.00
                                    <del class="product-old-price">$990.00</del>
                                </h4>
                            </div>
                        </div>
                        <!-- /product widget -->

                        <!-- product widget -->
                        <div class="product-widget">
                            <div class="product-img">
                                <img src="<c:url value="template/web/img/product03.png"/>" alt="">
                            </div>
                            <div class="product-body">
                                <p class="product-category">MEGASUN</p>
                                <h3 class="product-name"><a href="<c:url value="danh-muc?sanpham=1"/>">MEGASUN Panel 20W</a></h3>
                                <h4 class="product-price">$280.00
                                    <del class="product-old-price">$390.00</del>
                                </h4>
                            </div>
                        </div>
                        <!-- product widget -->
                    </div>
                </div>
            </div>

            <div class="col-md-4 col-xs-6">
                <div class="section-title">
                    <h4 class="title">Best Seller</h4>
                    <div class="section-nav">
                        <div id="slick-nav-12" class="products-slick-nav"></div>
                    </div>
                </div>

                <div class="products-widget-slick" data-nav="#slick-nav-3">
                    <div>
                        <!-- product widget -->
                        <div class="product-widget">
                            <div class="product-img">
                                <img src="<c:url value="template/web/img/product07.png"/>" alt="">
                            </div>
                            <div class="product-body">
                                <p class="product-category">MEGASON</p>
                                <h3 class="product-name"><a href="<c:url value="danh-muc?sanpham=1"/>">MEGASON Panel 20W</a></h3>
                                <h4 class="product-price">$280.00
                                    <del class="product-old-price">$390.00</del>
                                </h4>
                            </div>
                        </div>
                        <!-- /product widget -->

                        <!-- product widget -->
                        <div class="product-widget">
                            <div class="product-img">
                                <img src="<c:url value="template/web/img/product08.png"/>" alt="">
                            </div>
                            <div class="product-body">
                                <p class="product-category">VIMETCO</p>
                                <h3 class="product-name"><a href="<c:url value="danh-muc?sanpham=1"/>">VIMETCO 20W</a></h3>
                                <h4 class="product-price">$180.00
                                    <del class="product-old-price">$490.00</del>
                                </h4>
                            </div>
                        </div>
                        <!-- /product widget -->

                        <!-- product widget -->
                        <div class="product-widget">
                            <div class="product-img">
                                <img src="<c:url value="template/web/img/product09.png"/>" alt="">
                            </div>
                            <div class="product-body">
                                <p class="product-category">SolarBK</p>
                                <h3 class="product-name"><a href="<c:url value="danh-muc?sanpham=1"/>">SolarBK 20W</a></h3>
                                <h4 class="product-price">$480.00
                                    <del class="product-old-price">$590.00</del>
                                </h4>
                            </div>
                        </div>
                        <!-- product widget -->
                    </div>

                    <div>
                        <!-- product widget -->
                        <div class="product-widget">
                            <div class="product-img">
                                <img src="<c:url value="template/web/img/product01.png"/>" alt="">
                            </div>
                            <div class="product-body">
                                <p class="product-category">SUNTECK</p>
                                <h3 class="product-name"><a href="<c:url value="danh-muc?sanpham=1"/>">SOTO Panel 10W</a></h3>
                                <h4 class="product-price">$80.00
                                    <del class="product-old-price">$190.00</del>
                                </h4>
                            </div>
                        </div>
                        <!-- /product widget -->

                        <!-- product widget -->
                        <div class="product-widget">
                            <div class="product-img">
                                <img src="<c:url value="template/web/img/product02.png"/>" alt="">
                            </div>
                            <div class="product-body">
                                <p class="product-category">SUNTECK</p>
                                <h3 class="product-name"><a href="<c:url value="danh-muc?sanpham=1"/>">SUNTEK 50W</a></h3>
                                <h4 class="product-price">$980.00
                                    <del class="product-old-price">$990.00</del>
                                </h4>
                            </div>
                        </div>
                        <!-- /product widget -->

                        <!-- product widget -->
                        <div class="product-widget">
                            <div class="product-img">
                                <img src="<c:url value="template/web/img/product03.png"/>" alt="">
                            </div>
                            <div class="product-body">
                                <p class="product-category">MEGASUN</p>
                                <h3 class="product-name"><a href="<c:url value="danh-muc?sanpham=1"/>">MEGASUN Panel 20W</a></h3>
                                <h4 class="product-price">$280.00
                                    <del class="product-old-price">$390.00</del>
                                </h4>
                            </div>
                        </div>
                        <!-- product widget -->
                    </div>
                </div>
            </div>

            <div class="clearfix visible-sm visible-xs"></div>

            <div class="col-md-4 col-xs-6">
                <div class="section-title">
                    <h4 class="title">Best Seller</h4>
                    <div class="section-nav">
                        <div id="slick-nav-13" class="products-slick-nav"></div>
                    </div>
                </div>

                <div class="products-widget-slick" data-nav="#slick-nav-3">
                    <div>
                        <!-- product widget -->
                        <div class="product-widget">
                            <div class="product-img">
                                <img src="<c:url value="template/web/img/product07.png"/>" alt="">
                            </div>
                            <div class="product-body">
                                <p class="product-category">MEGASON</p>
                                <h3 class="product-name"><a href="<c:url value="danh-muc?sanpham=1"/>">MEGASON Panel 20W</a></h3>
                                <h4 class="product-price">$280.00
                                    <del class="product-old-price">$390.00</del>
                                </h4>
                            </div>
                        </div>
                        <!-- /product widget -->

                        <!-- product widget -->
                        <div class="product-widget">
                            <div class="product-img">
                                <img src="<c:url value="template/web/img/product08.png"/>" alt="">
                            </div>
                            <div class="product-body">
                                <p class="product-category">VIMETCO</p>
                                <h3 class="product-name"><a href="<c:url value="danh-muc?sanpham=1"/>">VIMETCO 20W</a></h3>
                                <h4 class="product-price">$180.00
                                    <del class="product-old-price">$490.00</del>
                                </h4>
                            </div>
                        </div>
                        <!-- /product widget -->

                        <!-- product widget -->
                        <div class="product-widget">
                            <div class="product-img">
                                <img src="<c:url value="template/web/img/product09.png"/>" alt="">
                            </div>
                            <div class="product-body">
                                <p class="product-category">SolarBK</p>
                                <h3 class="product-name"><a href="<c:url value="danh-muc?sanpham=1"/>">SolarBK 20W</a></h3>
                                <h4 class="product-price">$480.00
                                    <del class="product-old-price">$590.00</del>
                                </h4>
                            </div>
                        </div>
                        <!-- product widget -->
                    </div>

                    <div>
                        <!-- product widget -->
                        <div class="product-widget">
                            <div class="product-img">
                                <img src="<c:url value="template/web/img/product01.png"/>" alt="">
                            </div>
                            <div class="product-body">
                                <p class="product-category">SUNTECK</p>
                                <h3 class="product-name"><a href="<c:url value="danh-muc?sanpham=1"/>">SOTO Panel 10W</a></h3>
                                <h4 class="product-price">$80.00
                                    <del class="product-old-price">$190.00</del>
                                </h4>
                            </div>
                        </div>
                        <!-- /product widget -->

                        <!-- product widget -->
                        <div class="product-widget">
                            <div class="product-img">
                                <img src="<c:url value="template/web/img/product02.png"/>" alt="">
                            </div>
                            <div class="product-body">
                                <p class="product-category">SUNTECK</p>
                                <h3 class="product-name"><a href="<c:url value="danh-muc?sanpham=1"/>">SUNTEK 50W</a></h3>
                                <h4 class="product-price">$980.00
                                    <del class="product-old-price">$990.00</del>
                                </h4>
                            </div>
                        </div>
                        <!-- /product widget -->

                        <!-- product widget -->
                        <div class="product-widget">
                            <div class="product-img">
                                <img src="<c:url value="template/web/img/product03.png"/>" alt="">
                            </div>
                            <div class="product-body">
                                <p class="product-category">MEGASUN</p>
                                <h3 class="product-name"><a href="<c:url value="danh-muc?sanpham=1"/>">MEGASUN Panel 20W</a></h3>
                                <h4 class="product-price">$280.00
                                    <del class="product-old-price">$390.00</del>
                                </h4>
                            </div>
                        </div>
                        <!-- product widget -->
                    </div>
                </div>
            </div>

        </div>
        <!-- /row -->
    </div>
    <!-- /container -->
</div>
<!-- /SECTION -->
</body>
</html>
