import React, {useState} from "react";
import "./styles.scss";
import {IP_DETAILS, USER} from "../../consts/StorageEntities";
import {PROFILE} from "../../consts/RoutePathes";

export const Profile = () => {
    const [user] = useState(sessionStorage.getItem(USER));
    const [ipDetails] = useState(sessionStorage.getItem(IP_DETAILS));

    const [usedMemory] = useState(JSON.parse(user).user.sizeOfAllUserFilesInBytes);
    const [maxUsageMemory] = useState(JSON.parse(user).user.maxUsageMemory);
    const [ratioOfUsedToAvailableMemory] = useState((Math.floor(usedMemory / maxUsageMemory * 100 * 10) / 10));
    const [amountOfFiles] = useState(JSON.parse(user).user.amountOfFiles);

    const [displaySizeOfAllUserFiles] = useState(JSON.parse(user).user.displaySizeOfAllUserFiles);
    const [displayMemoryUsageRemaining] = useState(JSON.parse(user).user.displayMemoryUsageRemaining);
    const [displayMaxUsageMemory] = useState(JSON.parse(user).user.displayMaxUsageMemory);
    const [displayMemoryLeft] = useState(100 - ratioOfUsedToAvailableMemory);

    const [ip] = useState(JSON.parse(ipDetails).ip);
    const [version] = useState(JSON.parse(ipDetails).version);
    const [city] = useState(JSON.parse(ipDetails).city);
    const [region] = useState(JSON.parse(ipDetails).region);
    const [countryName] = useState(JSON.parse(ipDetails).country_name);
    const [countryTld] = useState(JSON.parse(ipDetails).country_tld);
    const [continentCode] = useState(JSON.parse(ipDetails).continent_code);
    const [postal] = useState(JSON.parse(ipDetails).postal);
    const [latitude] = useState(JSON.parse(ipDetails).latitude);
    const [longitude] = useState(JSON.parse(ipDetails).longitude);
    const [timezone] = useState(JSON.parse(ipDetails).timezone);
    const [utcOffset] = useState(JSON.parse(ipDetails).utc_offset);
    const [countryCallingCode] = useState(JSON.parse(ipDetails).country_calling_code);
    const [languages] = useState(JSON.parse(ipDetails).languages);
    const [org] = useState(JSON.parse(ipDetails).org);
    const [asn] = useState(JSON.parse(ipDetails).asn);

    const [username] = useState(JSON.parse(user).user.username);

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
                                    <span>December 10, 2020</span>
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

            <div className="app-container">
                <div className="app-header-2">

                </div>

                <div className="app-content">
                    <div className="app-sidebar">
                        <a href={PROFILE} className="app-sidebar-link active">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="feather feather-home">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                <polyline points="9 22 9 12 15 12 15 22"/>
                            </svg>
                        </a>
                    </div>

                    <div className="projects-section">
                        <div className="projects-section-header">
                            <p>Location</p>
                            <p className="time">Location data of {username}</p>
                        </div>
                        <div className="projects-section-line">
                            <div className="projects-status">

                            </div>
                            <div className="view-actions">
                                <button className="view-btn grid-view active" title="Grid View">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="feather feather-grid">
                                        <rect x="3" y="3" width="7" height="7"/>
                                        <rect x="14" y="3" width="7" height="7"/>
                                        <rect x="14" y="14" width="7" height="7"/>
                                        <rect x="3" y="14" width="7" height="7"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="project-boxes jsGridView">
                            <div className="project-box-wrapper">
                                <div className="project-box" style={{backgroundColor: "#ff942e"}}>
                                    <div className="project-box-header">

                                    </div>
                                    <div className="project-box-content-header">
                                        <p className="box-content-header">{ip}</p>
                                        <p className="box-content-subheader">ip</p>
                                    </div>
                                    <div className="project-box-content-header">
                                        <p className="box-content-header">{version}</p>
                                        <p className="box-content-subheader">version</p>
                                    </div>

                                    <div className="project-box-footer">
                                        <div className="participants">

                                        </div>
                                        <div className="days-left" style={{color: '#4f3ff0'}}>
                                            IP data
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="project-box-wrapper">
                                <div className="project-box" style={{backgroundColor: "#ffa7fb"}}>
                                    <div className="project-box-header">

                                    </div>
                                    <div className="project-box-content-header">
                                        <p className="box-content-header">{city}</p>
                                        <p className="box-content-subheader">city</p>
                                    </div>
                                    <div className="project-box-content-header">
                                        <p className="box-content-header">{region}</p>
                                        <p className="box-content-subheader">region</p>
                                    </div>

                                    <div className="project-box-footer">
                                        <div className="participants">

                                        </div>
                                        <div className="days-left" style={{color: '#f09c05'}}>
                                            City data
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="project-box-wrapper">
                                <div className="project-box" style={{backgroundColor: "#00f0ee"}}>
                                    <div className="project-box-header">

                                    </div>
                                    <div className="project-box-content-header">
                                        <p className="box-content-header">{countryName}</p>
                                        <p className="box-content-subheader">country</p>
                                    </div>
                                    <div className="project-box-content-header">
                                        <p className="box-content-header">{countryTld}</p>
                                        <p className="box-content-subheader">country tld</p>
                                    </div>

                                    <div className="project-box-footer">
                                        <div className="participants">

                                        </div>
                                        <div className="days-left" style={{color: '#f000a0'}}>
                                            Country data
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="project-box-wrapper">
                                <div className="project-box" style={{backgroundColor: "#b485ff"}}>
                                    <div className="project-box-header">

                                    </div>
                                    <div className="project-box-content-header">
                                        <p className="box-content-header">{continentCode}</p>
                                        <p className="box-content-subheader">Continent code</p>
                                    </div>
                                    <div className="project-box-content-header">
                                        <p className="box-content-header">{postal}</p>
                                        <p className="box-content-subheader">postal</p>
                                    </div>

                                    <div className="project-box-footer">
                                        <div className="participants">

                                        </div>
                                        <div className="days-left" style={{color: '#feff43'}}>
                                            Address data
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="project-box-wrapper">
                                <div className="project-box" style={{backgroundColor: "#c6ff00"}}>
                                    <div className="project-box-header">

                                    </div>
                                    <div className="project-box-content-header">
                                        <p className="box-content-header">{latitude}</p>
                                        <p className="box-content-subheader">latitude</p>
                                    </div>
                                    <div className="project-box-content-header">
                                        <p className="box-content-header">{longitude}</p>
                                        <p className="box-content-subheader">longitude</p>
                                    </div>

                                    <div className="project-box-footer">
                                        <div className="participants">

                                        </div>
                                        <div className="days-left" style={{color: '#34c471'}}>
                                            Geo data
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="project-box-wrapper">
                                <div className="project-box" style={{backgroundColor: "#feff43"}}>
                                    <div className="project-box-header">

                                    </div>
                                    <div className="project-box-content-header">
                                        <p className="box-content-header">{timezone}</p>
                                        <p className="box-content-subheader">timezone</p>
                                    </div>
                                    <div className="project-box-content-header">
                                        <p className="box-content-header">{utcOffset}</p>
                                        <p className="box-content-subheader">utc offset</p>
                                    </div>

                                    <div className="project-box-footer">
                                        <div className="participants">

                                        </div>
                                        <div className="days-left" style={{color: '#ff0010'}}>
                                            Timezone data
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="project-box-wrapper">
                                <div className="project-box" style={{backgroundColor: "#9affa3"}}>
                                    <div className="project-box-header">

                                    </div>
                                    <div className="project-box-content-header">
                                        <p className="box-content-header">{countryCallingCode}</p>
                                        <p className="box-content-subheader">country calling code</p>
                                    </div>
                                    <div className="project-box-content-header">
                                        <p className="box-content-header">{languages}</p>
                                        <p className="box-content-subheader">languages</p>
                                    </div>

                                    <div className="project-box-footer">
                                        <div className="participants">

                                        </div>
                                        <div className="days-left" style={{color: '#0cff00'}}>
                                            Languages data
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="project-box-wrapper">
                                <div className="project-box" style={{backgroundColor: "#ff7463"}}>
                                    <div className="project-box-header">

                                    </div>
                                    <div className="project-box-content-header">
                                        <p className="box-content-header">{asn}</p>
                                        <p className="box-content-subheader">asn</p>
                                    </div>
                                    <div className="project-box-content-header">
                                        <p className="box-content-header">{org}</p>
                                        <p className="box-content-subheader">org</p>
                                    </div>

                                    <div className="project-box-footer">
                                        <div className="participants">

                                        </div>
                                        <div className="days-left" style={{color: '#ffffff'}}>
                                            asn and org
                                        </div>
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