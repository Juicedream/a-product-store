export type ProductTypes = {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  categoryId: string;
  stock: number;
  vendorId: string;
  reviews: ReviewTypes[];
  createdAt: string;
  updatedAt: string;
};

export type ReviewTypes = {
  _id: string;
  productId: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
}

export type FormState = |
{
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  },
  message?: string;
}
| undefined

export type SignInTypes = {
  email: string;
  password: string;
}

export type UserType = {
  _id: string;
  authType: string;
  createdAt: string;
  email: string;
  isVerified: true;
  name: string;
  orders: string[];
  role: 'user' | 'vendor' | 'admin' | 'superadmin';
  updatedAt: string;
}