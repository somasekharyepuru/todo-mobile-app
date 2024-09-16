import { graphql_api } from '../../graphql-api-base';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type AmountsDto = {
  __typename?: 'AmountsDto';
  amount_announced: Scalars['Float']['output'];
  amount_cancelled: Scalars['Float']['output'];
  amount_remaining: Scalars['Float']['output'];
  amount_settled: Scalars['Float']['output'];
  amount_spent: Scalars['Float']['output'];
};

export type CommonResponse = {
  __typename?: 'CommonResponse';
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type CreateCreditTransactionDto = {
  additionalNotes?: InputMaybe<Scalars['String']['input']>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  changeDescription?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  estimatedAmount?: InputMaybe<Scalars['Float']['input']>;
  fundType: FundTypeEnum;
  otherFundType?: InputMaybe<Scalars['String']['input']>;
  paymentMethod?: InputMaybe<PaymentMethodEnum>;
  programId: Scalars['String']['input'];
  status?: InputMaybe<TransactionStatusEnum>;
  transactionDate?: InputMaybe<Scalars['DateTime']['input']>;
  user: Scalars['String']['input'];
};

export type CreateDebitTransactionDto = {
  additionalNotes?: InputMaybe<Scalars['String']['input']>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  changeDescription?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  estimatedAmount?: InputMaybe<Scalars['Float']['input']>;
  otherFundType?: InputMaybe<Scalars['String']['input']>;
  paymentMethod?: InputMaybe<PaymentMethodEnum>;
  programId: Scalars['String']['input'];
  spentOn: Scalars['String']['input'];
  status?: InputMaybe<TransactionStatusEnum>;
  transactionDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateProgramDto = {
  beneficiaries_count?: InputMaybe<Scalars['Float']['input']>;
  budget_allocated?: InputMaybe<Scalars['Float']['input']>;
  end_date: Scalars['DateTime']['input'];
  expenses_incurred?: InputMaybe<Scalars['Float']['input']>;
  leader: Scalars['String']['input'];
  name: Scalars['String']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  start_date: Scalars['DateTime']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  village_name: Scalars['String']['input'];
  volunteers?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export enum FundTypeEnum {
  Amount = 'Amount',
  Other = 'Other'
}

export type GetProgramInput = {
  keyword?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  skip?: InputMaybe<Scalars['Float']['input']>;
};

export type GetTransactionInput = {
  fundType?: InputMaybe<FundTypeEnum>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  paymentMethod?: InputMaybe<PaymentMethodEnum>;
  programId: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Float']['input']>;
  sortOrder?: InputMaybe<SortOrderTransaction>;
  status?: InputMaybe<TransactionStatusEnum>;
  transactionType?: InputMaybe<TransactionTypeEnum>;
};

export type GetUserInput = {
  filter?: InputMaybe<UserFilter>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<UserSortInput>;
};

export type JwtTokenWithUser = {
  __typename?: 'JWTTokenWithUser';
  accessToken: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  expires_at: Scalars['Float']['output'];
  first_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  is_active: Scalars['Boolean']['output'];
  is_profile_updated: Scalars['Boolean']['output'];
  is_verified: Scalars['Boolean']['output'];
  last_name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['Float']['output']>;
  refreshToken: Scalars['String']['output'];
  role: Array<Role>;
  updated_at: Scalars['DateTime']['output'];
};

export type LoginDto = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCreditTransaction: Transaction;
  createDebitTransaction: Transaction;
  createProgram: Program;
  deleteProgram: CommonResponse;
  deleteUser: CommonResponse;
  finishSignUp: JwtTokenWithUser;
  forgotPassword: CommonResponse;
  login: JwtTokenWithUser;
  logout: CommonResponse;
  refreshToken: RefreshTokenResponse;
  register: RegisterUser;
  resendOtp: CommonResponse;
  resetPassword: CommonResponse;
  updateProgram: Program;
  updateTransaction: Transaction;
  updateUser: User;
  verifyOtp: RegisterWithToken;
};


export type MutationCreateCreditTransactionArgs = {
  transaction: CreateCreditTransactionDto;
};


export type MutationCreateDebitTransactionArgs = {
  transaction: CreateDebitTransactionDto;
};


export type MutationCreateProgramArgs = {
  input: CreateProgramDto;
};


export type MutationDeleteProgramArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationFinishSignUpArgs = {
  user: UpdateProfileDto;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  user: LoginDto;
};


export type MutationRefreshTokenArgs = {
  refresh: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  user: RegisterUserDto;
};


export type MutationResendOtpArgs = {
  email: Scalars['String']['input'];
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordDto;
};


export type MutationUpdateProgramArgs = {
  input: UpdateProgramDto;
};


export type MutationUpdateTransactionArgs = {
  transaction: UpdateTransactionDto;
};


export type MutationUpdateUserArgs = {
  user: UpdateUserDto;
};


export type MutationVerifyOtpArgs = {
  input: VerifyOtpDto;
};

export enum Order_By_Enum {
  Ascending = 'ASCENDING',
  Descending = 'DESCENDING'
}

export enum PaymentMethodEnum {
  Bank = 'Bank',
  Card = 'Card',
  Cash = 'Cash',
  Other = 'Other',
  Upi = 'UPI'
}

export type Program = {
  __typename?: 'Program';
  active: Scalars['Boolean']['output'];
  amounts: AmountsDto;
  beneficiaries_count?: Maybe<Scalars['Float']['output']>;
  budget_allocated?: Maybe<Scalars['Float']['output']>;
  created_at: Scalars['DateTime']['output'];
  end_date: Scalars['DateTime']['output'];
  expenses_incurred?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  is_active: Scalars['Boolean']['output'];
  is_deleted: Scalars['Boolean']['output'];
  leader?: Maybe<User>;
  name: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  start_date: Scalars['DateTime']['output'];
  status: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
  village_name: Scalars['String']['output'];
  volunteers: Array<User>;
};

export type ProgramsOutput = {
  __typename?: 'ProgramsOutput';
  data: Array<Program>;
  totalCount: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  getProgramById: Program;
  getPrograms: ProgramsOutput;
  getTransactionById: Transaction;
  getTransactions: TransactionsOutput;
  getUserById: User;
  hb: Scalars['String']['output'];
  me: User;
  users: UsersOutput;
};


export type QueryGetProgramByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetProgramsArgs = {
  input: GetProgramInput;
};


export type QueryGetTransactionByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetTransactionsArgs = {
  input: GetTransactionInput;
};


export type QueryGetUserByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryUsersArgs = {
  input: GetUserInput;
};

export type RefreshTokenResponse = {
  __typename?: 'RefreshTokenResponse';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type RegisterUser = {
  __typename?: 'RegisterUser';
  accessToken?: Maybe<Scalars['String']['output']>;
  is_profile_updated?: Maybe<Scalars['Boolean']['output']>;
  is_verified?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type RegisterUserDto = {
  email: Scalars['String']['input'];
  isVolunteer?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RegisterWithToken = {
  __typename?: 'RegisterWithToken';
  expires_at?: Maybe<Scalars['Float']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
  token: Scalars['String']['output'];
};

export type ResetPasswordDto = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type Role = {
  __typename?: 'Role';
  code: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type SortOrderTransaction = {
  order_by: Order_By_Enum;
  sortOrderKey: Scalars['String']['input'];
};

export type Transaction = {
  __typename?: 'Transaction';
  additionalNotes?: Maybe<Scalars['String']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  changeDescription?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  estimatedAmount?: Maybe<Scalars['Float']['output']>;
  fundType: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  is_deleted: Scalars['Boolean']['output'];
  otherFundType?: Maybe<Scalars['String']['output']>;
  paymentMethod?: Maybe<Scalars['String']['output']>;
  program: Program;
  spentOn?: Maybe<Scalars['String']['output']>;
  status: TransactionStatusEnum;
  transactionDate: Scalars['DateTime']['output'];
  transactionType: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
  user?: Maybe<Scalars['String']['output']>;
};

export enum TransactionStatusEnum {
  Announced = 'Announced',
  Cancelled = 'Cancelled',
  Changed = 'Changed',
  Settled = 'Settled'
}

export enum TransactionTypeEnum {
  Credit = 'Credit',
  Debit = 'Debit'
}

export type TransactionsOutput = {
  __typename?: 'TransactionsOutput';
  data: Array<Transaction>;
  totalCount: Scalars['Float']['output'];
};

export type UpdateProfileDto = {
  first_name: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['Float']['input']>;
  token: Scalars['String']['input'];
};

export type UpdateProgramDto = {
  beneficiaries_count?: InputMaybe<Scalars['Float']['input']>;
  budget_allocated?: InputMaybe<Scalars['Float']['input']>;
  end_date?: InputMaybe<Scalars['DateTime']['input']>;
  expenses_incurred?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['String']['input'];
  leader?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  village_name?: InputMaybe<Scalars['String']['input']>;
  volunteers?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateTransactionDto = {
  additionalNotes?: InputMaybe<Scalars['String']['input']>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  changeDescription?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  estimatedAmount?: InputMaybe<Scalars['Float']['input']>;
  fundType?: InputMaybe<FundTypeEnum>;
  id: Scalars['ID']['input'];
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  otherFundType?: InputMaybe<Scalars['String']['input']>;
  paymentMethod?: InputMaybe<PaymentMethodEnum>;
  status?: InputMaybe<TransactionStatusEnum>;
  transactionDate?: InputMaybe<Scalars['DateTime']['input']>;
  transactionType?: InputMaybe<TransactionTypeEnum>;
  user?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserDto = {
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['Float']['input']>;
};

export type User = {
  __typename?: 'User';
  created_at: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  first_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  is_active: Scalars['Boolean']['output'];
  is_profile_updated: Scalars['Boolean']['output'];
  is_verified: Scalars['Boolean']['output'];
  last_name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['Float']['output']>;
  role: Array<Role>;
  updated_at: Scalars['DateTime']['output'];
};

export type UserFilter = {
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  is_profile_updated?: InputMaybe<Scalars['Boolean']['input']>;
  is_verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum UserSortFieldEnum {
  CreatedAt = 'CreatedAt'
}

export type UserSortInput = {
  sortField: UserSortFieldEnum;
  sortOrder: Order_By_Enum;
};

export type UsersOutput = {
  __typename?: 'UsersOutput';
  data: Array<User>;
  totalCount: Scalars['Float']['output'];
};

export type VerifyOtpDto = {
  email: Scalars['String']['input'];
  otp: Scalars['Float']['input'];
};

export type LoginMutationVariables = Exact<{
  user: LoginDto;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'JWTTokenWithUser', id: string, accessToken: string, refreshToken: string, first_name?: string | null, last_name?: string | null, email: string, phone?: number | null, is_active: boolean, is_verified: boolean, is_profile_updated: boolean, created_at: any, updated_at: any, expires_at: number, role: Array<{ __typename?: 'Role', id: string, name: string, code: string, description?: string | null }> } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'CommonResponse', success: boolean, message?: string | null } };

export type RegisterMutationVariables = Exact<{
  user: RegisterUserDto;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'RegisterUser', message?: string | null, success: boolean, is_verified?: boolean | null, is_profile_updated?: boolean | null, accessToken?: string | null, refreshToken?: string | null } };

export type ResendOtpMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type ResendOtpMutation = { __typename?: 'Mutation', resendOtp: { __typename?: 'CommonResponse', success: boolean, message?: string | null } };

export type VerifyOtpMutationVariables = Exact<{
  input: VerifyOtpDto;
}>;


export type VerifyOtpMutation = { __typename?: 'Mutation', verifyOtp: { __typename?: 'RegisterWithToken', success: boolean, message?: string | null, token: string, expires_at?: number | null } };

export type FinishSignUpMutationVariables = Exact<{
  user: UpdateProfileDto;
}>;


export type FinishSignUpMutation = { __typename?: 'Mutation', finishSignUp: { __typename?: 'JWTTokenWithUser', id: string, first_name?: string | null, last_name?: string | null, email: string, phone?: number | null, is_active: boolean, is_verified: boolean, is_profile_updated: boolean, created_at: any, updated_at: any, accessToken: string, refreshToken: string, role: Array<{ __typename?: 'Role', name: string, id: string, description?: string | null, code: string }> } };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: { __typename?: 'CommonResponse', success: boolean, message?: string | null } };

export type ResetPasswordMutationVariables = Exact<{
  input: ResetPasswordDto;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: { __typename?: 'CommonResponse', success: boolean, message?: string | null } };

export type GetProgramsQueryVariables = Exact<{
  input: GetProgramInput;
}>;


export type GetProgramsQuery = { __typename?: 'Query', getPrograms: { __typename?: 'ProgramsOutput', totalCount: number, data: Array<{ __typename?: 'Program', id: string, name: string, start_date: any, end_date: any, village_name: string, active: boolean, status: string, budget_allocated?: number | null, expenses_incurred?: number | null, beneficiaries_count?: number | null, notes?: string | null, is_active: boolean, is_deleted: boolean, created_at: any, updated_at: any, leader?: { __typename?: 'User', id: string, first_name?: string | null, last_name?: string | null, email: string, phone?: number | null, is_active: boolean, is_verified: boolean, is_profile_updated: boolean, created_at: any, updated_at: any, role: Array<{ __typename?: 'Role', id: string, name: string, code: string, description?: string | null }> } | null, volunteers: Array<{ __typename?: 'User', id: string, first_name?: string | null, last_name?: string | null, email: string, phone?: number | null, is_active: boolean, is_verified: boolean, is_profile_updated: boolean, created_at: any, updated_at: any, role: Array<{ __typename?: 'Role', id: string, name: string, code: string, description?: string | null }> }>, amounts: { __typename?: 'AmountsDto', amount_announced: number, amount_settled: number, amount_spent: number, amount_cancelled: number, amount_remaining: number } }> } };

export type GetProgramByIdQueryVariables = Exact<{
  getProgramByIdId: Scalars['String']['input'];
}>;


export type GetProgramByIdQuery = { __typename?: 'Query', getProgramById: { __typename?: 'Program', id: string, name: string, start_date: any, end_date: any, village_name: string, active: boolean, status: string, budget_allocated?: number | null, expenses_incurred?: number | null, beneficiaries_count?: number | null, notes?: string | null, is_active: boolean, is_deleted: boolean, created_at: any, updated_at: any, leader?: { __typename?: 'User', id: string, first_name?: string | null, last_name?: string | null, email: string, phone?: number | null, is_active: boolean, is_verified: boolean, is_profile_updated: boolean, created_at: any, updated_at: any, role: Array<{ __typename?: 'Role', id: string, name: string, code: string, description?: string | null }> } | null, volunteers: Array<{ __typename?: 'User', id: string, first_name?: string | null, last_name?: string | null, email: string, phone?: number | null, is_active: boolean, is_verified: boolean, is_profile_updated: boolean, created_at: any, updated_at: any, role: Array<{ __typename?: 'Role', id: string, name: string, code: string, description?: string | null }> }>, amounts: { __typename?: 'AmountsDto', amount_announced: number, amount_settled: number, amount_spent: number, amount_cancelled: number, amount_remaining: number } } };

export type CreateProgramMutationVariables = Exact<{
  input: CreateProgramDto;
}>;


export type CreateProgramMutation = { __typename?: 'Mutation', createProgram: { __typename?: 'Program', id: string } };

export type DeleteProgramMutationVariables = Exact<{
  deleteProgramId: Scalars['String']['input'];
}>;


export type DeleteProgramMutation = { __typename?: 'Mutation', deleteProgram: { __typename?: 'CommonResponse', message?: string | null, success: boolean } };

export type UpdateProgramMutationVariables = Exact<{
  input: UpdateProgramDto;
}>;


export type UpdateProgramMutation = { __typename?: 'Mutation', updateProgram: { __typename?: 'Program', id: string, name: string, start_date: any, end_date: any, village_name: string, active: boolean, status: string, budget_allocated?: number | null, expenses_incurred?: number | null, beneficiaries_count?: number | null, notes?: string | null, is_active: boolean, is_deleted: boolean, created_at: any, updated_at: any, leader?: { __typename?: 'User', id: string, first_name?: string | null, last_name?: string | null, email: string, phone?: number | null, is_active: boolean, is_verified: boolean, is_profile_updated: boolean, created_at: any, updated_at: any, role: Array<{ __typename?: 'Role', id: string, name: string, code: string, description?: string | null }> } | null, volunteers: Array<{ __typename?: 'User', id: string, first_name?: string | null, last_name?: string | null, email: string, phone?: number | null, is_active: boolean, is_verified: boolean, is_profile_updated: boolean, created_at: any, updated_at: any, role: Array<{ __typename?: 'Role', id: string, name: string, code: string, description?: string | null }> }>, amounts: { __typename?: 'AmountsDto', amount_announced: number, amount_settled: number, amount_spent: number, amount_cancelled: number, amount_remaining: number } } };

export type CreateCreditTransactionMutationVariables = Exact<{
  transaction: CreateCreditTransactionDto;
}>;


export type CreateCreditTransactionMutation = { __typename?: 'Mutation', createCreditTransaction: { __typename?: 'Transaction', id: string, user?: string | null, spentOn?: string | null, transactionType: string, fundType: string, amount?: number | null, otherFundType?: string | null, estimatedAmount?: number | null, status: TransactionStatusEnum, description?: string | null, changeDescription?: string | null, additionalNotes?: string | null, paymentMethod?: string | null, transactionDate: any, created_at: any, updated_at: any, is_deleted: boolean } };

export type CreateDebitTransactionMutationVariables = Exact<{
  transaction: CreateDebitTransactionDto;
}>;


export type CreateDebitTransactionMutation = { __typename?: 'Mutation', createDebitTransaction: { __typename?: 'Transaction', id: string, user?: string | null, spentOn?: string | null, transactionType: string, fundType: string, amount?: number | null, otherFundType?: string | null, estimatedAmount?: number | null, status: TransactionStatusEnum, description?: string | null, changeDescription?: string | null, additionalNotes?: string | null, paymentMethod?: string | null, transactionDate: any, created_at: any, updated_at: any, is_deleted: boolean } };

export type GetTransactionsQueryVariables = Exact<{
  input: GetTransactionInput;
}>;


export type GetTransactionsQuery = { __typename?: 'Query', getTransactions: { __typename?: 'TransactionsOutput', totalCount: number, data: Array<{ __typename?: 'Transaction', id: string, user?: string | null, spentOn?: string | null, transactionType: string, fundType: string, amount?: number | null, otherFundType?: string | null, estimatedAmount?: number | null, status: TransactionStatusEnum, description?: string | null, changeDescription?: string | null, additionalNotes?: string | null, paymentMethod?: string | null, transactionDate: any, created_at: any, updated_at: any, is_deleted: boolean }> } };

export type GetTransactionByIdQueryVariables = Exact<{
  getTransactionByIdId: Scalars['String']['input'];
}>;


export type GetTransactionByIdQuery = { __typename?: 'Query', getTransactionById: { __typename?: 'Transaction', id: string, user?: string | null, spentOn?: string | null, transactionType: string, fundType: string, amount?: number | null, otherFundType?: string | null, estimatedAmount?: number | null, status: TransactionStatusEnum, description?: string | null, changeDescription?: string | null, additionalNotes?: string | null, paymentMethod?: string | null, transactionDate: any, created_at: any, updated_at: any, is_deleted: boolean } };

export type UpdateTransactionMutationVariables = Exact<{
  transaction: UpdateTransactionDto;
}>;


export type UpdateTransactionMutation = { __typename?: 'Mutation', updateTransaction: { __typename?: 'Transaction', id: string, user?: string | null, spentOn?: string | null, transactionType: string, fundType: string, amount?: number | null, otherFundType?: string | null, estimatedAmount?: number | null, status: TransactionStatusEnum, description?: string | null, changeDescription?: string | null, additionalNotes?: string | null, paymentMethod?: string | null, transactionDate: any, created_at: any, updated_at: any } };

export type UsersQueryVariables = Exact<{
  input: GetUserInput;
}>;


export type UsersQuery = { __typename?: 'Query', users: { __typename?: 'UsersOutput', totalCount: number, data: Array<{ __typename?: 'User', id: string, first_name?: string | null, last_name?: string | null, email: string, phone?: number | null, is_active: boolean, is_verified: boolean, is_profile_updated: boolean, created_at: any, updated_at: any, role: Array<{ __typename?: 'Role', id: string, name: string, code: string, description?: string | null }> }> } };

export type UpdateUserMutationVariables = Exact<{
  user: UpdateUserDto;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, first_name?: string | null, last_name?: string | null, email: string, phone?: number | null, is_active: boolean, is_verified: boolean, is_profile_updated: boolean, created_at: any, updated_at: any, role: Array<{ __typename?: 'Role', id: string, name: string, code: string, description?: string | null }> } };


export const LoginDocument = `
    mutation Login($user: LoginDto!) {
  login(user: $user) {
    id
    accessToken
    refreshToken
    first_name
    last_name
    email
    phone
    is_active
    is_verified
    is_profile_updated
    role {
      id
      name
      code
      description
    }
    created_at
    updated_at
    expires_at
  }
}
    `;
export const LogoutDocument = `
    mutation Logout {
  logout {
    success
    message
  }
}
    `;
export const RegisterDocument = `
    mutation Register($user: RegisterUserDto!) {
  register(user: $user) {
    message
    success
    is_verified
    is_profile_updated
    accessToken
    refreshToken
  }
}
    `;
export const ResendOtpDocument = `
    mutation ResendOtp($email: String!) {
  resendOtp(email: $email) {
    success
    message
  }
}
    `;
export const VerifyOtpDocument = `
    mutation VerifyOtp($input: VerifyOtpDTO!) {
  verifyOtp(input: $input) {
    success
    message
    token
    expires_at
  }
}
    `;
export const FinishSignUpDocument = `
    mutation FinishSignUp($user: UpdateProfileDto!) {
  finishSignUp(user: $user) {
    id
    first_name
    last_name
    email
    phone
    is_active
    is_verified
    is_profile_updated
    role {
      name
      id
      description
      code
    }
    created_at
    updated_at
    accessToken
    refreshToken
  }
}
    `;
export const ForgotPasswordDocument = `
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email) {
    success
    message
  }
}
    `;
export const ResetPasswordDocument = `
    mutation ResetPassword($input: ResetPasswordDto!) {
  resetPassword(input: $input) {
    success
    message
  }
}
    `;
export const GetProgramsDocument = `
    query GetPrograms($input: GetProgramInput!) {
  getPrograms(input: $input) {
    data {
      id
      name
      start_date
      end_date
      village_name
      active
      status
      leader {
        id
        first_name
        last_name
        email
        phone
        is_active
        is_verified
        is_profile_updated
        role {
          id
          name
          code
          description
        }
        created_at
        updated_at
      }
      volunteers {
        id
        first_name
        last_name
        email
        phone
        is_active
        is_verified
        is_profile_updated
        created_at
        updated_at
        role {
          id
          name
          code
          description
        }
      }
      budget_allocated
      expenses_incurred
      beneficiaries_count
      notes
      is_active
      is_deleted
      created_at
      updated_at
      amounts {
        amount_announced
        amount_settled
        amount_spent
        amount_cancelled
        amount_remaining
      }
    }
    totalCount
  }
}
    `;
export const GetProgramByIdDocument = `
    query GetProgramById($getProgramByIdId: String!) {
  getProgramById(id: $getProgramByIdId) {
    id
    name
    start_date
    end_date
    village_name
    active
    status
    leader {
      id
      first_name
      last_name
      email
      phone
      is_active
      is_verified
      is_profile_updated
      role {
        id
        name
        code
        description
      }
      created_at
      updated_at
    }
    volunteers {
      id
      first_name
      last_name
      email
      phone
      is_active
      is_verified
      is_profile_updated
      created_at
      updated_at
      role {
        id
        name
        code
        description
      }
    }
    budget_allocated
    expenses_incurred
    beneficiaries_count
    notes
    is_active
    is_deleted
    created_at
    updated_at
    amounts {
      amount_announced
      amount_settled
      amount_spent
      amount_cancelled
      amount_remaining
    }
  }
}
    `;
export const CreateProgramDocument = `
    mutation CreateProgram($input: CreateProgramDto!) {
  createProgram(input: $input) {
    id
  }
}
    `;
export const DeleteProgramDocument = `
    mutation DeleteProgram($deleteProgramId: String!) {
  deleteProgram(id: $deleteProgramId) {
    message
    success
  }
}
    `;
export const UpdateProgramDocument = `
    mutation UpdateProgram($input: UpdateProgramDto!) {
  updateProgram(input: $input) {
    id
    name
    start_date
    end_date
    village_name
    active
    status
    leader {
      id
      first_name
      last_name
      email
      phone
      is_active
      is_verified
      is_profile_updated
      role {
        id
        name
        code
        description
      }
      created_at
      updated_at
    }
    volunteers {
      id
      first_name
      last_name
      email
      phone
      is_active
      is_verified
      is_profile_updated
      created_at
      updated_at
      role {
        id
        name
        code
        description
      }
    }
    budget_allocated
    expenses_incurred
    beneficiaries_count
    notes
    is_active
    is_deleted
    created_at
    updated_at
    amounts {
      amount_announced
      amount_settled
      amount_spent
      amount_cancelled
      amount_remaining
    }
  }
}
    `;
export const CreateCreditTransactionDocument = `
    mutation CreateCreditTransaction($transaction: CreateCreditTransactionDto!) {
  createCreditTransaction(transaction: $transaction) {
    id
    user
    spentOn
    transactionType
    fundType
    amount
    otherFundType
    estimatedAmount
    status
    description
    changeDescription
    additionalNotes
    paymentMethod
    transactionDate
    created_at
    updated_at
    is_deleted
  }
}
    `;
export const CreateDebitTransactionDocument = `
    mutation CreateDebitTransaction($transaction: CreateDebitTransactionDto!) {
  createDebitTransaction(transaction: $transaction) {
    id
    user
    spentOn
    transactionType
    fundType
    amount
    otherFundType
    estimatedAmount
    status
    description
    changeDescription
    additionalNotes
    paymentMethod
    transactionDate
    created_at
    updated_at
    is_deleted
  }
}
    `;
export const GetTransactionsDocument = `
    query GetTransactions($input: GetTransactionInput!) {
  getTransactions(input: $input) {
    data {
      id
      user
      spentOn
      transactionType
      fundType
      amount
      otherFundType
      estimatedAmount
      status
      description
      changeDescription
      additionalNotes
      paymentMethod
      transactionDate
      created_at
      updated_at
      is_deleted
    }
    totalCount
  }
}
    `;
export const GetTransactionByIdDocument = `
    query GetTransactionById($getTransactionByIdId: String!) {
  getTransactionById(id: $getTransactionByIdId) {
    id
    user
    spentOn
    transactionType
    fundType
    amount
    otherFundType
    estimatedAmount
    status
    description
    changeDescription
    additionalNotes
    paymentMethod
    transactionDate
    created_at
    updated_at
    is_deleted
  }
}
    `;
export const UpdateTransactionDocument = `
    mutation UpdateTransaction($transaction: UpdateTransactionDTO!) {
  updateTransaction(transaction: $transaction) {
    id
    user
    spentOn
    transactionType
    fundType
    amount
    otherFundType
    estimatedAmount
    status
    description
    changeDescription
    additionalNotes
    paymentMethod
    transactionDate
    created_at
    updated_at
  }
}
    `;
export const UsersDocument = `
    query Users($input: GetUserInput!) {
  users(input: $input) {
    data {
      id
      first_name
      last_name
      email
      phone
      is_active
      is_verified
      is_profile_updated
      role {
        id
        name
        code
        description
      }
      created_at
      updated_at
    }
    totalCount
  }
}
    `;
export const UpdateUserDocument = `
    mutation UpdateUser($user: UpdateUserDto!) {
  updateUser(user: $user) {
    id
    first_name
    last_name
    email
    phone
    is_active
    is_verified
    is_profile_updated
    role {
      id
      name
      code
      description
    }
    created_at
    updated_at
  }
}
    `;

const injectedRtkApi = graphql_api.injectEndpoints({
  endpoints: (build) => ({
    Login: build.mutation<LoginMutation, LoginMutationVariables>({
      query: (variables) => ({ document: LoginDocument, variables })
    }),
    Logout: build.mutation<LogoutMutation, LogoutMutationVariables | void>({
      query: (variables) => ({ document: LogoutDocument, variables })
    }),
    Register: build.mutation<RegisterMutation, RegisterMutationVariables>({
      query: (variables) => ({ document: RegisterDocument, variables })
    }),
    ResendOtp: build.mutation<ResendOtpMutation, ResendOtpMutationVariables>({
      query: (variables) => ({ document: ResendOtpDocument, variables })
    }),
    VerifyOtp: build.mutation<VerifyOtpMutation, VerifyOtpMutationVariables>({
      query: (variables) => ({ document: VerifyOtpDocument, variables })
    }),
    FinishSignUp: build.mutation<FinishSignUpMutation, FinishSignUpMutationVariables>({
      query: (variables) => ({ document: FinishSignUpDocument, variables })
    }),
    ForgotPassword: build.mutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>({
      query: (variables) => ({ document: ForgotPasswordDocument, variables })
    }),
    ResetPassword: build.mutation<ResetPasswordMutation, ResetPasswordMutationVariables>({
      query: (variables) => ({ document: ResetPasswordDocument, variables })
    }),
    GetPrograms: build.query<GetProgramsQuery, GetProgramsQueryVariables>({
      query: (variables) => ({ document: GetProgramsDocument, variables })
    }),
    GetProgramById: build.query<GetProgramByIdQuery, GetProgramByIdQueryVariables>({
      query: (variables) => ({ document: GetProgramByIdDocument, variables })
    }),
    CreateProgram: build.mutation<CreateProgramMutation, CreateProgramMutationVariables>({
      query: (variables) => ({ document: CreateProgramDocument, variables })
    }),
    DeleteProgram: build.mutation<DeleteProgramMutation, DeleteProgramMutationVariables>({
      query: (variables) => ({ document: DeleteProgramDocument, variables })
    }),
    UpdateProgram: build.mutation<UpdateProgramMutation, UpdateProgramMutationVariables>({
      query: (variables) => ({ document: UpdateProgramDocument, variables })
    }),
    CreateCreditTransaction: build.mutation<CreateCreditTransactionMutation, CreateCreditTransactionMutationVariables>({
      query: (variables) => ({ document: CreateCreditTransactionDocument, variables })
    }),
    CreateDebitTransaction: build.mutation<CreateDebitTransactionMutation, CreateDebitTransactionMutationVariables>({
      query: (variables) => ({ document: CreateDebitTransactionDocument, variables })
    }),
    GetTransactions: build.query<GetTransactionsQuery, GetTransactionsQueryVariables>({
      query: (variables) => ({ document: GetTransactionsDocument, variables })
    }),
    GetTransactionById: build.query<GetTransactionByIdQuery, GetTransactionByIdQueryVariables>({
      query: (variables) => ({ document: GetTransactionByIdDocument, variables })
    }),
    UpdateTransaction: build.mutation<UpdateTransactionMutation, UpdateTransactionMutationVariables>({
      query: (variables) => ({ document: UpdateTransactionDocument, variables })
    }),
    Users: build.query<UsersQuery, UsersQueryVariables>({
      query: (variables) => ({ document: UsersDocument, variables })
    }),
    UpdateUser: build.mutation<UpdateUserMutation, UpdateUserMutationVariables>({
      query: (variables) => ({ document: UpdateUserDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };


