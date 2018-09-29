
//初始化数据
function tabbarinit() {
    return [
        {
            "current": 0,
            "pagePath": "/pages/box/index",
            "iconPath": "/pics/home1.png",
            "selectedIconPath": "/pics/home_1.png",
            "text": "首页"
        },
        {
            "current": 0,
            "pagePath": "/pages/news/news",
            "iconPath": "/pics/home2.png",
            "selectedIconPath": "/pics/home_2.png",
            "text": "饮食"

        },
        {
            "current": 0,
            "pagePath": "/pages/category/category",
            "iconPath": "/pics/home3.png",
            "selectedIconPath": "/pics/home_3.png",
            "text": "预约"
        },
        {
            "current": 0,
            "pagePath": "/pages/buy/buy",
            "iconPath": "/pics/home4.png",
            "selectedIconPath": "/pics/home_4.png",
            "text": "我的"
        }
    ]

}
//tabbar 主入口
function tabbarmain(bindName = "tabdata", id, target) {
    var that = target;
    var bindData = {};
    var otabbar = tabbarinit();
    otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath']//换当前的icon
    otabbar[id]['current'] = 1;
    bindData[bindName] = otabbar
    that.setData({ bindData });
}

module.exports = {
    tabbar: tabbarmain
}

