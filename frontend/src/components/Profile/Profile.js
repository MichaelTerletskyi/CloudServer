import React, {useState} from "react";
import "./style.css";

import defaultUserIcon from "./assets/default user icon.png";

export const Profile = () => {
    const [user] = useState(localStorage.getItem("user"));
    const [ipDetails] = useState(sessionStorage.getItem("ipDetails"));

    const [usedMemory] = useState(JSON.parse(user).user.sizeOfAllUserFilesInBytes);
    const [maxUsageMemory] = useState(JSON.parse(user).user.maxUsageMemory);
    const [ratioOfUsedToAvailableMemory] = useState((usedMemory / maxUsageMemory * 100));
    const [amountOfFiles] = useState(JSON.parse(user).user.amountOfFiles);

    const [userDisplaySizeOfAllUserFilesInBytes] = useState(JSON.parse(user).user.displaySizeOfAllUserFilesInBytes);
    const [userDisplayMemoryUsageRemaining] = useState(JSON.parse(user).user.displayMemoryUsageRemaining);

    const progressBarColor = (ratioOfUsedToAvailableMemory) => {
        if (ratioOfUsedToAvailableMemory < 33) return "progress-bar bg-success";
        if (ratioOfUsedToAvailableMemory >= 33 && ratioOfUsedToAvailableMemory < 66) return "progress-bar bg-warning";
        return "progress-bar bg-danger";
    };

    return (
        <>
            <body className="profile-body">

            <div className="container">
                <div className="main-body">
                    <div className="row">

                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">

                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src={defaultUserIcon} alt="Admin" className="rounded-circle p-1 bg-dark"
                                             width="110"/>
                                        <div className="mt-3">
                                            <h4>{JSON.parse(user).username}</h4>
                                            <p className="text-secondary mb-1">User</p>
                                            <p className="text-muted font-size-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                     className="feather feather-globe me-2 icon-inline">
                                                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
                                                </svg>
                                               City TODO, Country TODO
                                            </p>
                                            <button className="btn btn-outline-dark">Upload Profile Icon</button>
                                        </div>
                                    </div>

                                    <hr className="my-4"/>
                                    <ul className="list-group list-group-flush">

                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                     className="feather feather-globe me-2 icon-inline">
                                                    <path d="M5.47 5.19L2 13v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5l-3.47-7.81A2 2 0 0 0 16.7 4H7.3a2 2 0 0 0-1.83 1.19z"/>
                                                </svg>
                                                Email
                                            </h6>
                                            <span className="text-secondary">{JSON.parse(user).email}</span>
                                        </li>

                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                     className="feather feather-globe me-2 icon-inline">
                                                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                                                </svg>
                                                Files
                                            </h6>
                                            <span className="text-secondary">{amountOfFiles}</span>
                                        </li>

                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                     className="feather feather-globe me-2 icon-inline">
                                                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
                                                </svg>
                                                Memory Remaining
                                            </h6>
                                            <span className="text-secondary">{userDisplayMemoryUsageRemaining}</span>
                                        </li>

                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                     className="feather feather-globe me-2 icon-inline">
                                                    <circle cx="12" cy="12" r="10"/>
                                                    <line x1="2" y1="12" x2="22" y2="12"/>
                                                    <path
                                                        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                                                </svg>
                                                IP
                                            </h6>
                                            <span className="text-secondary">IP TODO</span>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Username</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="text" className="form-control"
                                                   value={JSON.parse(user).username}/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="text" className="form-control" value={JSON.parse(user).email}/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-3"/>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="button" className="btn btn-outline-dark px-5"
                                                   value="Save Changes"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="d-flex align-items-center mb-3">Profile Stats</h5>

                                            <p className={"p-profile-usage-memory-title"}>Usage Memory
                                                Space {userDisplaySizeOfAllUserFilesInBytes} of {userDisplayMemoryUsageRemaining}</p>
                                            <div className="progress mb-3">
                                                <div
                                                    className={progressBarColor(ratioOfUsedToAvailableMemory)}
                                                    role="progressbar"
                                                    style={{width: ratioOfUsedToAvailableMemory + '%'}}
                                                    aria-valuenow={ratioOfUsedToAvailableMemory.toString()}
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p>{JSON.stringify(JSON.parse(user).user)}</p>
                            <p>___</p>
                            <p>{JSON.stringify(JSON.parse(ipDetails))}</p>

                        </div>
                    </div>
                </div>
            </div>
            </body>
        </>
    )
};