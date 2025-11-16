type User = {
  id: string;
  email: string;
  phone?: string;
  name?: string;
  image?: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
};
