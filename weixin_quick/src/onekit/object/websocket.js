export default class websocket {
  constructor(quick_ws) {
    this.quick_ws = quick_ws;
  }
  // /////////////close///////////////
  close(wx_object) {
    if (!wx_object) {
      return;
    }
    let quick_object = {};
    let wx_code = wx_object.code;
    let wx_reason = wx_object.reason;
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    wx_object = null;
    //////////////////
    if (wx_code) {
      quick_object.code = wx_code;
    }
    if (wx_reason) {
      quick_object.reason = wx_reason;
    }
    quick_object.success = function (quick_res) {
      var wx_res = {
        errMsg: "close:ok",
      };
      if (wx_success) {
        wx_success(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    };
    quick_object.fail = function (quick_res) {
      quick_res = {
        errMsg: "close:fail",
      }
      if (wx_fail) {
        wx_fail(quick_res);
      }
      if (wx_complete) {
        wx_complete(quick_res);
      }
    };
    this.quick_ws.close(quick_object);

  }
  // /////////////send///////////////
  send(wx_object) {
    if (!wx_object) {
      return;
    }
    let quick_object = {};
    let wx_data = wx_object.data;
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    wx_object = null;
    ////////////////////
    if (wx_data) {
      quick_object.data = wx_data;
    }
    quick_object.success = function (quick_res) {
      var wx_res = {
        errMsg: "send:ok",
      };
      if (wx_success) {
        wx_success(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    };
    quick_object.fail = function (quick_res) {
      quick_res = {
        errMsg: "send:fail",
      }
      if (wx_fail) {
        wx_fail(quick_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    };
    this.quick_ws.send(quick_object);
  }
// /////////////onOpen///////////////
// wx有 header profile  quick没有
  onOpen(wx_callback) {
    this.quick_ws.onopen = wx_callback;
  }
  // /////////////onMessage///////////////
  onMessage(wx_callback) {
    this.quick_ws.onmessage = wx_callback;
  }
// /////////////onClose///////////////
  onClose(wx_callback) {
    this.quick_ws.onclose = function (res) {
      wx_callback(res);
    };
  }
// /////////////onError///////////////
//  wx : errMsg    quick: data
  onError(wx_callback) {
    this.quick_ws.onerror = function(res){
      wx_callback(res);
    };
  }
  
}