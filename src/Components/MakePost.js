import React,{ useState } from 'react'
import styles from '.././styles/MakePost.module.css'
import {useMutation,gql} from '@apollo/client'

function MakePost() {
    const CREATE_POST_MUTATION = gql`
    mutation createPost(
        $Titel:String!
        $Content:String!  
        $Author:String){
        createPost(
            Titel:$Titel
            Content:$Content  
            Author:$Author
            ){
            id
        }
    }
    `

    const [Name, setName] = useState("");
    const [Titel, setTitel] = useState("");
    const [Text, setText] = useState("");
    const [Error, setError] = useState("")
    const [Success, setSuccess] = useState("")
    const [createPost] = useMutation(CREATE_POST_MUTATION,{
            variables:{
                Titel: Titel,
               Content: Text,
               Author: Name,
            },
    })
    const Validate = ()=>{
        if(Name==="" || Text==="" || Titel===""){
            setError("You have to fill all fields")
        }
        else{
            createPost();
            setSuccess("You will be redirected soon")
            setTimeout(()=>{
                window.location.reload(true);
            },2000)
            
        }
    }
    return (
        
        <form className={styles.PostInput} onSubmit={(e) => {
            e.preventDefault();
            Validate();
          }}>
            {Error && <li className={styles.Error}>{Error}</li>}
            {Success && <li className={styles.Success}> {Success}</li>}
            <li ><input className={styles.PostShort} type="text" placeholder="Name" name="name" onChange={(e)=>{setName(e.target.value)}}></input></li>
            <li ><input className={styles.PostShort} type="text" placeholder="Title" name="title" onChange={(e)=>{setTitel(e.target.value)}}></input></li>
            <li ><textarea className={styles.PostText} type="text" placeholder="Inhalt" name="text" onChange={(e)=>{setText(e.target.value)}}></textarea></li>
            <li><button className={styles.PostButton}>Send</button></li> 
        </form>
    )
}

export default MakePost
