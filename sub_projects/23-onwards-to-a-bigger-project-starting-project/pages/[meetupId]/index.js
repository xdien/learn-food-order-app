import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props){
    return <MeetupDetail image={props.meetupData.image} title={props.meetupData.title}/>
}

export async function getStaticPaths(){
    return {
        fallback: false,
        paths: [
            {params:{meetupId:'m1'}},
            {params:{meetupId:'m2'}},
        ]
    }
}

export async function getStaticProps(context){
    const meetupId = context.params.meetupId;
    console.log(meetupId);
    return {
        props: {
            meetupData: {
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/M%E1%BA%B7t_ti%E1%BB%81n_ch%C3%B9a_H%E1%BB%99i_Linh.jpg/1920px-M%E1%BA%B7t_ti%E1%BB%81n_ch%C3%B9a_H%E1%BB%99i_Linh.jpg",
                title: "This is A First Meetup",
                id: meetupId
            }
        }
    }
}

export default MeetupDetails;