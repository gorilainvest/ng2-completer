webpackJsonp([1],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ng2CompleterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_completer_cmp__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_completer_list_item_cmp__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_completer_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_completer_data_factory__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_ctr_completer__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_ctr_dropdown__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_ctr_input__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_ctr_list__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives_ctr_row__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var Ng2CompleterModule = (function () {
    function Ng2CompleterModule() {
    }
    return Ng2CompleterModule;
}());
Ng2CompleterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_12__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__components_completer_list_item_cmp__["a" /* CompleterListItemCmp */],
            __WEBPACK_IMPORTED_MODULE_7__directives_ctr_completer__["a" /* CtrCompleter */],
            __WEBPACK_IMPORTED_MODULE_8__directives_ctr_dropdown__["b" /* CtrDropdown */],
            __WEBPACK_IMPORTED_MODULE_9__directives_ctr_input__["a" /* CtrInput */],
            __WEBPACK_IMPORTED_MODULE_10__directives_ctr_list__["a" /* CtrList */],
            __WEBPACK_IMPORTED_MODULE_11__directives_ctr_row__["a" /* CtrRow */],
            __WEBPACK_IMPORTED_MODULE_3__components_completer_cmp__["a" /* CompleterCmp */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__components_completer_cmp__["a" /* CompleterCmp */],
            __WEBPACK_IMPORTED_MODULE_4__components_completer_list_item_cmp__["a" /* CompleterListItemCmp */],
            __WEBPACK_IMPORTED_MODULE_7__directives_ctr_completer__["a" /* CtrCompleter */],
            __WEBPACK_IMPORTED_MODULE_8__directives_ctr_dropdown__["b" /* CtrDropdown */],
            __WEBPACK_IMPORTED_MODULE_9__directives_ctr_input__["a" /* CtrInput */],
            __WEBPACK_IMPORTED_MODULE_10__directives_ctr_list__["a" /* CtrList */],
            __WEBPACK_IMPORTED_MODULE_11__directives_ctr_row__["a" /* CtrRow */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__services_completer_service__["a" /* CompleterService */],
            __WEBPACK_IMPORTED_MODULE_6__services_completer_data_factory__["a" /* LocalDataFactoryProvider */],
            __WEBPACK_IMPORTED_MODULE_6__services_completer_data_factory__["b" /* RemoteDataFactoryProvider */]
        ]
    })
], Ng2CompleterModule);



/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CtrCompleter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CtrCompleter = (function () {
    function CtrCompleter() {
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.highlighted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.opened = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._hasHighlighted = false;
        this._hasSelected = false;
        this._cancelBlur = false;
        this._isOpen = false;
    }
    CtrCompleter.prototype.registerList = function (list) {
        this.list = list;
    };
    CtrCompleter.prototype.registerDropdown = function (dropdown) {
        this.dropdown = dropdown;
    };
    CtrCompleter.prototype.onHighlighted = function (item) {
        this.highlighted.emit(item);
        this._hasHighlighted = !!item;
    };
    CtrCompleter.prototype.onSelected = function (item, clearList) {
        if (clearList === void 0) { clearList = true; }
        this.selected.emit(item);
        if (item) {
            this._hasSelected = true;
        }
        if (clearList) {
            this.clear();
        }
    };
    CtrCompleter.prototype.search = function (term) {
        if (this._hasSelected) {
            this.selected.emit(null);
            this._hasSelected = false;
        }
        if (this.list) {
            this.list.search(term);
        }
    };
    CtrCompleter.prototype.clear = function () {
        if (this.dropdown) {
            this.dropdown.clear();
        }
        if (this.list) {
            this.list.clear();
        }
        this._hasHighlighted = false;
        this.isOpen = false;
    };
    CtrCompleter.prototype.selectCurrent = function () {
        if (this.dropdown) {
            this.dropdown.selectCurrent();
        }
    };
    CtrCompleter.prototype.nextRow = function () {
        if (this.dropdown) {
            this.dropdown.nextRow();
        }
    };
    CtrCompleter.prototype.prevRow = function () {
        if (this.dropdown) {
            this.dropdown.prevRow();
        }
    };
    CtrCompleter.prototype.hasHighlighted = function () {
        return this._hasHighlighted;
    };
    CtrCompleter.prototype.cancelBlur = function (cancel) {
        this._cancelBlur = cancel;
    };
    CtrCompleter.prototype.isCancelBlur = function () {
        return this._cancelBlur;
    };
    CtrCompleter.prototype.open = function () {
        if (!this._isOpen) {
            this.isOpen = true;
            this.list.open();
        }
    };
    Object.defineProperty(CtrCompleter.prototype, "isOpen", {
        get: function () {
            return this._isOpen;
        },
        set: function (open) {
            this._isOpen = open;
            this.opened.emit(this._isOpen);
            if (this.list) {
                this.list.isOpen(open);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CtrCompleter.prototype, "autoHighlightIndex", {
        get: function () {
            return this._autoHighlightIndex;
        },
        set: function (index) {
            this._autoHighlightIndex = index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CtrCompleter.prototype, "hasSelected", {
        get: function () {
            return this._hasSelected;
        },
        enumerable: true,
        configurable: true
    });
    return CtrCompleter;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CtrCompleter.prototype, "selected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CtrCompleter.prototype, "highlighted", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CtrCompleter.prototype, "opened", void 0);
CtrCompleter = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: "[ctrCompleter]",
    })
], CtrCompleter);



/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MAX_CHARS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MIN_SEARCH_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PAUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TEXT_SEARCHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TEXT_NO_RESULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CLEAR_TIMEOUT; });
/* harmony export (immutable) */ __webpack_exports__["c"] = isNil;
var MAX_CHARS = 524288; // the default max length per the html maxlength attribute
// the default max length per the html maxlength attribute
var MIN_SEARCH_LENGTH = 3;
var PAUSE = 100;
var TEXT_SEARCHING = "Searching...";
var TEXT_NO_RESULTS = "No results found";
var CLEAR_TIMEOUT = 50;
function isNil(value) {
    return typeof value === "undefined" || value === null;
}
;


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CtrRowItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CtrDropdown; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ctr_completer__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var CtrRowItem = (function () {
    function CtrRowItem(row, index) {
        this.row = row;
        this.index = index;
    }
    return CtrRowItem;
}());

var CtrDropdown = (function () {
    function CtrDropdown(completer, el) {
        this.completer = completer;
        this.el = el;
        this.rows = [];
        this.completer.registerDropdown(this);
    }
    CtrDropdown.prototype.ngOnInit = function () {
        var css = getComputedStyle(this.el.nativeElement);
        this.isScrollOn = css.maxHeight && css.overflowY === "auto";
    };
    CtrDropdown.prototype.ngOnDestroy = function () {
        this.completer.registerDropdown(null);
    };
    CtrDropdown.prototype.ngAfterViewInit = function () {
        var _this = this;
        var autoHighlightIndex = this.completer.autoHighlightIndex;
        if (autoHighlightIndex) {
            setTimeout(function () {
                _this.highlightRow(autoHighlightIndex);
            }, 0);
        }
    };
    CtrDropdown.prototype.onMouseDown = function (event) {
        var _this = this;
        // Support for canceling blur on IE (issue #158)
        this.completer.cancelBlur(true);
        setTimeout(function () {
            _this.completer.cancelBlur(false);
        }, 0);
    };
    CtrDropdown.prototype.registerRow = function (row) {
        this.rows.push(row);
    };
    CtrDropdown.prototype.highlightRow = function (index) {
        var highlighted = this.rows.find(function (row) { return row.index === index; });
        if (index < 0) {
            if (this.currHighlighted) {
                this.currHighlighted.row.setHighlighted(false);
            }
            this.currHighlighted = undefined;
            this.completer.onHighlighted(null);
            return;
        }
        if (!highlighted) {
            return;
        }
        if (this.currHighlighted) {
            this.currHighlighted.row.setHighlighted(false);
        }
        this.currHighlighted = highlighted;
        this.currHighlighted.row.setHighlighted(true);
        this.completer.onHighlighted(this.currHighlighted.row.getDataItem());
        if (this.isScrollOn && this.currHighlighted) {
            var rowTop = this.dropdownRowTop();
            if (rowTop < 0) {
                this.dropdownScrollTopTo(rowTop - 1);
            }
            else {
                var row = this.currHighlighted.row.getNativeElement();
                if (this.dropdownHeight() < row.getBoundingClientRect().bottom) {
                    this.dropdownScrollTopTo(this.dropdownRowOffsetHeight(row));
                    if (this.el.nativeElement.getBoundingClientRect().bottom - this.dropdownRowOffsetHeight(row) < row.getBoundingClientRect().top) {
                        this.dropdownScrollTopTo(row.getBoundingClientRect().top - (this.el.nativeElement.getBoundingClientRect().top + parseInt(getComputedStyle(this.el.nativeElement).paddingTop, 10)));
                    }
                }
            }
        }
    };
    CtrDropdown.prototype.clear = function () {
        this.rows = [];
    };
    CtrDropdown.prototype.onSelected = function (item) {
        this.completer.onSelected(item);
    };
    CtrDropdown.prototype.selectCurrent = function () {
        if (this.currHighlighted) {
            this.onSelected(this.currHighlighted.row.getDataItem());
        }
        else if (this.rows.length > 0) {
            this.onSelected(this.rows[0].row.getDataItem());
        }
    };
    CtrDropdown.prototype.nextRow = function () {
        var nextRowIndex = 0;
        if (this.currHighlighted) {
            nextRowIndex = this.currHighlighted.index + 1;
        }
        this.highlightRow(nextRowIndex);
    };
    CtrDropdown.prototype.prevRow = function () {
        var nextRowIndex = -1;
        if (this.currHighlighted) {
            nextRowIndex = this.currHighlighted.index - 1;
        }
        this.highlightRow(nextRowIndex);
    };
    CtrDropdown.prototype.dropdownScrollTopTo = function (offset) {
        this.el.nativeElement.scrollTop = this.el.nativeElement.scrollTop + offset;
    };
    CtrDropdown.prototype.dropdownRowTop = function () {
        return this.currHighlighted.row.getNativeElement().getBoundingClientRect().top -
            (this.el.nativeElement.getBoundingClientRect().top +
                parseInt(getComputedStyle(this.el.nativeElement).paddingTop, 10));
    };
    CtrDropdown.prototype.dropdownHeight = function () {
        return this.el.nativeElement.getBoundingClientRect().top +
            parseInt(getComputedStyle(this.el.nativeElement).maxHeight, 10);
    };
    CtrDropdown.prototype.dropdownRowOffsetHeight = function (row) {
        var css = getComputedStyle(row);
        return row.offsetHeight +
            parseInt(css.marginTop, 10) + parseInt(css.marginBottom, 10);
    };
    return CtrDropdown;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("mousedown", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CtrDropdown.prototype, "onMouseDown", null);
CtrDropdown = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: "[ctrDropdown]",
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ctr_completer__["a" /* CtrCompleter */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], CtrDropdown);



/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleterBaseData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__(36);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var CompleterBaseData = (function (_super) {
    __extends(CompleterBaseData, _super);
    function CompleterBaseData() {
        return _super.call(this) || this;
    }
    CompleterBaseData.prototype.cancel = function () { };
    CompleterBaseData.prototype.searchFields = function (searchFields) {
        this._searchFields = searchFields;
        return this;
    };
    CompleterBaseData.prototype.titleField = function (titleField) {
        this._titleField = titleField;
        return this;
    };
    CompleterBaseData.prototype.descriptionField = function (descriptionField) {
        this._descriptionField = descriptionField;
        return this;
    };
    CompleterBaseData.prototype.imageField = function (imageField) {
        this._imageField = imageField;
        return this;
    };
    CompleterBaseData.prototype.convertToItem = function (data) {
        var image = null;
        var formattedText;
        var formattedDesc;
        if (this._titleField) {
            formattedText = this.extractTitle(data);
        }
        else {
            formattedText = data;
        }
        if (this._descriptionField) {
            formattedDesc = this.extractValue(data, this._descriptionField);
        }
        if (this._imageField) {
            image = this.extractValue(data, this._imageField);
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__globals__["c" /* isNil */])(formattedText)) {
            return null;
        }
        return {
            title: formattedText,
            description: formattedDesc,
            image: image,
            originalObject: data
        };
    };
    CompleterBaseData.prototype.responseFormatter = function (formatterFunction) {
        this.formatterFunction = formatterFunction;
    };
    CompleterBaseData.prototype.extractMatches = function (data, term) {
        var _this = this;
        var matches = [];
        var searchFields = this._searchFields ? this._searchFields.split(",") : null;
        if (this._searchFields !== null && this._searchFields !== undefined && term != "") {
            matches = data.filter(function (item) {
                var values = searchFields ? searchFields.map(function (searchField) { return _this.extractValue(item, searchField); }).filter(function (value) { return !!value; }) : [item];
                return values.some(function (value) { return value.toString().toLowerCase().indexOf(term.toString().toLowerCase()) >= 0; });
            });
        }
        else {
            matches = data;
        }
        return matches;
    };
    CompleterBaseData.prototype.extractTitle = function (item) {
        var _this = this;
        // split title fields and run extractValue for each and join with ' '
        return this._titleField.split(",")
            .map(function (field) {
            return _this.extractValue(item, field);
        })
            .reduce(function (acc, titlePart) { return acc ? acc + " " + titlePart : titlePart; });
    };
    CompleterBaseData.prototype.extractValue = function (obj, key) {
        var keys;
        var result;
        if (key) {
            keys = key.split(".");
            result = obj;
            for (var i = 0; i < keys.length; i++) {
                if (result) {
                    result = result[keys[i]];
                }
            }
        }
        else {
            result = obj;
        }
        return result;
    };
    CompleterBaseData.prototype.processResults = function (matches) {
        var i;
        var results = [];
        if (matches && matches.length > 0) {
            for (i = 0; i < matches.length; i++) {
                var item = this.convertToItem(matches[i]);
                if (item) {
                    results.push(item);
                }
            }
        }
        return this.executeFormatterFunction(results);
    };
    CompleterBaseData.prototype.executeFormatterFunction = function (data) {
        try {
            var fn = this.formatterFunction;
            if (typeof fn !== 'undefined' && fn !== null) {
                var temp = fn(data);
                return temp;
            }
        }
        catch (e) {
            console.warn(e);
        }
        return data;
    };
    return CompleterBaseData;
}(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]));



/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_data__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__remote_data__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var CompleterService = (function () {
    function CompleterService(localDataFactory, // Using any instead of () => LocalData because on AoT errors
        remoteDataFactory // Using any instead of () => LocalData because on AoT errors
    ) {
        this.localDataFactory = localDataFactory;
        this.remoteDataFactory = remoteDataFactory; // Using any instead of () => LocalData because on AoT errors
    }
    CompleterService.prototype.local = function (data, searchFields, titleField) {
        if (searchFields === void 0) { searchFields = ""; }
        if (titleField === void 0) { titleField = ""; }
        var localData = this.localDataFactory();
        return localData
            .data(data)
            .searchFields(searchFields)
            .titleField(titleField);
    };
    CompleterService.prototype.remote = function (url, searchFields, titleField) {
        if (searchFields === void 0) { searchFields = ""; }
        if (titleField === void 0) { titleField = ""; }
        var remoteData = this.remoteDataFactory();
        return remoteData
            .remoteUrl(url)
            .searchFields(searchFields)
            .titleField(titleField);
    };
    return CompleterService;
}());
CompleterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__local_data__["a" /* LocalData */])),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__remote_data__["a" /* RemoteData */])),
    __metadata("design:paramtypes", [Object, Object])
], CompleterService);



/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__completer_base_data__ = __webpack_require__(55);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocalData = (function (_super) {
    __extends(LocalData, _super);
    function LocalData() {
        return _super.call(this) || this;
    }
    LocalData.prototype.data = function (data) {
        var _this = this;
        if (data instanceof __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"]) {
            data.subscribe(function (res) {
                _this._data = res;
                if (_this.savedTerm) {
                    _this.search(_this.savedTerm);
                }
            });
        }
        else {
            this._data = data;
        }
        return this;
    };
    LocalData.prototype.search = function (term) {
        if (!this._data) {
            this.savedTerm = term;
        }
        else {
            this.savedTerm = null;
            var matches = this.extractMatches(this._data, term);
            this.next(this.processResults(matches));
        }
    };
    LocalData.prototype.convertToItem = function (data) {
        return _super.prototype.convertToItem.call(this, data);
    };
    return LocalData;
}(__WEBPACK_IMPORTED_MODULE_2__completer_base_data__["a" /* CompleterBaseData */]));
LocalData = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], LocalData);



/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoteData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__completer_base_data__ = __webpack_require__(55);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var RemoteData = (function (_super) {
    __extends(RemoteData, _super);
    function RemoteData(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this._urlFormater = null;
        _this._dataField = null;
        return _this;
    }
    RemoteData.prototype.remoteUrl = function (remoteUrl) {
        this._remoteUrl = remoteUrl;
        return this;
    };
    RemoteData.prototype.urlFormater = function (urlFormater) {
        this._urlFormater = urlFormater;
    };
    RemoteData.prototype.dataField = function (dataField) {
        this._dataField = dataField;
    };
    /**
     * @deprecated Please use the requestOptions to pass headers with the search request
     */
    RemoteData.prototype.headers = function (headers) {
        this._headers = headers;
    };
    RemoteData.prototype.requestOptions = function (requestOptions) {
        this._requestOptions = requestOptions;
    };
    RemoteData.prototype.search = function (term) {
        var _this = this;
        this.cancel();
        // let params = {};
        var url = "";
        if (this._urlFormater) {
            url = this._urlFormater(term);
        }
        else {
            url = this._remoteUrl + encodeURIComponent(term);
        }
        /*
         * If requestOptions are provided, they will override anything set in headers.
         *
         * If no requestOptions are provided, a new RequestOptions object will be instantiated,
         * and either the provided headers or a new Headers() object will be sent.
         */
        if (!this._requestOptions) {
            this._requestOptions = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestOptions"]();
            this._requestOptions.headers = this._headers || new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
        }
        this.remoteSearch = this.http.get(url, this._requestOptions)
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var matches = _this.extractValue(data, _this._dataField);
            return _this.extractMatches(matches, term);
        })
            .map(function (matches) {
            var results = _this.processResults(matches);
            _this.next(results);
            return results;
        })
            .catch(function (err) {
            _this.error(err);
            return null;
        })
            .subscribe();
    };
    RemoteData.prototype.cancel = function () {
        if (this.remoteSearch) {
            this.remoteSearch.unsubscribe();
        }
    };
    RemoteData.prototype.convertToItem = function (data) {
        return _super.prototype.convertToItem.call(this, data);
    };
    return RemoteData;
}(__WEBPACK_IMPORTED_MODULE_3__completer_base_data__["a" /* CompleterBaseData */]));



/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng2_completer_module__ = __webpack_require__(118);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2CompleterModule", function() { return __WEBPACK_IMPORTED_MODULE_0__ng2_completer_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_completer_cmp__ = __webpack_require__(75);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CompleterCmp", function() { return __WEBPACK_IMPORTED_MODULE_1__components_completer_cmp__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_completer_list_item_cmp__ = __webpack_require__(76);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CompleterListItemCmp", function() { return __WEBPACK_IMPORTED_MODULE_2__components_completer_list_item_cmp__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_completer_service__ = __webpack_require__(56);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CompleterService", function() { return __WEBPACK_IMPORTED_MODULE_3__services_completer_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_completer_data_factory__ = __webpack_require__(80);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "localDataFactory", function() { return __WEBPACK_IMPORTED_MODULE_4__services_completer_data_factory__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LocalDataFactoryProvider", function() { return __WEBPACK_IMPORTED_MODULE_4__services_completer_data_factory__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "remoteDataFactory", function() { return __WEBPACK_IMPORTED_MODULE_4__services_completer_data_factory__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteDataFactoryProvider", function() { return __WEBPACK_IMPORTED_MODULE_4__services_completer_data_factory__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_local_data__ = __webpack_require__(57);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LocalData", function() { return __WEBPACK_IMPORTED_MODULE_5__services_local_data__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_remote_data__ = __webpack_require__(58);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteData", function() { return __WEBPACK_IMPORTED_MODULE_6__services_remote_data__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_completer_base_data__ = __webpack_require__(55);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CompleterBaseData", function() { return __WEBPACK_IMPORTED_MODULE_7__services_completer_base_data__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_ctr_completer__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CtrCompleter", function() { return __WEBPACK_IMPORTED_MODULE_8__directives_ctr_completer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_ctr_dropdown__ = __webpack_require__(54);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CtrDropdown", function() { return __WEBPACK_IMPORTED_MODULE_9__directives_ctr_dropdown__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_ctr_input__ = __webpack_require__(77);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CtrInput", function() { return __WEBPACK_IMPORTED_MODULE_10__directives_ctr_input__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives_ctr_list__ = __webpack_require__(78);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CtrList", function() { return __WEBPACK_IMPORTED_MODULE_11__directives_ctr_list__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directives_ctr_row__ = __webpack_require__(79);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CtrRow", function() { return __WEBPACK_IMPORTED_MODULE_12__directives_ctr_row__["a"]; });















/***/ }),

/***/ 715:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(71);


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleterCmp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_ctr_completer__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_completer_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__globals__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var noop = function () { };
var COMPLETER_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return CompleterCmp; }),
    multi: true
};
var CompleterCmp = (function () {
    function CompleterCmp(completerService) {
        this.completerService = completerService;
        this.inputName = "";
        this.inputId = "";
        this.pause = __WEBPACK_IMPORTED_MODULE_4__globals__["b" /* PAUSE */];
        this.minSearchLength = __WEBPACK_IMPORTED_MODULE_4__globals__["a" /* MIN_SEARCH_LENGTH */];
        this.maxChars = __WEBPACK_IMPORTED_MODULE_4__globals__["e" /* MAX_CHARS */];
        this.overrideSuggested = false;
        this.clearSelected = false;
        this.clearUnselected = false;
        this.fillHighlighted = true;
        this.placeholder = "";
        this.autoMatch = false;
        this.disableInput = false;
        this.autofocus = false;
        this.openOnFocus = false;
        this.autoHighlight = false;
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.highlighted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.blur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.focusEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.opened = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.keyup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.keydown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.searchStr = "";
        this.control = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]("");
        this.displaySearching = true;
        this.displayNoResults = true;
        this._onTouchedCallback = noop;
        this._onChangeCallback = noop;
        this._focus = false;
        this._open = false;
        this._textNoResults = __WEBPACK_IMPORTED_MODULE_4__globals__["f" /* TEXT_NO_RESULTS */];
        this._textSearching = __WEBPACK_IMPORTED_MODULE_4__globals__["g" /* TEXT_SEARCHING */];
    }
    Object.defineProperty(CompleterCmp.prototype, "value", {
        get: function () { return this.searchStr; },
        set: function (v) {
            if (v !== this.searchStr) {
                this.searchStr = v;
            }
            // Propagate the change in any case
            this._onChangeCallback(v);
        },
        enumerable: true,
        configurable: true
    });
    ;
    CompleterCmp.prototype.ngAfterViewInit = function () {
        if (this.autofocus) {
            this._focus = true;
        }
    };
    CompleterCmp.prototype.ngAfterViewChecked = function () {
        if (this._focus) {
            this.ctrInput.nativeElement.focus();
            this._focus = false;
        }
    };
    CompleterCmp.prototype.onTouched = function () {
        this._onTouchedCallback();
    };
    CompleterCmp.prototype.writeValue = function (value) {
        this.searchStr = value;
    };
    CompleterCmp.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    CompleterCmp.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    Object.defineProperty(CompleterCmp.prototype, "datasource", {
        set: function (source) {
            if (source) {
                if (source instanceof Array) {
                    this.dataService = this.completerService.local(source);
                }
                else if (typeof (source) === "string") {
                    this.dataService = this.completerService.remote(source);
                }
                else {
                    this.dataService = source;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleterCmp.prototype, "textNoResults", {
        set: function (text) {
            if (this._textNoResults != text) {
                this._textNoResults = text;
                this.displayNoResults = this._textNoResults && this._textNoResults !== "false";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleterCmp.prototype, "textSearching", {
        set: function (text) {
            if (this._textSearching != text) {
                this._textSearching = text;
                this.displaySearching = this._textSearching && this._textSearching !== "false";
            }
        },
        enumerable: true,
        configurable: true
    });
    CompleterCmp.prototype.ngOnInit = function () {
        var _this = this;
        this.completer.selected.subscribe(function (item) {
            _this.selected.emit(item);
        });
        this.completer.highlighted.subscribe(function (item) {
            _this.highlighted.emit(item);
        });
        this.completer.opened.subscribe(function (isOpen) {
            _this._open = isOpen;
            _this.opened.emit(isOpen);
        });
    };
    CompleterCmp.prototype.onBlur = function () {
        this.blur.emit();
        this.onTouched();
    };
    CompleterCmp.prototype.onFocus = function () {
        this.focusEvent.emit();
        this.onTouched();
    };
    CompleterCmp.prototype.onKeyup = function (event) {
        this.keyup.emit(event);
    };
    CompleterCmp.prototype.onKeydown = function (event) {
        this.keydown.emit(event);
    };
    CompleterCmp.prototype.onChange = function (value) {
        this.value = value;
    };
    CompleterCmp.prototype.open = function () {
        this.completer.open();
    };
    CompleterCmp.prototype.close = function () {
        this.completer.clear();
    };
    CompleterCmp.prototype.focus = function () {
        if (this.ctrInput) {
            this.ctrInput.nativeElement.focus();
        }
        else {
            this._focus = true;
        }
    };
    CompleterCmp.prototype.isOpen = function () {
        return this._open;
    };
    return CompleterCmp;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "dataService", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "inputName", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CompleterCmp.prototype, "inputId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "pause", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "minSearchLength", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "maxChars", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "overrideSuggested", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "clearSelected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "clearUnselected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "fillHighlighted", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "placeholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CompleterCmp.prototype, "matchClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], CompleterCmp.prototype, "fieldTabindex", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "autoMatch", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "disableInput", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CompleterCmp.prototype, "inputClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "autofocus", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "openOnFocus", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "initialValue", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "autoHighlight", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "selected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "highlighted", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "blur", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])("focus"),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "focusEvent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "opened", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], CompleterCmp.prototype, "keyup", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], CompleterCmp.prototype, "keydown", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__directives_ctr_completer__["a" /* CtrCompleter */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__directives_ctr_completer__["a" /* CtrCompleter */])
], CompleterCmp.prototype, "completer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("ctrInput"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], CompleterCmp.prototype, "ctrInput", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], CompleterCmp.prototype, "datasource", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], CompleterCmp.prototype, "textNoResults", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], CompleterCmp.prototype, "textSearching", null);
CompleterCmp = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "ng2-completer",
        template: "\n        <div class=\"completer-holder\" ctrCompleter>\n            <input #ctrInput [attr.id]=\"inputId.length > 0 ? inputId : null\" type=\"search\" class=\"completer-input\" ctrInput [ngClass]=\"inputClass\" \n                [(ngModel)]=\"searchStr\" (ngModelChange)=\"onChange($event)\" [attr.name]=\"inputName\" [placeholder]=\"placeholder\"\n                [attr.maxlength]=\"maxChars\" [tabindex]=\"fieldTabindex\" [disabled]=\"disableInput\" \n                [clearSelected]=\"clearSelected\" [clearUnselected]=\"clearUnselected\"\n                [overrideSuggested]=\"overrideSuggested\" [openOnFocus]=\"openOnFocus\" [fillHighlighted]=\"fillHighlighted\" \n                (blur)=\"onBlur()\" (focus)=\"onFocus()\" (keyup)=\"onKeyup($event)\" (keydown)=\"onKeydown($event)\"\n                autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" />\n\n            <div class=\"completer-dropdown-holder\"\n                *ctrList=\"dataService;\n                    minSearchLength: minSearchLength;\n                    pause: pause;\n                    autoMatch: autoMatch;\n                    initialValue: initialValue;\n                    autoHighlight: autoHighlight;\n                    let items = results;\n                    let searchActive = searching;\n                    let isInitialized = searchInitialized;\n                    let isOpen = isOpen;\">\n                <div class=\"completer-dropdown\" ctrDropdown *ngIf=\"isInitialized && isOpen && ((items.length > 0 || displayNoResults) || (searchActive && displaySearching))\">\n                    <div *ngIf=\"searchActive && displaySearching\" class=\"completer-searching\">{{_textSearching}}</div>\n                    <div *ngIf=\"!searchActive && (!items || items.length === 0)\" class=\"completer-no-results\">{{_textNoResults}}</div>\n                    <div class=\"completer-row-wrapper\" *ngFor=\"let item of items; let rowIndex=index\">\n                        <div class=\"completer-row\" [ctrRow]=\"rowIndex\" [dataItem]=\"item\">\n                            <div *ngIf=\"item.image || item.image === ''\" class=\"completer-image-holder\">\n                                <img *ngIf=\"item.image != ''\" src=\"{{item.image}}\" class=\"completer-image\" />\n                                <div *ngIf=\"item.image === ''\" class=\"completer-image-default\"></div>\n                            </div>\n                            <div class=\"completer-item-text\" [ngClass]=\"{'completer-item-text-image': item.image || item.image === '' }\">\n                                <completer-list-item class=\"completer-title\" [text]=\"item.title\" [matchClass]=\"matchClass\" [searchStr]=\"searchStr\" [type]=\"'title'\"></completer-list-item>\n                                <completer-list-item *ngIf=\"item.description && item.description != ''\" class=\"completer-description\" [text]=\"item.description\"\n                                    [matchClass]=\"matchClass\" [searchStr]=\"searchStr\" [type]=\"'description'\">\n                                </completer-list-item>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
        styles: ["\n    .completer-dropdown {\n        border-color: #ececec;\n        border-width: 1px;\n        border-style: solid;\n        border-radius: 2px;\n        width: 250px;\n        padding: 6px;\n        cursor: pointer;\n        z-index: 9999;\n        position: absolute;\n        margin-top: -6px;\n        background-color: #ffffff;\n    }\n\n    .completer-row {\n        padding: 5px;\n        color: #000000;\n        margin-bottom: 4px;\n        clear: both;\n        display: inline-block;\n        width: 103%;\n    }\n\n    .completer-selected-row {\n        background-color: lightblue;\n        color: #ffffff;\n    }\n\n    .completer-description {\n        font-size: 14px;\n    }\n\n    .completer-image-default {\n        width: 16px; \n        height: 16px;\n        background-image: url(\"demo/res/img/default.png\");\n    }\n\n    .completer-image-holder {\n        float: left;\n        width: 10%;\n    }\n    .completer-item-text-image {\n        float: right;\n        width: 90%;\n    }\n    "],
        providers: [COMPLETER_CONTROL_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_completer_service__["a" /* CompleterService */]])
], CompleterCmp);



/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleterListItemCmp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompleterListItemCmp = (function () {
    function CompleterListItemCmp() {
        this.parts = [];
    }
    CompleterListItemCmp.prototype.ngOnInit = function () {
        if (!this.searchStr) {
            this.parts.push({ isMatch: false, text: this.text });
            return;
        }
        var matchStr = this.text.toLowerCase();
        var matchPos = matchStr.indexOf(this.searchStr.toLowerCase());
        var startIndex = 0;
        while (matchPos >= 0) {
            var matchText = this.text.slice(matchPos, matchPos + this.searchStr.length);
            if (matchPos === 0) {
                this.parts.push({ isMatch: true, text: matchText });
                startIndex += this.searchStr.length;
            }
            else if (matchPos > 0) {
                var matchPart = this.text.slice(startIndex, matchPos);
                this.parts.push({ isMatch: false, text: matchPart });
                this.parts.push({ isMatch: true, text: matchText });
                startIndex += this.searchStr.length + matchPart.length;
            }
            matchPos = matchStr.indexOf(this.searchStr.toLowerCase(), startIndex);
        }
        if (startIndex < this.text.length) {
            this.parts.push({ isMatch: false, text: this.text.slice(startIndex, this.text.length) });
        }
    };
    return CompleterListItemCmp;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CompleterListItemCmp.prototype, "text", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CompleterListItemCmp.prototype, "searchStr", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CompleterListItemCmp.prototype, "matchClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CompleterListItemCmp.prototype, "type", void 0);
CompleterListItemCmp = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "completer-list-item",
        template: "\n    <span class=\"completer-list-item-holder\" [ngClass]=\"{'completer-title': type === 'title', 'completer-description': type === 'description'}\" >\n        <span class=\"completer-list-item\" *ngFor=\"let part of parts\" [ngClass]=\"part.isMatch ? matchClass : null\">{{part.text}}</span>\n    </span>\n    "
    })
], CompleterListItemCmp);



/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CtrInput; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ctr_completer__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__globals__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





// keyboard events
var KEY_DW = 40;
var KEY_RT = 39;
var KEY_UP = 38;
var KEY_LF = 37;
var KEY_ES = 27;
var KEY_EN = 13;
var KEY_TAB = 9;
var CtrInput = (function () {
    function CtrInput(completer, ngModel, el) {
        var _this = this;
        this.completer = completer;
        this.ngModel = ngModel;
        this.el = el;
        this.clearSelected = false;
        this.clearUnselected = false;
        this.overrideSuggested = false;
        this.fillHighlighted = true;
        this.openOnFocus = false;
        this.ngModelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._searchStr = "";
        this._displayStr = "";
        this.blurTimer = null;
        this.completer.selected.subscribe(function (item) {
            if (!item) {
                return;
            }
            if (_this.clearSelected) {
                _this.searchStr = "";
            }
            else {
                _this.searchStr = item.title;
            }
            _this.ngModelChange.emit(_this.searchStr);
        });
        this.completer.highlighted.subscribe(function (item) {
            if (_this.fillHighlighted) {
                if (item) {
                    _this._displayStr = item.title;
                    _this.ngModelChange.emit(item.title);
                }
                else {
                    _this._displayStr = _this.searchStr;
                    _this.ngModelChange.emit(_this.searchStr);
                }
            }
        });
        this.ngModel.valueChanges.subscribe(function (value) {
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__globals__["c" /* isNil */])(value) && _this._displayStr !== value) {
                if (_this.searchStr !== value) {
                    _this.completer.search(value);
                }
                _this.searchStr = value;
            }
        });
    }
    CtrInput.prototype.keyupHandler = function (event) {
        if (event.keyCode === KEY_LF || event.keyCode === KEY_RT || event.keyCode === KEY_TAB) {
            // do nothing
            return;
        }
        if (event.keyCode === KEY_UP || event.keyCode === KEY_EN) {
            event.preventDefault();
        }
        else if (event.keyCode === KEY_DW) {
            event.preventDefault();
            this.completer.search(this.searchStr);
        }
        else if (event.keyCode === KEY_ES) {
            this.restoreSearchValue();
            this.completer.clear();
        }
        else {
            if (this.searchStr) {
                this.completer.open();
            }
        }
    };
    CtrInput.prototype.keydownHandler = function (event) {
        if (event.keyCode === KEY_EN) {
            if (this.completer.hasHighlighted()) {
                event.preventDefault();
            }
            this.handleSelection();
        }
        else if (event.keyCode === KEY_DW) {
            event.preventDefault();
            this.completer.open();
            this.completer.nextRow();
        }
        else if (event.keyCode === KEY_UP) {
            event.preventDefault();
            this.completer.prevRow();
        }
        else if (event.keyCode === KEY_TAB) {
            this.handleSelection();
        }
        else if (event.keyCode === KEY_ES) {
            // This is very specific to IE10/11 #272
            // without this, IE clears the input text
            event.preventDefault();
        }
    };
    CtrInput.prototype.onBlur = function (event) {
        var _this = this;
        // Check if we need to cancel Blur for IE
        if (this.completer.isCancelBlur()) {
            setTimeout(function () {
                // get the focus back
                _this.el.nativeElement.focus();
            }, 0);
            return;
        }
        this.blurTimer = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].timer(200).subscribe(function () {
            _this.blurTimer.unsubscribe();
            _this.blurTimer = null;
            if (_this.overrideSuggested) {
                _this.completer.onSelected({ title: _this.searchStr, originalObject: null });
            }
            else {
                if (_this.clearUnselected && !_this.completer.hasSelected) {
                    _this.searchStr = "";
                    _this.ngModelChange.emit(_this.searchStr);
                }
                else {
                    _this.restoreSearchValue();
                }
            }
            _this.completer.clear();
        });
    };
    CtrInput.prototype.onfocus = function () {
        if (this.blurTimer) {
            this.blurTimer.unsubscribe();
            this.blurTimer = null;
        }
        if (this.openOnFocus) {
            this.completer.open();
        }
    };
    Object.defineProperty(CtrInput.prototype, "searchStr", {
        get: function () {
            return this._searchStr;
        },
        set: function (term) {
            this._searchStr = term;
            this._displayStr = term;
        },
        enumerable: true,
        configurable: true
    });
    CtrInput.prototype.handleSelection = function () {
        if (this.completer.hasHighlighted()) {
            this._searchStr = "";
            this.completer.selectCurrent();
        }
        else if (this.overrideSuggested) {
            this.completer.onSelected({ title: this.searchStr, originalObject: null });
        }
        else {
            this.completer.clear();
        }
    };
    CtrInput.prototype.restoreSearchValue = function () {
        if (this.fillHighlighted) {
            if (this._displayStr != this.searchStr) {
                this._displayStr = this.searchStr;
                this.ngModelChange.emit(this.searchStr);
            }
        }
    };
    return CtrInput;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("clearSelected"),
    __metadata("design:type", Object)
], CtrInput.prototype, "clearSelected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("clearUnselected"),
    __metadata("design:type", Object)
], CtrInput.prototype, "clearUnselected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("overrideSuggested"),
    __metadata("design:type", Object)
], CtrInput.prototype, "overrideSuggested", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("fillHighlighted"),
    __metadata("design:type", Object)
], CtrInput.prototype, "fillHighlighted", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("openOnFocus"),
    __metadata("design:type", Object)
], CtrInput.prototype, "openOnFocus", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], CtrInput.prototype, "ngModelChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("keyup", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CtrInput.prototype, "keyupHandler", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("keydown", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CtrInput.prototype, "keydownHandler", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("blur", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CtrInput.prototype, "onBlur", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("focus", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CtrInput.prototype, "onfocus", null);
CtrInput = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: "[ctrInput]",
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ctr_completer__["a" /* CtrCompleter */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgModel"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], CtrInput);



/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CtrListContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CtrList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_timer__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ctr_completer__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__globals__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var CtrListContext = (function () {
    function CtrListContext(results, searching, searchInitialized, isOpen) {
        this.results = results;
        this.searching = searching;
        this.searchInitialized = searchInitialized;
        this.isOpen = isOpen;
    }
    return CtrListContext;
}());

var CtrList = (function () {
    function CtrList(completer, templateRef, viewContainer, cd) {
        this.completer = completer;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.ctrListMinSearchLength = __WEBPACK_IMPORTED_MODULE_4__globals__["a" /* MIN_SEARCH_LENGTH */];
        this.ctrListPause = __WEBPACK_IMPORTED_MODULE_4__globals__["b" /* PAUSE */];
        this.ctrListAutoMatch = false;
        this.ctrListAutoHighlight = false;
        // private results: CompleterItem[] = [];
        this.term = null;
        // private searching = false;
        this.searchTimer = null;
        this.clearTimer = null;
        this.ctx = new CtrListContext([], false, false, false);
        this._initialValue = null;
    }
    CtrList.prototype.ngOnInit = function () {
        this.completer.registerList(this);
        this.viewContainer.createEmbeddedView(this.templateRef, new CtrListContext([], false, false, false));
    };
    Object.defineProperty(CtrList.prototype, "dataService", {
        set: function (newService) {
            var _this = this;
            this._dataService = newService;
            if (this._dataService) {
                this._dataService
                    .catch(function (err) { return _this.handleError(err); })
                    .subscribe(function (results) {
                    _this.ctx.searchInitialized = true;
                    _this.ctx.searching = false;
                    _this.ctx.results = results;
                    if (_this.ctrListAutoMatch && results.length === 1 && results[0].title && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__globals__["c" /* isNil */])(_this.term) &&
                        results[0].title.toLocaleLowerCase() === _this.term.toLocaleLowerCase()) {
                        // Do automatch
                        _this.completer.onSelected(results[0]);
                    }
                    if (_this._initialValue) {
                        _this.initialValue = _this._initialValue;
                        _this._initialValue = null;
                    }
                    if (_this.ctrListAutoHighlight) {
                        _this.completer.autoHighlightIndex = _this.getBestMatchIndex();
                    }
                    _this.refreshTemplate();
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CtrList.prototype, "initialValue", {
        set: function (value) {
            var _this = this;
            if (this._dataService && typeof this._dataService.convertToItem === "function") {
                setTimeout(function () {
                    var initialItem = _this._dataService.convertToItem(value);
                    if (initialItem) {
                        _this.completer.onSelected(initialItem, false);
                    }
                });
            }
            else if (!this._dataService) {
                this._initialValue = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    CtrList.prototype.search = function (term) {
        var _this = this;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__globals__["c" /* isNil */])(term) && term.length >= this.ctrListMinSearchLength && this.term !== term) {
            if (this.searchTimer) {
                this.searchTimer.unsubscribe();
                this.searchTimer = null;
            }
            if (!this.ctx.searching) {
                this.ctx.results = [];
                this.ctx.searching = true;
                this.ctx.searchInitialized = true;
                this.refreshTemplate();
            }
            if (this.clearTimer) {
                this.clearTimer.unsubscribe();
            }
            this.searchTimer = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].timer(this.ctrListPause).subscribe(function () {
                _this.searchTimerComplete(term);
            });
        }
        else if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__globals__["c" /* isNil */])(term) && term.length < this.ctrListMinSearchLength) {
            this.clear();
        }
    };
    CtrList.prototype.clear = function () {
        var _this = this;
        if (this.searchTimer) {
            this.searchTimer.unsubscribe();
        }
        this.clearTimer = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].timer(__WEBPACK_IMPORTED_MODULE_4__globals__["d" /* CLEAR_TIMEOUT */]).subscribe(function () {
            _this._clear();
        });
    };
    CtrList.prototype.open = function () {
        if (!this.ctx.searchInitialized) {
            this.search("");
        }
        this.refreshTemplate();
    };
    CtrList.prototype.isOpen = function (open) {
        this.ctx.isOpen = open;
    };
    CtrList.prototype._clear = function () {
        if (this.searchTimer) {
            this.searchTimer.unsubscribe();
            this.searchTimer = null;
        }
        if (this.dataService) {
            this.dataService.cancel();
        }
        this.viewContainer.clear();
    };
    CtrList.prototype.searchTimerComplete = function (term) {
        // Begin the search
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__globals__["c" /* isNil */])(term) || term.length < this.ctrListMinSearchLength) {
            this.ctx.searching = false;
            return;
        }
        this.term = term;
        this._dataService.search(term);
    };
    CtrList.prototype.handleError = function (error) {
        this.ctx.searching = false;
        var errMsg = "search error";
        if (error) {
            errMsg = (error.message) ? error.message :
                error.status ? error.status + " - " + error.statusText : "Server error";
        }
        if (console && console.error) {
            console.error(errMsg); // log to console
        }
        this.refreshTemplate();
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    CtrList.prototype.refreshTemplate = function () {
        // Recreate the template
        this.viewContainer.clear();
        if (this.ctx.results && this.ctx.isOpen) {
            this.viewContainer.createEmbeddedView(this.templateRef, this.ctx);
        }
        this.cd.markForCheck();
    };
    CtrList.prototype.getBestMatchIndex = function () {
        var _this = this;
        if (!this.ctx.results) {
            return null;
        }
        // First try to find the exact term
        var bestMatch = this.ctx.results.findIndex(function (item) { return item.title.toLowerCase() === _this.term.toLocaleLowerCase(); });
        // If not try to find the first item that starts with the term
        if (bestMatch < 0) {
            bestMatch = this.ctx.results.findIndex(function (item) { return item.title.toLowerCase().startsWith(_this.term.toLocaleLowerCase()); });
        }
        // If not try to find the first item that includes the term
        if (bestMatch < 0) {
            bestMatch = this.ctx.results.findIndex(function (item) { return item.title.toLowerCase().includes(_this.term.toLocaleLowerCase()); });
        }
        return bestMatch < 0 ? null : bestMatch;
    };
    return CtrList;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CtrList.prototype, "ctrListMinSearchLength", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CtrList.prototype, "ctrListPause", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CtrList.prototype, "ctrListAutoMatch", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CtrList.prototype, "ctrListAutoHighlight", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])("ctrList"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], CtrList.prototype, "dataService", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])("ctrListInitialValue"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], CtrList.prototype, "initialValue", null);
CtrList = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: "[ctrList]",
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Host"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ctr_completer__["a" /* CtrCompleter */],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]])
], CtrList);



/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CtrRow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ctr_dropdown__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var CtrRow = (function () {
    function CtrRow(el, renderer, dropdown) {
        this.el = el;
        this.renderer = renderer;
        this.dropdown = dropdown;
        this.selected = false;
    }
    CtrRow.prototype.ngOnInit = function () {
        this.dropdown.registerRow(new __WEBPACK_IMPORTED_MODULE_1__ctr_dropdown__["a" /* CtrRowItem */](this, this._rowIndex));
    };
    Object.defineProperty(CtrRow.prototype, "ctrRow", {
        set: function (index) {
            this._rowIndex = index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CtrRow.prototype, "dataItem", {
        set: function (item) {
            this._item = item;
        },
        enumerable: true,
        configurable: true
    });
    CtrRow.prototype.onClick = function (event) {
        this.dropdown.onSelected(this._item);
    };
    CtrRow.prototype.onMouseEnter = function (event) {
        this.dropdown.highlightRow(this._rowIndex);
    };
    CtrRow.prototype.setHighlighted = function (selected) {
        this.selected = selected;
        this.renderer.setElementClass(this.el.nativeElement, "completer-selected-row", this.selected);
    };
    CtrRow.prototype.getNativeElement = function () {
        return this.el.nativeElement;
    };
    CtrRow.prototype.getDataItem = function () {
        return this._item;
    };
    return CtrRow;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], CtrRow.prototype, "ctrRow", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], CtrRow.prototype, "dataItem", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("click", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CtrRow.prototype, "onClick", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("mouseenter", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CtrRow.prototype, "onMouseEnter", null);
CtrRow = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: "[ctrRow]",
    }),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_1__ctr_dropdown__["b" /* CtrDropdown */]])
], CtrRow);



/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = localDataFactory;
/* harmony export (immutable) */ __webpack_exports__["d"] = remoteDataFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalDataFactoryProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RemoteDataFactoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_data__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__remote_data__ = __webpack_require__(58);



function localDataFactory() {
    return function () {
        return new __WEBPACK_IMPORTED_MODULE_1__local_data__["a" /* LocalData */]();
    };
}
function remoteDataFactory(http) {
    return function () {
        return new __WEBPACK_IMPORTED_MODULE_2__remote_data__["a" /* RemoteData */](http);
    };
}
var LocalDataFactoryProvider = { provide: __WEBPACK_IMPORTED_MODULE_1__local_data__["a" /* LocalData */], useFactory: localDataFactory };
var RemoteDataFactoryProvider = { provide: __WEBPACK_IMPORTED_MODULE_2__remote_data__["a" /* RemoteData */], useFactory: remoteDataFactory, deps: [__WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"]] };


/***/ })

},[715]);