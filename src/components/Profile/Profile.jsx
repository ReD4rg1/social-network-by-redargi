import React from "react";
import backArt from '../../assets/img/backgroundArt.jpg'
import userArt from '../../assets/img/avatar.jpg'
import styles from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const Profile = (props) => {

    if (!props.profileData) {
        return <></>
    }

    let name = ' Name';
    if (props.profileData.fullName !== null) {
        name = ' ' + props.profileData.fullName
    }

    let aboutMe = ' About Me';
    if (props.profileData.aboutMe !== null) {
        aboutMe = ' ' + props.profileData.aboutMe
    }

    let webSite = ' Web Site';
    if (props.profileData.contacts.website !== null) {
        webSite = ' ' + props.profileData.contacts.website
    }

    let lookingForAJob;
    if (props.profileData.lookingForAJob === true) {
        lookingForAJob = ' Yes'
    } else {
        lookingForAJob = ' No'
    }

    let lookingForAJobDescription = ' Description';
    if (props.profileData.lookingForAJobDescription !== null) {
        lookingForAJobDescription = ' ' + props.profileData.lookingForAJobDescription
    }

    let smallPhoto = userArt;
    if (props.profileData.photos.small !== null) {
        smallPhoto = props.profileData.photos.small
    }

    let largePhoto = backArt;
    if (props.profileData.photos.large !== null) {
        largePhoto = props.profileData.photos.large
    }

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img src={largePhoto} alt="#"/>
            </div>
            <div className={styles.otherContainer}>
                <div className={styles.userInfo}>
                    <div className={styles.userInfoContainer}>
                        <img src={smallPhoto} alt="#"/>
                        <div className={styles.info}>
                            <div className={styles.infoTitle}>
                                {name.toUpperCase()}
                            </div>
                            <div className={styles.infoText}>
                                <div>About Me:
                                    <span>{aboutMe}</span>
                                </div>
                                <div>Looking For a Job:
                                    <span>{lookingForAJob}</span>
                                </div>
                                <div>Description:
                                    <span>{lookingForAJobDescription}</span>
                                </div>
                                <div>Web-site:
                                    <span>{webSite}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ProfileStatus status={props.profileStatus}
                                   updateStatus={props.updateStatus}
                    />
                </div>
                <div className={styles.posts}>
                    <MyPostsContainer/>
                </div>
            </div>
        </div>
    )
}

export default Profile