import UserCard from '../components/userCard';
import './schedule.css';

const Schedule = () => {
    const users = [{
        name: 'abc',
        qualification: 'abc',
        experience: '1 y',
        image: 'https://images.unsplash.com/photo-1567191149920-1d5e35132b68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        contact: 'a@a.com'
    },
    {
        name: 'bcd',
        qualification: 'bcd',
        experience: '1 y',
        image: 'https://images.unsplash.com/photo-1567191149920-1d5e35132b68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        contact: 'a@a.com'
    },
    {
        name: 'cde',
        qualification: 'cde',
        experience: '1 y',
        image: 'https://images.unsplash.com/photo-1567191149920-1d5e35132b68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        contact: 'a@a.com'
    }, {
        name: 'def',
        qualification: 'def',
        experience: '1 y',
        image: 'https://images.unsplash.com/photo-1567191149920-1d5e35132b68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        contact: 'a@a.com'
    }, {
        name: 'efg',
        qualification: 'efg',
        experience: '1 y',
        image: 'https://images.unsplash.com/photo-1567191149920-1d5e35132b68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        contact: 'a@a.com'
    }, {
        name: 'fgh',
        qualification: 'fgh',
        experience: '1 y',
        image: 'https://images.unsplash.com/photo-1567191149920-1d5e35132b68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        contact: 'a@a.com'
    },
    {
        name: 'ghi',
        qualification: 'ghi',
        experience: '1 y',
        image: 'https://images.unsplash.com/photo-1567191149920-1d5e35132b68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        contact: 'a@a.com'
    }]
    return (
        <div className="schedule-container">
            <div className="schedule">
                <div className="scheduled">
                    <div className="scheduled-heading">Scheduled</div>
                    <div className="scheduled-body">
                        {users.map((each) => {
                            return <UserCard user={each} />
                        })}
                    </div>
                </div>
                <div className="unscheduled">
                    <div className="unscheduled-heading">Unscheduled</div>
                    <div className="unscheduled-body">
                        {users.map((each) => {
                            return <UserCard user={each} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Schedule;