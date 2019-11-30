(function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'wookie-lookout.myshopify.com',
          storefrontAccessToken: '61eddf6d699b2c2b332798ac595115c4',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [3956481097816],
            node: document.getElementById('product-component-58b9de9c38f'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
  "product": {
    "variantId": "all",
    "width": "240px",
    "contents": {
      "img": false,
      "imgWithCarousel": false,
      "title": false,
      "variantTitle": false,
      "price": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "text-align": "right",
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#dd9e00",
        "font-family": "Candara, sans-serif",
        ":hover": {
          "background-color": "#c78e00"
        },
        "font-weight": "normal",
        ":focus": {
          "background-color": "#c78e00"
        }
      },
      "variantTitle": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "normal"
      },
      "title": {
        "font-size": "26px"
      },
      "description": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Montserrat, sans-serif",
        "font-size": "18px",
        "font-weight": "normal"
      },
      "compareAt": {
        "font-size": "15px",
        "font-family": "Montserrat, sans-serif",
        "font-weight": "normal"
      }
    },
    "googleFonts": [
      "Montserrat",
      "Montserrat",
      "Montserrat",
      "Montserrat"
    ]
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "background-color": "#dd9e00",
        "font-family": "Candara, sans-serif",
        ":hover": {
          "background-color": "#c78e00"
        },
        "font-weight": "normal",
        ":focus": {
          "background-color": "#c78e00"
        }
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#dd9e00",
        "font-family": "Candara, sans-serif",
        ":hover": {
          "background-color": "#c78e00"
        },
        "font-weight": "normal",
        ":focus": {
          "background-color": "#c78e00"
        }
      },
      "variantTitle": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "normal"
      },
      "description": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "normal"
      },
      "compareAt": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "normal"
      }
    },
    "googleFonts": [
      "Montserrat",
      "Montserrat",
      "Montserrat",
      "Montserrat"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Candara, sans-serif",
        "background-color": "#dd9e00",
        ":hover": {
          "background-color": "#c78e00"
        },
        "font-weight": "normal",
        ":focus": {
          "background-color": "#c78e00"
        }
      }
    }
  },
  "option": {
    "styles": {
      "label": {
        "font-family": "Montserrat, sans-serif"
      },
      "select": {
        "font-family": "Montserrat, sans-serif"
      }
    },
    "googleFonts": [
      "Montserrat",
      "Montserrat"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
          });
        });
      }
    })();
