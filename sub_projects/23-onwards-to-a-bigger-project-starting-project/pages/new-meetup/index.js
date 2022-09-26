import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const router = useRouter();
  async function addMeetupHanlder(data) {
    console.log(data);
    const reponse = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "aplication/json" },
    });
    if (reponse.ok) {
        router.push("/");
    }
  }
  return <NewMeetupForm onAddMeetup={addMeetupHanlder} />;
}

export default NewMeetupPage;
