import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import {Link, useLocation} from "react-router-dom"
export default function Archive(){
    const location = useLocation();
    return(
        <WrapperAll >
            <Wrapper >
                <Sidebar/>
                <DashboardBody >
                    <div>
                        <BodyNav >
                            <div ></div>
                            <BodyNavTitle > <BodyNavSpan>Dashbord / </BodyNavSpan> {location.pathname.slice(1)} </BodyNavTitle>
                        </BodyNav>
                        <InfoTable >
                            <Titleh5>Archive</Titleh5>
                            <TableHeader >
                                {/* <div >
                                    <Btnaction style={{"padding":".2rem"}}>Add patient</Btnaction>
                                </div> */}
                                <SearchI >
                                    <SearchInput type="input" placeholder="search"/>
                                </SearchI>
                            </TableHeader>
                            <TableBody >
                                <TableBodyNav >
                                    <Cin >cin</Cin>
                                    <FullName >nom complet</FullName>
                                    <Sexe>sex</Sexe>
                                    <ActionInfo >action</ActionInfo>
                                </TableBodyNav>
                                <div >
                                    <TableBodyInfo >
                                        <Cin ><Link to={'../dossier/viewpatient'}>JG2345</Link></Cin>
                                        <FullName >mossaab amimar</FullName>
                                        <Sexe ><P gender={'male'}>male</P></Sexe>
                                        <ActionInfo >
                                            <form method='post'>
                                                <BtnactionLink to={"../dossier/addpatient"}><i class="fa-solid fa-file-waveform"></i> &nbsp;Add traitement</BtnactionLink>
                                                <Btnaction type='submit' name='archive' ><i class='fa-solid fa-box-archive'></i> &nbsp;X</Btnaction>
                                            </form>
                                        </ActionInfo>
                                    </TableBodyInfo>
                                </div>
                            </TableBody>
                        </InfoTable>
                    </div>
                </DashboardBody>
            </Wrapper>
        </WrapperAll>
    )
}

const WrapperAll = styled.div`
    background-color: aquamarine;
`
const Wrapper = styled.div`
    display: flex;
    background-color: red;
    height: 100vh;
`
// .dashboard_body_nav{
//     /* background-color: red; */
//     height: 50px;
//     display: flex;
//     align-items: center;
//     justify-content: flex-start;
    
// }
const Titleh5 = styled.h5`
    font-weight:500;
    font-size:16px;
    padding: 15px 0 15px 0;
`
const DashboardBody = styled.div`
    background-color: #fff;
    width: calc(100% - 250px);
    // background:yellow;
`
const BodyNav = styled.div`
    // padding: 2rem 3rem;
`
// .body_wrapper{
//     margin: 2rem 3rem;
// }
const BodyNavTitle = styled.div`
    // background:red;
    font-size: 0.9rem;
    color:  #0f172a;
    letter-spacing: 2px;
    padding: 1rem 3rem;
    margin: 0 0 2rem 0;
    border-bottom:1px solid rgba(182, 178, 178, 0.685);
`
const BodyNavSpan = styled.span`
    opacity: 0.8;
`
const TableHeader = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
`
const Btnaction = styled.button`
    padding: 5px 10px;
    font-size:14px;
    margin: 0 15px 0 0;
    border-radius: 5px;
    border: none;
    background-color: #cfc4c4;
    &:hover{
        background-color: #e7e1e1;
        cursor: pointer;
    }
`
const BtnactionLink = styled(Link)`
    padding: 5px 10px;
    margin: 0 15px 0 0;
    font-size:14px;
    border-radius: 5px;
    border: none;
    text-decoration:none;
    color:  #000000;
    background-color: #cfc4c4;
    &:hover{
        background-color: #e7e1e1;
        cursor: pointer;
    }
`
const SearchInput = styled.input`
    border-radius: 10px;
    border:1px solid rgba(182, 178, 178, 0.685);
    padding: 7px 10px;
`
const SearchI = styled.div`
    margin-left: auto;
`
const TableBody = styled.div`
    padding: 10px 0;
`
const InfoTable = styled.div`
    padding: 10px 40px !important;
`
const TableBodyNav = styled.div`
    /* background-color: blue; */
    display: flex;
    height: 30px;
    align-items: center;
    padding:0 5px

    // border-bottom: 1px solid black;
`
const TableBodyInfo = styled.div`
    background-color: rgba(234, 234, 237, 0.882);
    display: flex;
    height: 40px;
    align-items: center;
    border-top: 1px solid grey;
    
    padding:0 5px
`
/* size */
const Cin = styled.div`
    width: 150px;
`
const FullName = styled.div`
    width: 350px;
`
const Sexe = styled.div`
    width: 250px;
`
const ActionInfo = styled.div`
    width: 350px;
`
const P = styled.p`
    color:${props=>props.gender=='male'?"#2DA9D9":"#B73377"}
`