// 测试数据
const rawSource = {
	"cells": [
    {
		"shape": "edge",
		"attrs": {
			"stroke": {
				"fill": "none",
				"connection": true,
				"strokeWidth": 4,
				"strokeLinecap": "round",
				"stroke": "#666"
			}
		},
		"id": "ef18ff1f-abee-418f-b1a2-0400bdad64cb",
		"markup": [{
			"tagName": "path",
			"selector": "stroke"
		}],
		"connector": {
			"name": "rounded"
		},
		"zIndex": 0,
		"source": {
			"cell": "1",
			"port": "1"
		},
		"target": {
			"cell": "2",
			"port": "1"
		},
		"tools": {
			"items": [],
			"name": null
		},
		"vertices": [{
			"x": -180,
			"y": -460
		}, {
			"x": -420,
			"y": -340
		}]
	}, 
    {
		"position": {
			"x": -280,
			"y": -296
		},
		"size": {
			"width": 64,
			"height": 64
		},
		"attrs": {
			"text": {
				"text": "矩形"
			}
		},
		"visible": true,
		"shape": "rect",
		"id": "2",
		"zIndex": 1,
		"ports": {
			"groups": {
				"top": {
					"position": "top",
					"attrs": {
						"circle": {
							"width": 12,
							"r": 6,
							"magnet": true,
							"stroke": "#008CFF",
							"strokeWidth": 2,
							"fill": "#fff",
							"zIndex": 1
						}
					}
				},
				"right": {
					"position": "right",
					"attrs": {
						"circle": {
							"width": 12,
							"r": 6,
							"magnet": true,
							"stroke": "#008CFF",
							"strokeWidth": 2,
							"fill": "#fff",
							"zIndex": 1
						}
					}
				},
				"bottom": {
					"position": "bottom",
					"attrs": {
						"circle": {
							"width": 12,
							"r": 6,
							"magnet": true,
							"stroke": "#008CFF",
							"strokeWidth": 2,
							"fill": "#fff",
							"zIndex": 1
						}
					}
				},
				"left": {
					"position": "left",
					"attrs": {
						"circle": {
							"width": 12,
							"r": 6,
							"magnet": true,
							"stroke": "#008CFF",
							"strokeWidth": 2,
							"fill": "#fff",
							"zIndex": 1
						}
					}
				},
				"absolute": {
					"position": "absolute",
					"attrs": {
						"circle": {
							"r": 6,
							"magnet": true,
							"stroke": "#008CFF",
							"strokeWidth": 2,
							"fill": "#fff"
						}
					}
				}
			},
			"items": [{
				"group": "top",
				"id": "1"
			}, {
				"group": "right",
				"id": "fe3982ca-3e17-44d2-bd91-16f12e940843"
			}, {
				"group": "bottom",
				"id": "f86a7d8d-a508-4c0b-bb8a-984037704d41"
			}, {
				"group": "left",
				"id": "ddd383d3-a4ea-4c12-98f5-8de6cc2afd9f"
			}]
		}
	}, 
    {
		"position": {
			"x": -89,
			"y": -402
		},
		"size": {
			"width": 64,
			"height": 64
		},
		"attrs": {
			"text": {
				"text": "Cloud"
			},
			"settingImage": {
				"xlink:href": "x6/icon-flow-cloud.svg"
			},
			"settingName": {
				"text": "Cloud"
			}
		},
		"visible": true,
		"shape": "setting-shape",
		"ports": {
			"groups": {
				"top": {
					"position": "top",
					"attrs": {
						"circle": {
							"width": 12,
							"r": 6,
							"magnet": true,
							"stroke": "#008CFF",
							"strokeWidth": 2,
							"fill": "#fff",
							"zIndex": 1
						}
					}
				},
				"right": {
					"position": "right",
					"attrs": {
						"circle": {
							"width": 12,
							"r": 6,
							"magnet": true,
							"stroke": "#008CFF",
							"strokeWidth": 2,
							"fill": "#fff",
							"zIndex": 1
						}
					}
				},
				"bottom": {
					"position": "bottom",
					"attrs": {
						"circle": {
							"width": 12,
							"r": 6,
							"magnet": true,
							"stroke": "#008CFF",
							"strokeWidth": 2,
							"fill": "#fff",
							"zIndex": 1
						}
					}
				},
				"left": {
					"position": "left",
					"attrs": {
						"circle": {
							"width": 12,
							"r": 6,
							"magnet": true,
							"stroke": "#008CFF",
							"strokeWidth": 2,
							"fill": "#fff",
							"zIndex": 1
						}
					}
				},
				"absolute": {
					"position": "absolute",
					"attrs": {
						"circle": {
							"r": 6,
							"magnet": true,
							"stroke": "#008CFF",
							"strokeWidth": 2,
							"fill": "#fff"
						}
					}
				}
			},
			"items": [{
				"group": "top",
				"id": "276ca768-b3ff-4869-bf46-e94d3db5dad4"
			}, {
				"group": "right",
				"id": "1f063ba0-796f-4a9e-b56c-7d25b13e8a3f"
			}, {
				"group": "bottom",
				"id": "40cc081d-0293-4265-adb2-ce2d6bfd9b59"
			}, {
				"group": "left",
				"id": "1"
			}]
		},
		"id": "1",
		"data": {
			"shape": "setting-shape",
			"id": "Cloud"
		},
		"zIndex": 9
	}]
}
export default rawSource
