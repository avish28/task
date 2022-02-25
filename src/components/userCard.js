import './userCard.css';
import { useState } from 'react';

const UserCard = ({
    user
}) => {
    const [isHidden, setIsHidden] = useState(true);
    return (
        <div className="user-card">
            <div className="user-card-internal">
                <div className="user-card-left">
                    <div className="user-card-each-element">
                        <b>Name: </b>{user.name}
                    </div>
                    <div className="user-card-each-element">
                        <b>Qualification: </b>{user.qualification}
                    </div>
                    <div className="user-card-each-element">
                        <b>Experience: </b>{user.experience}
                    </div>
                </div>
                <i class="fa fa-info-circle" aria-hidden="true" onMouseOver={() => setIsHidden(false)} onMouseLeave={() => setIsHidden(true)}></i>
            </div>
            {!isHidden && <div className="user-hover-info">
                <div className="user-hover-info-image-container">
                    <img src={user.image} alt="image" />
                </div>
                <div className="user-hover-info-contact">
                    {user.contact}
                </div>
            </div>}
        </div>
    );
}

export default UserCard;