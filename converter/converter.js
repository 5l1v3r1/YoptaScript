var dictonary = [

			["break", "харэ"]
			, ["case", "лещ"]
			, ["catch", "гоп"]
			, ["continue", "двигай"]
			, ["debugger", "логопед"]
			, ["default", "понятие"]
			, ["delete", "ёбнуть"]
			, ["do(?![a-z\s]+)", "крч"]
			, ["else", "иливжопураз"]
			, ["finally", "тюряжка"]
			, ["for", "го"]
			, ["function", "йопта"]
			, ["if", "вилкойвглаз"]
			, ["in(?![a-z\s]+)", "в"]
			, ["instanceof", "внатуре"]
			, ["new", "гы"]
			, ["return", "отвечаю"]
			, ["switch", "пошерстим"]
			, ["this", "тырыпыры"]
			, ["throw", "пнх"]
			, ["try", "хапнуть"]
			, ["typeof", "чезажижан"]
			, ["var", "валио"]
			, ["void", "куку"]
			, ["while", "потрещим"]
			, ["with", "хзйопт"]
			, ["Abstract", "говнойбать"]
			, ["Boolean", "пацан"]
			, ["Byte", "семка"]
			, ["Char", "эээ"]
			, ["Class", "клёво"]
			, ["Const", "мусор"]
			, ["Double", "двойные"]
			, ["Enum", "еээ"]
			, ["export", "излабас"]
			, ["extends", "батя"]
			, ["final", "бачок"]
			, ["Float", "плавник"]
			, ["goto", "идинах"]
			, ["implements", "силикон"]
			, ["import", "спиздить"]
			, ["Int", "хуйня"]
			, ["interface", "хуёво"]
			, ["Long", "колонна"]
			, ["native", "братан"]
			, ["package", "клеёнка"]
			, ["private", "мой"]
			, ["protected", "подкрыша"]
			, ["public", "ебанное"]
			, ["Short", "пипин"]
			, ["static", "попонятия"]
			, ["super", "яга"]
			, ["synchronized", "вписон"]
			, ["throws", "плюнуть"]
			, ["transient", "ахз"]
			, ["volatile", "вписос"]
			, ["null", "нуллио"]
			, ["NaN", "гомункул"]
			, ["true", "трулио"]
			, ["false", "нетрулио"]
//            Операторы сравнения и логические операторы
			, [">", "пизже"]
			, ["<", "хуёвей"]
			, [">=", "поцик"]
			, ["<=", "поц"]
			, ["==", "эквалио"]
			, ["=", "сука"]
			, [";", " нах"]
//			["{", "типа"],
//			["}", "йоба"],
//			["(", "бля"],
//			[")", "йопт"],
			, ["\\!", "чобля"]
			, ["\\\&\\&", "ичо"]
			, ["\\|\\|", "иличо"]
//             Document methods
            , ["document", "ксива"]
            , ["captureEvents", "зафотатьШняги"]
            , ["caretPositionFromPoint", ""]
            , ["caretRangeFromPoint", ""]
            , ["createAttribute", ""]
            , ["createAttributeNS", ""]
            , ["reateCDATASection", ""]
            , ["createDocumentFragment", ""]
            , ["createElementNS", ""]
            , ["createEvent", "создатьШнягу"]
            , ["createNodeIterator", ""]
            , ["createProcessingInstruction", ""]
            , ["createRange", ""]
            , ["createTextNode", ""]
            , ["createTouch", ""]
            , ["createTreeWalker", ""]
            , ["elementFromPoint", ""]
            , ["elementsFromPoint", ""]
            , ["enableStyleSheetsForSet", ""]
            , ["exitPointerLock", ""]
            , ["getAnimations", ""]
            , ["getElementsByClassName", "вычислитьТерпилПоКлассу"]
            , ["getElementsByTagName", "вычислитьТерпилПоТегу"]
            , ["getElementsByTagNameNS", ""]
            , ["importNode", "влабазУзел"]
            , ["registerElement", ""]
            , ["releaseCapture", ""]
            , ["mozSetImageElement", ""]
            , ["getElementById", "вычислитьЛохаПоНомеру"]
            , ["querySelector", ""]
            , ["querySelectorAll", ""]
            , ["createExpression", ""]
            , ["createNSResolver", ""]
            , ["evaluate", ""]
            , ["clear", "урыть"]
            , ["close", "завали"]
            , ["execCommand", ""]
            , ["getElementsByName", "вычислитьТерпилПоИмени"]
            , ["getSelection", ""]
            , ["hasFocus", ""]
            , ["open", ""]
            , ["queryCommandEnabled", ""]
            , ["queryCommandState", ""]
            , ["queryCommandSupported", ""]
            , ["queryCommandIndeterm", ""]
            , ["queryCommandValue", ""]
            , ["write(?![a-z\s]+)", "малява"]
            , ["writeln", "малявагоп"]
//            Document Properties
            , ["async", ""]
            , ["characterSet", ""]
            , ["charset", ""]
            , ["compatMode", ""]
            , ["contentType", ""]
            , ["doctype", "типКсивы"]
            , ["documentElement", ""]
            , ["documentURI", ""]
            , ["domConfig", ""]
            , ["hidden", "кроить"]
            , ["inputEncoding", ""]
            , ["lastStyleSheetSet", ""]
            , ["pointerLockElement", ""]
            , ["preferredStyleSheetSet", ""]
            , ["scrollingElement", ""]
            , ["selectedStyleSheetSet", ""]
            , ["scrollingElement", ""]
            , ["styleSheets", ""]
            , ["styleSheetSets", ""]
            , ["timeline", "всяЖиза"]
            , ["visibilityState", ""]
            , ["xmlEncoding", ""]
            , ["children", "пездюки"]
            , ["xmlVersion", ""]
            , ["firstElementChild", "первыйПездюк"]
            , ["lastElementChild", "последнийПездюк"]
            , ["childElementCount", "моиПездюки"]
            , ["activeElement", ""]
            , ["alinkColor", ""]
            , ["anchors", "якорьЁпт"]
            , ["applets", ""]
            , ["bgColor", ""]
            , ["body", "висяк"]
            , ["cookie", "семки"]
            , ["defaultView", ""]
            , ["designMode", ""]
            , ["dir", ""]
            , ["domain", ""]
            , ["embeds", ""]
            , ["fgColor", ""]
            , ["forms", ""]
            , ["head", "залупка"]
            , ["height", "цапля"]
            , ["images", "мазни"]
            , ["lastModified", ""]
            , ["linkColor", ""]
            , ["links", ""]
            , ["location", ""]
            , ["plugins", ""]
            , ["readyState", ""]
            , ["referrer", ""]
            , ["scripts", ""]
            , ["title", "вася"]
            , ["URL", ""]
            , ["vlinkColor", ""]
            , ["width", "жопа"]
//            Document event handlers
            , ["onafterscriptexecute", ""]
            , ["onbeforescriptexecute", ""]
            , ["oncopy", ""]
            , ["oncut", ""]
            , ["onfullscreenchange", ""]
            , ["onfullscreenerror", ""]
            , ["onpaste", ""]
            , ["onpointerlockchange", ""]
            , ["onpointerlockerror", ""]
            , ["onreadystatechange", ""]
            , ["onselectionchange", ""]
            , ["onwheel", ""]
            , ["onselectionchange", ""]
//            Global event handlers
            , ["onabort", ""]
            , ["onblur", ""]
            , ["onerror", ""]
            , ["onfocus", ""]
            , ["oncancel", ""]
            , ["oncanplaythrough", ""]
            , ["onchange", ""]
            , ["onclick", ""]
            , ["onclose", ""]
            , ["oncontextmenu", ""]
            , ["oncuechange", ""]
            , ["ondblclick", ""]
            , ["ondrag", ""]
            , ["ondragend", ""]
            , ["ondragenter", ""]
            , ["ondragexit", ""]
            , ["ondragleave", ""]
            , ["ondragover", ""]
            , ["ondragstart", ""]
            , ["ondrop", ""]
            , ["ondurationchange", ""]
            , ["onemptied", ""]
            , ["onended", ""]
            , ["oninput", ""]
            , ["oninvalid", ""]
            , ["onkeydown", ""]
            , ["onkeypress", ""]
            , ["onkeyup", ""]
            , ["onload", ""]
            , ["onloadeddata", ""]
            , ["onloadedmetadata", ""]
            , ["onloadstart", ""]
            , ["onmousedown", ""]
            , ["onmouseenter", ""]
            , ["onmouseleave", ""]
            , ["onmousemove", ""]
            , ["onmouseout", ""]
            , ["onmouseover", ""]
            , ["onmouseup", ""]
            , ["onmousewheel", ""]
            , ["onpause", ""]
            , ["onplay", ""]
            , ["onplaying", ""]
            , ["onpointerdown", ""]
            , ["onpointermove", ""]
            , ["onpointerup", ""]
            , ["onpointercancel", ""]
            , ["onpointerover", ""]
            , ["onpointerout", ""]
            , ["onpointerenter", ""]
            , ["onpointerleave", ""]
            , ["onpointerlockchange", ""]
            , ["onpointerlockerror", ""]
            , ["onprogress", ""]
            , ["onratechange", ""]
            , ["onreset", ""]
            , ["onscroll", ""]
            , ["onseeked", ""]
            , ["onseeking", ""]
            , ["onselect", ""]
            , ["onselectionchange", ""]
            , ["onshow", ""]
            , ["onsort", ""]
            , ["onstalled", ""]
            , ["onsubmit", ""]
            , ["onsuspend", ""]
            , ["ontimeupdate", ""]
            , ["onvolumechange", ""]
            , ["ontouchcancel", ""]
            , ["ontouchend", ""]
            , ["ontouchmove", ""]
            , ["ontouchstart", ""]
            , ["onwaiting", ""]
//            Window properties
            , ["caches", ""]
            , ["window", "ебало"]
            , ["applicationCache", ""]
            , ["closed", ""]
            , ["Components", ""]
            , ["console", ""]
            , ["controllers", ""]
            , ["crypto", ""]
            , ["devicePixelRatio", ""]
            , ["dialogArguments", ""]
            , ["frameElement", ""]
            , ["frames", ""]
            , ["fullScreen", ""]
            , ["history", ""]
            , ["innerHeight", ""]
            , ["innerWidth", ""]
            , ["isSecureContext", ""]
            , ["length", ""]
            , ["location", ""]
            , ["locationbar", ""]
            , ["localStorage", ""]
            , ["menubar", ""]
            , ["name", ""]
            , ["navigator", "главпетух"]
            , ["opener", ""]
            , ["outerHeight", ""]
            , ["outerWidth", ""]
            , ["pageXOffset", ""]
            , ["pageYOffset", ""]
            , ["sessionStorage", ""]
            , ["parent", ""]
            , ["returnValue", ""]
            , ["performance", ""]
            , ["screen", ""]
            , ["screenX", ""]
            , ["screenY", ""]
            , ["scrollbars", ""]
            , ["scrollMaxX", "колеситьПоГлавЭксу"]
            , ["scrollMaxY", "колеситьПоГлавУгам"]
            , ["scrollX", "колеситьПоЭксу"]
            , ["scrollY", "колеситьПоУгам"]
            , ["self", ""]
            , ["sessionStorage", ""]
            , ["sidebar", ""]
            , ["speechSynthesis", ""]
            , ["status", ""]
            , ["statusbar", ""]
            , ["toolbar", ""]
            , ["top", ""]
//            Window methods
            , ["addEventListener", ""]
            , ["alert", "шухер"]
            , ["atob", ""]
            , ["blur", "размытьЕбало"]
            , ["btoa", ""]
            , ["cancelIdleCallback", ""]
            , ["captureEvents", ""]
            , ["clearImmediate", ""]
            , ["clearInterval", ""]
            , ["clearTimeout", ""]
            , ["confirm", "канает"]
            , ["dispatchEvent", ""]
            , ["dump", ""]
            , ["fetch", ""]
            , ["find", ""]
            , ["focus", "хуёкус"]
            , ["getAttention", ""]
            , ["getComputedStyle", ""]
            , ["getSelection", ""]
            , ["matchMedia", ""]
            , ["maximize", "распидорась"]
            , ["minimize", "спидорась"]
            , ["moveBy", ""]
            , ["moveTo", ""]
            , ["openDialog", "побазарить"]
            , ["postMessage", ""]
            , ["print", ""]
            , ["prompt", ""]
            , ["removeEventListener", ""]
            , ["resizeBy", ""]
            , ["resizeTo", ""]
            , ["scroll", "колесить"]
            , ["scrollBy", "колеситьНа"]
            , ["scrollByLines", "колеситьНаЛинии"]
            , ["scrollByPages", "колеситьНаМалявах"]
            , ["scrollTo", "колеситьНахуйНа"]
            , ["setCursor", ""]
            , ["setImmediate", ""]
            , ["setInterval", ""]
            , ["setResizable", ""]
            , ["setTimeout", ""]
            , ["showModalDialog", ""]
            , ["sizeToContent", ""]
            , ["stop", "стопээ"]
            , ["updateCommands", ""]
//            Window event handlers
            , ["onafterprint", ""]
            , ["onbeforeprint", ""]
            , ["onbeforeinstallprompt", ""]
            , ["onbeforeunload", ""]
            , ["ondevicelight", ""]
            , ["ondevicemotion", ""]
            , ["ondeviceorientation", ""]
            , ["ondeviceproximity", ""]
            , ["onhashchange", ""]
            , ["oninstall", ""]
            , ["oninput", ""]
            , ["onlanguagechange", ""]
            , ["onload", ""]
            , ["onmozbeforepaint", ""]
            , ["onoffline", ""]
            , ["ononline", ""]
            , ["onpagehide", ""]
            , ["onpageshow", ""]
            , ["onpaint", ""]
            , ["onpopstate", ""]
            , ["onrejectionhandled", ""]
            , ["onstorage", ""]
            , ["onunhandledrejection", ""]
            , ["onunload", ""]
            , ["onuserproximity", ""]
            , ["onvrdisplayconnected", ""]
            , ["onvrdisplaydisconnected", ""]
            , ["onvrdisplaypresentchange ", ""]
];

var magicYoptaBtn = document.getElementById('magicYoptaBtn').addEventListener('click', converter, false);
var jsOnChange = document.getElementById('jstoyopta').addEventListener('keyup', converter, false);
String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    var re = new RegExp(search, 'g');
    //console.log(this.replace(re, replacement));
    return this.replace(re, replacement);
};

function converter() {
    var jstoyopta = document.getElementById('jstoyopta').value;
    // var jsArray = jstoyopta.split (/\n| /);
    var i = 0;
    var yoptaNew = jstoyopta;
    for (i = 0; i < dictonary.length; i++) {
        yoptaNew = yoptaNew.replaceAll(dictonary[i][0], dictonary[i][1]);
    }
    document.getElementById('yopta').value = yoptaNew;
}