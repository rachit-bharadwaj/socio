import { ElementType } from "react";

export type NavItem = {
  label: string;
  Icon: ElementType;
  link: string;
};

export type Story = {
  creatorImg: string;
  image: string;
  url: string;
};

export type Post = {
  creatorImg: string;
  creatorName: string;
  timestamp: string;
  text?: string;
  image?: Array<string>;
  likes?: Array<string>;
  comments?: Array<string>;
};

export type Comment = {
  creatorImg: string;
  creatorName: string;
  comment: string;
  timestamp: string;
};

export type SearchFilter = {
  label: string;
};

export type Messages = {
  profileImg: string;
  name: string;
  lastMessage: string;
  timestamp: string;
};

export type Notification = {
  Icon:ElementType;
  message:string;
  timestamp:string;
  
}