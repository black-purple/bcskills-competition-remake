import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import {useLocation} from "react-router-dom";
import useTitleChange from "../hooks/useTitleChange";
export default function Test(){
    const location = useLocation();
    useTitleChange("Patient Update");
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
                            <HeaderIcon ><i class="fa-regular fa-folder"></i></HeaderIcon>
                        </PatientHeader>
                        <FormsContainer >
                            <FormTitle >Identification : </FormTitle>
                            <FormDiv  action="">
                                <FormRow >
                                    <div >
                                        <FormLabel Htmlfor="">nom complet</FormLabel> <br/>
                                        <FormInput type="text" name="nom"/>
                                    </div>
                                    <div >
                                        <FormLabel Htmlfor="">date de naissance</FormLabel> <br/>
                                        <DateInput type="date" name="daten"/>
                                    </div>
                                </FormRow>
                                <FormRow >
                                    <div >
                                        <FormLabel Htmlfor="">CIN</FormLabel> <br/>
                                        <FormInput type="text" name="cin"/>
                                    </div>
                                    <div >
                                        <FormLabel Htmlfor="">sexe</FormLabel> <br/>
                                        <FormSelect name="sexe" id="">
                                            <option value="Homme">Homme</option>
                                            <option value="Femme">Femme</option>
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
                                        <FormInput type="text" name="adresse"/>
                                    </div>
                                    <div >

                                        <FormLabel Htmlfor="">téléphone</FormLabel> <br/>
                                        <FormInput type="text" name="tel"/>
                                    </div>

                                    <div >
                                        <FormLabel Htmlfor="">payeurs</FormLabel> <br/>
                                        <FormInput type="num" name="payeurs"/>
                                    </div>
                                </FormRow>

                                <FormRow >
                                    <div >
                                        <FormLabel Htmlfor="">proffesion</FormLabel> <br/>
                                        <FormInput type="text" name="profession"/>
                                    </div>
                                    <div >
                                        <FormLabel Htmlfor="">numéro de sécurité sociale</FormLabel> <br/>
                                        <FormInput type="text" name="secsoc"/>
                                    </div>
                                    <div >
                                        <FormLabel Htmlfor="">mutuelle</FormLabel> <br/>
                                        <FormSelect name="mutuelle" id="">
                                            <option value="ATLANTIC" selected>ATLANTIC</option>
                                            <option value="SMONO">SMONO</option>
                                            <option value="AMO">AMO</option>
                                            <option value="CNSS">CNSS</option>
                                        </FormSelect>
                                    </div>
                                </FormRow>
                                <FormRow >
                                    <div >
                                        <FormLabel Htmlfor="">données d'alertes</FormLabel> <br/>
                                        <FormInput type="text" name="alertes"/>
                                    </div>
                                </FormRow>
                            </FormDiv>
                        </FormsContainer>
                        <FormsContainer>
                        <FormTitle>Traitements :</FormTitle>
                            <TraitementTable>
                                <TableHeader >
                                    <NomMedecin >Nom de medecin</NomMedecin>
                                    <Date >Date de la conclusion</Date>
                                    <Conclusion >conclusion</Conclusion>
                                    <Decisions >Decision</Decisions>
                                    <Action >action</Action>
                                </TableHeader>
                                <TableBody >
                                    <BodyRow >
                                        <NomMedecin >mossaab amimar</NomMedecin>
                                        <Date >22/22/22</Date>
                                        <Conclusion >Radiographe</Conclusion>
                                        <Decisions >confirme</Decisions>
                                        <Action ><i class="fa-solid fa-trash"></i></Action>
                                    </BodyRow>
                                    <BodyRow >
                                        <NomMedecin >mossaab amimar</NomMedecin>
                                        <Date >22/22/22</Date>
                                        <Conclusion >Radiographe</Conclusion>
                                        <Decisions >confirme</Decisions>
                                        <Action ><i class="fa-solid fa-trash"></i></Action>
                                    </BodyRow>
                                </TableBody>
                            </TraitementTable>
                        </FormsContainer>
                        <Wbtn><UpdateBtn type="submit" name="addp"> Update </UpdateBtn></Wbtn>
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
    background: ${(props)=>props.color?"#019CDE":"#5c73db"};
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
    width: 200px;
`
const Date = styled.div`
    width: 250px;
`
const Conclusion = styled.div`
    width: 150px;
`
const Decisions = styled.div`
    width: 150px;
`
const Action = styled.div`
    width: 50px;
`