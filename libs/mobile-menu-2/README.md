# meanMenu

- https://www.meanthemes.com/plugins/meanmenu/

## Documentation

- [metismenu](https://github.com/meanthemes/meanMenu)

## Html Markup

```html
<!--    Main Start   -->
<div class="main-menu main-menu-1 main-menu-border">
	<nav id="mobile-menu">
		<ul>
			<li class="has-dropdown">
				<a href="#">Home</a>
				<ul class="sub-menu">
					<li><a href="#">Home Style 1</a></li>
					<li><a href="#">Home Style 2</a></li>
					<li><a href="#">Home Style 3</a></li>
				</ul>
			</li>
			<li><a href="#">About</a></li>
			<li><a href="#">Shop</a></li>
			<li><a href="#">Vendor</a></li>
			<li><a href="#">Blog</a></li>
			<li class="has-dropdown">
				<a href="#">Pages</a>
				<ul class="sub-menu">
					<li><a href="#">Dropdown 1</a></li>
					<li><a href="#">Dropdown 2</a></li>
					<li class="has-dropdown">
						<a href="#">Dropdown 3</a>
						<ul class="sub-menu">
							<li><a href="#">Dropdown 3.1</a></li>
							<li><a href="#">Dropdown 3.2</a></li>
							<li><a href="#">Dropdown 3.3</a></li>
							<li><a href="#">Dropdown 3.4</a></li>
						</ul>
					</li>
					<li><a href="#">Dropdown 4</a></li>
					<li><a href="#">Dropdown 5</a></li>
					<li><a href="#">Dropdown 6</a></li>
					<li><a href="#">Dropdown 7</a></li>
					<li><a href="#">Dropdown 8</a></li>
				</ul>
			</li>
			<li><a href="#">Contact Us</a></li>
		</ul>
	</nav>
</div>
<!--    Main End   -->

<!--    Toggle Start   -->
<div class="mobile-toggle-btn d-inline-block d-xl-none">
	<span class="line"></span>
	<span class="line"></span>
	<span class="line"></span>
</div>
<!--    Toggle End   -->

<!--    Slide Bar Start   -->
<aside class="offset-sidebar">
    <nav class="offset-sidebar-tab">
        <div class="nav nav-tabs" id="offset-bar-tab" role="tablist">
            <button class="nav-link active" id="offset-sidebar-tab-1" data-bs-toggle="tab"
                    data-bs-target="#offset-sidebar-tabs-1"
                    type="button" role="tab" aria-controls="offset-sidebar-tabs-1" aria-selected="true">
                menu
            </button>
            <button class="nav-link" id="offset-sidebar-tab-2" data-bs-toggle="tab"
                    data-bs-target="#offset-sidebar-tabs-2"
                    type="button" role="tab" aria-controls="offset-sidebar-tabs-2" aria-selected="false">
                info
            </button>
        </div>
    </nav>
    <div class="offset-sidebar-wrap">
        <div class="offset-sidebar-logo">
            <a href="#">
                <img src="assets/img/logo/logo.png" alt="logo">
            </a>
        </div>
        <div class="offset-sidebar-close">
            <i class="far fa-times"></i>
        </div>
    </div>
    <div class="tab-content offset-sidebar-tab-content" id="offset-bar-tabContent">
        <div class="tab-pane clearfix fade show active" id="offset-sidebar-tabs-1" role="tabpanel"
             aria-labelledby="offset-sidebar-tab-1">
            <div class="iconic-mobile-menu mobile-menu"></div>
        </div>
        <div class="tab-pane clearfix fade" id="offset-sidebar-tabs-2" role="tabpanel"
             aria-labelledby="offset-sidebar-tab-2">
            asdasd
        </div>
    </div>
</aside>
<div class="body-overlay"></div>
<!--    Slide Bar End    -->
```

## Js Code (Active Menu)

```js
	/*------------------------------------
        Mobile Menu
    --------------------------------------*/

    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "1199",
        meanExpand: '',
        meanContract: '',
    });

    $(".mobile-toggle-btn").on("click", function (e) {
        e.preventDefault();
        $(".offset-sidebar").toggleClass("active");
        $('.body-overlay').addClass('active');
        $(this).addClass('active');
    });

    $(".offset-sidebar-close").on("click", function (e) {
        e.preventDefault();
        $(".offset-sidebar").removeClass("active");
        $('.body-overlay').removeClass('active');
        $('.mobile-toggle-btn').removeClass('active');
    });

    $('.body-overlay').on('click', function () {
        $(this).removeClass('active');
        $(".offset-sidebar").removeClass("active");
        $('.mobile-toggle-btn').removeClass('active');
    });
```