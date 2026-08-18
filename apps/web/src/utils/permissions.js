import { USER_ROLES } from "./constants";

export function canManageDeployments(role) {
  return [
    USER_ROLES.OWNER,
    USER_ROLES.ADMIN,
  ].includes(role);
}

export function canExecuteAgents(role) {
  return [
    USER_ROLES.OWNER,
    USER_ROLES.ADMIN,
    USER_ROLES.DEVELOPER,
  ].includes(role);
}

export function isReadOnly(role) {
  return role === USER_ROLES.VIEWER;
}