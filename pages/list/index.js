
Page({
    data: {
        listItems: []
    },
    onLoad: function () {
        console.log('list Page onLoad executed');
        this.data.listItems = LIST_DATA;
        this.setData({
            listItems: this.data.listItems
        })
    }
});

const LIST_DATA = [
    {
        id: 0,
        name: "view"
    },
    {
        id: 1,
        name: "scroll-view"
    },
    {
        id: 2,
        name: "swiper"
    },
    {
        id: 3,
        name: "movable-view"
    },
    {
        id: 4,
        name: "cover-view"
    },
];