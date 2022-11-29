import logo from '../../assets/logo.png';
import styled from "styled-components";

export default function Login(){
    
    return(
        <LoginBody>
            <LoginContainer>
                <div>
                    <LoginLogo >
                        <img src={logo} alt=""/>
                    </LoginLogo>
                    <LoginBrand >Healthcare</LoginBrand>
                </div>
                <Msg >
                    Merci d'entrer vos informations
                </Msg>

                <FormContainer >
                    <form method="post">
                        <FormItem >
                            <FormLabel htmlFor="">email</FormLabel> <br/>
                            <FormInput type="email" name="email"/>
                        </FormItem>
                        <FormItem >
                            <FormLabel htmlFor="">mot de passe</FormLabel> <br/>
                            <FormInput type="password" name="passwd"/>
                        </FormItem>
                        <BtnConn  name="login">se connecter</BtnConn>
                    </form>
                </FormContainer>
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
   margin-top: 5rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`
const LoginLogo = styled.div`
    /* background-image: url('../assets/logo.png'); */
    background-size: cover;
    background-position: center;
`
const LoginBrand = styled.div`
    text-align : center ; 
    color: #019CDE;
    font-size: 3rem;
`
const Msg = styled.div`
    text-align: center;
    color: #18181b;
    font-size: 1.8rem;
`

const FormContainer = styled.div`
    margin-top: 1rem;
`
const FormLabel = styled.label`
    text-transform: capitalize;
    font-size: 1.1rem;
`
const FormItem = styled.div`
    margin: 1rem 0;
`
const FormInput = styled.input`
    margin-top: 8px;
    padding: 16px;
    width: 520px;
    height: 20px;
    border: 1px solid #5C73DB;
    border-radius: 12px;
`

const BtnConn = styled.button`
    margin-top: 1.2rem;
    text-align: center;
    font-size: 1rem;
    width: 555px;
    height: 48px;
    color: #fff;
    background: #019CDE;
    border-radius: 12px;
`