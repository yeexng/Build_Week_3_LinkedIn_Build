import EditSection from "./EditSection";
import PeopleAlsoViewed from "./PeopleAlsoViewed";
import PeopleYouMayKnow from "./PeopleYouMayKnow";
import PeopleAlsoFollow from "./PeopleAlsoFollow";
import '../styles/layout.css'

const RightSide = () => {
    return (
        <>
            <EditSection></EditSection>
            <PeopleAlsoViewed></PeopleAlsoViewed>
            <PeopleYouMayKnow></PeopleYouMayKnow>
            <PeopleAlsoFollow></PeopleAlsoFollow>
        </>
    )
}

export default RightSide