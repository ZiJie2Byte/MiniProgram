Page({
    data: {
        listItems: []
    },
    onLoad: function () {
        this.data.listItems = LIST_DATA;
        this.setData({
            listItems: this.data.listItems
        })
    },

    gotoDetail(e) {
        let currentUrl = e.currentTarget.dataset.url;
        wx.navigateTo({
          url: currentUrl
        });
    }
});

const LIST_DATA = [
    {
        id: 0,
        name: "view",
        url: "/pages/components/view/index"
    },
    {
        id: 1,
        name: "scroll-view",
        url: "/pages/components/scrollview/index"
    },
    {
        id: 2,
        name: "swiper",
        url: "/pages/components/swiper"
    },
    {
        id: 3,
        name: "movable-view",
        url: "/pages/components/movableview"
    },
    {
        id: 4,
        name: "cover-view",
        url: "/pages/components/coverview"
    },{
        id: 5,
        name: "canvas",
        url: "/pages/components/canvas/index"
    }
];