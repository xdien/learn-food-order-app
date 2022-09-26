
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/M%E1%BA%B7t_ti%E1%BB%81n_ch%C3%B9a_H%E1%BB%99i_Linh.jpg/1920px-M%E1%BA%B7t_ti%E1%BB%81n_ch%C3%B9a_H%E1%BB%99i_Linh.jpg",
    address: "Can Tho",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/M%E1%BA%B7t_ti%E1%BB%81n_ch%C3%B9a_H%E1%BB%99i_Linh.jpg/1920px-M%E1%BA%B7t_ti%E1%BB%81n_ch%C3%B9a_H%E1%BB%99i_Linh.jpg",
    address: "Vinh Long",
    description: "This is a second meetup",
  },
];

function HomePage(props) {
    
  return (
      <MeetupList meetups={props.meetups} />
  );
}


export async function getStaticProps(){
    //Ma nay se duoc thuc thi tren server 
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    }
}
export default HomePage;
