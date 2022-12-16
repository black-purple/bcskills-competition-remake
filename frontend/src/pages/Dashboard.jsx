import Sidebar from "../components/Sidebar";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from "styled-components"
import {Link, useNavigate} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { claerarchivedpatient, getPatients, PatientsState, PatientsStatus, archivePatient, ArchivePatientsStatus, PatientsLoading} from "../store/features/patientsSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import useTitleChange from "../hooks/useTitleChange";
import {debounce} from "../api/api_helper";
import api from "../api/api_data";

export default function Dashboard(){
    const [skip, setSkip] = useState(0);
    const [currpage, setCurrpage] = useState(0);
    const [searchPatientres, setSearchPatientres ] = useState('');
    const [ searchErr, setSearchErr ] = useState('');//!errr
    const [ searchall, setSearchall ] = useState( true )

    const Selector_patientState = useSelector(PatientsState);
    const Selector_patientStateStatus = useSelector(PatientsStatus);
    const Selector_ArchiveActionStatus = useSelector(ArchivePatientsStatus);
    const Selector_PatientsLoading = useSelector(PatientsLoading);
    // const Selector_PatientStateSerach = useSelector(PatientState);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    useTitleChange("DashBoard");
    useEffect(() => {
        dispatch(getPatients());
        // setSkip(0);//!
        setCurrpage(0);
    }, [Selector_ArchiveActionStatus,dispatch])//?status
    // useEffect(()=>{
    //     // setLoading(true)
    //     // const timing = setTimeout(()=>{
    //     //     setLoading(false)
    //     // }, 4000)
    //     // return ()=>clearTimeout(timing)
    //     console.log(Selector_PatientsLoading)
    // },[])

    useEffect(()=>{
        dispatch(getPatients(skip));
    },[dispatch, skip])

    useEffect(()=>{
        if(Selector_patientState.length===0 && Selector_patientStateStatus==='success' && currpage!==0){
            setSkip(prev=>prev-5)
        }
    },[Selector_patientState, Selector_patientStateStatus, currpage])
    
    console.log('statussss',Selector_patientStateStatus);
    console.log(Selector_patientState);
    console.log(Selector_ArchiveActionStatus);

    const handleSearch = (e)=>{
        act(e.target.value);
    }
    async function getPatientSearch(cin){
        if(cin.length!==0){
            const response = await api.get(`/get/patient/${cin}`);
            setSearchall(false)
            setSearchPatientres(response.data)
            if(response.data === 0 ){setSearchErr('patient not found')}
            else{
                setSearchErr(0)
            }
        }
        else{
            setSearchall(true)
            setSearchPatientres('')
        }
        console.log(searchall)
        console.log(searchall)
    }
    const act = debounce(getPatientSearch)
    console.log(searchPatientres.length)

    const SkipPage=(action)=>{
        if(currpage===0){setCurrpage(1)}
        if(action==='next'){
            setSkip(prev=>(Selector_patientState.length===0?prev:prev+5))
        }else if(action==='prev'){
            setSkip(prev=>(prev===0?prev:prev-5));
        }
    }
    const clearArchive = ()=>{
        dispatch(claerarchivedpatient())
    }
    return(
        <WrapperAll >
            <Wrapper >
                <Sidebar/>
                <DashboardBody >
                    <div>
                        <BodyNav >
                            <div ></div>
                            <BodyNavTitle > <BodyNavSpan>Dashbord / </BodyNavSpan> Dossier </BodyNavTitle>
                        </BodyNav>
                        <InfoTable >
                            <Titleh5>Dossier patient</Titleh5>
                            <TableHeader >
                                <div >
                                    <Btnaction onClick={()=>{navigate('dossier/addpatient')}}><i className="fa-solid fa-user-plus"></i> &nbsp;Add patient</Btnaction>
                                </div>
                                <SearchI >
                                    <SearchInput type="text" placeholder="search" onChange={(e)=>handleSearch(e)}/>
                                </SearchI>
                            </TableHeader>
                            <TableBody >
                                <TableBodyNav >
                                    <Cin >CIN</Cin>
                                    <FullName >NOM COMPLET</FullName>
                                    <Sexe>SEX</Sexe>
                                    <ActionInfo >ACTION</ActionInfo>
                                </TableBodyNav>
                                <div >
                                    {Selector_PatientsLoading && <TableBodyInfo key={nanoid()}>
                                        <Cin onClick={clearArchive}>{<Skeleton width={70}/>}</Cin>
                                        <FullName >{<Skeleton width={200}/>}</FullName>
                                        <Sexe ><P>{<Skeleton width={70}/>}</P></Sexe>
                                        <ActionInfo >
                                                {<Skeleton width={70} />}&nbsp;
                                                {<Skeleton width={70}/>}
                                        </ActionInfo>
                                    </TableBodyInfo>}
                                    {!Selector_PatientsLoading && ((searchPatientres.length===0 && searchall===true)?
                                    Selector_patientState.map(e=>
                                        (   <TableBodyInfo key={nanoid()}>
                                                <Cin ><Link to={`dossier/viewpatient/${e.cin}`} onClick={clearArchive}>{e.cin}</Link></Cin>
                                                <FullName >{e.fullname}</FullName>
                                                <Sexe ><P gender={e.sexe}>{e.sexe ==="H"?"homme":"femme"}</P></Sexe>
                                                <ActionInfo >
                                                        <BtnactionLink to={`dossier/viewpatient/${e.cin}`} type='submit' name='archive' onClick={clearArchive}><i className="fa-solid fa-pen-to-square"></i> &nbsp;Edit Patient</BtnactionLink>
                                                        <Btnaction type='button' name='archive' onClick={()=>dispatch(archivePatient(e.cin))}><i className='fa-solid fa-box-archive'></i> &nbsp;Archive</Btnaction>
                                                </ActionInfo>
                                            </TableBodyInfo>
                                        )
                                        )
                                    :   searchErr?searchErr:
                                        <TableBodyInfo key={nanoid()}>
                                            <Cin ><Link to={`dossier/viewpatient/${searchPatientres.cin}`} onClick={clearArchive}>{searchPatientres.cin}</Link></Cin>
                                            <FullName >{searchPatientres.fullname}</FullName>
                                            <Sexe ><P gender={searchPatientres.sexe}>{searchPatientres.sexe ==="H"?"homme":"femme"}</P></Sexe>
                                            <ActionInfo >
                                                    <BtnactionLink to={`dossier/viewpatient/${searchPatientres.cin}`} type='submit' name='archive' onClick={clearArchive}><i className="fa-solid fa-pen-to-square"></i> &nbsp;Edit Patient</BtnactionLink>
                                                    <Btnaction type='button' name='archive' onClick={()=>dispatch(archivePatient(searchPatientres.cin))}><i className='fa-solid fa-box-archive'></i> &nbsp;Archive</Btnaction>
                                            </ActionInfo>
                                        </TableBodyInfo>)
                                    }
                                </div>
                            </TableBody>
                            <Btnaction type='button' onClick={()=>SkipPage('prev')}><i className="fa-solid fa-caret-left" ></i></Btnaction>
                            <Btnaction type='button' onClick={()=>SkipPage('next')}><i className="fa-solid fa-caret-right"></i></Btnaction>
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
    border-top: 1px solid #cdc8c8;

    padding:0 5px
`
/* size */
const Cin = styled.div`
    width: 150px;
    text-decoration: none;
    color: black;
`
const FullName = styled.div`
    width: 350px;
`
const Sexe = styled.div`
    width: 250px;
`
const ActionInfo = styled.div`
    width: 350px;
    // background:red;
    display: flex;
`
const P = styled.p`
    color:${props=>props.gender==='H'?"#2DA9D9":"#B73377"}
`