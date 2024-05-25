"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_list = void 0;
var guest_list = ['Ali', 'aman', 'ayan', 'sana', 'saba'];
exports.guest_list = guest_list;
for (var i = 0; i < guest_list.length; i++) {
    console.log('respected sir/madam' + guest_list[i] + ',\we invited you on dinner tomorrow.\nthank tou\n');
}
var not_present = "aman";
var new_guest = "shehnila";
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('respected sir/madam' + guest_list[i] + ',\we invited you on dinner tomorrow.\nthank tou\n');
}
console.log("Mr ".concat(not_present, " will not  come for dinner tomorrow"));
