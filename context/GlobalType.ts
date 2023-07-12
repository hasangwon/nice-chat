interface GlobalType {
  adminInfo: Partial<UserInfo>;
}

export interface UserInfo {
  title: string;
  name: string;
}

export default GlobalType;
