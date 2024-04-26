"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[12674],{12674:function(e,n,a){var t=a(42489)["default"];Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=void 0,n.numberToLocale=c;var r=t(a(16245)),i={locale:{1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",0:"০"},number:{"১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9","০":"0"}},o={narrow:["খ্রিঃপূঃ","খ্রিঃ"],abbreviated:["খ্রিঃপূর্ব","খ্রিঃ"],wide:["খ্রিস্টপূর্ব","খ্রিস্টাব্দ"]},u={narrow:["১","২","৩","৪"],abbreviated:["১ত্রৈ","২ত্রৈ","৩ত্রৈ","৪ত্রৈ"],wide:["১ম ত্রৈমাসিক","২য় ত্রৈমাসিক","৩য় ত্রৈমাসিক","৪র্থ ত্রৈমাসিক"]},d={narrow:["জানু","ফেব্রু","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্ট","অক্টো","নভে","ডিসে"],abbreviated:["জানু","ফেব্রু","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্ট","অক্টো","নভে","ডিসে"],wide:["জানুয়ারি","ফেব্রুয়ারি","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্টেম্বর","অক্টোবর","নভেম্বর","ডিসেম্বর"]},l={narrow:["র","সো","ম","বু","বৃ","শু","শ"],short:["রবি","সোম","মঙ্গল","বুধ","বৃহ","শুক্র","শনি"],abbreviated:["রবি","সোম","মঙ্গল","বুধ","বৃহ","শুক্র","শনি"],wide:["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার ","শুক্রবার","শনিবার"]},f={narrow:{am:"পূ",pm:"অপ",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"},abbreviated:{am:"পূর্বাহ্ন",pm:"অপরাহ্ন",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"},wide:{am:"পূর্বাহ্ন",pm:"অপরাহ্ন",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"}},m={narrow:{am:"পূ",pm:"অপ",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"},abbreviated:{am:"পূর্বাহ্ন",pm:"অপরাহ্ন",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"},wide:{am:"পূর্বাহ্ন",pm:"অপরাহ্ন",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"}};function g(e,n){if(e>18&&e<=31)return n+"শে";switch(e){case 1:return n+"লা";case 2:case 3:return n+"রা";case 4:return n+"ঠা";default:return n+"ই"}}var v=function(e,n){var a=Number(e),t=c(a),r=null===n||void 0===n?void 0:n.unit;if("date"===r)return g(a,t);if(a>10||0===a)return t+"তম";var i=a%10;switch(i){case 2:case 3:return t+"য়";case 4:return t+"র্থ";case 6:return t+"ষ্ঠ";default:return t+"ম"}};function c(e){return e.toString().replace(/\d/g,(function(e){return i.locale[e]}))}var h={ordinalNumber:v,era:(0,r.default)({values:o,defaultWidth:"wide"}),quarter:(0,r.default)({values:u,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,r.default)({values:d,defaultWidth:"wide"}),day:(0,r.default)({values:l,defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:f,defaultWidth:"wide",formattingValues:m,defaultFormattingWidth:"wide"})},s=h;n["default"]=s}}]);
//# sourceMappingURL=12674.d0afdced.js.map