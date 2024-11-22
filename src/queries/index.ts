import { gql } from "@__generated__";

export const LOG_IN = gql(`
    mutation LOGIN($email: String!, $password: String!) {
        login(adminInput: { email: $email, password: $password }) {
            userId
            token
        }
    }
`)

export const VERIFY_TOKEN = gql(`
    query VERIFY_TOKEN($token: String!) {
        verifyToken(token: $token)
    }
`)

//#region Articles queries
export const CREATE_ARTICLE = gql(`
    mutation CREATE_ARTICLE($title: String!, $message: String!, $image: String!, $type: ArticleType!, $author: String!) {
        createArticle(articleInput: {title:$title, message: $message, image: $image, type: $type, author: $author}) {
            id
            posted
            metadata {
            createdAt
            updatedAt
            views
            likes
            }
            articleInput {
            title
            message
            image
            type
            author
            }
        }
    }    
`)
export const UPDATE_ARTICLE = gql(`
    mutation UPDATE_ARTICLE($author: String!, $image: String!, $message: String!, $title: String!, $type: ArticleType!, $id:ID!) {
        updateArticle(
            articleInput: { title: $title, message: $message, image: $image, type: $type, author: $author }
            id: $id
        ) {
            id
            posted
            metadata {
            createdAt
            updatedAt
            likes
            views
            }
            articleInput {
            author
            image
            message
            title
            type
            }
        }
    }    
`)
export const GET_ALL_ARTICLES = gql(`
    query GET_ALL_ARTICLES {
        getAllArticles {
            id
            posted
            metadata {
            createdAt
            updatedAt
            views
            likes
            }
            articleInput {
            title
            message
            type
            author
            }
        }
    }    
`)
export const DELETE_ARTICLE = gql(`
    mutation DELETE_ARTICLE($id: ID! ) {
        deleteArticle(id: $id)
    }
`)
export const GET_ARTICLE = gql(`
    query GET_ARTICLE($id: ID!) {
        getArticleById(id: $id) {
            id
            posted
            metadata {
            createdAt
            likes
            updatedAt
            views
            }
            articleInput {
            author
            image
            message
            title
            type
            }
        }
    }    
`)
export const UPDATE_ARTICLE_STATUS = gql(`
    mutation UPDATE_ARTICLE_STATUS($id: ID!) {
        updateArticleStatus(id: $id) {
            id
            posted
        }
    }    
`)
//#endregion

//#region Playlist queries
export const CREATE_PLAYLIST = gql(`
    mutation CREATE_PLAYLIST($title: String!, $description: String!, $image: String!, $singles: [SingleInput!]!, $author: String!) {
        createPlaylist(playlistInput: {title: $title, image: $image, description: $description, singles: $singles, author: $author}) {
            id
            posted
            playlistInput {
                author
                description
                image
                title
                singles {
                    title
                    singleLinks {
                        link
                        platform
                    }
                }
            }
            metadata {
                createdAt
                likes
                updatedAt
                views
            }
        }
    }  
`)
export const UPDATE_PLAYLIST = gql(`
    mutation UPDATE_PLAYLIST($id: ID!, $title: String!, $image: String!,  $description: String!, $singles: [SingleInput!]!, $author: String! ) {
        updatePlaylist(id: $id, playlistInput: {title: $title, image: $image, description: $description, singles: $singles, author: $author}) {
            id
            posted
            metadata {
                createdAt
                updatedAt
                views
                likes
            }
            playlistInput {
                title
                description
                image
                author
                singles {
                    title
                }
            }
        }
    }   
`)
export const GET_ALL_PLAYLISTS = gql(`
    query GET_ALL_PLAYLISTS {
        getAllPlaylists {
            id
            posted
            metadata {
                createdAt
                updatedAt
                views
                likes
            }
            playlistInput {
                title
                description
                author
            }
        }
    }    
`)
export const DELETE_PLAYLIST = gql(`
    mutation DELETE_PLAYLIST($id: ID!) {
        deletePlaylist(id: $id)
    }
`)
export const GET_PLAYLIST = gql(`
    query GET_PLAYLIST ($id: ID!) {
        getPlaylistById (id: $id) {
            id
            posted
            metadata {
                createdAt
                updatedAt
                views
                likes
            }
            playlistInput {
                title
                image
                description
                author
                singles {
                    title
                    singleLinks {
                        link
                        platform
                    }
                }
            }
        }
    }   
`)
export const UPDATE_PLAYLIST_STATUS = gql(`
    mutation UPDATE_PLAYLIST_STATUS ($id: ID!) {
        updatePlaylistStatus(id: $id) {
            id
            posted
        }
    }    
`)

//#endregion
//#region Admins queries

export const  GET_ALL_ADMINS = gql(`
    query GET_ALL_ADMINS {
        getAllAdmins{
            id
            email
        }
    }    
`)

export const  GET_ADMIN = gql(`
    query GET_ADMIN($id: ID!) {
        getAdminById(id: $id) {
            email
            id
        }
    }
`)

export const CREATE_ADMIN = gql(`
    mutation CREATE_ADMIN($email: String!, $password: String!) {
        createAdmin(adminInput: {email: $email, password: $password}){
            id
            email
        }
    }    
`)

export const UPDATE_ADMIN = gql(`
    mutation UPDATE_ADMIN($id: ID!, $email: String!, $password: String!) {
        updateAdmin(adminInput: { email: $email, password: $password }, id: $id) {
            email
            id
        }
    }  
`)
//#endregion
//#region Users queries

export const  GET_ALL_USERS = gql(`
    query GET_ALL_USERS {
        getAllUsers{
            id
            email
        }
    }    
`)

export const  GET_USER = gql(`
    query GET_USER($id: ID!) {
        getUserById(id: $id) {
            id
            email
        }
    }
`)

export const CREATE_USER = gql(`
    mutation CREATE_USER($email: String!, $password: String!) {
        createUser(adminInput: {email: $email, password: $password}){
            id
            email
        }
    }    
`)

export const UPDATE_USER = gql(`
    mutation UPDATE_USER($id: ID!, $email: String!, $password: String!) {
        updateUser(adminInput: { email: $email, password: $password }, id: $id) {
            email
            id
        }
    }  
`)
//#endregion