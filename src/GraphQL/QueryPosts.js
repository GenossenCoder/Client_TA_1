import {gql} from '@apollo/client';
export const GET_Posts= gql`
    query{
        Post{
            id
            Author 
            Titel 
            Content
            Date
            }
        }
`