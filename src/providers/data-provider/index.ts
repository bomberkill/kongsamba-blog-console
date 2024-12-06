"use client";

import { ApolloClient, ApolloLink, DocumentNode, HttpLink, InMemoryCache } from "@apollo/client";
import { DELETE_ARTICLE, DELETE_EVENT, DELETE_PLAYLIST } from "@queries";
import { BaseRecord, CreateParams, CreateResponse, DataProvider, DeleteOneParams, DeleteOneResponse, GetListParams, GetListResponse, GetOneParams, GetOneResponse, UpdateParams, UpdateResponse } from "@refinedev/core";
import graphqlDataProvider, { GraphQLClient } from "@refinedev/graphql";

const API_URL = "http://localhost:8080/graphql";

const transformLink = new ApolloLink((operation, forward) => {
    return forward(operation).map((response) => {
      // Modify the response to only return the "data" array within "findAllAffair"
      if (response.data?.login) {
        return { data: response.data.login };
      }
      if (response.data?.getArticleById) {
        return { data: response.data.getArticleById };
      }
      if (response.data?.getAllArticles) {
        return { data: response.data.getAllArticles };
      }
      if (response.data?.getAllPlaylists) {
        return { data: response.data.getAllPlaylists };
      }
      if (response.data?.getPlaylistById) {
        return { data: response.data.getPlaylistById };
      }
      if (response.data?.getAllAdmins) {
        return { data: response.data.getAllAdmins };
      }
      if (response.data?.getAdminById) {
        return { data: response.data.getAdminById };
      }
      if (response.data?.getAllUsers) {
        return { data: response.data.getAllUsers };
      }
      if (response.data?.getUserById) {
        return { data: response.data.getUserById };
      }
      if (response.data?.getAllEvents) {
        return { data: response.data.getAllEvents };
      }
      if (response.data?.getEventById) {
        return { data: response.data.getEventById };
      }
      // If no transformation is needed, return the response as-is
      return response;
    });
  });
// export const client = new GraphQLClient(API_URL);
export const apolloClient = new ApolloClient({
    // uri: API_URL,
    cache: new InMemoryCache(),
    link: ApolloLink.from([
        transformLink, // Apply the custom transformer link
        new HttpLink({ uri: API_URL }),
      ]),
})

// export const client = new GraphQLClient(API_URL);

export const dataProvider: DataProvider = {
    getList: async ({meta, filters, pagination, sorters}: GetListParams) => {
      if (meta?.gqlQuery) {
        const paginationVariable = pagination ?? {current: 1, pageSize: 10};
        const filtersVariable = filters ?? {};
        const sortersVariable = sorters ?? [];
        const variables = {
          ...filtersVariable,
          limit: paginationVariable.pageSize,
          offset: paginationVariable.current && paginationVariable.pageSize && (paginationVariable.current - 1) * paginationVariable.pageSize,
          sorters: sortersVariable?.map(sorter => ({
            field: sorter.field,
            order: sorter.order,
          }))
        };
        const result = await apolloClient.query({query: meta.gqlQuery, variables: meta.variables ?? meta.gqlVariables ?? variables})
        if (result.data) {
          console.log("getList result: ", result.data)
          return {
            data: result.data,
            total: result.networkStatus
          };
        }
        throw new Error("getList error: ", result.errors as ErrorOptions);
        
      }
        throw new Error("missing query request");
    },
    getOne: async({id, meta}: GetOneParams) => {
      if (meta?.gqlQuery) {
        const result = await apolloClient.query({query: meta.gqlQuery, variables: {id}})
        if(result.data) {
          console.log("result getOne: ", result.data)
          return {
            data: result.data
          };
        }
        throw new Error("getOne error: ", result.errors as ErrorOptions);
      }
      throw new Error("missing query request");
      return {
        data: ""
      }
    },
    create: async ({variables, meta}) => {
      if(meta?.gqlMutation) {
        if (variables) {
          const result = await apolloClient.mutate({mutation: meta.gqlMutation, variables: variables})
          console.log("create result", result)
          if (result.data) {
            return {
              data: result.data,
            }
          }
          throw new Error("creation error: ", result.errors as ErrorOptions);
        }
        throw new Error("missing mutation variables");
      }
        throw new Error("missing mutation request");
    },
    update: async ({id, meta, variables}) => {
      if (meta?.gqlMutation) {
        if (variables || id) {
          const result = await apolloClient.mutate({mutation: meta.gqlMutation, variables: variables ? {id, variables} : {id}});
          if (result.data) {
            return {
              data: result.data
            };
          }
          throw new Error("update error: ", result.errors as ErrorOptions);
        }
        throw new Error("missing mutation variables");
      }
      throw new Error("missing mutation request");
    },
    deleteOne: async<TData extends BaseRecord = BaseRecord, TVariables = {}>({id, resource}: DeleteOneParams<TVariables>): Promise<DeleteOneResponse<TData>> => {
      let request: DocumentNode | undefined ;
      switch (resource) {
        case "articles":
          request = DELETE_ARTICLE;
        break;
        case "playlists":
          request = DELETE_PLAYLIST;
        break;
        case "events":
          request = DELETE_EVENT;
        break;
      
        default:
          break;
      }
      if (request) {
        const result = await apolloClient.mutate({mutation: request, variables: {id: String(id)}});
        if (result.data) {
          console.log("delete result: ", result.data)
          return {
            data: result.data as TData
          }
        }
        throw new Error("update error: ", result.errors as ErrorOptions);
      }
      throw new Error("delete querie not found");
    },
    getApiUrl: function (): string {
        throw new Error("Function not implemented.");
    }
};
