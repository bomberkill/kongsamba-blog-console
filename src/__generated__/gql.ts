/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n    mutation CREATE_ARTICLE($title: String!, $message: String!, $image: String!, $type: ArticleType!, $author: String!) {\n        createArticle(articleInput: {title:$title, message: $message, image: $image, type: $type, author: $author}) {\n            id\n            posted\n            metadata {\n            createdAt\n            updatedAt\n            views\n            likes\n            }\n            articleInput {\n            title\n            message\n            image\n            type\n            author\n            }\n        }\n    }    \n": types.Create_ArticleDocument,
    "\n    mutation UPDATE_ARTICLE($author: String!, $image: String!, $message: String!, $title: String!, $type: ArticleType!, $id:ID!) {\n        updateArticle(\n            articleInput: { title: $title, message: $message, image: $image, type: $type, author: $author }\n            id: $id\n        ) {\n            id\n            posted\n            metadata {\n            createdAt\n            updatedAt\n            likes\n            views\n            }\n            articleInput {\n            author\n            image\n            message\n            title\n            type\n            }\n        }\n    }    \n": types.Update_ArticleDocument,
    "\n    query GET_ALL_ARTICLES {\n        getAllArticles {\n            id\n            posted\n            metadata {\n            createdAt\n            updatedAt\n            views\n            likes\n            }\n            articleInput {\n            title\n            message\n            type\n            author\n            }\n        }\n    }    \n": types.Get_All_ArticlesDocument,
    "\n    mutation DELETE_ARTICLE($id: ID! ) {\n        deleteArticle(id: $id)\n    }\n": types.Delete_ArticleDocument,
    "\n    query GET_ARTICLE($id: ID!) {\n        getArticleById(id: $id) {\n            id\n            posted\n            metadata {\n            createdAt\n            likes\n            updatedAt\n            views\n            }\n            articleInput {\n            author\n            image\n            message\n            title\n            type\n            }\n        }\n    }    \n": types.Get_ArticleDocument,
    "\n    mutation UPDATE_ARTICLE_STATUS($id: ID!) {\n        updateArticleStatus(id: $id) {\n            id\n            posted\n        }\n    }    \n": types.Update_Article_StatusDocument,
    "\n    mutation CREATE_PLAYLIST($title: String!, $description: String!, $image: String!, $singles: [SingleInput!]!, $author: String!) {\n        createPlaylist(playlistInput: {title: $title, image: $image, description: $description, singles: $singles, author: $author}) {\n            id\n            posted\n            playlistInput {\n                author\n                description\n                image\n                title\n                singles {\n                    title\n                    singleLinks {\n                        link\n                        platform\n                    }\n                }\n            }\n            metadata {\n                createdAt\n                likes\n                updatedAt\n                views\n            }\n        }\n    }  \n": types.Create_PlaylistDocument,
    "\n    mutation UPDATE_PLAYLIST($id: ID!, $title: String!, $image: String!,  $description: String!, $singles: [SingleInput!]!, $author: String! ) {\n        updatePlaylist(id: $id, playlistInput: {title: $title, image: $image, description: $description, singles: $singles, author: $author}) {\n            id\n            posted\n            metadata {\n                createdAt\n                updatedAt\n                views\n                likes\n            }\n            playlistInput {\n                title\n                description\n                image\n                author\n                singles {\n                    title\n                }\n            }\n        }\n    }   \n": types.Update_PlaylistDocument,
    "\n    query GET_ALL_PLAYLISTS {\n        getAllPlaylists {\n            id\n            posted\n            metadata {\n                createdAt\n                updatedAt\n                views\n                likes\n            }\n            playlistInput {\n                title\n                description\n                author\n            }\n        }\n    }    \n": types.Get_All_PlaylistsDocument,
    "\n    mutation DELETE_PLAYLIST($id: ID!) {\n        deletePlaylist(id: $id)\n    }\n": types.Delete_PlaylistDocument,
    "\n    query GET_PLAYLIST ($id: ID!) {\n        getPlaylistById (id: $id) {\n            id\n            posted\n            metadata {\n                createdAt\n                updatedAt\n                views\n                likes\n            }\n            playlistInput {\n                title\n                image\n                description\n                author\n                singles {\n                    title\n                    singleLinks {\n                        link\n                        platform\n                    }\n                }\n            }\n        }\n    }   \n": types.Get_PlaylistDocument,
    "\n    mutation UPDATE_PLAYLIST_STATUS ($id: ID!) {\n        updatePlaylistStatus(id: $id) {\n            id\n            posted\n        }\n    }    \n": types.Update_Playlist_StatusDocument,
    "\n    query GET_ALL_EVENTS {\n        getAllEvents {\n            id\n            posted\n            eventInput {\n                author\n                image\n                link\n                title\n                startAt\n                endAt\n            }\n            metadata {\n                createdAt\n                updatedAt\n            }\n        }\n    }    \n": types.Get_All_EventsDocument,
    "\n    query GET_EVENT($id: ID!) {\n        getEventById(id: $id) {\n            id\n            posted\n            eventInput {\n                author\n                image\n                link\n                title\n                startAt\n                endAt\n            }\n            metadata {\n                createdAt\n                updatedAt\n            }\n        }\n    }    \n": types.Get_EventDocument,
    "\n    mutation CREATE_EVENT($author: String!, $image: String!, $endAt: String!, $link: String, $title: String, $startAt: String) {\n        createEvent(\n            eventInput: {image: $image, author: $author, endAt: $endAt, link: $link, startAt: $startAt, title: $title}\n        ) {\n            id\n            posted\n            eventInput {\n                author\n                image\n                link\n                title\n                startAt\n                endAt\n            }\n            metadata {\n                createdAt\n                updatedAt\n            }\n        }\n    }\n": types.Create_EventDocument,
    "\n    mutation UPDATE_EVENT($id: ID!, $author: String!, $image: String!, $endAt: String!, $link: String, $title: String, $startAt: String ) {\n        updateEvent(\n            id: $id\n            eventInput: {image: $image, author: $author, endAt: $endAt, link: $link, startAt: $startAt, title: $title}\n        ) {\n            id\n            posted\n            eventInput {\n                author\n                image\n                link\n                title\n                startAt\n                endAt\n            }\n            metadata {\n                createdAt\n                updatedAt\n            }\n        }\n    }    \n": types.Update_EventDocument,
    "\n    mutation UPDATE_EVENT_STATUS($id: ID!) {\n        updateEventStatus(id: $id) {\n            id\n            posted\n        }\n    }    \n": types.Update_Event_StatusDocument,
    "\n    mutation DELETE_EVENT($id: ID!) {\n        deleteEvent(id: $id)\n    }\n": types.Delete_EventDocument,
    "\n    query GET_ALL_ADMINS {\n        getAllAdmins{\n            id\n            email\n        }\n    }    \n": types.Get_All_AdminsDocument,
    "\n    query GET_ADMIN($id: ID!) {\n        getAdminById(id: $id) {\n            email\n            id\n        }\n    }\n": types.Get_AdminDocument,
    "\n    mutation CREATE_ADMIN($email: String!, $password: String!) {\n        createAdmin(adminInput: {email: $email, password: $password}){\n            id\n            email\n        }\n    }    \n": types.Create_AdminDocument,
    "\n    mutation UPDATE_ADMIN($id: ID!, $email: String!, $password: String!) {\n        updateAdmin(adminInput: { email: $email, password: $password }, id: $id) {\n            email\n            id\n        }\n    }  \n": types.Update_AdminDocument,
    "\n    mutation LOGIN($email: String!, $password: String!) {\n        login(adminInput: { email: $email, password: $password }) {\n            userId\n            token\n        }\n    }\n": types.LoginDocument,
    "\n    query VERIFY_TOKEN($token: String!) {\n        verifyToken(token: $token)\n    }\n": types.Verify_TokenDocument,
    "\n    query GET_ALL_USERS {\n        getAllUsers{\n            id\n            email\n        }\n    }    \n": types.Get_All_UsersDocument,
    "\n    query GET_USER($id: ID!) {\n        getUserById(id: $id) {\n            id\n            email\n        }\n    }\n": types.Get_UserDocument,
    "\n    mutation CREATE_USER($email: String!, $password: String!) {\n        createUser(adminInput: {email: $email, password: $password}){\n            id\n            email\n        }\n    }    \n": types.Create_UserDocument,
    "\n    mutation UPDATE_USER($id: ID!, $email: String!, $password: String!) {\n        updateUser(adminInput: { email: $email, password: $password }, id: $id) {\n            email\n            id\n        }\n    }  \n": types.Update_UserDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CREATE_ARTICLE($title: String!, $message: String!, $image: String!, $type: ArticleType!, $author: String!) {\n        createArticle(articleInput: {title:$title, message: $message, image: $image, type: $type, author: $author}) {\n            id\n            posted\n            metadata {\n            createdAt\n            updatedAt\n            views\n            likes\n            }\n            articleInput {\n            title\n            message\n            image\n            type\n            author\n            }\n        }\n    }    \n"): (typeof documents)["\n    mutation CREATE_ARTICLE($title: String!, $message: String!, $image: String!, $type: ArticleType!, $author: String!) {\n        createArticle(articleInput: {title:$title, message: $message, image: $image, type: $type, author: $author}) {\n            id\n            posted\n            metadata {\n            createdAt\n            updatedAt\n            views\n            likes\n            }\n            articleInput {\n            title\n            message\n            image\n            type\n            author\n            }\n        }\n    }    \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UPDATE_ARTICLE($author: String!, $image: String!, $message: String!, $title: String!, $type: ArticleType!, $id:ID!) {\n        updateArticle(\n            articleInput: { title: $title, message: $message, image: $image, type: $type, author: $author }\n            id: $id\n        ) {\n            id\n            posted\n            metadata {\n            createdAt\n            updatedAt\n            likes\n            views\n            }\n            articleInput {\n            author\n            image\n            message\n            title\n            type\n            }\n        }\n    }    \n"): (typeof documents)["\n    mutation UPDATE_ARTICLE($author: String!, $image: String!, $message: String!, $title: String!, $type: ArticleType!, $id:ID!) {\n        updateArticle(\n            articleInput: { title: $title, message: $message, image: $image, type: $type, author: $author }\n            id: $id\n        ) {\n            id\n            posted\n            metadata {\n            createdAt\n            updatedAt\n            likes\n            views\n            }\n            articleInput {\n            author\n            image\n            message\n            title\n            type\n            }\n        }\n    }    \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GET_ALL_ARTICLES {\n        getAllArticles {\n            id\n            posted\n            metadata {\n            createdAt\n            updatedAt\n            views\n            likes\n            }\n            articleInput {\n            title\n            message\n            type\n            author\n            }\n        }\n    }    \n"): (typeof documents)["\n    query GET_ALL_ARTICLES {\n        getAllArticles {\n            id\n            posted\n            metadata {\n            createdAt\n            updatedAt\n            views\n            likes\n            }\n            articleInput {\n            title\n            message\n            type\n            author\n            }\n        }\n    }    \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation DELETE_ARTICLE($id: ID! ) {\n        deleteArticle(id: $id)\n    }\n"): (typeof documents)["\n    mutation DELETE_ARTICLE($id: ID! ) {\n        deleteArticle(id: $id)\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GET_ARTICLE($id: ID!) {\n        getArticleById(id: $id) {\n            id\n            posted\n            metadata {\n            createdAt\n            likes\n            updatedAt\n            views\n            }\n            articleInput {\n            author\n            image\n            message\n            title\n            type\n            }\n        }\n    }    \n"): (typeof documents)["\n    query GET_ARTICLE($id: ID!) {\n        getArticleById(id: $id) {\n            id\n            posted\n            metadata {\n            createdAt\n            likes\n            updatedAt\n            views\n            }\n            articleInput {\n            author\n            image\n            message\n            title\n            type\n            }\n        }\n    }    \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UPDATE_ARTICLE_STATUS($id: ID!) {\n        updateArticleStatus(id: $id) {\n            id\n            posted\n        }\n    }    \n"): (typeof documents)["\n    mutation UPDATE_ARTICLE_STATUS($id: ID!) {\n        updateArticleStatus(id: $id) {\n            id\n            posted\n        }\n    }    \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CREATE_PLAYLIST($title: String!, $description: String!, $image: String!, $singles: [SingleInput!]!, $author: String!) {\n        createPlaylist(playlistInput: {title: $title, image: $image, description: $description, singles: $singles, author: $author}) {\n            id\n            posted\n            playlistInput {\n                author\n                description\n                image\n                title\n                singles {\n                    title\n                    singleLinks {\n                        link\n                        platform\n                    }\n                }\n            }\n            metadata {\n                createdAt\n                likes\n                updatedAt\n                views\n            }\n        }\n    }  \n"): (typeof documents)["\n    mutation CREATE_PLAYLIST($title: String!, $description: String!, $image: String!, $singles: [SingleInput!]!, $author: String!) {\n        createPlaylist(playlistInput: {title: $title, image: $image, description: $description, singles: $singles, author: $author}) {\n            id\n            posted\n            playlistInput {\n                author\n                description\n                image\n                title\n                singles {\n                    title\n                    singleLinks {\n                        link\n                        platform\n                    }\n                }\n            }\n            metadata {\n                createdAt\n                likes\n                updatedAt\n                views\n            }\n        }\n    }  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UPDATE_PLAYLIST($id: ID!, $title: String!, $image: String!,  $description: String!, $singles: [SingleInput!]!, $author: String! ) {\n        updatePlaylist(id: $id, playlistInput: {title: $title, image: $image, description: $description, singles: $singles, author: $author}) {\n            id\n            posted\n            metadata {\n                createdAt\n                updatedAt\n                views\n                likes\n            }\n            playlistInput {\n                title\n                description\n                image\n                author\n                singles {\n                    title\n                }\n            }\n        }\n    }   \n"): (typeof documents)["\n    mutation UPDATE_PLAYLIST($id: ID!, $title: String!, $image: String!,  $description: String!, $singles: [SingleInput!]!, $author: String! ) {\n        updatePlaylist(id: $id, playlistInput: {title: $title, image: $image, description: $description, singles: $singles, author: $author}) {\n            id\n            posted\n            metadata {\n                createdAt\n                updatedAt\n                views\n                likes\n            }\n            playlistInput {\n                title\n                description\n                image\n                author\n                singles {\n                    title\n                }\n            }\n        }\n    }   \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GET_ALL_PLAYLISTS {\n        getAllPlaylists {\n            id\n            posted\n            metadata {\n                createdAt\n                updatedAt\n                views\n                likes\n            }\n            playlistInput {\n                title\n                description\n                author\n            }\n        }\n    }    \n"): (typeof documents)["\n    query GET_ALL_PLAYLISTS {\n        getAllPlaylists {\n            id\n            posted\n            metadata {\n                createdAt\n                updatedAt\n                views\n                likes\n            }\n            playlistInput {\n                title\n                description\n                author\n            }\n        }\n    }    \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation DELETE_PLAYLIST($id: ID!) {\n        deletePlaylist(id: $id)\n    }\n"): (typeof documents)["\n    mutation DELETE_PLAYLIST($id: ID!) {\n        deletePlaylist(id: $id)\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GET_PLAYLIST ($id: ID!) {\n        getPlaylistById (id: $id) {\n            id\n            posted\n            metadata {\n                createdAt\n                updatedAt\n                views\n                likes\n            }\n            playlistInput {\n                title\n                image\n                description\n                author\n                singles {\n                    title\n                    singleLinks {\n                        link\n                        platform\n                    }\n                }\n            }\n        }\n    }   \n"): (typeof documents)["\n    query GET_PLAYLIST ($id: ID!) {\n        getPlaylistById (id: $id) {\n            id\n            posted\n            metadata {\n                createdAt\n                updatedAt\n                views\n                likes\n            }\n            playlistInput {\n                title\n                image\n                description\n                author\n                singles {\n                    title\n                    singleLinks {\n                        link\n                        platform\n                    }\n                }\n            }\n        }\n    }   \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UPDATE_PLAYLIST_STATUS ($id: ID!) {\n        updatePlaylistStatus(id: $id) {\n            id\n            posted\n        }\n    }    \n"): (typeof documents)["\n    mutation UPDATE_PLAYLIST_STATUS ($id: ID!) {\n        updatePlaylistStatus(id: $id) {\n            id\n            posted\n        }\n    }    \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GET_ALL_EVENTS {\n        getAllEvents {\n            id\n            posted\n            eventInput {\n                author\n                image\n                link\n                title\n                startAt\n                endAt\n            }\n            metadata {\n                createdAt\n                updatedAt\n            }\n        }\n    }    \n"): (typeof documents)["\n    query GET_ALL_EVENTS {\n        getAllEvents {\n            id\n            posted\n            eventInput {\n                author\n                image\n                link\n                title\n                startAt\n                endAt\n            }\n            metadata {\n                createdAt\n                updatedAt\n            }\n        }\n    }    \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GET_EVENT($id: ID!) {\n        getEventById(id: $id) {\n            id\n            posted\n            eventInput {\n                author\n                image\n                link\n                title\n                startAt\n                endAt\n            }\n            metadata {\n                createdAt\n                updatedAt\n            }\n        }\n    }    \n"): (typeof documents)["\n    query GET_EVENT($id: ID!) {\n        getEventById(id: $id) {\n            id\n            posted\n            eventInput {\n                author\n                image\n                link\n                title\n                startAt\n                endAt\n            }\n            metadata {\n                createdAt\n                updatedAt\n            }\n        }\n    }    \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CREATE_EVENT($author: String!, $image: String!, $endAt: String!, $link: String, $title: String, $startAt: String) {\n        createEvent(\n            eventInput: {image: $image, author: $author, endAt: $endAt, link: $link, startAt: $startAt, title: $title}\n        ) {\n            id\n            posted\n            eventInput {\n                author\n                image\n                link\n                title\n                startAt\n                endAt\n            }\n            metadata {\n                createdAt\n                updatedAt\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation CREATE_EVENT($author: String!, $image: String!, $endAt: String!, $link: String, $title: String, $startAt: String) {\n        createEvent(\n            eventInput: {image: $image, author: $author, endAt: $endAt, link: $link, startAt: $startAt, title: $title}\n        ) {\n            id\n            posted\n            eventInput {\n                author\n                image\n                link\n                title\n                startAt\n                endAt\n            }\n            metadata {\n                createdAt\n                updatedAt\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UPDATE_EVENT($id: ID!, $author: String!, $image: String!, $endAt: String!, $link: String, $title: String, $startAt: String ) {\n        updateEvent(\n            id: $id\n            eventInput: {image: $image, author: $author, endAt: $endAt, link: $link, startAt: $startAt, title: $title}\n        ) {\n            id\n            posted\n            eventInput {\n                author\n                image\n                link\n                title\n                startAt\n                endAt\n            }\n            metadata {\n                createdAt\n                updatedAt\n            }\n        }\n    }    \n"): (typeof documents)["\n    mutation UPDATE_EVENT($id: ID!, $author: String!, $image: String!, $endAt: String!, $link: String, $title: String, $startAt: String ) {\n        updateEvent(\n            id: $id\n            eventInput: {image: $image, author: $author, endAt: $endAt, link: $link, startAt: $startAt, title: $title}\n        ) {\n            id\n            posted\n            eventInput {\n                author\n                image\n                link\n                title\n                startAt\n                endAt\n            }\n            metadata {\n                createdAt\n                updatedAt\n            }\n        }\n    }    \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UPDATE_EVENT_STATUS($id: ID!) {\n        updateEventStatus(id: $id) {\n            id\n            posted\n        }\n    }    \n"): (typeof documents)["\n    mutation UPDATE_EVENT_STATUS($id: ID!) {\n        updateEventStatus(id: $id) {\n            id\n            posted\n        }\n    }    \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation DELETE_EVENT($id: ID!) {\n        deleteEvent(id: $id)\n    }\n"): (typeof documents)["\n    mutation DELETE_EVENT($id: ID!) {\n        deleteEvent(id: $id)\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GET_ALL_ADMINS {\n        getAllAdmins{\n            id\n            email\n        }\n    }    \n"): (typeof documents)["\n    query GET_ALL_ADMINS {\n        getAllAdmins{\n            id\n            email\n        }\n    }    \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GET_ADMIN($id: ID!) {\n        getAdminById(id: $id) {\n            email\n            id\n        }\n    }\n"): (typeof documents)["\n    query GET_ADMIN($id: ID!) {\n        getAdminById(id: $id) {\n            email\n            id\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CREATE_ADMIN($email: String!, $password: String!) {\n        createAdmin(adminInput: {email: $email, password: $password}){\n            id\n            email\n        }\n    }    \n"): (typeof documents)["\n    mutation CREATE_ADMIN($email: String!, $password: String!) {\n        createAdmin(adminInput: {email: $email, password: $password}){\n            id\n            email\n        }\n    }    \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UPDATE_ADMIN($id: ID!, $email: String!, $password: String!) {\n        updateAdmin(adminInput: { email: $email, password: $password }, id: $id) {\n            email\n            id\n        }\n    }  \n"): (typeof documents)["\n    mutation UPDATE_ADMIN($id: ID!, $email: String!, $password: String!) {\n        updateAdmin(adminInput: { email: $email, password: $password }, id: $id) {\n            email\n            id\n        }\n    }  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation LOGIN($email: String!, $password: String!) {\n        login(adminInput: { email: $email, password: $password }) {\n            userId\n            token\n        }\n    }\n"): (typeof documents)["\n    mutation LOGIN($email: String!, $password: String!) {\n        login(adminInput: { email: $email, password: $password }) {\n            userId\n            token\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query VERIFY_TOKEN($token: String!) {\n        verifyToken(token: $token)\n    }\n"): (typeof documents)["\n    query VERIFY_TOKEN($token: String!) {\n        verifyToken(token: $token)\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GET_ALL_USERS {\n        getAllUsers{\n            id\n            email\n        }\n    }    \n"): (typeof documents)["\n    query GET_ALL_USERS {\n        getAllUsers{\n            id\n            email\n        }\n    }    \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GET_USER($id: ID!) {\n        getUserById(id: $id) {\n            id\n            email\n        }\n    }\n"): (typeof documents)["\n    query GET_USER($id: ID!) {\n        getUserById(id: $id) {\n            id\n            email\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CREATE_USER($email: String!, $password: String!) {\n        createUser(adminInput: {email: $email, password: $password}){\n            id\n            email\n        }\n    }    \n"): (typeof documents)["\n    mutation CREATE_USER($email: String!, $password: String!) {\n        createUser(adminInput: {email: $email, password: $password}){\n            id\n            email\n        }\n    }    \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UPDATE_USER($id: ID!, $email: String!, $password: String!) {\n        updateUser(adminInput: { email: $email, password: $password }, id: $id) {\n            email\n            id\n        }\n    }  \n"): (typeof documents)["\n    mutation UPDATE_USER($id: ID!, $email: String!, $password: String!) {\n        updateUser(adminInput: { email: $email, password: $password }, id: $id) {\n            email\n            id\n        }\n    }  \n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;