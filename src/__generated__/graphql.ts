/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
};

export type Admin = {
  __typename?: 'Admin';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

/**  Admin model */
export type AdminInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Article = {
  __typename?: 'Article';
  articleInput: ArticleInputType;
  id: Scalars['ID']['output'];
  metadata: Metadata;
  posted: Scalars['Boolean']['output'];
};

export type ArticleInput = {
  author: Scalars['String']['input'];
  image: Scalars['String']['input'];
  message: Scalars['String']['input'];
  title: Scalars['String']['input'];
  type: ArticleType;
};

export type ArticleInputType = {
  __typename?: 'ArticleInputType';
  author: Scalars['String']['output'];
  image: Scalars['String']['output'];
  message: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: ArticleType;
};

export enum ArticleType {
  Article = 'ARTICLE',
  Breve = 'BREVE',
  Cover = 'COVER',
  News = 'NEWS',
  Sports = 'SPORTS'
}

export type AuthResponse = {
  __typename?: 'AuthResponse';
  token: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
};

export type Event = {
  __typename?: 'Event';
  eventInput: EventInputType;
  id: Scalars['ID']['output'];
  metadata: EventMetadata;
  posted: Scalars['Boolean']['output'];
};

export type EventInput = {
  author: Scalars['String']['input'];
  endAt: Scalars['String']['input'];
  image: Scalars['String']['input'];
  link?: InputMaybe<Scalars['String']['input']>;
  startAt?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type EventInputType = {
  __typename?: 'EventInputType';
  author: Scalars['String']['output'];
  endAt: Scalars['String']['output'];
  image: Scalars['String']['output'];
  link?: Maybe<Scalars['String']['output']>;
  startAt?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/**  Event model */
export type EventMetadata = {
  __typename?: 'EventMetadata';
  createdAt: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
};

/**  Article model */
export type Metadata = {
  __typename?: 'Metadata';
  createdAt: Scalars['String']['output'];
  likes?: Maybe<Array<Scalars['String']['output']>>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  views?: Maybe<Array<Scalars['String']['output']>>;
};

/**  Mutations */
export type Mutation = {
  __typename?: 'Mutation';
  createAdmin: Admin;
  createArticle: Article;
  createEvent: Event;
  createPlaylist: Playlist;
  createUser: User;
  deleteArticle?: Maybe<Scalars['Boolean']['output']>;
  deleteEvent?: Maybe<Scalars['Boolean']['output']>;
  deletePlaylist?: Maybe<Scalars['Boolean']['output']>;
  deleteUser?: Maybe<Scalars['Boolean']['output']>;
  login: AuthResponse;
  updateAdmin: Admin;
  updateArticle: Article;
  updateArticleStatus: Article;
  updateEvent: Event;
  updateEventStatus?: Maybe<Event>;
  updatePlaylist: Playlist;
  updatePlaylistStatus?: Maybe<Playlist>;
  updateUser: User;
};


/**  Mutations */
export type MutationCreateAdminArgs = {
  adminInput: AdminInput;
};


/**  Mutations */
export type MutationCreateArticleArgs = {
  articleInput: ArticleInput;
};


/**  Mutations */
export type MutationCreateEventArgs = {
  eventInput: EventInput;
};


/**  Mutations */
export type MutationCreatePlaylistArgs = {
  playlistInput: PlaylistInput;
};


/**  Mutations */
export type MutationCreateUserArgs = {
  adminInput: AdminInput;
};


/**  Mutations */
export type MutationDeleteArticleArgs = {
  id: Scalars['ID']['input'];
};


/**  Mutations */
export type MutationDeleteEventArgs = {
  id: Scalars['ID']['input'];
};


/**  Mutations */
export type MutationDeletePlaylistArgs = {
  id: Scalars['ID']['input'];
};


/**  Mutations */
export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


/**  Mutations */
export type MutationLoginArgs = {
  adminInput: AdminInput;
};


/**  Mutations */
export type MutationUpdateAdminArgs = {
  adminInput: AdminInput;
  id: Scalars['ID']['input'];
};


/**  Mutations */
export type MutationUpdateArticleArgs = {
  articleInput: ArticleInput;
  id: Scalars['ID']['input'];
};


/**  Mutations */
export type MutationUpdateArticleStatusArgs = {
  id: Scalars['ID']['input'];
};


/**  Mutations */
export type MutationUpdateEventArgs = {
  eventInput: EventInput;
  id: Scalars['ID']['input'];
};


/**  Mutations */
export type MutationUpdateEventStatusArgs = {
  id: Scalars['ID']['input'];
};


/**  Mutations */
export type MutationUpdatePlaylistArgs = {
  id: Scalars['ID']['input'];
  playlistInput: PlaylistInput;
};


/**  Mutations */
export type MutationUpdatePlaylistStatusArgs = {
  id: Scalars['ID']['input'];
};


/**  Mutations */
export type MutationUpdateUserArgs = {
  adminInput: AdminInput;
  id: Scalars['ID']['input'];
};

export type Playlist = {
  __typename?: 'Playlist';
  id: Scalars['ID']['output'];
  metadata: Metadata;
  playlistInput: PlaylistInputType;
  posted: Scalars['Boolean']['output'];
};

export type PlaylistInput = {
  author: Scalars['String']['input'];
  description: Scalars['String']['input'];
  image: Scalars['String']['input'];
  singles: Array<SingleInput>;
  title: Scalars['String']['input'];
};

export type PlaylistInputType = {
  __typename?: 'PlaylistInputType';
  author: Scalars['String']['output'];
  description: Scalars['String']['output'];
  image: Scalars['String']['output'];
  singles: Array<Single>;
  title: Scalars['String']['output'];
};

/**  Queries */
export type Query = {
  __typename?: 'Query';
  getAdminById: Admin;
  getAllAdmins: Array<Admin>;
  getAllArticles: Array<Article>;
  getAllEvents: Array<Event>;
  getAllPlaylists: Array<Playlist>;
  getAllUsers: Array<User>;
  getArticleById: Article;
  getEventById: Event;
  getPlaylistById: Playlist;
  getUserById: User;
  verifyToken: Scalars['Boolean']['output'];
};


/**  Queries */
export type QueryGetAdminByIdArgs = {
  id: Scalars['ID']['input'];
};


/**  Queries */
export type QueryGetArticleByIdArgs = {
  id: Scalars['ID']['input'];
};


/**  Queries */
export type QueryGetEventByIdArgs = {
  id: Scalars['ID']['input'];
};


/**  Queries */
export type QueryGetPlaylistByIdArgs = {
  id: Scalars['ID']['input'];
};


/**  Queries */
export type QueryGetUserByIdArgs = {
  id: Scalars['ID']['input'];
};


/**  Queries */
export type QueryVerifyTokenArgs = {
  token: Scalars['String']['input'];
};

export type Single = {
  __typename?: 'Single';
  singleLinks: Array<SingleLink>;
  title: Scalars['String']['output'];
};

export type SingleInput = {
  singleLinks: Array<SingleLinkInput>;
  title: Scalars['String']['input'];
};

export type SingleLink = {
  __typename?: 'SingleLink';
  link: Scalars['String']['output'];
  platform: StreamingPlatform;
};

export type SingleLinkInput = {
  link: Scalars['String']['input'];
  platform: StreamingPlatform;
};

/**  Playlist model */
export enum StreamingPlatform {
  Applemusic = 'APPLEMUSIC',
  Boomplay = 'BOOMPLAY',
  Deezer = 'DEEZER',
  Spotify = 'SPOTIFY',
  Youtube = 'YOUTUBE',
  Youtubemusic = 'YOUTUBEMUSIC'
}

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  userMetadata: UserMetadata;
};

/**  User model */
export type UserMetadata = {
  __typename?: 'UserMetadata';
  likes: Array<Scalars['String']['output']>;
  views: Array<Scalars['String']['output']>;
};

export type Create_ArticleMutationVariables = Exact<{
  title: Scalars['String']['input'];
  message: Scalars['String']['input'];
  image: Scalars['String']['input'];
  type: ArticleType;
  author: Scalars['String']['input'];
}>;


export type Create_ArticleMutation = { __typename?: 'Mutation', createArticle: { __typename?: 'Article', id: string, posted: boolean, metadata: { __typename?: 'Metadata', createdAt: string, updatedAt?: string | null, views?: Array<string> | null, likes?: Array<string> | null }, articleInput: { __typename?: 'ArticleInputType', title: string, message: string, image: string, type: ArticleType, author: string } } };

export type Update_ArticleMutationVariables = Exact<{
  author: Scalars['String']['input'];
  image: Scalars['String']['input'];
  message: Scalars['String']['input'];
  title: Scalars['String']['input'];
  type: ArticleType;
  id: Scalars['ID']['input'];
}>;


export type Update_ArticleMutation = { __typename?: 'Mutation', updateArticle: { __typename?: 'Article', id: string, posted: boolean, metadata: { __typename?: 'Metadata', createdAt: string, updatedAt?: string | null, likes?: Array<string> | null, views?: Array<string> | null }, articleInput: { __typename?: 'ArticleInputType', author: string, image: string, message: string, title: string, type: ArticleType } } };

export type Get_All_ArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_All_ArticlesQuery = { __typename?: 'Query', getAllArticles: Array<{ __typename?: 'Article', id: string, posted: boolean, metadata: { __typename?: 'Metadata', createdAt: string, updatedAt?: string | null, views?: Array<string> | null, likes?: Array<string> | null }, articleInput: { __typename?: 'ArticleInputType', title: string, message: string, type: ArticleType, author: string } }> };

export type Delete_ArticleMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type Delete_ArticleMutation = { __typename?: 'Mutation', deleteArticle?: boolean | null };

export type Get_ArticleQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type Get_ArticleQuery = { __typename?: 'Query', getArticleById: { __typename?: 'Article', id: string, posted: boolean, metadata: { __typename?: 'Metadata', createdAt: string, likes?: Array<string> | null, updatedAt?: string | null, views?: Array<string> | null }, articleInput: { __typename?: 'ArticleInputType', author: string, image: string, message: string, title: string, type: ArticleType } } };

export type Update_Article_StatusMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type Update_Article_StatusMutation = { __typename?: 'Mutation', updateArticleStatus: { __typename?: 'Article', id: string, posted: boolean } };

export type Create_PlaylistMutationVariables = Exact<{
  title: Scalars['String']['input'];
  description: Scalars['String']['input'];
  image: Scalars['String']['input'];
  singles: Array<SingleInput> | SingleInput;
  author: Scalars['String']['input'];
}>;


export type Create_PlaylistMutation = { __typename?: 'Mutation', createPlaylist: { __typename?: 'Playlist', id: string, posted: boolean, playlistInput: { __typename?: 'PlaylistInputType', author: string, description: string, image: string, title: string, singles: Array<{ __typename?: 'Single', title: string, singleLinks: Array<{ __typename?: 'SingleLink', link: string, platform: StreamingPlatform }> }> }, metadata: { __typename?: 'Metadata', createdAt: string, likes?: Array<string> | null, updatedAt?: string | null, views?: Array<string> | null } } };

export type Update_PlaylistMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  image: Scalars['String']['input'];
  description: Scalars['String']['input'];
  singles: Array<SingleInput> | SingleInput;
  author: Scalars['String']['input'];
}>;


export type Update_PlaylistMutation = { __typename?: 'Mutation', updatePlaylist: { __typename?: 'Playlist', id: string, posted: boolean, metadata: { __typename?: 'Metadata', createdAt: string, updatedAt?: string | null, views?: Array<string> | null, likes?: Array<string> | null }, playlistInput: { __typename?: 'PlaylistInputType', title: string, description: string, image: string, author: string, singles: Array<{ __typename?: 'Single', title: string }> } } };

export type Get_All_PlaylistsQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_All_PlaylistsQuery = { __typename?: 'Query', getAllPlaylists: Array<{ __typename?: 'Playlist', id: string, posted: boolean, metadata: { __typename?: 'Metadata', createdAt: string, updatedAt?: string | null, views?: Array<string> | null, likes?: Array<string> | null }, playlistInput: { __typename?: 'PlaylistInputType', title: string, description: string, author: string } }> };

export type Delete_PlaylistMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type Delete_PlaylistMutation = { __typename?: 'Mutation', deletePlaylist?: boolean | null };

export type Get_PlaylistQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type Get_PlaylistQuery = { __typename?: 'Query', getPlaylistById: { __typename?: 'Playlist', id: string, posted: boolean, metadata: { __typename?: 'Metadata', createdAt: string, updatedAt?: string | null, views?: Array<string> | null, likes?: Array<string> | null }, playlistInput: { __typename?: 'PlaylistInputType', title: string, image: string, description: string, author: string, singles: Array<{ __typename?: 'Single', title: string, singleLinks: Array<{ __typename?: 'SingleLink', link: string, platform: StreamingPlatform }> }> } } };

export type Update_Playlist_StatusMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type Update_Playlist_StatusMutation = { __typename?: 'Mutation', updatePlaylistStatus?: { __typename?: 'Playlist', id: string, posted: boolean } | null };

export type Get_All_EventsQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_All_EventsQuery = { __typename?: 'Query', getAllEvents: Array<{ __typename?: 'Event', id: string, posted: boolean, eventInput: { __typename?: 'EventInputType', author: string, image: string, link?: string | null, title?: string | null, startAt?: string | null, endAt: string }, metadata: { __typename?: 'EventMetadata', createdAt: string, updatedAt?: string | null } }> };

export type Get_EventQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type Get_EventQuery = { __typename?: 'Query', getEventById: { __typename?: 'Event', id: string, posted: boolean, eventInput: { __typename?: 'EventInputType', author: string, image: string, link?: string | null, title?: string | null, startAt?: string | null, endAt: string }, metadata: { __typename?: 'EventMetadata', createdAt: string, updatedAt?: string | null } } };

export type Create_EventMutationVariables = Exact<{
  author: Scalars['String']['input'];
  image: Scalars['String']['input'];
  endAt: Scalars['String']['input'];
  link?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  startAt?: InputMaybe<Scalars['String']['input']>;
}>;


export type Create_EventMutation = { __typename?: 'Mutation', createEvent: { __typename?: 'Event', id: string, posted: boolean, eventInput: { __typename?: 'EventInputType', author: string, image: string, link?: string | null, title?: string | null, startAt?: string | null, endAt: string }, metadata: { __typename?: 'EventMetadata', createdAt: string, updatedAt?: string | null } } };

export type Update_EventMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  author: Scalars['String']['input'];
  image: Scalars['String']['input'];
  endAt: Scalars['String']['input'];
  link?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  startAt?: InputMaybe<Scalars['String']['input']>;
}>;


export type Update_EventMutation = { __typename?: 'Mutation', updateEvent: { __typename?: 'Event', id: string, posted: boolean, eventInput: { __typename?: 'EventInputType', author: string, image: string, link?: string | null, title?: string | null, startAt?: string | null, endAt: string }, metadata: { __typename?: 'EventMetadata', createdAt: string, updatedAt?: string | null } } };

export type Update_Event_StatusMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type Update_Event_StatusMutation = { __typename?: 'Mutation', updateEventStatus?: { __typename?: 'Event', id: string, posted: boolean } | null };

export type Delete_EventMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type Delete_EventMutation = { __typename?: 'Mutation', deleteEvent?: boolean | null };

export type Get_All_AdminsQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_All_AdminsQuery = { __typename?: 'Query', getAllAdmins: Array<{ __typename?: 'Admin', id: string, email: string }> };

export type Get_AdminQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type Get_AdminQuery = { __typename?: 'Query', getAdminById: { __typename?: 'Admin', email: string, id: string } };

export type Create_AdminMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type Create_AdminMutation = { __typename?: 'Mutation', createAdmin: { __typename?: 'Admin', id: string, email: string } };

export type Update_AdminMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type Update_AdminMutation = { __typename?: 'Mutation', updateAdmin: { __typename?: 'Admin', email: string, id: string } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthResponse', userId: string, token: string } };

export type Verify_TokenQueryVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type Verify_TokenQuery = { __typename?: 'Query', verifyToken: boolean };

export type Get_All_UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_All_UsersQuery = { __typename?: 'Query', getAllUsers: Array<{ __typename?: 'User', id: string, email: string }> };

export type Get_UserQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type Get_UserQuery = { __typename?: 'Query', getUserById: { __typename?: 'User', id: string, email: string } };

export type Create_UserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type Create_UserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string, email: string } };

export type Update_UserMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type Update_UserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', email: string, id: string } };


export const Create_ArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CREATE_ARTICLE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"message"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"image"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleType"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"author"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createArticle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"articleInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"message"},"value":{"kind":"Variable","name":{"kind":"Name","value":"message"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"Variable","name":{"kind":"Name","value":"image"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"author"},"value":{"kind":"Variable","name":{"kind":"Name","value":"author"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"posted"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"views"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}}]}},{"kind":"Field","name":{"kind":"Name","value":"articleInput"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"author"}}]}}]}}]}}]} as unknown as DocumentNode<Create_ArticleMutation, Create_ArticleMutationVariables>;
export const Update_ArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UPDATE_ARTICLE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"author"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"image"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"message"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleType"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateArticle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"articleInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"message"},"value":{"kind":"Variable","name":{"kind":"Name","value":"message"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"Variable","name":{"kind":"Name","value":"image"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"author"},"value":{"kind":"Variable","name":{"kind":"Name","value":"author"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"posted"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"views"}}]}},{"kind":"Field","name":{"kind":"Name","value":"articleInput"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]} as unknown as DocumentNode<Update_ArticleMutation, Update_ArticleMutationVariables>;
export const Get_All_ArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_ALL_ARTICLES"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllArticles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"posted"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"views"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}}]}},{"kind":"Field","name":{"kind":"Name","value":"articleInput"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"author"}}]}}]}}]}}]} as unknown as DocumentNode<Get_All_ArticlesQuery, Get_All_ArticlesQueryVariables>;
export const Delete_ArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_ARTICLE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteArticle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<Delete_ArticleMutation, Delete_ArticleMutationVariables>;
export const Get_ArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_ARTICLE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getArticleById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"posted"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"views"}}]}},{"kind":"Field","name":{"kind":"Name","value":"articleInput"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]} as unknown as DocumentNode<Get_ArticleQuery, Get_ArticleQueryVariables>;
export const Update_Article_StatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UPDATE_ARTICLE_STATUS"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateArticleStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"posted"}}]}}]}}]} as unknown as DocumentNode<Update_Article_StatusMutation, Update_Article_StatusMutationVariables>;
export const Create_PlaylistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CREATE_PLAYLIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"image"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"singles"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SingleInput"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"author"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPlaylist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"playlistInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"Variable","name":{"kind":"Name","value":"image"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"singles"},"value":{"kind":"Variable","name":{"kind":"Name","value":"singles"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"author"},"value":{"kind":"Variable","name":{"kind":"Name","value":"author"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"posted"}},{"kind":"Field","name":{"kind":"Name","value":"playlistInput"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"singles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"singleLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"platform"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"views"}}]}}]}}]}}]} as unknown as DocumentNode<Create_PlaylistMutation, Create_PlaylistMutationVariables>;
export const Update_PlaylistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UPDATE_PLAYLIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"image"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"singles"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SingleInput"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"author"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePlaylist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"playlistInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"Variable","name":{"kind":"Name","value":"image"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"singles"},"value":{"kind":"Variable","name":{"kind":"Name","value":"singles"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"author"},"value":{"kind":"Variable","name":{"kind":"Name","value":"author"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"posted"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"views"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}}]}},{"kind":"Field","name":{"kind":"Name","value":"playlistInput"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"singles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Update_PlaylistMutation, Update_PlaylistMutationVariables>;
export const Get_All_PlaylistsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_ALL_PLAYLISTS"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllPlaylists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"posted"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"views"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}}]}},{"kind":"Field","name":{"kind":"Name","value":"playlistInput"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"author"}}]}}]}}]}}]} as unknown as DocumentNode<Get_All_PlaylistsQuery, Get_All_PlaylistsQueryVariables>;
export const Delete_PlaylistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_PLAYLIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePlaylist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<Delete_PlaylistMutation, Delete_PlaylistMutationVariables>;
export const Get_PlaylistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_PLAYLIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPlaylistById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"posted"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"views"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}}]}},{"kind":"Field","name":{"kind":"Name","value":"playlistInput"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"singles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"singleLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"platform"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<Get_PlaylistQuery, Get_PlaylistQueryVariables>;
export const Update_Playlist_StatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UPDATE_PLAYLIST_STATUS"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePlaylistStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"posted"}}]}}]}}]} as unknown as DocumentNode<Update_Playlist_StatusMutation, Update_Playlist_StatusMutationVariables>;
export const Get_All_EventsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_ALL_EVENTS"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllEvents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"posted"}},{"kind":"Field","name":{"kind":"Name","value":"eventInput"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"startAt"}},{"kind":"Field","name":{"kind":"Name","value":"endAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<Get_All_EventsQuery, Get_All_EventsQueryVariables>;
export const Get_EventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_EVENT"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEventById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"posted"}},{"kind":"Field","name":{"kind":"Name","value":"eventInput"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"startAt"}},{"kind":"Field","name":{"kind":"Name","value":"endAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<Get_EventQuery, Get_EventQueryVariables>;
export const Create_EventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CREATE_EVENT"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"author"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"image"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endAt"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"link"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startAt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"eventInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"Variable","name":{"kind":"Name","value":"image"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"author"},"value":{"kind":"Variable","name":{"kind":"Name","value":"author"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"endAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endAt"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"link"},"value":{"kind":"Variable","name":{"kind":"Name","value":"link"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"startAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startAt"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"posted"}},{"kind":"Field","name":{"kind":"Name","value":"eventInput"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"startAt"}},{"kind":"Field","name":{"kind":"Name","value":"endAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<Create_EventMutation, Create_EventMutationVariables>;
export const Update_EventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UPDATE_EVENT"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"author"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"image"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endAt"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"link"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startAt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"eventInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"Variable","name":{"kind":"Name","value":"image"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"author"},"value":{"kind":"Variable","name":{"kind":"Name","value":"author"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"endAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endAt"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"link"},"value":{"kind":"Variable","name":{"kind":"Name","value":"link"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"startAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startAt"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"posted"}},{"kind":"Field","name":{"kind":"Name","value":"eventInput"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"startAt"}},{"kind":"Field","name":{"kind":"Name","value":"endAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<Update_EventMutation, Update_EventMutationVariables>;
export const Update_Event_StatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UPDATE_EVENT_STATUS"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateEventStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"posted"}}]}}]}}]} as unknown as DocumentNode<Update_Event_StatusMutation, Update_Event_StatusMutationVariables>;
export const Delete_EventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_EVENT"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<Delete_EventMutation, Delete_EventMutationVariables>;
export const Get_All_AdminsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_ALL_ADMINS"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllAdmins"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<Get_All_AdminsQuery, Get_All_AdminsQueryVariables>;
export const Get_AdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_ADMIN"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAdminById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<Get_AdminQuery, Get_AdminQueryVariables>;
export const Create_AdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CREATE_ADMIN"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"adminInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<Create_AdminMutation, Create_AdminMutationVariables>;
export const Update_AdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UPDATE_ADMIN"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"adminInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<Update_AdminMutation, Update_AdminMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LOGIN"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"adminInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const Verify_TokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"VERIFY_TOKEN"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}]}]}}]} as unknown as DocumentNode<Verify_TokenQuery, Verify_TokenQueryVariables>;
export const Get_All_UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_ALL_USERS"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<Get_All_UsersQuery, Get_All_UsersQueryVariables>;
export const Get_UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_USER"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<Get_UserQuery, Get_UserQueryVariables>;
export const Create_UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CREATE_USER"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"adminInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<Create_UserMutation, Create_UserMutationVariables>;
export const Update_UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UPDATE_USER"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"adminInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<Update_UserMutation, Update_UserMutationVariables>;