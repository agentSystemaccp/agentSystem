﻿<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
    <title>Untitled Document</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link type="text/css" href="../../../../../代理商管理系统_原型/原型/代理商系统原型HTML/resources/css/reset.css" rel="Stylesheet" />
    <link type="text/css" href="../../../../../代理商管理系统_原型/原型/代理商系统原型HTML/resources/css/default.css" rel="Stylesheet" />

    <script type="text/javascript">
        if (location.href.toString().indexOf('file://localhost/') == 0) {
            location.href = location.href.toString().replace('file://localhost/', 'file:///');
        }
    </script>

    <script type="text/javascript" src="../../../../../代理商管理系统_原型/原型/代理商系统原型HTML/resources/scripts/jquery-1.7.1.min.js"></script>
    <script type="text/javascript" src="../../../../../代理商管理系统_原型/原型/代理商系统原型HTML/resources/scripts/player/splitter.js"></script>
    <script type="text/javascript" src="../../../../../代理商管理系统_原型/原型/代理商系统原型HTML/resources/scripts/axutils.js"></script>
    <script type="text/javascript" src="../../../../../代理商管理系统_原型/原型/代理商系统原型HTML/resources/scripts/player/axprototype.js"></script>
    <script type="text/javascript" src="../../../../../代理商管理系统_原型/原型/代理商系统原型HTML/resources/scripts/messagecenter.js"></script>
    <script type="text/javascript" src="../../../../../代理商管理系统_原型/原型/代理商系统原型HTML/data/document.js"></script>
    <style type="text/css">

#outerContainer {
	width:1000px;
	height:20000px;
}

.vsplitbar {
	width: 3px;
	background: #B9B9B9;
}

#rightPanel {
    background-color: White;
}

#leftPanel {
    /*min-width: 190px;*/
}

.splitterMask {
   position:absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   overflow: hidden;
   background-image: url(../../../../../代理商管理系统_原型/原型/代理商系统原型HTML/resources/images/transparent.gif);
   z-index: 20000;
}


    </style>
    <script type="text/javascript" language="JavaScript"><!--
        // isolate scope
        (function() {
            setUpController();

            var configuration = $axure.document.configuration;
            var _settings = {};
            _settings.projectId = configuration.prototypeId;
            _settings.isAxshare = configuration.isAxshare;
            _settings.loadFeedbackPlugin = configuration.loadFeedbackPlugin;
            _settings.startCollapsed = HashString("c") == "1";

            $axure.player.settings = _settings;

            $(window).bind('load', function() {
                if(CHROME_5_LOCAL && !$('body').attr('pluginDetected')) {
                    window.location = '../../../../../代理商管理系统_原型/原型/代理商系统原型HTML/resources/chrome/chrome.html';
                }
            });

            $(document).ready(function() {
                $axure.page.bind('load.start', mainFrame_onload);
                $axure.messageCenter.addMessageListener(messageCenter_message);

                if($axure.player.settings.loadFeedbackPlugin) {
                    if($axure.player.settings.isAxshare) {
                        $axure.utils.loadJS('/Scripts/plugins/feedback/feedback.js');
                    } else {
                        $axure.utils.loadJS('http://share.axure.com/Scripts/plugins/feedback/feedback.js');
                    }
                }

                if(navigator.userAgent.indexOf("MSIE") >= 0) $('#outerContainer').width('100%');
                initialize();
                if($axure.player.settings.startCollapsed) $('#outerContainer').splitter({ sizeLeft: 0 });
                else $('#outerContainer').splitter({ sizeLeft: 250 });
                $('#leftPanel').width(250);

                $(window).resize(function() { resizeContent(); });

                $('#maximizePanelContainer').hide();

                initializeLogo();

                $(window).resize();
                resizeContent();
                //wait for ie to get to a good state and resize
                if($.browser.msie && $.browser.version == "6.0") setTimeout(function() { $('#outerContainer').trigger('resize'); }, 30);

                if($axure.player.settings.startCollapsed) {
                    collapse();
                    $('#leftPanel').width(0);
                }
            });
        })();

        var lastLeftPanelWidth = 250;

        function messageCenter_message(message, data) {
            if(message == 'expandFrame') expand();
        }

        function resizeContent() {
            var newHeight = $(window).height();
            var newWidth = $(window).width();

            var controlContainerHeight = newHeight - 32;
            if($('#interfaceControlFrameLogoContainer').is(':visible')) controlContainerHeight -= $('#interfaceControlFrameLogoContainer').height() + 16;

            $('#outerContainer').height(newHeight).width(newWidth);
            $('#leftPanel').height(newHeight);
            $('#interfaceControlFrame').height(newHeight);
            $('#interfaceControlFrameContainer').height(controlContainerHeight);

            $('#rightPanel').height(newHeight);
            $('#mainFrame').height(newHeight);

            $('#rightPanel').width($(window).width() - $('#leftPanel').width() - $('.vsplitbar').width());
        }

        function closePlayer() {
            window.location.href = $axure.page.location;
        }

        function collapse() {
            var currentHash = self.location.hash;
            //If the collapse hash string var isn't present and set to 1, insert it
            if (currentHash.indexOf('#c=1') == -1 && currentHash.indexOf('&c=1') == -1) {
                var varIndex = currentHash.indexOf('#c=');
                if (varIndex == -1) varIndex = currentHash.indexOf('&c=');
                if (varIndex != -1) {
                    var newHash = currentHash.substring(0, varIndex);

                    newHash = newHash == '' ? '#c=1' : newHash + '&c=1';

                    var ampIndex = currentHash.indexOf('&', varIndex + 1);
                    if (ampIndex != -1) {
                        newHash = newHash + currentHash.substring(ampIndex);
                    }
                    window.location.hash = newHash;
                } else if (currentHash.indexOf('#') != -1) {
                    window.location.hash = currentHash + '&c=1';
                } else {
                    window.location.hash = '#c=1';
                }
            }

            $('#maximizePanelContainer').show();
            lastLeftPanelWidth = $('#leftPanel').width();
            $('#leftPanel').hide();
            $('.vsplitbar').hide();
            $('#rightPanel').width($(window).width());
            $(window).resize();
            $('#outerContainer').trigger('resize');
        }

        function expand() {
            var currentHash = self.location.hash;
            var varIndex = currentHash.indexOf('&c=');
            if (varIndex == -1) varIndex = currentHash.indexOf('#c=');
            //If the collapse hash string var is present, remove it
            if (varIndex != -1) {
                var newHash = currentHash.substring(0, varIndex);

                var ampIndex = currentHash.indexOf('&', varIndex + 1);
                if (ampIndex != -1) {
                    newHash = newHash == '' ? '#' + currentHash.substring(ampIndex + 1) : newHash + currentHash.substring(ampIndex);
                }
                self.location.hash = newHash;
            }

            $('#maximizePanelContainer').hide();
            $('#leftPanel').width(lastLeftPanelWidth);
            $('#leftPanel').show();
            $('.vsplitbar').show();
            $('#rightPanel').width($(window).width() - $('#leftPanel').width() - $('.vsplitbar').width());
            $(window).resize();
            $('#outerContainer').trigger('resize');
        }

        function initialize() {
            var mainFrame = document.getElementById("mainFrame");
            var pageName = HashString("p");
            if(pageName.length > 0) mainFrame.contentWindow.location.href = pageName + ".html";
            else {
                var url = getFirstPageUrl($axure.document.sitemap.rootNodes);
                mainFrame.contentWindow.location.href = (url ? url : "about:blank");
            }
        }
        
        function getFirstPageUrl(nodes) {
            for (var i = 0; i < nodes.length; i++) {
                var node = nodes[i];
                if (node.url) return node.url;
                else {
                    var hasChildren = (node.children && node.children.length > 0);
                    if (hasChildren) {
                        var url = getFirstPageUrl(node.children);
                        if (url) return url;
                    }
                }
            }
            return null;
        }

        function initializeLogo() {
            if($axure.document.configuration.logoImagePath) {
                $('#interfaceControlFrameLogoImageContainer').html('<img id="logoImage" src="" />');
                $('#logoImage').attr('src', $axure.document.configuration.logoImagePath).load(function() { resizeContent(); });
                $('#interfaceControlFrameMinimizeContainer').css('background-color', '#FFFFFF');
            } else $('#interfaceControlFrameLogoImageContainer').hide();

            if ($axure.document.configuration.logoImageCaption) {
                $('#interfaceControlFrameLogoCaptionContainer').html($axure.document.configuration.logoImageCaption);
                $('#interfaceControlFrameMinimizeContainer').css('background-color', '#FFFFFF');
            } else $('#interfaceControlFrameLogoCaptionContainer').hide();

            if(!$('#interfaceControlFrameLogoImageContainer').is(':visible') && !$('#interfaceControlFrameLogoCaptionContainer').is(':visible')) {
                $('#interfaceControlFrameLogoContainer').hide();
            }
        }

        function mainFrame_onload() {
            if($axure.page.pageName) document.title = $axure.page.pageName;
        }

        function HashString(query) {
            var qstring = self.location.href.split("#");
            if(qstring.length < 2) return "";

            var prms = qstring[1].split("&");
            var frmelements = new Array();
            var currprmeter, querystr = "";

            for(var i = 0; i < prms.length; i++) {
                currprmeter = prms[i].split("=");
                frmelements[i] = new Array();
                frmelements[i][0] = currprmeter[0];
                frmelements[i][1] = currprmeter[1];
            }

            for(j = 0; j < frmelements.length; j++) {
                if(frmelements[j][0] == query) {
                    querystr = frmelements[j][1];
                    break;
                }
            }
            return querystr;
        }

    --></script>

    <link type="text/css" rel="Stylesheet" href="../../../../../代理商管理系统_原型/原型/代理商系统原型HTML/plugins/sitemap/styles/sitemap.css" />
    <script type="text/javascript" src="../../../../../代理商管理系统_原型/原型/代理商系统原型HTML/plugins/sitemap/sitemap.js"></script>
    <link type="text/css" rel="Stylesheet" href="../../../../../代理商管理系统_原型/原型/代理商系统原型HTML/plugins/page_notes/styles/page_notes.css" />
    <script type="text/javascript" src="../../../../../代理商管理系统_原型/原型/代理商系统原型HTML/plugins/page_notes/page_notes.js"></script>

</head>
<body scroll="no">
    <div id="outerContainer">

        <div id="leftPanel">
            <div id="interfaceControlFrame">
                <div id="interfaceControlFrameMinimizeContainer">
                    <a title="最小化" id="interfaceControlFrameMinimizeButton" onclick="collapse();">&nbsp;</a>
                    <div id="interfaceControlFrameCloseContainer">
                        <a title="关闭" id="interfaceControlFrameCloseButton" onclick="closePlayer();">&nbsp;</a>
                    </div>
                </div>
                <div id="interfaceControlFrameLogoContainer">
                    <div id="interfaceControlFrameLogoImageContainer"></div>
                    <div id="interfaceControlFrameLogoCaptionContainer"></div>
                </div>
                <div id="interfaceControlFrameHeaderContainer">
                    <ul id="interfaceControlFrameHeader">
                    </ul>
                </div>
                <div id="interfaceControlFrameContainer">
                </div>
            </div>
        </div>
        <div id="rightPanel">
            <iframe id="mainFrame" width="100%" height="100%" src="" frameborder="0"></iframe>
        </div>

    </div>

    <div id="maximizePanelContainer">
        <iframe id="expandFrame" src="../../../../../代理商管理系统_原型/原型/代理商系统原型HTML/resources/expand.html" width="100%" height="100%" scrolling="no" allowtransparency="true" frameborder="0"></iframe>
    </div>

</body>
</html>
