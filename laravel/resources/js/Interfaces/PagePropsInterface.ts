export interface PagePropsInterface {
  errors?: Record<string, string[]>;
  flash?: {
    message?: string;
  };
  auth?: {
    user: {
      id: number;
      name: string;
      email: string;
    };
  };
}