import React, {useEffect, useState} from "react";
import "./styles.scss";
import {PROFILE} from "../../consts/RoutePathes";
import {getCurrentUserUsername, getUserMetadata} from "../../services/UserService";
import {useNavigate} from "react-router";

export const Profile = () => {
    const navigate = useNavigate();
    const [userMetadata, setUserMetadata] = useState("");
    const [usedMemory, setUsedMemory] = useState(0);
    const [maxUsageMemory, setMaxUsageMemory] = useState(0);
    const [ratioOfUsedToAvailableMemory, setRatioOfUsedToAvailableMemory] = useState(0);
    const [amountOfFiles, setAmountOfFiles] = useState(0);
    const [displaySizeOfAllUserFiles, setDisplaySizeOfAllUserFiles] = useState("");
    const [displayMemoryUsageRemaining, setDisplayMemoryUsageRemaining] = useState("");
    const [displayMaxUsageMemory, setDisplayMaxUsageMemory] = useState("");
    const [displayMemoryLeft, setDisplayMemoryLeft] = useState(0);
    const [username] = useState(getCurrentUserUsername());

    useEffect(() => {
        setUserMetadata(getUserMetadata());
        if (userMetadata === undefined) {
            setTimeout(() => {
                navigate(0);
            }, 500);
        } else {
            if (userMetadata.length > 0) {
                setUsedMemory(JSON.parse(userMetadata).sizeOfAllUserFilesInBytes);
                setMaxUsageMemory(JSON.parse(userMetadata).maxUsageMemory);
                setRatioOfUsedToAvailableMemory((Math.floor(usedMemory / maxUsageMemory * 100 * 10) / 10));
                setAmountOfFiles(JSON.parse(userMetadata).amountOfFiles);
                setDisplaySizeOfAllUserFiles(JSON.parse(userMetadata).displaySizeOfAllUserFiles);
                setDisplayMemoryUsageRemaining(JSON.parse(userMetadata).displayMemoryUsageRemaining);
                setDisplayMaxUsageMemory(JSON.parse(userMetadata).displayMaxUsageMemory);
                setDisplayMemoryLeft(100 - ratioOfUsedToAvailableMemory);
            }
        }
    }, [userMetadata]);

    const displayRatioOfUsedToAvailableMemory = (ration) => ration + '%';
    const progressBarColor = (ration) => {
        if (ration < 33) return '#00f008';
        if (ration >= 33 && ration < 66) return '#feff43';
        return '#ff0010';
    };

    return (
        <>
            <body>

            <div className="app-container">
                <div className="app-header">

                </div>
                <div className="app-content">
                    <div className="app-sidebar">
                        <a href={PROFILE} className="app-sidebar-link active">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="feather feather-pie-chart" viewBox="0 0 24 24">
                                <defs/>
                                <path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z"/>
                            </svg>
                        </a>
                    </div>

                    <div className="projects-section">
                        <div className="projects-section-header">
                            <p>Files</p>
                            <p className="time">Files of {username}</p>
                        </div>
                        <div className="projects-section-line">
                            <div className="projects-status">
                                <div className="item-status">
                                    <span className="status-number">{amountOfFiles}</span>
                                    <span className="status-type">Amount of files</span>
                                </div>

                                <div className="item-status">
                                    <span className="status-number">{displayMaxUsageMemory}</span>
                                    <span className="status-type">Max Usage Memory</span>
                                </div>

                                <div className="item-status">
                                    <span className="status-number">{displaySizeOfAllUserFiles}</span>
                                    <span className="status-type">Size Of All Files</span>
                                </div>

                                <div className="item-status">
                                    <span className="status-number">{displayMemoryUsageRemaining}</span>
                                    <span className="status-type">Memory Usage Remaining</span>
                                </div>

                            </div>
                            <div className="view-actions">
                                <button className="view-btn list-view active" title="List View">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="feather feather-list">
                                        <line x1="8" y1="6" x2="21" y2="6"/>
                                        <line x1="8" y1="12" x2="21" y2="12"/>
                                        <line x1="8" y1="18" x2="21" y2="18"/>
                                        <line x1="3" y1="6" x2="3.01" y2="6"/>
                                        <line x1="3" y1="12" x2="3.01" y2="12"/>
                                        <line x1="3" y1="18" x2="3.01" y2="18"/>
                                    </svg>
                                </button>
                            </div>
                        </div>


                        <div className="project-box-wrapper">
                            <div className="project-box" style={{backgroundColor: 'cyan'}}>
                                <div className="project-box-header">
                                    <span>Percentage</span>
                                    <div className="more-wrapper">
                                        <button className="project-btn-more">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                 className="feather feather-more-vertical">
                                                <circle cx="12" cy="12" r="1"/>
                                                <circle cx="12" cy="5" r="1"/>
                                                <circle cx="12" cy="19" r="1"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="project-box-content-header">
                                    <p className="box-content-header">Memory Usage</p>
                                    {/*<p className="box-content-subheader">stats</p>*/}
                                </div>
                                <div className="box-progress-wrapper">
                                    <p className="box-progress-header">statistics</p>
                                    <div className="box-progress-bar">
                                            <span className="box-progress"
                                                  style={{
                                                      width: displayRatioOfUsedToAvailableMemory(ratioOfUsedToAvailableMemory),
                                                      backgroundColor: progressBarColor(ratioOfUsedToAvailableMemory)
                                                  }}/>
                                    </div>
                                    <p className="box-progress-percentage">{displayRatioOfUsedToAvailableMemory(ratioOfUsedToAvailableMemory)} </p>
                                </div>
                                <div className="project-box-footer">
                                    <div className="participants">

                                    </div>
                                    <div className="days-left" style={{color: '#ff00ff'}}>
                                        {displayMemoryLeft} % left
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                    </div>
                </div>
            </div>

            </body>
        </>
    )
};