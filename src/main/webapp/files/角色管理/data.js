﻿$axure.loadCurrentPage({
  "url":"角色管理.html",
  "generationDate":new Date(1384938521641.95),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable"],
  "page":{
    "packageId":"e7dcbfe992214a86a354f79fbb654be1",
    "type":"Axure:Page",
    "name":"角色管理",
    "notes":{
},
    "style":{
      "baseStyle":"627587b6038d43cca051c114ac41ad32",
      "pageAlignment":"near",
      "fill":{
        "fillType":"solid",
        "color":0xFFFFFFFF},
      "image":null,
      "imageHorizontalAlignment":"near",
      "imageVerticalAlignment":"near",
      "imageRepeat":"",
      "favicon":null,
      "sketchFactor":"0",
      "colorStyle":"appliedColor",
      "fontName":"应用字体",
      "borderWidth":"0"},
    "adaptiveStyles":{
},
    "interactionMap":{
},
    "diagram":{
      "objects":[{
          "id":"741bb99f736e4b6ab1a2e5e9fa3b85dd",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":47,
              "y":31},
            "size":{
              "width":995,
              "height":623}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"0ffac2bceb1642c894c8d556285b4bcc",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":47,
                  "y":31},
                "size":{
                  "width":995,
                  "height":623}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/角色管理/u0.png"}},
{
          "id":"c62b0efc470246b0aca6ac3d4f7e0530",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":63,
              "y":273},
            "size":{
              "width":117,
              "height":36}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"fdd551e829bd477d87fb41c84f69db36",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":63,
                  "y":273},
                "size":{
                  "width":117,
                  "height":36}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"fadeWidget",
                      "description":"显示 新增角色 淡入淡出 500 ms,<br>(图片),<br>(文本框(单行)),<br>(下拉列表框),<br>(图片)",
                      "objectsToFades":[{
                          "objectPath":["d881061e586e4070bcb43701cd66f3fb"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "easing":"fade",
                              "duration":500,
                              "showType":"none"}}},
{
                          "objectPath":["8952268437694d6eb89cd438a3bdf8af"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["46d25232de6d4d60a0475159233eb35b"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["380fb0a6e91344448d6d4f20077722ea"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["92db461540244dffb73b59780decfd31"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "showType":"none"}}}]}]}]}},
          "tabbable":true,
          "annotation":{
            "描述":"点击新增，弹出新增窗口，输入信息后点击保存，窗口关闭，列表页面自动增加新增的数据"},
          "images":{
            "normal~":"images/角色管理/u2.png"}},
{
          "id":"d881061e586e4070bcb43701cd66f3fb",
          "label":"新增角色",
          "type":"dynamicPanel",
          "styleType":"dynamicPanel",
          "visible":false,
          "style":{
            "location":{
              "x":351,
              "y":249},
            "size":{
              "width":310,
              "height":140},
            "visible":false},
          "adaptiveStyles":{
},
          "scrollbars":"none",
          "fitToContent":false,
          "propagate":false,
          "diagrams":[{
              "id":"a997cec334c94a20ad09b5b18a4914de",
              "label":"State1",
              "type":"Axure:PanelDiagram",
              "objects":[{
                  "id":"8952268437694d6eb89cd438a3bdf8af",
                  "label":"",
                  "parentDynamicPanel":"d881061e586e4070bcb43701cd66f3fb",
                  "type":"imageBox",
                  "styleType":"imageBox",
                  "visible":true,
                  "style":{
                    "size":{
                      "width":308,
                      "height":136}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"2afe7c02d31748a096f7c0dca1e8978c",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"d881061e586e4070bcb43701cd66f3fb",
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "size":{
                          "width":308,
                          "height":136}},
                      "adaptiveStyles":{
}}],
                  "images":{
                    "normal~":"images/角色管理/u5.png"}},
{
                  "id":"46d25232de6d4d60a0475159233eb35b",
                  "label":"",
                  "parentDynamicPanel":"d881061e586e4070bcb43701cd66f3fb",
                  "type":"textBox",
                  "styleType":"textBox",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":87,
                      "y":56},
                    "size":{
                      "width":133,
                      "height":21}},
                  "adaptiveStyles":{
}},
{
                  "id":"380fb0a6e91344448d6d4f20077722ea",
                  "label":"",
                  "parentDynamicPanel":"d881061e586e4070bcb43701cd66f3fb",
                  "type":"comboBox",
                  "styleType":"comboBox",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":90,
                      "y":87},
                    "size":{
                      "width":70,
                      "height":20}},
                  "adaptiveStyles":{
}},
{
                  "id":"92db461540244dffb73b59780decfd31",
                  "label":"",
                  "parentDynamicPanel":"d881061e586e4070bcb43701cd66f3fb",
                  "type":"imageBox",
                  "styleType":"imageBox",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":170,
                      "y":82},
                    "size":{
                      "width":117,
                      "height":27}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"6f1f4fd9b2574de1b40bed360e947b61",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"d881061e586e4070bcb43701cd66f3fb",
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "location":{
                          "x":170,
                          "y":82},
                        "size":{
                          "width":117,
                          "height":27}},
                      "adaptiveStyles":{
}}],
                  "interactionMap":{
                    "onClick":{
                      "description":"OnClick",
                      "cases":[{
                          "description":"用例 1",
                          "isNewIfGroup":false,
                          "actions":[{
                              "action":"fadeWidget",
                              "description":"隐藏 新增角色,<br>(图片),<br>(文本框(单行)),<br>(下拉列表框),<br>(图片)",
                              "objectsToFades":[{
                                  "objectPath":["d881061e586e4070bcb43701cd66f3fb"],
                                  "fadeInfo":{
                                    "fadeType":"hide",
                                    "options":{
                                      "showType":"none"}}},
{
                                  "objectPath":["8952268437694d6eb89cd438a3bdf8af"],
                                  "fadeInfo":{
                                    "fadeType":"hide",
                                    "options":{
                                      "showType":"none"}}},
{
                                  "objectPath":["46d25232de6d4d60a0475159233eb35b"],
                                  "fadeInfo":{
                                    "fadeType":"hide",
                                    "options":{
                                      "showType":"none"}}},
{
                                  "objectPath":["380fb0a6e91344448d6d4f20077722ea"],
                                  "fadeInfo":{
                                    "fadeType":"hide",
                                    "options":{
                                      "showType":"none"}}},
{
                                  "objectPath":["92db461540244dffb73b59780decfd31"],
                                  "fadeInfo":{
                                    "fadeType":"hide",
                                    "options":{
                                      "showType":"none"}}}]}]}]}},
                  "tabbable":true,
                  "images":{
                    "normal~":"images/角色管理/u9.png"}}]}]},
{
          "id":"f2a812000c8542dd8342a412830d6823",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":890,
              "y":350},
            "size":{
              "width":70,
              "height":20}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"0f307368586b47e0bdc195f00a7d8a73",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":890,
                  "y":350},
                "size":{
                  "width":70,
                  "height":20}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/角色管理/u11.png"}},
{
          "id":"5c23909911f6451892e002f8c582506f",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "fontSize":"12px",
            "location":{
              "x":892,
              "y":354},
            "size":{
              "width":35,
              "height":15},
            "rotation":"0",
            "textRotation":"0"},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"4aef0497e5f34473bf489da4c996a073",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontSize":"12px",
                "location":{
                  "x":892,
                  "y":354},
                "size":{
                  "width":35,
                  "height":15},
                "rotation":"0",
                "textRotation":"0"},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"fadeWidget",
                      "description":"显示 修改角色 淡入淡出 500 ms,<br>(图片),<br>(文本框(单行)),<br>(下拉列表框),<br>(图片)",
                      "objectsToFades":[{
                          "objectPath":["61f1ef2f7df441cd8da24860d9a3ce3e"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "easing":"fade",
                              "duration":500,
                              "showType":"none"}}},
{
                          "objectPath":["601f6373035a4e5b993fdd79d37377f5"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["57cd29fe1eab49de9b0b3d41f9c53e27"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["82e0fd5d439f4409bc6c4156bdc1eab5"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["a2797dee247048a2a83009040673473c"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "showType":"none"}}}]}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"318d0f8b53154a72b6fad54502e87a05",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "fontSize":"12px",
            "location":{
              "x":926,
              "y":354},
            "size":{
              "width":35,
              "height":15},
            "rotation":"0",
            "textRotation":"0"},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"b9c49f99476943a682c5bfaa85801ae8",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontSize":"12px",
                "location":{
                  "x":926,
                  "y":354},
                "size":{
                  "width":35,
                  "height":15},
                "rotation":"0",
                "textRotation":"0"},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"fadeWidget",
                      "description":"显示 删除角色,<br>(图片)",
                      "objectsToFades":[{
                          "objectPath":["6b78421dfdc84a96bc6c21c2539df930"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["90f5352673814cbc8fd5c56f1b936f2a"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "showType":"none"}}}]}]}]}},
          "tabbable":true,
          "annotation":{
            "描述":"点击删除，弹出是否确认删除对话框，确认之后，若成功，提示删除成功，列表中自动去除该行，若失败，提示删除失败及失败原因。"},
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"61f1ef2f7df441cd8da24860d9a3ce3e",
          "label":"修改角色",
          "type":"dynamicPanel",
          "styleType":"dynamicPanel",
          "visible":false,
          "style":{
            "location":{
              "x":351,
              "y":249},
            "size":{
              "width":310,
              "height":140},
            "visible":false},
          "adaptiveStyles":{
},
          "scrollbars":"none",
          "fitToContent":false,
          "propagate":false,
          "diagrams":[{
              "id":"ce1cdd56c76e4f479ad48f8ffbf83cd1",
              "label":"State1",
              "type":"Axure:PanelDiagram",
              "objects":[{
                  "id":"601f6373035a4e5b993fdd79d37377f5",
                  "label":"",
                  "parentDynamicPanel":"61f1ef2f7df441cd8da24860d9a3ce3e",
                  "type":"imageBox",
                  "styleType":"imageBox",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":1,
                      "y":1},
                    "size":{
                      "width":308,
                      "height":136}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"5efa4e7e960a4241bcf84f3588169244",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"61f1ef2f7df441cd8da24860d9a3ce3e",
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "location":{
                          "x":1,
                          "y":1},
                        "size":{
                          "width":308,
                          "height":136}},
                      "adaptiveStyles":{
}}],
                  "images":{
                    "normal~":"images/角色管理/u18.png"}},
{
                  "id":"57cd29fe1eab49de9b0b3d41f9c53e27",
                  "label":"",
                  "parentDynamicPanel":"61f1ef2f7df441cd8da24860d9a3ce3e",
                  "type":"textBox",
                  "styleType":"textBox",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":88,
                      "y":57},
                    "size":{
                      "width":132,
                      "height":21}},
                  "adaptiveStyles":{
}},
{
                  "id":"82e0fd5d439f4409bc6c4156bdc1eab5",
                  "label":"",
                  "parentDynamicPanel":"61f1ef2f7df441cd8da24860d9a3ce3e",
                  "type":"comboBox",
                  "styleType":"comboBox",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":89,
                      "y":89},
                    "size":{
                      "width":70,
                      "height":20}},
                  "adaptiveStyles":{
}},
{
                  "id":"a2797dee247048a2a83009040673473c",
                  "label":"",
                  "parentDynamicPanel":"61f1ef2f7df441cd8da24860d9a3ce3e",
                  "type":"imageBox",
                  "styleType":"imageBox",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":168,
                      "y":84},
                    "size":{
                      "width":119,
                      "height":26}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"a8835c59f6254b7b9fbfb62fa0f064b0",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"61f1ef2f7df441cd8da24860d9a3ce3e",
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "location":{
                          "x":168,
                          "y":84},
                        "size":{
                          "width":119,
                          "height":26}},
                      "adaptiveStyles":{
}}],
                  "interactionMap":{
                    "onClick":{
                      "description":"OnClick",
                      "cases":[{
                          "description":"用例 1",
                          "isNewIfGroup":false,
                          "actions":[{
                              "action":"fadeWidget",
                              "description":"隐藏 修改角色,<br>(图片),<br>(文本框(单行)),<br>(下拉列表框),<br>(图片)",
                              "objectsToFades":[{
                                  "objectPath":["61f1ef2f7df441cd8da24860d9a3ce3e"],
                                  "fadeInfo":{
                                    "fadeType":"hide",
                                    "options":{
                                      "showType":"none"}}},
{
                                  "objectPath":["601f6373035a4e5b993fdd79d37377f5"],
                                  "fadeInfo":{
                                    "fadeType":"hide",
                                    "options":{
                                      "showType":"none"}}},
{
                                  "objectPath":["57cd29fe1eab49de9b0b3d41f9c53e27"],
                                  "fadeInfo":{
                                    "fadeType":"hide",
                                    "options":{
                                      "showType":"none"}}},
{
                                  "objectPath":["82e0fd5d439f4409bc6c4156bdc1eab5"],
                                  "fadeInfo":{
                                    "fadeType":"hide",
                                    "options":{
                                      "showType":"none"}}},
{
                                  "objectPath":["a2797dee247048a2a83009040673473c"],
                                  "fadeInfo":{
                                    "fadeType":"hide",
                                    "options":{
                                      "showType":"none"}}}]}]}]}},
                  "tabbable":true,
                  "images":{
                    "normal~":"images/角色管理/u22.png"}}]}]},
{
          "id":"6b78421dfdc84a96bc6c21c2539df930",
          "label":"删除角色",
          "type":"dynamicPanel",
          "styleType":"dynamicPanel",
          "visible":false,
          "style":{
            "location":{
              "x":357,
              "y":310},
            "size":{
              "width":273,
              "height":150},
            "visible":false},
          "adaptiveStyles":{
},
          "scrollbars":"none",
          "fitToContent":false,
          "propagate":false,
          "diagrams":[{
              "id":"55d6e5527e954d1db7c2ce5af45a2d6d",
              "label":"State1",
              "type":"Axure:PanelDiagram",
              "objects":[{
                  "id":"9b337df7b1354e76add6f3245bb42620",
                  "label":"",
                  "parentDynamicPanel":"6b78421dfdc84a96bc6c21c2539df930",
                  "type":"imageBox",
                  "styleType":"imageBox",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":0,
                      "y":2},
                    "size":{
                      "width":274,
                      "height":147}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"e32f1c5da7044538963b744b903a626b",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"6b78421dfdc84a96bc6c21c2539df930",
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "location":{
                          "x":0,
                          "y":2},
                        "size":{
                          "width":274,
                          "height":147}},
                      "adaptiveStyles":{
}}],
                  "images":{
                    "normal~":"images/角色管理/u25.png"}},
{
                  "id":"90f5352673814cbc8fd5c56f1b936f2a",
                  "label":"",
                  "parentDynamicPanel":"6b78421dfdc84a96bc6c21c2539df930",
                  "type":"imageBox",
                  "styleType":"imageBox",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":83,
                      "y":102},
                    "size":{
                      "width":166,
                      "height":28}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"df137926169048eeaef2c0061e091661",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"6b78421dfdc84a96bc6c21c2539df930",
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "location":{
                          "x":83,
                          "y":102},
                        "size":{
                          "width":166,
                          "height":28}},
                      "adaptiveStyles":{
}}],
                  "interactionMap":{
                    "onClick":{
                      "description":"OnClick",
                      "cases":[{
                          "description":"用例 1",
                          "isNewIfGroup":false,
                          "actions":[{
                              "action":"fadeWidget",
                              "description":"隐藏 删除角色,<br>(图片)",
                              "objectsToFades":[{
                                  "objectPath":["6b78421dfdc84a96bc6c21c2539df930"],
                                  "fadeInfo":{
                                    "fadeType":"hide",
                                    "options":{
                                      "showType":"none"}}},
{
                                  "objectPath":["90f5352673814cbc8fd5c56f1b936f2a"],
                                  "fadeInfo":{
                                    "fadeType":"hide",
                                    "options":{
                                      "showType":"none"}}}]}]}]}},
                  "tabbable":true,
                  "images":{
                    "normal~":"images/角色管理/u27.png"}}]}]},
{
          "id":"e358142fa4974c40acbd2b02aa6e8a84",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "foreGroundFill":{
              "fillType":"solid",
              "color":0xFFFF0000,
              "opacity":1},
            "location":{
              "x":830,
              "y":260},
            "size":{
              "width":200,
              "height":49}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"341e846d1135442f9f19da0835e34661",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "foreGroundFill":{
                  "fillType":"solid",
                  "color":0xFFFF0000,
                  "opacity":1},
                "location":{
                  "x":830,
                  "y":260},
                "size":{
                  "width":200,
                  "height":49}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/角色管理/u29.png"}},
{
          "id":"ebcb107be60e411ca9b7a19607a92a47",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":297,
              "y":172},
            "size":{
              "width":57,
              "height":21}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"7e402357be9a4c519b0bd9f49196f26e",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":297,
                  "y":172},
                "size":{
                  "width":57,
                  "height":21}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 财务管理",
                      "target":{
                        "targetType":"page",
                        "url":"财务管理.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"images/财务管理/u11.png"}},
{
          "id":"95523c18103446fd9eda524c2266a5c1",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":375,
              "y":175},
            "size":{
              "width":64,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"695843c3af22497aa79b4f822a53f715",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":375,
                  "y":175},
                "size":{
                  "width":64,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 角色管理",
                      "target":{
                        "targetType":"page",
                        "url":"角色管理.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"images/财务管理/u13.png"}},
{
          "id":"fdbf02a252444e78aa19707159be260e",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":459,
              "y":174},
            "size":{
              "width":83,
              "height":18}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"f3732058f7724156ad94a73a19c98e6e",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":459,
                  "y":174},
                "size":{
                  "width":83,
                  "height":18}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 角色权限配置",
                      "target":{
                        "targetType":"page",
                        "url":"角色权限配置.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"images/财务管理/u15.png"}},
{
          "id":"6fbfe8df5fc34769992223a15cfea52c",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":564,
              "y":172},
            "size":{
              "width":58,
              "height":21}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"cc83e0040a0e4ecc8768850bd8bdcf47",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":564,
                  "y":172},
                "size":{
                  "width":58,
                  "height":21}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 用户管理",
                      "target":{
                        "targetType":"page",
                        "url":"用户管理.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"images/财务管理/u17.png"}},
{
          "id":"23d350236aae4fb4a7bd0e768a687f55",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":646,
              "y":173},
            "size":{
              "width":70,
              "height":18}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"3471301d06c3476797d6a0ea734acdb5",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":646,
                  "y":173},
                "size":{
                  "width":70,
                  "height":18}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 关键词审核",
                      "target":{
                        "targetType":"page",
                        "url":"关键词审核.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"images/财务管理/u19.png"}}]}},
  "masters":{
},
  "objectPaths":{
    "741bb99f736e4b6ab1a2e5e9fa3b85dd":{
      "scriptId":"u0"},
    "0ffac2bceb1642c894c8d556285b4bcc":{
      "scriptId":"u1"},
    "c62b0efc470246b0aca6ac3d4f7e0530":{
      "scriptId":"u2"},
    "fdd551e829bd477d87fb41c84f69db36":{
      "scriptId":"u3"},
    "d881061e586e4070bcb43701cd66f3fb":{
      "scriptId":"u4"},
    "8952268437694d6eb89cd438a3bdf8af":{
      "scriptId":"u5"},
    "2afe7c02d31748a096f7c0dca1e8978c":{
      "scriptId":"u6"},
    "46d25232de6d4d60a0475159233eb35b":{
      "scriptId":"u7"},
    "380fb0a6e91344448d6d4f20077722ea":{
      "scriptId":"u8"},
    "92db461540244dffb73b59780decfd31":{
      "scriptId":"u9"},
    "6f1f4fd9b2574de1b40bed360e947b61":{
      "scriptId":"u10"},
    "f2a812000c8542dd8342a412830d6823":{
      "scriptId":"u11"},
    "0f307368586b47e0bdc195f00a7d8a73":{
      "scriptId":"u12"},
    "5c23909911f6451892e002f8c582506f":{
      "scriptId":"u13"},
    "4aef0497e5f34473bf489da4c996a073":{
      "scriptId":"u14"},
    "318d0f8b53154a72b6fad54502e87a05":{
      "scriptId":"u15"},
    "b9c49f99476943a682c5bfaa85801ae8":{
      "scriptId":"u16"},
    "61f1ef2f7df441cd8da24860d9a3ce3e":{
      "scriptId":"u17"},
    "601f6373035a4e5b993fdd79d37377f5":{
      "scriptId":"u18"},
    "5efa4e7e960a4241bcf84f3588169244":{
      "scriptId":"u19"},
    "57cd29fe1eab49de9b0b3d41f9c53e27":{
      "scriptId":"u20"},
    "82e0fd5d439f4409bc6c4156bdc1eab5":{
      "scriptId":"u21"},
    "a2797dee247048a2a83009040673473c":{
      "scriptId":"u22"},
    "a8835c59f6254b7b9fbfb62fa0f064b0":{
      "scriptId":"u23"},
    "6b78421dfdc84a96bc6c21c2539df930":{
      "scriptId":"u24"},
    "9b337df7b1354e76add6f3245bb42620":{
      "scriptId":"u25"},
    "e32f1c5da7044538963b744b903a626b":{
      "scriptId":"u26"},
    "90f5352673814cbc8fd5c56f1b936f2a":{
      "scriptId":"u27"},
    "df137926169048eeaef2c0061e091661":{
      "scriptId":"u28"},
    "e358142fa4974c40acbd2b02aa6e8a84":{
      "scriptId":"u29"},
    "341e846d1135442f9f19da0835e34661":{
      "scriptId":"u30"},
    "ebcb107be60e411ca9b7a19607a92a47":{
      "scriptId":"u31"},
    "7e402357be9a4c519b0bd9f49196f26e":{
      "scriptId":"u32"},
    "95523c18103446fd9eda524c2266a5c1":{
      "scriptId":"u33"},
    "695843c3af22497aa79b4f822a53f715":{
      "scriptId":"u34"},
    "fdbf02a252444e78aa19707159be260e":{
      "scriptId":"u35"},
    "f3732058f7724156ad94a73a19c98e6e":{
      "scriptId":"u36"},
    "6fbfe8df5fc34769992223a15cfea52c":{
      "scriptId":"u37"},
    "cc83e0040a0e4ecc8768850bd8bdcf47":{
      "scriptId":"u38"},
    "23d350236aae4fb4a7bd0e768a687f55":{
      "scriptId":"u39"},
    "3471301d06c3476797d6a0ea734acdb5":{
      "scriptId":"u40"}}});