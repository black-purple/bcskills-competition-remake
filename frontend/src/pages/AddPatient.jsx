import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import { nanoid } from "@reduxjs/toolkit";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPatient, /*PatientAddStatus*/ } from "../store/features/patientsSlice";
import { useEffect, useState } from "react";
import useTitleChange from "../hooks/useTitleChange";
export default function Addpatient(){
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const Selector_AddPatientStatus = useSelector(PatientAddStatus);
    useTitleChange("New Patient")
    const [Patient,setPatient] = useState({
        address : "",
        alerts: "",
        archived: false,
        birthdate: "",
        cin: "",
        folderid: 1,
        fullname: "",
        guardian: "",
        insurance: "ATLANTIC",
        profession: "",
        sexe: "H",
        ssn: "",
        tel: "",
    })
    // eslint-disable-next-line no-unused-vars
    const[optt,setoptt] = useState({
        select1:['H','F'],
        select2:['ATLANTIC','SMONO','AMO','CNSS'],
    })
    useEffect(()=>{
        console.log('call');
        // dispatch(getArchivedPatient(id))
    },[dispatch])
    const HandleChange = (e)=>{
        console.log("e.name:",e.name)
        console.log("e.value:",e.value)
        setPatient(prev=>({...prev,[e.name]:e.value}))
    }
    const HanldeSubmit = (e)=>{
        e.preventDefault();
        dispatch(addPatient(Patient));
        console.log(Patient);
        navigate('../../')
    }
    return(
        <WrapperAll >
            <Wrapper >
                <Sidebar/>
                <DashboardBody >
                    <div>
                        <BodyNav >
                            <div></div>
                            <BodyNavTitle> <BodyNavSpan>Dashbords / </BodyNavSpan> {location.pathname.slice(1).split('/').join(' / ')} </BodyNavTitle>
                        </BodyNav>
                    </div>
                    <FormsWrapper method="post">
                        <PatientHeader >
                            {/* <HeaderTitle className="pHeaderTitle" >Dossier patients</HeaderTitle> */}
                            <HeaderIcon ><i className="fa-regular fa-folder"></i></HeaderIcon>
                        </PatientHeader>
                        <FormsContainer >
                            <FormTitle>identification : </FormTitle>
                            <FormDiv action="">
                                <FormRow>
                                    <div >
                                        <FormLabel Htmlfor="">nom complet</FormLabel> <br/>
                                        <FormInput type="text" name="fullname" onChange={(e) => HandleChange(e.target)}/>
                                    </div>
                                    <div >
                                        <FormLabel Htmlfor="">date de naissance</FormLabel> <br/>
                                        <DateInput type="date" name="birthdate" onChange={(e) => HandleChange(e.target)}/>
                                    </div>
                                </FormRow>
                                <FormRow >
                                    <div >
                                        <FormLabel Htmlfor="">CIN</FormLabel> <br/>
                                        <FormInput type="text" name="cin" onChange={(e) => HandleChange(e.target)}/>
                                    </div>
                                    <div >
                                        <FormLabel Htmlfor="">sexe</FormLabel> <br/>
                                        <FormSelect name="sexe" id="" value={Patient.sexe} onChange={(e) => HandleChange(e.target)}>
                                        {
                                            optt.select1.map(e=>(
                                                <option value={e} key={nanoid()}>{e}</option>
                                            ))
                                        }
                                        </FormSelect>
                                    </div>
                                </FormRow>
                            </FormDiv>
                        </FormsContainer>
                        <FormsContainer >
                            <FormTitle ><p>informations : </p></FormTitle>
                            <FormDiv >
                                <FormRow >
                                    <div >
                                        <FormLabel Htmlfor="">adresse</FormLabel> <br/>
                                        <FormInput type="text" name="address" onChange={(e) => HandleChange(e.target)}/>
                                    </div>
                                    <div >

                                        <FormLabel Htmlfor="">téléphone</FormLabel> <br/>
                                        <FormInput type="text" name="tel" onChange={(e) => HandleChange(e.target)}/>
                                    </div>

                                    <div >
                                        <FormLabel Htmlfor="">payeurs</FormLabel> <br/>
                                        <FormInput type="text" name="guardian" onChange={(e) => HandleChange(e.target)}/>
                                    </div>
                                </FormRow>

                                <FormRow >
                                    <div >
                                        <FormLabel Htmlfor="">proffesion</FormLabel> <br/>
                                        <FormInput type="text" name="profession" onChange={(e) => HandleChange(e.target)}/>
                                    </div>
                                    <div >
                                        <FormLabel Htmlfor="">numéro de sécurité sociale</FormLabel> <br/>
                                        <FormInput type="text" name="ssn" onChange={(e) => HandleChange(e.target)}/>
                                    </div>
                                    <div >
                                        <FormLabel Htmlfor="">mutuelle</FormLabel> <br/>
                                        <FormSelect name="insurance" id="" value={Patient.insurance} onChange={(e) => HandleChange(e.target)}>
                                        {
                                            optt.select2.map(e=>(
                                                <option value={e} key={nanoid()}>{e}</option>
                                            ))
                                        }
                                        </FormSelect>
                                    </div>
                                </FormRow>
                                <FormRow >
                                    <div >
                                        <FormLabel Htmlfor="">données d'alertes</FormLabel> <br/>
                                        <FormInput type="text" name="alerts" onChange={(e) => HandleChange(e.target)}/>
                                    </div>
                                </FormRow>
                            </FormDiv>
                        </FormsContainer>
                        <Wbtn ><UpdateBtn  type="submit" name="addp" onClick={(e)=>HanldeSubmit(e)}> Ajouter </UpdateBtn></Wbtn>
                    </FormsWrapper>
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
    // background-color: red;
    height: 100vh;
    overflow-x:hidden;
`
const DashboardBody = styled.div`
    background-color: #fff;
    width: calc(100% - 250px);
    overflow-x:hidden;
    // background:yellow;
    overflow-y:scroll;
`
const BodyNav = styled.div`
    // padding: 2rem 3rem;
`
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
const FormsWrapper = styled.div`
    // padding-top: 3rem;
    padding-left: 3rem;
    display: flex;
    flex-direction: column;
    // background:blue;
    padding-right:25rem;
`
const FormsContainer = styled.div`
    // background:red;
    display: flex;
    gap: 20px;
    margin-bottom: 1.5rem;
    width:90%;
`
const PatientHeader = styled.div`
    padding:0 0 40px 0;
`
// const HeaderTitle = styled.div`
// `
const HeaderIcon = styled.div`
    font-size: 100px;
    position:relative;
    &:after{
        content:"";
        height:2px;
        width:150%;
        background:rgba(182, 178, 178, 0.685);
        top:50%;
        left:0;
        position:absolute;
    }
    &:before{
        content:"";
        height:2px;
        width:48px;
        background:rgba(182, 178, 178, 0.685);
        top:50%;
        left:0;
        position:absolute;
        transform: translateX(-100%)
    }
`
const FormTitle = styled.div`
    font-size: 1.2rem;
    font-weight: 500;
    //! background: green;
    min-width: 300px;
`
const FormDiv = styled.div`
    //! background:yellow;
    margin-top: 5px;
`
const FormLabel = styled.label`
    color: #090e1a;
    text-transform: capitalize;
`
const FormInput = styled.input`
    margin-top: 8px;
    padding: 0 10px;
    height: 40px;
    width: 250px;
    font-size: .9rem ;
    color:#636466;
    border: 1px solid #E4E4E7;
    border-radius: 12px;
    &:focus{
        outline: 1px solid #019CDE;
    }
`
const FormSelect = styled.select`
    margin-top: 8px;
    padding: 0 10px;
    height: 40px;
    width: 250px;
    font-size: .9rem ;
    color:#636466;
    border: 1px solid #E4E4E7;
    border-radius: 12px;
    //! padding:0 5px;
    //! width: 100%;
    &:focus{
        outline: 1px solid #019CDE;
    }
`
const FormRow = styled.div`
    //! background:blue;
    display: flex;
    margin-bottom: 1rem;
    gap: 10px;
`
const Wbtn = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 1rem;
    width:90%;
    margin-left:320px;
`
const UpdateBtn = styled.div`
    outline: 0;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size: 1rem;
    width: 200px;
    height: 40px;
    color: #fff;
    background: #019CDE;
    border-radius: 12px;
    &:hover{
        cursor:pointer;
        background-color:#017ede;
    }
`
const DateInput = styled.input`
    margin-top: 8px;
    padding: 0 10px;
    height: 40px;
    width: 250px;
    font-size: .9rem ;
    color:#636466;
    border: 1px solid #E4E4E7;
    border-radius: 12px;
    padding:0 5px;
    &:focus{
        outline: 1px solid #019CDE;
    }
`