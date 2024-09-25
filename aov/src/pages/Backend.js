import React, { useEffect, useState } from "react";
import './Backend.css';
import NavBar from "./NavBar/NavBar"
import * as beAPI from '../api/FetchApi'


// websocket
var ws = new WebSocket(`ws://${beAPI.hostIP}:${beAPI.portApi}/ws/0`)

function Backend() {
    const [game, setGame] = useState('1')
    const [match, setMatch] = useState('Match 1')
    const [round, setRound] = useState('swiss stage')
    const [bo, setBo] = useState('3')
    const [date, setDate] = useState('20/10/2024')
    const [teamL, setTeamL] = useState('STV')
    const [fullNameL, setFullnameL] = useState('Hà Nội')
    const [teamR, setTeamR] = useState('STV')
    const [fullnameR, setFullnameR] = useState('Hà Nội')
    const [playerLineup1, setPlayerLineup1] = useState('player1')
    const [playerLineup2, setPlayerLineup2] = useState('player2')
    const [playerLineup3, setPlayerLineup3] = useState('player3')
    const [playerLineup4, setPlayerLineup4] = useState('player4')
    const [playerLineup5, setPlayerLineup5] = useState('player5')
    const [playerLineup6, setPlayerLineup6] = useState('player6')
    const [playerLineup7, setPlayerLineup7] = useState('player7')
    const [playerLineup8, setPlayerLineup8] = useState('player8')
    const [playerLineup9, setPlayerLineup9] = useState('player9')
    const [playerLineup10, setPlayerLineup10] = useState('player10')
    const [scL, setScL] = useState('0')
    const [scR, setScR] = useState('0')
    const [statusL, setStatusL] = useState('0')
    const [statusR, setStatusR] = useState('0')
    const [scL3, setscL3] = useState('0')

    // banpick const
    const [isReload, setIsReload] = useState(false)
    


    useEffect(() => {
        async function fetchMyAPI() {
            let response = await beAPI.Getcrrmatch()
            setGame(response['game'])
            setMatch(response['match'])
            setRound(response['round'])
            setBo(response['bo'])
            setDate(response['date'])
            setTeamL(response['teamL'])
            setFullnameL(response['fullNameL'])
            setTeamR(response['teamR'])
            setFullnameR(response['fullNameR'])
            setPlayerLineup1(response['playerLineup1'])
            setPlayerLineup2(response['playerLineup2'])
            setPlayerLineup3(response['playerLineup3'])
            setPlayerLineup4(response['playerLineup4'])
            setPlayerLineup5(response['playerLineup5'])
            setPlayerLineup6(response['playerLineup6'])
            setPlayerLineup7(response['playerLineup7'])
            setPlayerLineup8(response['playerLineup8'])
            setPlayerLineup9(response['playerLineup9'])
            setPlayerLineup10(response['playerLineup10'])
        }
        fetchMyAPI()}, [isReload])

    // Input render
    function InputRender(props) {
        return (
            <div className="input-div">
                <label htmlFor={props.inputID} className={props.labelClassName}>{props.name}</label>
                <input id={props.inputID} className={props.inputClassName} 
                     placeholder={props.placeholder} name={props.name} defaultValue={props.value}></input>
            </div>
        )
    }

    function BtnRender(props) {
        return (
            <div className="btn-div">
                <button type="button" id={props.idBtn} className={props.classBtn} style={props.inlineCss} onClick={props.btnClick}>{props.btnName}</button>
            </div>
        )
    }
    function TextBoxRender(props) {
        function rtFix(props){
            if (props === '1'){
                return "text-info-box text-info-box-fix"
            }else{
                return "text-info-box"
            }

        }
        return (
            <div className="text-info-ctn">
                <h1 className="title-text-box">{props.title}</h1>
                <div id={props.idTextBox} className={rtFix(props.fixed)}>{props.textinbox}</div>
            </div>
        )
    }
    function HandleStartLayout(){
        ws.send('lineup-start')
    }
    function HandleOffLayout(){
        ws.send('lineup-off')
    }
    function HandleSyncStatslayout(){
        ws.send('lineup-sync')
    }
    
    function HandleSyncClick(){
        beAPI.GetPull()
        setIsReload(!isReload)
    }
    function BackendBody() {
        // Component Match ID check
        function MatchCreate() {
            // Return component
            return (
                <div id="match-create" className="box-ctn">
                    <h1 className="box-title">MATCH</h1>
                    <TextBoxRender
                        fixed='0'
                        idTextBox="match"
                        textinbox={match}
                        title="match"
                    />
                    <TextBoxRender
                        fixed='0'
                        idTextBox="bo"
                        textinbox={bo}
                        title="bo"
                    />
                    <TextBoxRender
                        fixed='0'
                        idTextBox="team-1"
                        textinbox={teamL}
                        title="team 1"
                    />
                    <TextBoxRender
                        fixed='0'
                        idTextBox="team2"
                        textinbox={teamR}
                        title="team 2"
                    />
                    <BtnRender
                        btnName="SYNC MATCH"
                        idBtn="syncbtnn"
                        classBtn="btn"
                        btnClick={HandleSyncClick}
                    />
                </div>
            )
        }
        // Stream info component
        
    
        // Match incoming component
        function MatchConfig() {
            return (
                <div id="match-info-result">
                    <h1 className="box-title">GAME 1 INFO</h1>
                    <div className="frag-ctn">
                        <TextBoxRender
                            fixed='1'
                            textinbox={'scL1'}
                            title='score'
                            idTextBox="scL1"
                            classname="text-info-box-fix"
                        />
                        <TextBoxRender
                            fixed='1'
                            textinbox={'scR1'}
                            title='score'
                            classname="text-info-box-fix"
                            idTextBox="scR1"
                        />
                        <TextBoxRender
                            fixed='1'
                            textinbox={'pkL1'}
                            title='PK Left'
                            classname="text-info-box-fix"
                            idTextBox="pkL1"
                        />
                        <TextBoxRender
                            fixed='1'
                            textinbox={'pkR1'}
                            title='PK Right'
                            classname="text-info-box-fix"
                            idTextBox="pkR1"
                        />
                    </div>
                    <h1 className="box-title">GAME LINEUP</h1>
                    <div className="frag-ctn">
                        <ul id='box-lineup-blue' className="box-lineup" >
                            <TextBoxRender
                                fixed='0'
                                title="PL1"
                                idTextBox="player1"
                                textinbox={playerLineup1}
                            />
                            <TextBoxRender
                                fixed='0'
                                title="PL2"
                                idTextBox="player2"
                                textinbox={playerLineup2}
                            />
                            <TextBoxRender
                                fixed='0'
                                title="PL3"
                                idTextBox="player3"
                                textinbox={playerLineup3}
                            />
                            <TextBoxRender
                                fixed='0'
                                title="PL4"
                                idTextBox="player4"
                                textinbox={playerLineup4}
                            />
                            <TextBoxRender
                                fixed='0'
                                title="PL5"
                                idTextBox="player5"
                                textinbox={playerLineup5}
                            />
                        </ul>
                        <ul id='box-lineup-red' className="box-lineup" >
                        <TextBoxRender
                            fixed='0'
                            title="PL6"
                            idTextBox="player6"
                            textinbox={playerLineup6}
                        />
                        <TextBoxRender
                            fixed='0'
                            title="PL7"
                            idTextBox="player7"
                            textinbox={playerLineup7}
                        />
                        <TextBoxRender
                            fixed='0'
                            title="PL8"
                            idTextBox="player8"
                            textinbox={playerLineup8}
                        />
                        <TextBoxRender
                            fixed='0'
                            title="PL9"
                            idTextBox="player9"
                            textinbox={playerLineup9}
                        />
                        <TextBoxRender
                            fixed='0'
                            title="PL10"
                            idTextBox="player10"
                            textinbox={playerLineup10}
                        />
                        </ul>
                    </div>
                </div>
            )
        }
        // Return backend component
        // banpick container
        function BanpickContainer(){
            return (
                <div id="banpickContainer" className="box-ctn">
                    <h1 className="box-title">BANPICK GAME 1</h1>
                    <div className="frag-ctn">
                        <TextBoxRender
                            fixed='0'
                            title="player"
                            idTextBox="game1PlayerPick-left"
                            textinbox={'game1PlayerPickLeft'}
                        />
                        <TextBoxRender
                            fixed='0'
                            title="player"
                            idTextBox="game1PlayerPick-right"
                            textinbox={'1'}
                        />
                    </div>
                    
                </div>
            )
        }
        
        return (
            <div className="body-ctn row-ctn">
                <div className="colum-ctn">
                    <MatchCreate/>
                </div>
                <div className="box-ctn">
                    <MatchConfig/>
                </div>
                <div className="colum-ctn">
                    <BanpickContainer/>
                </div>
            </div>
        );
    };
    
    return (
        <div className="main-container">
            <NavBar />
            <BackendBody/>
        </div>
    )
}
export default Backend;