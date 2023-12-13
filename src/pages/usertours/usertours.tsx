import React, { useContext, type FC } from 'react'
import AuthContext from '../../context/AuthContext'
import { getEvents } from '../../hooks/getEvents'
import { Card } from '../../components/cardEvent'
import { events_imgs } from '../../data'
import { getCategories } from '../../hooks/getCategories'
import { getUserTours } from '../../hooks/getUserTours'

const UserTours: FC = () => {
    const { auth } = useContext(AuthContext);
    const toursInfo = auth && getUserTours();
    const allEvents = getEvents();
    const categories = getCategories();
    if (!(toursInfo && categories)) return <div>Нет событий</div>

    const userEvents = toursInfo.map((id) => allEvents?.find((event) => event.id == id));  
    const listEvents = userEvents.map((event) => event &&
        <div className="col" key={event.id}>
            <Card
                signed={true}
                id={String(event.id)}
                name={event.name}
                tags={categories.map(
                    category => {
                        if (category.id == event.category_id)
                            return category.name
                    })}
                img={events_imgs[event.id]}
                description={event.description}
                start_date={event.date_start}
                end_date={event.date_end}
            />
        </div>);
    return (
        <div className="grid mx-auto w-fit grid-cols-1 md:grid-cols-2 lg:grid-cols-3 self-center gap-10">
            {listEvents}
        </div>
    );
}

export default UserTours