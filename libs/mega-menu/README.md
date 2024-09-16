# Mega Menu

- Custom Make
- https://mm.onokumus.com/index.html

## Html Markup

```html
<div class="col-xxl-7 col-xl-8 d-none d-xl-block">
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
                <li class="has-dropdown has-mega-dropdown mega-wrap-4">
                    <a href="#">Mega Menu</a>
                    <ul class="sub-menu mega-sub-menu mega-col-4">
                        <li class="has-dropdown mega-menu-title">
                            <a href="#">Gallery Style</a>
                            <ul class="sub-menu">
                                <li><a href="#">One Column Grid</a></li>
                                <li><a href="#">Two Column Grid</a></li>
                                <li><a href="#">Three Column Grid</a></li>
                                <li><a href="#">Four Column Wide</a></li>
                                <li><a href="#">Five Column Wide</a></li>
                                <li><a href="#">Six Column Wide</a></li>
                            </ul>
                        </li>
                        <li class="has-dropdown mega-menu-title">
                            <a href="#">Classic Grid Style</a>
                            <ul class="sub-menu">
                                <li><a href="#">One Column Grid</a></li>
                                <li><a href="#">Two Column Grid</a></li>
                                <li><a href="#">Three Column Grid</a></li>
                                <li><a href="#">Four Column Wide</a></li>
                                <li><a href="#">Five Column Wide</a></li>
                                <li><a href="#">Six Column Wide</a></li>
                            </ul>
                        </li>
                        <li class="has-dropdown mega-menu-title">
                            <a href="#">Masonry Style</a>
                            <ul class="sub-menu">
                                <li><a href="#">One Column Grid</a></li>
                                <li><a href="#">Two Column Grid</a></li>
                                <li><a href="#">Three Column Grid</a></li>
                                <li><a href="#">Four Column Wide</a></li>
                                <li><a href="#">Five Column Wide</a></li>
                                <li><a href="#">Six Column Wide</a></li>
                            </ul>
                        </li>
                        <li class="has-dropdown mega-menu-title">
                            <a href="#">Single Project</a>
                            <ul class="sub-menu">
                                <li><a href="#">One Column Grid</a></li>
                                <li><a href="#">Two Column Grid</a></li>
                                <li><a href="#">Three Column Grid</a></li>
                                <li><a href="#">Four Column Wide</a></li>
                                <li><a href="#">Five Column Wide</a></li>
                                <li><a href="#">Six Column Wide</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
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
</div>
```

## Js Code (Active Menu)

```scss
.main-menu {
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: inline-block;
      margin: 0 15px;

      a {
        display: block;
        color: $dark;
        font: {
          size: 16px;
          weight: 500;
          family: $Jost;
        }
        text-transform: uppercase;
        padding: 35px 0;
        position: relative;
      }

      .sub-menu {
        position: absolute;
        z-index: 99;
        left: 0;
        top: 100%;
        width: 240px;
        background: #fff;
        opacity: 0;
        visibility: hidden;
        transform: scaleY(0);
        transform-origin: top;
        @include transition(0.3s);
        border-top: 3px solid $theme-color;
        box-shadow: 0 30px 70px 0 rgb(11 6 70 / 8%);

        li {
          display: block;
          margin: 0;

          &:not(:last-child) {
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          }

          a {
            display: block;
            padding: 10px 30px;
            margin: 0;
            font: {
              size: 14px;
              weight: 400;
            }
            text-transform: capitalize;
          }

          &:hover {
            > a {
              color: $theme-color;
            }

            .sub-menu {
              visibility: visible;
              opacity: 1;
              transform: scaleY(1);
            }
          }

          .sub-menu {
            top: 0;
            left: 100%;
            visibility: hidden;
            opacity: 0;
            transform: scaleY(0);
          }
        }
      }

      &:hover {
        > a {
          color: $theme-color;
        }

        .sub-menu {
          transform: scaleY(1);
          visibility: visible;
          opacity: 1;
        }
      }
    }

    // 2nd level dropdown
    .has-dropdown {
      &:not(.has-mega-dropdown) {
        position: relative;
      }

      > a {
        &:after {
          content: "\f078";
          margin-left: 5px;
          font: {
            size: 12px;
            weight: 700;
            family: $icon-font;
          }
        }
      }

      .sub-menu {
        .has-dropdown {
          > a {
            position: relative;

            &:after {
              position: absolute;
              right: 18px;
              top: 50%;
              transform: translateY(-50%);
            }
          }
        }
      }
    }

    // last menu item fix
    .last-item {
      .sub-menu {
        left: auto;
        right: 0;

        li {
          .sub-menu {
            left: auto;
            right: 100%;
          }
        }
      }
    }

    // mega menu
    .has-mega-dropdown {
      .mega-sub-menu {
        min-width: 100%;
        padding: 40px;
        will-change: transform;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .mega-menu-title {
          flex: 1 0 0%;
          border-bottom: 0;
          margin-bottom: 20px;

          > a {
            margin-bottom: 10px;
            padding: 10px 30px 10px 0;
            font-size: 15px;
            text-transform: uppercase;
            font-weight: 500;

            &:after {
              display: none;
            }
          }

          .sub-menu {
            visibility: visible;
            opacity: 1;
            transform: scaleY(1);
            position: static;
            width: auto;
            border: 0;
            box-shadow: none;

            li {
              border: 0;

              a {
                padding: 10px 30px 10px 0;
                font-weight: 400;
              }
            }
          }
        }

        &.mega-col-2 {
          .mega-menu-title {
            flex: 0 0 auto;
            width: 50%;
          }
        }

        &.mega-col-3 {
          .mega-menu-title {
            flex: 0 0 auto;
            width: 33.3333333333%;
          }
        }

        &.mega-col-4 {
          .mega-menu-title {
            flex: 0 0 auto;
            width: 25%;
          }
        }
      }

      &.mega-wrap-2 {
        position: relative;

        .mega-sub-menu {
          min-width: 560px;
        }
      }

      &.mega-wrap-3 {
        position: relative;

        .mega-sub-menu {
          min-width: 800px;
          @include mq(xl) {
            min-width: 560px;
          }

          .mega-menu-title {
            @include mq(xl) {
              flex: 0 0 auto;
              width: 50%;
            }
          }
        }
      }

      &.mega-wrap-4 {
        position: relative;

        .mega-sub-menu {
          min-width: 1040px;
          @include mq(xl) {
            min-width: 560px;
          }

          .mega-menu-title {
            @include mq(xl) {
              flex: 0 0 auto;
              width: 50%;
            }
          }
        }
      }
    }
  }
}

```

```js
$('.main-menu nav > ul > li').slice(-4).addClass('last-item');
```
