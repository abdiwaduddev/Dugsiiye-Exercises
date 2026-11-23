"use strict";
var UserRole;
(function (UserRole) {
    UserRole["SuperAdmin"] = "superadmin";
    UserRole["Moderator"] = "moderator";
    UserRole["Viewer"] = "viewer";
})(UserRole || (UserRole = {}));
function canEdit(role) {
    return role !== UserRole.Viewer;
}
// Calling the function with each role
console.log(canEdit(UserRole.SuperAdmin)); // true
console.log(canEdit(UserRole.Moderator)); // true
console.log(canEdit(UserRole.Viewer)); // false
// const button = document.querySelector("button") as HTMLButtonElement;
// button.disabled = true;
