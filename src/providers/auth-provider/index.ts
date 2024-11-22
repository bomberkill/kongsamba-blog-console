import { LOG_IN, VERIFY_TOKEN } from "@queries";
import { apolloClient } from "@providers/data-provider";
import { AuthActionResponse, AuthProvider, CheckResponse, OnErrorResponse } from "@refinedev/core";

export const authProvider: AuthProvider = {
    login: async ({email, password}) => {
        const result = await apolloClient.mutate<LoginSuccessResponse>({mutation: LOG_IN, variables: {email, password}});
        // console.log("result: ", result)
        if (result.data) {
            localStorage.clear();
            localStorage.setItem("id", result.data.userId);
            localStorage.setItem("token", result.data.token);
            // console.log("id: ", localStorage.getItem("id") ," token: ", localStorage.getItem("token"));
            return {
                success: true,
                redirectTo: '/dashboard'
            };
        }
        if (result.errors) {
            return {
                success: false,
                error: {
                    message: result.errors?.toLocaleString(),
                    name: result.errors.toString(),
                },
                
            }; 
        }
        throw new Error("Error on login Function");
    },
    logout: async () => {
        localStorage.clear();
        return {
            redirectTo: "/login",
            success: true,
            successNotification: {
                message: "Success",
                description: "You are logged out"
            }
        }
    },
    check: async() => {
        const isAuthenticated = localStorage.getItem("token");
        if(isAuthenticated) {
            const result = await apolloClient.query({query: VERIFY_TOKEN, variables: {token: isAuthenticated}})
            if (result.data) {
                console.log( "check result", result.data.verifyToken)
                if (!result.data.verifyToken) {
                    localStorage.clear();
                }
                return {
                    authenticated: result.data.verifyToken,
                
                }
                
            }
            console.log("check error", result.error)
            return {
                authenticated: false
            }
        }
        return {
            authenticated: false
        }
    },
    onError: function (error: any): Promise<OnErrorResponse> {
        throw new Error("Function not implemented.");
    }
}