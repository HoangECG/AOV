import React, { useEffect, useState } from "react";
import './Backend.css';
import NavBar from "./NavBar/NavBar"
import * as beAPI from '../api/FetchApi'


function Backend() {
    const [game, setGame] = useState('1')
    const [match, setMatch] = useState('Match 1')
    const [round, setRound] = useState('swiss stage')
    const [bo, setBo] = useState('3')
    const [date, setDate] = useState('20/10/2024')
    const [teamBlue, setTeamBlue] = useState('SGP')
    const [teamNameBlue, setTeamNameBlue] = useState('Hà Nội')
    const [teamRed, setTeamRed] = useState('SGP')
    const [teamNameRed, setTeamNameRed] = useState('Hà Nội')
    const [scBlue, setscrBlue] = useState('0')
    const [scRed, setscrRed] = useState('0')
    const [listTeam, setListTeam] = useState(['1','2'])
    const [player1, setPlayer1] = useState('player1')
    const [player2, setPlayer2] = useState('player2')
    const [player3, setPlayer3] = useState('player3')
    const [player4, setPlayer4] = useState('player4')
    const [player5, setPlayer5] = useState('player5')
    const [player6, setPlayer6] = useState('player6')
    const [player7, setPlayer7] = useState('player7')
    const [player8, setPlayer8] = useState('player8')
    const [player9, setPlayer9] = useState('player9')
    const [player10, setPlayer10] = useState('player10')
    const [lineupFullBlue,setLineupFullBlue] = useState(['1','2','3','4','5'])
    const [lineupFullRed,setLineupFullRed] = useState(['1','2','3','4','5'])

    // banpick const
    const [listChamp, setListChamp] = useState([])
    const [ban1, setBan1] = useState('None')
    const [ban2, setBan2] = useState('None')
    const [ban3, setBan3] = useState('None')
    const [ban4, setBan4] = useState('None')
    const [ban5, setBan5] = useState('None')
    const [ban6, setBan6] = useState('None')
    const [ban7, setBan7] = useState('None')
    const [ban8, setBan8] = useState('None')
    const [pick1, setPick1] = useState('None')
    const [pick2, setPick2] = useState('None')
    const [pick3, setPick3] = useState('None')
    const [pick4, setPick4] = useState('None')
    const [pick5, setPick5] = useState('None')
    const [pick6, setPick6] = useState('None')
    const [pick7, setPick7] = useState('None')
    const [pick8, setPick8] = useState('None')
    const [pick9, setPick9] = useState('None')
    const [pick10, setPick10] = useState('None')


    useEffect(() => {
        async function fetchMyAPI() {
            const response = await beAPI.Getcrrmatch()
            const responseListChamps = await beAPI.GetChampsName()
            const responseListTeam = await beAPI.GetListTeam()
            try {
                const responseLineupFullBlue = await beAPI.GetLineupFull(window.localStorage.getItem('team-1'))
                const responseLineupFullRed = await beAPI.GetLineupFull(window.localStorage.getItem('team-2'))
                window.localStorage.setItem('linupFull-1',JSON.stringify(await responseLineupFullBlue))
                window.localStorage.setItem('linupFull-2',JSON.stringify(await responseLineupFullRed))
                setLineupFullBlue(await responseLineupFullBlue)
                setLineupFullRed(await responseLineupFullRed)
            } catch (error) {
                
            }
            // get list champs name 
            setListChamp(await responseListChamps)
            setListTeam(await responseListTeam)
            window.localStorage.setItem('listteam', listTeam)
            window.localStorage.setItem('champs',listChamp)

            // localstorage save
            window.localStorage.setItem('game',await response['game'])
            window.localStorage.setItem('match',await response['matchName'])
            window.localStorage.setItem('round',await response['round'])
            window.localStorage.setItem('bo',await response['bo'])
            window.localStorage.setItem('date',await response['date'])
            window.localStorage.setItem('team-1',await response['team-1'])
            window.localStorage.setItem('fullNameTeam-1',await response['fullNameTeam-1'])
            window.localStorage.setItem('team-2',await response['team-2'])
            window.localStorage.setItem('fullNameTeam-2',await response['fullNameTeam-2'])
            window.localStorage.setItem('player1',await response['player1'])
            window.localStorage.setItem('player2',await response['player2'])
            window.localStorage.setItem('player3',await response['player3'])
            window.localStorage.setItem('player4',await response['player4'])
            window.localStorage.setItem('player5',await response['player5'])
            window.localStorage.setItem('player6',await response['player6'])
            window.localStorage.setItem('player7',await response['player7'])
            window.localStorage.setItem('player8',await response['player8'])
            window.localStorage.setItem('player9',await response['player9'])
            window.localStorage.setItem('player10',await response['player10'])
            window.localStorage.setItem('sc-1',await response['sc-1'])
            window.localStorage.setItem('sc-2',await response['sc-2'])
            window.localStorage.setItem('ban1',await response['ban1'])
            window.localStorage.setItem('ban2',await response['ban2'])
            window.localStorage.setItem('ban3',await response['ban3'])
            window.localStorage.setItem('ban4',await response['ban4'])
            window.localStorage.setItem('ban5',await response['ban5'])
            window.localStorage.setItem('ban6',await response['ban6'])
            window.localStorage.setItem('ban7',await response['ban7'])
            window.localStorage.setItem('ban8',await response['ban8'])
            window.localStorage.setItem('pick1',await response['pick1'])
            window.localStorage.setItem('pick2',await response['pick2'])
            window.localStorage.setItem('pick3',await response['pick3'])
            window.localStorage.setItem('pick4',await response['pick4'])
            window.localStorage.setItem('pick5',await response['pick5'])
            window.localStorage.setItem('pick6',await response['pick6'])
            window.localStorage.setItem('pick7',await response['pick7'])
            window.localStorage.setItem('pick8',await response['pick8'])
            window.localStorage.setItem('pick9',await response['pick9'])
            window.localStorage.setItem('pick10',await response['pick10'])
            
            // set variable
            
            setGame(await response['game'])
            setMatch(await response['matchName'])
            setRound(await response['round'])
            setBo(await response['bo'])
            setDate(await response['date'])
            setTeamBlue(await response['team-1'])
            setTeamNameBlue(await response['fullNameTeam-1'])
            setTeamRed(await response['team-2'])
            setTeamNameRed(await response['fullNameTeam-2'])
            setPlayer1(await response['player1'])
            setPlayer2(await response['player2'])
            setPlayer3(await response['player3'])
            setPlayer4(await response['player4'])
            setPlayer5(await response['player5'])
            setPlayer6(await response['player6'])
            setPlayer7(await response['player7'])
            setPlayer8(await response['player8'])
            setPlayer9(await response['player9'])
            setPlayer10(await response['player10'])
            setscrBlue(await response['sc-1'])
            setscrRed(await response['sc-2'])
            setBan1(await response['ban1'])
            setBan2(await response['ban2'])
            setBan3(await response['ban3'])
            setBan4(await response['ban4'])
            setBan5(await response['ban5'])
            setBan6(await response['ban6'])
            setBan7(await response['ban7'])
            setBan8(await response['ban8'])
            setPick1(await response['pick1'])
            setPick2(await response['pick2'])
            setPick3(await response['pick3'])
            setPick4(await response['pick4'])
            setPick5(await response['pick5'])
            setPick6(await response['pick6'])
            setPick7(await response['pick7'])
            setPick8(await response['pick8'])
            setPick9(await response['pick9'])
            setPick10(await response['pick10'])
        }
        fetchMyAPI()
        }, [0])


    // Input render
    function InputRender(props) {
        async function onchangeInput(){
            window.localStorage.setItem(props.inputID,document.getElementById(props.inputID).value)
            if (props.inputID === 'team-1'){
                if ((await beAPI.GetLineupFull(document.getElementById(props.inputID).value)) != null) {
                    try {
                        setLineupFullBlue(await beAPI.GetLineupFull(document.getElementById(props.inputID).value))
                        setTeamNameBlue(await beAPI.GetListTeam()[document.getElementById(props.inputID).value])
                    } catch (error) {
                    }
                }
            }else if(props.inputID === 'team-2') {
                if ((await beAPI.GetLineupFull(document.getElementById(props.inputID).value)) != null) {
                    try {
                        setLineupFullBlue(await beAPI.GetLineupFull(document.getElementById(props.inputID).value))
                        setTeamNameRed(await beAPI.GetListTeam()[document.getElementById(props.inputID).value])
                    } catch (error) {
                        
                    }
                }
            }
        }
        function RenderOpt(props, index) {
            return (
                <option key={index} value={props} />
            )
        }
        function Maplist(opt){
            try {
                return props.listData.map(opt)
            } catch (error) {
                console.log(1)
            }
        }
        return (
            <div className="input-div">
                <label htmlFor={props.inputID} className={props.labelClassName}>{props.name}</label>
                <input id={props.inputID} className={props.inputClassName} list={props.idDatalist}
                    type="text" placeholder={props.placeholder} name={props.name} defaultValue={props.value} onChange={onchangeInput}></input>
                <datalist id={props.idDatalist}>
                    {Maplist(RenderOpt)}
                </datalist>
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
    function BackendBody() {
        
        // Component Match ID check
        function MatchCreate() {
            function GetStatsLocal(){
                const statsNow = {'MVP1': '0','KDA1':'0','MVP2': '0','KDA2':'0','MVP3': '0','KDA3':'0','MVP4': '0','KDA4':'0','MVP5': '0','KDA5':'0','MVP6': '0','KDA6':'0','MVP7': '0','KDA7':'0','MVP8': '0','KDA8':'0','MVP9': '0','KDA9':'0','MVP10': '0','KDA10':'0'}
                try {
                    for (let index = 1; index <= 10; index++) {
                        if (window.localStorage.getItem(`MVP${index}`) === null){
                            statsNow[`MVP${index}`] = window.localStorage.getItem(`MVP${index}`);
                        }else{
                            statsNow[`MVP${index}`] = '0';
                        }
                        if (window.localStorage.getItem(`KDA${index}`) === null){
                            statsNow[`KDA${index}`] = window.localStorage.getItem(`KDA${index}`);
                        }else{
                            statsNow[`KDA${index}`] = '0';
                        }
                    }
                    return statsNow
                } catch (error) {
                    return statsNow
                }
            }
            // Handle button click
            async function HandleSyncButtonClick() {
                    fetch(`http://${beAPI.hostIP}:14596/api/post/crm`, {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "matchId": window.localStorage.getItem('match'),
                            "matchName": window.localStorage.getItem('match'),
                            "round": window.localStorage.getItem('round'),
                            "date": window.localStorage.getItem('date'),
                            "bo": window.localStorage.getItem('bo'),
                            "game": window.localStorage.getItem('game'),
                            "sc-1": window.localStorage.getItem('sc-1'),
                            "sc-2" : window.localStorage.getItem('sc-2'),
                            "team-1": window.localStorage.getItem('team-1'),
                            "fullNameTeam-1": window.localStorage.getItem('fullNameTeam-1'),
                            "team-2": window.localStorage.getItem('team-2'),
                            "fullNameTeam-2": window.localStorage.getItem('fullNameTeam-2'),
                            "player1": window.localStorage.getItem('player1'),
                            "player2": window.localStorage.getItem('player2'),
                            "player3": window.localStorage.getItem('player3'),
                            "player4": window.localStorage.getItem('player4'),
                            "player5": window.localStorage.getItem('player5'),
                            "player6": window.localStorage.getItem('player6'),
                            "player7": window.localStorage.getItem('player7'),
                            "player8": window.localStorage.getItem('player8'),
                            "player9": window.localStorage.getItem('player9'),
                            "player10": window.localStorage.getItem('player10'),
                            "stats": GetStatsLocal()
                        })
                    })
                    setTimeout(function() {
                        window.location.reload()
                      }, 300);
                    
                }
                // await return true then set reload
            async function HandleSwapButtonClick() {
                fetch(`http://${beAPI.hostIP}:14596/api/post/crm`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "matchId": window.localStorage.getItem('match'),
                        "matchName": window.localStorage.getItem('match'),
                        "round": window.localStorage.getItem('round'),
                        "date": window.localStorage.getItem('date'),
                        "bo": window.localStorage.getItem('bo'),
                        "game": window.localStorage.getItem('game'),
                        "sc-1": window.localStorage.getItem('sc-2'),
                        "sc-2" : window.localStorage.getItem('sc-1'),
                        "team-1": window.localStorage.getItem('team-2'),
                        "fullNameTeam-1": window.localStorage.getItem('fullNameTeam-2'),
                        "team-2": window.localStorage.getItem('team-1'),
                        "fullNameTeam-2": window.localStorage.getItem('fullNameTeam-1'),
                        "player1": window.localStorage.getItem('player6'),
                        "player2": window.localStorage.getItem('player7'),
                        "player3": window.localStorage.getItem('player8'),
                        "player4": window.localStorage.getItem('player9'),
                        "player5": window.localStorage.getItem('player10'),
                        "player6": window.localStorage.getItem('player1'),
                        "player7": window.localStorage.getItem('player2'),
                        "player8": window.localStorage.getItem('player3'),
                        "player9": window.localStorage.getItem('player4'),
                        "player10": window.localStorage.getItem('player5'),
                        "stats": GetStatsLocal()
                    })
                })
                setTimeout(function() {
                    window.location.reload()
                  }, 300);
                // await return true then set reload
            }
            // Handle create button
    
            // Return component
            return (
                <div id="match-create" className="box-ctn">
                    <h1 className="box-title">MATCH</h1>
                    <InputRender
                        name="MATCH"
                        placeholder="MATCH ID"
                        inputID="match"
                        labelClassName="label-style"
                        inputClassName="input-style"
                        idDatalist="match-id-id-data-list"
                        listData={['0']}
                        value={window.localStorage.getItem('match')}
                    />
                    <InputRender
                        name="BO"
                        placeholder="BEST OF "
                        inputID="bo"
                        labelClassName="label-style"
                        inputClassName="input-style"
                        idDatalist="best-of-id-data-list"
                        listData={["1", "2", "3", "5", "7"]}
                        value={window.localStorage.getItem('bo')}
                    />
                    <InputRender
                        name="BLUE"
                        placeholder="TEAM 1"
                        inputID="team-1"
                        labelClassName="label-style"
                        inputClassName="input-style"
                        idDatalist="team-1-id-data-list"
                        listData={listTeam}
                        value={window.localStorage.getItem('team-1')}
                    />
                    <InputRender
                        name="RED"
                        placeholder="TEAM 2"
                        inputID="team-2"
                        labelClassName="label-style"
                        inputClassName="input-style"
                        idDatalist="team-2-id-data-list"
                        listData={listTeam}
                        value={window.localStorage.getItem('team-2')}
                    />
                    <InputRender
                        name="Game"
                        placeholder="1"
                        inputID="Game"
                        labelClassName="label-style"
                        inputClassName="input-style"
                        idDatalist="game-id-data-list"
                        listData={['1','2','3','4','5','6','7']}
                        value={window.localStorage.getItem('game')}
                    />
                    <BtnRender
                        btnName="SYNC MATCH"
                        idBtn="syncBtn"
                        classBtn="btn"
                        btnClick={HandleSyncButtonClick}
                    />
                    <BtnRender
                        btnName="Swap side"
                        idBtn="swapBtn"
                        classBtn="btn"
                        btnClick={HandleSwapButtonClick}
                    />
                </div>
            )
        }
        // Stream info component
        function StreamInfor() {
            //  Caster name list
            let CASTERLIST = ['Trần Nam', 'Đức Huy', 'Hồng Quân', 'Thanh Tùng', 'Nam Anh', 'Hoàng Sơn', 'Phương Thảo']
            let casterListNow = window.localStorage.getItem("casterName")
            let predictNow = window.localStorage.getItem("predictNow")
            if (casterListNow === null) {
                window.localStorage.setItem("casterName", JSON.stringify([CASTERLIST[0], CASTERLIST[1], CASTERLIST[6]]))
            }
            if (predictNow === null) {
                window.localStorage.setItem("predictNow", JSON.stringify(["0-0", "0-0", "0-0"]))
            }
            // Handle click sync data stream
            
    
            // Return component stream info
            return (
                <div id="streamInfo" className="box-ctn">
                    <h1 className="box-title">STREAM INFO</h1>
                    <InputRender
                        name="CASTER"
                        placeholder="Caster 1"
                        inputID="Caster1"
                        labelClassName="label-style"
                        inputClassName="input-style"
                        idDatalist="Caster1-id-data-list"
                        listData={CASTERLIST}
                        value={JSON.parse(casterListNow)[0]}
                    />
                    <InputRender
                        name="CASTER"
                        placeholder="Caster 2"
                        inputID="Caster2"
                        labelClassName="label-style"
                        inputClassName="input-style"
                        idDatalist="Caster2-id-data-list"
                        listData={CASTERLIST}
                        value={JSON.parse(casterListNow)[1]}
                    />
                    <InputRender
                        name="HOST"
                        placeholder="Host name"
                        inputID="hostName"
                        labelClassName="label-style"
                        inputClassName="input-style"
                        idDatalist="host-id-data-list"
                        listData={CASTERLIST}
                        value={JSON.parse(casterListNow)[2]}
                    />
                    <h1 className="box-title">PREDICT</h1>
                    <InputRender
                        name="PRD"
                        placeholder="Caster 1"
                        inputID="caster-1-Predict"
                        labelClassName="label-style"
                        inputClassName="input-style"
                        idDatalist="id-data-list"
                        listData={[]}
                        value={JSON.parse(predictNow)[0]}
                    />
                    <InputRender
                        name="PRD"
                        placeholder="Caster 2"
                        inputID="caster-2-Predict"
                        labelClassName="label-style"
                        inputClassName="input-style"
                        idDatalist="id-data-list"
                        listData={[]}
                        value={JSON.parse(predictNow)[1]}
                    />
                    <InputRender
                        name="PRD"
                        placeholder="Host"
                        inputID="host-Predict"
                        labelClassName="label-style"
                        inputClassName="input-style"
                        idDatalist="id-data-list"
                        listData={['o','0']}
                        value={JSON.parse(predictNow)[2]}
                    />
                </div>
            )
        }
    
        // Match incoming component
        function MatchConfig() {
            return (
                <div id="match-info-result">
                    <h1 className="box-title">MATCH ID | #0 </h1>
                    <div className="frag-ctn">
                        <InputRender
                            name="ROUND"
                            placeholder="NAME"
                            inputID="round"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list"
                            listData={[]}
                            value={round}
                        />
                        <InputRender
                            name="DATE"
                            placeholder="DATE"
                            inputID="date"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list"
                            listData={[]}
                            value={date}
                        />
                    </div>
                    <h1 className="box-title">GAME {game} INFO</h1>
                    <div className="frag-ctn">
                        <InputRender
                            name={teamBlue}
                            placeholder={scBlue}
                            inputID="sc-blue"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="sc-blue-id-data-list"
                            listData={['0','1','2','3','4']}
                            value={'0'}
                        />
                        <InputRender
                            name={teamRed}
                            placeholder={scRed}
                            inputID="sc-Red"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="sc-Red-id-data-list"
                            listData={['0','1','2','3','4']}
                            value={'0'}
                        />
                    </div>
                    <h1 className="box-title">GAME {game} LINEUP</h1>
                    <div className="frag-ctn">
                        <ul id='box-lineup-blue' className="box-lineup" >
                            <InputRender
                                name="DSL"
                                placeholder="DSL"
                                inputID="player1"
                                labelClassName="label-style"
                                inputClassName="input-style"
                                idDatalist="blueDSL-id-data-list"
                                listData={lineupFullBlue}
                                value={player1}
                            />
                            <InputRender
                                name="JGL"
                                placeholder="JGL"
                                inputID="player2"
                                labelClassName="label-style"
                                inputClassName="input-style"
                                idDatalist="blueJGL-id-data-list"
                                listData={lineupFullBlue}
                                value={player2}
                            />
                            <InputRender
                                name="MID"
                                placeholder="MID"
                                inputID="player3"
                                labelClassName="label-style"
                                inputClassName="input-style"
                                idDatalist="blueMID-id-data-list"
                                listData={lineupFullBlue}
                                value={player3}
                            />
                            <InputRender
                                name="ADL"
                                placeholder="ADL"
                                inputID="player4"
                                labelClassName="label-style"
                                inputClassName="input-style"
                                idDatalist="blueADL-id-data-list"
                                listData={lineupFullBlue}
                                value={player4}
                            />
                            <InputRender
                                name="SUP"
                                placeholder="SUP"
                                inputID="player5"
                                labelClassName="label-style"
                                inputClassName="input-style"
                                idDatalist="blueSUP-id-data-list"
                                listData={lineupFullBlue}
                                value={player5}
                            />
                        </ul>
                        <ul id='box-lineup-red' className="box-lineup" >
                        <InputRender
                                name="DSL"
                                placeholder="DSL"
                                inputID="player6"
                                labelClassName="label-style"
                                inputClassName="input-style"
                                idDatalist="RedDSL-id-data-list"
                                listData={lineupFullRed}
                                value={player6}
                            />
                            <InputRender
                                name="JGL"
                                placeholder="JGL"
                                inputID="player7"
                                labelClassName="label-style"
                                inputClassName="input-style"
                                idDatalist="RedJGL-id-data-list"
                                listData={lineupFullRed}
                                value={player7}
                            />
                            <InputRender
                                name="MID"
                                placeholder="MID"
                                inputID="player8"
                                labelClassName="label-style"
                                inputClassName="input-style"
                                idDatalist="RedMID-id-data-list"
                                listData={lineupFullRed}
                                value={player8}
                            />
                            <InputRender
                                name="ADL"
                                placeholder="ADL"
                                inputID="player9"
                                labelClassName="label-style"
                                inputClassName="input-style"
                                idDatalist="RedADL-id-data-list"
                                listData={lineupFullRed}
                                value={player9}
                            />
                            <InputRender
                                name="SUP"
                                placeholder="SUP"
                                inputID="player10"
                                labelClassName="label-style"
                                inputClassName="input-style"
                                idDatalist="RedSUP-id-data-list"
                                listData={lineupFullRed}
                                value={player10}
                            />
                        </ul>
                    </div>
                </div>
            )
        }
        // Return backend component
        // banpick container
        function BanpickContainer(){
            function HandleSyncBanpickButtonClick() {

            }
            return (
                <div id="banpickContainer" className="box-ctn">
                    <h1 className="box-title">BAN GAME {game}</h1>
                    <div className="frag-ctn">
                        <InputRender
                            name="Ban 1"
                            placeholder="Ban 1"
                            inputID="ban1"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-banpick"
                            listData={listChamp}
                        />
                        <InputRender
                            name="Ban 5"
                            placeholder="Ban 5"
                            inputID="ban5"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-banpick"
                            listData={listChamp}
                        />
                        <InputRender
                            name="Ban 2"
                            placeholder="Ban 2"
                            inputID="ban2"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-banpick-banpick"
                            listData={listChamp}
                        />
                        <InputRender
                            name="Ban 6"
                            placeholder="Ban 6"
                            inputID="ban6"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-banpick"
                            listData={listChamp}
                        />
                        <InputRender
                            name="Ban 3"
                            placeholder="Ban 3"
                            inputID="ban3"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-banpick-banpick"
                            listData={listChamp}
                        />
                        <InputRender
                            name="Ban 7"
                            placeholder="Ban 7"
                            inputID="ban7"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-banpick"
                            listData={listChamp}
                        />
                        <InputRender
                            name="Ban 4"
                            placeholder="Ban 4"
                            inputID="ban4"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-banpick-banpick"
                            listData={listChamp}
                        />
                        <InputRender
                            name="Ban 8"
                            placeholder="Ban 8"
                            inputID="ban8"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-banpick"
                            listData={listChamp}
                        />
                    </div>
                    <h1 className="box-title">PICK GAME {game}</h1>
                    <div className="frag-ctn">
                        <InputRender
                            name="pick 1"
                            placeholder="pick 1"
                            inputID="pick1"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-banpick-pickpick"
                            listData={listChamp}
                        />
                        <InputRender
                            name="pick 6"
                            placeholder="pick 6"
                            inputID="pick6"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-banpick"
                            listData={listChamp}
                        />
                        <InputRender
                            name="pick 2"
                            placeholder="pick 2"
                            inputID="pick2"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-banpick-pickpick"
                            listData={listChamp}
                        />
                        <InputRender
                            name="pick 7"
                            placeholder="pick 7"
                            inputID="pick7"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-banpick"
                            listData={listChamp}
                        />
                        <InputRender
                            name="pick 3"
                            placeholder="pick 3"
                            inputID="pick3"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-banpick-pickpick"
                            listData={listChamp}
                        />
                        <InputRender
                            name="pick 8"
                            placeholder="pick 8"
                            inputID="pick8"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-banpick"
                            listData={listChamp}
                        />
                        <InputRender
                            name="pick 4"
                            placeholder="pick 4"
                            inputID="pick4"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-banpick-pickpick"
                            listData={listChamp}
                        />
                        <InputRender
                            name="pick 9"
                            placeholder="pick 9"
                            inputID="pick9"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-banpick"
                            listData={listChamp}
                        />
                        <InputRender
                            name="pick 5"
                            placeholder="pick 5"
                            inputID="pick5"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-banpick-pickpick"
                            listData={listChamp}
                        />
                        <InputRender
                            name="pick 10"
                            placeholder="pick 10"
                            inputID="pick10"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-banpick"
                            listData={listChamp}
                        />
                        <BtnRender
                            btnName="SYNC BANPICK"
                            idBtn="syncBanpickBtn"
                            classBtn="btn"
                            btnClick={HandleSyncBanpickButtonClick}
                        />
                        <BtnRender
                            btnName="RESET BANPICK"
                            idBtn="resetBanpickBtn"
                            classBtn="btn"
                            btnClick={HandleSyncBanpickButtonClick}
                        />
                    </div>
                </div>
            )
        }
        function StatsContainer(){
            function GetValueStats(props){
                try {
                    return window.localStorage.getItem(props)
                } catch (error) {
                    
                }
            }
            function HandleSyncStatsButtonClick() {

            }
            return (
                <div id="banpickContainer" className="box-ctn">
                    <h1 className="box-title">Player Stats</h1>
                    <div className="frag-ctn">
                        <InputRender
                            name="MVP 1"
                            placeholder="MVP 1"
                            inputID="MVP1"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-mvp"
                            value={GetValueStats('MVP1')}
                        />
                        <InputRender
                            name="KDA 1"
                            placeholder="KDA 1"
                            inputID="KDA1"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-kda"
                            value={GetValueStats('KDA1')}
                        />
                        <InputRender
                            name="MVP 2"
                            placeholder="MVP 2"
                            inputID="MVP2"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-mvp"
                            value={GetValueStats('MVP2')}
                        />
                        <InputRender
                            name="KDA 2"
                            placeholder="KDA 2"
                            inputID="KDA2"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-kda"
                            value={GetValueStats('KDA2')}
                        />
                        <InputRender
                            name="MVP 3"
                            placeholder="MVP 3"
                            inputID="MVP3"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-mvp"
                            value={GetValueStats('MVP3')}
                        />
                        <InputRender
                            name="KDA 3"
                            placeholder="KDA 3"
                            inputID="KDA3"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-kda"
                            value={GetValueStats('KDA3')}
                        />
                        <InputRender
                            name="MVP 4"
                            placeholder="MVP 4"
                            inputID="MVP4"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-mvp"
                            value={GetValueStats('MVP4')}
                        />
                        <InputRender
                            name="KDA 4"
                            placeholder="KDA 4"
                            inputID="KDA4"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-kda"
                            value={GetValueStats('KDA4')}
                        />
                        <InputRender
                            name="MVP 5"
                            placeholder="MVP 5"
                            inputID="MVP5"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-mvp"
                            value={GetValueStats('MVP5')}
                        />
                        <InputRender
                            name="KDA 5"
                            placeholder="KDA 5"
                            inputID="KDA5"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-kda"
                            value={GetValueStats('KDA5')}
                        />
                        <InputRender
                            name="MVP 6"
                            placeholder="MVP 6"
                            inputID="MVP6"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-mvp"
                            value={GetValueStats('MVP6')}
                        />
                        <InputRender
                            name="KDA 6"
                            placeholder="KDA 6"
                            inputID="KDA6"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-kda"
                            value={GetValueStats('KDA6')}
                        />
                        <InputRender
                            name="MVP 7"
                            placeholder="MVP 7"
                            inputID="MVP7"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-mvp"
                            value={GetValueStats('MVP7')}
                        />
                        <InputRender
                            name="KDA 7"
                            placeholder="KDA 7"
                            inputID="KDA7"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-kda"
                            value={GetValueStats('KDA7')}
                        />
                        <InputRender
                            name="MVP 8"
                            placeholder="MVP 8"
                            inputID="MVP8"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-mvp"
                            value={GetValueStats('MVP8')}
                        />
                        <InputRender
                            name="KDA 8"
                            placeholder="KDA 8"
                            inputID="KDA8"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-kda"
                            value={GetValueStats('KDA8')}
                        />
                        <InputRender
                            name="MVP 9"
                            placeholder="MVP 9"
                            inputID="MVP9"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-mvp"
                            value={GetValueStats('MVP9')}
                        />
                        <InputRender
                            name="KDA 9"
                            placeholder="KDA 9"
                            inputID="KDA9"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-kda"
                            value={GetValueStats('KDA9')}
                        />
                        <InputRender
                            name="MVP 10"
                            placeholder="MVP 10"
                            inputID="MVP10"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-mvp"
                            value={GetValueStats('MVP10')}
                        />
                        <InputRender
                            name="KDA 10"
                            placeholder="KDA 10"
                            inputID="KDA10"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-kda"
                            value={GetValueStats('KDA10')}
                        />
                    </div>
                </div>
            )
        }
        return (
            <div className="body-ctn row-ctn">
                <div className="colum-ctn">
                    <MatchCreate/>
                    <StreamInfor/>
                </div>
                <div className="box-ctn">
                    <MatchConfig/>
                </div>
                <div className="colum-ctn">
                    <BanpickContainer/>
                </div>
                <div className="colum-ctn">
                    <StatsContainer/>
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