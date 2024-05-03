export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  calories: number;
  proteins: number;
  fat: number;
  carbohydrates: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  count:number;
}

export type TIngredientConstructor = TIngredient & {
  uniqId: string;
}

export type TString = {
  [name: string]: string;
}

export type TIngredientType = {
  [key: string]: {
    type: 'bun' | 'sauce' | 'main' ;
    title: 'Булки' | 'Соусы' | 'Начинки';
  }
}

export type TServerResponse<T> = {
  success: boolean;
} & T;

export type TRefreshTokenResponse = TServerResponse<{
  refreshToken: string;
  accessToken: string;
}>

export type TUserResponse = TServerResponse<{
  name: string;
  email: string;
}>

export type TOrderNumber = {
  order: { number: number };
};

export type TProfileForm = {
  name: string;
  email: string;
  password: string;
}

export type TRegisterForm = Pick<TProfileForm, 'name' | 'email' | 'password'>
export type TLoginForm = Pick<TProfileForm, 'email' | 'password'>
export type TForgotPasswordForm = Pick<TProfileForm, 'email'>
export type TResetPasswordForm = Pick<TProfileForm, 'password'> & { token: string };


