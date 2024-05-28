import { JoinOurTeam } from "@/components/join-our-team/join-our-team";
import { KnowOurTeam } from "@/components/know-our-team/know-our-team";
import { ListOfAuthors } from "@/components/list-of-authors/list-of-authors";
import { MissionVision } from "@/components/mission-vision/mission-vision";

export default function Page() {
  return (
    <>
      <MissionVision />
      <KnowOurTeam />
      <ListOfAuthors />
      <JoinOurTeam />
    </>
  );
}
