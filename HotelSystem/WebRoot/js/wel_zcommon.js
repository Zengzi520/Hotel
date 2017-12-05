jQuery.noConflict();

var AcerUi = {};

AcerUi.debugMode = false;
AcerUi.$midLandFixer = null;
AcerUi.midLandFixerSelector = "#midLandFixer";

AcerUi.SMARTPHONE = "SMARTPHONE";
AcerUi.TABLET = "TABLET";
AcerUi.PC = "PC";

AcerUi._layouts = [
    { Id: AcerUi.SMARTPHONE, MaxWidth: 750 },
    { Id: AcerUi.TABLET, MaxWidth: 985 },
    { Id: AcerUi.PC, MaxWidth: 1024 }
];

AcerUi._initListeners = [];
AcerUi.addInitListener = function (eventCallBack)
{
    AcerUi._initListeners.push(eventCallBack);
};

AcerUi.init = function ()
{
    AcerUi.$midLandFixer = jQuery(AcerUi.midLandFixerSelector);

    AcerUi.addInitListener(new AcerUi.MainMenu().init);
    AcerUi.addInitListener(new AcerUi.Awards().init);
    AcerUi.addInitListener(new AcerUi.FooterPosition().init);
    AcerUi.addInitListener(new AcerUi.Showcase().init);
    AcerUi.addInitListener(new AcerUi.HighLightMenu().init);
    AcerUi.addInitListener(new AcerUi.ChooseGroup().init);
    AcerUi.addInitListener(new AcerUi.BannerTopChange().init);
    AcerUi.addInitListener(new AcerUi.SeriesGroupSlider().init);
    AcerUi.addInitListener(new AcerUi.FeatureProduct().init);
    AcerUi.addInitListener(new AcerUi.RichContentTop().init);
    AcerUi.addInitListener(new AcerUi.ProductList().init);
    AcerUi.addInitListener(new AcerUi.TabContent().init);
    AcerUi.addInitListener(new AcerUi.SimplePageMenu().init);
    AcerUi.addInitListener(new AcerUi.SearchBox().init);
    AcerUi.addInitListener(new AcerUi.SocialShare().init);
    AcerUi.addInitListener(new AcerUi.GoTop().init);
    AcerUi.addInitListener(new AcerUi.SocialRss().init);
    AcerUi.addInitListener(new AcerUi.RandomizeContent().init);
    AcerUi.addInitListener(new AcerUi.NewsList().init);
    AcerUi.addInitListener(new AcerUi.MultipleContentBox().init);

    if (AcerUi.WhereToBuy) { AcerUi.addInitListener(new AcerUi.WhereToBuy().init); }
    if (AcerUi.WhereToBuyNew) { AcerUi.addInitListener(new AcerUi.WhereToBuyNew().init); }
    if (AcerUi.RightNow) { AcerUi.addInitListener(new AcerUi.RightNow().init); }
    if (AcerUi.Gdp) { AcerUi.addInitListener(new AcerUi.Gdp().init); }
    if (AcerUi.CompareTable) { AcerUi.addInitListener(new AcerUi.CompareTable().init); }


    AcerUi._currentLayout = AcerUi.getCurrentLayout();

    AcerUi.resize();
    window.onresize = AcerUi.resize;

    for (var i = 0; i < AcerUi._initListeners.length; i++)
    {
        AcerUi._initListeners[i](AcerUi._currentLayout);
    }

};

AcerUi._resizeListeners = [];
AcerUi.addResizeListener = function (eventCallBack)
{
    AcerUi._resizeListeners.push(eventCallBack);
};

AcerUi.resize = function ()
{
    var w = parseInt(jQuery(window).width(), 10);
    var h = parseInt(jQuery(window).height(), 10);

    for (var i = 0; i < AcerUi._resizeListeners.length; i++)
    {
        AcerUi._resizeListeners[i](w, h);
    }

    var layout = AcerUi.getCurrentLayout();
    if (layout.Id != AcerUi._currentLayout.Id)
    {

        var prevLayout = AcerUi._currentLayout;
        AcerUi._currentLayout = layout;
        AcerUi.changeLayout(layout, prevLayout);
    }
};

AcerUi._changeLayoutListeners = [];
AcerUi.addChangeLayoutListener = function (eventCallBack)
{
    AcerUi._changeLayoutListeners.push(eventCallBack);
};

AcerUi.changeLayout = function (currentLayout, prevLayout)
{
    for (var i = 0; i < AcerUi._changeLayoutListeners.length; i++)
    {
        AcerUi._changeLayoutListeners[i](currentLayout, prevLayout);
    }
};

AcerUi._currentLayout = null;
AcerUi.getCurrentLayout = function ()
{
    var refWidth = parseInt(AcerUi.$midLandFixer.width(), 10);
    var layout = null;
    for (var i = 0; i < AcerUi._layouts.length; i++)
    {
        if (refWidth <= AcerUi._layouts[i].MaxWidth)
        {
            return AcerUi._layouts[i];
            break;
        }
    }
    return AcerUi._layouts[AcerUi._layouts.length - 1];
};

/* AWARDS */
AcerUi.Awards = function ()
{
    var that = this;
    var _$mainContainer = null;
    var _$btnToggleAward = null;
    var _$ctnAwardContents = null;

    this.init = function (layout)
    {
        _$mainContainer = jQuery("#ctnAwards");
        _$btnToggleAward = jQuery(_$mainContainer.find(".btnToggleAward"));
        _$ctnAwardContents = jQuery(_$mainContainer.find(".ctnAwardContent"));
        _$ctnAwardContents.hide();
        _$btnToggleAward.click(_toggleAwardContent);
            var hash = document.location.hash;
        if (jQuery(_$mainContainer.find(hash)).length > 0)
        {
            jQuery(_$mainContainer.find(hash)).find(".btnToggleAward").click();
        }
    };

    function _toggleAwardContent(e)
    {
        if (e) e.preventDefault();
        var $this = jQuery(this);
        var ndx = _$btnToggleAward.index(this);
        var $panelToOpen = jQuery(_$ctnAwardContents.get(ndx));
        var hash = $this.attr("href");
        var $target = jQuery(hash);
        if (!$panelToOpen.is(":visible"))
        {
            _$ctnAwardContents.slideUp("slow").promise().done(function ()
            {
                _$ctnAwardContents.removeClass("open");
                _$btnToggleAward.removeClass("open");
                jQuery("html, body").stop().animate({
                    "scrollTop": $target.offset().top
                }, "slow", "swing");
                $panelToOpen.slideDown(function () { $this.addClass("open"); document.location.hash = hash; });
            });
        }
        else
        {
            $panelToOpen.slideUp("fast", function () { $this.removeClass("open"); });
        }
    };
};

/* FOOTERPOSITION */
AcerUi.FooterPosition = function ()
{
    var that = this;
    var timer = null;

    this.init = function (layout)
    {
        AcerUi.addResizeListener(that.resize);
        AcerUi.addChangeLayoutListener(that.layoutChange);
        positionFooter();
    };

    function positionFooter()
    {
        return;
        positionFooterSync();
        if (timer != null)
        {
            window.clearTimeout(timer);
            timer = null;
        }
        timer = window.setTimeout(positionFooterSync, 500);
    };

    function positionFooterSync()
    {
        jQuery(jQuery("body > .row:last").prev()[0]).css({ "padding-bottom": 18 });
        var windowHeight = jQuery(window).outerHeight();
        var rowElement = jQuery("body > .row");
        var elementHeight = 0;
        var s = "";
        for (var i = 0; i < rowElement.length; i++)
        {
            elementHeight += jQuery(rowElement[i]).outerHeight();
            s += " " + jQuery(rowElement[i]).outerHeight();
        }
        var padding = windowHeight - elementHeight;

        jQuery("h1").html(s);

        if (padding > 0)
        {
            jQuery(jQuery("body > .row:last").prev()[0]).css({
                "padding-bottom": padding + 18
            });
        }
    };

    this.resize = function ()
    {
        positionFooter();
    };
    this.layoutChange = function (currentLayout, prevLayout)
    {
        positionFooter();
    };
};

/*COMPARE*/
AcerUi.CompareTable = function ()
{
    var that = this;
    var _currentLayout = null;

    var _$ctnCompareTable = null;
    var _$ctnSpecsFilter = null;
    var _$btnAllSpecs = null;
    var _$btnEqualsOnlySpecs = null;
    var _$btnDifferentOnlySpecs = null;
    var _$specsRows = null;

    var _$btnOpenSpecsFilters = null;
    var _$ctnSpecsFilters = null;

    this.init = function (layout)
    {
        _currentLayout = layout;

        //Main objects
        _$ctnCompareTable = jQuery("#ctnCompareTable");
        if (_$ctnCompareTable.length == 0)
        {
            return;
        }

        //Objects
        _$ctnSpecsFilter = jQuery(_$ctnCompareTable.find(".ctnSpecsFilter"));
        _$btnAllSpecs = jQuery(_$ctnCompareTable.find(".btnAllSpecs"));
        _$btnEqualsOnlySpecs = jQuery(_$ctnCompareTable.find(".btnEqualsOnlySpecs"));
        _$btnDifferentOnlySpecs = jQuery(_$ctnCompareTable.find(".btnDifferentOnlySpecs"));
        _$specsRows = jQuery(_$ctnCompareTable.find("tr.tech-specs"));

        _$btnOpenSpecsFilters = jQuery(_$ctnCompareTable.find(".btnOpenSpecsFilters"));
        _$ctnSpecsFilters = jQuery(_$ctnCompareTable.find(".ctnSpecsFilters"));

        //events
        _$btnAllSpecs.click(_showAllSpecsEvent);
        _$btnEqualsOnlySpecs.click(_showEqualsOnlySpecsEvent);
        _$btnDifferentOnlySpecs.click(_showDifferentOnlySpecsEvent);
        _$btnOpenSpecsFilters.click(_showFilterSelectorEvent);

        //Core events
        AcerUi.addResizeListener(that.resize);
        AcerUi.addChangeLayoutListener(that.layoutChange);

    };

    _showAllSpecsEvent = function (e)
    {
        if (e) e.preventDefault();
        _$btnOpenSpecsFilters.html(jQuery(this).html());
        _filter("all");
    };

    _showEqualsOnlySpecsEvent = function (e)
    {
        if (e) e.preventDefault();
        _$btnOpenSpecsFilters.html(jQuery(this).html());
        _filter("equals");
    };

    _showDifferentOnlySpecsEvent = function (e)
    {
        if (e) e.preventDefault();
        _$btnOpenSpecsFilters.html(jQuery(this).html());
        _filter("different");
    };

    _filter = function (filterType)
    {
        _$ctnSpecsFilters.slideUp("fast");
        for (var i = 0; i < _$specsRows.length; i++)
        {
            var $row = jQuery(_$specsRows[i]);
            var value01 = jQuery.trim(jQuery($row.find("td").get(1)).find("span").html()).toLowerCase();
            var value02 = jQuery.trim(jQuery($row.find("td").get(2)).find("span").html()).toLowerCase();
            var value03 = jQuery.trim(jQuery($row.find("td").get(3)).find("span").html()).toLowerCase();

            if (value02 == "") value02 = value01;
            if (value03 == "") value03 = value02;

            var isVisible = true;
            switch (filterType)
            {
                case "equals":
                    isVisible = (value01 == value02 && value02 == value03);
                    break;

                case "different":
                    isVisible = (value01 != value02 || value02 != value03);
                    break;


                case "all":
                default:
                    isVisible = true;
                    break;

            }
            if (isVisible)
            {
                $row.show();
            }
            else
            {
                $row.hide();
            }
        }
        _$specsRows.removeClass("alternate");
        _$specsRows.filter(":visible").filter(":odd").addClass("alternate");
    };

    _showFilterSelectorEvent = function (e)
    {
        if (e) e.preventDefault();
        if (_$ctnSpecsFilters.is(":visible"))
        {
            _$ctnSpecsFilters.slideUp("fast");
        }
        else
        {
            _$ctnSpecsFilters.slideDown("slow");
        }
    };

    this.resize = function ()
    {
        return;
    };

    this.layoutChange = function (currentLayout, prevLayout)
    {
        _currentLayout = currentLayout;
    };
};

/*MAIN MENU*/
AcerUi.MainMenu = function ()
{
    var that = this;
    var _$container = null;
    var _$mainMenu = null;
    var _$mainItems = null;
    var _$subMenus = null;
    var _$closeSubMenuButtons = null;
    var _$showNavigationButton = null;
    var _currentLayout = null;

    //constants
    var _activeClassName = "active";
    var _showDuration = "slow";
    var _hideDuration = "fast";

    this.init = function (layout)
    {
        //set start params
        _currentLayout = layout;

        //Calculate objects
        _$container = jQuery(jQuery(".header")[0]);
        _$mainMenu = jQuery(_$container.find(".main-menu")[0]);
        _$mainItems = jQuery(_$mainMenu.find("li > a"));
        _$subMenus = jQuery(_$container.find("> .content-submenu"));
        _$closeSubMenuButtons = jQuery(_$container.find(".content-submenu a.close"));
        _$showNavigationButton = jQuery(_$container.find(".btnShowMenu")[0]);

        //add objects eventhandlers
        _$mainItems.click(_toggleSubMenu);
        _$closeSubMenuButtons.live("click", _closeSubMenu);
        _$showNavigationButton.click(_toggleMainMenu);

        //register core events
        AcerUi.addResizeListener(that.resize);
        AcerUi.addChangeLayoutListener(that.layoutChange);
    };

    function _resetLayout(layout)
    {
        _currentLayout = layout;
        jQuery(jQuery(_$mainItems.parent()).find("div")).remove();
        _$subMenus.hide();
        _$mainItems.removeClass(_activeClassName);
        _$showNavigationButton.removeClass(_activeClassName);
        if (_currentLayout.Id == AcerUi.SMARTPHONE)
        {
            _$mainMenu.hide();
        }
        else
        {
            _$mainMenu.show();
        }
    };

    function _toggleSubMenu()
    {
        var $this = jQuery(this);
        $this.blur();

        //check if is an external link
        if ($this.data("sub") + "" != "true" || _currentLayout.Id == AcerUi.SMARTPHONE)
        {
            return true;
        }

        var ndx = _$mainItems.index($this);

        _$mainItems.removeClass(_activeClassName);
        $this.addClass(_activeClassName);

        var $visibleSubMenu = jQuery(_$subMenus.filter(":visible"));
        var visibleMenuNdx = _$subMenus.index($visibleSubMenu);
        var $subMenuToShow = jQuery(_$subMenus.get(ndx));

        if (visibleMenuNdx == ndx)
        {
            $subMenuToShow.slideUp(_hideDuration, function ()
            {
                $this.removeClass(_activeClassName);
            });
            return false;
        }

        var mainItemLeft = $this.position().left;

        if ($visibleSubMenu.length > 0)
        {
            $visibleSubMenu.hide();
            $subMenuToShow.width(_$container.width() - mainItemLeft);
            $subMenuToShow.css({ "padding-left": mainItemLeft }).show();
        }
        else
        {
            $subMenuToShow.width(_$container.width() - mainItemLeft);
            $subMenuToShow.css({ "padding-left": mainItemLeft }).slideDown(_showDuration);
        }
        return false;
    };

    function _closeSubMenu()
    {
        var $this = jQuery(this);
        var $subMenu = jQuery($this.parent());
        var $subMenuParent = jQuery($subMenu.parent());
        if ($subMenuParent.is("li"))
        {
            jQuery($subMenuParent.find("> a")[0]).click();
            return false;
        }
        var ndx = _$subMenus.index($subMenu);
        jQuery(_$mainItems.get(ndx)).click();
        return false;
    };

    function _toggleMainMenu()
    {
        var $this = jQuery(this);
        $this.blur();
        if (_$mainMenu.is(":visible"))
        {
            $this.removeClass(_activeClassName);
            _$mainMenu.slideUp(_hideDuration, function ()
            {
                _resetLayout(_currentLayout);
            });
        }
        else
        {
            $this.addClass(_activeClassName);
            _$mainMenu.slideDown(_showDuration);
        }
        return false;
    };

    this.resize = function ()
    {
        return;
    };
    this.layoutChange = function (currentLayout, prevLayout)
    {
        if (_currentLayout == null || _currentLayout.Id == currentLayout.Id)
            return;

        _resetLayout(currentLayout);
        return;
    };
};

/*HighLightMenu*/
AcerUi.HighLightMenu = function ()
{
    var that = this;
    var _currentLayout = null;
    var _$container = null;
    var _$mainMenuItems = null;
    var _$mainMenuContainer = null;
    var _$mainMenuMask = null;
    var _$mainMenuPrevButton = null;
    var _$mainMenuNextButton = null;
    var _$subMenus = null;
    var _$subMenuContainers = null;
    var _hasAnimation = false;

    /*constants*/
    var _activeClassName = "active";
    var _hideMenuDuration = "fast";
    var _showMenuDuration = "slow";

    this.init = function (layout)
    {
        _currentLayout = layout;

        /*Initialize objects*/
        _$container = jQuery(".productHighlightNavigation");
        _$mainMenuItems = jQuery(_$container.find("ul.productHighlight li a"));
        _$mainMenuContainer = jQuery(_$container.find("ul.productHighlight")[0]);
        _$mainMenuMask = jQuery(_$container.find("> .scrollMask")[0]);
        _$mainMenuPrevButton = jQuery(_$container.find("a.mainSlidePrev")[0]);
        _$mainMenuNextButton = jQuery(_$container.find("a.mainSlideNext")[0]);
        _$subMenus = jQuery(_$container.find("div.productHighlight"));
        _$subMenuContainers = jQuery(_$container.find("div.container-products"));

        /*Add evethandlers*/
        _$mainMenuItems.click(_toggleSubMenu);
        _$mainMenuPrevButton.click(_mainSlidePrev);
        _$mainMenuNextButton.click(_mainSlideNext);

        jQuery(_$container.find("div.productHighlight a.next-small")).click(_subSlideNext);
        jQuery(_$container.find("div.productHighlight a.prev-small")).click(_subSlidePrev);
        AcerUi.addChangeLayoutListener(that.layoutChange);
        _resetLayout(layout)
    };

    function _resetLayout(layout)
    {
        _$mainMenuItems.parent().removeClass(_activeClassName);
        _$mainMenuContainer.css("left", 0);
        _$subMenuContainers.css("left", 0);
        _$subMenus.hide();
        _$mainMenuPrevButton.hide();
        _$mainMenuNextButton.hide();

        //set main navigation
        var mainMenuMaskWidth = parseInt(_$mainMenuMask.width(), 10);
        var mainMenuContainerWidth = 0;

        for (var i = 0; i < _$mainMenuItems.length; i++)
        {
            mainMenuContainerWidth += parseInt(jQuery(jQuery(_$mainMenuItems[i]).parent()).outerWidth());
        }
        _$mainMenuContainer.width(mainMenuContainerWidth);

        if (mainMenuMaskWidth + 25 < mainMenuContainerWidth)
        {
            _$mainMenuNextButton.show();
        }
    };

    function _toggleSubMenu()
    {
        var $this = jQuery(this);
        var $parent = jQuery($this.parent());
        var ndx = _$mainMenuItems.index($this);
        var $subMenu = jQuery(_$subMenus.get(ndx));

        if ($subMenu.length == 0)
        {
            _$mainMenuItems.parent().removeClass(_activeClassName);
            _$subMenus.slideUp(_hideMenuDuration);
            return true;
        }

        if ($parent.hasClass(_activeClassName))
        {
            $parent.removeClass(_activeClassName);
            $subMenu.slideUp(_hideMenuDuration)
        }
        else
        {
            jQuery(_$mainMenuItems.parent()).removeClass(_activeClassName);
            $parent.addClass(_activeClassName);
            var $currentMenu = jQuery(_$subMenus.get(ndx));
            var $visibleMenu = jQuery(_$subMenus.filter(":visible")[0]);
            var hasVisible = $visibleMenu.length != 0;
            if (hasVisible)
            {
                $visibleMenu.hide();
                $currentMenu.show();
            }
            else
            {
                $currentMenu.slideDown(_showMenuDuration);
            }
            $currentMenu.css("left", 0);

            var $currentMask = jQuery($currentMenu.find(".scrollMask")[0]);
            var currentMaskWidth = parseInt($currentMask.width(), 10);
            var currentMenuWidth = 0;
            var $currentMenuContainer = jQuery($currentMenu.find(".container-products")[0]);
            var $currentMenuItems = $currentMenu.find(".container-products div");
            var $prevButton = jQuery($currentMenu.find(".prev-small")[0]).hide();
            var $nextButton = jQuery($currentMenu.find(".next-small")[0]).hide();
            for (var i = 0; i < $currentMenuItems.length; i++)
            {
                currentMenuWidth += parseInt(jQuery($currentMenuItems[i]).outerWidth(), 10);
            }
            $currentMenuContainer.width(currentMenuWidth);

            if (currentMaskWidth < currentMenuWidth)
            {
                $nextButton.show();
            }

            if (_currentLayout.Id == AcerUi.SMARTPHONE)
            {
                $currentMenuContainer.width(parseInt(jQuery($currentMenuItems[0]).outerHeight(), 10));
                $nextButton.hide();
            }
        }
        return false;
    };

    function _mainSlidePrev()
    {
        _mainMenuSlide("prev");
        return false;
    };

    function _mainSlideNext()
    {
        _mainMenuSlide("next");
        return false;
    };

    function _mainMenuSlide(toward)
    {
        if (_hasAnimation)
            return;

        _hasAnimation = true;

        var maskWidth = parseInt(_$mainMenuMask.outerWidth(), 10);
        var menuItemWidth = jQuery(_$mainMenuItems.parent()[0]).outerWidth();
        var slideItems = Math.round(maskWidth / menuItemWidth);
        var slideDimension = menuItemWidth * slideItems;
        var currentLeft = _$mainMenuContainer.position().left;
        var mainMenuContainerWidth = _$mainMenuContainer.outerWidth();

        var newLeft = 0;
        if (toward == "next")
            newLeft = currentLeft - slideDimension;
        if (toward == "prev")
            newLeft = currentLeft + slideDimension;

        if (newLeft > -5 && newLeft < 0)
            newLeft = 0;

        _$mainMenuContainer.animate({ left: newLeft }, "slow", function ()
        {
            _$mainMenuPrevButton.hide();
            if (newLeft < -5)
            {
                _$mainMenuPrevButton.show();
            }

            _$mainMenuNextButton.hide();
            if ((mainMenuContainerWidth - Math.abs(newLeft)) > (maskWidth + (slideDimension / 5)))
            {
                _$mainMenuNextButton.show();
            }
            _hasAnimation = false;
        });
        return false;
    };

    function _subSlideNext()
    {
        var $subMenu = jQuery(jQuery(this).parents(".productHighlight")[0]);
        _subMenuSlide($subMenu, "next");
        return false;
    };

    function _subSlidePrev(element)
    {
        var $subMenu = jQuery(jQuery(this).parents(".productHighlight")[0]);
        _subMenuSlide($subMenu, "prev");
        return false;
    };

    function _subMenuSlide($subMenu, toward)
    {
        if (_hasAnimation)
            return;

        _hasAnimation = true;

        var $mask = jQuery($subMenu.find(".scrollMask")[0]);
        var $menuItems = $subMenu.find(".container-products > div");
        var $menuContainer = jQuery($subMenu.find(".container-products")[0]);
        var $prevButton = jQuery($subMenu.find(".prev-small"));
        var $nextButton = jQuery($subMenu.find(".next-small"));

        var maskWidth = parseInt($mask.outerWidth(), 10);
        var menuItemWidth = jQuery($menuItems[0]).outerWidth();
        var slideItems = Math.round(maskWidth / menuItemWidth);
        var slideDimension = menuItemWidth * slideItems;
        var currentLeft = $menuContainer.position().left;
        var mainMenuContainerWidth = $menuContainer.outerWidth();

        var newLeft = 0;
        if (toward == "next")
            newLeft = currentLeft - slideDimension;
        if (toward == "prev")
            newLeft = currentLeft + slideDimension;

        $menuContainer.animate({ left: newLeft }, "slow", function ()
        {
            $prevButton.hide();
            if (newLeft < 0)
            {
                $prevButton.show();
            }
            $nextButton.hide();
            if ((mainMenuContainerWidth - Math.abs(newLeft)) > (maskWidth + (slideDimension / 5)))
            {
                $nextButton.show();
            }
            _hasAnimation = false;
        });
        return false;
    };

    this.resize = function ()
    {
        return;
    };

    this.layoutChange = function (currentLayout, previousLayout)
    {
        if (_currentLayout == null || _currentLayout.Id == currentLayout.Id)
            return;
        _currentLayout = currentLayout;
        _resetLayout(currentLayout);
        return;
    };
};

/*Showcase*/
AcerUi.Showcase = function ()
{
    var that = this;
    var _timer = null;
    var _timerTimeout = 6000;
    var _currentLayout = null;
    var _$showcase = null;
    var _showcaseHtml = null;
    var _$timerLines = null;

    var _imageClassName = null;

    this.init = function (layout)
    {
        _currentLayout = layout;
        _imageClassName = layout.Id.toLowerCase();

        _$showcase = jQuery("#showcase");
        _showcaseHtml = _$showcase.html();
        _$timerLines = jQuery(_$showcase.find(".timerLine"));


        jQuery("#showcase > .content a").click(_changeSlider);
        jQuery("#showcase > .container > .slide > .content-main-feature a").click(_selectSliderContent);

        AcerUi.addChangeLayoutListener(that.layoutChange);
        _resetLayout(layout);

        //init video contents
        var videos = new AcerUi.Showcase.Videos();
        videos.init(_currentLayout);
    };

    function _resetLayout(layout)
    {
        _stopAnimation();
        _currentLayout = layout;
        _imageClassName = layout.Id.toLowerCase();

        jQuery("#showcase .content-main-visual").each(function ()
        {
            jQuery(this).find("a").hide();
            jQuery(this).find("a." + _imageClassName + ":first").show();

        });
        jQuery("#showcase .container > .slide").hide();
        jQuery("#showcase .container > .slide:first").show();
        jQuery("#showcase .container > .slide .feature > a").removeClass("current");
        jQuery(jQuery("#showcase .container > .slide:first .feature > a").get(0)).addClass("current");

        _startAnimation();
        _startCounter(jQuery(jQuery("#showcase .slide").get(0)), 0);

        jQuery("#showcase .content > div").hide();
        if (AcerUi.getCurrentLayout().Id != AcerUi.SMARTPHONE)
        {
            jQuery(jQuery("#showcase .content > div").get(1)).css({ "top": 0, "left": 0, "bottom": "auto", "right": "auto" }).show();
            jQuery(jQuery("#showcase .content > div").get(2)).css({ "top": "auto", "left": 0, "bottom": 0, "right": "auto" }).show();
        }
        else
        {
            jQuery(jQuery("#showcase .content > div").get(1)).css({ "top": 0, "left": 0, "bottom": "auto", "right": "auto" }).show();
            jQuery(jQuery("#showcase .content > div").get(2)).css({ "top": 0, "left": "auto", "bottom": "auto", "right": 0 }).show();
        }

        _centerLabel();
    };

    function _centerLabel()
    {
        jQuery("#showcase > .content a span").css({ "padding-left": "0px" });
        var $slideChangers = jQuery("#showcase > .content a");
        for (var i = 0; i < $slideChangers.length; i++)
        {
            var $slideChanger = jQuery($slideChangers[i]);
            var $text = jQuery($slideChanger.find("span"));
            var pl = ($slideChanger.outerWidth() - $text.outerWidth()) / 2;
            $text.css({ "padding-left": pl + "px" });
        }
    };

    function _selectSliderContent()
    {
        _stopAnimation();
        _stopCounters();
        var imgClassName = AcerUi.getCurrentLayout().Id.toLowerCase();

        var $this = jQuery(this);
        var $links = jQuery(jQuery($this.parents(".content-main-feature")[0]).find(".feature a"));
        var ndx = $links.index($this);

        $links.removeClass("current");
        $this.addClass("current");

        var $mainContainer = jQuery($this.parents(".slide")[0]);
        if (jQuery($mainContainer.find(".content-main-visual a." + _imageClassName)[ndx]).is(":visible"))
        {
            _startCounter($mainContainer, ndx);
            _startAnimation();
            return false;
        }

        jQuery($mainContainer.find(".content-main-visual a." + _imageClassName + ":visible")).fadeOut("fast");
        jQuery(jQuery($mainContainer.find(".content-main-visual a." + _imageClassName)).get(ndx)).fadeIn("slow", function ()
        {
            _startCounter($mainContainer, ndx);
            _startAnimation();
        });
        return false;
    };

    function _changeSlider()
    {
        _stopAnimation();
        _stopCounters();

        jQuery("#showcase > .content a").unbind('click', _changeSlider);

        var $this = jQuery(this);
        var ndx = jQuery(jQuery($this.parents(".content")[0]).find("a")).index($this);

        var $sliders = jQuery("#showcase .slide");
        var $hider = jQuery(jQuery(jQuery($this.parents(".content")[0]).find("div:hidden")));
        var $shower = jQuery(jQuery("#showcase .slide").get(ndx));

        jQuery("#showcase .slide:visible").css("z-index", 0);
        jQuery(jQuery("#showcase .slide").get(ndx)).css("z-index", 1);

        jQuery($sliders.find(".feature > a")).removeClass("current");
        jQuery($shower.find(".feature > a").get(0)).addClass("current");

        jQuery("#showcase .slide:visible").fadeOut(250, function () { });
        $shower.fadeIn(750, function ()
        {
            _startCounter(jQuery(jQuery("#showcase .slide").get(ndx)), 0);
            _startAnimation();
        });

        var top = jQuery($this.parent()).position().top;
        var left = jQuery($this.parent()).position().left;
        var width = jQuery($this.parent()).outerWidth();
        var height = jQuery($this.parent()).outerHeight();

        if (_currentLayout.Id != AcerUi.SMARTPHONE)
        {
            jQuery("#showcase .slide:visible").css("z-index", "0");
            $hider.css("top", top).css("left", left - width).css("z-index", "1");
            jQuery($this.parent()).animate({ left: 0 - width - 10 }, 500, function ()
            {
                jQuery(this).hide();
            });
            jQuery($hider).show().animate({ left: 0 }, 500, function ()
            {
                jQuery("#showcase > .content a").bind('click', _changeSlider);
            });
        }
        else
        {
            jQuery("#showcase .slide:visible").css("z-index", "0");
            $hider.css("top", top - height - 10).css("left", left).css("z-index", "1");
            jQuery($this.parent()).animate({ top: 0 - height - 10 }, 500, function ()
            {
                jQuery(this).hide();
            });
            jQuery($hider).show().animate({ top: 0 }, 500, function ()
            {
                jQuery("#showcase > .content a").bind('click', _changeSlider);
            });
        }
        _resetSlider();
        return false;
    };

    function _stopCounters()
    {
        _$timerLines.hide().width(0).stop();
    };

    function _startCounter($slide, ndx)
    {
        _stopCounters();
        var endWidth = jQuery($slide.find(".feature > a").get(0)).outerWidth();
        jQuery($slide.find(".feature > a >.timerLine").get(ndx)).show().animate({ width: endWidth }, _timerTimeout + 500);
    };

    function _resetSlider()
    {
        jQuery("#showcase .container > .slide:hidden").each(function ()
        {
            jQuery(this).find(".content-main-visual a").hide();
            jQuery(this).find(".content-main-visual a." + _imageClassName + ":first").show();
            jQuery(this).find(".timerLine").hide();
        });

        _centerLabel();
    };

    function _startAnimation()
    {
        _stopAnimation();
        _timer = window.setTimeout(_nextStep, _timerTimeout);
    };

    function _stopAnimation()
    {
        window.clearTimeout(_timer);
        _timer = null;
    };

    function _nextStep()
    {
        var featuresCount = jQuery("#showcase .slide:visible .feature").length;
        var $currentSlider = jQuery("#showcase .slide:visible");
        var $currentFeature = jQuery($currentSlider.find(".content-main-visual a." + _imageClassName + ":visible"));

        var currentSliderNdx = jQuery("#showcase .slide").index($currentSlider);
        var currentFeatureNdx = jQuery($currentSlider.find(".content-main-visual a." + _imageClassName)).index($currentFeature);

        var nextFeatureNdx = currentFeatureNdx + 1;
        var nextSliderNdx = currentSliderNdx + 1;
        if (nextFeatureNdx > featuresCount - 1)
        {
            var $sliders = jQuery("#showcase .slide");
            //if there is only one slide i loop it!
            if ($sliders.length == 1)
            {
                jQuery(jQuery($currentSlider.find(".content-main-feature .feature a")).get(0)).click();
            }
            else
            {
                nextSliderNdx = nextSliderNdx > featuresCount - 1 ? 0 : nextSliderNdx;
                jQuery(jQuery("#showcase .content a").get(nextSliderNdx)).click();
            }
        }
        else
        {
            jQuery(jQuery($currentSlider.find(".content-main-feature .feature a")).get(nextFeatureNdx)).click();
        }
        return false;
    };

    this.resize = function ()
    {
        return;
    };

    this.layoutChange = function (currentLayout, previousLayout)
    {
        if (_currentLayout == null || _currentLayout.Id == currentLayout.Id)
            return;

        _currentLayout = currentLayout;
        _imageClassName = currentLayout.Id.toLowerCase();

        _resetLayout(currentLayout);
        return;
    };
};

AcerUi.Showcase.Videos = function ()
{
    var that = this;
    var _currentLayout = null;
    var _mainSelector = "#showcase .ctnCloudShowCaseVideo";
    var _$mainItem = null;
    var _$btnCloudShowCaseVideoShow = null;
    var _$btnCloudShowCaseVideoBack = null;
    var _$ctnCloudShowCaseVideoContainer = null;
    var _$ctnCloudShowCaseVideoElement = null;

    var _iFrameVideoFormat = "<iframe id=\"topVideo\" width=\"100%\" height=\"100%\" src=\"{src}\" frameborder=\"0\" allowfullscreen></iframe>"

    this.init = function (layout)
    {
        _currentLayout = layout;
        _mainItem = jQuery(_mainSelector);
        if (_mainItem.length == 0)
            return;
        _$mainItem = jQuery(_mainItem[0]);

        _$btnCloudShowCaseVideoShow = jQuery(jQuery.find(".btnCloudShowCaseVideoShow"));
        _$btnCloudShowCaseVideoBack = jQuery(jQuery.find(".btnCloudShowCaseVideoBack"));
        _$ctnCloudShowCaseVideoContainer = jQuery(jQuery.find(".ctnCloudShowCaseVideoContainer"));
        _$ctnCloudShowCaseVideoElement = jQuery(jQuery.find(".ctnCloudShowCaseVideoElement"));

        //events
        _$btnCloudShowCaseVideoShow.click(_showVideoEvent);
        _$btnCloudShowCaseVideoBack.click(_hideVideoEvent);

        //systems events
        AcerUi.addChangeLayoutListener(that.layoutChange);
    }

    _showVideoEvent = function (e)
    {
        if (e) e.preventDefault();
        var $this = jQuery(this);
        var videoSrc = $this.data("videosrc");
        _$btnCloudShowCaseVideoShow.removeClass("active");
        $this.addClass("active");
        _showVideo(videoSrc);
    };

    _showVideo = function (videoSrc)
    {
        _removeVideo();
        _$ctnCloudShowCaseVideoElement.empty();
        var html = _iFrameVideoFormat.split("{src}").join(videoSrc);
        _$ctnCloudShowCaseVideoElement.html(html);
        _$ctnCloudShowCaseVideoContainer.show();
    };

    _hideVideoEvent = function (e)
    {
        if (e) e.preventDefault();
        _hideVideo();
    };

    _hideVideo = function ()
    {
        _removeVideo();
        _$ctnCloudShowCaseVideoElement.empty();
        _$ctnCloudShowCaseVideoContainer.hide();
    };

    _removeVideo = function ()
    {
        try
        {
            var video = jQuery(_$iFrameContainer.find("#topVideo"));
            video.remove();
        }
        catch (e)
        {
        };
    };

    _initLayout = function ()
    {
        _removeVideo();
        _$ctnCloudShowCaseVideoContainer.hide();
        _$ctnCloudShowCaseVideoElement.empty();
        _$btnCloudShowCaseVideoShow.removeClass("active");
    };

    _resetLayout = function ()
    {
        _initLayout();
    };

    this.resize = function ()
    {
        return;
    };

    this.layoutChange = function (currentLayout, prevLayout)
    {
        if (_currentLayout == null || _currentLayout.Id == currentLayout.Id)
            return;
        _currentLayout = currentLayout;
        _resetLayout();
        return;
    };
};

/*SeriesGroupSlider*/
AcerUi.SeriesGroupSlider = function ($mainContainer)
{
    var that = this;
    var _mainSelector = ".series-group .productHighlight";
    var _$mainItem = null;
    var _$prevButton = null;
    var _$nextButton = null;
    var _$scrollMask = null;
    var _$itemsContainer = null;
    var _$items = null;
    var _currentLayout = null;
    var _hasAnimation = false;

    this.init = function (layout)
    {
        _mainItem = jQuery(_mainSelector);
        if (_mainItem.length == 0)
            return;
        _currentLayout = layout;
        _$mainItem = jQuery(_mainItem[0]);
        _$prevButton = jQuery(_mainItem.find(".prev-small")[0]);
        _$nextButton = jQuery(_mainItem.find(".next-small")[0]);
        _$scrollMask = jQuery(_mainItem.find(".scrollMask")[0]);
        _$itemsContainer = jQuery(_mainItem.find(".container-products")[0]);
        _$items = jQuery(_$itemsContainer.find("> div"));

        _$prevButton.click(_slidePrev);
        _$nextButton.click(_slideNext);
        AcerUi.addChangeLayoutListener(that.layoutChange);
        _resetLayout(layout);
    };

    function _resetLayout(layout)
    {
        _$prevButton.hide();
        _$nextButton.hide();

        var currentMaskWidth = parseInt(_$scrollMask.width(), 10);
        var currentMenuWidth = parseInt(jQuery(_$items[0]).outerWidth(), 10) * _$items.length;
        _$itemsContainer.width(currentMenuWidth);
        _$itemsContainer.css("left", 0);
        if (currentMaskWidth < currentMenuWidth)
        {
            _$nextButton.show();
        }
    };

    function _slideNext()
    {
        _slide(null, "next");
        return false;
    };

    function _slidePrev()
    {
        _slide(null, "prev");
        return false;
    };

    function _slide($subMenu, toward)
    {
        if (_hasAnimation)
            return;

        _hasAnimation = true;

        var maskWidth = parseInt(_$scrollMask.outerWidth(), 10);
        var menuItemWidth = jQuery(_$items[0]).outerWidth();
        var slideItems = Math.round(maskWidth / menuItemWidth);
        var slideDimension = menuItemWidth * slideItems;
        var currentLeft = _$itemsContainer.position().left;
        var mainMenuContainerWidth = _$itemsContainer.outerWidth();

        var newLeft = 0;
        if (toward == "next")
            newLeft = currentLeft - slideDimension;
        if (toward == "prev")
            newLeft = currentLeft + slideDimension;

        _$itemsContainer.animate({ left: newLeft }, "slow", function ()
        {
            _$prevButton.hide();
            if (newLeft < 0)
            {
                _$prevButton.show();
            }
            _$nextButton.hide();
            if ((mainMenuContainerWidth - Math.abs(newLeft)) > (maskWidth + (menuItemWidth / 2)))
            {
                _$nextButton.show();
            }
            _hasAnimation = false;
        });
        return false;
    };

    this.resize = function ()
    {
        return;
    };

    this.layoutChange = function (currentLayout, prevLayout)
    {
        if (_currentLayout == null || _currentLayout.Id == currentLayout.Id)
            return;
        _currentLayout = currentLayout;
        _resetLayout(currentLayout);
        return;
    };
};

/*HomePage choose group*/
AcerUi.ChooseGroup = function ()
{
    var that = this;
    var _currentLayout = null;

    var _$container = null;
    var _$groupBox = null;
    var _$showGroupsButton = null;
    var _$hideGroupsButton = null;
    var _heightToReached = null;
    var _hasAnimation = false;

    this.init = function (layout)
    {
        _currentLayout = layout;
        _$container = jQuery(jQuery("#chooseGroup")[0]);
        _$groupBox = jQuery(_$container.find(".layer-group")[0]);
        _$showGroupsButton = jQuery(_$container.find("a.open-layer-group")[0]);
        _$hideGroupsButton = jQuery(_$container.find("a.close")[0]);

        _$showGroupsButton.click(_toggleGroups);
        _$hideGroupsButton.click(_toggleGroups);

        AcerUi.addChangeLayoutListener(that.layoutChange);
        AcerUi.addResizeListener(that.resize);
        _resetLayout(layout);
    };

    function _resetLayout(layout)
    {
        _currentLayout = layout;
        _heightToReached = _$container.innerHeight();
        _$groupBox.css({ "height": _heightToReached, "top": _heightToReached, "display": "block" });
    };

    function _toggleGroups()
    {
        if (_hasAnimation)
            return false;

        _hasAnimation = true;
        var top = _$groupBox.position().top;
        var newTop = top == 0 ? _heightToReached : 0;
        _$groupBox.animate({ top: newTop }, 500, function () { _hasAnimation = false; });
        return false;
    };

    this.resize = function ()
    {
        return;
    };

    this.layoutChange = function (currentLayout, prevLayout)
    {
        if (_currentLayout == null || _currentLayout.Id == currentLayout.Id)
            return;
        _currentLayout = currentLayout;
        _resetLayout(currentLayout);
        return;
    };
};

/*Banner Header*/
AcerUi.BannerTopChange = function ()
{
    var that = this;
    var _imageClassName = null;

    this.init = function (layout)
    {
        _imageClassName = layout.Id.toLowerCase();
        jQuery(".banner-top").find("div").hide();
        jQuery(".banner-top").find("div." + _imageClassName).show();

        AcerUi.addChangeLayoutListener(that.layoutChange);
        _resetLayout(layout);
    };

    function _resetLayout(layout)
    {
        _imageClassName = layout.Id.toLowerCase();
        jQuery(".banner-top").find("div").hide();
        jQuery(".banner-top").find("div." + _imageClassName).show();
    };

    this.resize = function (currentLayout)
    {
        return;
    };

    this.layoutChange = function (currentLayout)
    {
        _resetLayout(currentLayout);
        return;
    };
};

/*Feature product*/
AcerUi.FeatureProduct = function ()
{
    var that = this;
    var _currentLayout = null;

    var _activeClassName = "active";
    var _containerSelector = ".feature-product";
    var _$container = null;
    var _titleSelector = ".feature-title > a";
    var _$titles = null;
    var _contentSelector = ".feature-description";
    var _$contents = null;

    this.init = function (layout)
    {
        _currentLayout = layout;

        /*Container check*/
        _$container = jQuery(_containerSelector);
        if (_$container.length == 0)
            return;

        /*get objects*/
        _$container = jQuery(_$container[0]);
        _$titles = jQuery(_$container.find(_titleSelector));
        _$contents = jQuery(_$container.find(_contentSelector));

        /*event handlers*/
        _$titles.click(_selectFeature);
        AcerUi.addChangeLayoutListener(that.layoutChange);

        /*set layout*/
        _resetLayout(layout);
    };

    function _resetLayout(layout)
    {
        _$titles.removeClass(_activeClassName);
        if (layout.Id == AcerUi.SMARTPHONE)
        {
            _$contents.show();
        }
        else
        {
            _$titles.removeClass(_activeClassName);
            jQuery(_$titles.get(0)).addClass(_activeClassName);
            _$contents.hide();
            jQuery(_$contents.get(0)).show();
        }
        return;
    };

    function _selectFeature()
    {
        if (_currentLayout.Id == AcerUi.SMARTPHONE)
            return false;

        var $this = jQuery(this);
        var ndx = _$titles.index($this);
        var $content = jQuery(_$contents.get(ndx));

        _$titles.removeClass(_activeClassName);
        $this.addClass(_activeClassName);
        _$contents.filter(':visible').hide();
        $content.show();
        return false;
    };

    this.resize = function (currentLayout)
    {
        return;
    };

    this.layoutChange = function (currentLayout)
    {
        if (_currentLayout == null || _currentLayout.Id == currentLayout.Id)
            return;
        _currentLayout = currentLayout;
        _resetLayout(currentLayout);
        return;
    };
};

AcerUi.RichContentTop = function ()
{
    var that = this;
    var _currentLayout = null;

    var _subPageStatusClassName = "open";
    var _activeItemClassName = "active";
    var _unactiveItemClassName = "unactive";
    var _containerSelector = ".rich-content-top > .main-container";
    var _$container = null;
    var _menuContentSelector = ".rich-content-nav";
    var _$menuContent = null;
    var _menuItemSelector = ".rich-content-nav li a";
    var _$menuItems = null;
    var _mainContentSelector = ".main-content";
    var _$mainContent = null;
    var _contentSelector = ".content";
    var _$contents = null;
    var _photoContentSelector = ".photo";
    var _$photoContent = null;
    var _360ViewContentSelector = ".view";
    var _$360ViewContent = null;
    var _videoContentSelector = ".video";
    var _$videoContent = null;
    var _zoomContentSelector = ".zoom";
    var _$zoomContent = null;

    var _mobileActionsContainerSelector = "div.photo-mobile";
    var _$mobilePhotoSelector = null;
    var _mobileShowPhotoButtonSelector = "div.photo-mobile > a.photo-mobile";
    var _$mobileShowPhotoButton = null;
    var _mobileHidePhotoButtonSelector = "div.photo-mobile > a.empty-button";
    var _$mobileHidePhotoButton = null;


    var _objPhotoViewer = null;
    var _obj360Viewer = null;
    var _objVideoViewer = null;
    var _objZoomViewer = null;

    this.init = function (layout)
    {
        _currentLayout = layout;



        /*Container check*/
        _$container = jQuery(_containerSelector);
        if (_$container.length == 0)
            return;

        /*set objects*/
        _$container = jQuery(_$container[0]);
        _$menuContent = jQuery(_$container.find(_menuContentSelector));

        _$menuItems = jQuery(_$container.find(_menuItemSelector));
        _$mainContent = jQuery(_$container.find(_mainContentSelector));
        _$contents = jQuery(_$container.find(_contentSelector));
        _$photoContent = jQuery(_$container.find(_photoContentSelector));
        _$360ViewContent = jQuery(_$container.find(_360ViewContentSelector));
        _$videoContent = jQuery(_$container.find(_videoContentSelector));
        _$zoomContent = jQuery(_$container.find(_zoomContentSelector));

        _$mobilePhotoSelector = jQuery(_$container.find(_mobileActionsContainerSelector));
        _$mobileShowPhotoButton = jQuery(_$container.find(_mobileShowPhotoButtonSelector));
        _$mobileHidePhotoButton = jQuery(_$container.find(_mobileHidePhotoButtonSelector));

        /*set sub objects*/
        _objPhotoViewer = new AcerUi.RichContentTop.PhotoViewer(_$photoContent).init();
        _obj360Viewer = new AcerUi.RichContentTop.d360Viewer(_$360ViewContent).init();
        _objVideoViewer = new AcerUi.RichContentTop.VideoViewer(_$videoContent);
        _objVideoViewer.init();

        _objZoomViewer = new AcerUi.RichContentTop.ZoomViewer(_$zoomContent).init();

        /*event handlers*/
        _$menuItems.click(_selectContent);
        jQuery(_$mobilePhotoSelector.find("a")).click(_mobileTogglePhotogallery);


        AcerUi.addChangeLayoutListener(that.layoutChange);

        /*remove element disabled*/
        if (_$container.hasClass("hideUnactive"))
        {
            jQuery(_menuItemSelector + ".unactive").parent().remove();
        };

        /*set layout*/
        _resetLayout(layout);

    };

    function _resetLayout(layout)
    {
        _$container.removeClass(_subPageStatusClassName);
        _$menuItems.removeClass(_activeItemClassName);
        _$mainContent.show();
        _$photoContent.hide();
        _$360ViewContent.hide();
        _$videoContent.hide();
        _$zoomContent.hide();
        if (layout.Id == AcerUi.SMARTPHONE)
        {
            _$mobileShowPhotoButton.show();
            _$mobileHidePhotoButton.hide();
            _$menuContent.hide();
        }
        else
        {
            _$menuContent.show();
        }

        _objVideoViewer.resetLayout();

        return;
    };

    function _selectContent()
    {
        var $this = jQuery(this);
        if ($this.hasClass(_activeItemClassName) || $this.hasClass(_unactiveItemClassName)) return false;

        var relSelector = "." + $this.attr("rel");
        var $contentToShow = null;
        var isMainContent = false;
        switch (relSelector)
        {
            case _photoContentSelector:
                $contentToShow = _$photoContent;
                break;
            case _360ViewContentSelector:
                $contentToShow = _$360ViewContent;
                break;
            case _videoContentSelector:
                $contentToShow = _$videoContent;
                break;
            case _zoomContentSelector:
                $contentToShow = _$zoomContent;
                break;
            default:
                $contentToShow = _$mainContent;
                isMainContent = true;
                break;
        }

        _$menuContent.hide();
        _$mainContent.hide();
        _$contents.hide();
        _$menuItems.removeClass(_activeItemClassName);
        if (isMainContent)
        {
            _$container.removeClass(_subPageStatusClassName);
        }
        else
        {
            _$container.addClass(_subPageStatusClassName);
            $this.addClass(_activeItemClassName);
        }
        $contentToShow.show();

        //Fix for video content
        if (relSelector == _videoContentSelector)
        {
            _objVideoViewer.activateVideo();
        }
        else
        {
            _objVideoViewer.resetLayout();
        }

        _$menuContent.show();

        return false;
    };

    function _mobileTogglePhotogallery()
    {
        var $this = jQuery(this);
        if ($this.hasClass(_unactiveItemClassName))
        {
            return false;
        }

        if (_$photoContent.is(":visible"))
        {
            $this.hide();
            _$mobileShowPhotoButton.show();
            _$photoContent.hide();
            _$container.removeClass(_subPageStatusClassName);
            _$mainContent.show();
        }
        else
        {
            $this.hide();
            _$mobileHidePhotoButton.show();
            _$photoContent.show();
            _$container.addClass(_subPageStatusClassName);
            _$mainContent.hide();
        }
        return false;
    };

    this.resize = function (currentLayout)
    {
        return;
    };

    this.layoutChange = function (currentLayout)
    {
        if (_currentLayout == null || _currentLayout.Id == currentLayout.Id)
            return;
        _currentLayout = currentLayout;
        _resetLayout(_currentLayout);
        return;
    };
};

/*Photo viewer*/
AcerUi.RichContentTop.PhotoViewer = function ($photoContent)
{
    var that = this;
    var _activeItemClassName = "active";
    var _photoMenuItemsSelector = ".photo-content > ul > li > a";
    var _$photoMenuItems = null;
    var _mainPhotoSelector = ".img-big > img";
    var _$mainPhoto = jQuery($photoContent.find(".img-big > img"));

    this.init = function ()
    {
        if ($photoContent == null || $photoContent.length == 0)
            return;

        _$photoMenuItems = jQuery($photoContent.find(_photoMenuItemsSelector));
        _$mainPhoto = jQuery($photoContent.find(_mainPhotoSelector));

        _$photoMenuItems.click(_selectPhoto);

        that.resetLayout();
    };

    this.resetLayout = function ()
    {
        _$photoMenuItems.removeClass(_activeItemClassName);
        var $currentItem = jQuery(_$photoMenuItems.get(0));
        var $currentPhoto = jQuery($currentItem.find("img")[0]);
        $currentItem.addClass(_activeItemClassName);
        _$mainPhoto.attr("src", $currentPhoto.attr("src")).show();
    };

    function _selectPhoto()
    {
        var $this = jQuery(this);
        if ($this.hasClass(_activeItemClassName)) return false;

        var newSrc = jQuery(jQuery($this.find("img"))[0]).attr("src");

        if (jQuery.browser.msie && parseInt(jQuery.browser.version, 10) < 9)
        {
            _$mainPhoto.attr("src", newSrc);
        }
        else
        {
            _$mainPhoto.fadeOut("fast", function ()
            {
                _$mainPhoto.unbind("load", _showMe).bind("load", _showMe);
                _$mainPhoto.attr("src", newSrc);
            });
        }

        _$photoMenuItems.removeClass(_activeItemClassName);
        $this.addClass(_activeItemClassName);

        return false;
    };

    function _showMe()
    {
        jQuery(this).hide().fadeIn("slow");
    }
};

/*Degree 360 viewer*/
AcerUi.RichContentTop.d360Viewer = function ($360ViewerContent)
{
    var that = this;
    var _activeItemClassName = "active";
    var _prevButtonSelector = ".prev > a";
    var _$prevButton = null;
    var _nextButtonSelector = ".next > a";
    var _$nextButton = null;
    var _imageSelector = ".view-content > img";
    var _$images = null;

    var _autoRoll = false;
    var _autoRollTimer = null;

    this.init = function ()
    {
        if ($360ViewerContent == null || $360ViewerContent.length == 0)
            return;

        _$prevButton = jQuery($360ViewerContent.find(_prevButtonSelector));
        _$nextButton = jQuery($360ViewerContent.find(_nextButtonSelector));
        _$images = jQuery($360ViewerContent.find(_imageSelector));


        _$prevButton.click(function () { return false; });
        _$prevButton.mousedown(_goNext);
        _$prevButton.mouseup(function () { _autoRoll = false; return false; });

        _$nextButton.click(function () { return false; });
        _$nextButton.mousedown(_goPrev);
        _$nextButton.mouseup(function () { _autoRoll = false; return false; });

        _preloadImages();
        that.resetLayout();
    };

    function _preloadImages()
    {
        return;
    };

    function _goNext()
    {
        _autoRoll = true;
        _goTo("next");

        return false;
    };

    function _goPrev()
    {
        _autoRoll = true;
        _goTo("prev");
        return false;
    };

    function _goTo(toward)
    {
        if (_autoRoll == false)
        {
            return false;
        }

        if (_autoRollTimer != null)
        {
            window.clearTimeout(_autoRollTimer);
            _autoRollTimer = null;
        }

        var $currentImage = jQuery(_$images.filter(":visible")[0]);
        var currentNdx = _$images.index($currentImage);
        var newIndex = 0;
        if (toward == "next")
        {
            newIndex = currentNdx + 1;
            if (newIndex > (_$images.length - 1)) newIndex = 0;
        }
        else
        {
            newIndex = currentNdx - 1;
            if (newIndex < 0) newIndex = (_$images.length - 1);
        }
        $currentImage.hide();
        jQuery(_$images.get(newIndex)).show();

        if (_autoRoll == true)
        {
            _autoRollTimer = window.setTimeout(function () { _goTo(toward); }, 100);
        }
        return false;
    };

    this.resetLayout = function ()
    {
        _$images.hide();
        jQuery(_$images.get(0)).show();
    };

    function _selectPhoto()
    {
        var $this = jQuery(this);
        if ($this.hasClass(_activeItemClassName)) return false;

        var newSrc = jQuery(jQuery($this.find("img"))[0]).attr("src");
        _$mainPhoto.attr("src", newSrc);

        _$mainPhoto.fadeOut("fast", function ()
        {
            _$mainPhoto.attr("src", newSrc);
            _$mainPhoto.fadeIn("fast");
        });

        _$photoMenuItems.removeClass(_activeItemClassName);
        $this.addClass(_activeItemClassName);

        return false;
    };
};

/*Video viewer*/
AcerUi.RichContentTop.VideoViewer = function ($VideoContent)
{
    var that = this;
    var _iFrameContainerSelector = ".video-container";
    var _$iFrameContainer = null;
    var _iFrameHtml = "<iframe id=\"topVideo\" width=\"100%\" height=\"100%\" src=\"{src}\" frameborder=\"0\" allowfullscreen></iframe>";
    var _iframeSrc = null;
    var _iFrameSelector = ".video-container > iframe";
    var _$IFrame = null;

    this.init = function ()
    {
        if ($VideoContent == null || $VideoContent.length == 0)
            return;

        _$iFrameContainer = jQuery($VideoContent.find(_iFrameContainerSelector));

        _iframeSrc = _$iFrameContainer.attr("data-video");
        _iFrameHtml = _iFrameHtml.split("{src}").join(_iframeSrc);

        that.resetLayout();
    };

    this.resetLayout = function ()
    {
        _hideVideo();
    };

    this.activateVideo = function ()
    {
        _showVideo();
    }

    function _hideVideo()
    {
        try
        {
            var video = jQuery(_$iFrameContainer.find("#topVideo"));
            video.remove();
        }
        catch (e)
        {
        };
    };

    function _showVideo()
    {
        _$iFrameContainer.append(jQuery(_iFrameHtml));
        return false;
    };
};

/*Zoom viewer*/
AcerUi.RichContentTop.ZoomViewer = function ($ZoomContent)
{
    var that = this;

    var _zoomPhotoSelector = ".img-big > img";
    var _$zoomPhoto = null;
    var _thumbPhotoSelector = ".zoom-content img";
    var _$thumbPhoto = null;
    var _pointerSelector = ".zoom-content .pointer";
    var _$pointer = null;
    var _zoomContentSelector = ".zoom-content";
    var _$zoomContent = null;
    var _maskSelector = ".zoom-content .mask";
    var _$mask = null;

    var _buttonSelector = ".ctn-arrow-zoom a";
    var _$buttons = null;

    this.init = function ()
    {
        if ($ZoomContent == null || $ZoomContent.length == 0)
            return;

        _$zoomPhoto = jQuery($ZoomContent.find(_zoomPhotoSelector)[0]);
        _$thumbPhoto = jQuery($ZoomContent.find(_thumbPhotoSelector)[0]);
        _$pointer = jQuery($ZoomContent.find(_pointerSelector)[0]);
        _$zoomContent = jQuery($ZoomContent.find(_zoomContentSelector)[0]);
        _$mask = jQuery($ZoomContent.find(_maskSelector)[0]);
        _$buttons = jQuery($ZoomContent.find(_buttonSelector));

        _$mask.bind("mouseover", _showPointer);
        _$mask.bind("mouseleave", _hidePointer);
        _$mask.bind("mousemove", _setPointerPosition);
        _$buttons.click(_manualMovePointer);
        _$pointer.show();
        that.resetLayout();
    };

    function _showPointer()
    {
        //document.body.style.cursor = "none";
    };

    function _hidePointer()
    {
        document.body.style.cursor = "default";
    };

    function _setPointerPosition(e)
    {
        _movePointer(e.pageX, e.pageY);
    };

    function _initPointer()
    {
        var maskLeft = _$mask.offset().left;
        var maskTop = _$mask.offset().top;
        var maskW = _$mask.outerWidth();
        var maskH = _$mask.outerHeight();
        var pointerW = _$pointer.outerWidth();
        var pointerH = _$pointer.outerHeight();

        //centerpoint
        var pointerX = maskLeft + (maskW / 2);
        var pointerY = maskTop + (maskH / 2);
        _movePointer(pointerX, pointerY);
    };

    function _manualMovePointer()
    {
        var pointerW = _$pointer.outerWidth();
        var pointerH = _$pointer.outerHeight();

        var pointerX = _$pointer.offset().left + (pointerW / 2);
        var pointerY = _$pointer.offset().top + (pointerH / 2);

        var toward = jQuery(this).attr("class");
        switch (toward)
        {
            case "go-top":
                pointerY -= 10;
                //_$pointer.css("top", parseInt(_$pointer.css("top"), 10) - 10);
                break;
            case "go-bottom":
                pointerY += 10;
                //_$pointer.css("top", parseInt(_$pointer.css("top"), 10) + 10);
                break;
            case "go-left":
                pointerX -= 10;
                //_$pointer.css("left", parseInt(_$pointer.css("left"), 10) - 10);
                break;
            case "go-right":
                pointerX += 10;
                //_$pointer.css("left", parseInt(_$pointer.css("left"), 10) + 10);
                break;
        }
        _$pointer.show();
        _movePointer(pointerX, pointerY);
        return false;
    };

    function _movePointer(posX, posY)
    {
        var maskLeft = _$mask.offset().left;
        var maskTop = _$mask.offset().top;
        var maskW = _$mask.outerWidth();
        var maskH = _$mask.outerHeight();
        var pointerW = _$pointer.outerWidth();
        var pointerH = _$pointer.outerHeight();

        posX = posX - maskLeft - (pointerW / 2);
        posY = posY - maskTop - (pointerH / 2);

        if ((posX + pointerW) > maskW)
        {
            posX = maskW - pointerW;
        }

        if ((posY + pointerH) > maskH)
        {
            posY = maskH - pointerH;
        }

        if (posX < 0) posX = 0;
        if (posY < 0) posY = 0;


        var zoomPhotoW = _$zoomPhoto.width();
        var zoomPhotoH = _$zoomPhoto.height();
        if (zoomPhotoW == 0 || zoomPhotoH == 0)
        {
            var img = new Image();
            img.src = _$zoomPhoto.attr("src");
            zoomPhotoW = img.width;
            zoomPhotoH = img.height;
        }

        var ratioX = Math.round(zoomPhotoW / maskW);
        var ratioY = Math.round(zoomPhotoH / maskH);

        _$pointer.css({ left: posX, top: posY });
        _$zoomPhoto.css({ left: (posX * ratioX * -1), top: (posY * ratioY * -1) });
    };

    this.resetLayout = function ()
    {
        //_$pointer.offset({ top: 0, left: 0 }).hide();
        _initPointer();
        return;
    };
};

AcerUi.ProductList = function ()
{
    var that = this;
    var _currentLayout = null;

    /*Consts*/
    var _selectedItemClassName = "selected";
    var _filterOpenClassName = "open-filter";
    var _filterCloseClassName = "close-filter";
    var _productItemSelector = ".product";

    var _pcPageSize = 9;
    var _tabletPageSize = 6;
    var _smartphonePageSize = 3;

    var _containerSelector = ".product-list-container";
    var _$container = null;

    var _filterDataKey = "filter";
    var _filterSelector = ".filter-box ul li a";
    var _$filters = null;

    var _productListSelector = ".product-list";
    var _$productList = null;

    var _compareBoxSelector = ".compare-box";
    var _$compareBox = null;

    var _helpMeChooseBoxSelector = ".help-choose";
    var _$helpMeChooseBox = "null";

    var _btnOpenFilterSelector = ".open-filter";
    var _$btnOpenFilter = null;

    var _btnResetFilterSelector = ".reset-filter";
    var _$btnResetFilter = null;

    var _noElementMessageSelector = ".no-element";
    var _$noElementMessage = null;
    var _btnShowMoreProductsSelector = ".more-element";
    var _$btnShowMoreProducts = null;

    var _filterContainerSelector = ".filter-container";
    var _$filterContainer = null;

    var _sortContainerSelector = ".sort";
    var _$sortContainer = null;

    //common objects 
    _products = null;

    this.init = function (layout)
    {
        _currentLayout = layout;

        /*Container check*/
        _$container = jQuery(_containerSelector);
        if (_$container.length == 0)
            return;

        /*get objects*/
        _$container = jQuery(_$container[0]);
        _$filters = jQuery(_$container.find(_filterSelector));
        _$productList = jQuery(_$container.find(_productListSelector));
        _$compareBox = jQuery(_$container.find(_compareBoxSelector));
        _$helpMeChooseBox = jQuery(_$container.find(_helpMeChooseBoxSelector));
        _$btnOpenFilter = jQuery(_$container.find(_btnOpenFilterSelector));
        _$btnResetFilter = jQuery(_$container.find(_btnResetFilterSelector));
        _$noElementMessage = jQuery(_$container.find(_noElementMessageSelector));
        _$btnShowMoreProducts = jQuery(_$container.find(_btnShowMoreProductsSelector));
        _$compareBox = jQuery(_$container.find(_compareBoxSelector));
        _$filterContainer = jQuery(_$container.find(_filterContainerSelector));
        _$sortContainer = jQuery(_$container.find(_sortContainerSelector));

        /*Events*/
        AcerUi.addChangeLayoutListener(that.layoutChange);
        jQuery(_$compareBox.find("a.open")).click(_showInComparisonProducts);
        jQuery(_$compareBox.find("a.close")).click(_hideInComparisonProducts);
        jQuery(_$compareBox.find("a.btnCompare")).click(_gotoComparisonProducts);
        jQuery(_$helpMeChooseBox.find(">h2 > a")).click(_toggleHelpMeChoose);
        _$filters.click(_toggleFilter);
        _$btnResetFilter.click(_resetFilters);
        _$btnOpenFilter.click(_toggleFilters);
        _$btnShowMoreProducts.click(_showMoreProducts);
        jQuery(document).scroll(_onScroll);

        jQuery(_$container.find(".product .compare a")).click(_selectProduct);

        _initFilters();
        _initProducts();
        _initSorters();
        _resetLayout(layout);
    };

    /*COMMON FUNCTIONS*/
    function _getPageSize()
    {
        switch (_currentLayout.Id)
        {
            case AcerUi.SMARTPHONE:
                return _smartphonePageSize;
            case AcerUi.TABLET:
                return _tabletPageSize;
            case AcerUi.PC:
            default:
                return _pcPageSize;
        }
    };

    function _onScroll()
    {
        var pageScroll = jQuery(window).scrollTop();
        var windowHeight = jQuery(window).height();

        if (pageScroll + windowHeight > _$productList.outerHeight() + 300 && _$btnShowMoreProducts.is(":visible"))
        {
            _$btnShowMoreProducts.click();
        }
    };

    /*FILTER FUNCTIONS*/

    function _initFilters()
    {
        for (var i = 0; i < _$filters.length; i++)
        {
            var filter = _$filters[i];
            var filterString = jQuery(_$filters[i]).attr("rel");

            var filterId = filterString.split("#")[0];
            var filterRange = (filterString.split("#")[1]).split("|");
            var minValue = 0;
            var maxValue = 0;
            var isSingleValue = false;
            if (filterRange.length == 1)
            {
                minValue = filterRange[0];
                maxValue = filterRange[0];
                isSingleValue = true;
            }
            else
            {
                minValue = parseInt(filterRange[0], 10);
                maxValue = parseInt(filterRange[1], 10);
                isSingleValue = false;
            }
            var newDataValue = { "ndx": i, "id": filterId, "minValue": minValue, "maxValue": maxValue, "isSingleValue": isSingleValue };
            jQuery.data(filter, _filterDataKey, newDataValue);
        }
    };

    function _getSelectedFilterGroups()
    {
        var selectedFilterGroups = [];
        var $selectedFilters = _$filters.filter("." + _selectedItemClassName);
        var groupCount = 0;
        for (var i = 0; i < $selectedFilters.length; i++)
        {
            var filter = jQuery.data($selectedFilters[i], _filterDataKey);
            var filterId = filter.id;
            if (!selectedFilterGroups["fId-" + filterId])
            {
                selectedFilterGroups["fId-" + filterId] = new Array(filter);
                groupCount++;
            }
            else
            {
                selectedFilterGroups["fId-" + filterId].push(filter);
            }
        }
        return { "count": groupCount, groups: selectedFilterGroups };
    };

    function _toggleFilter()
    {
        var $this = jQuery(this);
        if ($this.hasClass(_selectedItemClassName))
        {
            $this.removeClass(_selectedItemClassName);
        }
        else
        {
            $this.addClass(_selectedItemClassName);
        }
        _printProductList();
        return false;
    };

    function _resetFilters()
    {
        _$filters.removeClass(_selectedItemClassName);
        _printProductList();
        return false;
    };

    function _toggleFilters()
    {
        var $this = jQuery(this);
        $this.toggleClass(_filterOpenClassName).toggleClass(_filterCloseClassName);
        _$filterContainer.slideToggle();
        return false;
    };

    /*SORT FUNCTIONS*/
    function _initSorters()
    {
        var $sorters = jQuery(_$sortContainer.find(".short-list a"));
        for (var i = 0; i < $sorters.length; i++)
        {
            //filter#13#asc
            var sortDataString = jQuery($sorters[i]).attr("data-sort");
            jQuery.data($sorters[i], "sort", _sortStringToSortData(sortDataString));
        }
        var $mainSorter = jQuery(_$sortContainer.find("a.open-short"));
        jQuery.data($mainSorter[0], "sort", _sortStringToSortData($mainSorter.attr("data-sort")));
        $sorters.click(_onSortChange);
        $mainSorter.click(_toggleSortSelector);
        jQuery(_$sortContainer.find(".short-list")).hide();
    };

    function _sortStringToSortData(sortString)
    {
        var sortValues = sortString.split("#");
        var sortData = { type: sortValues[0], value: sortValues[1], toward: sortValues[2] };
        return sortData;
    };

    function _toggleSortSelector()
    {
        var $sortItemList = jQuery(_$sortContainer.find(".short-list"));
        $sortItemList.slideToggle("fast");
        return false;
    };

    function _onSortChange()
    {
        var $this = jQuery(this);
        var sortData = jQuery.data($this[0], "sort");
        var $mainSorter = jQuery(_$sortContainer.find("a.open-short"));
        jQuery.data($mainSorter[0], "sort", sortData);
        $mainSorter.text($this.text());
        _toggleSortSelector();
        _printProductList();
        return false;
    };

    function _getCurrentSort()
    {
        var $mainSorter = jQuery(_$sortContainer.find("a.open-short"));
        return jQuery.data($mainSorter[0], "sort");
    };

    function _sortProducts()
    {
        //var productObject = { "id": productId, "name": productName, "data": productData, selected: false, element: $product.clone() };
        var currentSort = _getCurrentSort();
        _products.sort(function (a, b)
        {
            var productValueA = "";
            var productValueB = "";
            if (currentSort.type == "filter")
            {
                productValueA = _getProductDataValue(a, currentSort.value);
                productValueB = _getProductDataValue(b, currentSort.value);
            }
            else //currentSort.type = "property"
            {
                productValueA = _getProductPropertyValue(a, currentSort.value);
                productValueB = _getProductPropertyValue(b, currentSort.value);
            }

            if (productValueA < productValueB)
            {
                return currentSort.toward == "asc" ? -1 : 1;
            }
            if (productValueA == productValueB)
            {
                return 0;
            }
            if (productValueA > productValueB)
            {
                return currentSort.toward == "asc" ? 1 : -1;
            }
        });

        for (var i = 0; i < _products.length; i++)
        {
            var $product = jQuery(jQuery(".product-list .product[id='" + _products[i].id + "']"));
            jQuery(".product-list").append($product);
        }
    };

    /*PRODUCT FUNCTIONS*/

    function _initProducts()
    {
        _products = [];
        var $products = _$productList.find(_productItemSelector);
        for (var i = 0; i < $products.length; i++)
        {
            var $product = jQuery($products[i]);
            var productId = $product.attr("id");
            var productName = jQuery($product.find("h2")).text();
            var productData = [];
            var dataArray = $product.attr("rel").split("#");
            for (var ii = 0; ii < dataArray.length; ii++)
            {
                var dataId = dataArray[ii].split(":")[0];
                var dataValue = dataArray[ii].split(":")[1];
                if (!isNaN(dataValue)) dataValue = parseInt(dataValue, 10);
                productData.push({ "id": dataId, "value": dataValue });
            }
            var productObject = { "id": productId, "name": productName, "data": productData, isSelected: 0 };
            jQuery.data($product[0], "appData", productObject);
            _products.push(productObject);
        }
    };

    function _getProductById(productId)
    {
        for (var i = 0; i < _products.length; i++)
        {
            if (_products[i].id == productId)
            {
                return _products[i];
            }
        }
        return null;
    };

    function _getSelectedProducts()
    {
        var selectedProducts = [];
        for (var i = 0; i < _products.length; i++)
        {
            if (_products[i].isSelected != 0)
            {
                selectedProducts.push(_products[i]);
            }
        }
        selectedProducts.sort(function (a, b)
        {
            if (a.isSelected < b.isSelected)
            {
                return -1;
            }
            if (a.isSelected == b.isSelected)
            {
                return 0;
            }
            if (a.isSelected == b.isSelected)
            {
                return 1;
            }
        });
        return selectedProducts;
    };

    function _showMoreProducts()
    {
        var $products = _$productList.find(".product:visible");
        var pageSize = $products.length + _getPageSize();
        _printProductList(pageSize);
        return false;
    };

    function _selectProduct()
    {
        var $this = jQuery(this);
        var $product = jQuery($this.parents(_productItemSelector)[0]);
        var productData = jQuery.data($product[0], "appData");

        if ($product.hasClass(_selectedItemClassName))
        {
            $product.removeClass(_selectedItemClassName);
            productData.isSelected = 0;
        }
        else
        {
            var $products = jQuery(jQuery(".product-list .product"));
            var $selectedProducts = jQuery($products.filter(".selected"));
            var selectedProductsCount = $selectedProducts.length;
            if (selectedProductsCount < 3)
            {
                $product.addClass(_selectedItemClassName);
                productData.isSelected = (new Date()).getTime();
            }
        }
        _resetProductComparer();
        return false;
    };

    function _productMatch(productData, filterGroups)
    {
        var productFilters = productData;
        var matches = 0;

        for (var filterKey in filterGroups.groups)
        {
            var filters = filterGroups.groups[filterKey];
            var productFilterValue = null;
            for (var i = 0; i < productFilters.length; i++)
            {
                if (productFilters[i].id == filters[0].id)
                {
                    productFilterValue = productFilters[i];
                    break;
                }
            }

            if (productFilterValue == null)
            {
                return false;
            }

            if (_productMatchToSingleFilter(productFilterValue, filters))
            {
                matches++;
            }
        }
        return matches == filterGroups.count;
    };

    function _productMatchToSingleFilter(productFilter, filters)
    {
        for (var i = 0; i < filters.length; i++)
        {
            var filter = filters[i];
            if (
                (filter.isSingleValue && filter.minValue == productFilter.value)
                || (productFilter.value >= filter.minValue && productFilter.value < filter.maxValue)
                )
            {
                return true;
                break;
            }
        }
        return false;
    };

    function _getProductDataValue(product, dataValueId)
    {
        for (var i = 0; i < product.data.length; i++)
        {
            if (product.data[i].id == dataValueId)
            {
                return product.data[i].value;
            }
        }
        return "";
    };

    function _getProductPropertyValue(product, propertyName)
    {
        if (product.hasOwnProperty(propertyName))
        {
            return product[propertyName];
        }
        return "";
    };

    function _printProductList(pageSize)
    {
        if (pageSize == null || pageSize + "" == "undefined")
        {
            _$productList.fadeOut("fast", function ()
            {
                _printProductList(_getPageSize());
            });
            return false;
        }

        _sortProducts();

        var $products = _$productList.find(".product");
        $products.hide();
        var filterGroups = _getSelectedFilterGroups();
        var showedProducts = 0;
        var matchedProducts = 0;
        for (var i = 0; i < $products.length; i++)
        {
            var product = $products[i];
            var $product = jQuery(product);
            var that = jQuery.data(product, "appData");
            if (_productMatch(that.data, filterGroups))
            {
                if (showedProducts < pageSize)
                {
                    $product.show();
                    showedProducts++;
                }
                matchedProducts++;
            }
            else
            {
                $product.hide();
            }
        }

        if (showedProducts < matchedProducts)
        {
            _$btnShowMoreProducts.show();
        }
        else
        {
            _$btnShowMoreProducts.hide();
        }

        if (showedProducts == 0)
        {
            _$noElementMessage.show();
        }
        else
        {
            _$noElementMessage.hide();
        }

        if (filterGroups.count > 0)
        {
            _$btnResetFilter.slideDown("fast");
        }
        else
        {
            _$btnResetFilter.slideUp("fast");
        }

        _$productList.fadeIn("fast");
    };

    /*PRODUCT COMPARER*/
    function _resetProductComparer()
    {
        //reset panel 
        var $compareBox = jQuery(_$container.find(".compare-box"));
        jQuery($compareBox.find(".selected-element")).removeClass("selected");
        jQuery($compareBox.find("a.close")).hide();
        jQuery($compareBox.find("a.open")).hide();
        jQuery($compareBox.find("span.selected-label")).hide();
        jQuery($compareBox.find("a.btnCompare")).hide();
        $compareBox.hide();

        var $productPanel = jQuery($compareBox.find(".list-product-to-compare"));
        $productPanel.empty();

        var $selectedProducts = jQuery(".product.selected");

        //sort
        $selectedProducts.sort(function (a, b)
        {
            var dataA = jQuery.data(a, "appData");
            var dataB = jQuery.data(b, "appData");

            if (dataA.isSelected > dataB.isSelected) return 1;
            if (dataA.isSelected == dataB.isSelected) return 0;
            if (dataA.isSelected < dataB.isSelected) return -1;
        });

        for (var i = 0; i < $selectedProducts.length; i++)
        {
            $productPanel.append(jQuery($selectedProducts[i]).clone().show());
        }

        if ($selectedProducts.length == 0)
        {
            $compareBox.hide();
            $productPanel.hide();
            jQuery($compareBox.find("a.close")).hide();
        }
        else if ($selectedProducts.length == 1)
        {
            jQuery($compareBox.find(".selected-element").get(0)).addClass(_selectedItemClassName);
            jQuery($compareBox.find("span.selected-label")).show();
            $compareBox.show();
            $productPanel.show();
            jQuery($compareBox.find("a.close")).show();
        }
        else if ($selectedProducts.length == 2)
        {
            jQuery($compareBox.find(".selected-element").get(0)).addClass(_selectedItemClassName);
            jQuery($compareBox.find(".selected-element").get(1)).addClass(_selectedItemClassName);
            jQuery($compareBox.find("a.btnCompare")).show();
            $compareBox.show();
            $productPanel.show();
            jQuery($compareBox.find("a.close")).show();
        }
        else if ($selectedProducts.length == 3)
        {
            jQuery($compareBox.find(".selected-element")).addClass(_selectedItemClassName);
            jQuery($compareBox.find("a.btnCompare")).show();
            $compareBox.show();
            $productPanel.show();
            jQuery($compareBox.find("a.close")).show();
        }

        jQuery($productPanel.find(".compare a")).click(_removeProductFromComparer);
        _addBodyPadding();
        return false;
    };

    function _removeProductFromComparer()
    {
        var $this = jQuery(this);
        var $product = jQuery($this.parents(_productItemSelector)[0]);
        var product = _getProductById($product.attr("id"));
        product.isSelected = 0;
        jQuery(_$productList.find(_productItemSelector + "[id='" + product.id + "']")).removeClass(_selectedItemClassName);
        _resetProductComparer();
        return false;
    };

    function _showInComparisonProducts()
    {
        var $productPanel = jQuery(_$compareBox.find(".list-product-to-compare"));
        $productPanel.slideDown("slow", _addBodyPadding);
        jQuery(_$compareBox.find("a.open")).hide();
        jQuery(_$compareBox.find("a.close")).show();
        return false;
    };

    function _hideInComparisonProducts()
    {
        var $productPanel = jQuery(_$compareBox.find(".list-product-to-compare"));
        $productPanel.slideUp("slow", _addBodyPadding);
        jQuery(_$compareBox.find("a.open")).show();
        jQuery(_$compareBox.find("a.close")).hide();
        return false;
    };

    function _gotoComparisonProducts()
    {
        var $this = jQuery(this);
        var urlFormat = $this.attr("href");
        var selectedProducts = _getSelectedProducts();
        if (selectedProducts.length < 2)
        {
            return false;
        }
        var skus = [];
        for (var i = 0; i < selectedProducts.length; i++)
        {
            skus.push(encodeURI(selectedProducts[i].id + ""));
        }
        $this.attr("href", urlFormat.split("{0}").join(skus.join("-")));
        return true;
    };

    function _addBodyPadding()
    {
        var height = jQuery(".compare-box").outerHeight();
        var isVisible = jQuery(".compare-box").is(":visible");
        var footerRow = jQuery(jQuery(".footer").parents(".row")[0]);
        if (!isVisible)
        {
            footerRow.animate({ "padding-bottom": 0 });
        }
        else
        {
            footerRow.animate({ "padding-bottom": height });
        }
    }

    /*HELP ME CHOOSE*/
    function _toggleHelpMeChoose()
    {
        var $this = jQuery(this);
        jQuery(_$helpMeChooseBox.find(".choose-selector")).slideToggle("slow");
        _$helpMeChooseBox.toggleClass("open");
        return false;
    };

    function _resetHelpMeChoose()
    {
        _$helpMeChooseBox.removeClass("open");
        jQuery(_$helpMeChooseBox.find(".choose-selector")).hide();
        return false;
    };

    /*INTERFACE FUNCTIONS*/

    function _resetLayout(layout)
    {
        if (layout.Id == AcerUi.SMARTPHONE)
        {
            _$compareBox.hide();
            _$filterContainer.hide();
            _$btnOpenFilter.removeClass("close-filter").addClass("open-filter").show();
        }
        else
        {
            _resetProductComparer();
            _$filterContainer.show();
            _$btnOpenFilter.hide();
        }
        _resetHelpMeChoose();
        _printProductList();
        return;
    };

    this.resize = function (currentLayout)
    {
        return;
    };

    this.layoutChange = function (currentLayout)
    {
        if (_currentLayout == null || _currentLayout.Id == currentLayout.Id)
            return;
        _currentLayout = currentLayout;
        _resetLayout(currentLayout);
        return;
    };
};

AcerUi.TabContent = function ()
{
    var _activeClassName = "active";

    var _containerSelector = ".content-download";
    var _$container = null;

    var _tabLinkSelector = "> ul li a";
    var _$tabLinks = null;

    var _tabLinkParentSelector = "> ul li";
    var _$tabLinkParents = null;

    var _tabContainerSelector = ".content-tab > div";
    var _$tabContainers = null;

    this.init = function ()
    {
        /*Container check*/
        _$container = jQuery(_containerSelector);
        if (_$container.length == 0)
            return;

        _$container = jQuery(_$container[0]);
        _$tabLinks = jQuery(_$container.find(_tabLinkSelector));
        _$tabLinkParents = jQuery(_$container.find(_tabLinkParentSelector));
        _$tabContainers = jQuery(_$container.find(_tabContainerSelector));

        _$tabLinks.click(_toggleTab);
        _resetlayout();
    };

    function _resetlayout()
    {
        jQuery(_$tabLinks.get(0)).click();
    };

    function _toggleTab()
    {
        var $this = jQuery(this);
        var ndx = _$tabLinks.index($this);
        var $parent = jQuery(_$tabLinkParents.get(ndx));
        var $tabContainer = jQuery(_$tabContainers.get(ndx));

        if ($parent.hasClass(_activeClassName))
        {
            return false;
        }

        _$tabLinkParents.removeClass(_activeClassName);
        $parent.addClass(_activeClassName);

        _$tabContainers.hide();
        $tabContainer.show();
        return false;
    };
};


AcerUi.SimplePageMenu = function ()
{
    var that = this;
    var _currentLayout = null;

    var _activeClassName = "active";

    var _containerSelector = ".simple-page";
    var _$container = null;

    var _menuSelector = "ul.menu-content, div.menu-content";
    var _$menu = null;

    var _menuTogglerSelector = "a.btnShowMenu";
    var _$menuToggler = null;

    this.init = function (layout)
    {
        _currentLayout = layout;

        /*Container check*/
        _$container = jQuery(_containerSelector);
        if (_$container.length == 0)
            return;

        _$container = jQuery(_$container[0]);
        _$menu = jQuery(_$container.find(_menuSelector));
        _$menuToggler = jQuery(_$container.find(_menuTogglerSelector));

        /*events*/
        AcerUi.addChangeLayoutListener(that.layoutChange);
        _$menuToggler.click(_toggleMenu);

        /*inits*/
        _resetLayout(layout);
    };

    function _toggleMenu()
    {
        _$menuToggler.toggleClass(_activeClassName);
        _$menu.slideToggle();
        return false;
    };

    function _resetLayout(layout)
    {
        if (layout.Id == AcerUi.SMARTPHONE)
        {
            _$menu.hide();
            _$menuToggler.removeClass(_activeClassName).show();
        }
        else
        {
            _$menu.show();
            _$menuToggler.removeClass(_activeClassName).hide();
        }
    };

    this.resize = function (currentLayout)
    {
        return;
    };

    this.layoutChange = function (currentLayout)
    {
        if (_currentLayout == null || _currentLayout.Id == currentLayout.Id)
            return;
        _currentLayout = currentLayout;
        _resetLayout(currentLayout);
        return;
    };
};

AcerUi.SearchBox = function ()
{
    var that = this;
    var _currentLayout = null;

    var _activeClassName = "active";

    var _containerSelector = ".header .searchBox, .footer .searchBox";
    var _$container = null;

    var _inPageContainerSelector = ".form-search";
    var _$inPageContainer = null;

    var _inputSelector = "input";
    var _$input = null;
    var _$inPageInput = null;

    var _buttonSearchSelector = "a";
    var _$buttonSearch = "";
    var _$inPageButtonSearch = "";

    var _inPageResultContainerSelector = ".result-search";
    var _$inPageResultContainer = null;

    var _inPageResultContentSelector = ".info-list, .product-list";
    var _$inPageResultContent = null;

    var _inPageExpandResultButtonSelector = ".more-element a";
    var _$inPageExpandResultButton = null;

    this.init = function (layout)
    {
        _currentLayout = layout;

        /*Container check*/
        _$container = jQuery(_containerSelector);
        _$inPageContainer = jQuery(_inPageContainerSelector);
        _$inPageResultContainer = jQuery(_inPageResultContainerSelector); ;

        //_$container = jQuery(_$container[0]);
        _$input = jQuery(_$container.find(_inputSelector));
        _$inPageInput = jQuery(_$inPageContainer.find(_inputSelector));
        _$buttonSearch = jQuery(_$container.find(_buttonSearchSelector));
        _$inPageButtonSearch = jQuery(_$inPageContainer.find(_buttonSearchSelector));
        _$inPageResultContent = jQuery(_$inPageResultContainer.find(_inPageResultContentSelector)); ;
        _$inPageExpandResultButton = jQuery(_$inPageResultContainer.find(_inPageExpandResultButtonSelector));

        /*events*/
        AcerUi.addChangeLayoutListener(that.layoutChange);
        _$input.click(_showSearch);
        _$input.blur(_hideSearch);
        _$input.keydown(_onKeyUp);
        _$buttonSearch.click(_showSearch);
        _$buttonSearch.click(_onSearch);

        _$inPageInput.keydown(_onKeyUp);
        _$inPageButtonSearch.click(_onSearch);
        _$inPageExpandResultButton.click(_showAllResults);


        /*inits*/
        _resetLayout(layout);
    };

    function _showSearch()
    {
        _$container.addClass(_activeClassName);
        _$input.select();
        return false;
    };

    function _hideSearch()
    {
        _$container.removeClass(_activeClassName);
        return false;
    };

    function _onKeyUp(e)
    {
        var $this = jQuery(this);

        if (e.keyCode == 13)
        {
            var text = $this.val();
            if (text == "")
            {
                return;
            }
            var baseUrl = _getSearchUrl($this);
            var targetUrl = baseUrl.split("{0}").join(encodeURI(text));
            document.location = targetUrl;
        }
        return;
    };



    function _onSearch()
    {
        var $this = jQuery(this);
        var $input = jQuery(jQuery($this.parents(".searchBox")[0]).find("input"));
        var text = $input.val();
        if (text == "")
        {
            return;
        }
        var baseUrl = _getSearchUrl($this);
        var targetUrl = baseUrl.split("{0}").join(encodeURI(text));
        document.location = targetUrl;
        return false;
    };

    function _getSearchUrl($element)
    {
        var baseUrl = _$input.attr("rel");
        if ($element.parents(_inPageContainerSelector).length > 0)
        {
            baseUrl = _$inPageInput.attr("rel");
        }
        var pageLocation = document.location + "";
        var arrUrl = baseUrl.split("/");
        pageLocation = pageLocation.substring(0, pageLocation.indexOf("/" + arrUrl[0] + "/")) + "/";
        baseUrl = pageLocation + baseUrl;
        return baseUrl;
    };

    function _showAllResults()
    {
        var $this = jQuery(this);
        $this.hide();
        _$inPageResultContent.css({ height: "auto" });
        return false;
    }

    function _resetLayout(layout)
    {
        _$container.removeClass(_activeClassName);
    };

    this.resize = function (currentLayout)
    {
        return;
    };

    this.layoutChange = function (currentLayout)
    {
        if (_currentLayout == null || _currentLayout.Id == currentLayout.Id)
            return;
        _currentLayout = currentLayout;
        _resetLayout(currentLayout);
        return;
    };
};

AcerUi.GoTop = function ()
{
    var that = this;
    var _currentLayout = null;
    var _btnGoTopSelector = "a.go-top";
    var _$btnGoTop = null;

    this.init = function (layout)
    {
        _currentLayout = layout;

        _$btnGoTop = jQuery(_btnGoTopSelector);

        /*events*/
        AcerUi.addChangeLayoutListener(that.layoutChange);
        _$btnGoTop.click(_goTop);

        /*inits*/
        _resetLayout(layout);
    };

    function _goTop()
    {
        var pageUrl = document.location.href + "";
        var topUrl = document.location.href.split(document.location.hash).join("") + "#top";
        _$btnGoTop.attr("href", topUrl);
        return true;
    };

    function _resetLayout(layout)
    {
        return;
    };

    this.resize = function (currentLayout)
    {
        return;
    };

    this.layoutChange = function (currentLayout)
    {
        if (_currentLayout == null || _currentLayout.Id == currentLayout.Id)
            return;
        _currentLayout = currentLayout;
        return;
    };
};

AcerUi.SocialShare = function ()
{
    var that = this;
    var _currentLayout = null;

    var _buttonsSelector = "a.facebook, a.twitter, a.googleplus, a.weibo";
    var _$buttons = null;

    this.init = function (layout)
    {
        _currentLayout = layout;
        _$buttons = jQuery(_buttonsSelector);

        /*events*/
        _$buttons.click(_onShare);
        AcerUi.addChangeLayoutListener(that.layoutChange);
    };

    function _onShare()
    {
        var $this = jQuery(this);
        var pageUrl = encodeURI(document.location);
        var pageTitle = encodeURI(jQuery("head > title").text());
        var shareUrl = "";
        if ($this.hasClass("facebook"))
        {
            shareUrl = "http://www.facebook.com/sharer.php?u=" + pageUrl;
        }
        if ($this.hasClass("twitter"))
        {
            shareUrl = "http://twitter.com/home?status=" + pageTitle + " " + pageUrl;
        }
        if ($this.hasClass("googleplus"))
        {
            shareUrl = "https://plus.google.com/share?url=" + pageUrl;
        }
        if ($this.hasClass("weibo"))
        {
            shareUrl = "http://service.weibo.com/share/share.php?url=" + pageUrl + "&appkey=" + pageTitle;
        }
        if (shareUrl != "") window.open(shareUrl);
        return false;
    };

    this.resize = function (currentLayout)
    {
        return;
    };

    this.layoutChange = function (currentLayout)
    {
        if (_currentLayout == null || _currentLayout.Id == currentLayout.Id)
            return;
        _currentLayout = currentLayout;
    };
};

AcerUi.SocialRss = function ()
{
    var that = this;
    var _currentLayout = null;

    var _containerSelector = ".socialFooter .fecebook-post"
    var _$container = null;

    var _textPlaceHolderSelector = "p";
    var _$textPlaceHolder = null;

    var _titleLinkSelector = "h2 a";
    var _$titleLink = null;

    var _rssSource = "";

    this.init = function (layout)
    {
        _currentLayout = layout;

        /*Container check*/
        _$container = jQuery(_containerSelector);
        if (_$container.length == 0)
            return;

        _$container = jQuery(_$container[0]);
        _$textPlaceHolder = jQuery(_$container.find(_textPlaceHolderSelector));
        _$titleLink = jQuery(_$container.find(_titleLinkSelector));

        _rssSource = _$container.attr("rel");

        /*events*/
        AcerUi.addChangeLayoutListener(that.layoutChange);
        _$titleLink.click(_gotoFacebook);

        _readFeed();
    };

    function _gotoFacebook()
    {
        var $this = jQuery(this);
        var $link = jQuery(jQuery($this.parents(".fecebook-post")[0]).find("p a")[0]);
        if ($link.length > 0)
        {
            window.open($link.attr("href"));
        }
        return false;
    };

    function _readFeed()
    {
        if (_rssSource == "")
        {
            return;
        }
        _$textPlaceHolder.rss(_rssSource, { limit: 1, effect: "show" });
    }

    this.resize = function (currentLayout)
    {
        return;
    };

    this.layoutChange = function (currentLayout)
    {
        if (_currentLayout == null || _currentLayout.Id == currentLayout.Id)
            return;
        _currentLayout = currentLayout;
    };
};

AcerUi.RandomizeContent = function ()
{
    var that = this;
    var _currentLayout = null;

    var _containerSelector = ".randomizer"
    var _$containers = null;

    var _randomizeItemSelector = "> div";
    var _itemsToShowNumberAttributeName = "data-items";

    this.init = function (layout)
    {
        _currentLayout = layout;

        /*Container check*/
        _$containers = jQuery(_containerSelector);
        if (_$containers.length == 0)
            return;

        /*events*/
        AcerUi.addChangeLayoutListener(that.layoutChange);

        _randomize();
    };

    function _randomize()
    {
        for (var i = 0; i < _$containers.length; i++)
        {
            var $container = jQuery(_$containers[i]);
            var $items = jQuery($container.find(_randomizeItemSelector));
            var itemsToShow = parseInt($container.attr(_itemsToShowNumberAttributeName), 10);
            itemsToShow = isNaN(itemsToShow) ? 1 : itemsToShow;
            $items.hide();

            if ($items.length <= itemsToShow)
            {
                $items.show();
                return;
            }
            var rnd = Math.floor(Math.random() * ($items.length));
            var showNdx = [rnd];
            while (showNdx.length <= itemsToShow)
            {
                jQuery($items.get(rnd)).show();
                rnd++;
                rnd > $items.length - 1 ? rnd = 0 : rnd;
                showNdx.push(rnd);
            }
        }
    };

    this.resize = function (currentLayout)
    {
        return;
    };

    this.layoutChange = function (currentLayout)
    {
        if (_currentLayout == null || _currentLayout.Id == currentLayout.Id)
            return;
        _currentLayout = currentLayout;
    };
};

AcerUi.NewsList = function ()
{
    var that = this;
    var _currentLayout = null;

    var _elementsInPage = 8;

    var _containerSelector = ".news";
    var _$container = null;

    var _newsSelector = ".text-content";
    var _$news = null;

    var _expandResultButtonContainerSelector = ".more-element";
    var _$expandResultButtonContainer = null;

    var _expandResultButtonSelector = ".more-element a";
    var _$expandResultButton = null;

    this.init = function (layout)
    {
        _currentLayout = layout;

        /*Container check*/
        _$container = jQuery(_containerSelector);

        _$news = jQuery(_$container.find(_newsSelector));
        _$expandResultButtonContainer = jQuery(_$container.find(_expandResultButtonContainerSelector));
        _$expandResultButton = jQuery(_$container.find(_expandResultButtonSelector));

        /*events*/
        jQuery(document).scroll(_onScroll);
        AcerUi.addChangeLayoutListener(that.layoutChange);
        _$expandResultButton.click(_showMoreElements);
        /*inits*/
        _resetLayout(layout);
    };

    function _showMoreElements()
    {
        var $hiddenElements = jQuery(_$news.filter(":hidden"));
        var itemsToShow = Math.min(_elementsInPage, $hiddenElements.length);
        for (var i = 0; i < itemsToShow; i++)
        {
            jQuery($hiddenElements.get(i)).show();
        }

        if (itemsToShow >= $hiddenElements.length)
        {
            _$expandResultButtonContainer.hide();
        }
        else
        {
            _$expandResultButtonContainer.show();
        }
        return false;
    };

    function _onScroll()
    {
        var pageScroll = jQuery(window).scrollTop();
        var windowHeight = jQuery(window).height();

        if (pageScroll + windowHeight > _$container.outerHeight() + 350 && _$expandResultButton.is(":visible"))
        {
            _$expandResultButton.click();
        }
    };

    function _resetLayout(layout)
    {
        _$news.hide();
        _showMoreElements();
    };

    this.resize = function (currentLayout)
    {
        return;
    };

    this.layoutChange = function (currentLayout)
    {
        if (_currentLayout == null || _currentLayout.Id == currentLayout.Id)
            return;
        _currentLayout = currentLayout;
        _resetLayout(currentLayout);
        return;
    };
};

AcerUi.MultipleContentBox = function ()
{
    var that = this;
    var activeClassName = "active";
    var panelAutoslideTime = 5000;
    var _currentLayout = null;

    var _containerSelector = ".multipleContentBox";
    var _$container = null;

    var _itemsSelector = ".item";
    var _$items = null;

    var _selectorsSelector = ".selector a";
    var _$selectors = null;

    var _timeLinesSelector = ".selector a span";
    var _$timeLines = null;


    var _timeLineTimer = null;

    this.init = function (layout)
    {
        _currentLayout = layout;

        /*Container check*/
        _$container = jQuery(_containerSelector);
        _$items = jQuery(_$container.find(_itemsSelector));
        _$selectors = jQuery(_$container.find(_selectorsSelector));
        _$timeLines = jQuery(_$container.find(_timeLinesSelector));

        //events
        AcerUi.addChangeLayoutListener(that.layoutChange);
        _$selectors.click(_changeContent);
        /*inits*/
        _resetLayout(layout);
    };

    function _changeContent(e)
    {
        if (e) e.preventDefault();
        var $this = jQuery(this);

        _stopTimeLines();
        _$selectors.removeClass(activeClassName);
        $this.addClass(activeClassName);

        var $panelToHide = jQuery(_$items.filter(":visible"));
        var panelToShowIndex = _$selectors.index($this);
        var $panelToshow = jQuery(_$items.get(panelToShowIndex));
        _startTimeLine(panelToShowIndex);
        $panelToHide.hide();
        $panelToshow.show();
    };

    function _resetLayout(layout)
    {
        _$items.hide();
        jQuery(_$items.get(0)).show();
        _$selectors.removeClass(activeClassName);
        jQuery(_$selectors.get(0)).addClass(activeClassName);
        _$timeLines.width(0);
        _startTimeLine(0);
    };

    function _nextStep()
    {
        var $panelToHide = jQuery(_$items.filter(":visible"));
        var panelToHideIndex = _$items.index($panelToHide) + 1;
        panelToHideIndex = panelToHideIndex >= _$items.length ? 0 : panelToHideIndex;
        _$selectors.get(panelToHideIndex).click();
    };

    function _startTimeLine(ndx)
    {
        _stopTimeLines();
        var $timeLine = jQuery(_$timeLines.get(ndx));
        $timeLine.animate({ "width": "100%" }, panelAutoslideTime, function ()
        {
            _nextStep();
        });
    };

    function _stopTimeLines()
    {
        _$timeLines.stop(false, false).width(0);
    };

    this.resize = function (currentLayout)
    {
        return;
    };

    this.layoutChange = function (currentLayout)
    {
        if (_currentLayout == null || _currentLayout.Id == currentLayout.Id)
            return;
        _currentLayout = currentLayout;
        _resetLayout(currentLayout);
        return;
    };
};

AcerUi.SimpleItemSlider = function (layout, $container)
{
    var that = this;
    var _$mainContainer = $container;
    var _$prevButton = null;
    var _$nextButton = null;
    var _$scrollMask = null;
    var _$itemsContainer = null;
    var _$items = null;
    var _currentLayout = layout;
    var _hasAnimation = false;
    var _activeClassName = "active";

    this.init = function ()
    {
        if (_$mainContainer + "" == "undefined")
        {
            _$mainContainer = $(".ctnSimpleSliderMainContainer");
        }
        _$prevButton = jQuery(_$mainContainer.find(".btnSimpleSliderPrevButton"));
        _$nextButton = jQuery(_$mainContainer.find(".btnSimpleSliderNextButton"));
        _$scrollMask = jQuery(_$mainContainer.find(".ctnSimpleSliderScrollMask"));
        _$itemsContainer = jQuery(_$mainContainer.find(".ctnSimpleSliderItemsContainer"));
        _$items = jQuery(_$itemsContainer.find(".ctnSimpleSliderItem"));

        //events
        AcerUi.addChangeLayoutListener(that.layoutChange);
        _$prevButton.click(_slidePrev);
        _$nextButton.click(_slideNext);
        _$items.find(".btnSimpleSliderItem").click(_selectItemEvent);

        _initLayout(layout);

    };

    function _initLayout(layout)
    {
        _resetLayout(layout);
        _$items.removeClass(_activeClassName);
        jQuery(_$items.get(0)).addClass(_activeClassName);
    };

    function _resetLayout(layout)
    {
        _$prevButton.hide();
        _$nextButton.hide();
        var currentMaskWidth = parseInt(_$scrollMask.width(), 10);
        var currentMenuWidth = parseInt(jQuery(_$items[0]).outerWidth(), 10) * _$items.length;
        _$itemsContainer.width(currentMenuWidth);
        _$itemsContainer.css("left", 0);
        if (currentMaskWidth < currentMenuWidth)
        {
            _$nextButton.show();
        }
    };

    function _selectItemEvent(e)
    {
        if (e) e.preventDefault();
        _$items.removeClass(_activeClassName);
        jQuery(jQuery(this).parents(".ctnSimpleSliderItem").get(0)).addClass(_activeClassName);
    };

    function _slideNext()
    {
        _slide("next");
        return false;
    };

    function _slidePrev()
    {
        _slide("prev");
        return false;
    };

    function _slide(toward)
    {
        if (_hasAnimation)
            return;

        _hasAnimation = true;

        var maskWidth = parseInt(_$scrollMask.outerWidth(), 10);
        var menuItemWidth = jQuery(_$items[0]).outerWidth();
        var slideItems = Math.round(maskWidth / menuItemWidth);
        var slideDimension = menuItemWidth * slideItems;
        var currentLeft = _$itemsContainer.position().left;
        var mainMenuContainerWidth = _$itemsContainer.outerWidth();

        var newLeft = 0;
        if (toward == "next")
            newLeft = currentLeft - slideDimension;
        if (toward == "prev")
            newLeft = currentLeft + slideDimension;

        _$itemsContainer.animate({ left: newLeft }, "slow", function ()
        {
            _$prevButton.hide();
            if (newLeft < 0)
            {
                _$prevButton.show();
            }
            _$nextButton.hide();
            if ((mainMenuContainerWidth - Math.abs(newLeft)) > (maskWidth + (menuItemWidth / 2)))
            {
                _$nextButton.show();
            }
            _hasAnimation = false;
        });
        return false;
    };

    this.setActiveItem = function (ndx)
    {
        _$items.removeClass(_activeClassName);
        jQuery(_$items.get(ndx)).addClass(_activeClassName);
    };

    this.resize = function ()
    {
        return;
    };

    this.layoutChange = function (currentLayout, prevLayout)
    {

        if (_currentLayout == null || _currentLayout.Id == currentLayout.Id)
            return;
        _currentLayout = currentLayout;
        _resetLayout(currentLayout);
        return;
    };
    this.init();
};

/**************************************************************************************************************************************************************\
SERVICES
\**************************************************************************************************************************************************************/

//SERVICES
AcerUi.Services = {};

//AcerConfig
AcerUi.Services.baseRightNowServiceUrl = "http://www.acer.com/wjws/ws/rightnowkf/";
AcerUi.Services.externalRightNowPageParamsFormat = "{searchTerm};{rnProductId};{group};{category};{serialNumber}";
AcerUi.Services.paramsRightNowServiceUrl = "{language}/{country}/{limit}/{searchTerm}/{rnProductId}/{group}/{category}?_jsonp=";
AcerUi.Services.baseGDPServiceUrl = "http://www.acer.com/wjws/ws/gdp/";
AcerUi.Services.baseSerialNumberServiceUrlFormat = AcerUi.Services.baseGDPServiceUrl + "sn/{language}/{country}/{serialNumber}?_jsonp=";
AcerUi.Services.externalGdpPageParamsFormat = "{rnProductId};{serialNumber};{modelName}";

AcerUi.Services.baseCategoryServiceUrlFormat = AcerUi.Services.baseRightNowServiceUrl + "categories/{language}/{country}?_jsonp=";
AcerUi.Services.baseFamiliesServiceUrlFormat = AcerUi.Services.baseGDPServiceUrl + "families/{language}/{country}?_jsonp=";
AcerUi.Services.baseLinesServiceUrlFormat = AcerUi.Services.baseGDPServiceUrl + "lines/{language}/{country}/{familyId}?_jsonp=";
AcerUi.Services.baseModelsServiceUrlFormat = AcerUi.Services.baseGDPServiceUrl + "models/{language}/{country}/{lineId}?_jsonp=";
AcerUi.Services.baseInfoServiceUrlFormat = AcerUi.Services.baseGDPServiceUrl + "info/{language}/{country}/{modelId}?_jsonp=";
AcerUi.Services.basePlmModelUrlFormat = AcerUi.Services.baseGDPServiceUrl + "plmmodel/{language}/{country}/{modelId}?_jsonp=";
AcerUi.Services.baseFilesDataUrlFormat = AcerUi.Services.baseGDPServiceUrl + "files/{language}/{country}/{os}/{limit}/{type}/{modelId}?_jsonp=";
AcerUi.Services.baseModelSuggestionsUrlFormat = AcerUi.Services.baseGDPServiceUrl + "modelname/{language}/{country}/{searchText}?_jsonp=";

//Common config
AcerUi.Services.resultOkValue = "OK";
AcerUi.Services.noParamValue = "-";
AcerUi.Services.moreAnswerUrlFormat = "http://acer.it/{language}/{country}/{limit}/{searchTerm}/{rnProductId}/{group}/{category}";

AcerUi.Services.getParametrizedRightNowUri = function (uriFormat, language, country, limit, searchTerm, rnProductId, group, category, serialNumber, isExternalUrl)
{
    var serviceParamsUrl = uriFormat;
    serviceParamsUrl = serviceParamsUrl.split("{language}").join(AcerUi.Services.normalizeUrlValue(language, isExternalUrl));
    serviceParamsUrl = serviceParamsUrl.split("{country}").join(AcerUi.Services.normalizeUrlValue(country, isExternalUrl));
    serviceParamsUrl = serviceParamsUrl.split("{limit}").join(AcerUi.Services.normalizeUrlValue(limit, isExternalUrl));
    serviceParamsUrl = serviceParamsUrl.split("{searchTerm}").join(AcerUi.Services.normalizeUrlValue(searchTerm, isExternalUrl));
    serviceParamsUrl = serviceParamsUrl.split("{rnProductId}").join(AcerUi.Services.normalizeUrlValue(rnProductId, isExternalUrl));
    serviceParamsUrl = serviceParamsUrl.split("{group}").join(AcerUi.Services.normalizeUrlValue(group, isExternalUrl));
    serviceParamsUrl = serviceParamsUrl.split("{category}").join(AcerUi.Services.normalizeUrlValue(category, isExternalUrl));
    serviceParamsUrl = serviceParamsUrl.split("{serialNumber}").join(AcerUi.Services.normalizeUrlValue(serialNumber, isExternalUrl));
    return serviceParamsUrl;
};

AcerUi.Services.getParametrizedGdpUri = function (uriFormat, language, country, rnProductId, serialNumber, modelName, isExternalUrl)
{
    var serviceParamsUrl = uriFormat;
    serviceParamsUrl = serviceParamsUrl.split("{language}").join(AcerUi.Services.normalizeUrlValue(language, isExternalUrl));
    serviceParamsUrl = serviceParamsUrl.split("{country}").join(AcerUi.Services.normalizeUrlValue(country, isExternalUrl));
    serviceParamsUrl = serviceParamsUrl.split("{rnProductId}").join(AcerUi.Services.normalizeUrlValue(rnProductId, isExternalUrl));
    serviceParamsUrl = serviceParamsUrl.split("{serialNumber}").join(AcerUi.Services.normalizeUrlValue(serialNumber, isExternalUrl));
    serviceParamsUrl = serviceParamsUrl.split("{modelName}").join(AcerUi.Services.normalizeUrlValue(modelName, isExternalUrl));
    return serviceParamsUrl;
};

AcerUi.Services.getRightNowRequestParams = function ()
{
    var params = AcerUi.Services.externalRightNowPageParamsFormat.split("{").join("").split("}").join("").split(";");
    var pageUrl = document.location + "";
    if (pageUrl.indexOf("#") != -1) pageUrl = pageUrl.substr(0, pageUrl.indexOf("#"));
    if (pageUrl.indexOf(";") == -1) { pageUrl += "/"; }
    urlParams = pageUrl.substr(pageUrl.lastIndexOf("/") + 1).split(";");
    var request = [];
    for (var i = 0; i < params.length; i++)
    {
        var paramName = params[i];
        if (paramName == "")
        {
            continue;
        }
        var paramValue = i < urlParams.length ? (urlParams[i] == AcerUi.Services.noParamValue ? "" : urlParams[i]) : "";
        request[paramName] = decodeURIComponent(paramValue);
    }
    return request;
};

AcerUi.Services.getGdpRequestParams = function ()
{
    var params = AcerUi.Services.externalGdpPageParamsFormat.split("{").join("").split("}").join("").split(";");
    var pageUrl = document.location + "";
    if (pageUrl.indexOf("#") != -1) pageUrl = pageUrl.substr(0, pageUrl.indexOf("#"));
    if (pageUrl.indexOf(";") == -1) { pageUrl += "/"; }
    urlParams = pageUrl.substr(pageUrl.lastIndexOf("/") + 1).split(";");
    var request = [];
    for (var i = 0; i < params.length; i++)
    {
        var paramName = params[i];
        if (paramName == "")
        {
            continue;
        }
        var paramValue = i < urlParams.length ? (urlParams[i] == AcerUi.Services.noParamValue ? "" : urlParams[i]) : "";
        request[paramName] = decodeURIComponent(paramValue);
    }
    return request;
};

AcerUi.Services.callAnswersServices = function (requestId, language, country, limit, searchTerm, rnProductId, group, category, callback, errorCallback)
{
    var tempJsonPCallBack = AcerUi.Services.getTempJsonPCallBack("Answers", requestId, callback);
    var serviceParamsUrl = AcerUi.Services.getParametrizedRightNowUri(AcerUi.Services.paramsRightNowServiceUrl, language, country, limit, searchTerm, rnProductId, group, category, "");
    var serviceUrl = AcerUi.Services.baseRightNowServiceUrl + serviceParamsUrl + tempJsonPCallBack;
    serviceUrl += "&t=" + AcerUi.Services.getNoCacheValue();
    var headScriptId = "AcerRightNowScript_" + requestId;
    AcerUi.Services.createServiceScript(headScriptId, serviceUrl, errorCallback);
};

AcerUi.Services.callSerialNumberServices = function (requestId, language, country, serialNumber, callback, errorCallback)
{
    var tempJsonPCallBack = AcerUi.Services.getTempJsonPCallBack("SerialNumber", requestId, callback);
    var serviceUrl = AcerUi.Services.baseSerialNumberServiceUrlFormat;
    serviceUrl = serviceUrl.split("{language}").join(AcerUi.Services.normalizeUrlValue(language));
    serviceUrl = serviceUrl.split("{country}").join(AcerUi.Services.normalizeUrlValue(country));
    serviceUrl = serviceUrl.split("{serialNumber}").join(AcerUi.Services.normalizeUrlValue(serialNumber));
    serviceUrl += tempJsonPCallBack;
    serviceUrl += "&t=" + AcerUi.Services.getNoCacheValue();
    var headScriptId = "AcerSerialNumberScript_" + requestId;
    AcerUi.Services.createServiceScript(headScriptId, serviceUrl, errorCallback);
};

AcerUi.Services.callCategoriesServices = function (requestId, language, country, callback, errorCallback)
{
    var tempJsonPCallBack = AcerUi.Services.getTempJsonPCallBack("Categories", requestId, callback);
    var serviceUrl = AcerUi.Services.baseCategoryServiceUrlFormat;
    serviceUrl = serviceUrl.split("{language}").join(AcerUi.Services.normalizeUrlValue(language));
    serviceUrl = serviceUrl.split("{country}").join(AcerUi.Services.normalizeUrlValue(country));
    serviceUrl += tempJsonPCallBack;
    serviceUrl += "&t=" + AcerUi.Services.getNoCacheValue();
    var headScriptId = "AcerCategoriesScript_" + requestId;
    AcerUi.Services.createServiceScript(headScriptId, serviceUrl, errorCallback);
};

AcerUi.Services.callFamiliesServices = function (requestId, language, country, callback, errorCallback)
{
    var tempJsonPCallBack = AcerUi.Services.getTempJsonPCallBack("Families", requestId, callback);
    var serviceUrl = AcerUi.Services.baseFamiliesServiceUrlFormat;
    serviceUrl = serviceUrl.split("{language}").join(AcerUi.Services.normalizeUrlValue(language));
    serviceUrl = serviceUrl.split("{country}").join(AcerUi.Services.normalizeUrlValue(country));
    serviceUrl += tempJsonPCallBack;
    serviceUrl += "&t=" + AcerUi.Services.getNoCacheValue();
    var headScriptId = "AcerFamiliesScript_" + requestId;
    AcerUi.Services.createServiceScript(headScriptId, serviceUrl, errorCallback);
};

AcerUi.Services.callLinesServices = function (requestId, language, country, familyId, callback, errorCallback)
{
    var tempJsonPCallBack = AcerUi.Services.getTempJsonPCallBack("Lines", requestId, callback);
    var serviceUrl = AcerUi.Services.baseLinesServiceUrlFormat;
    serviceUrl = serviceUrl.split("{language}").join(AcerUi.Services.normalizeUrlValue(language));
    serviceUrl = serviceUrl.split("{country}").join(AcerUi.Services.normalizeUrlValue(country));
    serviceUrl = serviceUrl.split("{familyId}").join(AcerUi.Services.normalizeUrlValue(familyId));
    serviceUrl += tempJsonPCallBack;
    serviceUrl += "&t=" + AcerUi.Services.getNoCacheValue();
    var headScriptId = "AcerLinesScript_" + requestId;
    AcerUi.Services.createServiceScript(headScriptId, serviceUrl, errorCallback);
};

AcerUi.Services.callModelsServices = function (requestId, language, country, lineId, callback, errorCallback)
{
    var tempJsonPCallBack = AcerUi.Services.getTempJsonPCallBack("Models", requestId, callback);
    var serviceUrl = AcerUi.Services.baseModelsServiceUrlFormat;
    serviceUrl = serviceUrl.split("{language}").join(AcerUi.Services.normalizeUrlValue(language));
    serviceUrl = serviceUrl.split("{country}").join(AcerUi.Services.normalizeUrlValue(country));
    serviceUrl = serviceUrl.split("{lineId}").join(AcerUi.Services.normalizeUrlValue(lineId));
    serviceUrl += tempJsonPCallBack;
    serviceUrl += "&t=" + AcerUi.Services.getNoCacheValue();
    var headScriptId = "AcerModelsScript_" + requestId;
    AcerUi.Services.createServiceScript(headScriptId, serviceUrl, errorCallback);
};

AcerUi.Services.callInfoServices = function (requestId, language, country, modelId, callback, errorCallback)
{
    var tempJsonPCallBack = AcerUi.Services.getTempJsonPCallBack("Info", requestId, callback);
    var serviceUrl = AcerUi.Services.baseInfoServiceUrlFormat;
    serviceUrl = serviceUrl.split("{language}").join(AcerUi.Services.normalizeUrlValue(language));
    serviceUrl = serviceUrl.split("{country}").join(AcerUi.Services.normalizeUrlValue(country));
    serviceUrl = serviceUrl.split("{modelId}").join(AcerUi.Services.normalizeUrlValue(modelId));
    serviceUrl += tempJsonPCallBack;
    serviceUrl += "&t=" + AcerUi.Services.getNoCacheValue();
    var headScriptId = "AcerInfoScript_" + requestId;
    AcerUi.Services.createServiceScript(headScriptId, serviceUrl, errorCallback);
};

AcerUi.Services.callPlmModelServices = function (requestId, language, country, modelId, callback, errorCallback)
{
    var tempJsonPCallBack = AcerUi.Services.getTempJsonPCallBack("PlmModel", requestId, callback);
    var serviceUrl = AcerUi.Services.basePlmModelUrlFormat;
    serviceUrl = serviceUrl.split("{language}").join(AcerUi.Services.normalizeUrlValue(language));
    serviceUrl = serviceUrl.split("{country}").join(AcerUi.Services.normalizeUrlValue(country));
    serviceUrl = serviceUrl.split("{modelId}").join(AcerUi.Services.normalizeUrlValue(modelId));
    serviceUrl += tempJsonPCallBack;
    serviceUrl += "&t=" + AcerUi.Services.getNoCacheValue();
    var headScriptId = "AcerPlmModelScript_" + requestId;
    AcerUi.Services.createServiceScript(headScriptId, serviceUrl, errorCallback);
};

AcerUi.Services.callFilesDataServices = function (requestId, language, country, os, limit, type, modelId, callback, errorCallback)
{
    var tempJsonPCallBack = AcerUi.Services.getTempJsonPCallBack("FilesData", requestId, callback);
    var serviceUrl = AcerUi.Services.baseFilesDataUrlFormat;
    serviceUrl = serviceUrl.split("{language}").join(AcerUi.Services.normalizeUrlValue(language));
    serviceUrl = serviceUrl.split("{country}").join(AcerUi.Services.normalizeUrlValue(country));
    serviceUrl = serviceUrl.split("{os}").join(AcerUi.Services.normalizeUrlValue(os));
    serviceUrl = serviceUrl.split("{limit}").join(AcerUi.Services.normalizeUrlValue(limit));
    serviceUrl = serviceUrl.split("{type}").join(AcerUi.Services.normalizeUrlValue(type));
    serviceUrl = serviceUrl.split("{modelId}").join(AcerUi.Services.normalizeUrlValue(modelId));
    serviceUrl += tempJsonPCallBack;
    serviceUrl += "&t=" + AcerUi.Services.getNoCacheValue();
    var headScriptId = "AcerFilesDataScript_" + requestId;
    AcerUi.Services.createServiceScript(headScriptId, serviceUrl, errorCallback);
};

AcerUi.Services.callModelNameSuggestionsServices = function (requestId, language, country, searchText, callback, errorCallback)
{
    var tempJsonPCallBack = AcerUi.Services.getTempJsonPCallBack("ModelNameSuggestions", requestId, callback);
    var serviceUrl = AcerUi.Services.baseModelSuggestionsUrlFormat;
    serviceUrl = serviceUrl.split("{language}").join(AcerUi.Services.normalizeUrlValue(language));
    serviceUrl = serviceUrl.split("{country}").join(AcerUi.Services.normalizeUrlValue(country));
    serviceUrl = serviceUrl.split("{searchText}").join(AcerUi.Services.normalizeUrlValue(searchText));
    serviceUrl += tempJsonPCallBack;
    serviceUrl += "&t=" + AcerUi.Services.getNoCacheValue();
    var headScriptId = "AcerModelNameSuggestionsScript_" + requestId;
    AcerUi.Services.createServiceScript(headScriptId, serviceUrl, errorCallback);
};

AcerUi.Services.createServiceScript = function (headScriptId, serviceUrl, errorCallback)
{
    var pageHead = document.getElementsByTagName("head")[0];
    var preScript = document.getElementById(headScriptId);
    if (preScript != null && preScript + "" != "undefined")
    {
        pageHead.removeChild(preScript);
    }
    var fileref = document.createElement("script");
    fileref.setAttribute("id", headScriptId);
    fileref.setAttribute("type", "text/javascript");
    if (errorCallback) { fileref.onerror = errorCallback; };
    fileref.setAttribute("src", serviceUrl);
    try
    {
        pageHead.appendChild(fileref);
    }
    catch (e)
    {
        if (errorCallback) { errorCallback(); };
    }
};

AcerUi.Services.normalizeUrlValue = function (paramValue, isExternalUrl)
{
    return paramValue == "" ? AcerUi.Services.noParamValue : (isExternalUrl === true ? encodeURIComponent(paramValue) : unescape(encodeURIComponent(paramValue)));
};

AcerUi.Services.getTempJsonPCallBack = function (serviceName, requestId, callback)
{
    var tempCallBackName = serviceName + "ServiceCallBack_" + requestId;
    window[tempCallBackName] = callback;
    return tempCallBackName;
};

AcerUi.Services.isAnswerServiceData = function (data)
{
    return (data && data.Answers && data.Answers.Result && data.Answers.Result == AcerUi.Services.resultOkValue) === true;
};

AcerUi.Services.isSerialNumberServiceData = function (data)
{
    return (data && data.SN && data.SN.Result && data.SN.Result == AcerUi.Services.resultOkValue) === true;
};

AcerUi.Services.isCategoriesServiceData = function (data)
{
    return (data && data.Categories && data.Categories.Result && data.Categories.Result == AcerUi.Services.resultOkValue) === true;
};

AcerUi.Services.isFamiliesServiceData = function (data)
{
    return (data && data.Families && data.Families.Result && data.Families.Result == AcerUi.Services.resultOkValue) === true;
};

AcerUi.Services.isLinesServiceData = function (data)
{
    return (data && data.Lines && data.Lines.Result && data.Lines.Result == AcerUi.Services.resultOkValue) === true;
};

AcerUi.Services.isModelsServiceData = function (data)
{
    return (data && data.Models && data.Models.Result && data.Models.Result == AcerUi.Services.resultOkValue) === true;
};

AcerUi.Services.isInfoServiceData = function (data)
{
    return (data && data.Info && data.Info.Result && data.Info.Result == AcerUi.Services.resultOkValue) === true;
};

AcerUi.Services.isPlmModelServiceData = function (data)
{
    return (data && data.PLMModel && data.PLMModel.Result && data.PLMModel.Result == AcerUi.Services.resultOkValue) === true;
};

AcerUi.Services.isFilesDataServiceData = function (data)
{
    return (data && data.Files && data.Files.Result && data.Files.Result == AcerUi.Services.resultOkValue) === true;
};

AcerUi.Services.isModelNameSuggestionsServiceData = function (data)
{
    return (data && data.Models && data.Models.Result && data.Models.Result == AcerUi.Services.resultOkValue) === true;
};

AcerUi.Services.getNoCacheValue = function ()
{
    return "0";
    //return (new Date()).getTime();
};

/**************************************************************************************************************************************************************\
SERVICES
\**************************************************************************************************************************************************************/

AcerUi.RightNow = function ()
{
    var that = this;
    var _currentLayout = null;

    this.init = function (layout)
    {
        _currentLayout = layout;
        var $rightNowMainContainers = jQuery(".ctnRightNowMainContainer");
        for (var i = 0; i < $rightNowMainContainers.length; i++)
        {
            var newRN = new rightNow(jQuery($rightNowMainContainers[i]));
            newRN.init(_currentLayout);
        };
    };

    rightNow = function ($rightNowContainer)
    {
        var self = this;
        var _currentLayout = null;
        var _showFilter = true;
        var _id = "RN"; //jQuery.guid();
        var _$rightNowContainer = $rightNowContainer;

        var _$ctnRightNowSearchPanel = null;
        var _$ctnRightNowMainLoadingPanel = null;

        var _$productGroupSelectors = null;
        var _$answersContainer = null;
        var _$answersItemsContainer = null;
        var _$btnRightNowMoreAnswers = null;

        var _$ctnRightNowSerialNumberSearch = null;
        var _$btnRightNowSearchBySerialNumber = null;
        var _$fldRightNowSerialNumber = null;

        var _$ctnRightNowSearchTermAndCategorySearch = null;
        var _$fldRightNowSearchTerm = null;
        var _$fldRightNowCategory = null;
        var _$fldRightNowCategoryTree = null;
        var _$btnRightNowSearchBySearchTermAndCategory = null;

        var _$ctnRightNowProductTreeSearch = null;

        var _$ctnRightNowResultFilters = null;
        var _$fldRightNowSearchTermFilter = null;
        var _$fldRightNowCategoryFilter = null;
        var _$btnRightNowFilterResult = null;

        var _$ctnRightNowAnswersLoading = null;
        var _$ctnRightNowNoAnswers = null;
        var _$ctnRightNowErrorMessage = null;

        var _$fldRightNowProductFamily = null;
        var _$fldRightNowProductLine = null;
        var _$fldRightNowProductModel = null;

        var _$lblCurrentSearch = null;
        var _lblCurrentSearchDefaultValue = null;

        var _$ctnRightNowSearchPanelForm = null;
        var _$btnRightNowSearchPanelToggle = null;

        var _$ctnRightNowOptionPanelMask = null;
        var _$ctnRightNowOptionPanel = null;
        var _$btnRightNowOptionUp = null;
        var _$btnRightNowOptionDown = null;

        var _$ctnRightNowMobileSerchPanelSelector = null;
        var _$btnRightNowMobileSerchPanelSelector = null;

        var _itemTemplateHtml = null;

        var _embedded = false;
        var _baseUrl = "";
        var _baseExternalUrl = "";

        var _language = "";
        var _country = "";
        var _limit = "";

        var _searchTerm = "";
        var _rnProductId = "";
        var _serialNumber = "";
        var _group = "";
        var _category = "";

        var _categories = [];

        var _$productGroupSlider = null;

        this.init = function (layout)
        {
            _currentLayout = layout;

            //init params
            _baseUrl = jQuery(jQuery("base")[0]).attr("href") + "" != "undefined" ? jQuery(jQuery("base")[0]).attr("href") : "";
            _embedded = _$rightNowContainer.data("embedded") + "" == "true";
            _baseExternalUrl = $rightNowContainer.data("baseexternalurl");
            _language = _$rightNowContainer.data("language");
            _country = _$rightNowContainer.data("country");
            _limit = _$rightNowContainer.data("limit");

            //init objects
            _$ctnRightNowSearchPanel = jQuery(_$rightNowContainer.find(".ctnRightNowSearchPanel"));
            _$ctnRightNowMainLoadingPanel = jQuery(_$rightNowContainer.find(".ctnRightNowMainLoadingPanel"));

            _$productGroupSelectors = jQuery(_$rightNowContainer.find(".ctnRightNowProductGroups .btnRightNowSelectProductGroup"));
            _$answersContainer = jQuery(_$rightNowContainer.find(".ctnRightNowAnswersContainer"));
            _$answersItemsContainer = jQuery(_$rightNowContainer.find(".ctnRightNowAnswersItemsContainer"));
            _$btnRightNowMoreAnswers = jQuery(_$rightNowContainer.find(".btnRightNowMoreAnswers"));

            _$ctnRightNowSerialNumberSearch = jQuery(_$rightNowContainer.find(".ctnRightNowSerialNumberSearch"));
            _$btnRightNowSearchBySerialNumber = jQuery(_$rightNowContainer.find(".btnRightNowSearchBySerialNumber"));
            _$fldRightNowSerialNumber = jQuery(_$rightNowContainer.find("input[name='fldRightNowSerialNumber']"));

            _$ctnRightNowSearchTermAndCategorySearch = jQuery(_$rightNowContainer.find(".ctnRightNowSearchTermAndCategorySearch"));
            _$fldRightNowSearchTerm = jQuery(_$rightNowContainer.find("input[name='fldRightNowSearchTerm']"));
            _$fldRightNowCategory = jQuery(_$rightNowContainer.find("select[name='fldRightNowCategory']"));
            _$fldRightNowCategoryTree = jQuery(_$rightNowContainer.find(".fldRightNowCategoryTree"));
            _$btnRightNowSearchBySearchTermAndCategory = jQuery(_$rightNowContainer.find(".btnRightNowSearchBySearchTermAndCategory"));

            _$ctnRightNowProductTreeSearch = jQuery(_$rightNowContainer.find(".ctnRightNowProductTreeSearch"));

            _$ctnRightNowResultFilters = jQuery(_$rightNowContainer.find(".ctnRightNowResultFilters"));
            _$fldRightNowSearchTermFilter = jQuery(_$rightNowContainer.find("input[name='fldRightNowSearchTermFilter']"));
            _$fldRightNowCategoryFilter = jQuery(_$rightNowContainer.find("select[name='fldRightNowCategoryFilter']"));
            _$btnRightNowFilterResult = jQuery(_$rightNowContainer.find(".btnRightNowFilterResult"));

            _$ctnRightNowAnswersLoading = jQuery(_$rightNowContainer.find(".ctnRightNowAnswersLoading"));
            _$ctnRightNowNoAnswers = jQuery(_$rightNowContainer.find(".ctnRightNowNoAnswers"));
            _$ctnRightNowErrorMessage = jQuery(_$rightNowContainer.find(".ctnRightNowErrorMessage"));

            _$fldRightNowProductFamily = jQuery(_$rightNowContainer.find(".fldRightNowProductFamily"));
            _$fldRightNowProductLine = jQuery(_$rightNowContainer.find(".fldRightNowProductLine"));
            _$fldRightNowProductModel = jQuery(_$rightNowContainer.find(".fldRightNowProductModel"));

            _$lblCurrentSearch = jQuery(_$rightNowContainer.find(".lblCurrentSearch"));
            _lblCurrentSearchDefaultValue = _$lblCurrentSearch.data("defaultvalue");

            _$ctnRightNowSearchPanel = jQuery(_$rightNowContainer.find(".ctnRightNowSearchPanel")); ;
            _$ctnRightNowSearchPanelForm = jQuery(_$rightNowContainer.find(".ctnRightNowSearchPanelForm"));
            _$btnRightNowSearchPanelToggle = jQuery(_$rightNowContainer.find(".btnRightNowSearchPanelToggle"));

            _$ctnRightNowOptionPanelMask = jQuery(_$rightNowContainer.find(".ctnRightNowOptionPanelMask"));
            _$ctnRightNowOptionPanel = jQuery(_$rightNowContainer.find(".ctnRightNowOptionPanel"));
            _$btnRightNowOptionUp = jQuery(_$rightNowContainer.find(".btnRightNowOptionUp"));
            _$btnRightNowOptionDown = jQuery(_$rightNowContainer.find(".btnRightNowOptionDown"));

            _$ctnRightNowMobileSerchPanelSelector = jQuery(_$rightNowContainer.find(".ctnRightNowMobileSerchPanelSelector")); ;
            _$btnRightNowMobileSerchPanelSelector = jQuery(_$rightNowContainer.find(".btnRightNowMobileSerchPanelSelector")); ;

            //init sub objects
            _$productGroupSlider = new AcerUi.SimpleItemSlider(_currentLayout, _$rightNowContainer);

            //get template and remove it from DOM
            var $template = jQuery(_$rightNowContainer.find(".tplRightNowAnswer"));
            _itemTemplateHtml = $template.html() ? $template.html() + "" : "";
            $template.remove();

            //events
            _$productGroupSelectors.click(searchByGroupEvent);
            _$btnRightNowMoreAnswers.click(gotoMoreAnswersEvent);
            _$btnRightNowSearchBySerialNumber.click(searchBySerialNumberEvent);
            _$btnRightNowSearchBySearchTermAndCategory.click(searchBySearchTermAndCategoryEvent);
            _$btnRightNowFilterResult.click(filterResultEvent);
            _$btnRightNowSearchPanelToggle.click(rightNowSearchPanelToggleEvent);

            _$btnRightNowOptionUp.click(optionUpEvent);
            _$btnRightNowOptionDown.click(optionDownEvent);

            _$btnRightNowMobileSerchPanelSelector.click(changeSearchPanelEvent);

            _$fldRightNowSerialNumber.keydown(searchBySerialNumberKeyEvent);
            _$fldRightNowSearchTerm.keydown(searchBySearchTermAndCategoryKeyEvent);
            _$fldRightNowSearchTermFilter.keydown(filterResultKeyEvent);

            //register core events
            AcerUi.addResizeListener(self.resize);
            AcerUi.addChangeLayoutListener(self.layoutChange);

            //do first empty search
            _initLayout(_currentLayout);

            if (!_embedded)
            {
                loadData();
            }
            else
            {
                _$ctnRightNowSearchPanel.show();
                _$ctnRightNowMainLoadingPanel.hide();
                doSearch();
            }
        };

        //INIT LOAD DATA
        var _dataLoaded = 0;
        var _dataToLoad = 0;
        function notifyLoad()
        {
            _dataLoaded = _dataLoaded + 1;
            if (_dataLoaded == _dataToLoad)
            {
                _$ctnRightNowSearchPanel.show();
                _$ctnRightNowMainLoadingPanel.hide();
                onLoadData();
            }
        };

        function loadData()
        {
            _dataToLoad = 2;
            AcerUi.Services.callCategoriesServices(_id, _language, _country, onLoadCategories, onLoadCategoriesError);
            AcerUi.Services.callFamiliesServices(_id, _language, _country, onLoadFamilies, onLoadFamiliesError);
        };

        function onLoadData()
        {
            var request = AcerUi.Services.getRightNowRequestParams();
            var searchTerm = request.searchTerm ? request.searchTerm : "";
            var rnProductId = request.rnProductId ? request.rnProductId : "";
            var group = request.group ? request.group : "";
            var category = request.category ? request.category : "";
            var serialNumber = request.serialNumber ? request.serialNumber : "";

            if (serialNumber != "")
            {
                searchBySerialNumber(serialNumber);
                showRightNowSearchPanel(0);
                return;
            }

            if (searchTerm != "" || category != "")
            {
                searchBySearchTermAndCategory(searchTerm, category);
                showRightNowSearchPanel(1);
                return;
            }

            if (group != "")
            {
                searchBySearchTermAndCategory(group, category);
                showRightNowSearchPanel(1);
                return;
            }

            doSearch();
        };

        function onLoadCategories(data)
        {
            if (!AcerUi.Services.isCategoriesServiceData(data))
            {
                _setErrorMode();
                return;
            }
            var categories = data.Categories.Category != "" ? data.Categories.Category : [];
            _categories = categories;
            fillCategories(categories, 0, 0);

            //fillCategoryTrees(categories, 0, 0);

            notifyLoad();
        };

        function fillCategories(categories, parentId, level)
        {
            if (!parentId || parentId == "" || parentId == "0" || parentId == "0")
            {
                _$fldRightNowCategory.empty();
                _$fldRightNowCategoryFilter.empty();
                var emptyOption = jQuery("<option></option>");
                _$fldRightNowCategory.append(emptyOption.clone());
                _$fldRightNowCategoryFilter.append(emptyOption.clone());
                parentId = "";
            }

            var categoriesToPrint = [];
            for (var i = 0; i < categories.length; i++)
            {
                if (categories[i].ParentId == parentId)
                {
                    categoriesToPrint.push(categories[i]);
                }
            }

            for (var i = 0; i < categoriesToPrint.length; i++)
            {
                var levelTabber = Array(level + 1).join("-");
                var category = categoriesToPrint[i];
                var option = jQuery("<option></option>").attr("value", category.CategoryId).html(levelTabber + " " + category.Desc);
                _$fldRightNowCategory.append(option.clone());
                _$fldRightNowCategoryFilter.append(option.clone());
                fillCategories(categories, category.CategoryId, (level + 1));
            }
        };

        function fillCategoryTrees(categories, parentId, level)
        {
            return;
            var categoriesToPrint = [];
            for (var i = 0; i < categories.length; i++)
            {
                if (categories[i].ParentId == parentId)
                {
                    categoriesToPrint.push(categories[i]);
                }
            }

            if (categoriesToPrint.length == 0)
            {
                return jQuery("");
            }

            var $container = jQuery("<ul></ul>");
            for (var i = 0; i < categoriesToPrint.length; i++)
            {
                var category = categoriesToPrint[i];
                var $option = jQuery("<li></li>").attr("value", category.CategoryId).html(category.Desc);
                var $subContainer = fillCategoryTrees(categories, category.CategoryId, (level + 1));
                $option.append($subContainer);
                $container.append($option);
            }

            if (!parentId || parentId == "" || parentId == "0" || parentId == "0")
            {
                _$fldRightNowCategoryTree.empty();
                _$fldRightNowCategoryTree.append($container);
            }
            else
            {

                return $container;
            }
        };

        function onLoadCategoriesError()
        {
            _setErrorMode();
        };

        function onLoadFamilies(data)
        {
            if (!AcerUi.Services.isFamiliesServiceData(data))
            {
                _setErrorMode();
                return;
            }

            _$fldRightNowProductFamily.addClass("disable").find("ul").empty();
            _$fldRightNowProductLine.addClass("disable").find("ul").empty();
            _$fldRightNowProductModel.addClass("disable").find("ul").empty();

            var families = data.Families.Family != "" ? data.Families.Family : [];
            if (data.Families.Family.Id) { lines = [data.Families.Family]; }

            for (var i = 0; i < families.length; i++)
            {
                var family = families[i];
                var $optionLink = jQuery("<a></a>").data("familyid", family.Id).data("type", "family").html(family.Title).click(familyOptionClickEvent);
                var $option = jQuery("<li></li>").append($optionLink);
                _$fldRightNowProductFamily.find("ul").append($option);
            }
            _$fldRightNowProductFamily.removeClass("disable");

            notifyLoad();
        };

        function onLoadFamiliesError()
        {
            notifyLoad();
        };

        function familyOptionClickEvent(e)
        {
            if (e) e.preventDefault();
            var $this = jQuery(this);
            var familyId = $this.data("familyid");
            _$fldRightNowProductFamily.find("a").removeClass("active");
            $this.addClass("active");
            _$answersContainer.hide();
            AcerUi.Services.callLinesServices(_id, _language, _country, familyId, onLoadLines, onLoadLinesError);
        };

        function onLoadLines(data)
        {
            if (!AcerUi.Services.isLinesServiceData(data))
            {
                _setErrorMode();
                return;
            }

            _$fldRightNowProductLine.addClass("disable").find("ul").empty();
            _$fldRightNowProductModel.addClass("disable").find("ul").empty();

            var lines = data.Lines.Line != "" ? data.Lines.Line : [];
            if (data.Lines.Line.Id) { lines = [data.Lines.Line]; }

            for (var i = 0; i < lines.length; i++)
            {
                var line = lines[i];
                var $optionLink = jQuery("<a></a>").data("lineid", line.Id).data("type", "line").html(line.Title).click(lineOptionClickEvent);
                var $option = jQuery("<li></li>").append($optionLink);
                _$fldRightNowProductLine.find("ul").append($option);
            }
            _$fldRightNowProductLine.removeClass("disable");
            if (_currentLayout.Id != AcerUi.PC)
            {
                showSearchPanel(1);
            }
        };

        function onLoadLinesError()
        {
            _setErrorMode();
        };

        function lineOptionClickEvent(e)
        {
            if (e) e.preventDefault();
            var $this = jQuery(this);
            var lineId = $this.data("lineid");
            _$fldRightNowProductLine.find("a").removeClass("active");
            $this.addClass("active");
            _$answersContainer.hide();
            AcerUi.Services.callModelsServices(_id, _language, _country, lineId, onLoadModels, onLoadModelsError);
        };

        function onLoadModels(data)
        {
            if (!AcerUi.Services.isModelsServiceData(data))
            {
                _setErrorMode();
                return;
            }

            _$fldRightNowProductModel.addClass("disable").find("ul").empty();

            var models = data.Models.Model != "" ? data.Models.Model : [];
            if (data.Models.Model.Id) { lines = [data.Models.Model]; }

            for (var i = 0; i < models.length; i++)
            {
                var model = models[i];
                var $optionLink = jQuery("<a></a>").data("modelid", model.Id).data("type", "model").html(model.Title).click(modelOptionClickEvent);
                var $option = jQuery("<li></li>").append($optionLink);
                _$fldRightNowProductModel.find("ul").append($option);
            }
            _$fldRightNowProductModel.removeClass("disable");
            if (_currentLayout.Id != AcerUi.PC)
            {
                showSearchPanel(2);
            }
        };

        function onLoadModelsError()
        {
            _setErrorMode();
        };

        function modelOptionClickEvent(e)
        {
            if (e) e.preventDefault();
            var $this = jQuery(this);
            var modelId = $this.data("modelid");
            _setLoadingMode();
            _$lblCurrentSearch.html($this.html());
            _$fldRightNowProductModel.find("a").removeClass("active");
            $this.addClass("active");
            _$answersContainer.hide();
            AcerUi.Services.callPlmModelServices(_id, _language, _country, modelId, onLoadPlmModel, onLoadPlmModelError);
        };

        function onLoadPlmModel(data)
        {
            if (!AcerUi.Services.isPlmModelServiceData(data))
            {
                _setErrorMode();
                return;
            }
            var plmModel = data.PLMModel.PLMModel;
            clearStoredData();
            _rnProductId = plmModel;
            doSearch();
        };

        function onLoadPlmModelError()
        {
            _setErrorMode();
        };

        //SEARCH
        function searchByGroupEvent(e)
        {
            if (e) e.preventDefault();
            var $this = jQuery(this);
            _group = $this.data("group");
            var label = jQuery($this.parents("div")).find("a:not(:has(img))").html();
            label = label.split(",").join(" ");
            _$lblCurrentSearch.html(label == "" ? _lblCurrentSearchDefaultValue : label);
            doSearch();
        };

        function searchBySerialNumberKeyEvent(e)
        {
            var $this = jQuery(this);
            if (e.keyCode == 13)
            {
                _$btnRightNowSearchBySerialNumber.click();
                return false;
            }
            return true;
        };

        function searchBySerialNumberEvent(e)
        {
            if (e) e.preventDefault();
            var serialNumber = jQuery.trim(_$fldRightNowSerialNumber.val());
            searchBySerialNumber(serialNumber);
        };

        function searchBySerialNumber(serialNumber)
        {
            clearStoredData();
            _serialNumber = serialNumber;
            _$fldRightNowSerialNumber.val(serialNumber);
            if (_embedded)
            {
                var externalUrl = _baseUrl + _baseExternalUrl + AcerUi.Services.externalRightNowPageParamsFormat;
                externalUrl = AcerUi.Services.getParametrizedRightNowUri(externalUrl, _language, _country, _limit, _searchTerm, _rnProductId, _group, _category, serialNumber, true);
                document.location = externalUrl;
            }
            else
            {
                _setLoadingMode();
                _$lblCurrentSearch.html(serialNumber);
                AcerUi.Services.callSerialNumberServices(_id, _language, _country, _serialNumber, onSearchBySerialNumber, onSearchError);
            }
        };

        function onSearchBySerialNumber(data)
        {
            if (!AcerUi.Services.isSerialNumberServiceData(data))
            {
                _setNoResultMode();
                //_setErrorMode();
                return;
            }

            var rnProductId = data.SN.PLMModel;
            if (rnProductId == "")
            {
                _setNoResultMode();
            }
            _rnProductId = rnProductId;
            doSearch();
        };

        function searchBySearchTermAndCategoryKeyEvent(e)
        {
            var $this = jQuery(this);
            if (e.keyCode == 13)
            {
                _$btnRightNowSearchBySearchTermAndCategory.click();
                return false;
            }
            return true;
        };

        function searchBySearchTermAndCategoryEvent(e)
        {
            if (e) e.preventDefault();
            var searchTerm = jQuery.trim(_$fldRightNowSearchTerm.val());
            var category = jQuery.trim(_$fldRightNowCategory.val());
            searchBySearchTermAndCategory(searchTerm, category);
        };

        function searchBySearchTermAndCategory(searchTerm, category)
        {
            clearStoredData();
            _searchTerm = searchTerm;
            _category = category;
            _$fldRightNowSearchTerm.val(searchTerm);
            _$fldRightNowCategory.val(category);
            if (_embedded)
            {
                var externalUrl = _baseUrl + _baseExternalUrl + AcerUi.Services.externalRightNowPageParamsFormat;
                externalUrl = AcerUi.Services.getParametrizedRightNowUri(externalUrl, _language, _country, _limit, searchTerm, _rnProductId, _group, _category, _serialNumber, true);
                document.location = externalUrl;
            }
            else
            {
                var categoryText = _$fldRightNowCategory.find("option:selected").html();
                while (categoryText.indexOf("-") != -1)
                {
                    categoryText = categoryText.split("-").join("");
                }
                var labels = new Array();
                if (searchTerm != "") { labels.push(searchTerm); }
                if (categoryText != "") { labels.push(categoryText); }
                _$lblCurrentSearch.html(labels.join(" - "));
                doSearch(true);
            }
        };

        function filterResultKeyEvent(e)
        {
            var $this = jQuery(this);
            if (e.keyCode == 13)
            {
                _$btnRightNowFilterResult.click();
                return false;
            }
            return true;
        };

        function filterResultEvent(e)
        {
            if (e) e.preventDefault();
            _searchTerm = jQuery.trim(_$fldRightNowSearchTermFilter.val());
            _category = jQuery.trim(_$fldRightNowCategoryFilter.val());
            doSearch();
        };

        function doSearch(hideFilters)
        {
            _setLoadingMode();
            if (hideFilters === true)
            {
                _$ctnRightNowResultFilters.hide();
            }
            else
            {
                _$ctnRightNowResultFilters.show();
            }
            AcerUi.Services.callAnswersServices(_id, _language, _country, _limit, _searchTerm, _rnProductId, _group, _category, onSearch, onSearchError);
        };

        function onSearch(data)
        {
            if (!AcerUi.Services.isAnswerServiceData(data))
            {
                _setErrorMode();
                return;
            }

            _$answersItemsContainer.empty();
            var answers = data.Answers.Answer;

            if (answers == "" || answers.length == 0)
            {
                _setNoResultMode();
            }
            else
            {
                for (var i = 0; i < answers.length; i++)
                {
                    var answer = answers[i];
                    var $newItem = jQuery("<div></div>").html(_itemTemplateHtml);
                    for (var propertyName in answer)
                    {
                        $newItem.find(".txt-" + propertyName.toLowerCase()).html(answer[propertyName]);
                        $newItem.find(".lnk-" + propertyName.toLowerCase()).attr("href", answer[propertyName]);
                        $newItem.find(".lnk-alt-" + propertyName.toLowerCase()).attr("alt", answer[propertyName]).attr("title", answer[propertyName]);
                    }
                    var $childrens = $newItem.children();
                    for (var ci = 0; ci < $childrens.length; ci++)
                    {
                        _$answersItemsContainer.append($childrens[ci]);
                    }
                }
                _setResultMode();
            }

        };

        function onSearchError()
        {
            _setErrorMode();
        };

        function clearStoredData()
        {
            _searchTerm = "";
            _rnProductId = "";
            _serialNumber = "";
            _group = "";
            _category = "";
            _$fldRightNowSerialNumber.val("");
            _$fldRightNowSearchTerm.val("");
            _$fldRightNowCategory.val("");
            _$fldRightNowSearchTermFilter.val("");
            _$fldRightNowCategoryFilter.val("");
        };

        //EXTERNAL TARGETS
        function gotoMoreAnswersEvent(e)
        {
            if (e) e.preventDefault();
            if (_embedded)
            {
                var group = _group;
                var externalUrl = _baseUrl + _baseExternalUrl + AcerUi.Services.externalRightNowPageParamsFormat;
                externalUrl = AcerUi.Services.getParametrizedRightNowUri(externalUrl, _language, _country, _limit, _searchTerm, _rnProductId, group, _category, _serialNumber, true);
                document.location = externalUrl;
            }
        };

        //LAYOUT STATUS
        function _setLoadingMode()
        {
            _$ctnRightNowErrorMessage.hide();
            _$ctnRightNowAnswersLoading.show();
            _$ctnRightNowNoAnswers.hide();
            _$answersContainer.hide();
            _$answersItemsContainer.empty();
        };

        function _setResultMode()
        {
            _$ctnRightNowErrorMessage.hide();
            _$ctnRightNowAnswersLoading.hide();
            _$ctnRightNowNoAnswers.hide();
            _$answersContainer.show();
            if (_embedded)
            {
                _$btnRightNowMoreAnswers.show();
            }
        };

        function _setNoResultMode()
        {
            _$ctnRightNowErrorMessage.hide();
            _$ctnRightNowAnswersLoading.hide();
            _$ctnRightNowNoAnswers.show();
            if (!_embedded) { _$answersContainer.show(); }
            _$answersItemsContainer.empty();
            if (_embedded) { _$btnRightNowMoreAnswers.hide(); }
        };

        function _setErrorMode()
        {
            _$ctnRightNowErrorMessage.show();
            _$ctnRightNowAnswersLoading.hide();
            _$ctnRightNowNoAnswers.hide();
            _$answersContainer.show();
            _$answersItemsContainer.empty();
            if (_embedded)
            {
                _$btnRightNowMoreAnswers.hide();
            }
        };

        function rightNowSearchPanelToggleEvent(e)
        {
            if (e) e.preventDefault();
            var $this = jQuery(this);
            var ndx = _$btnRightNowSearchPanelToggle.index($this[0]);
            showRightNowSearchPanel(ndx);
        };

        function showRightNowSearchPanel(ndx)
        {
            var $this = jQuery(_$btnRightNowSearchPanelToggle.get(ndx));
            var $panelToshow = jQuery(_$ctnRightNowSearchPanelForm.get(ndx));
            if ($panelToshow.is(":visible"))
            {
                return;
            }
            _$btnRightNowSearchPanelToggle.removeClass("active");
            $this.addClass("active")
            _$ctnRightNowSearchPanelForm.slideUp();
            $panelToshow.slideDown();
        };

        function optionUpEvent(e)
        {
            if (e) e.preventDefault();
            var $this = jQuery(this);
            var ndx = _$btnRightNowOptionUp.index($this[0]);
            moveOption(ndx, "up");
        };

        function optionDownEvent(e)
        {
            if (e) e.preventDefault();
            var $this = jQuery(this);
            var ndx = _$btnRightNowOptionDown.index($this[0]);
            moveOption(ndx, "down");
        };

        function moveOption(ndx, versus)
        {
            var $optionPanel = (versus == "up" ? jQuery(_$ctnRightNowOptionPanel.get(ndx)) : jQuery(_$ctnRightNowOptionPanel.get(ndx)));
            var $optionMask = jQuery(_$ctnRightNowOptionPanelMask.get(ndx));
            var optionHeight = jQuery($optionPanel.find("li")[0]).outerHeight();
            var optionPanelHeight = $optionPanel.height();
            var optionMaskHeight = $optionMask.outerHeight();
            var scrollAdder = versus == "up" ? optionHeight * -1 : optionHeight;
            var currentScrollTop = $optionMask.scrollTop();
            var newScrollTop = currentScrollTop + scrollAdder;
            $optionMask.scrollTop(newScrollTop);
        };

        function changeSearchPanelEvent(e)
        {
            if (e) e.preventDefault();
            var $this = jQuery(this);
            var ndx = _$btnRightNowMobileSerchPanelSelector.index($this[0]);
            showSearchPanel(ndx);
        };

        function showSearchPanel(ndx)
        {
            _$btnRightNowMobileSerchPanelSelector.removeClass("active");
            var $currentElement = jQuery(_$btnRightNowMobileSerchPanelSelector.get(ndx)).addClass("active");
            _$fldRightNowProductFamily.hide();
            _$fldRightNowProductLine.hide();
            _$fldRightNowProductModel.hide();
            if (ndx == 0) _$fldRightNowProductFamily.show();
            if (ndx == 1) _$fldRightNowProductLine.show();
            if (ndx == 2) _$fldRightNowProductModel.show();
        }

        //LAYOUT
        function _initLayout(layout)
        {
            _$ctnRightNowSearchPanel.hide();
            _$ctnRightNowMainLoadingPanel.show();
            _$ctnRightNowSearchPanelForm.hide();
            _$lblCurrentSearch.html(_lblCurrentSearchDefaultValue);
            _$ctnRightNowOptionPanel.css("top", 0);
            jQuery(_$btnRightNowMobileSerchPanelSelector.get(0)).addClass("active");
        };

        function _resetLayout(layout)
        {
            if (_currentLayout.Id == AcerUi.PC)
            {
                _$fldRightNowProductFamily.show();
                _$fldRightNowProductLine.show();
                _$fldRightNowProductModel.show();
            }
            else
            {
                var ndx = 0;
                if (!_$fldRightNowProductLine.hasClass("disable")) ndx = 1;
                if (!_$fldRightNowProductModel.hasClass("disable")) ndx = 2;
                showSearchPanel(ndx);
            }
        };

        this.resize = function ()
        {
            return;
        };

        this.layoutChange = function (currentLayout, prevLayout)
        {
            if (_currentLayout == null || _currentLayout.Id == currentLayout.Id)
                return;
            _currentLayout = currentLayout;
            _resetLayout(_currentLayout);


        };
    };
};

/*******************************************************************************************************************************\
GDP
\*******************************************************************************************************************************/

AcerUi.Gdp = function ()
{
    var that = this;
    var _currentLayout = null;

    this.init = function (layout)
    {
        _currentLayout = layout;
        var $gdpMainContainers = jQuery(".ctnGdpMainContainer");
        for (var i = 0; i < $gdpMainContainers.length; i++)
        {
            var newGDP = new gdp(jQuery($gdpMainContainers[i]));
            newGDP.init(_currentLayout);
        };
    };

    gdp = function ($gdpContainer)
    {
        var self = this;
        var _currentLayout = null;
        var _showFilter = true;
        var _id = "GDP"; // jQuery.guid;
        var _$gdpContainer = $gdpContainer;

        var _$ctnGdpSearchPanel = null;
        var _$ctnGdpMainLoadingPanel = null;

        var _$ctnGdpSerialNumberSearch = null;
        var _$ctnGdpProductModelNameSearch = null;
        var _$btnGdpSearchBySerialNumber = null;
        var _$fldGdpSerialNumber = null;
        var _$btnGdpSearchByModelName = null;
        var _$fldGdpModelName = null;
        var _$fldGdpModelId = null;
        var _$ctnGdpSearchByModelNameSuggestions = null;
        var _$ctnGdpSearchByModelNameSuggestionsLoading = null;
        var _$ctnGdpSearchByModelNameSuggestionsNoItems = null;
        var _$ctnGdpSearchByModelNameSuggestionsInvalidName = null;

        var _$ctnGdpResultFoundContainer = null;
        var _$ctnGdpResultLoading = null;
        var _$ctnGdpNoResult = null;
        var _$ctnGdpErrorMessage = null;

        var _$fldGdpProductFamily = null;
        var _$fldGdpProductLine = null;
        var _$fldGdpProductModel = null;

        var _$lblCurrentSearch = null;
        var _lblCurrentSearchDefaultValue = null;

        var _$ctnGdpSearchPanelForm = null;
        var _$btnGdpSearchPanelToggle = null;

        var _$ctnGdpOptionPanelMask = null;
        var _$ctnGdpOptionPanel = null;
        var _$btnGdpOptionUp = null;
        var _$btnGdpOptionDown = null;

        var _$ctnGdpProductInfo = null;
        var _$imgGdpProductInfo = null;
        var _$lblGdpProductInfo = null;
        var _$fldGdpOss = null;
        var _$ctnGdpOss = null;
        var _$ctnTableDownloads = null;

        var _$fldGdpLimit = null;
        var _$btnGdpLimit = null;

        var _$ctnTypeFilter = null;
        var _$btnTypeFilter = null;

        var _$ctnResultTable = null;
        var _$ctnFilterTable = null;

        var _$ctnGdpMobileSerchPanelSelector = null;
        var _$btnGdpMobileSerchPanelSelector = null;

        var _itemTemplateHtml = null;

        var _embedded = false;
        var _baseUrl = "";
        var _baseExternalUrl = "";

        var _language = "";
        var _country = "";
        var _os = "";
        var _limit = "latest";
        var _type = "driver";
        var _rnProductId = "";
        var _serialNumber = "";

        this.init = function (layout)
        {
            _currentLayout = layout;

            //init params
            _baseUrl = jQuery(jQuery("base")[0]).attr("href") + "" != "undefined" ? jQuery(jQuery("base")[0]).attr("href") : "";
            _embedded = _$gdpContainer.data("embedded") + "" == "true";
            _baseExternalUrl = $gdpContainer.data("baseexternalurl");
            _language = _$gdpContainer.data("language");
            _country = _$gdpContainer.data("country");

            //init objects
            _$ctnGdpSearchPanel = jQuery(_$gdpContainer.find(".ctnGdpSearchPanel"));
            _$ctnGdpMainLoadingPanel = jQuery(_$gdpContainer.find(".ctnGdpMainLoadingPanel"));

            _$resultContainer = jQuery(_$gdpContainer.find(".ctnGdpResultContainer"));
            _$resultItemsContainer = jQuery(_$gdpContainer.find(".ctnGdpResultItemsContainer"));

            _$ctnGdpSerialNumberSearch = jQuery(_$gdpContainer.find(".ctnGdpSerialNumberSearch"));
            _$ctnGdpProductModelNameSearch = jQuery(_$gdpContainer.find(".ctnGdpProductModelNameSearch"));
            _$btnGdpSearchBySerialNumber = jQuery(_$gdpContainer.find(".btnGdpSearchBySerialNumber"));
            _$fldGdpSerialNumber = jQuery(_$gdpContainer.find("input[name='fldGdpSerialNumber']"));
            _$btnGdpSearchByModelName = jQuery(_$gdpContainer.find(".btnGdpSearchByModelName"));
            _$fldGdpModelName = jQuery(_$gdpContainer.find("input[name='fldGdpModelName']"));
            _$fldGdpModelId = jQuery(_$gdpContainer.find("input[name='fldGdpModelId']"));
            _$ctnGdpSearchByModelNameSuggestions = jQuery(_$gdpContainer.find(".ctnGdpSearchByModelNameSuggestions"));
            _$ctnGdpSearchByModelNameSuggestionsLoading = jQuery(_$gdpContainer.find(".ctnGdpSearchByModelNameSuggestionsLoading"));
            _$ctnGdpSearchByModelNameSuggestionsNoItems = jQuery(_$gdpContainer.find(".ctnGdpSearchByModelNameSuggestionsNoItems"));
            _$ctnGdpSearchByModelNameSuggestionsInvalidName = jQuery(_$gdpContainer.find(".ctnGdpSearchByModelNameSuggestionsInvalidName"));

            _$ctnGdpResultFoundContainer = jQuery(_$gdpContainer.find(".ctnGdpResultFoundContainer"));
            _$ctnGdpResultLoading = jQuery(_$gdpContainer.find(".ctnGdpResultLoading"));
            _$ctnGdpNoResult = jQuery(_$gdpContainer.find(".ctnGdpNoResult"));
            _$ctnGdpErrorMessage = jQuery(_$gdpContainer.find(".ctnGdpErrorMessage"));

            _$fldGdpProductFamily = jQuery(_$gdpContainer.find(".fldGdpProductFamily"));
            _$fldGdpProductLine = jQuery(_$gdpContainer.find(".fldGdpProductLine"));
            _$fldGdpProductModel = jQuery(_$gdpContainer.find(".fldGdpProductModel"));

            _$lblCurrentSearch = jQuery(_$gdpContainer.find(".lblCurrentSearch"));
            _lblCurrentSearchDefaultValue = _$lblCurrentSearch.data("defaultvalue");

            _$ctnGdpSearchPanel = jQuery(_$gdpContainer.find(".ctnGdpSearchPanel")); ;
            _$ctnGdpSearchPanelForm = jQuery(_$gdpContainer.find(".ctnGdpSearchPanelForm"));
            _$btnGdpSearchPanelToggle = jQuery(_$gdpContainer.find(".btnGdpSearchPanelToggle"));

            _$ctnGdpOptionPanelMask = jQuery(_$gdpContainer.find(".ctnGdpOptionPanelMask"));
            _$ctnGdpOptionPanel = jQuery(_$gdpContainer.find(".ctnGdpOptionPanel"));
            _$btnGdpOptionUp = jQuery(_$gdpContainer.find(".btnGdpOptionUp"));
            _$btnGdpOptionDown = jQuery(_$gdpContainer.find(".btnGdpOptionDown"));

            _$ctnGdpProductInfo = jQuery(_$gdpContainer.find(".ctnGdpProductInfo"));
            _$imgGdpProductInfo = jQuery(_$gdpContainer.find(".imgGdpProductInfo"));
            _$lblGdpProductInfo = jQuery(_$gdpContainer.find(".lblGdpProductInfo"));
            _$fldGdpOss = jQuery(_$gdpContainer.find("select[name='fldGdpOss']"));
            _$ctnGdpOss = jQuery(_$gdpContainer.find(".ctnGdpOss"));

            _$ctnTableDownloads = jQuery(_$gdpContainer.find(".ctnTableDownloads"));

            _$fldGdpLimit = jQuery(_$gdpContainer.find(".fldGdpLimit"));
            _$btnGdpLimit = jQuery(_$gdpContainer.find(".btnGdpLimit"));

            _$ctnTypeFilter = jQuery(_$gdpContainer.find(".ctnTypeFilter"));
            _$btnTypeFilter = jQuery(_$gdpContainer.find(".btnTypeFilter"));

            _$ctnResultTable = jQuery(_$gdpContainer.find(".ctnResultTable"));
            _$ctnFilterTable = jQuery(_$gdpContainer.find(".ctnFilterTable"));

            _$ctnGdpMobileSerchPanelSelector = jQuery(_$gdpContainer.find(".ctnGdpMobileSerchPanelSelector"));
            _$btnGdpMobileSerchPanelSelector = jQuery(_$gdpContainer.find(".btnGdpMobileSerchPanelSelector"));

            //get template and remove it from DOM
            var $template = jQuery(_$gdpContainer.find(".tplGdpTableRow"));
            _itemTemplateHtml = $template.html() ? $template.html() + "" : "";
            $template.remove();

            //events
            _$btnGdpSearchBySerialNumber.click(searchBySerialNumberEvent);
            _$btnGdpSearchByModelName.click(searchByModelNameEvent)
            _$btnGdpSearchPanelToggle.click(gdpSearchPanelToggleEvent);
            _$btnGdpOptionUp.click(optionUpEvent);
            _$btnGdpOptionDown.click(optionDownEvent)
            _$fldGdpOss.change(changeOsEvent);
            _$btnGdpLimit.click(changeLimitEvent);
            _$btnTypeFilter.click(changeTypeEvent)
            _$btnGdpMobileSerchPanelSelector.click(changeSearchPanelEvent);
            _$fldGdpSerialNumber.keydown(searchBySerialNumberKeyEvent);
            _$fldGdpModelName.keyup(searchByModelNameKeyEvent);
            _$fldGdpModelName.focus(searchByModelNameFocusEvent);
            jQuery("body").click(searchByModelNameBlurEvent);

            _$ctnGdpSearchByModelNameSuggestions.find("a").live("click", searchByModelNameSuggestionsEvent);

            //register core events
            AcerUi.addResizeListener(self.resize);
            AcerUi.addChangeLayoutListener(self.layoutChange);

            //do first empty search
            _initLayout(_currentLayout);

            if (!_embedded)
            {
                loadData();
            }
        };

        //INIT LOAD DATA
        var _dataLoaded = 0;
        var _dataToLoad = 0;
        function notifyLoad()
        {
            _dataLoaded = _dataLoaded + 1;
            if (_dataLoaded == _dataToLoad)
            {
                _$ctnGdpSearchPanel.show();
                _$ctnGdpMainLoadingPanel.hide();
                onLoadData();
            }
        };

        function loadData()
        {
            _dataToLoad = 1;
            AcerUi.Services.callFamiliesServices(_id, _language, _country, onLoadFamilies, onLoadFamiliesError);
        };

        function onLoadData()
        {
            var request = AcerUi.Services.getGdpRequestParams();
            var rnProductId = request.rnProductId ? request.rnProductId : "";
            var serialNumber = request.serialNumber ? request.serialNumber : "";
            var modelName = request.modelName ? request.modelName : "";

            if (rnProductId != "")
            {
                searchByModelName(modelName, rnProductId);
                showGdpSearchPanel(1);
                return;
            }

            if (serialNumber != "")
            {
                searchBySerialNumber(serialNumber);
                showGdpSearchPanel(0);
                return;
            }

            showGdpSearchPanel(1);
        };

        function onLoadFamilies(data)
        {
            if (!AcerUi.Services.isFamiliesServiceData(data))
            {
                _setErrorMode();
                return;
            }

            _$fldGdpProductFamily.addClass("disable").find("ul").empty();
            _$fldGdpProductLine.addClass("disable").find("ul").empty();
            _$fldGdpProductModel.addClass("disable").find("ul").empty();

            var families = data.Families.Family != "" ? data.Families.Family : [];
            if (data.Families.Family.Id) { lines = [data.Families.Family]; }

            for (var i = 0; i < families.length; i++)
            {
                var family = families[i];
                var $optionLink = jQuery("<a></a>").data("familyid", family.Id).data("type", "family").html(family.Title).click(familyOptionClickEvent);
                var $option = jQuery("<li></li>").append($optionLink);
                _$fldGdpProductFamily.find("ul").append($option);
            }
            _$fldGdpProductFamily.removeClass("disable");
            _$fldGdpProductFamily.addClass("active");

            notifyLoad();
        };

        function onLoadFamiliesError()
        {
            _setErrorMode();
        };

        function familyOptionClickEvent(e)
        {
            if (e) e.preventDefault();
            var $this = jQuery(this);
            var familyId = $this.data("familyid");
            _$fldGdpProductFamily.find("a").removeClass("active");
            $this.addClass("active");
            _hideResultPanel();
            AcerUi.Services.callLinesServices(_id, _language, _country, familyId, onLoadLines, onLoadLinesError);
        };

        function onLoadLines(data)
        {
            if (!AcerUi.Services.isLinesServiceData(data))
            {
                _setErrorMode();
                return;
            }

            _$fldGdpProductLine.addClass("disable").find("ul").empty();
            _$fldGdpProductModel.addClass("disable").find("ul").empty();

            var lines = data.Lines.Line != "" ? data.Lines.Line : [];
            if (data.Lines.Line.Id) { lines = [data.Lines.Line]; }

            for (var i = 0; i < lines.length; i++)
            {
                var line = lines[i];
                var $optionLink = jQuery("<a></a>").data("lineid", line.Id).data("type", "line").html(line.Title).click(lineOptionClickEvent);
                var $option = jQuery("<li></li>").append($optionLink);
                _$fldGdpProductLine.find("ul").append($option);
            }
            _$fldGdpProductLine.removeClass("disable");
            if (_currentLayout.Id != AcerUi.PC)
            {
                showSearchPanel(1);
            }
        };

        function onLoadLinesError()
        {
            _setErrorMode();
        };

        function lineOptionClickEvent(e)
        {
            if (e) e.preventDefault();
            var $this = jQuery(this);
            var lineId = $this.data("lineid");
            _$fldGdpProductLine.find("a").removeClass("active");
            $this.addClass("active");
            _hideResultPanel();
            AcerUi.Services.callModelsServices(_id, _language, _country, lineId, onLoadModels, onLoadModelsError);
        }

        function onLoadModels(data)
        {
            if (!AcerUi.Services.isModelsServiceData(data))
            {
                _setErrorMode();
                return;
            }

            _$fldGdpProductModel.addClass("disable").find("ul").empty();

            var models = data.Models.Model != "" ? data.Models.Model : [];
            if (data.Models.Model.Id) { lines = [data.Models.Model]; }

            for (var i = 0; i < models.length; i++)
            {
                var model = models[i];
                var $optionLink = jQuery("<a></a>").data("modelid", model.Id).data("type", "model").html(model.Title).click(modelOptionClickEvent);
                var $option = jQuery("<li></li>").append($optionLink);
                _$fldGdpProductModel.find("ul").append($option);
            }
            _$fldGdpProductModel.removeClass("disable");
            if (_currentLayout.Id != AcerUi.PC)
            {
                showSearchPanel(2);
            }
        };

        function onLoadModelsError()
        {
            _setErrorMode();
        };

        function modelOptionClickEvent(e)
        {
            if (e) e.preventDefault();
            var $this = jQuery(this);
            var modelId = $this.data("modelid");
            _setLoadingMode();
            _$lblCurrentSearch.html($this.html());
            _$fldGdpProductModel.find("a").removeClass("active");
            $this.addClass("active");
            AcerUi.Services.callInfoServices(_id, _language, _country, modelId, onLoadInfo, onLoadInfoError);
        };

        function onLoadInfo(data)
        {
            if (!AcerUi.Services.isInfoServiceData(data))
            {
                _setErrorMode();
                return;
            }
            var title = data.Info.Title;
            var imgSrc = data.Info.Img;
            var modelId = data.Info.ID;
            _$imgGdpProductInfo.attr("src", imgSrc);
            _$lblGdpProductInfo.html(title);
            clearStoredData();
            _rnProductId = modelId;
            doSearch();
        };

        function onLoadInfoError()
        {
            _setErrorMode();
        };

        //SEARCH
        var _searchByModelNameCallTimer = null;
        var _lastValue = "";
        function searchByModelNameKeyEvent(e)
        {
            var $this = jQuery(this);
            if (e.keyCode == 13) //enter
            {
                if (e) e.preventDefault();
                _$btnGdpSearchByModelName.click();
                return false;
            }

            if (e.keyCode == 40 || e.keyCode == 38) //arrow Up 0 Arrow down
            {
                if (e) e.preventDefault();
                var adder = e.keyCode == 40 ? 1 : -1;
                var $items = _$ctnGdpSearchByModelNameSuggestions.find("a");

                if ($items.length > 0)
                {
                    var currentNdx = $items.index(_$ctnGdpSearchByModelNameSuggestions.find("a.selected"));
                    var nextNdx = currentNdx + adder;
                    if (nextNdx < 0) nextNdx = 0;
                    if (nextNdx >= $items.length) nextNdx = $items.length - 1;
                    $items.removeClass("selected");
                    var $nextItem = jQuery($items.get(nextNdx))
                    $nextItem.addClass("selected");
                    var scrollTop = _$ctnGdpSearchByModelNameSuggestions.scrollTop();
                    var height = _$ctnGdpSearchByModelNameSuggestions.outerHeight();
                    var posTop = $nextItem.position().top;

                    var minScrollTop = ($nextItem.outerHeight() * nextNdx) + $nextItem.outerHeight();
                    if (minScrollTop < height)
                    {
                        _$ctnGdpSearchByModelNameSuggestions.scrollTop(0);
                    }
                    if (minScrollTop > height)
                    {
                        _$ctnGdpSearchByModelNameSuggestions.scrollTop(minScrollTop - $nextItem.outerHeight());
                    }

                    _$fldGdpModelName.val($nextItem.html());
                    _$fldGdpModelId.val($nextItem.attr("rel"));
                }
                return false;
            }

            var currentValue = _$fldGdpModelName.val();
            if (currentValue == _lastValue)
            {
                return;
            }
            _lastValue = currentValue;

            if (_searchByModelNameCallTimer != null)
            {
                window.clearInterval(_searchByModelNameCallTimer);
                _searchByModelNameCallTimer = null;
            }
            _searchByModelNameCallTimer = window.setTimeout(function ()
            {
                var searchText = _$fldGdpModelName.val();

                if (searchText.length < 3) { return; }

                _$ctnGdpSearchByModelNameSuggestions.hide();
                _$ctnGdpSearchByModelNameSuggestionsLoading.show();
                _$ctnGdpSearchByModelNameSuggestionsNoItems.hide();
                _$ctnGdpSearchByModelNameSuggestionsInvalidName.hide();
                _$fldGdpModelId.val("");
                AcerUi.Services.callModelNameSuggestionsServices(_id, _language, _country, searchText, onGetModelNameSuggestions, onGetModelNameSuggestionsError);
            }, 500);
        };

        function searchByModelNameChangeEvent(e)
        {
        };

        function searchByModelNameBlurEvent(e)
        {
            _$ctnGdpSearchByModelNameSuggestions.hide();
            _$ctnGdpSearchByModelNameSuggestionsLoading.hide();
            _$ctnGdpSearchByModelNameSuggestionsNoItems.hide();
            _$ctnGdpSearchByModelNameSuggestionsInvalidName.hide();
        };

        var focusTimer = null;
        function searchByModelNameFocusEvent(e)
        {
            window.setTimeout(function ()
            {
                if (_$ctnGdpSearchByModelNameSuggestions.find("a").length > 0)
                {
                    _$ctnGdpSearchByModelNameSuggestions.show();
                    _$ctnGdpSearchByModelNameSuggestionsLoading.hide();
                    _$ctnGdpSearchByModelNameSuggestionsNoItems.hide();
                    _$ctnGdpSearchByModelNameSuggestionsInvalidName.hide();
                    return;
                }
            }, 250);
        };

        function onGetModelNameSuggestions(data)
        {
            _$ctnGdpSearchByModelNameSuggestions.empty();
            _$ctnGdpSearchByModelNameSuggestions.hide();
            if (!AcerUi.Services.isModelNameSuggestionsServiceData(data) || data.Models.Model.length == 0)
            {
                _$ctnGdpSearchByModelNameSuggestions.hide();
                _$ctnGdpSearchByModelNameSuggestionsLoading.hide();
                _$ctnGdpSearchByModelNameSuggestionsNoItems.show();
                _$ctnGdpSearchByModelNameSuggestionsInvalidName.hide();
                return;
            }
            var suggestions = data.Models.Model;

            if (suggestions == "" || suggestions.length == 0)
            {
                _$ctnGdpSearchByModelNameSuggestions.hide();
                _$ctnGdpSearchByModelNameSuggestionsLoading.hide();
                _$ctnGdpSearchByModelNameSuggestionsNoItems.show();
                _$ctnGdpSearchByModelNameSuggestionsInvalidName.hide();
            }
            else
            {
                for (var i = 0; i < suggestions.length; i++)
                {
                    var $suggestion = jQuery("<a></a>").attr("rel", suggestions[i].Id).html(suggestions[i].Title);
                    _$ctnGdpSearchByModelNameSuggestions.append($suggestion);
                }
                _$ctnGdpSearchByModelNameSuggestions.show();
                _$ctnGdpSearchByModelNameSuggestionsLoading.hide();
                _$ctnGdpSearchByModelNameSuggestionsNoItems.hide();
                _$ctnGdpSearchByModelNameSuggestionsInvalidName.hide();
            }
        };

        function onGetModelNameSuggestionsError(data)
        {
            _$ctnGdpSearchByModelNameSuggestions.hide();
            _$ctnGdpSearchByModelNameSuggestionsLoading.hide();
            _$ctnGdpSearchByModelNameSuggestionsNoItems.show();
            _$ctnGdpSearchByModelNameSuggestionsInvalidName.hide();
        };

        function searchByModelNameSuggestionsEvent(e)
        {
            if (e) e.preventDefault();
            var modelName = jQuery(this).html();
            var rnProductId = jQuery(this).attr("rel");
            _$fldGdpModelName.val(modelName);
            _$fldGdpModelId.val(rnProductId);
            _$ctnGdpSearchByModelNameSuggestions.hide();
            searchByModelName(modelName, rnProductId);
        };

        function searchBySerialNumberKeyEvent(e)
        {
            var $this = jQuery(this);
            if (e.keyCode == 13)
            {
                if (e) e.preventDefault();
                _$btnGdpSearchBySerialNumber.click();
            }
        };

        function searchByModelNameEvent(e)
        {
            if (e) e.preventDefault();
            var modelName = _$fldGdpModelName.val();
            var rnProductId = _$fldGdpModelId.val();
            searchByModelName(modelName, rnProductId);
        };

        function searchByModelName(modelName, rnProductId)
        {
            if (!rnProductId || rnProductId == 0 || rnProductId == "" || rnProductId + "" == "undefined")
            {
                return;
            }

            _$ctnGdpSearchByModelNameSuggestions.hide();
            _$ctnGdpSearchByModelNameSuggestionsLoading.hide();
            _$ctnGdpSearchByModelNameSuggestionsNoItems.hide();
            _$ctnGdpSearchByModelNameSuggestionsInvalidName.hide();

            clearStoredData();
            _rnProductId = rnProductId;
            if (_embedded)
            {
                var externalUrl = _baseUrl + _baseExternalUrl + AcerUi.Services.externalGdpPageParamsFormat;
                externalUrl = AcerUi.Services.getParametrizedGdpUri(externalUrl, _language, _country, _rnProductId, _serialNumber, modelName, true);
                document.location = externalUrl;
            }
            else
            {
                _setLoadingMode();
                _$fldGdpModelName.val(modelName);
                _$lblCurrentSearch.html(modelName);
                _$fldGdpModelId.val(rnProductId);
                AcerUi.Services.callInfoServices(_id, _language, _country, _rnProductId, onLoadInfo2, onLoadInfoError2);
            }
        };

        function searchBySerialNumberEvent(e)
        {
            if (e) e.preventDefault();
            var serialNumber = jQuery.trim(_$fldGdpSerialNumber.val());
            searchBySerialNumber(serialNumber);
        };

        function searchBySerialNumber(serialNumber)
        {
            clearStoredData();
            _serialNumber = serialNumber;
            _$fldGdpSerialNumber.val(serialNumber);
            if (_embedded)
            {
                var externalUrl = _baseUrl + _baseExternalUrl + AcerUi.Services.externalGdpPageParamsFormat;
                externalUrl = AcerUi.Services.getParametrizedGdpUri(externalUrl, _language, _country, _rnProductId, _serialNumber, "", true);
                document.location = externalUrl;
            }
            else
            {
                _setLoadingMode();
                _$lblCurrentSearch.html(serialNumber);
                AcerUi.Services.callSerialNumberServices(_id, _language, _country, _serialNumber, onSearchBySerialNumber, onSearchError);
            }
        };

        function onSearchBySerialNumber(data)
        {
            if (!AcerUi.Services.isSerialNumberServiceData(data))
            {
                //_setErrorMode();
                _setNoResultMode(true);
                return;
            }
            var rnProductId = data.SN.ModelId;
            if (rnProductId == "")
            {
                _setNoResultMode(true);
            }
            _rnProductId = rnProductId;
            AcerUi.Services.callInfoServices(_id, _language, _country, _rnProductId, onLoadInfo2, onLoadInfoError2);
        };

        function onLoadInfo2(data)
        {
            if (!AcerUi.Services.isInfoServiceData(data))
            {
                _setErrorMode();
                return;
            }
            var title = data.Info.Title;
            var imgSrc = data.Info.Img;
            var modelId = data.Info.ID;
            _$imgGdpProductInfo.attr("src", imgSrc);
            _$lblGdpProductInfo.html(title);
            _rnProductId = modelId;
            doSearch();
        };

        function onLoadInfoError2()
        {
            _setErrorMode();
        };

        function doSearch()
        {
            AcerUi.Services.callFilesDataServices(_id, _language, _country, _os, _limit, _type, _rnProductId, onSearch, onSearchError);
        };

        function onSearch(data)
        {
            _$resultItemsContainer.empty();
            if (!AcerUi.Services.isFilesDataServiceData(data))
            {
                _setErrorMode();
                return;
            }

            var oss = data.Files.OS;
            var files = data.Files.File;
            if (files == "" || files.length == 0)
            {
                _setNoResultMode();
            }
            else
            {
                files = files.sort(sortItems);
                for (var i = 0; i < files.length; i++)
                {
                    var file = files[i];
                    var $newItem = jQuery("<div></div>").html(_itemTemplateHtml);
                    for (var propertyName in file)
                    {
                        $newItem.find(".txt-" + propertyName.toLowerCase()).html(file[propertyName]);
                        $newItem.find(".lnk-" + propertyName.toLowerCase()).attr("href", file[propertyName]);
                        $newItem.find(".lnk-alt-" + propertyName.toLowerCase()).attr("alt", file[propertyName]).attr("title", file[propertyName]);
                    }
                    var $itemToAdd = jQuery($newItem.find("tr"));
                    if (i % 2 == 0)
                    {
                        $itemToAdd.addClass("alternate");
                    }
                    _$resultItemsContainer.append($itemToAdd);
                }
                var activeMenuNdx = _$btnTypeFilter.index(_$btnTypeFilter.filter(".active")[0]);
                _$ctnFilterTable.empty();
                var $tableClone = jQuery("<div></div>").html(_$ctnGdpResultFoundContainer.html());
                jQuery(_$ctnFilterTable.get(activeMenuNdx)).append(jQuery($tableClone.find("table")));
                _setResultMode();
            }

            if (oss == "" || oss.length == 0)
            {
                _$ctnGdpOss.hide();
                _$fldGdpOss.hide();
                _$fldGdpOss.empty();
            }
            else
            {
                _$ctnGdpOss.show();
                _$fldGdpOss.show();
                _$fldGdpOss.empty();
                var selectValue = "";
                for (var i = 0; i < oss.length; i++)
                {
                    var os = oss[i];
                    var $option = jQuery("<option></option>").attr("value", os.Id).html(os.Title);
                    if (os.Id + "" == _os + "" || oss.length == 1)
                    {
                        $option.attr("selected", true);
                        selectValue = os.Id + "";
                    }
                    _$fldGdpOss.append($option.clone());
                }
                _$fldGdpOss.val(selectValue);
            }
        };

        function sortItems(a, b)
        {
            if (a.Category < b.Category)
                return -1;
            if (a.Category > b.Category)
                return 1;

            if (a.Vendor < b.Vendor)
                return -1;
            if (a.Vendor > b.Vendor)
                return 1;

            if (a.Description < b.Description)
                return -1;
            if (a.Description > b.Description)
                return 1;

            if (a.Version < b.Version)
                return -1;
            if (a.Version > b.Version)
                return 1;

            return 0;
        };

        function onSearchError()
        {
            _$resultItemsContainer.empty();
            _setErrorMode();
        };

        function clearStoredData()
        {
            _os = "";
            _limit = "latest";
            _type = "driver";
            _rnProductId = "";
            _serialNumber = "";
            _$fldGdpSerialNumber.val("");
            _$fldGdpOss.val("");
            _$btnGdpLimit.removeClass("active");
            jQuery(_$btnGdpLimit.get(0)).addClass("active");
            _$btnTypeFilter.removeClass("active");
            jQuery(_$btnTypeFilter.get(0)).addClass("active");
        };

        //FILTER
        function changeOsEvent(e)
        {
            if (e) e.preventDefault();
            _setLoadingMode(true);
            _$resultItemsContainer.empty();
            _os = _$fldGdpOss.val();
            doSearch();
        };

        function changeLimitEvent(e)
        {
            if (e) e.preventDefault();
            _setLoadingMode(true);
            _$resultItemsContainer.empty();

            var $this = jQuery(this);
            _$btnGdpLimit.removeClass("active");
            $this.addClass("active");
            _limit = $this.data("limit");
            doSearch();
        };

        function changeTypeEvent(e)
        {
            if (e) e.preventDefault();
            _setLoadingMode(true);
            _$resultItemsContainer.empty();

            var $this = jQuery(this);
            _$btnTypeFilter.removeClass("active");
            $this.addClass("active");
            _type = $this.data("type");
            doSearch();
        };

        //LAYOUT STATUS
        function _setLoadingMode(tabLoad)
        {
            _$ctnGdpErrorMessage.hide();
            _$ctnGdpResultLoading.show();
            _$ctnGdpNoResult.hide();
            _$resultContainer.show();
            _$ctnTableDownloads.hide();
            _$ctnGdpProductInfo.hide();
            if (tabLoad === true)
            {
                _$ctnTableDownloads.show();
                _$ctnGdpProductInfo.show();
            }
        };

        function _setResultMode()
        {
            _$ctnGdpErrorMessage.hide();
            _$ctnGdpResultLoading.hide();
            _$ctnGdpNoResult.hide();
            _$resultContainer.show();
            _$ctnTableDownloads.show();
            _$ctnGdpProductInfo.show();
        };

        function _setNoResultMode(hideProductInfo)
        {
            _$ctnGdpErrorMessage.hide();
            _$ctnGdpResultLoading.hide();
            _$ctnGdpNoResult.show();
            _$resultContainer.show();
            _$ctnTableDownloads.show();
            _$ctnGdpProductInfo.show();
            if (hideProductInfo === true)
            {
                _$ctnGdpProductInfo.hide();
                _$ctnTableDownloads.hide();
            }
        };

        function _setErrorMode()
        {
            _$ctnGdpErrorMessage.show();
            _$ctnGdpResultLoading.hide();
            _$ctnGdpNoResult.hide();
            _$resultContainer.show();
            _$ctnTableDownloads.hide();
            _$ctnGdpProductInfo.hide();
        };

        function _hideResultPanel()
        {
            _$resultContainer.hide();
        };

        function gdpSearchPanelToggleEvent(e)
        {
            if (e) e.preventDefault();
            var $this = jQuery(this);
            var ndx = _$btnGdpSearchPanelToggle.index($this[0]);
            showGdpSearchPanel(ndx);
        };

        function showGdpSearchPanel(ndx)
        {
            var $this = jQuery(_$btnGdpSearchPanelToggle.get(ndx));
            var $panelToshow = jQuery(_$ctnGdpSearchPanelForm.get(ndx));
            if ($panelToshow.is(":visible"))
            {
                return;
            }
            _$btnGdpSearchPanelToggle.removeClass("active");
            $this.addClass("active")
            _$ctnGdpSearchPanelForm.slideUp();
            $panelToshow.slideDown();
        };

        function optionUpEvent(e)
        {
            if (e) e.preventDefault();
            var $this = jQuery(this);
            var ndx = _$btnGdpOptionUp.index($this[0]);
            moveOption(ndx, "up");
        };

        function optionDownEvent(e)
        {
            if (e) e.preventDefault();
            var $this = jQuery(this);
            var ndx = _$btnGdpOptionDown.index($this[0]);
            moveOption(ndx, "down");
        };

        function moveOption(ndx, versus)
        {
            var $optionPanel = (versus == "up" ? jQuery(_$ctnGdpOptionPanel.get(ndx)) : jQuery(_$ctnGdpOptionPanel.get(ndx)));
            var $optionMask = jQuery(_$ctnGdpOptionPanelMask.get(ndx));
            var optionHeight = jQuery($optionPanel.find("li")[0]).outerHeight();
            var optionPanelHeight = $optionPanel.height();
            var optionMaskHeight = $optionMask.outerHeight();
            var scrollAdder = versus == "up" ? optionHeight * -1 : optionHeight;
            var currentScrollTop = $optionMask.scrollTop();
            var newScrollTop = currentScrollTop + scrollAdder;
            $optionMask.scrollTop(newScrollTop);
        };

        function changeSearchPanelEvent(e)
        {
            if (e) e.preventDefault();
            var $this = jQuery(this);
            var ndx = _$btnGdpMobileSerchPanelSelector.index($this[0]);
            showSearchPanel(ndx);
        };

        function showSearchPanel(ndx)
        {
            _$btnGdpMobileSerchPanelSelector.removeClass("active");
            var $currentElement = jQuery(_$btnGdpMobileSerchPanelSelector.get(ndx)).addClass("active");
            _$fldGdpProductFamily.hide();
            _$fldGdpProductLine.hide();
            _$fldGdpProductModel.hide();
            if (ndx == 0) _$fldGdpProductFamily.show();
            if (ndx == 1) _$fldGdpProductLine.show();
            if (ndx == 2) _$fldGdpProductModel.show();
        }

        //LAYOUT
        function _initLayout(layout)
        {
            _$ctnGdpSearchPanel.hide();
            _$ctnGdpMainLoadingPanel.show();
            _$ctnGdpSearchPanelForm.hide();
            _$lblCurrentSearch.html(_lblCurrentSearchDefaultValue);
            _$resultContainer.hide();
            _$ctnGdpOptionPanel.css("top", 0);
            _$fldGdpProductFamily.addClass("active");
            _$fldGdpProductLine.removeClass("active");
            _$fldGdpProductModel.removeClass("active");
            jQuery(_$btnGdpMobileSerchPanelSelector.get(0)).addClass("active");
            _$ctnGdpSearchByModelNameSuggestions.empty().hide();
            _$ctnGdpSearchByModelNameSuggestionsLoading.hide();
            _$ctnGdpSearchByModelNameSuggestionsNoItems.hide();
            _$ctnGdpSearchByModelNameSuggestionsInvalidName.hide();
        };

        function _resetLayout(layout)
        {
            if (_currentLayout.Id == AcerUi.PC)
            {
                _$fldGdpProductFamily.show();
                _$fldGdpProductLine.show();
                _$fldGdpProductModel.show();
            }
            else
            {
                var ndx = 0;
                if (!_$fldGdpProductLine.hasClass("disable")) ndx = 1;
                if (!_$fldGdpProductModel.hasClass("disable")) ndx = 2;
                showSearchPanel(ndx);
            }
        };

        this.resize = function ()
        {
            return;
        };

        this.layoutChange = function (currentLayout)
        {
            if (_currentLayout == null || _currentLayout.Id == currentLayout.Id)
                return;
            _currentLayout = currentLayout;
            _resetLayout(_currentLayout);
        };
    };
};

/***************************************************************************************************************************\
OLD WHERE TO BUY
\***************************************************************************************************************************/
AcerUi.WhereToBuy = function ()
{
    var that = this;
    var _currentLayout = null;
    var _urlChecker = "wheretobuy";
    var _activeClassName = "active";
    var _noDataClassName = "noData";

    var _containerSelector = "#whereToBuyContainer";
    var _$container = null;

    var _searchBoxSelector = ".search-conteiner";
    var _$searchBox = null;

    var _showSellerListButtonSelector = ".search-conteiner a.list";
    var _$showSellerListButton = null;

    var _showMapButtonSelector = ".search-conteiner a.map";
    var _$showMapButton = null;

    var _sellerListSelector = ".sellers-list";
    var _$sellerList = null;

    var _noSellersMessageSelector = ".sellers-list .no-store";
    var _$noSellersMessage = null;

    var _noAddressMessageSelector = ".sellers-list .no-adress";
    var _$noAddressMessage = null;

    var _sellersContainerSelector = ".sellers-list  .store-conteiner";
    var _$sellersContainer = null;

    var _sellersSelector = ".sellers-list  .store-conteiner  .seller";
    var _$sellers = null;

    var _mapSelector = ".sellers-list .container-map";
    var _$map = null;

    var _searchButtonSelector = ".search-conteiner a";
    var _$searchButton = null;

    var _inputTextSelector = ".search-conteiner input";
    var _$inputText = "";

    var _pageNavigationSelector = ".page-navigation";
    var _$pageNavigation = null;

    var _legendaSelector = ".legenda";
    var _$legenda = null;

    var _currentPageCoords = null;
    var _currentPageUrl = "";
    var _mapObj = null;
    var _currentRegion = "";

    this.init = function (layout)
    {
        _currentLayout = layout;

        /*Container check*/
        _$container = jQuery(_containerSelector);
        if (_$container.length == 0)
            return;

        //Objects
        _$container = jQuery(_$container[0]);
        _$searchBox = jQuery(jQuery.find(_searchBoxSelector));
        _$showSellerListButton = jQuery(jQuery.find(_showSellerListButtonSelector));
        _$showMapButton = jQuery(jQuery.find(_showMapButtonSelector));
        _$sellerList = jQuery(jQuery.find(_sellerListSelector));
        _$noSellersMessage = jQuery(jQuery.find(_noSellersMessageSelector));
        _$noAddressMessage = jQuery(jQuery.find(_noAddressMessageSelector));
        _$sellersContainer = jQuery(jQuery.find(_sellersContainerSelector));
        _$sellers = jQuery(jQuery.find(_sellersSelector));
        _$map = jQuery(jQuery.find(_mapSelector));
        _$searchButton = jQuery(jQuery.find(_searchButtonSelector));
        _$inputText = jQuery(jQuery.find(_inputTextSelector));
        _$pageNavigation = jQuery(jQuery.find(_pageNavigationSelector));
        _$legenda = jQuery(jQuery.find(_legendaSelector));

        _hideAll();

        /*calculatedProperties*/
        _setCalculatedProperties();

        /*events*/
        _$showSellerListButton.click(_showList);
        _$showMapButton.click(_showMap);
        _$searchButton.click(_searchAddress);
        _$inputText.keypress(_onKeyUp);
        _$inputText.focus(_inputFocus);
        _$inputText.blur(_inputBlur);

        AcerUi.addChangeLayoutListener(that.layoutChange);

        _resetLayout(layout);
        _initLayout();
    };

    function _resetLayout(layout)
    {
        return;
    };

    function _setCalculatedProperties()
    {
        var currenPageUrl = (document.location + "");

        var coordsString = currenPageUrl.substr(currenPageUrl.lastIndexOf("/") + 1);
        if (coordsString.indexOf(";") != -1)
        {
            coordsString = _normalizeUrl(coordsString);
            coordsSplitter = coordsString.split(";");
            if (coordsSplitter.length == 2 && coordsSplitter[0] != "" && !isNaN(coordsSplitter[0]) && coordsSplitter[1] != "" && !isNaN(coordsSplitter[1]))
            {
                _currentPageCoords = new AcerUi.WhereToBuy.Coords(parseFloat(coordsSplitter[0]), parseFloat(coordsSplitter[1]));
            }
        }
        _currentPageUrl = currenPageUrl;
        if (_currentPageCoords != null)
        {
            _currentPageUrl = _currentPageUrl.substr(0, _currentPageUrl.lastIndexOf("/") + 1);
        }
        if (_currentPageUrl.charAt(_currentPageUrl.length - 1) != "/")
        {
            _currentPageUrl += "/";
        }

        _currentRegion = _$inputText.attr("rel");

        //autoGeoLocalization
        if (_currentPageCoords == null && navigator.geolocation)
        {
            // Use method getCurrentPosition to get coordinates
            navigator.geolocation.getCurrentPosition(function (position)
            {
                _doSearch(position.coords.latitude, position.coords.longitude);
            },
            function ()
            {
                return;
            });
        }
    };

    function _normalizeUrl(url)
    {
        var nUrl = url;
        if (nUrl.indexOf("#"))
        {
            nUrl = nUrl.split("#")[0];
        }
        if (nUrl.indexOf("?"))
        {
            nUrl = nUrl.split("?")[0];
        }
        return nUrl;
    }

    function _hideAll()
    {
        //_$container.hide();
        //_$searchBox.hide();
        _$map.hide();
        _$showSellerListButton.hide();
        _$showMapButton.hide();
        //_$sellerList.hide();
        _$noSellersMessage.hide();
        _$noAddressMessage.hide();
        _$sellersContainer.hide();
        //_$sellers.hide();
        _$pageNavigation.hide();
        _$legenda.hide();
    }

    function _inputFocus()
    {
        if (_$inputText.val() == _$inputText.attr("data-default"))
        {
            _$inputText.val("");
            _$inputText.removeClass(_noDataClassName);
            _$noSellersMessage.hide();
        }
    }

    function _inputBlur()
    {
        if (_$inputText.val() == "")
        {
            _$inputText.val(_$inputText.attr("data-default"));
            _$inputText.addClass(_noDataClassName);
        }
    }

    function _initLayout()
    {
        _hideAll();

        if (_$inputText.val() == "")
        {
            _$inputText.val(_$inputText.attr("data-default"));
            _$inputText.addClass(_noDataClassName);
        }

        if (_currentPageCoords == null)
        {
            //_$noAddressMessage.show();
            return;
        }

        if (_$sellers.length == 0)
        {
            _$noSellersMessage.show();
        }

        if (_$sellers.length > 0)
        {
            _$map.show();
            _$showSellerListButton.show();
            _$showMapButton.show();
            _printMap();
            _$legenda.show();
        }
    }

    function _printMap()
    {
        try
        {
            var mapOptions = {
                zoom: 10,
                center: new google.maps.LatLng(_currentPageCoords.latitude, _currentPageCoords.longitude),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            _mapObj = new google.maps.Map(_$map[0], mapOptions);

            for (var i = 0; i < _$sellers.length; i++)
            {
                var $seller = jQuery(_$sellers[i]);
                _addPinpointToMap($seller);
            }
        }
        catch (e)
        {
        }
    };

    function _addPinpointToMap($seller)
    {
        var stringCoords = $seller.attr("rel");
        var coordsSplitter = stringCoords.split(";");
        if (coordsSplitter.length == 2 && coordsSplitter[0] != "" && !isNaN(coordsSplitter[0]) && coordsSplitter[1] != "" && !isNaN(coordsSplitter[1]))
        {
            var iconUrl = jQuery($seller.find("ul.legenda li img:first")).attr("src");

            var sellerCords = new AcerUi.WhereToBuy.Coords(parseFloat(coordsSplitter[0]), parseFloat(coordsSplitter[1]));

            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(sellerCords.latitude, sellerCords.longitude),
                map: _mapObj,
                title: $seller.find("h2").text(),
                icon: iconUrl
            });
            var $tooltip = jQuery($seller.clone()).css("width", "auto");
            var tooltip = $tooltip.show().wrap('<div></div>').parent().html();
            var infowindow = new google.maps.InfoWindow({
                content: tooltip
            });
            google.maps.event.addListener(marker, 'click', function ()
            {
                infowindow.open(_mapObj, marker);
            });
        }
    };

    function _showList()
    {
        _$showSellerListButton.addClass(_activeClassName);
        _$showMapButton.removeClass(_activeClassName);
        _$map.hide();
        _$sellerList.show();
        _$sellersContainer.show();
        _$sellers.show();
        _setMaxHeight();
        return false;
    }

    function _setMaxHeight()
    {
        var _$maxHeight = 0;
        var _$boxHeight = 0;
        var _$groupBox = _$sellers;

        if (_currentLayout.Id == AcerUi.SMARTPHONE)
        {
            _$groupBox.css({ 'height': 'auto' });
        }
        else
        {
            for (var i = 0; i < _$groupBox.length; i++)
            {
                _$boxHeight = parseInt(jQuery(jQuery(_$groupBox)[i]).height(), 10);
                if (_$boxHeight == 0)
                { return; }
                _$maxHeight = Math.max(_$maxHeight, _$boxHeight);
            }
            _$groupBox.css({ height: _$maxHeight });
        }
    }

    function _showMap()
    {
        _$showMapButton.addClass(_activeClassName);
        _$showSellerListButton.removeClass(_activeClassName);
        _$map.show();
        _$sellerList.show();
        _$sellersContainer.hide();
        _$sellers.hide();
        return false;
    }

    function _searchAddress()
    {
        var address = jQuery.trim(_$inputText.val());
        if (address == "")
        {
            _$noSellersMessage.show();
            return false;
        }
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address, region: _currentRegion }, _searchAddressCallBack);
        return false;
    };

    function _searchAddressCallBack(results, status)
    {
        if (status == google.maps.GeocoderStatus.OK)
        {
            var position = results[0].geometry.location;
            _doSearch(position.lat(), position.lng());
        }
        else
        {
            _$noSellersMessage.show();
        }
    };

    function _doSearch(latitude, longutude)
    {
        var searchUrl = _currentPageUrl + (latitude + "").split(",").join(".") + ";" + (longutude + "").split(",").join(".");
        document.location = searchUrl;
    }

    function _onKeyUp(e)
    {
        var $this = jQuery(this);

        if (e.charCode == 13)
        {
            _searchAddress();
        }
    };

    this.resize = function (currentLayout)
    {
        return;
    };

    this.layoutChange = function (currentLayout, previusLayout)
    {

        if (_currentLayout == null || _currentLayout.Id == currentLayout.Id)
            return;
        _currentLayout = currentLayout;
        _printMap();
        _setMaxHeight();

    };
};
AcerUi.WhereToBuy.Coords = function (latitude, longitude)
{
    this.latitude = latitude;
    this.longitude = longitude;
};

/***************************************************************************************************************************\
NEW WHERE TO BUY
\***************************************************************************************************************************/
AcerUi.WhereToBuyNew = function ()
{
    var self = this;
    var _currentLayout = null;

    var _$ctnWtbMainContainer = null;

    var _$ctnWtbTextSearch = null;
    var _$fldWtbAddress = null;
    var _$btnWtbTextSearch = null;
    var _$btnWtbCurrentPosition = null;

    var _$ctnWtbManageResult = null;
    var _$lblWtbSearch = null;
    var _$btnWtbNewSearch = null;
    var _$btnWtbToggleRefineSearch = null;
    var _$ctnWtbRefineSearch = null;
    var _$ctnWtbPartnerPrograms = null;
    var _$tplWtbPartnerProgramsItem = null;
    var _tplWtbPartnerProgramsItemHTML = "";
    var _$btnWtbPartnerPrograms = null;

    var _$ctnWtbSwitchView = null;
    var _$btnWtbMapView = null;
    var _$btnWtbListView = null;

    var _$ctnWtbMapContent = null;
    var _$btnShowPartnerList = null;
    var _$ctnWtbMapContentPartnerList = null;
    var _$btnHidePartnerList = null;
    var _$ctnWtbMapContentPartnerListItems = null;
    var _$tplWtbMapContentPartnerListItem = null;
    var _tplWtbMapContentPartnerListItemHTML = "";
    var _$btnWtbMapGotoPartner = null;
    var _$btnPartnerListMoreResult = null;

    var _$ctnWtbMapContentMap = null;

    var _$ctnWtbPartnerListContent = null;
    var _$ctnWtbPartnerListFilter = null;
    var _$ctnWtbPartnerListRange = null;
    var _$fldWtbPartnerRange = null;
    var _$ctnWtbPartnerListSort = null;
    var _$fldWtbPartnerListSort = null;
    var _$ctnWtbPartnerListItemsContainer = null;
    var _$tplWtbPartnerListItem = null;
    var _tplWtbPartnerListItemHTML = "";
    var _$btnWtbPartnerListItemShowInMap = null;
    var _$btnWtbPartnerListItemGetDirection = null;

    var _$ctnWtbNoResultFound = null;
    var _$ctnWtbLoading = null;
    var _$ctnWtbInfo = null;

    var _$ctnWtbDataBase = null;

    var _mapObj = null;
    var _currentRegion = null;
    var _currentPageUrl = null;
    var _currentCords = null;
    var _currentRange = 0;
    var _startLayout = "map";

    var _currentSearchText = "";
    var _currentSubCountry = "";
    var _currentPartnerProgram = "";
    var _currentPartnerSpecialProgram = "";
    var _$currentPartners = null;

    var _partners = [];
    var _partnermarkers = [];
    var _partnerListHeight = -1;

    this.init = function (layout)
    {
        _currentLayout = layout;

        //Inito objects
        _$ctnWtbMainContainer = jQuery("#ctnWtbMainContainer");
        if (_$ctnWtbMainContainer.length == 0)
            return;
        _$ctnWtbMainContainer = jQuery(_$ctnWtbMainContainer[0]);

        _$ctnWtbTextSearch = jQuery(_$ctnWtbMainContainer.find(".ctnWtbTextSearch"));
        _$fldWtbAddress = jQuery(_$ctnWtbMainContainer.find(".fldWtbAddress"));
        _$btnWtbTextSearch = jQuery(_$ctnWtbMainContainer.find(".btnWtbTextSearch"));
        _$btnWtbCurrentPosition = jQuery(_$ctnWtbMainContainer.find(".btnWtbCurrentPosition"));

        _$ctnWtbManageResult = jQuery(_$ctnWtbMainContainer.find(".ctnWtbManageResult"));
        _$lblWtbSearch = jQuery(_$ctnWtbMainContainer.find(".lblWtbSearch"));
        _$btnWtbNewSearch = jQuery(_$ctnWtbMainContainer.find(".btnWtbNewSearch"));
        _$btnWtbToggleRefineSearch = jQuery(_$ctnWtbMainContainer.find(".btnWtbToggleRefineSearch"));
        _$ctnWtbRefineSearch = jQuery(_$ctnWtbMainContainer.find(".ctnWtbRefineSearch"));
        _$ctnWtbPartnerPrograms = jQuery(_$ctnWtbMainContainer.find(".ctnWtbPartnerPrograms"));
        _$tplWtbPartnerProgramsItem = jQuery(_$ctnWtbMainContainer.find(".tplWtbPartnerProgramsItem"));
        _tplWtbPartnerProgramsItemHTML = _$tplWtbPartnerProgramsItem.html();
        _$btnWtbPartnerPrograms = jQuery(_$ctnWtbMainContainer.find(".btnWtbPartnerPrograms"));

        _$ctnWtbSwitchView = jQuery(_$ctnWtbMainContainer.find(".ctnWtbSwitchView"));
        _$btnWtbMapView = jQuery(_$ctnWtbMainContainer.find(".btnWtbMapView"));
        _$btnWtbListView = jQuery(_$ctnWtbMainContainer.find(".btnWtbListView"));

        _$ctnWtbMapContent = jQuery(_$ctnWtbMainContainer.find(".ctnWtbMapContent"));
        _$btnShowPartnerList = jQuery(_$ctnWtbMainContainer.find(".btnShowPartnerList"));
        _$ctnWtbMapContentPartnerList = jQuery(_$ctnWtbMainContainer.find(".ctnWtbMapContentPartnerList"));
        _$btnHidePartnerList = jQuery(_$ctnWtbMainContainer.find(".btnHidePartnerList"));
        _$ctnWtbMapContentPartnerListItems = jQuery(_$ctnWtbMainContainer.find(".ctnWtbMapContentPartnerListItems"));

        _$tplWtbMapContentPartnerListItem = jQuery(_$ctnWtbMainContainer.find(".tplWtbMapContentPartnerListItem"));
        _tplWtbMapContentPartnerListItemHTML = _$tplWtbMapContentPartnerListItem.html();

        _$btnWtbMapGotoPartner = jQuery(_$ctnWtbMainContainer.find(".btnWtbMapGotoPartner"));

        _$btnPartnerListMoreResult = jQuery(_$ctnWtbMainContainer.find(".btnPartnerListMoreResult"));

        _$ctnWtbMapContentMap = jQuery(_$ctnWtbMainContainer.find(".ctnWtbMapContentMap"));

        _$ctnWtbPartnerListContent = jQuery(_$ctnWtbMainContainer.find(".ctnWtbPartnerListContent"));
        _$ctnWtbPartnerListFilter = jQuery(_$ctnWtbMainContainer.find(".ctnWtbPartnerListFilter"));
        _$ctnWtbPartnerListRange = jQuery(_$ctnWtbMainContainer.find(".ctnWtbPartnerListRange"));
        _$fldWtbPartnerRange = jQuery(_$ctnWtbMainContainer.find(".fldWtbPartnerRange"));
        _$ctnWtbPartnerListSort = jQuery(_$ctnWtbMainContainer.find(".ctnWtbPartnerListSort"));
        _$fldWtbPartnerListSort = jQuery(_$ctnWtbMainContainer.find(".fldWtbPartnerListSort"));
        _$ctnWtbPartnerListItemsContainer = jQuery(_$ctnWtbMainContainer.find(".ctnWtbPartnerListItemsContainer"));
        _$tplWtbPartnerListItem = jQuery(_$ctnWtbMainContainer.find(".tplWtbPartnerListItem"));
        _tplWtbPartnerListItemHTML = _$tplWtbPartnerListItem.html();
        _$btnWtbPartnerListItemShowInMap = jQuery(_$ctnWtbMainContainer.find(".btnWtbPartnerListItemShowInMap"));
        _$btnWtbPartnerListItemGetDirection = jQuery(_$ctnWtbMainContainer.find(".btnWtbPartnerListItemGetDirection"));


        _$currentPartners = jQuery(_$ctnWtbPartnerListItemsContainer.find("> div"));

        _$ctnWtbNoResultFound = jQuery(_$ctnWtbMainContainer.find(".ctnWtbNoResultFound"));
        _$ctnWtbLoading = jQuery(_$ctnWtbMainContainer.find(".ctnWtbLoading"));
        _$ctnWtbInfo = jQuery(_$ctnWtbMainContainer.find(".ctnWtbInfo"));

        _$ctnWtbDataBase = jQuery(_$ctnWtbMainContainer.find(".ctnWtbDataBase"));

        //events
        _$btnWtbTextSearch.live("click", _searchAddressEvent);
        _$btnWtbCurrentPosition.live("click", _goToCurrentPositionEvent);
        _$btnWtbMapGotoPartner.live("click", _goToMapPartnerEvent);
        _$btnShowPartnerList.live("click", _showPartnerListEvent)
        _$btnHidePartnerList.live("click", _hidePartnerListEvent);
        _$btnWtbToggleRefineSearch.live("click", _toggleRefineSearchEvent);
        _$btnWtbMapView.live("click", _showMapContentEvent);
        _$btnWtbListView.live("click", _showPartnerListContentEvent);
        _$btnWtbNewSearch.live("click", _setNewSearchEvent);

        _$btnWtbPartnerListItemShowInMap.live("click", _goToMapPartnerEvent);
        _$btnWtbPartnerListItemGetDirection.live("click", _getDirectionEvent);

        _$btnWtbPartnerPrograms.live("click", _filterByParternProgramEvent);

        _$fldWtbPartnerListSort.live("change", _sortChangeEvent);
        _$fldWtbPartnerRange.live("change", _rangeChangeEvent);
        _$fldWtbAddress.keydown(_searchAddressKeyEvent);
        _$fldWtbAddress.focus(_searchAddressReset);

        //register core events
        AcerUi.addResizeListener(self.resize);
        AcerUi.addChangeLayoutListener(self.layoutChange);

        //do first empty search
        _setLoadingMode();
        window.setTimeout(function ()
        {
            _initParams();
            _initDatabase();
            _initMap();
            _printPartners(_partners);
            _printFilters(_partners);
            _initLayout();
        }, 250);
    };

    function _initDatabase()
    {
        var database = [];
        var itemProperties = ["id", "latitude", "longitude", "name", "address", "phone", "email", "fax", "website", "partnerProgramId", "partnerProgramLabel", "partnerSpecialProgramId", "partnerSpecialProgramLabel", "pinPointImageSrc"];
        var $items = jQuery(_$ctnWtbDataBase.find("div"));
        for (var i = 0; i < $items.length; i++)
        {
            var $item = jQuery($items[i]);
            var dbItem = {};
            for (var ii = 0; ii < itemProperties.length; ii++)
            {
                var propertyName = itemProperties[ii];
                dbItem[propertyName] = $item.find("." + propertyName).html();
            }
            database.push(dbItem);
        }
        _$ctnWtbDataBase.empty().remove();
        database = _sortPartners(database, "asc");
        _partners = database;
    };

    function getPartnerById(id)
    {
        for (var i = 0; i < _partners.length; i++)
        {
            if (_partners[i].id == id)
            {
                return _partners[i];
            }
        }
        return {};
    };

    function _printPartners(partners)
    {
        _$ctnWtbMapContentPartnerListItems.empty().show();
        _$ctnWtbPartnerListItemsContainer.empty().show();
        _partnermarkers = [];
        maxHeight = 0;
        for (var i = 0; i < partners.length; i++)
        {
            var partner = partners[i];
            var $mapPartner = jQuery("<div></div>").html(_tplWtbMapContentPartnerListItemHTML);
            var $listPartner = jQuery("<div></div>").html(_tplWtbPartnerListItemHTML);

            $mapPartner.find(".txt-number").html(i + 1);
            $listPartner.find(".txt-number").html(i + 1);
            for (var propertyName in partner)
            {
                $mapPartner.find(".txt-" + propertyName.toLowerCase()).html(partner[propertyName]);
                $mapPartner.find(".lnk-" + propertyName.toLowerCase()).attr("href", partner[propertyName]);
                $mapPartner.find(".lnk-alt-" + propertyName.toLowerCase()).attr("alt", partner[propertyName]).attr("title", partner[propertyName]);

                $listPartner.find(".txt-" + propertyName.toLowerCase()).html(partner[propertyName]);
                $listPartner.find(".lnk-" + propertyName.toLowerCase()).attr("href", partner[propertyName]);
                $listPartner.find(".lnk-alt-" + propertyName.toLowerCase()).attr("alt", partner[propertyName]).attr("title", partner[propertyName]);
            }

            $mapPartner.find("a").attr("rel", partner.id);
            $mapPartner.find(".number").css("background-image", "url(" + partner.pinPointImageSrc + ")");
            $listPartner.find("a.btnWtbPartnerListItemShowInMap").attr("rel", partner.id);
            $listPartner.find("a.btnWtbPartnerListItemGetDirection").attr("rel", partner.id);
            _$ctnWtbMapContentPartnerListItems.append($mapPartner);
            _$ctnWtbPartnerListItemsContainer.append($listPartner);
            var markerInfo = _addPinpointToMap(partner, $listPartner);
            partner["marker"] = markerInfo.marker;
            partner["infowindow"] = markerInfo.infowindow;
        }

        if (partners.length != 0)
        {
            _$ctnWtbMapContentPartnerListItems.find("a.btnWtbMapGotoPartner").removeClass("active");
            var $firstItem = jQuery(_$ctnWtbMapContentPartnerListItems.find("a.btnWtbMapGotoPartner")[0]).addClass("active");
            _mapObj.setCenter(new google.maps.LatLng(partners[0].latitude, partners[0].longitude));
        }
        _resizeListHeight();
    };

    function _printFilters(partners)
    {
        _$ctnWtbPartnerPrograms.empty();
        var addedPrograms = [];
        for (var i = 0; i < partners.length; i++)
        {
            var partner = partners[i];
            if (addedPrograms["x" + partner.partnerProgramId] !== true)
            {
                addedPrograms["x" + partner.partnerProgramId] = true;
                var $filterItem = jQuery("<li></li>").html(_tplWtbPartnerProgramsItemHTML);
                $filterItem.find("a").attr("rel", partner.partnerProgramId);
                $filterItem.find(".label").html(partner.partnerProgramLabel);
                _$ctnWtbPartnerPrograms.append($filterItem);
            }
        }
    };

    function _initParams()
    {
        _currentRegion = _$ctnWtbMainContainer.data("region");
        _currentRange = _$fldWtbPartnerRange.val();
        var currenPageUrl = (document.location + "");

        var urlParamsString = currenPageUrl.substr(currenPageUrl.lastIndexOf("/") + 1);
        if (urlParamsString.indexOf(";") != -1)
        {
            urlParamsString = _normalizeUrl(urlParamsString);
            urlParamsSplitter = urlParamsString.split(";");
            var latitude = parseFloat(urlParamsSplitter[0]);
            var longitude = parseFloat(urlParamsSplitter[1]);
            _setCurrentCords(latitude, longitude);
            _currentSubCountry = decodeURIComponent(urlParamsSplitter[2]);
            _currentPartnerProgram = urlParamsSplitter[3];
            _currentPartnerSpecialProgram = urlParamsSplitter[4];
            _currentRange = parseInt(urlParamsSplitter[5]);
            _currentSearchText = decodeURIComponent(urlParamsSplitter[6]);
            _startLayout = urlParamsSplitter[7] ? urlParamsSplitter[7] : "map";
        }
        _currentPageUrl = currenPageUrl;
        if (_currentCords != null)
        {
            _currentPageUrl = _currentPageUrl.substr(0, _currentPageUrl.lastIndexOf("/") + 1);
        }
        if (_currentPageUrl.charAt(_currentPageUrl.length - 1) != "/")
        {
            _currentPageUrl += "/";
        }
    };

    function _initLayout()
    {
        _setInfoMode();
        _$btnShowPartnerList.hide();
        _$fldWtbPartnerRange.val(_currentRange);
        _$fldWtbAddress.val(_currentSearchText);

        if (_currentCords != null)
        {

            var labelTxt = _currentSearchText != "" ? _currentSearchText : _$fldWtbAddress.data("currentpositiontext");
            _$fldWtbAddress.val(labelTxt);
            _$lblWtbSearch.html(labelTxt);

            if (_partners.length == 0)
            {
                _setNoResultMode();
                return;
            }

            if (_startLayout == "map")
            {

                _setMapMode();
            }
            else
            {
                _setPartnerListMode();
            }
            return;
        }

        if (_currentCords == null)
        {
            if (!navigator.geolocation)
            {
                _setInfoMode();
                return;
            }

            // Use method getCurrentPosition to get coordinates
            navigator.geolocation.getCurrentPosition(function (position)
            {
                _setLoadingMode();
                _setCurrentCords(position.coords.latitude, position.coords.longitude);
                _doSearch();
            },
            function ()
            {
                _setInfoMode();
            });
        }
        _showPartnerList(true);
    };

    function _hideAll()
    {
        _$ctnWtbTextSearch.hide();
        _$ctnWtbManageResult.hide();
        _$ctnWtbSwitchView.hide();
        _$ctnWtbMapContent.hide();
        _$ctnWtbPartnerListContent.hide();
        _$ctnWtbNoResultFound.hide();
        _$ctnWtbLoading.hide();
        _$ctnWtbInfo.hide();
        _$ctnWtbRefineSearch.hide();
    };

    function _setLoadingMode()
    {
        _hideAll();
        _$ctnWtbLoading.show();
    };

    function _setInfoMode()
    {
        _hideAll();
        _$ctnWtbTextSearch.show();
        _$ctnWtbInfo.show();
    };

    function _setNoResultMode()
    {
        _hideAll();
        _$ctnWtbTextSearch.show();
        _$ctnWtbNoResultFound.show();
    };

    function _setMapMode()
    {
        _hideAll();
        _$ctnWtbManageResult.show();
        _$ctnWtbSwitchView.show();
        _$ctnWtbMapContent.show();
        _$btnWtbMapView.addClass("active");
        _$btnWtbListView.removeClass("active");
        google.maps.event.trigger(_mapObj, 'resize');
    };

    function _setPartnerListMode()
    {
        _hideAll();
        _$ctnWtbManageResult.show();
        _$ctnWtbSwitchView.show();
        _$ctnWtbPartnerListContent.show();
        _$btnWtbMapView.removeClass("active");
        _$btnWtbListView.addClass("active");
        _resizeListHeight();
    };

    function _resizeListHeight()
    {
        if (!_$ctnWtbPartnerListItemsContainer.is(":visible"))
        {
            return;
        }
        var $ps = _$ctnWtbPartnerListItemsContainer.find("> div");
        var h = 0;
        for (var i = 0; i < $ps.length; i++)
        {
            h = Math.max(jQuery($ps[i]).height(), h);
        }
        $ps.height(h);
    };

    function _setNewSearchMode()
    {
        _hideAll();
        _$ctnWtbTextSearch.show();
        _$ctnWtbInfo.show();
        _$fldWtbAddress.val("");
    };

    function _setCurrentCords(latitude, longitude)
    {
        _currentCords = { "latitude": latitude, "longitude": longitude };
    };

    function _searchAddressKeyEvent(e)
    {
        var $this = jQuery(this);
        if (e.keyCode == 13)
        {
            _$btnWtbTextSearch.click();
            return false;
        }
        return true;
    };

    function _searchAddressReset(e)
    {
        if (e) e.preventDefault();
        if (jQuery.trim(_$fldWtbAddress.val()) == jQuery.trim(_$fldWtbAddress.data("currentpositiontext")))
        {
            _$fldWtbAddress.val("");
        }
    };

    function _searchAddressEvent(e)
    {
        if (e) e.preventDefault();
        var address = _$fldWtbAddress.val();
        _searchAddress(address);
    };

    function _searchAddress(address)
    {
        _currentSearchText = address;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address, region: _currentRegion }, _searchAddressCallBack);
    };

    function _goToCurrentPositionEvent(e)
    {
        if (e) e.preventDefault();
        _goToCurrentPosition();
    };

    function _goToCurrentPosition()
    {
        // Use method getCurrentPosition to get coordinates
        navigator.geolocation.getCurrentPosition(function (position)
        {
            _setLoadingMode();
            _setCurrentCords(position.coords.latitude, position.coords.longitude);
            _currentSearchText = "";
            _doSearch();
        },
        function ()
        {

        });
    };

    function _searchAddressCallBack(results, status)
    {
        if (status == google.maps.GeocoderStatus.OK)
        {
            var position = results[0].geometry.location;
            _setCurrentCords(position.lat(), position.lng());
            _doSearch();
        }
        else
        {
            _setNoResultMode();
        }
    };

    function _goToMapPartnerEvent(e)
    {
        if (e) e.preventDefault();
        var partnerId = jQuery(this).attr("rel");
        _goToMapPartner(partnerId);
    };

    function _goToMapPartner(partnerId)
    {
        var partner = getPartnerById(partnerId);
        var latitude = parseFloat(partner.latitude);
        var longitude = parseFloat(partner.longitude);
        //_mapObj.setZoom(15);

        _$btnWtbMapGotoPartner.removeClass("active");
        var $items = _$ctnWtbMapContentPartnerListItems.find("a.btnWtbMapGotoPartner");
        $items.removeClass("active");
        var i;
        for (i = 0; i < $items.length; i++)
        {
            if (jQuery($items[i]).attr("rel") == partnerId)
            {
                jQuery($items[i]).addClass("active");
                break;
            }
        }
        _setMapMode();
        _mapObj.setCenter(new google.maps.LatLng(latitude, longitude));
        google.maps.event.trigger(partner.marker, "click");
    };

    function _getDirectionEvent(e)
    {
        if (e) e.preventDefault();
        var partnerId = jQuery(this).attr("rel");
        _getDirection(partnerId);
    };

    function _getDirection(partnerId)
    {
        var partner = getPartnerById(partnerId);
        var partnerLatitude = parseFloat(partner.latitude);
        var partnerLongitude = parseFloat(partner.longitude);
        var currentLatitude = _currentCords.latitude;
        var currentLongitude = _currentCords.longitude;
        var googleCoordsSearch = "http://maps.google.com/?saddr={sLat},{sLong}&daddr={dLat},{dLong}";
        var partner = getPartnerById(partnerId);
        var partnerLatitude = parseFloat(partner.latitude);
        var partnerLongitude = parseFloat(partner.longitude);
        var currentLatitude = _currentCords.latitude;
        var currentLongitude = _currentCords.longitude;

        googleCoordsSearch = googleCoordsSearch.split("{sLat}").join(currentLatitude);
        googleCoordsSearch = googleCoordsSearch.split("{sLong}").join(currentLongitude);
        googleCoordsSearch = googleCoordsSearch.split("{dLat}").join(partnerLatitude);
        googleCoordsSearch = googleCoordsSearch.split("{dLong}").join(partnerLongitude);

        window.open(googleCoordsSearch);
    };

    function _showPartnerListEvent(e)
    {
        if (e) e.preventDefault();
        _showPartnerList();
    };

    function _showPartnerList(fast)
    {
        var contentWidth = _$ctnWtbMapContent.width();
        var preCenter = _mapObj.getCenter();
        var partnerListWidth = _$ctnWtbMapContentPartnerList.width();
        if (fast === true)
        {
            _$ctnWtbMapContentMap.css({ "width": contentWidth - partnerListWidth, "left": partnerListWidth });
        }
        else
        {
            _$ctnWtbMapContentMap.animate({ "width": contentWidth - partnerListWidth, "left": partnerListWidth }, function ()
            {
                google.maps.event.trigger(_mapObj, 'resize');
                _mapObj.setCenter(preCenter);
                _$btnShowPartnerList.hide();
            });
        }
    };

    function _hidePartnerListEvent(e)
    {
        if (e) e.preventDefault();
        _hidePartnerList();

    };

    function _hidePartnerList()
    {
        var contentWidth = _$ctnWtbMapContent.width();
        var preCenter = _mapObj.getCenter();
        _$ctnWtbMapContentMap.animate({ "width": contentWidth, "left": 0 }, function ()
        {
            google.maps.event.trigger(_mapObj, 'resize');
            _mapObj.setCenter(preCenter);
            _$btnShowPartnerList.show();
        });
    };

    function _toggleRefineSearchEvent(e)
    {
        if (e) e.preventDefault();
        _toggleRefineSearch();
    };

    function _toggleRefineSearch()
    {
        if (_$ctnWtbRefineSearch.is(":visible"))
        {
            _$ctnWtbRefineSearch.slideUp("fast");
        }
        else
        {
            _$ctnWtbRefineSearch.slideDown("slow");
        }
    };

    function _showMapContentEvent(e)
    {
        if (e) e.preventDefault();
        _showMapContent();
    };

    function _showMapContent()
    {
        _$btnWtbMapView.removeClass("active");
        _$btnWtbListView.addClass("active");
        _setMapMode();
    };

    function _showPartnerListContentEvent(e)
    {
        if (e) e.preventDefault();
        _showPartnerListContent();
    };

    function _showPartnerListContent()
    {
        _$btnWtbMapView.addClass("active");
        _$btnWtbListView.removeClass("active");
        _setPartnerListMode();
    };

    function _setNewSearchEvent(e)
    {
        if (e) e.preventDefault();
        _setNewSearch();
    };

    function _setNewSearch()
    {
        _setNewSearchMode();
    };

    function _filterByParternProgramEvent(e)
    {
        if (e) e.preventDefault();
        if (jQuery(this).hasClass("selected"))
        {
            jQuery(this).removeClass("selected");
        }
        else
        {
            jQuery(this).addClass("selected");
        }
        _filterByParternProgram();
    };

    function _filterByParternProgram()
    {
        var $selectedItems = _$ctnWtbPartnerPrograms.find("a.selected");
        var tester = ",";
        for (var i = 0; i < $selectedItems.length; i++)
        {
            tester += jQuery($selectedItems[i]).attr("rel") + ",";
        }
        var newPartnerList = [];
        if (tester == ",")
        {
            newPartnerList = _partners;
        }
        else
        {
            for (var i = 0; i < _partners.length; i++)
            {
                var partner = _partners[i];
                if (tester.indexOf("," + partner.partnerProgramId + ",") != -1)
                {
                    newPartnerList.push(partner);
                }
            }
        }
        _reInitMap();
        newPartnerList = _sortPartners(newPartnerList, _$fldWtbPartnerListSort.val());
        _printPartners(newPartnerList);

    };

    function _doSearch()
    {
        if (_currentCords == null)
        {
            _setNewSearchMode();
        }

        var latitude = (_currentCords.latitude + "").split(",").join(".");
        var longitude = (_currentCords.longitude + "").split(",").join(".");
        var subcountry = _currentSubCountry;
        var partnerProgram = _currentPartnerProgram;
        var partnerSpecialProgram = _currentPartnerSpecialProgram;
        var range = _currentRange;
        var startlayout = _startLayout;
        var searchText = _currentSearchText;
        var searchUrl = _currentPageUrl + latitude + ";"
                        + longitude + ";"
                        + subcountry + ";"
                        + partnerProgram + ";"
                        + partnerSpecialProgram + ";"
                        + range + ";"
                        + encodeURI(searchText) + ";"
                        + startlayout;
        document.location = searchUrl;
    };

    function _normalizeUrl(url)
    {
        var nUrl = url;
        if (nUrl.indexOf("#"))
        {
            nUrl = nUrl.split("#")[0];
        }
        if (nUrl.indexOf("?"))
        {
            nUrl = nUrl.split("?")[0];
        }
        return nUrl;
    };

    function _initMap()
    {
        var latitude = _currentCords != null ? _currentCords.latitude : 0;
        var longitude = _currentCords != null ? _currentCords.longitude : 0;
        var mapOptions = {
            zoom: 12,
            center: new google.maps.LatLng(latitude, longitude),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        _mapObj = new google.maps.Map(_$ctnWtbMapContentMap[0], mapOptions);
    };

    function _reInitMap()
    {
        var latitude = _mapObj.getCenter().lat();
        var longitude = _mapObj.getCenter().lng();
        var zoom = _mapObj.getZoom();
        var mapOptions = {
            zoom: zoom,
            center: new google.maps.LatLng(latitude, longitude),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        _mapObj = new google.maps.Map(_$ctnWtbMapContentMap[0], mapOptions);
    };

    function _addPinpointToMap(partner, $partner)
    {
        var title = partner.title;
        var latitude = partner.latitude;
        var longitude = partner.longitude;
        var iconUrl = partner.pinPointImageSrc;

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(latitude, longitude),
            map: _mapObj,
            title: title,
            icon: iconUrl
        });
        var $tooltip = $partner.clone();
        $tooltip.find("a.btnWtbPartnerListItemShowInMap").parent().remove();

        var tooltipHtml = $tooltip.show().wrap("<div></div>").addClass("pin-seller").parent().html();
        var infowindow = new google.maps.InfoWindow({
            content: tooltipHtml
        });

        var $items = jQuery(_$ctnWtbMapContentPartnerListItems.find("a.btnWtbMapGotoPartner"));

        google.maps.event.addListener(marker, "click", function ()
        {
            for (var i = 0; i < _partners.length; i++)
            {
                _partners[i].infowindow.close();
            }
            $items.removeClass("active");
            jQuery($items.filter("[rel='" + partner.id + "']")).addClass("active");
            infowindow.open(_mapObj, marker);
        });
        return { "marker": marker, "infowindow": infowindow };
    };

    function _sortChangeEvent(e)
    {
        if (e) e.preventDefault();
        _sortChange();
    };

    function _sortChange()
    {
        _filterByParternProgram();
    };

    function _rangeChangeEvent(e)
    {
        if (e) e.preventDefault();
        var range = jQuery(this).val();
        _rangeChange(range);
    };

    function _rangeChange(range)
    {
        _currentRange = range;
        _startLayout = "list";
        _doSearch();
    };

    function _sortPartners(partners, toward)
    {
        partners.sort(function (a, b)
        {
            if (a.name < b.name)
            {
                return toward == "asc" ? -1 : 1;
            }
            if (a.name == b.name)
            {
                return 0;
            }
            if (a.name > b.name)
            {
                return toward == "asc" ? 1 : -1;
            }
        });
        return partners;
    }

    this.resize = function ()
    {
        return;
    };

    this.layoutChange = function (layout)
    {
        _setLoadingMode();
        _doSearch();
    };
}