//         模块
import fetch from '@system.fetch'
import device from '@system.device'
import storage from '@system.storage'
import geolocation from '@system.geolocation'
import vibrator from '@system.vibrator'
import barcode from '@system.barcode'
import clipboard from '@system.clipboard'
import network from '@system.network'
import brightness from '@system.brightness'
import battery from '@system.battery'
import record from '@system.record'
import wifi from '@system.wifi'
import bluetooth from '@system.bluetooth'
import media from '@system.media'
import image from '@system.image'
import audio from '@system.audio'
import file from '@system.file'
import zip from '@system.zip'
import router from '@system.router'
import prompt from '@system.prompt'
import request from '@system.request'
import websocketfactory from '@system.websocketfactory'
import sensor from '@system.sensor'
import ad from '@service.ad'
//         实例
import websocket from './object/websocket.js'
import thekit from "./thekit.js"
export default class wx {
static onInit(THIS){
	wx.THIS = THIS;
	THIS.$app.$def.onekit.router.push(THIS);
}
static onShow(THIS){
	wx.THIS = THIS;
} 
static onDestroy(THIS) {
	THIS.$app.$def.onekit.router.pop();
}
	// //////////////////getSystemInfo////////////////
	static getSystemInfo(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success":
					case "fail":
					case "complete":
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			}
			quick_object.success = function (quick_res) {
				var wx_res = {
					// 设备像素比
					deviceOrientation: "portrait",
					devicePixelRatio: quick_res.screenDensity,
					version: "7.0.13",
					system: quick_res.osType + " " + quick_res.osVersionName,
					fontSizeSetting: 16,
					SDKVersion: "2.10.4",
					benchmarkLevel: 8,
					cameraAuthorized: true,
					locationAuthorized: true,
					microphoneAuthorized: true,
					notificationAuthorized: true,
					bluetoothEnabled: false,
					locationEnabled: true,
					wifiEnabled: true,
					safeArea: {
						height: quick_res.screenHeight / quick_res.screenDensity,
						width: quick_res.screenWidth / quick_res.screenDensity,
						bottom: quick_res.screenHeight / quick_res.screenDensity,
						top: 0,
						left: 0,
						right: quick_res.screenWidth / quick_res.screenDensity
					},
					errMsg: "getSystemInfo:ok",

				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "language":
							wx_res[quick_res_key] = quick_res_value + "_" + quick_res.region;
							break;
						case "osType":
							wx_res.platform = quick_res_value;
							break;
						case "screenDensity":
							wx_res.pixelRatio = quick_res_value;
							break;
						case "screenWidth":
							wx_res[quick_res_key] = quick_res_value / quick_res.screenDensity;
							break;
						case "screenHeight":
							wx_res[quick_res_key] = quick_res_value / quick_res.screenDensity;
							break;
						case "statusBarHeight":
							wx_res[quick_res_key] = quick_res_value / quick_res.screenDensity;
							break;
						case "windowWidth":
							wx_res[quick_res_key] = quick_res_value / quick_res.screenDensity;
							break;
						case "brand":
							wx_res[quick_res_key] = quick_res_value
							break;
						case "model":
							wx_res[quick_res_key] = quick_res_value
							break;
						case "pixelRatio":
							wx_res[quick_res_key] = quick_res_value
							break;
						case "windowHeight":
							wx_res[quick_res_key] = quick_res_value
							break;
						case "osVersionName":
							wx_res[quick_res_key] = quick_res_value
							break;
						case "osVersionCode":
							wx_res[quick_res_key] = quick_res_value
							break;
						case "manufacturer":
							break;
						case "platformVersionName":
							break;
						case "platformVersionCode":
							break;
						case "vendorOsName":
							break;
						case "vendorOsVersion":
							break;
						case "osVersionCode":
							break;
						case "osVersionName":
							break;
						case "product":
							break;
						case "region":
							break;
						default:
							// wx_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		return device.getInfo(quick_object)
	}
	// ///////////////////////////////数据缓存////////////////////////////////
	// ////////////////////setStorage///////////////////////
	static setStorage(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "data":
						quick_object.value = wx_object_value;
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "setStorage:ok"
				};

				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		return storage.set(quick_object)
	}
	// ////////////////////getStorage///////////////////////
	static getStorage(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用里面的数据是否一致
					case "fail":
					case "complete":
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "setStorage:ok"
				};
				wx_res.data = quick_res;
				if (wx_res.data) {
					if (wx_object.success) {
						wx_object.success(wx_res);
					}
					if (wx_object.complete) {
						wx_object.complete(wx_res);
					}
				} else {
					quick_object.fail(quick_res)
				}
			};

			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "getStorage:fail data not found"
				}
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		return storage.get(quick_object);
	};
	// ////////////////////clearStorage///////////////////////
	static clearStorage(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用里面的数据是否一致
					case "fail":
					case "complete":
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "clearStorage:ok"
				};
				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "clearStorage:fail"
				}
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		return storage.clear(quick_object)
	};
	// ////////////////////dpoveStorage///////////////////////
	static dpoveStorage(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用里面的数据是否一致
					case "fail":
					case "complete":
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "dpoveStorage:ok"
				};
				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "dpoveStorage:fail"
				}
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		return storage.delete(quick_object)
	};
	// ////////////////////getStorageInfo///////////////////////
	static getStorageInfo(wx_object) {
		wx_object.index = "0";
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用里面的数据是否一致
					case "fail":
					case "complete":
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			var wx_res = {
				errMsg: "getStorageInfo:ok",
				currentSize: 1,
				keys: ["logs"],
				limitSize: 10240
			};
			for (var i = 0; i < storage.length; i++) {
				quick_object.success = function (quick_res) {
					wx_res.keys.push(quick_res);
					if (wx_object.success) {
						wx_object.success(wx_res);
					}
					if (wx_object.complete) {
						wx_object.complete(wx_res);
					}
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "getStorageInfo:fail"
				}
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		return storage.key(quick_object)
	}
	// ////////////////////周期性更新/////////////////////////
	// //////////////////setBackgroundFetchToken////////
	static setBackgroundFetchToken(wx_object) {
		console.log("暂不支持")
	}
	// //////////////////onBackgroundFetchData////////
	static onBackgroundFetchData(wx_object) {
		console.log("暂不支持")
	}
	// //////////////////getBackgroundFetchToken////////
	static getBackgroundFetchToken(wx_object) {
		console.log("暂不支持")
	}
	// //////////////////getBackgroundFetchData////////
	static getBackgroundFetchData(wx_object) {
		console.log("暂不支持")
	}
	// ////////////////////////////////位置//////////////////////////////////////
	// ////////////////////getLocation///////////////////////
	static getLocation(wx_object) {
		var quick_object = {}; // 快应用数据对象
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) { // 微信
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "altitude":
					case "isHighAccuracy":
					case "highAccuracyExpireTime":
					case "type":
						break;
					default:
						quick_object[wx_object_key] = wx_object_value; // 相同的参数 直接赋值
						break;
				}
			}
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "getLocation:ok",
					horizontalAccuracy: 30,
					indoorLocationType: -1,
					provider: "network",
					speed: 0,
					steps: 0,
					verticalAccuracy: 0,
					direction: 0
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "time":
							break;
						case "longitude":
							wx_res[quick_res_key] = quick_res_value
							break;
						case "latitude":
							wx_res[quick_res_key] = quick_res_value
							break;
						case "accuracy":
							wx_res[quick_res_key] = quick_res_value
							break;
						default:
							// wx_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "getLocation:fail"
				};
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
			return geolocation.getLocation(quick_object)
		}
	}
	// /////////////////////openLocation//////////////////////
	static openLocation(wx_object) {
		if (!wx_object) {
			return
		}
		let wx_latitude = wx_object.latitude;
		let wx_longitude = wx_object.longitude;
		let wx_scale = wx_object.scale;
		let wx_name = wx_object.name;
		let wx_address = wx_object.address;
		let wx_success = wx_object.success;
		let wx_fail = wx_object.fail;
		let wx_complete = wx_object.complete;
		wx_object = null;
		////////////
		let quick_object = {};
		if (wx_latitude) {
			quick_object.latitude = wx_latitude;
		}
		if (wx_longitude) {
			quick_object.longitude = wx_longitude;
		}
		if (wx_scale) {
			quick_object.scale = wx_scale;
		}
		if (wx_name) {
			quick_object.name = wx_name;
		}
		if (wx_address) {
			quick_object.address = wx_address;
		}
		quick_object.success = function (quick_res) {
			var wx_res = {
				errMsg: "openLocation:ok",
			};
			for (var quick_res_key in quick_res) {
				var quick_res_value = quick_res[quick_res_key]
				switch (quick_res_key) {
					default:
						// wx_res[quick_res_key] = quick_res_value;
						break;
				}
			}
			if (wx_success) {
				wx_success(wx_res);
			}
			if (wx_complete) {
				wx_complete(wx_res);
			}
		};
		quick_object.fail = function (quick_res) {
			quick_res = {
				errMsg: "openLocation:fail"
			};
			if (wx_fail) {
				wx_fail(quick_res);
			}
			if (wx_complete) {
				wx_complete(quick_res);
			}
		};
		geolocation.openLocation(quick_object)
	}
	// /////////////////////chooseLocation//////////////////////
	static chooseLocation(wx_object) {
		if (!wx_object) {
			return
		}
		let wx_latitude = wx_object.latitude;
		let wx_longitude = wx_object.longitude;
		let wx_success = wx_object.success;
		let wx_fail = wx_object.fail;
		let wx_complete = wx_object.complete;
		wx_object = null;
		/////////////
		let quick_object = {};
		if (wx_latitude) {
			quick_object.latitude = wx_latitude;
		}
		if (wx_longitude) {
			quick_object.longitude = wx_longitude;
		}

		quick_object.success = function (quick_res) {
			var wx_res = {
				errMsg: "chooseLocation:ok",
			};
			for (var quick_res_key in quick_res) {
				var quick_res_value = quick_res[quick_res_key]
				switch (quick_res_key) {
					case "coordType":
						break;
					case "name":
						wx_res[quick_res_key] = quick_res_value
						break;
					case "address":
						wx_res[quick_res_key] = quick_res_value
						break;
					case "latitude":
						wx_res[quick_res_key] = quick_res_value
						break;
					case "longitude":
						wx_res[quick_res_key] = quick_res_value
						break;
					default:
						// wx_res[quick_res_key] = quick_res_value;
						break;
				}
			}
			if (wx_success) {
				wx_success(wx_res);
			}
			if (wx_complete) {
				wx_complete(wx_res);
			}
		};
		quick_object.fail = function (quick_res) {
			quick_res = {
				errMsg: "chooseLocation:fail"
			};
			if (wx_fail) {
				wx_fail(quick_res);
			}
			if (wx_complete) {
				wx_complete(quick_res);
			}
		};
		geolocation.chooseLocation(quick_object)
	}
	// /////////////////////onLocationChange//////////////////////
	//  都是回调函数 未完成
	static onLocationChange(wx_callback) {
		if (!wx_callback) {
			return
		}
		geolocation.subscribe(wx_callback)
	}
	// /////////////////////offLocationChange//////////////////////
	static offLocationChange(wx_callback) {
		geolocation.unsubscribe()
	}
	// /////////////////////stopLocationUpdate//////////////////////
	static stopLocationUpdate() {
		console.log("暂不支持")
	}
	// /////////////////////startLocationUpdateBackground//////////////////////
	static startLocationUpdateBackground() {
		console.log("暂不支持")
	}
	// /////////////////////startLocationUpdate//////////////////////
	static startLocationUpdate() {
		console.log("暂不支持")
	}
	// /////////////////////转发///////////////////////////////////////
	// /////////////////////updateShadpenu//////////
	static updateShadpenu(wx_object) {
		console.log("暂不支持")
	}
	// /////////////////////showShadpenu///////////
	static showShadpenu(wx_object) {
		console.log("暂不支持")
	}
	// /////////////////////hideShadpenu//////////
	static hideShadpenu(wx_object) {
		console.log("暂不支持")
	}
	// /////////////////////getShareInfo//////////
	static getShareInfo(wx_object) {
		console.log("暂不支持")
	}
	// //////////////////////////画布////////////////////////////////////
	// 带组件 未完成
	// /////////////////////createOffscreenCanvas//////////
	static createOffscreenCanvas() {
		console.log("暂不支持")
	}
	// /////////////////////createCanvasContext//////////
	static createCanvasContext(wx_object) {
		console.log("暂不支持")
	}
	// /////////////////////canvasToTempFilePath//////////
	static canvasToTempFilePath(wx_object) {
		console.log("暂不支持")
	}
	// /////////////////////canvasPutImageData//////////
	static canvasPutImageData(wx_object) {
		console.log("暂不支持")
	}
	// /////////////////////canvasGetImageData//////////
	static canvasGetImageData(wx_object) {
		console.log("暂不支持")
	}
	// //////////////////////////振动////////////////////////////////////
	// ////////////////////vibrateShort///////////////////////
	static vibrateShort(wx_object) {
		wx_object.mode = "short";
		return vibrator.vibrate(wx_object)
	}
	// ////////////////////vibrateLong///////////////////////
	static vibrateLong(wx_object) {
		wx_object.mode = "long";
		return vibrator.vibrate(wx_object)
	}
	// //////////////////////////扫码////////////////////////////////////
	// ////////////////////scanCode///////////////////////
	static scanCode(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success":
					case "fail":
					case "complete":
						break;
					case "onlyFromCamera":
					case "scanType":
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			}
			quick_object.success = function (quick_res) {
				var wx_res = {
					charSet: "utf-8",
					codeVersion: 5,
					errMsg: "scanCode:ok",
					rawData: "暂不支持",
					path: ""
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "type":
							wx_res.scanType = quick_res_value;
							break;
						case "result":
							wx_res[quick_res_key] = quick_res_value
							break;
						default:
							// wx_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "scanCode:fail"
				};
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
			quick_object.cancel = function (quick_res) {
				quick_res = {
					errMsg: "scanCode:fail cancel"
				};
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			}
		}
		return barcode.scan(quick_object)
	}
	// //////////////////////////剪切板////////////////////////////////////
	// ////////////////////setClipboardData///////////////////////
	static setClipboardData(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "data":
						quick_object.text = wx_object_value;
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "setClipboardData:ok"
				};
				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "setClipboardData:fail"
				};
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		return clipboard.set(quick_object)
	}
	// ////////////////////getClipboardData///////////////////////
	static getClipboardData(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用里面的数据是否一致
					case "fail":
					case "complete":
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "getClipboardData:ok"
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "text":
							wx_res.data = quick_res_value;
							break;
						default:
							// wx_res[quick_res_key] = quick_res_value;
							break;
					}
				};
				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "getClipboardData:fail data not found"
				};
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		return clipboard.get(quick_object);
	};
	// /////////////////////NFC////////////////////////////
	// /////////////////////stopHCE/////////////////////////
	static stopHCE(wx_object) {
		console.log("暂不支持")
	}
	// /////////////////////getHCEState/////////////////////////
	static getHCEState(wx_object) {
		console.log("暂不支持")
	}
	// /////////////////////startHCE/////////////////////////
	static startHCE(wx_object) {
		console.log("暂不支持")
	}
	// /////////////////////sendHCEMessage/////////////////////////
	static sendHCEMessage(wx_object) {
		console.log("暂不支持")
	}
	// /////////////////////onHCEMessage/////////////////////////
	static onHCEMessage(wx_callback) {
		console.log("暂不支持")
	}
	// /////////////////////offHCEMessage/////////////////////////
	static offHCEMessage(wx_callback) {
		console.log("暂不支持")
	}
	// ////////////////////////网络///////////////////////////////
	// //////////////////////getNetworkType///////////////////////
	static getNetworkType(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用里面的数据是否一致
					case "fail":
					case "complete":
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "getNetworkType:ok"
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "metered":
							break;
						case "type":
							wx_res.networkType = quick_res_value
							break;
						default:
							// wx_res[quick_res_key] = quick_res_value;
							break;
					}
				};
				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "getClipboardData:fail data not found"
				};
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		return network.getType(quick_object);
	};
	// //////////////////////onNetworkStatusChange///////////////////////
	static onNetworkStatusChange(wx_callback) {
		// console.log("wx_callback",wx_callback);	
		// var quick_object = {};
		// var quick_result = {};

		// quick_object.callback = wx_callback
		// if (wx_callback) {
		// 	var quick_res = await network.subscribe(quick_object);  //	 callback返回的值
		// 	console.log("quick_res",quick_res);	
		// 	for(var quick_res_key in quick_res){   // 对返回的值进行处理
		// 		var quick_res_value = quick_res[quick_res_key];
		// 		switch(quick_result_key){
		// 			case "metered":
		// 				;
		// 			case "type":
		// 				quick_result.networkType = quick_res_value;
		// 				if(quick_res_value === "none"){
		// 					quick_result.isConnected = false;
		// 				}
		// 				else{
		// 					quick_result.isConnected = true;
		// 				}
		// 				break;
		// 			default:
		// 				quick_result[quick_res_key] = quick_res_value;
		// 				break;
		// 		}
		// 	}

		// }
		// console.log("quick_result",quick_result);
		// return quick_res;
		return network.subscribe(wx_callback)
	};
	// //////////////////////offNetworkStatusChange///////////////////////
	static offNetworkStatusChange(wx_callback) {
		return network.unsubscribe(wx_callback)
	}
	// //////////////////////////屏幕////////////////////////////////////
	// //////////////////////setScreenBrightness///////////////////////
	static setScreenBrightness(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "value":
						quick_object[wx_object_key] = 255 * wx_object_value;
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "setScreenBrightness:ok"
				};
				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "setScreenBrightness:fail"
				};
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		return brightness.setValue(quick_object);
	};
	// //////////////////////getScreenBrightness///////////////////////
	static getScreenBrightness(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "getScreenBrightness:ok"
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "value":
							wx_res[quick_res_key] = quick_res_value / 255;
							break;
						default:
							// wx_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "getScreenBrightness:fail"
				};
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		return brightness.getValue(quick_object)
	}
	// //////////////////////setKeepScreenOn///////////////////////
	static setKeepScreenOn(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "setKeepScreenOn:ok",
					value: "可通过getScreenBrightness查看",
				};
				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "setKeepScreenOn:fail"
				};
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
			return brightness.setKeepScreenOn(quick_object)
		}
	};
	// //////////////////////onUserCaptureScreen///////////////////////
	static onUserCaptureScreen(wx_callback) {
		console.log("暂不支持");
	};
	// //////////////////////offUserCaptureScreen///////////////////////
	static offUserCaptureScreen(wx_callback) {
		console.log("暂不支持");
	}
	// //////////////////////////电量////////////////////////////////////
	// //////////////////////getBatteryInfo///////////////////////
	static getBatteryInfo(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "getBatteryInfo:ok"
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "charging":
							wx_res.isCharging = quick_res_value;
							break;
						case "level":
							wx_res[quick_res_key] = parseInt(quick_res_value * 100) + "";
							break;
						default:
							// wx_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "getBatteryInfo:fail"
				};
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		return battery.getStatus(quick_object)
	}
	// //////////////////////////电话////////////////////////////////////
	// //////////////////////addPhoneContact///////////////////////
	static addPhoneContact(wx_object) {
		console.log("暂不支持");
	}
	// //////////////////////////Wi-Fi////////////////////////////////////
	// //////////////////////connectWifi///////////////////////
	static connectWifi(wx_object) {
		if (this.isWiFi == true) {
			var quick_object = {};
			if (wx_object) {
				for (var wx_object_key in wx_object) {
					var wx_object_value = wx_object[wx_object_key];
					switch (wx_object_key) {
						case "success": // 快应用
						case "fail":
						case "complete":
							break;
						default:
							quick_object[wx_object_key] = wx_object_value;
							break;
					}
				};
				if (!quick_object.BSSID) {
					quick_object.BSSID = '';
				}
				// quick app success没有返回值
				quick_object.success = function (quick_res) {
					if (wx_object.success) {
						wx_object.success(wx_res);
					}
					if (wx_object.complete) {
						wx_object.complete(wx_res);
					}
				};
				quick_object.fail = function (quick_res) {
					quick_res = {
						errMsg: "connectWifi:fail"
					};
					if (wx_object.fail) {
						wx_object.fail(quick_res);
					}
					if (wx_object.complete) {
						wx_object.complete(quick_res);
					}
				};
			}
			return wifi.connect(wx_object);
		}
		else {
			var errMsg = {
				errCode: 12000,
				errMsg: "connectWifi:fail:not invoke startWifi"
			}
			console.log(errMsg)
		}
	}
	// //////////////////////getConnectedWifi////////////////
	static getConnectedWifi(wx_object) {
		if (!wx_object) {
			return
		}
		if (this.isWiFi == true) {
			let wx_success = wx_object.success;
			let wx_fail = wx_object.fail;
			let wx_complete = wx_object.complete;
			var quick_object = {};
			wx_object = null;
			//////////////////////////
			quick_object.success = function (quick_res) {
				var wx_res = {
					errCode: 0,
					errMsg: "getConnectedWifi:ok",
					wifi: { frequency: 5785 }
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key];
					switch (quick_res_key) {
						default:
							wx_res.wifi[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (wx_success) {
					wx_success(wx_res);
				}
				if (wx_complete) {
					wx_complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "getConnectedWifi:fail"
				}
				if (wx_fail) {
					wx_fail(quick_res);
				}
				if (wx_complete) {
					wx_complete(quick_res);
				}
			};
			return wifi.getConnectedWifi(quick_object);
		}
		else {
			var errMsg = {
				errCode: 12000,
				errMsg: "getConnectedWifi:fail:not invoke startWifi"
			}
			console.log(errMsg)
		}
	}
	// /////////////////////getWifiList////////////////////////
	static getWifiList(wx_object) {
		if (!wx_object) {
			return
		}
		if (this.isWiFi == true) {
			let wx_success = wx_object.success;
			let wx_fail = wx_object.fail;
			let wx_complete = wx_object.complete;
			var quick_object = {};
			wx_object = null;
			/////////////////////////
			quick_object.success = function () {
				var wx_res = {
					errMsg: "getWifiList:success"
				};
				if (wx_success) {
					wx_success(wx_res);
				}
				if (wx_complete) {
					wx_complete(wx_res);
				}
			};
			quick_object.fail = function () {
				var quick_res = {
					errMsg: "getWifiList:fail"
				}
				if (wx_fail) {
					wx_fail(quick_res);
				}
				if (wx_complete) {
					wx_complete(quick_res);
				}
			};
			return wifi.scan(quick_object);
		}
		else {
			var errMsg = {
				errCode: 12000,
				errMsg: "getWifiList:fail:not invoke startWifi"
			}
			console.error(errMsg);
		}
	}
	// //////////////////////onGetWifiList///////////////////////
	static onGetWifiList(wx_callback) {
		wifi.onscanned = wx_callback;
	}
	// ///////////////////////onWifiConnected//////////////////
	// quickapp 多了一个state参数
	static onWifiConnected(wx_callback) {
		wifi.onstatechanged = (data) => {
			if (data.state == 1) {
				wifi.onstatechanged = wx_callback
			}
		}
	}
	// //////////////////////stopWifi//////////////////////////
	static stopWifi(wx_object) {
		this.isWiFi = false;
	}
	// //////////////////////setWifiList//////////////////////////
	// ios
	static setWifiList(wx_object) {
		console.log("暂不支持");
	}
	// //////////////////////offWifiConnected//////////////////////////
	static offWifiConnected(wx_object) {
		console.log("暂不支持");
	}
	// //////////////////////offGetWifiList//////////////////////////
	static offGetWifiList(wx_object) {
		console.log("暂不支持");
	}
	// //////////////////////startWifi//////////////////////////
	static startWifi(wx_object) {
		this.isWiFi = true;
	}

	// //////////////////////iBeacon////////////////////////
	// //////////////////////startBeaconDiscovery////////////////////////
	static startBeaconDiscovery(wx_object) {
		console.log("暂不支持");
	}
	// //////////////////////stopBeaconDiscovery////////////////////////
	static stopBeaconDiscovery(wx_object) {
		console.log("暂不支持");
	}
	// //////////////////////onBeaconUpdate////////////////////////
	static onBeaconUpdate(wx_callback) {
		console.log("暂不支持");
	}
	// //////////////////////onBeaconServiceChange////////////////////////
	static onBeaconServiceChange(wx_callback) {
		console.log("暂不支持");
	}
	// //////////////////////offBeaconUpdate////////////////////////
	static offBeaconUpdate(wx_callback) {
		console.log("暂不支持");
	}
	// //////////////////////offBeaconServiceChange////////////////////////
	static offBeaconServiceChange(wx_callback) {
		console.log("暂不支持");
	}
	// //////////////////////getBeacons////////////////////////
	static getBeacons(wx_object) {
		console.log("暂不支持");
	}
	// //////////////////////外围设备//////////////////////////
	// ////////////onBLEPeripheralConnectionStateChanged///////////////
	static onBLEPeripheralConnectionStateChanged(wx_callback) {
		console.log("暂不支持");
	}
	// ////////////offBLEPeripheralConnectionStateChanged///////////////
	static offBLEPeripheralConnectionStateChanged(wx_callback) {
		console.log("暂不支持");
	}
	// //////////////////////createBLEPeripheralServer////////////////////////
	static createBLEPeripheralServer(wx_object) {
		console.log("暂不支持");
	}

	// //////////////////////蓝牙////////////////////////////////////////
	// ////////////////////////openBluetoothAdapter/////////////////
	static openBluetoothAdapter(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "mode":
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "openBluetoothAdapter:ok"
				};
				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "openBluetoothAdapter:fail"
				};
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		return bluetooth.openAdapter(quick_object);
	}
	// ////////////////////////closeBluetoothAdapter/////////////////
	static closeBluetoothAdapter(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "closeBluetoothAdapter:ok"
				};
				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "closeBluetoothAdapter:fail"
				};
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		return bluetooth.closeAdapter(quick_object);
	}
	// ////////////////////////getBluetoothAdapterState/////////////////
	static getBluetoothAdapterState(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "getBluetoothAdapterState:ok"
				};
				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "getBluetoothAdapterState:fail"
				};
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		return bluetooth.getAdapterState(quick_object);
	}
	// ////////////////////////onBluetoothAdapterStateChange/////////////////
	static onBluetoothAdapterStateChange(wx_callback) {
		bluetooth.onadapterstatechange = wx_callback;
	}
	// ////////////////////////startBluetoothDevicesDiscovery/////////////////
	static startBluetoothDevicesDiscovery(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "startBluetoothDevicesDiscovery:ok",
					isDiscovering: "暂不支持",
					errCode: 0
				};
				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "startBluetoothDevicesDiscovery:fail",
					errCode: "暂不支持"
				};
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		bluetooth.startDevicesDiscovery(quick_object);
	}
	// ////////////////////////stopBluetoothDevicesDiscovery/////////////////
	static stopBluetoothDevicesDiscovery(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "stopBluetoothDevicesDiscovery:ok",
					isDiscovering: "暂不支持",
				};
				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "stopBluetoothDevicesDiscovery:fail"
				};
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		return bluetooth.stopDevicesDiscovery(quick_object);
	}
	// ////////////////////////getBluetoothDevices/////////////////
	static getBluetoothDevices(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "getBluetoothDevices:ok",
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "devices":
							wx_res[quick_res_key] = quick_res_value;
							break;
						default:
							// wx_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "getBluetoothDevices:fail"
				};
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		return bluetooth.getDevices(quick_object);
	}
	// ////////////////////////onBluetoothDeviceFound/////////////////
	static onBluetoothDeviceFound(wx_callback) {
		bluetooth.ondevicefound = wx_callback;
	}
	// ////////////////////////getConnectedBluetoothDevices/////////////////
	static getConnectedBluetoothDevices(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "getConnectedBluetoothDevices:ok",
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "devices":
							wx_res[quick_res_key] = quick_res_value;
							break;
						default:
							// wx_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "getConnectedBluetoothDevices:fail"
				};
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		return bluetooth.getConnectedDevices(quick_object);
	}
	// ///////////////////////////低功耗蓝牙////////////////////////////////
	// ////////////////////////createBLEConnection/////////////////
	static createBLEConnection(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "createBLEConnection:ok",
					errCode: 0
				};

				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "createBLEConnection:fail",
					errCode: "暂不支持"
				};
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		return bluetooth.createBLEConnection(quick_object);
	}
	// ////////////////////////closeBLEConnection/////////////////
	static closeBLEConnection(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "closeBLEConnection:ok",
					errCode: 0
				};

				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "closeBLEConnection:fail",
					errCode: "暂不支持"
				};
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		return bluetooth.closeBLEConnection(quick_object);
	}
	// ////////////////////////getBLEDeviceServices/////////////////
	static getBLEDeviceServices(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "getBLEDeviceServices:ok",
					errCode: 0
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "services":
							wx_res[quick_res_key] = quick_res_value;
							break;
						default:
							// wx_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "getBLEDeviceServices:fail",
					errCode: "暂不支持"
				};
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		return bluetooth.getBLEDeviceServices(quick_object);
	}
	// ////////////////////////getBLEDeviceCharacteristics/////////////////
	static getBLEDeviceCharacteristics(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "getBLEDeviceCharacteristics:ok",
					errCode: 0
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "characteristics":
							wx_res[quick_res_key] = quick_res_value;
							break;
						default:
							// wx_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "getBLEDeviceCharacteristics:fail",
					errCode: "暂不支持"
				};
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		return bluetooth.getBLEDeviceCharacteristics(quick_object);
	}
	// ////////////////////////readBLECharacteristicValue/////////////////
	static readBLECharacteristicValue(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "readBLECharacteristicValue:ok",
					errCode: 0
				};
				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "readBLECharacteristicValue:fail",
					errCode: "暂不支持"
				};
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		return bluetooth.readBLECharacteristicValue(quick_object);
	}
	// ////////////////////////writeBLECharacteristicValue/////////////////
	static writeBLECharacteristicValue(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "writeBLECharacteristicValue:ok",
					errCode: 0
				};
				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "writeBLECharacteristicValue:fail",
					errCode: "暂不支持"
				};
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		return bluetooth.writeBLECharacteristicValue(quick_object);
	}
	// ////////////////////////notifyBLECharacteristicValueChange/////////////////
	static notifyBLECharacteristicValueChange(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "notifyBLECharacteristicValueChange:ok",
					errCode: 0
				};
				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "notifyBLECharacteristicValueChange:fail",
					errCode: "暂不支持"
				};
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		return bluetooth.notifyBLECharacteristicValueChange(quick_object);
	}
	// ////////////////////////onBLECharacteristicValueChange/////////////////
	static onBLECharacteristicValueChange(wx_object) {
		bluetooth.onblecharacteristicvaluechange(wx_object);
	}
	// ////////////////////////onBLEConnectionStateChange/////////////////
	static onBLEConnectionStateChange(wx_object) {
		bluetooth.onbleconnectionstatechange(wx_object);
	}
	// ////////////////////////setBLEMTU/////////////////
	static setBLEMTU(wx_object) {
		console.log("暂不支持")
	}
	// ////////////////////////offBLEConnectionStateChange/////////////////
	static offBLEConnectionStateChange(wx_callback) {
		console.log("暂不支持")
	}
	// ////////////////////////offBLECharacteristicValueChange/////////////////
	static offBLECharacteristicValueChange(wx_callback) {
		console.log("暂不支持")
	}
	// ////////////////////////getBLEDeviceRSSI/////////////////
	static getBLEDeviceRSSI(wx_object) {
		console.log("暂不支持")
	}
	// ////////////////////////offBluetoothDeviceFound/////////////////
	static offBluetoothDeviceFound(wx_callback) {
		console.log("暂不支持")
	}
	// ////////////////////////offBluetoothAdapterStateChange/////////////////
	static offBluetoothAdapterStateChange(wx_callback) {
		console.log("暂不支持")
	}

	// ////////////////////////////加速计///////////////////////////////////
	// ////////////////////stopAccelerometer/////////////////////
	static stopAccelerometer(wx_object) {
		sensor.unsubscribeAccelerometer()
	}
	// ////////////////////startAccelerometer/////////////////////
	static startAccelerometer(wx_object) {
		this.interval = wx_object.interval;
	}
	// ////////////////////onAccelerometerChange/////////////////////
	static onAccelerometerChange(wx_callback) {
		if (!wx_callback) {
			return
		}
		let quick_object = {};
		let wx_interval = this.interval
		if (wx_interval) {
			quick_object = {
				interval: wx_interval,
				callback: wx_callback
			}
		}
		else {
			quick_object = {
				interval: "normal",
				callback: wx_callback
			}
		}
		sensor.subscribeAccelerometer(quick_object)
	}
	// ////////////////////offAccelerometerChange/////////////////////
	static offAccelerometerChange(wx_callback) {
		sensor.unsubscribeAccelerometer()
	}
	// ///////////////////////////罗盘///////////////////////////////////
	// ////////////////////stopCompass/////////////////////
	static stopCompass(wx_object) {
		sensor.unsubscribeCompass()
	}
	// ////////////////////startCompass/////////////////////
	static startCompass(wx_object) {
		console.log("暂不支持");
	}
	// ////////////////////onCompassChange/////////////////////
	static onCompassChange(wx_callback) {
		sensor.subscribeCompass({
			callback: wx_callback
		})
	}
	// ////////////////////offCompassChange/////////////////////
	static offCompassChange(wx_object) {
		sensor.unsubscribeCompass()
	}
	// ///////////////////////////陀螺仪///////////////////////////////////
	// ////////////////////stopGyroscope/////////////////////
	static stopGyroscope(wx_object) {
		console.log("暂不支持");
	}
	// ////////////////////startGyroscope/////////////////////
	static startGyroscope(wx_object) {
		console.log("暂不支持");
	}
	// ////////////////////onGyroscopeChange/////////////////////
	static onGyroscopeChange(wx_callback) {
		console.log("暂不支持");
	}
	// ////////////////////offGyroscopeChange/////////////////////
	static offGyroscopeChange(wx_callback) {
		console.log("暂不支持");
	}
	// ///////////////////////////性能///////////////////////////////////
	// ////////////////////onMemoryWarning/////////////////////
	static onMemoryWarning(wx_object) {
		console.log("暂不支持");
	}
	// ////////////////////offMemoryWarning/////////////////////
	static offMemoryWarning(wx_object) {
		console.log("暂不支持");
	}
	// ///////////////////////////设备方向////////////////////////////////
	// ////////////////////stopDeviceMotionListening/////////////////////
	static stopDeviceMotionListening(wx_object) {
		console.log("暂不支持");
	}
	// ////////////////////startDeviceMotionListening/////////////////////
	static startDeviceMotionListening(wx_object) {
		console.log("暂不支持");
	}
	// ////////////////////onDeviceMotionChange/////////////////////
	static onDeviceMotionChange(wx_callback) {
		console.log("暂不支持");
	}
	// ////////////////////offDeviceMotionChange/////////////////////
	static offDeviceMotionChange(wx_callback) {
		console.log("暂不支持");
	}
	// ///////////////////////////////////Worker/////////////////////////////////////
	// //////////////////////////createWorker///////////////////////////
	static createWorker(wx_str) {
		console.log("暂不支持");
	}
	// /////////////////////////////////第三方平台/////////////////////////////////////
	// //////////////////////////getExtConfig///////////////////////////
	static getExtConfig(wx_str) {
		console.log("暂不支持");
	}
	// /////////////////////////////////WXML/////////////////////////////////////
	// //////////////////////////createSelectorQuery///////////////////////////
	static createSelectorQuery() {
		console.log("暂不支持");
	}
	// //////////////////////////createIntersectionObserver///////////////////////////
	static createIntersectionObserver() {
		console.log("暂不支持");
	}
	// /////////////////////////////////广告//////////////////////////////////////////
	// //////////////////////////createRewardedVideoAd///////////////////////////
	// wx中的multiton属性能开启多例模式,未实现该属性
	static createRewardedVideoAd(wx_object) {
		var RewardedVideoAd = ad.createRewardedVideoAd(wx_object);
		let RewardedVideoAd_object = {
			destroy: () => {
				console.log("暂不支持")
			},
			load: () => {
				RewardedVideoAd.load()
			},
			offClose: (wx_callback) => {
				RewardedVideoAd.offClose(wx_callback)
			},
			offError: (wx_callback) => {
				RewardedVideoAd.offError(wx_callback)
			},
			offLoad: (wx_callback) => {
				RewardedVideoAd.offLoad(wx_callback)
			},
			onClose: (wx_callback) => {
				RewardedVideoAd.onClose(wx_callback)
			},
			onError: (wx_callback) => {
				RewardedVideoAd.onError(wx_callback)
			},
			onLoad: (wx_callback) => {
				RewardedVideoAd.onLoad(wx_callback)
			},
			show: () => {
				RewardedVideoAd.show()
			},
		}
		return RewardedVideoAd_object;
	}
	// //////////////////////////createInterstitialAd///////////////////////////
	static createInterstitialAd(wx_object) {
		var interstitialAd = ad.createInterstitialAd(wx_object);
		let interstitialAd_object = {
			destroy: () => {
				interstitialAd.destroy()
			},
			load: () => {
				interstitialAd.load()
			},
			offClose: (wx_callback) => {
				interstitialAd.offClose(wx_callback)
			},
			offError: (wx_callback) => {
				interstitialAd.offError(wx_callback)
			},
			offLoad: (wx_callback) => {
				interstitialAd.offLoad(wx_callback)
			},
			onClose: (wx_callback) => {
				interstitialAd.onClose(wx_callback)
			},
			onError: (wx_callback) => {
				interstitialAd.onError(wx_callback)
			},
			onLoad: (wx_callback) => {
				interstitialAd.onLoad(wx_callback)
			},
			show: () => {
				interstitialAd.show()
			},
		}
		return interstitialAd_object;
	}

	// ///////////////////////////////////多媒体/////////////////////////////////////
	// ////////////////////////////地图///////////////////////////////////
	//  未实现 带组件
	static createMapContext() {
		var MapContext_object = {
			// /////////////////getCenterLocation/////////////
			getCenterLocation: (wx_object) => {
				console.log("暂不支持")
			},
			// /////////////////getRegion/////////////
			getRegion: (wx_object) => {
				console.log("暂不支持")
			},
			// /////////////////getRotate/////////////
			getRotate: (wx_object) => {
				console.log("暂不支持")
			},
			// /////////////////getScale/////////////
			getScale: (wx_object) => {
				console.log("暂不支持")
			},
			// /////////////////getSkew/////////////
			getSkew: (wx_object) => {
				console.log("暂不支持")
			},
			// /////////////////includePoints/////////////
			includePoints: (wx_object) => {
				console.log("暂不支持")
			},
			// /////////////////moveToLocation/////////////
			moveToLocation: (wx_object) => {
				console.log("暂不支持")
			},
			// /////////////////setCenterOffset/////////////
			setCenterOffset: (wx_object) => {
				console.log("暂不支持")
			},
			// /////////////////translateMarker/////////////
			translateMarker: (wx_object) => {
				console.log("暂不支持")
			},
		}
		return MapContext_object
	}
	// //////////////////////////相机////////////////////////////////////
	// ////////////////////////createCameraContext////////////////////
	static createCameraContext() {
		var CameraContext_object = {
			// ////////////////takePhoto/////////////////////
			takePhoto: (wx_object) => {
				var quick_object = {};
				if (wx_object) {
					for (var wx_object_key in wx_object) {
						var wx_object_value = wx_object[wx_object_key];
						switch (wx_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "quality":
							default:
								quick_object[wx_object_key] = wx_object_value;
								break;
						}
					};
					quick_object.success = function (quick_res) {
						var wx_res = {
							errMsg: "takePhoto:ok",
							height: 600,
							width: 720
						};
						for (var quick_res_key in quick_res) {
							var quick_res_value = quick_res[quick_res_key]
							switch (quick_res_key) {
								case "uri":
									wx_res.tempImagePath = quick_res_value;
									break;
								case "name":
									break;
								case "size":
									break;
								default:
									// wx_res[quick_res_key] = quick_res_value;
									break;
							}
						}
						if (wx_object.success) {
							wx_object.success(wx_res);
						}
						if (wx_object.complete) {
							wx_object.complete(wx_res);
						}
					};
					quick_object.fail = function (quick_res) {
						quick_res = {
							errMsg: "takePhoto:fail"
						};
						if (wx_object.fail) {
							wx_object.fail(quick_res);
						}
						if (wx_object.complete) {
							wx_object.complete(quick_res);
						}
					};
				}
				media.takePhoto(quick_object);
			},
			// // ////////////////startRecord/////////////////////
			startRecord: (wx_object) => {
				var quick_object = {};
				if (wx_object) {
					for (var wx_object_key in wx_object) {
						var wx_object_value = wx_object[wx_object_key];
						switch (wx_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "timeoutCallback":
								break;
							default:
								quick_object[wx_object_key] = wx_object_value;
								break;
						}
					};
					quick_object.success = function (quick_res) {
						var wx_res = {
							errMsg: "startRecord:ok",
							height: 600,
							width: 720,
							tempThumbPath: "暂不支持"
						};
						for (var quick_res_key in quick_res) {
							var quick_res_value = quick_res[quick_res_key]
							switch (quick_res_key) {
								case "uri":
									wx_res.tempVideoPath = quick_res_value;
									break;
								case "name":
									break;
								case "size":
									break;
								default:
									// wx_res[quick_res_key] = quick_res_value;
									break;
							}
						}
						if (wx_object.success) {
							wx_object.success(wx_res);
						}
						if (wx_object.complete) {
							wx_object.complete(wx_res);
						}
					};
					quick_object.fail = function (quick_res) {
						quick_res = {
							errMsg: "startRecord:fail"
						};
						if (wx_object.fail) {
							wx_object.fail(quick_res);
						}
						if (wx_object.complete) {
							wx_object.complete(quick_res);
						}
					};
				}
				media.takeVideo(quick_object);
			},
			// // ////////////////stopRecord/////////////////////
			stopRecord: (wx_object) => {
				console.log("暂不支持")
			},
			// // ////////////////setZoom/////////////////////
			setZoom: (wx_object) => {
				console.log("暂不支持")
			},
			// // ////////////////onCameraFrame/////////////////////
			onCameraFrame: (wx_object) => {
				console.log("暂不支持")
				var CameraFrame_object = {
					// ///////////////start///////////////
					start: (wx_object) => {
						console.log("暂不支持")
					},
					// ///////////////stop////////////////////
					stop: (wx_object) => {
						console.log("暂不支持")
					}
				}
				return CameraFrame_object
			},
		}
		return CameraContext_object
	}
	//  ///////////////////////图片///////////////////////
	// ////////////////////chooseImage/////////////////////
	static chooseImage(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "chooseImage:ok",
					tempFiles: [],
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "uris":
							wx_res.tempFilePaths = quick_res_value
							break;
						case "files":
							for (var i = 0; i < quick_res_value.length; i++) { //数组
								wx_res.tempFiles[i] = {};
								for (var quick_res_files_key in quick_res_value[i]) { //对象
									// console.log(i);
									const quick_res_files_value = quick_res_value[i][quick_res_files_key]
									switch (quick_res_files_key) {
										case "name":
											delete quick_res_value[i][quick_res_files_key]
											break;
										case "uri":
											wx_res.tempFiles[i].path = quick_res_files_value;
											break;
										default:
											break;
									}
								}
								// delete quick_res_value[i].name;
								// wx_res.tempFilePaths.push(quick_res_value[i])
							}
							break;
						default:
							// wx_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "chooseImage:fail"
				};
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		return media.pickImages(quick_object)
	}
	// //////////////////////chooseMessageFile///////////////
	static chooseMessageFile(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "count":
					case "type":
					case "extension":
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "chooseMessageFile:ok",
					tempFiles: [{
						time: 1584961531,
						type: "image"
					}],
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "name":
							wx_res.tempFiles[0][quick_res_key] = quick_res_value
							break;
						case "size":
							wx_res.tempFiles[0][quick_res_key] = quick_res_value
							break;
						case "uri":
							wx_res.tempFiles[0].path = quick_res_value
							break;
						default:
							// wx_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "chooseMessageFile:fail"
				};
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		return media.pickFile(quick_object);
	}
	// //////////////////////previewImage//////////////////
	static previewImage(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "urls":
						quick_object.uris = wx_object_value;
						quick_object.current = wx_object_value;
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "previewImage:ok",
				};
				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "previewImage:fail"
				};
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		return media.previewImage(quick_object)
	}
	// ////////////////////saveImageToPhotosAlbum///////////////
	static saveImageToPhotosAlbum(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "filePath":
						quick_object.uri = wx_object_value;
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "saveImageToPhotosAlbum:ok",
				};
				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "saveImageToPhotosAlbum:fail"
				};
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		return media.saveToPhotosAlbum(quick_object)
	}
	// //////////////////////compressImage/////////////////
	static compressImage(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "src":
						// thekit.fixurl(wx.url ,url)
						// quick_object.uri = thekit.fixurl(wx_object_value ,url);
						quick_object.uri = wx_object_value;
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "compressImage:ok",
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "uri":

							wx_res.tempFilePath = quick_res_value;
							break;
						default:
							// wx_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "compressImage:fail"
				};
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		return image.compressImage(quick_object)
	}
	// //////////////////////getImageInfo/////////////////
	static getImageInfo(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "src":
						quick_object.uri = wx_object_value;
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "getImageInfo:ok",
					orientation: "up",
					type:"png"
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "uri":
							wx_res.path = quick_res_value;
							// wx_res.type = quick_res_value.split("").reverse().join("").split(".")[0].split("").reverse().join("");
							break;
						case "width":
							wx_res[quick_res_key] = quick_res_value;
							break;
						case "height":
							wx_res[quick_res_key] = quick_res_value;
							break;
						case "size":
							break;
						default:
							// wx_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "getImageInfo:fail"
				};
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		return image.getImageInfo(quick_object)
	}
	// //////////////////////视频////////////////////////////////////////
	// //////////////////////chooseVideo/////////////////
	static chooseVideo(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "sourceType":
					case "compressed":
					case "maxDuration":
					case "camera":
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "chooseVideo:ok",
					duration: 3,
					height: 720,
					width: 480
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "uri":
							wx_res.tempFilePath = quick_res_value;
							break;
						case "size":
							wx_res[quick_res_key] = quick_res_value;
							break;
						default:
							// wx_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "chooseVideo:fail"
				};
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		return media.pickVideo(wx_object);
	}
	// //////////////////////saveVideoToPhotosAlbum/////////////////
	static saveVideoToPhotosAlbum(wx_object) {
		console.log("暂不支持")
	}
	// //////////////////////getVideoInfo/////////////////
	static getVideoInfo(wx_object) {
		console.log("暂不支持")
	}
	// //////////////////////compressVideo/////////////////
	static compressVideo(wx_object) {
		console.log("暂不支持")
	}
	// //////////////////////chooseMedia/////////////////
	static chooseMedia(wx_object) {
		console.log("暂不支持")
	}
	// //////////////////////wx.createVideoContext/////////////////
	static createVideoContext(wx_object) {
		var VideoContext = {
			exitFullScreen: () => {
				console.log("暂不支持")
			},
			exitPictureInPicture: (res) => {
				console.log("暂不支持")
			},
			hideStatusBar: () => {
				console.log("暂不支持")
			},
			pause: () => {
				console.log("暂不支持")
			},
			play: () => {
				console.log("暂不支持")
			},
			playbackRate: (res) => {
				console.log("暂不支持")
			},
			requestFullScreen: (res) => {
				console.log("暂不支持")
			},
			seek: (res) => {
				console.log("暂不支持")
			},
			sendDanmu: (res) => {
				console.log("暂不支持")
			},
			showStatusBar: () => {
				console.log("暂不支持")
			},
			stop: () => {
				console.log("暂不支持")
			},
		};
		return VideoContext
	}
	// ////////////////////音频/////////////////////////////////////////////////////
	// ////////////////////playVoice///////////////////////
	//  快应用没有参数
	static playVoice(wx_object) {
		audio.src = wx_object.filePath;
		return audio.play();
	}
	// ////////////////////stopVoice///////////////////////
	//  快应用没有参数
	static stopVoice(wx_object) {
		return audio.stop();
	}
	// ////////////////////pauseVoice///////////////////////
	//  快应用没有参数
	static pauseVoice(wx_object) {
		return audio.pause();
	}
	// ////////////////////getAvailableAudioSources//////////////
	static getAvailableAudioSources(wx_object) {
		console.log("暂不支持")
	}
	// ///////////////////createAudioContext////////////////////
	static createAudioContext(wx_object) {
		var AudioContext = {
			pause: () => {
				console.log("暂不支持");
			},
			play: () => {
				console.log("暂不支持");
			},
			seek: (Num) => {
				console.log("暂不支持");
			},
			setSrc: (Src) => {
				console.log("暂不支持");
			},
		}
		return AudioContext
	}

	static createInnerAudioContext() {
		var InnerAudioContext = {
			play: () => {
				audio.play();
			},
			pause: () => {
				audio.pause();
			},
			stop: () => {
				audio.stop();
			},
			seek: (num) => {
				console.log("暂不支持");
			},
			destroy: () => {
				console.log("暂不支持");
			},
			offCanplay: (wx_callback) => {
				console.log("暂不支持");
			},
			offEnded: (wx_callback) => {
				console.log("暂不支持");
			},
			offError: (wx_callback) => {
				console.log("暂不支持");
			},
			offPause: (wx_callback) => {
				console.log("暂不支持");
			},
			offPlay: (wx_callback) => {
				console.log("暂不支持");
			},
			offSeeked: (wx_callback) => {
				console.log("暂不支持");
			},
			offSeeking: (wx_callback) => {
				console.log("暂不支持");
			},
			offStop: (wx_callback) => {
				console.log("暂不支持");
			},
			offWaiting: (wx_callback) => {
				console.log("暂不支持");
			},
			onCanplay: (wx_callback) => {
				console.log("暂不支持");
			},
			onEnded: (wx_callback) => {
				console.log("暂不支持");
			},
			onError: (wx_callback) => {
				console.log("暂不支持");
			},
			onPause: (wx_callback) => {
				console.log("暂不支持");
			},
			onPlay: (wx_callback) => {
				console.log("暂不支持");
			},
			onSeeked: (wx_callback) => {
				console.log("暂不支持");
			},
			onSeeking: (wx_callback) => {
				console.log("暂不支持");
			},
			onStop: (wx_callback) => {
				console.log("暂不支持");
			},
			onTimeUpdate: (wx_callback) => {
				console.log("暂不支持");
			},
			onWaiting: (wx_callback) => {
				console.log("暂不支持");
			},

		}
		return InnerAudioContext
	}
	// ////////////////////背景音频///////////////////////////////////////////////////
	// quickapp音频播放里面没有参数 没有成功失败的回调
	// ////////////////////////playBackgroundAudio///////////////////
	static playBackgroundAudio(wx_object) {
		if (!wx_object) {
			return;
		}
		let wx_dataUrl = wx_object.dataUrl;
		let wx_title = wx_object.title;
		let wx_coverImgUrl = wx_object.coverImgUrl;
		let wx_success = wx_object.success;
		let wx_fail = wx_object.fail;
		let wx_complete = wx_object.complete;
		wx_object = null;
		//////////////////////
		if (wx_dataUrl) {
			audio.src = wx_dataUrl;
		}
		if (wx_title) {
			audio.tilte = wx_title;
		}
		if (wx_coverImgUrl) {
			audio.cover = wx_coverImgUrl;
		}
		return audio.play();
	}
	// ////////////////////////stopBackgroundAudio///////////////////
	static stopBackgroundAudio(wx_object) {
		audio.stop();
	}
	// ////////////////////////seekBackgroundAudio///////////////////
	static seekBackgroundAudio(wx_object) {
		if (!wx_object) {
			return;
		}
		let wx_position = wx_object.position;
		let wx_success = wx_object.success;
		let wx_fail = wx_object.fail;
		let wx_complete = wx_object.complete;
		if (wx_position) {
			audio.currentTime = wx_position
		}
		return;
	}
	// ////////////////////////pauseBackgroundAudio///////////////////
	static pauseBackgroundAudio(wx_object) {
		audio.pause();
	}
	// ////////////////////////onBackgroundAudioStop///////////////////
	static onBackgroundAudioStop(wx_callback) {
		audio.onstop = wx_callback;
	}
	// ////////////////////////onBackgroundAudioPlay///////////////////
	static onBackgroundAudioPlay(wx_callback) {
		audio.onplay = wx_callback;
	}
	// ////////////////////////onBackgroundAudioPause///////////////////
	static onBackgroundAudioPause(wx_callback) {
		audio.onpause = wx_callback;
	}
	// ////////////////////////getBackgroundAudioPlayerState///////////////////
	static getBackgroundAudioPlayerState(wx_object) {
		if (!wx_object) {
			return;
		}
		let wx_success = wx_object.success;
		let wx_fail = wx_object.fail;
		let wx_complete = wx_object.complete;
		var quick_object = {};
		wx_object = null;
		//////////////////////////
		quick_object.success = function (quick_res) {
			var wx_res = {
				errMsg: "getBackgroundAudioPlayerState:ok",
				duration: "暂不支持",
				downloadPercent: "暂不支持",
			};
			for (var quick_res_key in quick_res) {
				var quick_res_value = quick_res[quick_res_key];
				switch (quick_res_key) {
					case "state": // 快应用
						if (quick_res_value == "play") {
							wx_res.status = 1;
						}
						if (quick_res_value == "pause") {
							wx_res.status = 0;
						}
						if (quick_res_value == "stop") {
							wx_res.status = 2;
						}
						break;
					case "src":   // 快应用
						wx_res.dataUrl = quick_res_value;// 微信
						break;
					case "currentTime":
						wx_res.currentPosition = quick_res_value;
						break;
					case "autoplay":
						break;
					case "loop":
						break;
					case "volume":
						break;
					case "muted":
						break;
					case "notificationVisible":
						break;
					default:
						// wx_res[quick_res_key] = quick_res_value;
						break;
				}
			}
			if (wx_success) {
				wx_success(wx_res);
			}
			if (wx_complete) {
				wx_complete(wx_res);
			}
		};
		quick_object.fail = function (quick_res) {
			quick_res = {
				errMsg: "getBackgroundAudioPlayerState:fail"
			}
			if (wx_fail) {
				wx_fail(quick_res);
			}
			if (wx_complete) {
				wx_complete(quick_res);
			}
		};
		return audio.getPlayState(quick_object);
	}
	// ////////////////////////getBackgroundAudioManager///////////////////
	static getBackgroundAudioManager() {
		var BackgroundAudioManager = {
			// wx 属性 需要实时更新 当前属性
			duration: audio.duration,
			currentTime: audio.currentTime,
			paused: "暂不支持",
			buffered: "暂不支持",
			// wx 方法
			stop: function () {
				audio.stop()
			},
			play: function () {
				audio.src = this.src;
				audio.title = this.title;
				audio.currentTime = this.startTime;
				audio.artist = this.singer;
				audio.cover = this.coverImgUrl;
				audio.play();
			},
			seek: function (wx_number) {
				audio.currentTime = wx_number;
			},
			pause: function () {
				audio.pause();
			},
			onWaiting: function () {
				console.log("暂不支持");
			},
			onTimeUpdate: function (wx_callback) {
				audio.ontimeupdate = wx_callback;
			},
			onStop: function (wx_callback) {
				audio.onstop = wx_callback;
			},
			onSeeking: function (wx_callback) {
				console.log("暂不支持");
			},
			onSeeked: function (wx_callback) {
				console.log("暂不支持");
			},
			// ios
			onPrev: function () {
				console.log("暂不支持");
			},
			onPlay: function (wx_callback) {
				audio.onplay = wx_callback;
			},
			onPause: function (wx_callback) {
				audio.onpause = wx_callback;
			},
			// ios
			onNext: function (wx_callback) {
				console.log("暂不支持");
			},
			onError: function (wx_callback) {
				audio.onerror = wx_callback;
			},
			onEnded: function (wx_callback) {
				audio.onended = wx_callback;
			},
			onCanplay: function (wx_callback) {
				console.log("暂不支持");
			}
		}
		return BackgroundAudioManager;
	}
	// ////////////////////实时音视频///////////////////////////////////////////////////
	// ///////////////createLivePusherContext//////////////////
	static createLivePusherContext() {
		var LivePusherContextObject = {
			pause: (wx_object) => {
				console.log("暂不支持")
			},
			pauseBGM: (wx_object) => {
				console.log("暂不支持")
			},
			playBGM: (wx_object) => {
				console.log("暂不支持")
			},
			resume: (wx_object) => {
				console.log("暂不支持")
			},
			resumeBGM: (wx_object) => {
				console.log("暂不支持")
			},
			setBGMVolume: (wx_object) => {
				console.log("暂不支持")
			},
			setMICVolume: (wx_object) => {
				console.log("暂不支持")
			},
			snapshot: (wx_object) => {
				console.log("暂不支持")
			},
			start: (wx_object) => {
				console.log("暂不支持")
			},
			startPreview: (wx_object) => {
				console.log("暂不支持")
			},
			stop: (wx_object) => {
				console.log("暂不支持")
			},
			stopBGM: (wx_object) => {
				console.log("暂不支持")
			},
			stopPreview: (wx_object) => {
				console.log("暂不支持")
			},
			switchCamera: (wx_object) => {
				console.log("暂不支持")
			},
			toggleTorch: (wx_object) => {
				console.log("暂不支持")
			},
		}
		return LivePusherContextObject;
	}
	// ///////////////createLivePlayerContext//////////////////
	static createLivePlayerContext() {
		var LivePlayerContextObject = {
			exitFullScreen: (wx_object) => {
				console.log("暂不支持")
			},
			exitPictureInPicture: (wx_object) => {
				console.log("暂不支持")
			},
			mute: (wx_object) => {
				console.log("暂不支持")
			},
			pause: (wx_object) => {
				console.log("暂不支持")
			},
			play: (wx_object) => {
				console.log("暂不支持")
			},
			requestFullScreen: (wx_object) => {
				console.log("暂不支持")
			},
			resume: (wx_object) => {
				console.log("暂不支持")
			},
			snapshot: (wx_object) => {
				console.log("暂不支持")
			},
			stop: (wx_object) => {
				console.log("暂不支持")
			},
		}
		return LivePlayerContextObject;
	}
	// //////////////////////Recorder录音/////////////////////////////////
	// //////////////////////getRecorderManager///////////////////////
	static getRecorderManager() {
		var RecorderManagerObj = {
			start: (wx_object) => {
				var quick_object = {};
				if (wx_object) {
					for (var wx_object_key in wx_object) {
						var wx_object_value = wx_object[wx_object_key];
						switch (wx_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "frameSize":
							case "audioSource":
								break;
							default:
								quick_object[wx_object_key] = wx_object_value;
								break;
						}
					};
					quick_object.success = function (quick_res) {
						var wx_res = {
							errMsg: "operateRecorder:ok"
						};
						for (var quick_res_key in quick_res) {
							var quick_res_value = quick_res[quick_res_key]
							switch (quick_res_key) {
								case "uri":
									break;
								default:
									// wx_res[quick_res_key] = quick_res_value;
									break;
							}
						}
						if (wx_object.success) {
							wx_object.success(wx_res);
						}
						if (wx_object.complete) {
							wx_object.complete(wx_res);
						}
					};
					quick_object.fail = function (quick_res) {
						quick_res = {
							errMsg: "operateRecorder:fail"
						};
						if (wx_object.fail) {
							wx_object.fail(quick_res);
						}
						if (wx_object.complete) {
							wx_object.complete(quick_res);
						}
					};
				}
				return record.start(quick_object)
			},
			stop: (wx_object) => {
				return record.stop(wx_object);
			},
			onError: (wx_object) => {
				console.log("暂不支持");
			},
			onFrameRecorded: (wx_object) => {
				console.log("暂不支持");
			},
			onInterruptionBegin: (wx_object) => {
				console.log("暂不支持");
			},
			onInterruptionEnd: (wx_object) => {
				console.log("暂不支持");
			},
			onPause: (wx_object) => {
				console.log("暂不支持");
			},
			onResume: (wx_object) => {
				console.log("暂不支持");
			},
			onStart: (wx_object) => {
				console.log("暂不支持");
			},
			onStop: (wx_object) => {
				console.log("暂不支持");
			},
			pause: (wx_object) => {
				console.log("暂不支持");
			},
			resume: (wx_object) => {
				console.log("暂不支持");
			}
		}
		return RecorderManagerObj;
	}
	// //////////////////////startRecord///////////////////////
	static startRecord(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "startRecord:ok"
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "uri":
							wx_res.tempFilePath = quick_res_value;
							break;
						default:
							// wx_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "startRecord:fail"
				};
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		return record.start(quick_object)
	};
	// //////////////////////stopRecord///////////////////////
	static stopRecord(wx_object) {
		// 快应用没有参数，没有返回值
		return record.stop(wx_object)
	}
	// ///////////////////////音视频合成/////////////////////////
	// /////////////////createMediaContainer////////////
	static createMediaContainer() {
		var MediaContainerObject = {
			addTrack: (track) => {
				console.log("暂不支持")
			},
			destroy: () => {
				console.log("暂不支持")
			},
			export: () => {
				console.log("暂不支持")
			},
			dpoveTrack: (track) => {
				console.log("暂不支持")
			},
			extractDataSource: (wx_object) => {
				console.log("暂不支持")
			},
		}
		return MediaContainerObject;
	}
	// ///////////////////////视频解码器/////////////////////////
	// /////////////////createVideoDecoder////////////
	static createVideoDecoder() {
		var VideoDecoderObject = {
			getFrameData: () => {
				console.log("暂不支持")
			},
			off: () => {
				console.log("暂不支持")
			},
			on: () => {
				console.log("暂不支持")
			},
			dpove: () => {
				console.log("暂不支持")
			},
			seek: (wx_number) => {
				console.log("暂不支持")
			},
			start: (wx_object) => {
				console.log("暂不支持")
			},
			stop: () => {
				console.log("暂不支持")
			},
		}
		return VideoDecoderObject;
	}
	// ///////////////////////画面录制器/////////////////////////
	// /////////////////createMediaRecorder////////////
	static createMediaRecorder() {
		var MediaRecorderObject = {
			destroy: () => {
				console.log("暂不支持")
			},
			off: () => {
				console.log("暂不支持")
			},
			on: () => {
				console.log("暂不支持")
			},
			pause: () => {
				console.log("暂不支持")
			},
			requestFrame: (wx_callback) => {
				console.log("暂不支持")
			},
			resume: () => {
				console.log("暂不支持")
			},
			start: (wx_object) => {
				console.log("暂不支持")
			},
			stop: () => {
				console.log("暂不支持")
			},
		}
		return MediaRecorderObject;
	}

	// ////////////////////////////基础///////////////////////////////////////////
	// //////////////////////canIUse///////////////////////
	static canIUse(wx_object) {
		console.log("暂不支持");
	}
	// ///////////////////base64ToArrayBuffer//////////////////
	static base64ToArrayBuffer(base64String) {
		var Base64Binary = {
			_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

			/* will return a  Uint8Array type */
			decodeArrayBuffer: function (input) {
				var bytes = (input.length / 4) * 3;
				var ab = new ArrayBuffer(bytes);
				this.decode(input, ab);
				return ab;
			},

			dpovePaddingChars: function (input) {
				var lkey = this._keyStr.indexOf(input.charAt(input.length - 1));
				if (lkey == 64) {
					return input.substring(0, input.length - 1);
				}
				return input;
			},

			decode: function (input, arrayBuffer) {
				//get last chars to see if are valid
				input = this.dpovePaddingChars(input);
				input = this.dpovePaddingChars(input);

				var bytes = parseInt((input.length / 4) * 3, 10);

				var uarray;
				var chr1, chr2, chr3;
				var enc1, enc2, enc3, enc4;
				var i = 0;
				var j = 0;

				if (arrayBuffer) {
					uarray = new Uint8Array(arrayBuffer);
				} else {
					uarray = new Uint8Array(bytes);
				}
				input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
				for (i = 0; i < bytes; i += 3) {
					//get the 3 octects in 4 ascii chars
					enc1 = this._keyStr.indexOf(input.charAt(j++));
					enc2 = this._keyStr.indexOf(input.charAt(j++));
					enc3 = this._keyStr.indexOf(input.charAt(j++));
					enc4 = this._keyStr.indexOf(input.charAt(j++));
					chr1 = (enc1 << 2) | (enc2 >> 4);
					chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
					chr3 = ((enc3 & 3) << 6) | enc4;
					uarray[i] = chr1;
					if (enc3 != 64) uarray[i + 1] = chr2;
					if (enc4 != 64) uarray[i + 2] = chr3;
				}
				return uarray;
			}
		}
		var byteArray = Base64Binary.decodeArrayBuffer(base64String);
		return byteArray;
	}

	// ///////////////////arrayBufferToBase64//////////////////
	static arrayBufferToBase64(buffer) {
		var base64 = ''
		var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
		var bytes = new Uint8Array(buffer)
		var byteLength = bytes.byteLength;
		var bytedpainder = byteLength % 3
		var mainLength = byteLength - bytedpainder
		var a, b, c, d
		var chunk
		for (var i = 0; i < mainLength; i = i + 3) {
			chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2]
			a = (chunk & 16515072) >> 18 // 16515072 = (2^6 - 1) << 18
			b = (chunk & 258048) >> 12 // 258048 = (2^6 - 1) << 12
			c = (chunk & 4032) >> 6 // 4032 = (2^6 - 1) << 6
			d = chunk & 63 // 63 = 2^6 - 1
			base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d]
		}
		if (bytedpainder == 1) {
			chunk = bytes[mainLength]
			a = (chunk & 252) >> 2 // 252 = (2^6 - 1) << 2;
			b = (chunk & 3) << 4 // 3 = 2^2 - 1;
			base64 += encodings[a] + encodings[b] + '=='
		} else if (bytedpainder == 2) {
			chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1]
			a = (chunk & 16128) >> 8 // 16128 = (2^6 - 1) << 8;
			b = (chunk & 1008) >> 4 // 1008 = (2^6 - 1) << 4;
			c = (chunk & 15) << 2 // 15 = 2^4 - 1;
			base64 += encodings[a] + encodings[b] + encodings[c] + '='
		}
		return base64
	}

	// //////////////////////更新////////////////////////
	// //////////////getUpdateManager////////////
	static getUpdateManager() {
		var updateManager = {
			applyUpdate: () => {
				console.log("暂不支持")
			},
			onCheckForUpdate: () => {
				console.log("暂不支持")
			},
			onUpdateFailed: () => {
				console.log("暂不支持")
			},
			onUpdateReady: () => {
				console.log("暂不支持")
			},
		}
		return updateManager;
	}
	// //////////////////////小程序////////////////////////
	// //////////////////////生命周期////////////////////////
	// //////////////////getLaunchOptionsSync////////////
	static getLaunchOptionsSync() {
		console.log("暂不支持")
	}
	static getEnterOptionsSync() {
		console.log("暂不支持")
	}

	// //////////////////////应用级事件////////////////////////
	// //////////////////////onUnhandledRejection////////////////////////
	static onUnhandledRejection() {
		console.log("暂不支持")
	}
	// //////////////////////onThemeChange////////////////////////
	static onThemeChange() {
		console.log("暂不支持")
	}
	// //////////////////////onPageNotFound////////////////////////
	static onPageNotFound() {
		console.log("暂不支持")
	}
	// //////////////////////onError////////////////////////
	static onError() {
		console.log("暂不支持")
	}
	// //////////////////////onAudioInterruptionEnd////////////////////////
	static onAudioInterruptionEnd() {
		console.log("暂不支持")
	}
	// //////////////////////onAudioInterruptionBegin////////////////////////
	static onAudioInterruptionBegin() {
		console.log("暂不支持")
	}
	// //////////////////////onAppShow////////////////////////
	static onAppShow() {
		console.log("暂不支持")
	}
	// //////////////////////onAppHide////////////////////////
	static onAppHide() {
		console.log("暂不支持")
	}
	// //////////////////////offUnhandledRejection////////////////////////
	static offUnhandledRejection() {
		console.log("暂不支持")
	}
	// //////////////////////offThemeChange////////////////////////
	static offThemeChange() {
		console.log("暂不支持")
	}
	// //////////////////////offPageNotFound////////////////////////
	static offPageNotFound() {
		console.log("暂不支持")
	}
	// //////////////////////offError////////////////////////
	static offError() {
		console.log("暂不支持")
	}
	// //////////////////////offAudioInterruptionEnd////////////////////////
	static offAudioInterruptionEnd() {
		console.log("暂不支持")
	}
	// //////////////////////offAppShow////////////////////////
	static offAppShow() {
		console.log("暂不支持")
	}
	// //////////////////////offAppHide////////////////////////
	static offAppHide() {
		console.log("暂不支持")
	}

	// //////////////////////调试/////////////////////////////////////
	// //////////////////////setEnableDebug////////////////////////
	static setEnableDebug() {
		console.log("暂不支持")
	}
	// //////////////////////getRealtimeLogManager////////////////////////
	static getRealtimeLogManager() {
		var RealtimeLogManager = {
			addFilterMsg: () => {
				console.log("暂不支持")
			},
			error: () => {
				console.log("暂不支持")
			},
			in: () => {
				console.log("暂不支持")
			},
			info: () => {
				console.log("暂不支持")
			},
			setFilterMsg: () => {
				console.log("暂不支持")
			},
			warn: () => {
				console.log("暂不支持")
			},
		}
		return RealtimeLogManager;
	}
	// //////////////////////getLogManager////////////////////////
	static getLogManager() {
		var LogManager = {
			debug: () => {
				console.log("暂不支持")
			},
			info: () => {
				console.log("暂不支持")
			},
			log: () => {
				console.log("暂不支持")
			},
			warn: () => {
				console.log("暂不支持")
			},
		}
		return LogManager;
	}
	// //////////////////////console/////////////////////
	// console.group 和 console.groupEnd 快应用没有

	// //////////////////////定时器//////////////////////////

	// //////////////////////环境变量////////////////////////

	///////////////////////////路由/////////////////////////////////////////////
	// //////////////////////switchTab////////////////////////
	static switchTab(wx_object) {
		if (!wx_object) {
			return
		}
		router.clear();
		router.replace({ uri: "onekit/page/tabspage", params: { url: wx_object.url } })
	}
	// //////////////////////reLaunch////////////////////////
	//   wx和快应用 路由的传参方式不一样
	static reLaunch(wx_object) {
		router.clear();
		var quick_object = {};
		// 没有参数时
		if (wx_object.url.indexOf('?') == -1) {
			quick_object.uri = wx_object.url;
		}
		// 有参数时
		else {
			quick_object.uri = wx_object.url.split("?")[0];
			quick_object.params = {}
			var arr = wx_object.url.split("?")[1].split("&")
			for (let i = 0; i < arr.length; i++) {
				quick_object.params[arr[i].split("=")[0]] = arr[i].split("=")[1];
			}
		}
		router.replace(quick_object);
	}

	// //////////////////////redirectTo//////////////////////////
	// 要跳转到 非tabbar页面
	static redirectTo(wx_object) {
		var quick_object = {};
		// 没有参数时
		if (wx_object.url.indexOf('?') == -1) {
			quick_object.uri = wx_object.url;
			//  要判断 tabbar页面
			// for(let tab_obj of tabs_list){
			// 	if(quick_object.uri == tabs_index.pagePath){
			// 		let err = {"errMsg":"redirectTo:fail can not redirectTo a tabbar page"}
			// 		console.error(err);   //   当路径是tabbar时，报错
			// 		return;
			// 	}
			// };
		}
		// 有参数时
		else {
			//  要判断 tabbar页面
			quick_object.uri = wx_object.url.split("?")[0];
			quick_object.params = {}
			var arr = wx_object.url.split("?")[1].split("&")
			for (let i = 0; i < arr.length; i++) {
				quick_object.params[arr[i].split("=")[0]] = arr[i].split("=")[1];
			}
		}
		return router.replace(quick_object);
	}
	// //////////////////////navigateTo//////////////////////////
	static navigateTo(wx_object) {  
		var quick_object = {};
		// 没有参数时
		var url_params = wx_object.url.split("?");
		var url = url_params[0];
		quick_object.uri = thekit.fixurl(wx.THIS.$page.path ,url);
		//
		if(url_params.length>1) {
			quick_object.params = {}
			var arr = url_params[1].split("&")
			for (let i = 0; i < arr.length; i++) {
				quick_object.params[arr[i].split("=")[0]] = arr[i].split("=")[1];
			}
		}
		router.push(quick_object);
	}
	// //////////////////////navigateBack////////////////////////
	static navigateBack(wx_object) {
		if (!wx_object) {
			return router.back();
		}
		var quick_object = {};
		var page = router.getState();
		var stacks = router.getPages();
		var deltaIndex = 0;
		if (wx_object.delta) {
			if (wx_object.delta >= stacks.length) {
				deltaIndex = 0
			}
			else {
				deltaIndex = page.index - wx_object.delta;
			}
		}
		else {
			deltaIndex = page.index - 1;
		}
		quick_object.path = stacks[deltaIndex].path;
		router.back(quick_object);
	}
	// ///////////////////////EventChannel//////////////////////

	// ////////////////////////界面////////////////////////////////////////////
	// ////////////////////////交互//////////////////////////////
	// ////////////////////////showToast//////////////////////////////
	static showToast(wx_object) {
		if (!wx_object) {
			return;
		}
		let wx_title = wx_object.title;   // 必填项 现实的文本
		let wx_icon = wx_object.icon;    // 图片
		let wx_image = wx_object.image;
		let wx_duration = wx_object.duration || 0 // 间隔时长
		let wx_mask = wx_object.mask;
		let wx_success = wx_object.success;
		let wx_fail = wx_object.fail;
		let wx_complete = wx_object.complete;

		let quick_object = {
			message: wx_title,
			duration: wx_duration
		}
		wx_object = null;
		/////////////////////
		return prompt.showToast(quick_object);

	}
	// ////////////////////////showModal//////////////////////////////
	static showModal(wx_object) {
		if (!wx_object) {
			return;
		}
		let wx_title = wx_object.title; // 
		let wx_content = wx_object.content;    //
		let wx_showCancel = wx_object.showCancel;
		let wx_cancelText = wx_object.cancelText || '取消';
		let wx_cancelColor = wx_object.cancelColor || "#000000"
		let wx_confirmText = wx_object.confirmText || '确定';
		let wx_confirmColor = wx_object.confirmColor || "#576B95";
		let wx_success = wx_object.success;
		let wx_fail = wx_object.fail;
		let wx_complete = wx_object.complete;
		let quick_object = {
			buttons: [{
				text: wx_confirmText,
				color: wx_confirmColor
			}, {
				text: wx_cancelText,
				color: wx_cancelColor
			}]
		}
		wx_object = null;
		/////////////////////

		if (wx_title) {
			quick_object.title = wx_title
		}
		if (wx_content) {
			quick_object.message = wx_content
		}
		if (wx_showCancel == false) {
			quick_object.buttons.splice(1, 1);
		}

		quick_object.success = function (quick_res) {
			var wx_res = {
				errMsg: "showModal:ok"
			};
			for (var quick_res_key in quick_res) {
				var quick_res_value = quick_res[quick_res_key];
				switch (quick_res_key) {
					case "index": // 快应用
						if (quick_res_value == "0") {
							wx_res.confirm = true;
							wx_res.cancel = false;
						}
						if (quick_res_value == "1") {
							wx_res.confirm = false;
							wx_res.cancel = true;
						}// 微信
						break;
					default:
						// wx_res[quick_res_key] = quick_res_value;
						break;
				}
			}

			if (wx_success) {
				wx_success(wx_res);
			}
			if (wx_complete) {
				wx_complete(wx_res);
			}
		};
		quick_object.fail = function (quick_res) {
			var quick_res = {
				errMsg: "showModal:fail"
			}
			if (wx_fail) {
				wx_fail(quick_res);
			}
			if (wx_complete) {
				wx_complete(quick_res);
			}
		};

		return prompt.showDialog(quick_object)
	}
	// ////////////////////////showActionSheet//////////////////////////
	static showActionSheet(wx_object) {
		if (!wx_object) {
			return
		}
		let wx_itemList = wx_object.itemList;
		let wx_itemColor = wx_object.itemColor || "#000000";
		let wx_success = wx_object.success;
		let wx_fail = wx_object.fail;
		let wx_complete = wx_object.complete;
		let quick_object = {}
		wx_object = null;
		/////////////////
		if (wx_itemList) {
			if (wx_itemList.length > 6) {
				var quick_res1 = { errMsg: "showActionSheet:fail parameter error: itemList should not be large than 6" }
				if (wx_fail) {
					wx_fail(quick_res1);
				}
				if (wx_complete) {
					wx_complete(quick_res1);
				}
				return;
			}
			else {
				quick_object.itemList = wx_itemList;
			}
		}
		if (wx_itemColor) {
			quick_object.itemColor = wx_itemColor
		}
		quick_object.success = function (quick_res) {
			var wx_res = {
				errMsg: "showActionSheet:ok"
			};
			for (var quick_res_key in quick_res) {
				var quick_res_value = quick_res[quick_res_key];
				switch (quick_res_key) {
					case "index": // 快应用
						wx_res.tapIndex = quick_res_value; // 微信
						break;
					default:
						// wx_res[quick_res_key] = quick_res_value;
						break;
				}
			}

			if (wx_success) {
				wx_success(wx_res);
			}
			if (wx_complete) {
				wx_complete(wx_res);
			}
		};
		quick_object.fail = function (quick_res) {
			var quick_res = {
				errMsg: "showModal:fail"
			}
			if (wx_fail) {
				wx_fail(quick_res);
			}
			if (wx_complete) {
				wx_complete(quick_res);
			}
		};
		return prompt.showContextMenu(quick_object)
	}
	// ////////////////////////showLoading//////////////////////////////
	static showLoading(wx_object) {
		prompt.showToast({
			message: "加载中...",
			duration: 1
		})
	}
	// ////////////////////////hideLoading//////////////////////////////
	static hideLoading(wx_object) {
		// console.log("暂不支持");
	}
	// ////////////////////////hideToast//////////////////////////////
	static hideToast(wx_object) {
		// console.log("暂不支持");
	}
	// /////////////////////////导航栏////////////////////////////
	// ///////////////////setNavigationBarTitle//////////////////
	// 要先在页面中把页面的信息传给wx对象
	static setNavigationBarTitle(wx_object) {
		if (!wx_object) {
			return;
		}
		let wx_title = wx_object.title;
		let wx_success = wx_object.success;
		let wx_fail = wx_object.fail;
		let wx_complete = wx_object.complete;
		let quick_object = {}
		wx_object = null;
		//////////////
		if (wx_title) {
			quick_object.text = wx_title;
		}
		this.THIS.$page.setTitleBar(quick_object);
	}
	// /////////////////showNavigationBarLoading///////////////
	static showNavigationBarLoading(wx_object) {
		console.log("暂不支持");
	}
	// /////////////////setNavigationBarColor////////////////
	static setNavigationBarColor(wx_object) {
		if (!wx_object) {
			return;
		}
		let wx_frontColor = wx_object.frontColor;
		let wx_backgroundColor = wx_object.backgroundColor;
		let wx_animation = wx_object.animation;
		let wx_success = wx_object.success;
		let wx_fail = wx_object.fail;
		let wx_complete = wx_object.complete;
		let quick_object = {}
		wx_object = null;
		//////////////
		if (wx_frontColor) {
			quick_object.textColor = wx_frontColor;
		}
		if (wx_backgroundColor) {
			quick_object.backgroundColor = wx_backgroundColor;
		}
		this.THIS.$page.setTitleBar(quick_object);
	}
	// /////////////////hideNavigationBarLoading///////////////
	static hideNavigationBarLoading(wx_object) {
		console.log("暂不支持");
	}
	// /////////////////hideHomeButton///////////////
	static hideHomeButton(wx_object) {
		this.THIS.$page.setTitleBar({
			menu:false
		});
	}

	// /////////////////////////背景//////////////////////////////
	// /////////////////setBackgroundTextStyle///////////////
	static setBackgroundTextStyle(wx_object) {
		console.log("暂不支持");
	}
	// /////////////////setBackgroundColor///////////////
	static setBackgroundColor(wx_object) {
		console.log("暂不支持");
	}

	// ////////////////////////Tab Bar///////////////////////////
	// /////////////////showTabBarRedDot///////////////
	static showTabBarRedDot(wx_object) {
		console.log("暂不支持");
	}
	// /////////////////showTabBar///////////////
	static showTabBar(wx_object) {
		console.log("暂不支持");
	}
	// /////////////////setTabBarStyle///////////////
	static setTabBarStyle(wx_object) {
		console.log("暂不支持");
	}
	// /////////////////setTabBarItem///////////////
	static setTabBarItem(wx_object) {
		console.log("暂不支持");
	}
	// /////////////////setTabBarBadge///////////////
	static setTabBarBadge(wx_object) {
		console.log("暂不支持");
	}
	// /////////////////dpoveTabBarBadge///////////////
	static dpoveTabBarBadge(wx_object) {
		console.log("暂不支持");
	}
	// /////////////////hideTabBarRedDot///////////////
	static hideTabBarRedDot(wx_object) {
		console.log("暂不支持");
	}
	// /////////////////hideTabBar///////////////
	static hideTabBar(wx_object) {
		console.log("暂不支持");
	}

	// ////////////////////////字体//////////////////////////////
	// /////////////////loadFontFace///////////////
	static loadFontFace(wx_object) {
		console.log("暂不支持");
	}
	// ////////////////////////下拉刷新///////////////////////////
	// /////////////////stopPullDownRefresh///////////////
	static stopPullDownRefresh(wx_object) {
		console.log("暂不支持");
	}
	// /////////////////startPullDownRefresh///////////////
	static startPullDownRefresh(wx_object) {
		console.log("暂不支持");
	}
	// ////////////////////////滚动//////////////////////////////
	static pageScrollTo(wx_object) {
		// document.querySelector("root").offsetY = 200;
		// document.all.root.clientY = -200;
		// var a = document.getElementsByTagName("div")[0].offsetY
		console.log("暂不支持");
	}
	// ////////////////////////动画//////////////////////////////
	static createAnimation(wx_object) {
		console.log("暂不支持")
	}
	// ////////////////////////置顶//////////////////////////////
	// /////////////////setTopBarText///////////////
	static setTopBarText(wx_object) {
		console.log("暂不支持");
	}
	// ////////////////////////自定义组件/////////////////////////
	// /////////////////nextTick///////////////
	static nextTick(wx_callback) {
		setTimeout(wx_callback, 0);
	}
	// ////////////////////////菜单//////////////////////////////
	// ////////getMenuButtonBoundingClientRect////////////
	static getMenuButtonBoundingClientRect() {
		let getMenuButtonBoundingClientRectObject = {
			bottom: 58,
			height: 32,
			left: 317,
			right: 404,
			top: 26,
			width: 87
		}
		return getMenuButtonBoundingClientRectObject;
	}
	// ////////////////////////窗口//////////////////////////////
	// /////////////////setWindowSize///////////////
	static setWindowSize(wx_object) {
		console.log("暂不支持");
	}
	// /////////////////onWindowResize///////////////
	static onWindowResize(wx_callback) {
		console.log("暂不支持");
	}
	// /////////////////offWindowResize///////////////
	static offWindowResize(wx_callback) {
		console.log("暂不支持");
	}
	// ////////////////////////键盘//////////////////////////////
	// /////////////////onKeyboardHeightChange///////////////
	static onKeyboardHeightChange(wx_callback) {
		console.log("暂不支持");
	}
	// /////////////////offKeyboardHeightChange///////////////
	static offKeyboardHeightChange(wx_callback) {
		console.log("暂不支持");
	}
	// /////////////////hideKeyboard///////////////
	static hideKeyboard(wx_object) {
		console.log("暂不支持");
	}
	// /////////////////getSelectedTextRange///////////////
	static getSelectedTextRange(wx_object) {
		console.log("暂不支持");
	}
	// ////////////////////////网络////////////////////////////////////////////
	// ///////////////////request///////////////////////
	static request(wx_object) {
		if (!wx_object) {
			return;
		}
		var quick_object = {}; // 快应用数据对象
		let wx_url = wx_object.url;
		let wx_data = wx_object.data;
		let wx_header = wx_object.header;
		let wx_timeout = wx_object.timeout;
		let wx_method = wx_object.method || "GET";
		let wx_responseType = wx_object.responseType || "text";
		let wx_dataType = wx_object.dataType || "json";
		let wx_enableHttp2 = wx_object.enableHttp2 || false;
		let wx_enableQuic = wx_object.enableQuic || false;
		let wx_enableCache = wx_object.enableCache || false;

		let wx_success = wx_object.success;
		let wx_fail = wx_object.fail;
		let wx_complete = wx_object.complete;
		wx_object = null;
		//////////////////////
		if (wx_url) {
			quick_object.url = wx_url;
		}
		if (wx_data) {
			quick_object.data = wx_data;
		}
		if (wx_header) {
			quick_object.header = wx_header;
		}
		if (wx_method) {
			quick_object.method = wx_method;
		}
		if (wx_responseType) {
			quick_object.responseType = wx_responseType;
		}

		quick_object.success = function (quick_res) {
			var wx_res = {
				profile: {
					peerIP: "192.168.22.150",
					port: 80,
					receivedBytedCount: 395,
					redirectEnd: 0,
					redirectStart: 0,
					requestEnd: 1587028378001,
					requestStart: 1587028377982,
					responseEnd: 1587028378001,
					responseStart: 1587028377998
				},
				errMsg: "request:ok",
				abort: "暂不支持"
			};
			for (var quick_res_key in quick_res) {
				var quick_res_value = quick_res[quick_res_key];
				switch (quick_res_key) {
					case "code": // 快应用
						wx_res.statusCode = quick_res_value; // 微信
						break;
					case "headers":
						var quick_res_headers = quick_res_value;
						var wx_res_headers = {};
						for (var quick_res_headers_key in quick_res_headers) { // 循环header里面的属性 对cookies做处理
							var quick_res_headers_value = quick_res_headers[quick_res_headers_key];
							switch (quick_res_headers_key) {
								case "Set-Cookie":
									var quick_res_headers_cookies;
									if (quick_res_headers_value) {
										quick_res_headers_cookies = quick_res_headers_value.join(",");
										wx_res.cookies = quick_res_headers_value;
									} else {
										quick_res_headers_cookies = "";
									}
									wx_res_headers[quick_res_headers_key] = quick_res_headers_cookies;
									break;
								default:
									wx_res_headers[quick_res_headers_key] = quick_res_headers_value;
									break;
							}
						};
						wx_res.header = wx_res_headers;
						break;
					case "data":
						wx_res[quick_res_key] = quick_res_value;
						break;
					default:
						// wx_res[quick_res_key] = quick_res_value;
						break;
				}
			}
			if (wx_success) {
				wx_success(wx_res);
			}
			if (wx_complete) {
				wx_complete(wx_res);
			}
		};
		quick_object.fail = function (quick_res) {
			quick_res = {
				errMsg: "request:fail invalid url"
			}
			if (wx_fail) {
				wx_fail(quick_res);
			}
			if (wx_complete) {
				wx_complete(quick_res);
			}
		};
		return fetch.fetch(quick_object); // 最后输出快应用的数据对象，但是输出wx的格式
	}

	// ////////////////////////////requestTask/////////////////////////////

	// ////////////////////////////上传/////////////////////////////
	// ///////////////////////////uploadFile///////////////////////
	static uploadFile(wx_object) {
		if (!wx_object) {
			return;
		}
		let wx_url = wx_object.url;
		let wx_filePath = wx_object.filePath;
		let wx_name = wx_object.name;
		let wx_header = wx_object.header;
		let wx_timeout = wx_object.timeout;
		let wx_formData = wx_object.formData;
		let wx_success = wx_object.success;
		let wx_fail = wx_object.fail;
		let wx_complete = wx_object.complete;
		var quick_object = {
			files: [{}],
		}; // 快应用数据对象
		wx_object = null
		//////////////////////
		if (wx_url) {
			quick_object.url = wx_url;
		}
		if (wx_filePath) {
			quick_object.files[0].uri = wx_filePath;
		}
		if (wx_header) {
			quick_object.header = wx_header;
		}
		if (wx_name) {
			quick_object.files[0].name = wx_name;
		}
		if (wx_formData) {
			quick_object.data = [];
			for (let key in wx_formData) {
				let quick_data_obj = {
					name: key,
					value: wx_formData[key]
				}
				quick_object.data.push(quick_data_obj)
			}
		}
		quick_object.success = function (quick_res) {
			var wx_res = {
				errMsg: "uploadFile:ok",
			};
			for (var quick_res_key in quick_res) {
				var quick_res_value = quick_res[quick_res_key];
				switch (quick_res_key) {
					case "code": // 快应用
						wx_res.statusCode = quick_res_value; // 微信
						break;
					case "headers":
						break;
					case "data":
						wx_res[quick_res_key] = quick_res_value;
						break;
					default:
						// wx_res[quick_res_key] = quick_res_value;
						break;
				}
			}
			if (wx_success) {
				wx_success(wx_res);
			}
			if (wx_complete) {
				wx_complete(wx_res);
			}
		};
		quick_object.fail = function (quick_res) {
			quick_res = {
				errMsg: "uploadFile:fail"
			}
			if (wx_fail) {
				wx_fail(quick_res);
			}
			if (wx_complete) {
				wx_complete(quick_res);
			}
		};
		return request.upload(quick_object); // 最后输出快应用的数据对象，但是输出wx的格式
	}
	// ////////////////////////////UploadTask/////////////////////

	// ////////////////////////////下载/////////////////////////////
	// ////////////////////////downloadFile////////////////
	static downloadFile(wx_object) {
		if (!wx_object) {
			return;
		}
		let wx_url = wx_object.url;
		let wx_filePath = wx_object.filePath;
		let wx_header = wx_object.header;
		let wx_timeout = wx_object.timeout;
		let wx_success = wx_object.success;
		let wx_fail = wx_object.fail;
		let wx_complete = wx_object.complete;
		wx_object = null;

		var quick_object = {};
		//////////////////////
		if (wx_url) {
			quick_object.url = wx_url;
		}
		if (wx_header) {
			quick_object.header = wx_header;
		}
		quick_object.success = function (quick_res) {
			var wx_res = {
				errMsg: "downloadFile:ok", 
				tempFilePath: "",
				dataLength: 147,
				profile: {
					SSLconnectionEnd: 1589529382326,
					SSLconnectionStart: 1589529382270,
					connectEnd: 1589529382326,
					connectStart: 1589529382261,
					domainLookUpEnd: 1589529382261,
					domainLookUpStart: 1589529382253,
					downstreamThroughputKbpsEstimate: 1961,
					estimate_nettype: 5,
					fetchStart: 1589529382253,
					httpRttEstimate: 58,
					peerIP: "118.24.23.53",
					port: 443,
					receivedBytedCount: 350,
					redirectEnd: 0,
					redirectStart: 0,
					requestEnd: 1589529382404,
					requestStart: 1589529382253,
					responseEnd: 1589529382404,
					responseStart: 1589529382384,
					rtt: 58,
					sendBytesCount: 481,
					socketReused: false,
					throughputKbps: 0,
					transportRttEstimate: 6
				},
				header: {
					"Accept-Ranges": "bytes",
					"Content- Length": "147",
					"Content - Type": "application/zip",
					"Date": "Fri, 15 May 2020 07:56:24 GMT",
					"ETag": "W/'47 - 1589420853796'",
					"Last - Modified": "Thu, 14 May 2020 01:47:33 GMT",
				},
				cookie: [],
				statusCode: 200
			};
			for (var quick_res_key in quick_res) {
				var quick_res_value = quick_res[quick_res_key];
				switch (quick_res_key) {
					case "token": // 快应用
						break;
					default:
						// wx_res[quick_res_key] = quick_res_value;
						break;
				}
			}
			if (wx_success) {
				wx_success(wx_res);
			}
			if (wx_complete) {
				wx_complete(wx_res);
			}
		};
		quick_object.fail = function (quick_res) {
			quick_res = {
				errMsg: "downloadFile:fail",
			}
			if (wx_fail) {
				wx_fail(quick_res);
			}
			if (wx_complete) {
				wx_complete(quick_res);
			}
		};
		return request.download(quick_object); // 最后输出快应用的数据对象，但是输出wx的格式
	}
	// ////////////////////////DownloadTask////////////////

	// ////////////////////////////WebSocket/////////////////////////////
	// ////////////////////////connectSocket////////////////
	static connectSocket(wx_object) {
		if (!wx_object) {
			return;
		}
		let wx_url = wx_object.url;
		let wx_header = wx_object.header;
		let wx_protocols = wx_object.protocols;
		let wx_tcpNoDelay = wx_object.tcpNoDelay || false;
		let wx_perMessageDeflate = wx_object.perMessageDeflate || false;
		let wx_timeout = wx_object.timeout;
		let wx_success = wx_object.success;
		let wx_fail = wx_object.fail;
		let wx_complete = wx_object.complete;
		var quick_object = {};
		wx_object = null;
		//////////////////////
		if (wx_url) {
			quick_object.url = wx_url;
		}
		if (wx_header) {
			quick_object.header = wx_header;
		}
		if (wx_protocols) {
			quick_object.protocols = wx_protocols;
		}
		// quick app没有success fail 

		let quick_ws = websocketfactory.create(quick_object);

		let socket = new websocket(quick_ws);  //创建一个websocket实例
		this.socketGlo = socket;

		// let socketArr = [];
		// let socketArrLength = socketArr.length
		// if(socketArrLength > 5){
		// 	console.log("微信小程序最多可以同时存在 5 个 WebSocket 连接")
		// 	return;
		// }
		// socketArr.push(socket);
		// return socketArr[socketArrLength - 1];
		return socket;
	}
	// /////////////////////onSocketOpen////////////////////
	static onSocketOpen(wx_callback) {
		this.socketGlo.onOpen(wx_callback);
	}
	// /////////////////////sendSocketMessage////////////////
	static sendSocketMessage(wx_object) {
		this.socketGlo.send(quick_object)
	}
	// /////////////////////onSocketMessage////////////////
	static onSocketMessage(wx_callback) {
		this.socketGlo.onMessage(wx_callback)
	}
	// /////////////////////onSocketError////////////////
	static onSocketError(wx_callback) {
		this.socketGlo.onError(wx_callback)
	}
	// /////////////////////onSocketClose////////////////
	static onSocketClose(wx_callback) {
		this.socketGlo.onClose(wx_callback)
	}
	// /////////////////////closeSocket////////////////
	static closeSocket(wx_object) {
		this.socketGlo.close(wx_object)
	}
	// ////////////////////////////mDNS////////////////////////////////////
	// ///////////////////stopLocalServiceDiscovery///////////
	static stopLocalServiceDiscovery(wx_object) {
		console.log("暂不支持")
	}
	// ///////////////////startLocalServiceDiscovery///////////
	static startLocalServiceDiscovery(wx_object) {
		console.log("暂不支持")
	}
	// ///////////////////onLocalServiceResolveFail///////////
	static onLocalServiceResolveFail(wx_object) {
		console.log("暂不支持")
	}
	// ///////////////////onLocalServiceLost///////////
	static onLocalServiceLost(wx_object) {
		console.log("暂不支持")
	}
	// ///////////////////onLocalServiceFound///////////
	static onLocalServiceFound(wx_object) {
		console.log("暂不支持")
	}
	// ///////////////////onLocalServiceDiscoveryStop///////////
	static onLocalServiceDiscoveryStop(wx_object) {
		console.log("暂不支持")
	}
	// ///////////////////offLocalServiceResolveFail///////////
	static offLocalServiceResolveFail(wx_object) {
		console.log("暂不支持")
	}
	// ///////////////////offLocalServiceLost///////////
	static offLocalServiceLost(wx_object) {
		console.log("暂不支持")
	}
	// ///////////////////offLocalServiceFound///////////
	static offLocalServiceFound(wx_object) {
		console.log("暂不支持")
	}
	// ///////////////////offLocalServiceDiscoveryStop///////////
	static offLocalServiceDiscoveryStop(wx_object) {
		console.log("暂不支持")
	}
	///////////////////////////UDP 通信协议////////////////////////////////////////
	// ///////////////////createUDPSocket////////////////
	static createUDPSocket(wx_object) {
		console.log("暂不支持")
		let UDPSocket = {
			// ///////////////onListening///////////
			onListening: (wx_object) => {
				console.log("暂不支持")
			},
			// ///////////////bind///////////
			bind: (wx_object) => {
				console.log("暂不支持")
			},
			// ///////////////close///////////
			close: () => {
				console.log("暂不支持")
			},
			// ///////////////offClose///////////
			offClose: (wx_callback) => {
				console.log("暂不支持")
			},
			// ///////////////offError///////////
			offError: (wx_callback) => {
				console.log("暂不支持")
			},
			// ///////////////offListening///////////
			offListening: (wx_callback) => {
				console.log("暂不支持")
			},
			// ///////////////offMessage///////////
			offMessage: (wx_callback) => {
				console.log("暂不支持")
			},
			// ///////////////onClose///////////
			onClose: (wx_callback) => {
				console.log("暂不支持")
			},
			// ///////////////onError///////////
			onError: (wx_callback) => {
				console.log("暂不支持")
			},
			// ///////////////onMessage///////////
			onMessage: (wx_callback) => {
				console.log("暂不支持")
			},
			// ///////////////send///////////
			send: (wx_object) => {
				console.log("暂不支持")
			},
		}
		return UDPSocket;
	}

	///////////////////////////文件/////////////////////////////////////////////
	// 文件中 wx 和 quickapp的 资源路径不一样 ，会保存失败
	// //////////////////////getSavedFileInfo//////////////////////
	static getSavedFileInfo(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "filePath":
						quick_object.uri = wx_object_value;
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "getSavedFileInfo:ok",
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "uri":
							break;
						case "type":
							break;
						case "subFiles":
							break;
						case "length":
							wx_res.size = quick_res_value;
							break;
						case "lastModifiedTime":
							wx_res.createTime = quick_res_value;
							break;
						default:
							// wx_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (wx_object.success) {
					wx_object.success(wx_res);
				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "getSavedFileInfo:fail"
				};
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		return file.get(quick_object)
	}
	// //////////////////////saveFileToDisk//////////////////////
	static saveFileToDisk(wx_object) {
		console.log("暂不支持");
	}
	// //////////////////////saveFile//////////////////////
	static saveFile(wx_object) {
		console.log("暂不支持");
	}
	// //////////////////////dpoveSavedFile//////////////////////
	static dpoveSavedFile(wx_object) {
		var quick_object = {};
		if (wx_object) {
			for (var wx_object_key in wx_object) {
				var wx_object_value = wx_object[wx_object_key];
				switch (wx_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "filePath":
						quick_object.uri = wx_object_value;
						break;
					default:
						quick_object[wx_object_key] = wx_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var wx_res = {
					errMsg: "dpoveSavedFile:ok",
				};
				if (wx_object.success) {
					wx_object.success(wx_res);

				}
				if (wx_object.complete) {
					wx_object.complete(wx_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "dpoveSavedFile:fail"
				};
				if (wx_object.fail) {
					wx_object.fail(quick_res);
				}
				if (wx_object.complete) {
					wx_object.complete(quick_res);
				}
			};
		}
		return file.delete(quick_object)
	}
	// //////////////////////openDocument//////////////////////
	static openDocument(wx_object) {
		console.log("暂不支持");
	}
	// //////////////////////getSavedFileList//////////////////////
	static getSavedFileList(wx_object) {
		console.log("暂不支持");
	}
	// //////////////////////getFileInfo//////////////////////
	static getFileInfo(wx_object) {
		console.log("暂不支持");
	}
	// //////////////////////getFileSystemManager//////////////////
	static getFileSystemManager() {
		var FileSystemManager = {
			access: (wx_object) => {
				var quick_object = {};
				if (wx_object) {
					for (var wx_object_key in wx_object) {
						var wx_object_value = wx_object[wx_object_key];
						switch (wx_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "path":
								quick_object.uri = wx_object_value;
								break;
							default:
								quick_object[wx_object_key] = wx_object_value;
								break;
						}
					};
					var qucikUri = quick_object.uri
					quick_object.success = function (quick_res) {
						var wx_res = {
							errMsg: "access:ok",
						};
						if (wx_object.success) {
							wx_object.success(wx_res);
						}
						if (wx_object.complete) {
							wx_object.complete(wx_res);
						}
					};
					quick_object.fail = function (quick_res) {
						quick_res = {
							errMsg: "access:fail no such file or directory , access " + qucikUri
						};
						if (wx_object.fail) {
							wx_object.fail(quick_res);
						}
						if (wx_object.complete) {
							wx_object.complete(quick_res);
						}
					};
				}
				return file.access(quick_object)
			},
			//  /////////////  1.text 和data 类型不一样  2.fail失败的不一样 ////////////////
			appendFile: (wx_object) => {
				var quick_object = {
					append: true
				};
				if (wx_object) {
					for (var wx_object_key in wx_object) {
						var wx_object_value = wx_object[wx_object_key];
						switch (wx_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "filePath":
								quick_object.uri = wx_object_value;
								break;
							case "data":
								quick_object.text = wx_object_value;
								break;
							default:
								quick_object[wx_object_key] = wx_object_value;
								break;
						}
					};
					var qucikUri = quick_object.uri
					quick_object.success = function (quick_res) {
						var wx_res = {
							errMsg: "appendFile:ok",
						};
						if (wx_object.success) {
							wx_object.success(wx_res);
						}
						if (wx_object.complete) {
							wx_object.complete(wx_res);
						}
					};
					quick_object.fail = function (quick_res) {
						quick_res = {
							errMsg: "appendFile:fail"
						};
						if (wx_object.fail) {
							wx_object.fail(quick_res);
						}
						if (wx_object.complete) {
							wx_object.complete(quick_res);
						}
					};
				}
				return file.writeText(quick_object);
			},
			copyFile: (wx_object) => {
				var quick_object = {
					append: true
				};
				if (wx_object) {
					for (var wx_object_key in wx_object) {
						var wx_object_value = wx_object[wx_object_key];
						switch (wx_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "srcPath":
								quick_object.srcUri = wx_object_value;
								break;
							case "destPath":
								quick_object.dstUri = wx_object_value;
								break;
							default:
								quick_object[wx_object_key] = wx_object_value;
								break;
						}
					};
					var qucikUri = quick_object.uri
					quick_object.success = function (quick_res) {
						var wx_res = {
							errMsg: "copyFile:ok",
						};
						if (wx_object.success) {
							wx_object.success(wx_res);
						}
						if (wx_object.complete) {
							wx_object.complete(wx_res);
						}
					};
					quick_object.fail = function (quick_res) {
						quick_res = {
							errMsg: "appendFile:fail"
						};
						if (wx_object.fail) {
							wx_object.fail(quick_res);
						}
						if (wx_object.complete) {
							wx_object.complete(quick_res);
						}
					};
				}
				return file.copy(quick_object)
			},
			getFileInfo: (wx_object) => {
				console.log("暂不支持")
			},
			getSavedFileList: (wx_object) => {
				console.log("暂不支持")
			},
			mkdir: (wx_object) => {
				var quick_object = {};
				if (wx_object) {
					for (var wx_object_key in wx_object) {
						var wx_object_value = wx_object[wx_object_key];
						switch (wx_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "dirPath":
								quick_object.uri = wx_object_value;
								break;
							default:
								quick_object[wx_object_key] = wx_object_value;
								break;
						}
					};
					var qucikUri = quick_object.uri
					quick_object.success = function (quick_res) {
						var wx_res = {
							errMsg: "mkdir:ok",
						};
						if (wx_object.success) {
							wx_object.success(wx_res);
						}
						if (wx_object.complete) {
							wx_object.complete(wx_res);
						}
					};
					quick_object.fail = function (quick_res) {
						quick_res = {
							errMsg: "mkdir:fail"
						};
						if (wx_object.fail) {
							wx_object.fail(quick_res);
						}
						if (wx_object.complete) {
							wx_object.complete(quick_res);
						}
					};
				}
				return file.mkdir(quick_object)
			},
			readdir: (wx_object) => {
				console.log("暂不支持")
			},
			readFile: (wx_object) => {
				if (wx_object.encoding != "") {
					var quick_object = {};
					if (wx_object) {
						for (var wx_object_key in wx_object) {
							var wx_object_value = wx_object[wx_object_key];
							switch (wx_object_key) {
								case "success": // 快应用
								case "fail":
								case "complete":
									break;
								case "filePath":
									quick_object.uri = wx_object_value;
									break;
								case "position":
									break;
								case "length":
									break;
								default:
									quick_object[wx_object_key] = wx_object_value;
									break;
							}
						};
						quick_object.success = function (quick_res) {
							var wx_res = {
								errMsg: "readFile:ok",
							};
							if (wx_object.success) {
								wx_object.success(wx_res);
							}
							if (wx_object.complete) {
								wx_object.complete(wx_res);
							}
						};
						quick_object.fail = function (quick_res) {
							quick_res = {
								errMsg: "readFile:fail"
							};
							if (wx_object.fail) {
								wx_object.fail(quick_res);
							}
							if (wx_object.complete) {
								wx_object.complete(quick_res);
							}
						};
					}
					return file.readText(quick_object)
				} else {
					var quick_object2 = {};
					if (wx_object) {
						for (var wx_object_key in wx_object) {
							var wx_object_value = wx_object[wx_object_key];
							switch (wx_object_key) {
								case "success": // 快应用
								case "fail":
								case "complete":
									break;
								case "filePath":
									quick_object2.uri = wx_object_value;
									break;
								case "encoding":
									break;
								default:
									quick_object2[wx_object_key] = wx_object_value;
									break;
							}
						};
						quick_object2.success = function (quick_res) {
							var wx_res = {
								errMsg: "readArrayBuffer:ok",
							};
							if (wx_object.success) {
								wx_object.success(wx_res);
							}
							if (wx_object.complete) {
								wx_object.complete(wx_res);
							}
						};
						quick_object2.fail = function (quick_res) {
							quick_res = {
								errMsg: "readArrayBuffer:fail"
							};
							if (wx_object.fail) {
								wx_object.fail(quick_res);
							}
							if (wx_object.complete) {
								wx_object.complete(quick_res);
							}
						};
					}
					return file.readArrayBuffer(quick_object2)
				}
			},
			dpoveSavedFile: (wx_object) => {
				var quick_object = {};
				if (wx_object) {
					for (var wx_object_key in wx_object) {
						var wx_object_value = wx_object[wx_object_key];
						switch (wx_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "filePath":
								quick_object.uri = wx_object_value;
								break;
							default:
								quick_object[wx_object_key] = wx_object_value;
								break;
						}
					};
					quick_object.success = function (quick_res) {
						var wx_res = {
							errMsg: "dpoveSavedFile:ok",
						};
						if (wx_object.success) {
							wx_object.success(wx_res);
						}
						if (wx_object.complete) {
							wx_object.complete(wx_res);
						}
					};
					quick_object.fail = function (quick_res) {
						quick_res = {
							errMsg: "dpoveSavedFile:fail file not exist"
						};
						if (wx_object.fail) {
							wx_object.fail(quick_res);
						}
						if (wx_object.complete) {
							wx_object.complete(quick_res);
						}
					};
				}
				return file.delete(quick_object)
			},
			rename: (wx_object) => {
				var quick_object = {};
				if (wx_object) {
					for (var wx_object_key in wx_object) {
						var wx_object_value = wx_object[wx_object_key];
						switch (wx_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "oldPath":
								quick_object.srcUri = wx_object_value;
								break;
							case "newPath":
								quick_object.dstUri = wx_object_value;
								break;
							default:
								quick_object[wx_object_key] = wx_object_value;
								break;
						}
					};
					quick_object.success = function (quick_res) {
						var wx_res = {
							errMsg: "rename:ok",
						};
						if (wx_object.success) {
							wx_object.success(wx_res);
						}
						if (wx_object.complete) {
							wx_object.complete(wx_res);
						}
					};
					quick_object.fail = function (quick_res) {
						quick_res = {
							errMsg: "rename:fail"
						};
						if (wx_object.fail) {
							wx_object.fail(quick_res);
						}
						if (wx_object.complete) {
							wx_object.complete(quick_res);
						}
					};
				}
				return file.move(quick_object)
			},
			rmdir: (wx_object) => {
				var quick_object = {};
				if (wx_object) {
					for (var wx_object_key in wx_object) {
						var wx_object_value = wx_object[wx_object_key];
						switch (wx_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "dirPath":
								quick_object.uri = wx_object_value;
								break;
							default:
								quick_object[wx_object_key] = wx_object_value;
								break;
						}
					};
					quick_object.success = function (quick_res) {
						var wx_res = {
							errMsg: "rmdir:ok",
						};
						if (wx_object.success) {
							wx_object.success(wx_res);
						}
						if (wx_object.complete) {
							wx_object.complete(wx_res);
						}
					};
					quick_object.fail = function (quick_res) {
						quick_res = {
							errMsg: "rmdir:fail"
						};
						if (wx_object.fail) {
							wx_object.fail(quick_res);
						}
						if (wx_object.complete) {
							wx_object.complete(quick_res);
						}
					};
				}
				return file.rmdir(quick_object)
			},
			saveFile: (wx_object) => {
				console.log("暂不支持")
			},
			stat: (wx_object) => {
				console.log("暂不支持")
			},
			unlink: (wx_object) => {
				var quick_object = {};
				if (wx_object) {
					for (var wx_object_key in wx_object) {
						var wx_object_value = wx_object[wx_object_key];
						switch (wx_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "filePath":
								quick_object.uri = wx_object_value;
								break;
							default:
								quick_object[wx_object_key] = wx_object_value;
								break;
						}
					};
					quick_object.success = function (quick_res) {
						var wx_res = {
							errMsg: "unlink:ok",
						};
						if (wx_object.success) {
							wx_object.success(wx_res);
						}
						if (wx_object.complete) {
							wx_object.complete(wx_res);
						}
					};
					quick_object.fail = function (quick_res) {
						quick_res = {
							errMsg: "unlink:fail"
						};
						if (wx_object.fail) {
							wx_object.fail(quick_res);
						}
						if (wx_object.complete) {
							wx_object.complete(quick_res);
						}
					};
				}
				return file.delete(quick_object)
			},
			unzip: (wx_object) => {
				var quick_object = {};
				if (wx_object) {
					for (var wx_object_key in wx_object) {
						var wx_object_value = wx_object[wx_object_key];
						switch (wx_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "zipFilePath":
								quick_object.srcUri = wx_object_value;
								break;
							case "targetPath":
								quick_object.dstUri = wx_object_value;
								break;
							default:
								quick_object[wx_object_key] = wx_object_value;
								break;
						}
					};
					quick_object.success = function (quick_res) {
						var wx_res = {
							errMsg: "unzip:ok",
						};
						if (wx_object.success) {
							wx_object.success(wx_res);
						}
						if (wx_object.complete) {
							wx_object.complete(wx_res);
						}
					};
					quick_object.fail = function (quick_res) {
						quick_res = {
							errMsg: "unzip:fail"
						};
						if (wx_object.fail) {
							wx_object.fail(quick_res);
						}
						if (wx_object.complete) {
							wx_object.complete(quick_res);
						}
					};
				}
				return zip.decompress(quick_object)
			},
			writeFile: (wx_object) => {
				if (typeof (wx_object.data) == "string") {
					var quick_object = {};
					if (wx_object) {
						for (var wx_object_key in wx_object) {
							var wx_object_value = wx_object[wx_object_key];
							switch (wx_object_key) {
								case "success": // 快应用
								case "fail":
								case "complete":
									break;
								case "filePath":
									quick_object.uri = wx_object_value;
									break;
								case "data":
									quick_object.text = wx_object_value;
									break;
								default:
									quick_object[wx_object_key] = wx_object_value;
									break;
							}
						};
						quick_object.success = function (quick_res) {
							var wx_res = {
								errMsg: "writeFile:ok",
							};
							if (wx_object.success) {
								wx_object.success(wx_res);
							}
							if (wx_object.complete) {
								wx_object.complete(wx_res);
							}
						};
						quick_object.fail = function (quick_res) {
							quick_res = {
								errMsg: "writeFile:fail"
							};
							if (wx_object.fail) {
								wx_object.fail(quick_res);
							}
							if (wx_object.complete) {
								wx_object.complete(quick_res);
							}
						};
					}
					return file.writeText(quick_object)
				} else {
					var quick_object2 = {};
					if (wx_object) {
						for (var wx_object_key in wx_object) {
							var wx_object_value = wx_object[wx_object_key];
							switch (wx_object_key) {
								case "success": // 快应用
								case "fail":
								case "complete":
									break;
								case "data":
									quick_object2.buffer = wx_object_value;
									break;
								case "encoding":
									break;
								default:
									quick_object2[wx_object_key] = wx_object_value;
									break;
							}
						};
						quick_object2.success = function (quick_res) {
							var wx_res = {
								errMsg: "writeFile:ok",
							};
							if (wx_object.success) {
								wx_object.success(wx_res);
							}
							if (wx_object.complete) {
								wx_object.complete(wx_res);
							}
						};
						quick_object2.fail = function (quick_res) {
							quick_res = {
								errMsg: "writeFile:fail"
							};
							if (wx_object.fail) {
								wx_object.fail(quick_res);
							}
							if (wx_object.complete) {
								wx_object.complete(quick_res);
							}
						};
					}
					return file.writeArrayBuffer(quick_object2)
				}
			}
		}
		return FileSystemManager;
	}
}
