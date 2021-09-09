export interface UserDetails {
  userId: number;
  name?: string;
}

declare global {
  namespace Express {
    interface Request {
      user: UserDetails;
    }
  }
}
