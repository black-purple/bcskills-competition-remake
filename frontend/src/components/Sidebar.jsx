import styled from "styled-components";
import {NavLink, useLocation} from "react-router-dom"
import backgProfile from "../assets/profile.jpg"
import { useNavigate } from 'react-router-dom'
import {loggin, islogged, admininfo} from '../store/features/adminSlice'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//firebase
import { getAuth, signOut } from "firebase/auth";


export default function Sidebar(){
    const location = useLocation();
    const navigate = useNavigate();
    const Selector_isloggedIn = useSelector(islogged);
    const Selector_adminInfo = useSelector(admininfo);

    const dispatch = useDispatch();
    //firebase
    const auth = getAuth();
    const signout = ()=>{
        signOut(auth).then(() => {
            console.log('signout succe')
            dispatch(loggin(0));
            console.log('login state in signout:',Selector_isloggedIn)
        }).catch((error) => {
            console.log(error);
        });
    }
    useEffect(()=>{
        if(!+Selector_isloggedIn){
            navigate('/login');
        }
        console.log('redd',Selector_isloggedIn)
    },[Selector_isloggedIn, navigate])
    console.log(Selector_adminInfo)
    console.log('sidebar login state:',Selector_isloggedIn)
    return(
        <>
            <Sidebarr >
                <Profile >
                    <ProfileImgName >
                        <ProfileImg ></ProfileImg>
                        <AdminEmail>{Selector_adminInfo.email}</AdminEmail>
                    </ProfileImgName>
                    <div >
                        {/* <form method="post"> */}
                            <LogoutBtn type="button" onClick={signout}>
                                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                            </LogoutBtn>
                        {/* </form> */}
                    </div>
                </Profile>
                <Menu >
                    <MenuTitle >Dashboard</MenuTitle>
                    <div >
                        <MenuUl>
                            <NavLinkS to={"/"} >
                                <MenuLi isActive ={location.pathname==="/"?true:false}><i className="fa-regular fa-folder" style={{"padding": "0 10px"}}></i>Dossier</MenuLi>
                            </NavLinkS>
                            <NavLinkS to={"/archive"} >
                                <MenuLi isActive ={location.pathname==="/archive"?true:false}><i className="fa-solid fa-box-archive" style={{"padding": "0 10px"}}></i>Archive</MenuLi>
                            </NavLinkS>
                        </MenuUl>
                    </div>
                </Menu>
            </Sidebarr>
            {/* <Outlet/>    */}
        </>
    )
}

const AdminEmail = styled.p`
    overflow:hidden;
    width:140px;
    text-overflow: ellipsis;
`
const LogoutBtn = styled.button`
    border: none;
    padding: .3rem;
    // background-color: lightgrey;
    color: grey;
    border: .1rem solid lightgrey;    
    border-radius: .3rem;
    cursor: pointer;
`
const MenuLi = styled.li`
    padding: 5px 0;
    display: flex;
    align-items: center;
    ${
        props=>props.isActive=== true?
        `background-color: rgba(180, 172, 172, 0.503);
        border-radius: 0 5px 5px 0px;
        border-left: 4px solid rgb(38, 37, 37);`:""
    }
`
const NavLinkS = styled(NavLink)`
    color: #0f172a;
    text-decoration:none;
`
/* ########## sidebar ################ */
const Sidebarr = styled.div`
    background-color: #ffffff;
    width: 250px;
    border-right: 1px solid rgba(182, 178, 178, 0.685);
    // height: 100vh;
`
const Profile = styled.div`
    /* background-color: yellowgreen; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10px;
`
const ProfileImgName = styled.div`
    // background-color: red;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap:10px;
    // width: 100%;
`
const ProfileImg = styled.div`
    background-image: url("${backgProfile}");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;
    border-radius: 50px;
`
const Menu = styled.div`
    /* background-color: rosybrown; */
    padding: 0 10px;
    margin: 50px 0 0 0;
`
const MenuTitle = styled.p`
    color: #615a5a;
    padding: 0 0 15px 0;
    font-weight: 500;
`
const MenuUl = styled.ul`
    /* background-color: aqua; */
    list-style-type: none;
`
// const MenuActive = styled.div`
//     background-color: rgba(180, 172, 172, 0.503);
//     border-radius: 0 5px 5px 0px;
//     border-left: 4px solid rgb(38, 37, 37);
// `
// const I = styled(i)`
// padding: 0 10px;
// `
