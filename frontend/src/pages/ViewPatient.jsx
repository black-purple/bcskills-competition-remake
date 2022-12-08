import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import { nanoid } from "@reduxjs/toolkit";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PatientEditederr, addTraitement, getPatient, PatientState, getTraitements, PatientStatus, editPatient, TraitementsState, TraitementsStatus } from "../store/features/patientsSlice";
import { useEffect, useState } from "react";
import useTitleChange from "../hooks/useTitleChange";

export default function Test(){
    const location = useLocation();
    const dispatch = useDispatch();
    const {id} = useParams();
    useTitleChange("Patient");
    const [Patient,setPatient] = useState({
        address : "",
        alerts: "",
        archived: false,
        birthdate: "",
        cin: "",
        folderid: 1,
        fullname: "",
        guardian: "",
        insurance: "",
        profession: "",
        sexe: "",
        ssn: "",
        tel: "",
    })
    const[optt,setoptt] = useState({
        select1:['H','F'],
        select2:['ATLANTIC','SMONO','AMO','CNSS'],
        select3:['deci1','deci2'],
    })
    const [Traitement, setTraitement] = useState({
        doctorname: "",
        consultationdate:"",
        consultationdetails: "",
        conclusion: "",
        decision: "",
        patient:id
    })
    const Selector_TraitementsState = useSelector(TraitementsState);
    const Selector_TraitementsStatus = useSelector(TraitementsStatus);
    const Selector_PatientState = useSelector(PatientState);
    const Selector_PatientStatus = useSelector(PatientStatus);
    const Selector_PatientEditederr = useSelector(PatientEditederr);
    console.log(Selector_PatientEditederr);
    console.log("patient:",Selector_PatientStatus);
    console.log("traitement:",Selector_TraitementsStatus);
    useEffect(()=>{
        console.log('call');
        dispatch(getPatient(id))
        dispatch(getTraitements(id))
    },[dispatch])
    useEffect(()=>{
        setPatient(Selector_PatientState);
        // console.log(Selector_PatientState);
    },[Selector_PatientState])
    const HandleChange = (e)=>{
        console.log("e.name:",e.name)
        console.log("e.value:",e.value)
        setPatient(prev=>({...prev,[e.name]:e.value}));
        setTraitement(prev=>({...prev,[e.name]:e.value}))
    }
    const HanldeSubmit = (e)=>{
        e.preventDefault();
        console.log('old',Patient)
        dispatch(editPatient(Patient))
    }
    const HandleSubmitTraitement = (e)=>{
        e.preventDefault();
        console.log(Traitement);
        const {doctorname, consultationdate, consultationdetails, conclusion, decision, patient} = Traitement;
        dispatch(addTraitement({doctorname, consultationdate, consultationdetails, conclusion, decision, patient}));
    }
    return(
        <WrapperAll >
            <Wrapper >
                <Sidebar/>
                <DashboardBody >
                    <div>
                        <BodyNav >
                            <div ></div>
                            <BodyNavTitle > <BodyNavSpan>Dashbords / </BodyNavSpan> {location.pathname.slice(1).split('/').join(' / ')} </BodyNavTitle>
                        </BodyNav>
                    </div>
                    <FormsWrapper  method="post">
                        <PatientHeader >
                            {/* <HeaderTitle  >Dossier patients</HeaderTitle> */}
                            <HeaderIcon ><i className="fa-regular fa-folder"></i></HeaderIcon>
                        </PatientHeader>
                        <FormsContainer >
                            <FormTitle >Identification : </FormTitle>
                            <FormDiv  action="">
                                <FormRow >
                                    <div >
                                        <FormLabel Htmlfor="">nom complet</FormLabel> <br/>
                                        <FormInput type="text" name="fullname" defaultValue={Selector_PatientState.fullname} onChange={(e) => HandleChange(e.target)}/>
                                    </div>
                                    <div >
                                        <FormLabel Htmlfor="">date de naissance</FormLabel> <br/>
                                        <DateInput type="date" name="birthdate" defaultValue={Selector_PatientState.birthdate} onChange={(e) => HandleChange(e.target)}/>
                                    </div>
                                </FormRow>
                                <FormRow >
                                    <div >
                                        <FormLabel Htmlfor="">CIN</FormLabel> <br/>
                                        <FormInput type="text" readOnly={true} name="cin" defaultValue={Selector_PatientState.cin} onChange={(e) => HandleChange(e.target)}/>
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
                            <FormTitle ><p>Informations : </p></FormTitle>
                            <FormDiv >
                                <FormRow >
                                    <div >
                                        <FormLabel Htmlfor="">adresse</FormLabel> <br/>
                                        <FormInput type="text" name="address" defaultValue={Selector_PatientState.address} onChange={(e) => HandleChange(e.target)}/>
                                    </div>
                                    <div >

                                        <FormLabel Htmlfor="">téléphone</FormLabel> <br/>
                                        <FormInput type="text" name="tel" defaultValue={Selector_PatientState.tel} onChange={(e) => HandleChange(e.target)}/>
                                    </div>

                                    <div >
                                        <FormLabel Htmlfor="">payeurs</FormLabel> <br/>
                                        <FormInput type="text" name="guardian" defaultValue={Selector_PatientState.guardian} onChange={(e) => HandleChange(e.target)}/>
                                    </div>
                                </FormRow>

                                <FormRow >
                                    <div >
                                        <FormLabel Htmlfor="">proffesion</FormLabel> <br/>
                                        <FormInput type="text" name="profession" defaultValue={Selector_PatientState.profession} onChange={(e) => HandleChange(e.target)}/>
                                    </div>
                                    <div >
                                        <FormLabel Htmlfor="">numéro de sécurité sociale</FormLabel> <br/>
                                        <FormInput type="text" name="ssn" defaultValue={Selector_PatientState.ssn} onChange={(e) => HandleChange(e.target)}/>
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
                                        <FormInput type="text" name="alerts" defaultValue={Selector_PatientState.alerts} onChange={(e) => HandleChange(e.target)}/>
                                    </div>
                                </FormRow>
                            </FormDiv>
                        </FormsContainer>
                        <FormsContainer >
                            <FormTitle >Traitements : </FormTitle>
                            <FormDiv  action="">
                                <FormRow >
                                    <div >
                                        <FormLabel Htmlfor="">doctor name</FormLabel> <br/>
                                        <FormInput type="text" name="doctorname" value={Traitement.doctorname} onChange={(e) => HandleChange(e.target)}/>
                                    </div>
                                    <div >
                                        <FormLabel Htmlfor="">consultation details</FormLabel> <br/>
                                        <DateInput type="text" name="consultationdetails" value={Traitement.consultationdetails} onChange={(e) => HandleChange(e.target)}/>
                                    </div>
                                    <div >
                                        <FormLabel Htmlfor="">consultation details</FormLabel> <br/>
                                        <DateInput type="date" name="consultationdate" value={Traitement.consultationdate} onChange={(e) => HandleChange(e.target)}/>
                                    </div>
                                </FormRow>
                                <FormRow >
                                    <div >
                                        <FormLabel Htmlfor="">conclusion</FormLabel> <br/>
                                        <FormInput type="text" name="conclusion" value={Traitement.conclusion} onChange={(e) => HandleChange(e.target)}/>
                                    </div>
                                    <div >
                                        <FormLabel Htmlfor="">desision</FormLabel> <br/>
                                        <FormSelect name="decision" value={Traitement.decision} onChange={(e) => HandleChange(e.target)}>//!value
                                            {
                                                optt.select3.map(e=>(
                                                <option value={e} key={nanoid()}>{e}</option>
                                                ))
                                            }
                                        </FormSelect>
                                        
                                    </div>
                                </FormRow>
                                <Wbtn istraitement={false}>
                                    <UpdateBtn color="#5c73db" type="submit" name="addp" /*onClick={(e)=>HandleSubmitTraitement(e)}*/> update Traitements</UpdateBtn>
                                    <UpdateBtn color="#5c73db" type="submit" name="addp"onClick={(e)=>HandleSubmitTraitement(e)}> Ajouter Traitements</UpdateBtn>
                                </Wbtn>
                            

                            </FormDiv>
                        </FormsContainer>
                        <FormsContainer>
                        <FormTitle></FormTitle>
                            <TraitementTable>
                                <TableHeader >
                                    <NomMedecin >Nom de medecin</NomMedecin>
                                    <Date >conclusion date</Date>
                                    <Conclusion >conclusion</Conclusion>
                                    <Decisions >Decision</Decisions>
                                    <Action >action</Action>
                                </TableHeader>
                                <TableBody >
                                    {Selector_TraitementsState.length===0?<Exeption>no traitement</Exeption>:Selector_TraitementsState.map(e=>(
                                        <BodyRow key={nanoid()}>
                                            <NomMedecin >{e.doctorname}</NomMedecin>
                                            <Date >{e.consultationdate.split('T')[0]}</Date>
                                            <Conclusion >{e.conclusion}</Conclusion>
                                            <Decisions >{e.decision}</Decisions>
                                            <Action ><i className="fa-solid fa-pen-to-square"></i></Action>
                                        </BodyRow>
                                    ))}

                                </TableBody>
                            </TraitementTable>
                        </FormsContainer>
                        <Wbtn istraitement={true}><UpdateBtn  type="submit" name="addp" onClick={(e)=>HanldeSubmit(e)}> Update </UpdateBtn></Wbtn>
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
const HeaderTitle = styled.div`
`
const HeaderIcon = styled.div`
    font-size: 100px;
    position:relative;
    &:after{
        content:"";
        height:2px;
        width:150%;
        background:rgba(182, 178, 178, 0.685);
        top:50%;
        letf:0;
        position:absolute;
    }
    &:before{
        content:"";
        height:2px;
        width:48px;
        background:rgba(182, 178, 178, 0.685);
        top:50%;
        letf:0;
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
    margin-left:${props=>props.istraitement?"320px":"0"};
    // background:red;
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
    background: ${(props)=>props.color?"#019CDE":"#5c73db"};
    border-radius: 12px;
    &:hover{
        cursor:pointer;
        background-color:#017ede;
    }
    margin:0 10px 0 0;

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
const TraitementTable = styled.div`
    // background:red;
    width:100%;
`
const TableHeader = styled.div`
    display: flex;
    height: 30px;
    align-items: center;
    padding:0 5px;
    background-color: rgba(234, 234, 237, 0.382);
    border-radius:5px;
`
const TableBody = styled.div`
    background:pink;
`
const Exeption = styled.p`
    padding:5px;
`
const BodyRow = styled.div`
    height:100px;
    background-color: rgba(234, 234, 237, 0.882);
    display: flex;
    height: 40px;
    align-items: center;
    border-top: 1px solid grey;
    padding:0 5px
`
const NomMedecin = styled.div`
    width: 180px;
`
const Date = styled.div`
    width: 150px;
`
const Conclusion = styled.div`
    width: 220px;
    overflow:hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding:0 5px 0 0;
`
const Decisions = styled.div`
    width: 130px;
`
const Action = styled.div`
    width: 50px;
`