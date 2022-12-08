import logo from '../../assets/logo.png';
import styled from "styled-components";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from './firebase';
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import {loggin, addAdmin, islogged, admininfo} from '../../store/features/adminSlice'
import { useDispatch, useSelector } from "react-redux";
import useTitleChange from "../../hooks/useTitleChange"

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const Selector_isloggedIn = useSelector(islogged);
    const Selector_adminInfo = useSelector(admininfo);
    const navigate = useNavigate();
    const auth = getAuth(app);
    useTitleChange("Login");
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log(user)
                dispatch(addAdmin({Token: user.accessToken,email:user.email}))
                dispatch(loggin(1));
            } else {
                dispatch(loggin(0));
            }
        });
        if(+Selector_isloggedIn){
            navigate('../../')
        }
    }, [Selector_isloggedIn/*Selector_adminInfo*/]);


    console.log('login state:',Selector_isloggedIn)
    console.log(Selector_adminInfo)

    const signin =()=>{
        console.log(email,password)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            dispatch(addAdmin({Token: user.accessToken,email:user.email}))
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
    }
    return(
        <LoginBody>
            <LoginContainer>
                <LoginHeader>
                    <LoginLogo >
                        {/* <img src={logo} alt=""/> */}
                    </LoginLogo>
                    <LoginBrand >Healthcare</LoginBrand>
                </LoginHeader>
                <div >
                    <form method="post">
                        <FormItem >
                            <FormLabel htmlFor="">email</FormLabel> <br/>
                            <FormInput type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </FormItem>
                        <FormItem >
                            <FormLabel htmlFor="">mot de passe</FormLabel> <br/>
                            <FormInput type="password" name="passwd"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </FormItem>
                        <BtnConn type='button' onClick={signin}>se connecter</BtnConn>
                    </form>
                </div>
            </LoginContainer>
        </LoginBody>
    )
}

const LoginBody = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
`
const LoginContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`
const LoginLogo = styled.div`
    background-image: url('${logo}');
    background-size: cover;
    background-position: center;
    height:100px;
    width:100px;
`
const LoginBrand = styled.div`
    text-align : center ; 
    color: #019CDE;
    font-size: 3rem;
    font-weight:500;
`
const LoginHeader = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:10px;
    width:80%;
`
const FormLabel = styled.label`
    text-transform: capitalize;
    font-size: 1rem;
`
const FormItem = styled.div`
    margin: 1rem 0;
`
const FormInput = styled.input`
    margin-top: 8px;
    padding: 16px;
    width:100%;
    height: 45px;
    border: 1px solid #5C73DB;
    border-radius: 12px;
`

const BtnConn = styled.button`
    margin-top: 1 rem;
    text-align: center;
    font-size: 1rem;
    width: 555px;
    height: 45px;
    color: #fff;
    background: #019CDE;
    border-radius: 12px;
    &:hover{
        cursor:pointer;
        background: #02aef7;
    }
`