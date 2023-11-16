import { User } from "./User";

export interface Reply {
  id: string;
  author: User;
  content: string;
  likes: number;
  createdAt: string;
}
