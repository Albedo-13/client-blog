import { JoinOurTeam } from "@/components/join-our-team/join-our-team";
import { ListOfAuthors } from "@/components/list-of-authors/list-of-authors";
import { MissionVision } from "@/components/mission-vision/mission-vision";

export default function Page() {
  return (
    <>
      <MissionVision />
      {/* TODO: remove line */}
      <div style={{ height: "200px", backgroundColor: "gray" }}></div>
      <ListOfAuthors />
      <JoinOurTeam />
    </>
  );
}
