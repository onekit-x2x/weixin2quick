import wx from './wx.js';
import router from '@system.router'
function getApp(){
    return wx.THIS.$app;
}

function getCurrentPages(){
    return wx.THIS.$app.$def.onekit.router;
}
module.exports = {getApp,getCurrentPages};