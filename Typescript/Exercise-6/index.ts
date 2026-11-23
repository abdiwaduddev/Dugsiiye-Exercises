enum UserRole {
  SuperAdmin = "superadmin",
  Moderator = "moderator",
  Viewer = "viewer",
}

function canEdit(role: UserRole): boolean {
  return role !== UserRole.Viewer;
}

// Calling the function with each role
console.log(canEdit(UserRole.SuperAdmin)); // true
console.log(canEdit(UserRole.Moderator));  // true
console.log(canEdit(UserRole.Viewer));     // false

const button = document.querySelector("button") as HTMLButtonElement;

button.disabled = true;